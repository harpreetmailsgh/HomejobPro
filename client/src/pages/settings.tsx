import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Save, Upload } from "lucide-react";
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
  
  // Edit panel state
  const [pageContent, setPageContent] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#607D8B");
  const [secondaryColor, setSecondaryColor] = useState("#FF5722");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [layoutStyle, setLayoutStyle] = useState("default");
  const [imageUrl, setImageUrl] = useState("");

  const pages = [
    { value: "home", label: "Home Page" },
    { value: "search", label: "Search Page" },
    { value: "faq", label: "FAQ Page" },
    { value: "settings", label: "Settings Page" },
    { value: "not-found", label: "Not Found Page" }
  ];

  const handleSaveChanges = () => {
    if (!selectedPage) {
      toast({
        title: "No Page Selected",
        description: "Please select a page to edit first.",
        variant: "destructive"
      });
      return;
    }

    // Save the changes for the selected page
    const pageSettings = {
      page: selectedPage,
      content: pageContent,
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        background: backgroundColor
      },
      layout: layoutStyle,
      imageUrl: imageUrl
    };

    // Store in localStorage for persistence
    const existingSettings = JSON.parse(localStorage.getItem('page-settings') || '{}');
    existingSettings[selectedPage] = pageSettings;
    localStorage.setItem('page-settings', JSON.stringify(existingSettings));

    toast({
      title: "Changes Saved",
      description: `Settings for ${pages.find(p => p.value === selectedPage)?.label} have been saved.`,
    });
  };

  const loadPageSettings = (pageValue: string) => {
    const existingSettings = JSON.parse(localStorage.getItem('page-settings') || '{}');
    const pageSettings = existingSettings[pageValue];
    
    if (pageSettings) {
      setPageContent(pageSettings.content || "");
      setPrimaryColor(pageSettings.colors?.primary || "#607D8B");
      setSecondaryColor(pageSettings.colors?.secondary || "#FF5722");
      setBackgroundColor(pageSettings.colors?.background || "#ffffff");
      setLayoutStyle(pageSettings.layout || "default");
      setImageUrl(pageSettings.imageUrl || "");
    } else {
      // Reset to defaults
      setPageContent("");
      setPrimaryColor("#607D8B");
      setSecondaryColor("#FF5722");
      setBackgroundColor("#ffffff");
      setLayoutStyle("default");
      setImageUrl("");
    }
  };

  const handlePageChange = (value: string) => {
    setSelectedPage(value);
    loadPageSettings(value);
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

        {/* Edit Panel - Only shown when a page is selected */}
        {selectedPage && (
          <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Editing: {pages.find(p => p.value === selectedPage)?.label}
              </h2>
            </div>

            {/* Page Content Section */}
            <section>
              <h3 className="text-lg font-medium mb-4 text-gray-800">Page Content</h3>
              <div className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">Content Text</Label>
                  <Textarea
                    value={pageContent}
                    onChange={(e) => setPageContent(e.target.value)}
                    placeholder="Enter page content, text, or descriptions..."
                    rows={6}
                    data-testid="page-content-input"
                  />
                </div>
              </div>
            </section>

            {/* Colors Section */}
            <section>
              <h3 className="text-lg font-medium mb-4 text-gray-800">Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">Primary Color</Label>
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
                  <Label className="block text-sm font-medium mb-2">Secondary Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-16 h-10 p-1"
                      data-testid="secondary-color-picker"
                    />
                    <Input
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      placeholder="#FF5722"
                      className="flex-1"
                      data-testid="secondary-color-input"
                    />
                  </div>
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">Background Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-16 h-10 p-1"
                      data-testid="background-color-picker"
                    />
                    <Input
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      placeholder="#ffffff"
                      className="flex-1"
                      data-testid="background-color-input"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Design/Layout Section */}
            <section>
              <h3 className="text-lg font-medium mb-4 text-gray-800">Design & Layout</h3>
              <div className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">Layout Style</Label>
                  <Select value={layoutStyle} onValueChange={setLayoutStyle}>
                    <SelectTrigger className="w-full max-w-md" data-testid="layout-style-select">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default Layout</SelectItem>
                      <SelectItem value="centered">Centered Layout</SelectItem>
                      <SelectItem value="full-width">Full Width Layout</SelectItem>
                      <SelectItem value="sidebar">Sidebar Layout</SelectItem>
                      <SelectItem value="grid">Grid Layout</SelectItem>
                      <SelectItem value="minimal">Minimal Layout</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Images Section */}
            <section>
              <h3 className="text-lg font-medium mb-4 text-gray-800">Images</h3>
              <div className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">Section Image URL</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="flex-1"
                      data-testid="image-url-input"
                    />
                    <Button variant="outline" size="sm" data-testid="upload-image-button">
                      <Upload className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Add images to supported sections. Not all pages support custom images.
                  </p>
                </div>
              </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <Button
                onClick={handleSaveChanges}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                data-testid="save-changes-button"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}