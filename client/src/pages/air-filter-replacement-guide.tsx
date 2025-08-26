
import { Link } from "wouter";
import { ArrowLeft, Wind, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield, Filter } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import airFilterImage from "@assets/generated_images/Air_filter_replacement_image_365206c1.png";

export default function AirFilterReplacementGuide() {
  useSEO({
    title: "Why Replacing HVAC Air Filters Matters: Signs, Schedule & How to Change | Homejobspro.com",
    description: "Learn when and how to replace your HVAC air filter. Step-by-step guide to choose the right filter and improve your home's air quality and system efficiency.",
    keywords: "air filter replacement, HVAC filter, dirty air filter, clogged filter, air quality, HVAC maintenance, filter types",
    canonical: "https://homejobspro.com/air-filter-replacement-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Locate Your Air Filter",
      description: "Find your air filter, typically located in the return air duct, near the furnace/air handler, or in a wall-mounted return vent. Check your HVAC manual if unsure.",
      tips: ["Look for a rectangular slot near your indoor unit", "Some systems have filters in ceiling or wall vents"],
      timeEstimate: "5 minutes"
    },
    {
      number: 2,
      title: "Turn Off Your HVAC System",
      description: "Switch off your heating and cooling system at the thermostat and turn off power at the circuit breaker for safety during filter replacement.",
      tips: ["Set thermostat to 'Off' mode", "Wait for system to completely shut down before proceeding"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 3,
      title: "Remove the Old Filter",
      description: "Carefully slide out the old filter, noting the airflow direction arrow. Take a photo of the filter size and orientation for reference.",
      tips: ["Check filter size printed on the frame", "Note which way the arrow points for proper installation"],
      timeEstimate: "3-5 minutes"
    },
    {
      number: 4,
      title: "Inspect the Old Filter",
      description: "Examine the removed filter. If it's gray, dirty, or you can't see light through it, it definitely needs replacement. Clean filters should be mostly white.",
      tips: ["Hold up to light - if you can't see through it, replace it", "Look for excessive dust, pet hair, or debris buildup"],
      timeEstimate: "2 minutes"
    },
    {
      number: 5,
      title: "Choose the Right Replacement",
      description: "Select a filter with the correct dimensions and appropriate MERV rating (6-13 for most homes). Higher MERV ratings capture smaller particles but may restrict airflow.",
      tips: ["Match exact size: length x width x thickness", "MERV 8-11 is ideal for most residential systems"],
      timeEstimate: "5 minutes (if shopping needed)"
    },
    {
      number: 6,
      title: "Install the New Filter",
      description: "Slide the new filter into place with the airflow arrow pointing toward the furnace/air handler (away from return vent). Ensure it fits snugly with no gaps.",
      tips: ["Double-check arrow direction matches your photo", "Make sure filter sits flush in the slot"],
      timeEstimate: "3-5 minutes"
    },
    {
      number: 7,
      title: "Restore Power and Test",
      description: "Turn the power back on at the breaker, set your thermostat to desired temperature, and verify the system runs smoothly with the new filter.",
      tips: ["Listen for unusual noises that might indicate improper installation", "Check that air flows normally from vents"],
      timeEstimate: "5-10 minutes"
    }
  ];

  const filterTypes = [
    {
      type: "Fiberglass/Synthetic",
      merv: "MERV 1-4",
      pros: "Inexpensive, basic dust protection",
      cons: "Poor air quality improvement",
      bestFor: "Basic dust control only"
    },
    {
      type: "Pleated",
      merv: "MERV 5-8",
      pros: "Better particle capture, affordable",
      cons: "May need more frequent replacement",
      bestFor: "Most residential homes"
    },
    {
      type: "High-Efficiency",
      merv: "MERV 9-12",
      pros: "Excellent air quality, allergen removal",
      cons: "More expensive, may restrict airflow",
      bestFor: "Allergies, pets, air quality concerns"
    },
    {
      type: "HEPA-Style",
      merv: "MERV 13+",
      pros: "Maximum filtration, removes fine particles",
      cons: "Expensive, may strain older systems",
      bestFor: "Severe allergies, medical needs"
    }
  ];

  const toolsNeeded = [
    "Flashlight for inspection",
    "Phone camera (for reference photos)",
    "Measuring tape (if size unknown)",
    "Vacuum (for cleaning area)",
    "Gloves (recommended)"
  ];

  const partsNeeded = [
    "Replacement air filter (correct size)",
    "Filter size measuring guide",
    "Permanent marker (for date marking)",
    "Calendar reminder system",
    "Multiple filters (for future use)"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/home-jobs-guide">
            <Button variant="ghost" className="mb-4" data-testid="back-to-guide">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home Jobs Guide
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <img 
              src={airFilterImage} 
              alt="HVAC air filter replacement guide - dirty and clean filters"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Why Replacing HVAC Air Filters Matters</h1>
                <p className="text-blue-100 text-lg">Signs, Schedule & How to Change</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>15-30 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$5-25 per filter</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Wrench className="w-5 h-5 mr-2" />
                <span>No tools needed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-700 leading-relaxed">
                This is a generic guide for educational purposes only. Filter types, sizes, and replacement procedures vary by HVAC system. 
                Always consult your system manual for specific instructions. If you're unsure about filter selection or encounter resistance when 
                installing a new filter, consult an HVAC professional to avoid damaging your system.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Types Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Wind className="w-8 h-8 mr-3 text-red-600" />
            Air Filter Types Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filterTypes.map((filter, index) => (
              <div key={index} className="border border-red-200 rounded-xl p-6 bg-red-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{filter.type}</h3>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {filter.merv}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-green-700">Pros: </span>
                    <span className="text-gray-700">{filter.pros}</span>
                  </div>
                  <div>
                    <span className="font-medium text-red-700">Cons: </span>
                    <span className="text-gray-700">{filter.cons}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-700">Best For: </span>
                    <span className="text-gray-700">{filter.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Parts Needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Wrench className="w-6 h-6 text-red-600 mr-2" />
              Tools You May Need
            </h2>
            <ul className="space-y-2">
              {toolsNeeded.map((tool, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 text-green-600 mr-2" />
              Supplies You'll Need
            </h2>
            <ul className="space-y-2">
              {partsNeeded.map((part, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{part}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Replacement Process</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-red-200"></div>
                )}
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 relative z-10">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full">
                          {step.timeEstimate}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-medium text-red-900 mb-2">Pro Tips:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-red-800 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Replacement Schedule */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center">
            <Clock className="w-6 h-6 text-red-600 mr-2" />
            Filter Replacement Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>1" filters:</strong> Replace every 1-3 months
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Homes with pets:</strong> Replace more frequently
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>High pollen seasons:</strong> Check monthly
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Thicker filters (4-5"):</strong> Replace every 6-12 months
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Heavy use periods:</strong> Check more often
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Set calendar reminders:</strong> Don't rely on memory
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional HVAC Maintenance?</h2>
          <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
            Regular filter replacement is just one part of HVAC maintenance. Our verified technicians can help with 
            complete system tune-ups, duct cleaning, and air quality assessments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=HVAC Technician">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
                data-testid="find-hvac-techs"
              >
                <Wind className="w-5 h-5 mr-2" />
                Find Local HVAC Techs
              </Button>
            </Link>
            <Link href="/home-jobs-guide">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3"
                data-testid="more-guides"
              >
                <Wrench className="w-5 h-5 mr-2" />
                More Repair Guides
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
