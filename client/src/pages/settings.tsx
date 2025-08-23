import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Save, RefreshCw } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [settingsType, setSettingsType] = useState("global"); // "global" or "page"
  
  // Website Content Settings
  const [heroTitle, setHeroTitle] = useState("I am looking for");
  const [heroSubtitle, setHeroSubtitle] = useState("Find trusted professionals for all your home service needs");
  const [siteTitle, setSiteTitle] = useState("Homejobspro.com");
  const [rotatingServices, setRotatingServices] = useState("Plumber, Electrician, HVAC Technician, Landscaper, Home Services");
  
  // Animation Settings
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState("3000");
  const [fadeSpeed, setFadeSpeed] = useState("200");
  
  // Color Theme Settings
  const [primaryColor, setPrimaryColor] = useState("#607D8B");
  const [accentColor, setAccentColor] = useState("#FF5722");
  const [backgroundGradient, setBackgroundGradient] = useState("gradient");
  
  // Layout Settings
  const [cardsPerRow, setCardsPerRow] = useState("4");
  const [enableFilters, setEnableFilters] = useState(true);
  const [resultsPerPage, setResultsPerPage] = useState("20");
  
  // Load saved settings on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('homejobspro-settings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        setHeroTitle(settings.heroTitle || "I am looking for");
        setHeroSubtitle(settings.heroSubtitle || "Find trusted professionals for all your home service needs");
        setSiteTitle(settings.siteTitle || "Homejobspro.com");
        setRotatingServices(Array.isArray(settings.rotatingServices) ? settings.rotatingServices.join(', ') : "Plumber, Electrician, HVAC Technician, Landscaper, Home Services");
        setEnableAnimations(settings.enableAnimations !== undefined ? settings.enableAnimations : true);
        setRotationSpeed(settings.rotationSpeed ? settings.rotationSpeed.toString() : "3000");
        setFadeSpeed(settings.fadeSpeed ? settings.fadeSpeed.toString() : "200");
        setPrimaryColor(settings.primaryColor || "#607D8B");
        setAccentColor(settings.accentColor || "#FF5722");
        setBackgroundGradient(settings.backgroundGradient || "gradient");
        setCardsPerRow(settings.cardsPerRow || "4");
        setEnableFilters(settings.enableFilters !== undefined ? settings.enableFilters : true);
        setResultsPerPage(settings.resultsPerPage ? settings.resultsPerPage.toString() : "20");
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    }
  }, []);
  
  const handleSaveSettings = () => {
    const settings = {
      heroTitle,
      heroSubtitle,
      siteTitle,
      rotatingServices: rotatingServices.split(',').map(s => s.trim()),
      enableAnimations,
      rotationSpeed: parseInt(rotationSpeed),
      fadeSpeed: parseInt(fadeSpeed),
      primaryColor,
      accentColor,
      backgroundGradient,
      cardsPerRow,
      enableFilters,
      resultsPerPage: parseInt(resultsPerPage)
    };
    
    localStorage.setItem('homejobspro-settings', JSON.stringify(settings));
    
    // Apply CSS custom properties for real-time theme changes
    document.documentElement.style.setProperty('--blue-grey', primaryColor);
    document.documentElement.style.setProperty('--orange-primary', accentColor);
    
    // Update page title
    document.title = siteTitle;
    
    // Dispatch custom event to update components that depend on settings
    window.dispatchEvent(new CustomEvent('settingsChanged', { detail: settings }));
    
    toast({
      title: "Settings Saved & Applied",
      description: "Your website settings have been saved and applied successfully. Some changes may require a page refresh.",
    });
  };
  
  const handleResetSettings = () => {
    localStorage.removeItem('homejobspro-settings');
    
    // Reset to defaults
    setHeroTitle("I am looking for");
    setHeroSubtitle("Find trusted professionals for all your home service needs");
    setSiteTitle("Homejobspro.com");
    setRotatingServices("Plumber, Electrician, HVAC Technician, Landscaper, Home Services");
    setEnableAnimations(true);
    setRotationSpeed("3000");
    setFadeSpeed("200");
    setPrimaryColor("#607D8B");
    setAccentColor("#FF5722");
    setBackgroundGradient("gradient");
    setCardsPerRow("auto");
    setEnableFilters(true);
    setResultsPerPage("20");
    
    toast({
      title: "Settings Reset",
      description: "All settings have been reset to defaults.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="back-to-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Website Settings</h1>
          <p className="text-gray-600 mt-2">Customize your website content, design, and functionality</p>
          
          {/* Settings Type Selector */}
          <div className="flex space-x-4 mt-6">
            <Button
              variant={settingsType === "global" ? "default" : "outline"}
              onClick={() => setSettingsType("global")}
              className={settingsType === "global" ? "bg-blue-grey hover:bg-blue-grey-700" : ""}
              data-testid="global-settings-tab"
            >
              Global Settings
            </Button>
            <Button
              variant={settingsType === "page" ? "default" : "outline"} 
              onClick={() => setSettingsType("page")}
              className={settingsType === "page" ? "bg-blue-grey hover:bg-blue-grey-700" : ""}
              data-testid="page-settings-tab"
            >
              Page Specific
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
          
          {/* Content Settings */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Content Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="block text-sm font-medium mb-2">Site Title</Label>
                <Input
                  value={siteTitle}
                  onChange={(e) => setSiteTitle(e.target.value)}
                  placeholder="Homejobspro.com"
                  data-testid="site-title-input"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">Hero Title</Label>
                <Input
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  placeholder="I am looking for"
                  data-testid="hero-title-input"
                />
              </div>
              <div className="md:col-span-2">
                <Label className="block text-sm font-medium mb-2">Hero Subtitle</Label>
                <Input
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  placeholder="Find trusted professionals for all your home service needs"
                  data-testid="hero-subtitle-input"
                />
              </div>
              <div className="md:col-span-2">
                <Label className="block text-sm font-medium mb-2">Rotating Services (comma-separated)</Label>
                <Textarea
                  value={rotatingServices}
                  onChange={(e) => setRotatingServices(e.target.value)}
                  placeholder="Plumber, Electrician, HVAC Technician, Landscaper, Home Services"
                  rows={3}
                  data-testid="rotating-services-input"
                />
              </div>
            </div>
          </section>

          {/* Animation Settings */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Animation Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Enable Animations</Label>
                <Switch
                  checked={enableAnimations}
                  onCheckedChange={setEnableAnimations}
                  data-testid="enable-animations-switch"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">Rotation Speed (ms)</Label>
                <Input
                  type="number"
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(e.target.value)}
                  min="1000"
                  max="10000"
                  step="500"
                  data-testid="rotation-speed-input"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">Fade Speed (ms)</Label>
                <Input
                  type="number"
                  value={fadeSpeed}
                  onChange={(e) => setFadeSpeed(e.target.value)}
                  min="100"
                  max="1000"
                  step="50"
                  data-testid="fade-speed-input"
                />
              </div>
            </div>
          </section>

          {/* Color Theme Settings */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Color Theme</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="block text-sm font-medium mb-2">Primary Color (Blue-Grey)</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-16 h-10 p-1"
                    data-testid="primary-color-input"
                  />
                  <Input
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    placeholder="#607D8B"
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">Accent Color (Orange)</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-16 h-10 p-1"
                    data-testid="accent-color-input"
                  />
                  <Input
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    placeholder="#FF5722"
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">Background Style</Label>
                <Select value={backgroundGradient} onValueChange={setBackgroundGradient}>
                  <SelectTrigger data-testid="background-style-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gradient">Gradient</SelectItem>
                    <SelectItem value="solid">Solid Color</SelectItem>
                    <SelectItem value="pattern">Pattern</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Layout Settings */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Layout Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="block text-sm font-medium mb-2">Cards Per Row</Label>
                <Select value={cardsPerRow} onValueChange={setCardsPerRow}>
                  <SelectTrigger data-testid="cards-per-row-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4">4 Cards (Recommended)</SelectItem>
                    <SelectItem value="3">3 Cards</SelectItem>
                    <SelectItem value="2">2 Cards</SelectItem>
                    <SelectItem value="1">1 Card</SelectItem>
                    <SelectItem value="auto">Auto (Responsive)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">Results Per Page</Label>
                <Select value={resultsPerPage} onValueChange={setResultsPerPage}>
                  <SelectTrigger data-testid="results-per-page-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 Results</SelectItem>
                    <SelectItem value="20">20 Results</SelectItem>
                    <SelectItem value="30">30 Results</SelectItem>
                    <SelectItem value="50">50 Results</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Enable Filters</Label>
                <Switch
                  checked={enableFilters}
                  onCheckedChange={setEnableFilters}
                  data-testid="enable-filters-switch"
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <Button
              onClick={handleSaveSettings}
              className="bg-blue-grey hover:bg-blue-grey-700 text-white flex-1"
              data-testid="save-settings-button"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
            <Button
              onClick={handleResetSettings}
              variant="outline"
              className="flex-1"
              data-testid="reset-settings-button"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset to Defaults
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}