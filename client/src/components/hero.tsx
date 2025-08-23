import { useState, useEffect } from "react";
import EnhancedSearchBar from "./enhanced-search-bar";

export default function Hero() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [heroTitle, setHeroTitle] = useState("I am looking for");
  const [heroSubtitle, setHeroSubtitle] = useState("Find trusted professionals for all your home service needs");
  const [services, setServices] = useState(['Plumber', 'Electrician', 'HVAC Technician', 'Landscaper', 'Home Services']);
  const [rotationSpeed, setRotationSpeed] = useState(3000);
  const [backgroundImage, setBackgroundImage] = useState("");

  // Load settings from localStorage and listen for changes
  useEffect(() => {
    const loadSettings = () => {
      const savedSettings = localStorage.getItem('homejobspro-settings');
      if (savedSettings) {
        try {
          const settings = JSON.parse(savedSettings);
          setHeroTitle(settings.heroTitle || "I am looking for");
          setHeroSubtitle(settings.heroSubtitle || "Find trusted professionals for all your home service needs");
          setServices(Array.isArray(settings.rotatingServices) ? settings.rotatingServices : ['Plumber', 'Electrician', 'HVAC Technician', 'Landscaper', 'Home Services']);
          setRotationSpeed(settings.rotationSpeed || 3000);
          setBackgroundImage(settings.backgroundImage || "");
          
          // Update document title
          if (settings.siteTitle) {
            document.title = settings.siteTitle;
          }
        } catch (error) {
          console.error('Error loading settings:', error);
        }
      }
    };

    loadSettings();
    
    // Listen for settings changes
    const handleSettingsChange = (event: any) => {
      loadSettings();
    };

    window.addEventListener('settingsChanged', handleSettingsChange);
    return () => window.removeEventListener('settingsChanged', handleSettingsChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        setIsVisible(true);
      }, 200);
    }, rotationSpeed);

    return () => clearInterval(interval);
  }, [services.length, rotationSpeed]);

  const heroStyle = backgroundImage 
    ? { 
        backgroundImage: `linear-gradient(rgba(96, 125, 139, 0.8), rgba(96, 125, 139, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <section 
      className="hero-section bg-gradient-to-br from-blue-grey to-blue-grey-800 text-white py-20"
      style={heroStyle}
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in-up">
          {heroTitle}{' '}
          <span 
            className={`rotating-text text-orange-primary swirl-animation ${isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}
            data-testid="rotating-service"
          >
            {services[currentServiceIndex]}
          </span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-blue-grey-100 animate-fade-in-up">
          {heroSubtitle}
        </p>
        
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <EnhancedSearchBar />
        </div>
      </div>
    </section>
  );
}
