import { useState, useEffect } from "react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

const ontarioCities = [
  "Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Windsor", "Kitchener", "Richmond Hill", "Burlington", "Oakville", "Oshawa", "Barrie", "St. Catharines", "Cambridge", "Waterloo", "Guelph", "Kingston"
];

const getRandomCity = () => ontarioCities[Math.floor(Math.random() * ontarioCities.length)];

export default function EnhancedSearchBar() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const [searchPlaceholders, setSearchPlaceholders] = useState([
    `Find a plumber in ${getRandomCity()}...`,
    `Search for electricians in ${getRandomCity()}...`, 
    `Looking for HVAC service in ${getRandomCity()}?`,
    `Find home repair experts in ${getRandomCity()}...`,
    `Search landscapers in ${getRandomCity()}...`,
    `Need a handyman in ${getRandomCity()}?`,
  ]);

  // Load custom placeholders from settings
  useEffect(() => {
    const loadSettings = () => {
      const savedSettings = localStorage.getItem('homejobspro-settings');
      if (savedSettings) {
        try {
          const settings = JSON.parse(savedSettings);
          if (settings.searchPlaceholders && Array.isArray(settings.searchPlaceholders)) {
            setSearchPlaceholders(settings.searchPlaceholders);
          }
        } catch (error) {
          console.error('Error loading settings:', error);
        }
      }
    };

    loadSettings();
    window.addEventListener('settingsChanged', loadSettings);
    return () => window.removeEventListener('settingsChanged', loadSettings);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaceholderVisible(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
        setIsPlaceholderVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [searchPlaceholders.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setLocation(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      setLocation("/search");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-2xl sm:rounded-full shadow-xl overflow-hidden">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 sm:pl-14 pr-4 py-4 sm:py-6 text-base sm:text-lg border-none bg-transparent focus:ring-0 focus:outline-none"
            data-testid="search-input"
          />
          <div 
            className={`absolute left-12 sm:left-14 top-1/2 transform -translate-y-1/2 text-base sm:text-lg text-black pointer-events-none transition-opacity duration-300 ${
              query || !isPlaceholderVisible ? 'opacity-0' : 'opacity-100'
            }`}
            data-testid="search-placeholder"
          >
            {searchPlaceholders[placeholderIndex]}
          </div>
        </div>
        <Button
          type="submit"
          className="bg-orange-primary hover:bg-orange-primary-600 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-full m-1 w-full sm:w-auto flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
          data-testid="search-button"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">Search</span>
        </Button>
      </div>
    </form>
  );
}