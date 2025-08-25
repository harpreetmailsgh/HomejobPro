import { useState, useEffect } from "react";
import { Search, UserCheck, Wrench, CheckCircle } from "lucide-react";

const defaultSteps = [
  {
    id: 1,
    title: "Search & Compare",
    description: "Browse thousands of verified professionals in your area and compare ratings, reviews, and services.",
    icon: Search,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Connect Directly",
    description: "Contact professionals directly through phone or visit their website to discuss your project.",
    icon: UserCheck,
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Get the Job Done",
    description: "Work with trusted, licensed professionals who deliver quality results for your home.",
    icon: Wrench,
    color: "bg-orange-500"
  },
  {
    id: 4,
    title: "Enjoy the Results",
    description: "Relax knowing your home improvement project was completed by reliable experts.",
    icon: CheckCircle,
    color: "bg-purple-500"
  }
];

export default function HowItWorks() {
  const [steps, setSteps] = useState(defaultSteps);
  const [sectionTitle, setSectionTitle] = useState("How It Works");
  const [sectionSubtitle, setSectionSubtitle] = useState("Get your home project completed in 4 simple steps");

  useEffect(() => {
    const loadSettings = () => {
      const savedSettings = localStorage.getItem('homejobspro-settings');
      if (savedSettings) {
        try {
          const settings = JSON.parse(savedSettings);
          if (settings.howItWorksTitle) setSectionTitle(settings.howItWorksTitle);
          if (settings.howItWorksSubtitle) setSectionSubtitle(settings.howItWorksSubtitle);
          if (settings.customSteps) setSteps(settings.customSteps);
        } catch (error) {
          console.error('Error loading how it works settings:', error);
        }
      }
    };

    loadSettings();
    window.addEventListener('settingsChanged', loadSettings);
    return () => window.removeEventListener('settingsChanged', loadSettings);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-xl text-gray-600">{sectionSubtitle}</p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-300 mx-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="text-center relative flex flex-col items-center">
                  {/* Step Number */}
                  <div className="relative mb-4 flex items-center justify-center">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg z-10 relative`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow z-20">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}