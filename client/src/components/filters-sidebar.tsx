import { useState } from "react";
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

  const handleApplyFilters = () => {
    onFiltersChange(localFilters);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setLocalFilters(prev => ({ ...prev, [key]: value, page: 1 }));
  };

  return (
    <aside className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6 filter-sidebar">
        <h3 className="text-xl font-semibold text-gray-800 mb-6" data-testid="filters-title">
          Filters
        </h3>
        
        {/* Industry Filter */}
        <div className="mb-6">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type
          </Label>
          <Select 
            value={localFilters.industry || ""} 
            onValueChange={(value) => handleFilterChange('industry', value || undefined)}
          >
            <SelectTrigger data-testid="industry-filter">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Services</SelectItem>
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
            City
          </Label>
          <Select 
            value={localFilters.city || ""} 
            onValueChange={(value) => handleFilterChange('city', value || undefined)}
          >
            <SelectTrigger data-testid="city-filter">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city} data-testid={`city-${city}`}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Rating Filter */}
        <div className="mb-6">
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating: {localFilters.minRating?.toFixed(1) || '1.0'}
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
        
        <Button 
          onClick={handleApplyFilters}
          className="w-full bg-blue-grey hover:bg-blue-grey-700 text-white transition-colors"
          data-testid="apply-filters-button"
        >
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}
