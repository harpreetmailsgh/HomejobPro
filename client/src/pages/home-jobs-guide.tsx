import { Link } from "wouter";
import { ArrowLeft, Home, Wrench, Zap, Thermometer, Droplets, Hammer, CheckCircle } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";

export default function HomeJobsGuide() {
  const commonJobs = [
    {
      category: "Plumbing",
      icon: Droplets,
      color: "blue",
      jobs: [
        "Fix leaky faucets and pipes",
        "Unclog drains and toilets", 
        "Water heater repair and installation",
        "Pipe replacement and repair",
        "Bathroom fixture installation",
        "Emergency plumbing services"
      ]
    },
    {
      category: "Electrical",
      icon: Zap,
      color: "yellow",
      jobs: [
        "Outlet and switch installation",
        "Electrical panel upgrades",
        "Light fixture installation",
        "Ceiling fan installation",
        "Electrical wiring repairs",
        "Home electrical inspections"
      ]
    },
    {
      category: "HVAC",
      icon: Thermometer,
      color: "red",
      jobs: [
        "Air conditioning repair and installation",
        "Heating system maintenance",
        "Ductwork cleaning and repair",
        "Thermostat installation",
        "Furnace repair and replacement",
        "Indoor air quality improvement"
      ]
    },
    {
      category: "General Home Repair",
      icon: Hammer,
      color: "gray",
      jobs: [
        "Drywall repair and painting",
        "Door and window installation",
        "Flooring installation and repair",
        "Kitchen and bathroom remodeling",
        "Roof repair and maintenance",
        "Deck and patio construction"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-100",
      yellow: "text-yellow-600 bg-yellow-100",
      red: "text-red-600 bg-red-100",
      gray: "text-gray-600 bg-gray-100"
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600 bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="back-to-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Home Jobs Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive guide to common home repair and maintenance jobs. Find trusted professionals for every project.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Call a Professional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Safety First</h3>
              <p className="text-gray-600 mb-4">
                Some home repairs involve serious safety risks. Always call a licensed professional for electrical work, 
                gas line repairs, structural modifications, and major plumbing projects.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Quality & Warranty</h3>
              <p className="text-gray-600 mb-4">
                Professional work comes with warranties and insurance coverage. For major installations and repairs, 
                hiring qualified contractors protects your investment and ensures code compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Common Jobs by Category */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Common Home Jobs by Category</h2>
          
          {commonJobs.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`${getColorClasses(category.color)} p-6`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                      <IconComponent className={`w-6 h-6 ${category.color === 'yellow' ? 'text-yellow-600' : category.color === 'blue' ? 'text-blue-600' : category.color === 'red' ? 'text-red-600' : 'text-gray-600'}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.jobs.map((job, jobIndex) => (
                      <div key={jobIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{job}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Find qualified professionals in your area for any home repair or improvement project. 
            All our listed professionals are verified and ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                data-testid="search-professionals"
              >
                <Home className="w-5 h-5 mr-2" />
                Find Professionals
              </Button>
            </Link>
            <Link href="/list-business">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
                data-testid="list-your-business"
              >
                <Wrench className="w-5 h-5 mr-2" />
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