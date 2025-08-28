import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceCard from "@/components/service-card";
import ServiceListItem from "../components/service-list-item";
import FiltersSidebar from "@/components/filters-sidebar";
import Pagination from "@/components/pagination";
import { SearchFilters, SearchResults } from "@shared/schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Grid3X3, List } from "lucide-react";
import { useSEO } from "../hooks/use-seo";

export default function Search() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  
  // Search page content states
  const [pageTitle, setPageTitle] = useState("Search Results");
  const [pageSubtitle, setPageSubtitle] = useState("Find the perfect professional for your home service needs");
  const [resultsFoundText, setResultsFoundText] = useState("professional(s) found");
  const [noResultsText, setNoResultsText] = useState("No professionals found matching your criteria. Try adjusting your filters.");
  const [filterSectionTitle, setFilterSectionTitle] = useState("Filters");
  
  // Service type images and descriptions
  const [serviceTypeImages, setServiceTypeImages] = useState<{[key: string]: string}>({});
  const [serviceTypeDescriptions, setServiceTypeDescriptions] = useState<{[key: string]: string}>({});

  const loadSearchSettings = () => {
    const searchSettings = localStorage.getItem('search-results-settings');
    if (searchSettings) {
      try {
        const settings = JSON.parse(searchSettings);
        setPageTitle(settings.searchPageTitle || "Search Results");
        setPageSubtitle(settings.searchPageSubtitle || "Find the perfect professional for your home service needs");
        setResultsFoundText(settings.resultsFoundText || "professional(s) found");
        setNoResultsText(settings.noResultsText || "No professionals found matching your criteria. Try adjusting your filters.");
        setFilterSectionTitle(settings.filterSectionTitle || "Filters");
        
        // Update service type images and descriptions
        const images = {
          'Plumber': settings.plumberImage || '',
          'Electrician': settings.electricianImage || '',
          'HVAC Technician': settings.hvacImage || ''
        };
        setServiceTypeImages(images);
        
        const descriptions = {
          'Plumber': settings.plumberDescription || 'Professional plumbing services for repairs, installations, and maintenance',
          'Electrician': settings.electricianDescription || 'Licensed electrical services for wiring, repairs, and installations',
          'HVAC Technician': settings.hvacDescription || 'Heating, ventilation, and air conditioning experts for your comfort needs'
        };
        setServiceTypeDescriptions(descriptions);
        
        // Update the global service type image mapping for ServiceCard component
        (window as any).getServiceTypeImage = (industry: string) => {
          return images[industry as keyof typeof images] || '';
        };
        
        // Update the global service type description mapping
        (window as any).getServiceTypeDescription = (industry: string) => {
          return descriptions[industry as keyof typeof descriptions] || '';
        };
        
      } catch (error) {
        console.error('Error loading search settings:', error);
      }
    }
  };

  useEffect(() => {
    // Load search settings on mount
    loadSearchSettings();

    // Listen for settings changes
    const handleSettingsChange = (event: CustomEvent) => {
      loadSearchSettings();
      // Force a re-render of service cards by updating the query
      window.dispatchEvent(new CustomEvent('serviceSettingsUpdated'));
    };

    window.addEventListener('searchSettingsChanged', handleSettingsChange as EventListener);
    return () => {
      window.removeEventListener('searchSettingsChanged', handleSettingsChange as EventListener);
    };
  }, []);
  
  const [filters, setFilters] = useState<SearchFilters>({
    query: urlParams.get('query') || undefined,
    industry: urlParams.get('industry') || undefined,
    city: urlParams.get('city') || undefined,
    minRating: urlParams.get('minRating') ? parseFloat(urlParams.get('minRating')!) : undefined,
    companyName: urlParams.get('companyName') || undefined,
    sortBy: (urlParams.get('sortBy') as any) || 'featured',
    page: parseInt(urlParams.get('page') || '1'),
    limit: 20
  });

  // Dynamic SEO based on search filters
  const generateSEOTitle = () => {
    const parts = [];
    if (filters.industry) parts.push(filters.industry + 's');
    if (filters.city) parts.push('in ' + filters.city);
    
    if (parts.length > 0) {
      return `Find ${parts.join(' ')} | Verified Local Professionals | Homejobspro.com`;
    }
    return "Search Home Service Professionals | Plumbers, Electricians, HVAC | Homejobspro.com";
  };

  const generateSEODescription = () => {
    const parts = [];
    if (filters.industry) parts.push(`trusted ${filters.industry.toLowerCase()}s`);
    if (filters.city) parts.push(`in ${filters.city}`);
    
    const base = "Find verified home service professionals";
    const specific = parts.length > 0 ? ` - ${parts.join(' ')}` : " including plumbers, electricians, and HVAC technicians";
    return `${base}${specific}. Read reviews, compare ratings, and book services today.`;
  };

  useSEO({
    title: generateSEOTitle(),
    description: generateSEODescription(),
    keywords: `${filters.industry || 'home services'} near me, local professionals, verified contractors, ${filters.city || ''} home repair`,
    canonical: `https://homejobspro.com/search${location.includes('?') ? location.substring(location.indexOf('?')) : ''}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SearchResultsPage",
      "name": generateSEOTitle(),
      "description": generateSEODescription(),
      "url": `https://homejobspro.com/search${location.includes('?') ? location.substring(location.indexOf('?')) : ''}`
    }
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
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800" data-testid="results-title">
                    {pageTitle}
                  </h2>
                  <p className="text-gray-600 mt-1" data-testid="results-subtitle">
                    {pageSubtitle}
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex items-center border rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="px-3 py-1"
                    data-testid="grid-view-button"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="px-3 py-1"
                    data-testid="list-view-button"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                
                <Select value={filters.sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-48" data-testid="sort-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="rating_desc">Rating (High to Low)</SelectItem>
                    <SelectItem value="rating_asc">Rating (Low to High)</SelectItem>
                    <SelectItem value="reviews_desc">Most Reviews</SelectItem>
                    <SelectItem value="name_asc">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
                
                {searchResults && (
                  <span className="text-gray-600" data-testid="results-count">
                    {searchResults.total} {resultsFoundText}
                  </span>
                )}
              </div>
            </div>
            
            {/* Loading State */}
            {isLoading && (
              <div className="results-grid mb-8">
                {Array.from({ length: 8 }).map((_, i) => (
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
                    <p className="text-gray-600">{noResultsText}</p>
                  </div>
                ) : (
                  <div className={viewMode === 'grid' ? "results-grid mb-8" : "space-y-4 mb-8"} data-testid="results-container">
                    {searchResults.services.map((service) => (
                      viewMode === 'grid' ? (
                        <ServiceCard key={service.id} service={service} />
                      ) : (
                        <ServiceListItem key={service.id} service={service} />
                      )
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
