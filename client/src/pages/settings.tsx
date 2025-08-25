import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft, Save, Upload, Eye, RefreshCw } from "lucide-react";
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Home page specific states (loading from actual localStorage)
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [siteTitle, setSiteTitle] = useState("");
  const [rotatingServices, setRotatingServices] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [accentColor, setAccentColor] = useState("");

  // Stats section
  const [statsTitle, setStatsTitle] = useState("");
  const [statsSubtitle, setStatsSubtitle] = useState("");
  const [stat1Value, setStat1Value] = useState("");
  const [stat1Label, setStat1Label] = useState("");
  const [stat2Value, setStat2Value] = useState("");
  const [stat2Label, setStat2Label] = useState("");
  const [stat3Value, setStat3Value] = useState("");
  const [stat3Label, setStat3Label] = useState("");
  const [stat4Value, setStat4Value] = useState("");
  const [stat4Label, setStat4Label] = useState("");

  // Featured Services section
  const [featuredTitle, setFeaturedTitle] = useState("");
  const [featuredSubtitle, setFeaturedSubtitle] = useState("");

  // How It Works section
  const [howItWorksTitle, setHowItWorksTitle] = useState("");
  const [howItWorksSubtitle, setHowItWorksSubtitle] = useState("");

  // Search Box section
  const [searchPlaceholders, setSearchPlaceholders] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);

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

        // Stats section
        setStatsTitle(settings.statsTitle || "Trusted by Thousands");
        setStatsSubtitle(settings.statsSubtitle || "Join the growing community of satisfied homeowners");
        setStat1Value(settings.stat1Value || "10,000+");
        setStat1Label(settings.stat1Label || "Happy Customers");
        setStat2Value(settings.stat2Value || "15,000+");
        setStat2Label(settings.stat2Label || "Jobs Completed");
        setStat3Value(settings.stat3Value || "4.8/5");
        setStat3Label(settings.stat3Label || "Average Rating");
        setStat4Value(settings.stat4Value || "100%");
        setStat4Label(settings.stat4Label || "Verified Pros");

        // Featured Services section
        setFeaturedTitle(settings.featuredTitle || "Featured Services");
        setFeaturedSubtitle(settings.featuredSubtitle || "Popular home services trusted by thousands of homeowners");

        // How It Works section
        setHowItWorksTitle(settings.howItWorksTitle || "How It Works");
        setHowItWorksSubtitle(settings.howItWorksSubtitle || "Get your home project completed in 4 simple steps");

        // Search Box section
        if (settings.searchPlaceholders && Array.isArray(settings.searchPlaceholders)) {
          setSearchPlaceholders(settings.searchPlaceholders.join('\n'));
        } else {
          setSearchPlaceholders("Find a plumber in Toronto...\nSearch for electricians in Ottawa...\nLooking for HVAC service in Mississauga?\nFind home repair experts in Brampton...\nSearch landscapers in Hamilton...\nNeed a handyman in London?");
        }

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

    setStatsTitle("Trusted by Thousands");
    setStatsSubtitle("Join the growing community of satisfied homeowners");
    setStat1Value("10,000+");
    setStat1Label("Happy Customers");
    setStat2Value("15,000+");
    setStat2Label("Jobs Completed");
    setStat3Value("4.8/5");
    setStat3Label("Average Rating");
    setStat4Value("100%");
    setStat4Label("Verified Pros");

    setFeaturedTitle("Featured Services");
    setFeaturedSubtitle("Popular home services trusted by thousands of homeowners");

    setHowItWorksTitle("How It Works");
    setHowItWorksSubtitle("Get your home project completed in 4 simple steps");

    setSearchPlaceholders("Find a plumber in Toronto...\nSearch for electricians in Ottawa...\nLooking for HVAC service in Mississauga?\nFind home repair experts in Brampton...\nSearch landscapers in Hamilton...\nNeed a handyman in London?");
  };

  const handlePageChange = (value: string) => {
    setSelectedPage(value);
    if (value === "home") {
      loadCurrentHomeSettings();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setBackgroundImage(result);
          toast({
            title: "Image Uploaded",
            description: "Background image has been uploaded successfully.",
          });
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Invalid File",
          description: "Please select an image file (JPG, PNG, etc.)",
          variant: "destructive"
        });
      }
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
      
      // Stats section
      statsTitle,
      statsSubtitle,
      stat1Value,
      stat1Label,
      stat2Value,
      stat2Label,
      stat3Value,
      stat3Label,
      stat4Value,
      stat4Label,

      // Featured Services section
      featuredTitle,
      featuredSubtitle,

      // How It Works section
      howItWorksTitle,
      howItWorksSubtitle,

      // Search Box section
      searchPlaceholders: searchPlaceholders.split('\n').filter(line => line.trim()),

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

  const handleSyncGoogleSheets = async () => {
    setIsSyncing(true);
    try {
      const response = await fetch('/api/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Google Sheets Synced!",
          description: `Successfully synced with your Google Sheet at ${new Date(result.timestamp).toLocaleTimeString()}`,
        });
      } else {
        throw new Error('Sync failed');
      }
    } catch (error) {
      toast({
        title: "Sync Failed",
        description: "Could not sync with Google Sheets. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSyncing(false);
    }
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Page Settings</h1>
              <p className="text-gray-600 mt-2">Select a page to customize its content, colors, and design</p>
            </div>
            <Button
              onClick={handleSyncGoogleSheets}
              disabled={isSyncing}
              variant="outline"
              className="flex items-center space-x-2"
              data-testid="sync-google-sheets-button"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing...' : 'Sync Google Sheets'}</span>
            </Button>
          </div>
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
                  <div className="text-gray-600">Title: <span className="font-mono bg-gray-100 px-1 rounded">"{statsTitle}"</span></div>
                  <div className="text-gray-600">Stats: {stat1Value} {stat1Label}, {stat2Value} {stat2Label}...</div>
                  <div className="text-xs text-gray-500">Now Editable!</div>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                  <div className="font-semibold text-gray-800">⭐ Featured Services</div>
                  <div className="text-gray-600">Title: <span className="font-mono bg-gray-100 px-1 rounded">"{featuredTitle}"</span></div>
                  <div className="text-gray-600">Subtitle: <span className="font-mono bg-gray-100 px-1 rounded">"{featuredSubtitle}"</span></div>
                  <div className="text-xs text-gray-500">Now Editable!</div>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-cyan-500">
                  <div className="font-semibold text-gray-800">🔧 How It Works</div>
                  <div className="text-gray-600">Title: <span className="font-mono bg-gray-100 px-1 rounded">"{howItWorksTitle}"</span></div>
                  <div className="text-gray-600">Subtitle: <span className="font-mono bg-gray-100 px-1 rounded">"{howItWorksSubtitle}"</span></div>
                  <div className="text-xs text-gray-500">Now Editable!</div>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-pink-500">
                  <div className="font-semibold text-gray-800">🔍 Search Box Auto Text</div>
                  <div className="text-gray-600">Rotating placeholders: {searchPlaceholders.split('\n').length} different texts</div>
                  <div className="text-gray-600">Current: <span className="font-mono bg-gray-100 px-1 rounded">"{searchPlaceholders.split('\n')[0]}..."</span></div>
                  <div className="text-xs text-gray-500">Now Editable!</div>
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
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6 max-h-screen overflow-y-auto">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-xl font-semibold text-gray-800">Edit Home Page Content</h2>
                <p className="text-sm text-gray-600 mt-1">Changes will reflect immediately on the home page</p>
              </div>

              {/* HERO SECTION */}
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 border-b pb-2">🎯 Hero Section</h3>
                
                <div>
                  <Label className="block text-sm font-medium mb-2">🏠 Site Title (Header)</Label>
                  <Input
                    value={siteTitle}
                    onChange={(e) => setSiteTitle(e.target.value)}
                    placeholder="Homejobspro.com"
                    data-testid="site-title-input"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">🎯 Hero Main Title</Label>
                  <Input
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    placeholder="I am looking for"
                    data-testid="hero-title-input"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">🔄 Rotating Services</Label>
                  <Textarea
                    value={rotatingServices}
                    onChange={(e) => setRotatingServices(e.target.value)}
                    placeholder="Plumber, Electrician, HVAC Technician, Landscaper, Home Services"
                    rows={3}
                    data-testid="rotating-services-input"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate with commas. These rotate every 3 seconds</p>
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">📝 Hero Subtitle</Label>
                  <Textarea
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    placeholder="Find trusted professionals for all your home service needs"
                    rows={2}
                    data-testid="hero-subtitle-input"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">🖼️ Hero Background Image</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Input
                        value={backgroundImage}
                        onChange={(e) => setBackgroundImage(e.target.value)}
                        placeholder="https://example.com/hero-background.jpg or upload file"
                        className="flex-1"
                        data-testid="background-image-input"
                      />
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => fileInputRef.current?.click()}
                        data-testid="upload-image-button"
                      >
                        <Upload className="w-4 h-4" />
                      </Button>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <p className="text-xs text-gray-500">Upload an image file or paste a URL</p>
                  </div>
                </div>

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
                  </div>
                </div>
              </section>

              {/* STATS SECTION */}
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 border-b pb-2">📊 Stats Section</h3>
                
                <div>
                  <Label className="block text-sm font-medium mb-2">Section Title</Label>
                  <Input
                    value={statsTitle}
                    onChange={(e) => setStatsTitle(e.target.value)}
                    placeholder="Trusted by Thousands"
                    data-testid="stats-title-input"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">Section Subtitle</Label>
                  <Input
                    value={statsSubtitle}
                    onChange={(e) => setStatsSubtitle(e.target.value)}
                    placeholder="Join the growing community of satisfied homeowners"
                    data-testid="stats-subtitle-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium mb-2">Stat 1 Value</Label>
                    <Input
                      value={stat1Value}
                      onChange={(e) => setStat1Value(e.target.value)}
                      placeholder="10,000+"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Stat 1 Label</Label>
                    <Input
                      value={stat1Label}
                      onChange={(e) => setStat1Label(e.target.value)}
                      placeholder="Happy Customers"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Stat 2 Value</Label>
                    <Input
                      value={stat2Value}
                      onChange={(e) => setStat2Value(e.target.value)}
                      placeholder="15,000+"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Stat 2 Label</Label>
                    <Input
                      value={stat2Label}
                      onChange={(e) => setStat2Label(e.target.value)}
                      placeholder="Jobs Completed"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Stat 3 Value</Label>
                    <Input
                      value={stat3Value}
                      onChange={(e) => setStat3Value(e.target.value)}
                      placeholder="4.8/5"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Stat 3 Label</Label>
                    <Input
                      value={stat3Label}
                      onChange={(e) => setStat3Label(e.target.value)}
                      placeholder="Average Rating"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Stat 4 Value</Label>
                    <Input
                      value={stat4Value}
                      onChange={(e) => setStat4Value(e.target.value)}
                      placeholder="100%"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Stat 4 Label</Label>
                    <Input
                      value={stat4Label}
                      onChange={(e) => setStat4Label(e.target.value)}
                      placeholder="Verified Pros"
                    />
                  </div>
                </div>
              </section>

              {/* FEATURED SERVICES SECTION */}
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 border-b pb-2">⭐ Featured Services Section</h3>
                
                <div>
                  <Label className="block text-sm font-medium mb-2">Section Title</Label>
                  <Input
                    value={featuredTitle}
                    onChange={(e) => setFeaturedTitle(e.target.value)}
                    placeholder="Featured Services"
                    data-testid="featured-title-input"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">Section Subtitle</Label>
                  <Input
                    value={featuredSubtitle}
                    onChange={(e) => setFeaturedSubtitle(e.target.value)}
                    placeholder="Popular home services trusted by thousands of homeowners"
                    data-testid="featured-subtitle-input"
                  />
                </div>
              </section>

              {/* HOW IT WORKS SECTION */}
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 border-b pb-2">🔧 How It Works Section</h3>
                
                <div>
                  <Label className="block text-sm font-medium mb-2">Section Title</Label>
                  <Input
                    value={howItWorksTitle}
                    onChange={(e) => setHowItWorksTitle(e.target.value)}
                    placeholder="How It Works"
                    data-testid="how-it-works-title-input"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">Section Subtitle</Label>
                  <Input
                    value={howItWorksSubtitle}
                    onChange={(e) => setHowItWorksSubtitle(e.target.value)}
                    placeholder="Get your home project completed in 4 simple steps"
                    data-testid="how-it-works-subtitle-input"
                  />
                </div>
              </section>

              {/* SEARCH BOX SECTION */}
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 border-b pb-2">🔍 Search Box Auto Text</h3>
                
                <div>
                  <Label className="block text-sm font-medium mb-2">Rotating Placeholder Texts</Label>
                  <Textarea
                    value={searchPlaceholders}
                    onChange={(e) => setSearchPlaceholders(e.target.value)}
                    placeholder={`Find a plumber in Toronto...\nSearch for electricians in Ottawa...\nLooking for HVAC service in Mississauga?\nFind home repair experts in Brampton...`}
                    rows={6}
                    data-testid="search-placeholders-input"
                  />
                  <p className="text-xs text-gray-500 mt-1">One placeholder per line. These rotate every 4 seconds in the search box. Include Ontario city names for local search feel.</p>
                </div>
              </section>

              {/* Save Button */}
              <div className="flex justify-end pt-6 border-t border-gray-200">
                <Button
                  onClick={handleSaveHomeChanges}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  data-testid="save-home-changes-button"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save & Apply All Changes
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