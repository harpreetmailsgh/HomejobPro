import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceCard from "@/components/service-card";
import FiltersSidebar from "@/components/filters-sidebar";
import Pagination from "@/components/pagination";
import { SearchFilters, SearchResults } from "@shared/schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

export default function Search() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  
  const [filters, setFilters] = useState<SearchFilters>({
    query: urlParams.get('query') || undefined,
    industry: urlParams.get('industry') || undefined,
    city: urlParams.get('city') || undefined,
    minRating: urlParams.get('minRating') ? parseFloat(urlParams.get('minRating')!) : undefined,
    companyName: urlParams.get('companyName') || undefined,
    sortBy: (urlParams.get('sortBy') as any) || 'rating_desc',
    page: parseInt(urlParams.get('page') || '1'),
    limit: 20
  });

  const { data: searchResults, isLoading, error } = useQuery<SearchResults>({
    queryKey: ['/api/search', filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          params.append(key, value.toString());
        }
      });
      
      const response = await fetch(`/api/search?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      return response.json();
    },
  });

  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    
    // Update URL
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== '' && key !== 'limit') {
        params.append(key, value.toString());
      }
    });
    window.history.pushState({}, '', `/search?${params}`);
  };

  const handleSortChange = (sortBy: string) => {
    handleFiltersChange({ ...filters, sortBy: sortBy as any, page: 1 });
  };

  const handlePageChange = (page: number) => {
    handleFiltersChange({ ...filters, page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Error Loading Results</h2>
            <p className="text-gray-600">Sorry, we couldn't load the search results. Please try again.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <FiltersSidebar
            filters={filters}
            onFiltersChange={handleFiltersChange}
            industries={searchResults?.industries || []}
            cities={searchResults?.cities || []}
          />
          
          {/* Results Grid */}
          <main className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800" data-testid="results-title">
                Search Results
              </h2>
              <div className="flex items-center space-x-4">
                <Select value={filters.sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-48" data-testid="sort-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating_desc">Rating (High to Low)</SelectItem>
                    <SelectItem value="rating_asc">Rating (Low to High)</SelectItem>
                    <SelectItem value="name_asc">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
                
                {searchResults && (
                  <span className="text-gray-600" data-testid="results-count">
                    {searchResults.total} results found
                  </span>
                )}
              </div>
            </div>
            
            {/* Loading State */}
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <Skeleton className="w-full h-48" />
                    <div className="p-6 space-y-4">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex space-x-2">
                        <Skeleton className="h-10 flex-1" />
                        <Skeleton className="h-10 flex-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Results Grid */}
            {searchResults && !isLoading && (
              <>
                {searchResults.services.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No Results Found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
                  </div>
                ) : (
                  <div className="results-grid mb-8" data-testid="results-grid">
                    {searchResults.services.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                )}
                
                {/* Pagination */}
                <Pagination
                  currentPage={searchResults.page}
                  totalPages={searchResults.totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </main>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
