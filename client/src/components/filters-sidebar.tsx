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
    // Convert 'all' values to undefined for proper filtering
    const filterValue = value === 'all' ? undefined : value;
    const newFilters = { ...localFilters, [key]: filterValue, page: 1 };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      industry: undefined,
      city: undefined,
      minRating: undefined,
      companyName: undefined,
      postCode: undefined,
      phone: undefined,
      sortBy: 'featured' as any,
      page: 1,
      limit: 20
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <aside className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:sticky lg:top-4 mb-6 lg:mb-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">{filterTitle}</h3>
          <Button variant="outline" size="sm" onClick={clearFilters} className="w-full sm:w-auto">
            Clear All
          </Button>
        </div>

        <div className="space-y-4">
          {/* Industry Filter */}
          <div>
            <Label className="block text-sm font-medium mb-2">Industry</Label>
            <Select
              value={localFilters.industry || 'all'}
              onValueChange={(value) => handleFilterChange('industry', value)}
            >
              <SelectTrigger data-testid="industry-filter">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
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
              value={localFilters.city || 'all'}
              onValueChange={(value) => handleFilterChange('city', value)}
            >
              <SelectTrigger data-testid="city-filter">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Post Code Filter */}
          <div>
            <Label className="block text-sm font-medium mb-2">Post Code</Label>
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

          {/* Phone Number Filter */}
          <div>
            <Label className="block text-sm font-medium mb-2">Phone Number</Label>
            <Input
              type="text"
              placeholder="Search by phone number"
              value={localFilters.phone || ""}
              onChange={(e) => handleFilterChange('phone', e.target.value || undefined)}
              data-testid="phone-filter"
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