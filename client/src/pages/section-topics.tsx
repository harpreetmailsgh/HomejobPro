
import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Search, CheckCircle, Plus } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSEO } from "../hooks/use-seo";

export default function SectionTopics() {
  const { section } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [allTopics, setAllTopics] = useState([]);

  useSEO({
    title: `${section ? section.charAt(0).toUpperCase() + section.slice(1) : 'Section'} Topics | Home Jobs Guide | Homejobspro.com`,
    description: `Browse all ${section} topics and guides. Find step-by-step instructions for common home repair and maintenance issues.`,
    keywords: `${section} topics, ${section} guides, home repair, DIY fixes, home maintenance`,
    canonical: `https://homejobspro.com/section/${section}`
  });

  const commonJobs = {
    plumbing: {
      category: "Plumbing",
      icon: "🔧",
      color: "blue",
      description: "Expert plumbing services for all your water and pipe needs",
      jobs: [
        {
          title: "How to Fix a Dripping Faucet: Step-by-Step Guide to Stop Leaks Fast",
          route: "/dripping-faucet-guide",
          available: true
        },
        {
          title: "Clogged Sink or Shower Drain? Easy DIY Fixes That Actually Work",
          route: "/clogged-drain-guide",
          available: true
        },
        {
          title: "Toilet Won't Stop Running? Easy Fixes for Flapper & Fill Valve Problems",
          route: "/running-toilet-guide",
          available: true
        },
        {
          title: "Low Water Pressure in House or Shower? Here's How to Fix It",
          route: "/low-water-pressure-guide",
          available: true
        },
        {
          title: "No Hot Water at Home? Common Water Heater Problems and Fixes",
          route: "/no-hot-water-guide",
          available: true
        },
        {
          title: "Frozen Pipes? How to Thaw and Prevent Burst Pipes in Winter",
          route: "/frozen-pipes-guide",
          available: true
        },
        {
          title: "Sump Pump Not Working? How to Fix Common Issues",
          route: "#",
          available: false
        },
        {
          title: "Water Heater Leaking? Causes and Emergency Fixes",
          route: "#",
          available: false
        },
        {
          title: "Garbage Disposal Jammed? Safe Repair Methods",
          route: "#",
          available: false
        },
        {
          title: "Pipe Leak Detection: Early Warning Signs to Watch For",
          route: "#",
          available: false
        }
      ]
    },
    electrical: {
      category: "Electrical",
      icon: "⚡",
      color: "yellow",
      description: "Safe and reliable electrical services for your home",
      jobs: [
        {
          title: "Circuit Breaker Keeps Tripping? Causes and Easy Fixes You Can Try",
          route: "/circuit-breaker-guide",
          available: true
        },
        {
          title: "Why Do My Lights Flicker? Common Causes and How to Fix Them",
          route: "/flickering-lights-guide",
          available: true
        },
        {
          title: "Outlet Not Working or GFCI Won't Reset? Here's What to Do",
          route: "/outlet-not-working-guide",
          available: true
        },
        {
          title: "Is Your Outlet Hot or Buzzing? Dangers and Fixes You Need to Know",
          route: "/hot-buzzing-outlet-guide",
          available: true
        },
        {
          title: "Light Switch Not Working? How to Diagnose and Fix Common Issues",
          route: "/light-switch-not-working-guide",
          available: true
        },
        {
          title: "How to Protect Your Home from Power Surges: Causes, Fixes, and Surge Protectors",
          route: "/power-surge-protection-guide",
          available: true
        },
        {
          title: "Installing Smart Switches: Modern Home Automation",
          route: "#",
          available: false
        },
        {
          title: "Ceiling Fan Not Working? Motor and Wiring Troubleshooting",
          route: "#",
          available: false
        }
      ]
    },
    hvac: {
      category: "HVAC",
      icon: "🌡️",
      color: "red",
      description: "Complete heating, ventilation, and air conditioning solutions",
      jobs: [
        {
          title: "AC Running but Not Cooling? Top Reasons and Fixes",
          route: "/ac-not-cooling-guide",
          available: true
        },
        {
          title: "Furnace Not Turning On? Troubleshooting Guide for Quick Fixes",
          route: "/furnace-not-turning-on-guide",
          available: true
        },
        {
          title: "Why Are Some Rooms Hotter Than Others? How to Fix Uneven Heating & Cooling",
          route: "/uneven-temperature-guide",
          available: true
        },
        {
          title: "HVAC Making Loud or Strange Noises? What They Mean and How to Fix Them",
          route: "/hvac-noise-guide",
          available: true
        },
        {
          title: "Thermostat Not Working? Easy Fixes for Heating and Cooling Issues",
          route: "/thermostat-not-working-guide",
          available: true
        },
        {
          title: "Why Replacing HVAC Air Filters Matters: Signs, Schedule & How to Change",
          route: "/air-filter-replacement-guide",
          available: true
        },
        {
          title: "Heat Pump Not Working? Troubleshooting Cold Weather Issues",
          route: "#",
          available: false
        },
        {
          title: "Central Air Installation: What to Expect and Costs",
          route: "#",
          available: false
        }
      ]
    }
  };

  useEffect(() => {
    if (section && commonJobs[section]) {
      setAllTopics(commonJobs[section].jobs);
    }
  }, [section]);

  const filteredTopics = allTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentSection = section && commonJobs[section] ? commonJobs[section] : null;

  if (!currentSection) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Section Not Found</h1>
            <Link href="/home-jobs-guide">
              <Button>Back to Home Jobs Guide</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/home-jobs-guide">
            <Button variant="ghost" className="mb-4" data-testid="back-to-guide">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home Jobs Guide
            </Button>
          </Link>
        </div>

        {/* Section Header */}
        <div className={`relative text-center mb-12 rounded-2xl overflow-hidden ${
          currentSection.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-800' :
          currentSection.color === 'yellow' ? 'bg-gradient-to-r from-yellow-600 to-orange-600' :
          currentSection.color === 'red' ? 'bg-gradient-to-r from-red-600 to-red-800' :
          'bg-gradient-to-r from-gray-600 to-gray-800'
        }`}>
          <div className="relative z-10 py-16 px-8">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">{currentSection.icon}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentSection.category} Topics
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto mb-8">
              {currentSection.description}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={`Search ${currentSection.category} topics...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                data-testid="search-topics"
              />
            </div>
            <div className="text-sm text-gray-500">
              {filteredTopics.length} topic{filteredTopics.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic, index) => (
            topic.available ? (
              <Link href={topic.route} key={index}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      currentSection.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                      currentSection.color === 'yellow' ? 'bg-yellow-100 group-hover:bg-yellow-200' :
                      currentSection.color === 'red' ? 'bg-red-100 group-hover:bg-red-200' :
                      'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <CheckCircle className={`w-6 h-6 ${
                        currentSection.color === 'blue' ? 'text-blue-600' :
                        currentSection.color === 'yellow' ? 'text-yellow-600' :
                        currentSection.color === 'red' ? 'text-red-600' :
                        'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {topic.title}
                    </h3>
                    <div className={`w-12 h-1 rounded-full ${
                      currentSection.color === 'blue' ? 'bg-blue-300 group-hover:bg-blue-500' :
                      currentSection.color === 'yellow' ? 'bg-yellow-300 group-hover:bg-yellow-500' :
                      currentSection.color === 'red' ? 'bg-red-300 group-hover:bg-red-500' :
                      'bg-gray-300 group-hover:bg-gray-500'
                    }`}></div>
                  </div>
                </div>
              </Link>
            ) : (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 opacity-60 cursor-default">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-600 mb-2 leading-tight">
                    {topic.title}
                  </h3>
                  <div className="text-xs text-white bg-gray-400 px-2 py-1 rounded-full">
                    Coming Soon
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No topics found</h3>
            <p className="text-gray-500">Try adjusting your search term</p>
          </div>
        )}

        {/* Call to Action */}
        <div className={`rounded-2xl p-8 text-center text-white mt-16 ${
          currentSection.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-purple-600' :
          currentSection.color === 'yellow' ? 'bg-gradient-to-r from-yellow-600 to-orange-600' :
          currentSection.color === 'red' ? 'bg-gradient-to-r from-red-600 to-pink-600' :
          'bg-gradient-to-r from-gray-600 to-gray-800'
        }`}>
          <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-opacity-90">
            Find qualified {currentSection.category.toLowerCase()} professionals in your area for any project too complex for DIY.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search">
              <Button 
                size="lg" 
                className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3"
                data-testid="search-professionals"
              >
                Find {currentSection.category} Professionals
              </Button>
            </Link>
            <Link href="/list-business">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3"
                data-testid="list-your-business"
              >
                List Your Business
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
