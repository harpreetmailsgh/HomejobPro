import { useState } from "react";
import { useLocation } from "wouter";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setLocation(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-2 flex">
      <Input
        type="text"
        placeholder="Search for a service (e.g., Plumber, Electrician...)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-6 py-4 text-gray-800 text-lg border-0 focus:ring-0 rounded-l-lg"
        data-testid="search-input"
      />
      <Button
        type="submit"
        className="bg-orange-primary hover:bg-orange-primary-600 text-white px-8 py-4 rounded-r-lg transition-colors font-semibold text-lg"
        data-testid="search-button"
      >
        <Search className="w-5 h-5 mr-2" />
        Search
      </Button>
    </form>
  );
}
