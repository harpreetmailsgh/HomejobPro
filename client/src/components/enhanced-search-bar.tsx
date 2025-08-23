import { useState, useEffect } from "react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

const searchPlaceholders = [
  "Find a plumber near you...",
  "Search for electricians...", 
  "Looking for HVAC service?",
  "Find home repair experts...",
  "Search landscapers...",
  "Need a handyman?",
];

export default function EnhancedSearchBar() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaceholderVisible(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
        setIsPlaceholderVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="relative flex items-center bg-white rounded-full shadow-xl overflow-hidden">
        <div className="relative flex-1">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-6 text-lg border-none bg-transparent focus:ring-0 focus:outline-none"
            data-testid="search-input"
          />
          <div 
            className={`absolute left-14 top-1/2 transform -translate-y-1/2 text-lg text-gray-400 pointer-events-none transition-opacity duration-300 ${
              query || !isPlaceholderVisible ? 'opacity-0' : 'opacity-100'
            }`}
            data-testid="search-placeholder"
          >
            {searchPlaceholders[placeholderIndex]}
          </div>
        </div>
        <Button
          type="submit"
          className="bg-orange-primary hover:bg-orange-primary-600 text-white px-8 py-6 rounded-full mr-2 flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
          data-testid="search-button"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">Search</span>
        </Button>
      </div>
    </form>
  );
}