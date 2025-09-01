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
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 p-6 lg:sticky lg:top-4 mb-6 lg:mb-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
          <h3 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{filterTitle}</h3>
          <Button variant="outline" size="sm" onClick={clearFilters} className="w-full sm:w-auto hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-200">
            Clear All
          </Button>
        </div>

        <div className="space-y-5">
          {/* Industry Filter */}
          <div className="group">
            <Select
              value={localFilters.industry || 'all'}
              onValueChange={(value) => handleFilterChange('industry', value)}
            >
              <SelectTrigger data-testid="industry-filter" className="border-2 border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm">
                <SelectValue placeholder="🏢 All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">🏢 All Industries</SelectItem>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry === 'Plumber' ? '🔧' : industry === 'Electrician' ? '⚡' : industry === 'HVAC Technician' ? '🌡️' : '🏠'} {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* City Filter */}
          <div className="group">
            <Select
              value={localFilters.city || 'all'}
              onValueChange={(value) => handleFilterChange('city', value)}
            >
              <SelectTrigger data-testid="city-filter" className="border-2 border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm">
                <SelectValue placeholder="📍 All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">📍 All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    📍 {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Post Code Filter */}
          <div className="group">
            <Input
              type="text"
              placeholder="📮 Canadian postal code"
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
              className="border-2 border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
            />
          </div>

          {/* Company Name Filter */}
          <div className="group">
            <Input
              id="companyName"
              value={localFilters.companyName || ''}
              onChange={(e) => handleFilterChange('companyName', e.target.value)}
              placeholder="🏢 Search by company name"
              data-testid="company-name-filter"
              className="border-2 border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
            />
          </div>

          {/* Phone Number Filter */}
          <div className="group">
            <Input
              type="text"
              placeholder="📞 Search by phone number"
              value={localFilters.phone || ""}
              onChange={(e) => handleFilterChange('phone', e.target.value || undefined)}
              data-testid="phone-filter"
              className="border-2 border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
            />
          </div>

          {/* Rating Filter */}
          <div className="group">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">⭐ Minimum Rating</span>
                <span className="text-lg font-bold text-yellow-600">{(localFilters.minRating || 0).toFixed(1)}</span>
              </div>
              <Slider
                value={[localFilters.minRating || 0]}
                onValueChange={([value]) => handleFilterChange('minRating', value)}
                max={5}
                min={0}
                step={0.1}
                className="w-full"
                data-testid="rating-filter"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0⭐</span>
                <span>5⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}