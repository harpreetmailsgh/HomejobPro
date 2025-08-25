import { useState, useEffect } from "react";
import { Users, CheckCircle, Star, Shield } from "lucide-react";

const defaultStats = [
  {
    id: 1,
    value: "10,000+",
    label: "Happy Customers",
    description: "Satisfied homeowners nationwide",
    icon: Users,
    color: "text-blue-600"
  },
  {
    id: 2, 
    value: "15,000+",
    label: "Jobs Completed",
    description: "Successfully finished projects",
    icon: CheckCircle,
    color: "text-green-600"
  },
  {
    id: 3,
    value: "4.8/5",
    label: "Average Rating",
    description: "Consistently high quality service",
    icon: Star,
    color: "text-yellow-500"
  },
  {
    id: 4,
    value: "100%",
    label: "Verified Pros",
    description: "Licensed and background checked",
    icon: Shield,
    color: "text-orange-600"
  }
];

export default function StatsSection() {
  const [stats, setStats] = useState(defaultStats);
  const [sectionTitle, setSectionTitle] = useState("Trusted by Thousands");
  const [sectionSubtitle, setSectionSubtitle] = useState("Join the growing community of satisfied homeowners");

  useEffect(() => {
    const loadSettings = () => {
      const savedSettings = localStorage.getItem('homejobspro-settings');
      if (savedSettings) {
        try {
          const settings = JSON.parse(savedSettings);
          if (settings.statsTitle) setSectionTitle(settings.statsTitle);
          if (settings.statsSubtitle) setSectionSubtitle(settings.statsSubtitle);
          
          // Update individual stats if custom values exist
          if (settings.stat1Value || settings.stat1Label) {
            const updatedStats = [...defaultStats];
            updatedStats[0] = {
              ...updatedStats[0],
              value: settings.stat1Value || defaultStats[0].value,
              label: settings.stat1Label || defaultStats[0].label
            };
            updatedStats[1] = {
              ...updatedStats[1],
              value: settings.stat2Value || defaultStats[1].value,
              label: settings.stat2Label || defaultStats[1].label
            };
            updatedStats[2] = {
              ...updatedStats[2],
              value: settings.stat3Value || defaultStats[2].value,
              label: settings.stat3Label || defaultStats[2].label
            };
            updatedStats[3] = {
              ...updatedStats[3],
              value: settings.stat4Value || defaultStats[3].value,
              label: settings.stat4Label || defaultStats[3].label
            };
            setStats(updatedStats);
          }
        } catch (error) {
          console.error('Error loading stats settings:', error);
        }
      }
    };

    loadSettings();
    window.addEventListener('settingsChanged', loadSettings);
    return () => window.removeEventListener('settingsChanged', loadSettings);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-grey-50 to-blue-grey-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-xl text-gray-600">{sectionSubtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}