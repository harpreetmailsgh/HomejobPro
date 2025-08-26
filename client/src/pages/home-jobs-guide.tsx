import { Link } from "wouter";
import { ArrowLeft, Home, Wrench, Zap, Thermometer, Droplets, Hammer, CheckCircle } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";

export default function HomeJobsGuide() {
  useSEO({
    title: "Home Jobs Guide: DIY Fixes for Plumbing, Electrical & HVAC | Homejobspro.com",
    description: "Complete guide to common home repair issues with step-by-step solutions. Learn how to fix plumbing, electrical, and HVAC problems or find professional help.",
    keywords: "home repair guide, DIY fixes, plumbing problems, electrical issues, HVAC troubleshooting, home maintenance tips, professional home services",
    canonical: "https://homejobspro.com/home-jobs-guide",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Home Jobs Guide: DIY Fixes for Plumbing, Electrical & HVAC",
      "description": "Complete guide to common home repair issues with step-by-step solutions for plumbing, electrical, and HVAC problems.",
      "author": {
        "@type": "Organization",
        "name": "Homejobspro.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Homejobspro.com",
        "url": "https://homejobspro.com"
      },
      "url": "https://homejobspro.com/home-jobs-guide"
    }
  });

  const commonJobs = [
    {
      category: "Plumbing",
      icon: Droplets,
      color: "blue",
      description: "Expert plumbing services for all your water and pipe needs",
      jobs: [
        "How to Fix a Dripping Faucet: Step-by-Step Guide to Stop Leaks Fast",
        "Clogged Sink or Shower Drain? Easy DIY Fixes That Actually Work",
        "Toilet Won't Stop Running? Easy Fixes for Flapper & Fill Valve Problems",
        "Low Water Pressure in House or Shower? Here's How to Fix It",
        "No Hot Water at Home? Common Water Heater Problems and Fixes",
        "Frozen Pipes? How to Thaw and Prevent Burst Pipes in Winter"
      ]
    },
    {
      category: "Electrical",
      icon: Zap,
      color: "yellow",
      description: "Safe and reliable electrical services for your home",
      jobs: [
        "Circuit Breaker Keeps Tripping? Causes and Easy Fixes You Can Try",
        "Why Do My Lights Flicker? Common Causes and How to Fix Them",
        "Outlet Not Working or GFCI Won't Reset? Here's What to Do",
        "Is Your Outlet Hot or Buzzing? Dangers and Fixes You Need to Know",
        "Light Switch Not Working? How to Diagnose and Fix Common Issues",
        "How to Protect Your Home from Power Surges: Causes, Fixes, and Surge Protectors"
      ]
    },
    {
      category: "HVAC",
      icon: Thermometer,
      color: "red",
      description: "Complete heating, ventilation, and air conditioning solutions",
      jobs: [
        "AC Running but Not Cooling? Top Reasons and Fixes",
        "Furnace Not Turning On? Troubleshooting Guide for Quick Fixes",
        "Why Are Some Rooms Hotter Than Others? How to Fix Uneven Heating & Cooling",
        "HVAC Making Loud or Strange Noises? What They Mean and How to Fix Them",
        "Thermostat Not Working? Easy Fixes for Heating and Cooling Issues",
        "Why Replacing HVAC Air Filters Matters: Signs, Schedule & How to Change"
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

        {/* Header Section with Background Image */}
        <div 
          className="relative text-center mb-16 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 py-24 px-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Home Jobs Guide</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your comprehensive guide to common home repair and maintenance jobs. Find trusted professionals for every project.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">When to Call a Professional</h2>
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
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-center">{category.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.jobs.map((job, jobIndex) => 
                      job === "How to Fix a Dripping Faucet: Step-by-Step Guide to Stop Leaks Fast" ? (
                        <Link href="/dripping-faucet-guide" key={jobIndex}>
                          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 group cursor-pointer">
                            <div className="flex flex-col items-center text-center">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                                category.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                                category.color === 'yellow' ? 'bg-yellow-100 group-hover:bg-yellow-200' :
                                category.color === 'red' ? 'bg-red-100 group-hover:bg-red-200' :
                                'bg-gray-200 group-hover:bg-gray-300'
                              }`}>
                                <CheckCircle className={`w-6 h-6 ${
                                  category.color === 'blue' ? 'text-blue-600' :
                                  category.color === 'yellow' ? 'text-yellow-600' :
                                  category.color === 'red' ? 'text-red-600' :
                                  'text-gray-600'
                                }`} />
                              </div>
                              <h4 className="font-semibold text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{job}</h4>
                              <div className="w-8 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent group-hover:via-blue-500"></div>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div key={jobIndex} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 group">
                          <div className="flex flex-col items-center text-center">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                              category.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                              category.color === 'yellow' ? 'bg-yellow-100 group-hover:bg-yellow-200' :
                              category.color === 'red' ? 'bg-red-100 group-hover:bg-red-200' :
                              'bg-gray-200 group-hover:bg-gray-300'
                            }`}>
                              <CheckCircle className={`w-6 h-6 ${
                                category.color === 'blue' ? 'text-blue-600' :
                                category.color === 'yellow' ? 'text-yellow-600' :
                                category.color === 'red' ? 'text-red-600' :
                                'text-gray-600'
                              }`} />
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2 leading-tight">{job}</h4>
                            <div className="w-8 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                          </div>
                        </div>
                      )
                    )}
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