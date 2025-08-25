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

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...localFilters, [key]: value, page: 1 };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters); // Apply filters immediately
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
