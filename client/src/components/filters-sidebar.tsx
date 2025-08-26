import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SearchFilters } from "@shared/schema";

interface FiltersSidebarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  industries: string[];
  cities: string[];
}

export default function FiltersSidebar({ filters, onFiltersChange, industries, cities }: FiltersSidebarProps) {
  const [localFilters, setLocalFilters] = useState(filters);
  const [filterTitle, setFilterTitle] = useState("Filters");

  const loadFilterTitle = () => {
    const searchSettings = localStorage.getItem('search-results-settings');
    if (searchSettings) {
      try {
        const settings = JSON.parse(searchSettings);
        setFilterTitle(settings.filterSectionTitle || "Filters");
      } catch (error) {
        console.error('Error loading search settings:', error);
      }
    }
  };

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  useEffect(() => {
    // Load filter title from search settings
    loadFilterTitle();

    // Listen for settings changes
    const handleSettingsChange = (event: CustomEvent) => {
      loadFilterTitle();
    };

    window.addEventListener('searchSettingsChanged', handleSettingsChange as EventListener);
    return () => {
      window.removeEventListener('searchSettingsChanged', handleSettingsChange as EventListener);
    };
  }, []);

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...localFilters, [key]: value, page: 1 };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      query: undefined,
      industry: undefined,
      city: undefined,
      minRating: undefined,
      companyName: undefined,
      sortBy: 'rating_desc' as any,
      page: 1,
      limit: 20
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <aside className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{filterTitle}</h3>
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
        
        <div className="space-y-4">
          {/* Search Query */}
          <div>
            <Label htmlFor="query" className="block text-sm font-medium mb-2">
              Search Keywords
            </Label>
            <Input
              id="query"
              value={localFilters.query || ''}
              onChange={(e) => handleFilterChange('query', e.target.value)}
              placeholder="Search for services..."
              data-testid="query-filter"
            />
          </div>

          {/* Industry Filter */}
          <div>
            <Label className="block text-sm font-medium mb-2">Industry</Label>
            <Select 
              value={localFilters.industry || ''} 
              onValueChange={(value) => handleFilterChange('industry', value || undefined)}
            >
              <SelectTrigger data-testid="industry-filter">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Industries</SelectItem>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* City Filter */}
          <div>
            <Label className="block text-sm font-medium mb-2">City</Label>
            <Select 
              value={localFilters.city || ''} 
              onValueChange={(value) => handleFilterChange('city', value || undefined)}
            >
              <SelectTrigger data-testid="city-filter">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Company Name Filter */}
          <div>
            <Label htmlFor="companyName" className="block text-sm font-medium mb-2">
              Company Name
            </Label>
            <Input
              id="companyName"
              value={localFilters.companyName || ''}
              onChange={(e) => handleFilterChange('companyName', e.target.value)}
              placeholder="Search by company name..."
              data-testid="company-name-filter"
            />
          </div>

          {/* Rating Filter */}
          <div>
            <Label className="block text-sm font-medium mb-2">
              Minimum Rating: {localFilters.minRating || 0}
            </Label>
            <Slider
              value={[localFilters.minRating || 0]}
              onValueChange={([value]) => handleFilterChange('minRating', value)}
              max={5}
              min={0}
              step={0.1}
              className="w-full"
              data-testid="rating-filter"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...localFilters, [key]: value, page: 1 };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters); // Apply filters immediately
  };

  return (
    <aside className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6 filter-sidebar">
        <h3 className="text-xl font-semibold text-gray-800 mb-6" data-testid="filters-title">
          {filterTitle}
        </h3>
        
        {/* Industry Filter */}
        <div className="mb-6">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type
          </Label>
          <Select 
            value={localFilters.industry || "all"} 
            onValueChange={(value) => handleFilterChange('industry', value === 'all' ? undefined : value)}
          >
            <SelectTrigger data-testid="industry-filter">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry} data-testid={`industry-${industry}`}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* City Filter */}
        <div className="mb-6">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Service City
          </Label>
          <Select 
            value={localFilters.city || "all"} 
            onValueChange={(value) => handleFilterChange('city', value === 'all' ? undefined : value)}
          >
            <SelectTrigger data-testid="city-filter">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city} data-testid={`city-${city}`}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Post Code Filter */}
        <div className="mb-6">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Post Code
          </Label>
          <Input
            type="text"
            placeholder="Enter Canadian postal code"
            value={localFilters.postCode || ""}
            onChange={(e) => {
              const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
              if (value.length <= 6) {
                const formatted = value.replace(/([A-Z]\d[A-Z])(\d[A-Z]\d)/, '$1 $2');
                handleFilterChange('postCode', formatted || undefined);
              }
            }}
            pattern="[A-Z]\d[A-Z] ?\d[A-Z]\d"
            data-testid="postcode-filter"
          />
        </div>
        
        {/* Rating Filter */}
        <div className="mb-6">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating: {(localFilters.minRating || 1).toFixed(1)}
          </Label>
          <Slider
            value={[localFilters.minRating || 1]}
            onValueChange={(value) => handleFilterChange('minRating', value[0])}
            min={1}
            max={5}
            step={0.1}
            className="w-full"
            data-testid="rating-slider"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>1.0</span>
            <span>5.0</span>
          </div>
        </div>
        
        {/* Company Name Search */}
        <div className="mb-6">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </Label>
          <Input
            type="text"
            placeholder="Search by company name"
            value={localFilters.companyName || ""}
            onChange={(e) => handleFilterChange('companyName', e.target.value || undefined)}
            data-testid="company-name-filter"
          />
        </div>

        {/* Phone Number Search */}
        <div className="mb-6">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </Label>
          <Input
            type="text"
            placeholder="Search by phone number"
            value={localFilters.phone || ""}
            onChange={(e) => handleFilterChange('phone', e.target.value || undefined)}
            data-testid="phone-filter"
          />
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-4">
          Filters are applied automatically as you make changes
        </div>
      </div>
    </aside>
  );
}
