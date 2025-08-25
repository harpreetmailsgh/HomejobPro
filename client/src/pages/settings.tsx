import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Save, Upload, Eye } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [selectedPage, setSelectedPage] = useState("");
  
  // Home page specific states (loading from actual localStorage)
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [siteTitle, setSiteTitle] = useState("");
  const [rotatingServices, setRotatingServices] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [accentColor, setAccentColor] = useState("");

  const pages = [
    { value: "home", label: "Home Page" },
    { value: "search", label: "Search Page" },
    { value: "faq", label: "FAQ Page" },
    { value: "settings", label: "Settings Page" },
    { value: "not-found", label: "Not Found Page" }
  ];

  const loadCurrentHomeSettings = () => {
    // Load actual settings that the home page uses
    const savedSettings = localStorage.getItem('homejobspro-settings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        setHeroTitle(settings.heroTitle || "I am looking for");
        setHeroSubtitle(settings.heroSubtitle || "Find trusted professionals for all your home service needs");
        setSiteTitle(settings.siteTitle || "Homejobspro.com");
        setRotatingServices(Array.isArray(settings.rotatingServices) ? settings.rotatingServices.join(', ') : "Plumber, Electrician, HVAC Technician, Landscaper, Home Services");
        setBackgroundImage(settings.backgroundImage || "");
        setPrimaryColor(settings.primaryColor || "#607D8B");
        setAccentColor(settings.accentColor || "#FF5722");
      } catch (error) {
        console.error('Error loading settings:', error);
        // Set defaults if loading fails
        setDefaults();
      }
    } else {
      // Set defaults if no settings found
      setDefaults();
    }
  };

  const setDefaults = () => {
    setHeroTitle("I am looking for");
    setHeroSubtitle("Find trusted professionals for all your home service needs");
    setSiteTitle("Homejobspro.com");
    setRotatingServices("Plumber, Electrician, HVAC Technician, Landscaper, Home Services");
    setBackgroundImage("");
    setPrimaryColor("#607D8B");
    setAccentColor("#FF5722");
  };

  const handlePageChange = (value: string) => {
    setSelectedPage(value);
    if (value === "home") {
      loadCurrentHomeSettings();
    }
  };

  const handleSaveHomeChanges = () => {
    // Save using the correct format that the home page expects
    const settings = {
      heroTitle,
      heroSubtitle,
      siteTitle,
      rotatingServices: rotatingServices.split(',').map(s => s.trim()),
      backgroundImage,
      primaryColor,
      accentColor,
      // Keep other existing settings that might be there
      enableAnimations: true,
      rotationSpeed: 3000,
      fadeSpeed: 200,
      backgroundGradient: "gradient",
      cardsPerRow: "4",
      enableFilters: true,
      resultsPerPage: 20,
      heroAnimation: "swirl"
    };

    // Save to the correct localStorage key
    localStorage.setItem('homejobspro-settings', JSON.stringify(settings));
    
    // Apply CSS custom properties for real-time theme changes
    document.documentElement.style.setProperty('--blue-grey', primaryColor);
    document.documentElement.style.setProperty('--orange-primary', accentColor);
    
    // Update page title
    document.title = siteTitle;
    
    // Dispatch the correct event that the home page listens for
    window.dispatchEvent(new CustomEvent('settingsChanged', { detail: settings }));

    toast({
      title: "Home Page Updated!",
      description: "Your changes have been saved and applied. The home page should update immediately.",
    });
  };

  // Load home settings when component mounts
  useEffect(() => {
    if (selectedPage === "home") {
      loadCurrentHomeSettings();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="back-to-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Page Settings</h1>
          <p className="text-gray-600 mt-2">Select a page to customize its content, colors, and design</p>
        </div>

        {/* Page Selection Dropdown */}
        <div className="mb-8">
          <Label className="block text-sm font-medium mb-2">Select Page to Edit</Label>
          <Select value={selectedPage} onValueChange={handlePageChange}>
            <SelectTrigger className="w-full max-w-md" data-testid="page-selector">
              <SelectValue placeholder="Choose a page to customize..." />
            </SelectTrigger>
            <SelectContent>
              {pages.map((page) => (
                <SelectItem key={page.value} value={page.value}>
                  {page.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* HOME PAGE EDITOR */}
        {selectedPage === "home" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - What You're Editing */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Current Home Page Structure
              </h2>
              <div className="space-y-4 text-sm">
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <div className="font-semibold text-gray-800">🏠 Header Section</div>
                  <div className="text-gray-600">Site Title: <span className="font-mono bg-gray-100 px-1 rounded">{siteTitle}</span></div>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                  <div className="font-semibold text-gray-800">🎯 Hero Section (Main Banner)</div>
                  <div className="text-gray-600">Title: <span className="font-mono bg-gray-100 px-1 rounded">"{heroTitle}"</span></div>
                  <div className="text-gray-600">Rotating Services: <span className="font-mono bg-gray-100 px-1 rounded">{rotatingServices.split(',')[0]}...</span></div>
                  <div className="text-gray-600">Subtitle: <span className="font-mono bg-gray-100 px-1 rounded">"{heroSubtitle}"</span></div>
                  {backgroundImage && <div className="text-gray-600">Background Image: ✅ Set</div>}
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <div className="font-semibold text-gray-800">📊 Stats Section</div>
                  <div className="text-gray-600">"Trusted by Thousands" - 10,000+ customers, 15,000+ jobs, etc.</div>
                  <div className="text-xs text-gray-500">Note: This section has fixed content</div>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                  <div className="font-semibold text-gray-800">⭐ Featured Services</div>
                  <div className="text-gray-600">6 service cards: Emergency Plumbing, Electrical, HVAC, etc.</div>
                  <div className="text-xs text-gray-500">Note: This section has fixed content</div>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-cyan-500">
                  <div className="font-semibold text-gray-800">🔧 How It Works</div>
                  <div className="text-gray-600">4 steps: Search & Compare, Connect, Get Job Done, Enjoy</div>
                  <div className="text-xs text-gray-500">Note: This section has fixed content</div>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-gray-500">
                  <div className="font-semibold text-gray-800">🎨 Colors Used Throughout</div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{backgroundColor: primaryColor}}></div>
                    <span className="text-gray-600">Primary: {primaryColor}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-4 h-4 rounded" style={{backgroundColor: accentColor}}></div>
                    <span className="text-gray-600">Accent: {accentColor}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Edit Panel */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-xl font-semibold text-gray-800">Edit Home Page Content</h2>
                <p className="text-sm text-gray-600 mt-1">Changes will reflect immediately on the home page</p>
              </div>

              {/* Site Title */}
              <div>
                <Label className="block text-sm font-medium mb-2">🏠 Site Title (Header)</Label>
                <Input
                  value={siteTitle}
                  onChange={(e) => setSiteTitle(e.target.value)}
                  placeholder="Homejobspro.com"
                  data-testid="site-title-input"
                />
                <p className="text-xs text-gray-500 mt-1">Appears in header and browser tab</p>
              </div>

              {/* Hero Title */}
              <div>
                <Label className="block text-sm font-medium mb-2">🎯 Hero Main Title</Label>
                <Input
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  placeholder="I am looking for"
                  data-testid="hero-title-input"
                />
                <p className="text-xs text-gray-500 mt-1">Large text before rotating services</p>
              </div>

              {/* Rotating Services */}
              <div>
                <Label className="block text-sm font-medium mb-2">🔄 Rotating Services (Hero)</Label>
                <Textarea
                  value={rotatingServices}
                  onChange={(e) => setRotatingServices(e.target.value)}
                  placeholder="Plumber, Electrician, HVAC Technician, Landscaper, Home Services"
                  rows={3}
                  data-testid="rotating-services-input"
                />
                <p className="text-xs text-gray-500 mt-1">Separate with commas. These rotate every 3 seconds</p>
              </div>

              {/* Hero Subtitle */}
              <div>
                <Label className="block text-sm font-medium mb-2">📝 Hero Subtitle</Label>
                <Textarea
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  placeholder="Find trusted professionals for all your home service needs"
                  rows={2}
                  data-testid="hero-subtitle-input"
                />
                <p className="text-xs text-gray-500 mt-1">Text below the hero title</p>
              </div>

              {/* Background Image */}
              <div>
                <Label className="block text-sm font-medium mb-2">🖼️ Hero Background Image</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    value={backgroundImage}
                    onChange={(e) => setBackgroundImage(e.target.value)}
                    placeholder="https://example.com/hero-background.jpg"
                    className="flex-1"
                    data-testid="background-image-input"
                  />
                  <Button variant="outline" size="sm" data-testid="upload-image-button">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Optional: Full URL to background image for hero section</p>
              </div>

              {/* Colors */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">🎨 Primary Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-16 h-10 p-1"
                      data-testid="primary-color-picker"
                    />
                    <Input
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      placeholder="#607D8B"
                      className="flex-1"
                      data-testid="primary-color-input"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Used for buttons, hero background</p>
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">🔥 Accent Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-16 h-10 p-1"
                      data-testid="accent-color-picker"
                    />
                    <Input
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      placeholder="#FF5722"
                      className="flex-1"
                      data-testid="accent-color-input"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Used for rotating text, highlights</p>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-6 border-t border-gray-200">
                <Button
                  onClick={handleSaveHomeChanges}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  data-testid="save-home-changes-button"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save & Apply Changes
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* OTHER PAGES PLACEHOLDER */}
        {selectedPage && selectedPage !== "home" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Editing: {pages.find(p => p.value === selectedPage)?.label}
            </h2>
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">Content editing for {selectedPage} page coming soon...</p>
              <p className="text-sm mt-2">Currently only Home page editing is available.</p>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}