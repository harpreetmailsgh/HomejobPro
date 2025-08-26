import { Link } from "wouter";
import { ArrowLeft, Droplets, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield, Flame } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import waterHeaterImage from "@assets/generated_images/Water_heater_repair_image_398256ee.png";

export default function NoHotWaterGuide() {
  useSEO({
    title: "No Hot Water at Home? Common Water Heater Problems and Fixes | Homejobspro.com",
    description: "Learn how to troubleshoot and fix water heater problems. Step-by-step guide to restore hot water in your home safely.",
    keywords: "no hot water, water heater repair, water heater troubleshooting, hot water problems, water heater maintenance",
    canonical: "https://homejobspro.com/no-hot-water-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Check the Power Supply",
      description: "For electric water heaters, verify the circuit breaker hasn't tripped. For gas heaters, ensure the gas supply valve is open and the pilot light is lit.",
      tips: ["Look for breakers labeled 'Water Heater' or 'WH'", "Gas smell requires immediate professional attention"],
      timeEstimate: "5 minutes"
    },
    {
      number: 2,
      title: "Test the Water Temperature",
      description: "Run hot water at multiple faucets for 3-5 minutes. Determine if there's no hot water at all, lukewarm water, or if it runs out quickly.",
      tips: ["Start with faucet closest to water heater", "Note if problem affects whole house or just one area"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 3,
      title: "Check the Thermostat Setting",
      description: "Locate the temperature dial on your water heater and ensure it's set between 120-140°F (49-60°C). The ideal setting is usually 120°F.",
      tips: ["Higher temperatures increase energy costs", "Lower than 120°F may not kill bacteria"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 4,
      title: "Inspect for Leaks",
      description: "Look around the base and connections of the water heater for signs of water leakage. Even small leaks can indicate serious problems.",
      tips: ["Check floor for water stains or puddles", "Examine pipe connections and relief valve"],
      timeEstimate: "5 minutes"
    },
    {
      number: 5,
      title: "Check the Reset Button (Electric)",
      description: "For electric water heaters, locate and press the reset button, usually found behind an access panel. This can resolve issues caused by power surges.",
      tips: ["Turn off power at breaker before accessing panels", "Button may be red and located near thermostat"],
      timeEstimate: "10 minutes"
    },
    {
      number: 6,
      title: "Test the Pilot Light (Gas)",
      description: "For gas water heaters, check if the pilot light is lit. If out, follow manufacturer instructions to safely relight it.",
      tips: ["Wait 5 minutes after gas leak smell before relighting", "Keep face away from pilot opening when lighting"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 7,
      title: "Flush the Tank (Maintenance)",
      description: "If the unit is old or hasn't been maintained, sediment buildup may reduce efficiency. Drain a few gallons to check for sediment.",
      tips: ["Annual flushing extends water heater life", "Cloudy or rusty water indicates sediment problems"],
      timeEstimate: "30-45 minutes"
    },
    {
      number: 8,
      title: "Wait and Monitor",
      description: "After making adjustments, allow 30-60 minutes for the water heater to heat up before testing hot water again.",
      tips: ["Electric heaters take longer to heat than gas", "Mark calendar for regular maintenance checks"],
      timeEstimate: "30-60 minutes"
    }
  ];

  const toolsNeeded = [
    "Flashlight for inspection",
    "Long lighter or matches (gas units)",
    "Screwdriver for access panels",
    "Garden hose for draining",
    "Bucket for water collection"
  ];

  const partsNeeded = [
    "Replacement thermostat (if needed)",
    "New heating elements (electric)",
    "Anode rod for maintenance",
    "Pipe thread sealant",
    "Professional gas valve replacement (if needed)"
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
              src={waterHeaterImage} 
              alt="Water heater unit for troubleshooting hot water problems - plumbing repair guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">No Hot Water at Home?</h1>
                <p className="text-blue-100 text-lg">Common Water Heater Problems and Fixes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>30-90 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$0-200 in parts</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Wrench className="w-5 h-5 mr-2" />
                <span>Basic tools needed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">SAFETY WARNING</h3>
              <p className="text-red-700 leading-relaxed">
                This is a generic guide for educational purposes only. Water heater repairs involve gas, electricity, and hot water - all potentially dangerous. 
                Gas leaks require immediate professional attention. Never attempt electrical work if you're unsure. Some repairs require permits or professional installation.
                If you smell gas, hear hissing sounds, or encounter unexpected issues, we strongly recommend seeking guidance from a licensed professional immediately. Always prioritize safety over convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Tools and Parts Needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Wrench className="w-6 h-6 text-blue-600 mr-2" />
              Tools You'll Need
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
              Parts You May Need
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Troubleshooting Process</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200"></div>
                )}
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 relative z-10">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {step.timeEstimate}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900 mb-2">Safety Tips:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-blue-800 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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

        {/* When to Call a Professional */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            IMMEDIATELY Call a Professional If:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                You smell gas around the water heater
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Water heater is making unusual noises
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Major leaks or flooding around unit
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Age of water heater exceeds 8-12 years
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Electrical issues or frequent breaker trips
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Need new installation or gas line work
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Water Heater Help?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            If basic troubleshooting doesn't restore your hot water or you encounter any safety concerns, 
            our verified plumbing professionals can safely diagnose and repair water heater issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=Plumber">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                data-testid="find-plumbers"
              >
                <Droplets className="w-5 h-5 mr-2" />
                Find Local Plumbers
              </Button>
            </Link>
            <Link href="/home-jobs-guide">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
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