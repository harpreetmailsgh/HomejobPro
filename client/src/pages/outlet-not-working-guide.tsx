import { Link } from "wouter";
import { ArrowLeft, Zap, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import outletNotWorkingImage from "@assets/generated_images/Electrical_outlet_repair_guide_2e5afdb3.png";

export default function OutletNotWorkingGuide() {
  useSEO({
    title: "Outlet Not Working or GFCI Won't Reset? Here's What to Do | Homejobspro.com",
    description: "Learn how to troubleshoot and fix dead outlets and GFCI problems. Step-by-step guide to restore power safely.",
    keywords: "outlet not working, GFCI outlet, electrical outlet repair, dead outlet, electrical troubleshooting, outlet reset",
    canonical: "https://homejobspro.com/outlet-not-working-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Test Multiple Devices",
      description: "Try plugging in different devices to confirm the outlet isn't working. Sometimes the problem is with the device, not the outlet.",
      tips: ["Use a known working device like a phone charger", "Test both top and bottom outlets if it's a duplex"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 2,
      title: "Check Circuit Breakers",
      description: "Go to your electrical panel and look for tripped breakers. They may be in the middle position or have switched to 'OFF'.",
      tips: ["Fully turn breaker OFF then back ON", "Look for breakers labeled for bedrooms, kitchen, etc."],
      timeEstimate: "5 minutes"
    },
    {
      number: 3,
      title: "Test and Reset GFCI Outlets",
      description: "Find any GFCI outlets in bathrooms, kitchen, garage, or outdoor areas. Press the 'RESET' button on any that have popped out.",
      tips: ["One GFCI can control multiple regular outlets", "Test button should cut power when pressed"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 4,
      title: "Check Other Outlets on Same Circuit",
      description: "Test nearby outlets to see if the problem affects multiple outlets. This helps determine if it's a circuit-wide issue.",
      tips: ["Outlets in the same room often share circuits", "Note which outlets work and which don't"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 5,
      title: "Inspect the Outlet Visually",
      description: "Look for obvious signs of damage like burn marks, cracks, or loose faceplate. Do not touch - just observe.",
      tips: ["Never touch damaged outlets", "Turn off power if you see any damage"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 6,
      title: "Test with Non-Contact Voltage Tester",
      description: "Use a non-contact voltage tester to check if power is reaching the outlet safely without touching wires.",
      tips: ["Test the tester on a known working outlet first", "If power is present but outlet doesn't work, call electrician"],
      timeEstimate: "5 minutes"
    },
    {
      number: 7,
      title: "Check for Loose Connections (Power OFF)",
      description: "Turn off power at the breaker, remove outlet cover, and visually inspect for loose wire connections. Do not touch wires.",
      tips: ["Use non-contact tester to verify power is OFF", "Look for burnt or disconnected wires"],
      timeEstimate: "10-15 minutes"
    }
  ];

  const toolsNeeded = [
    "Non-contact voltage tester",
    "Screwdriver for outlet covers",
    "Flashlight or headlamp",
    "Multiple test devices",
    "GFCI outlet tester (optional)"
  ];

  const partsNeeded = [
    "Replacement GFCI outlet (if needed)",
    "New standard outlet (if damaged)",
    "Wire nuts for connections",
    "Electrical tape",
    "Professional electrical service (for complex issues)"
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
              src={outletNotWorkingImage} 
              alt="Electrical outlet troubleshooting and GFCI repair guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Outlet Not Working?</h1>
                <p className="text-blue-100 text-lg">GFCI Won't Reset? Here's What to Do</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>15-45 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$0-40 in parts</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Wrench className="w-5 h-5 mr-2" />
                <span>Safety tools needed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">ELECTRICAL SAFETY WARNING</h3>
              <p className="text-red-700 leading-relaxed">
                This is a generic guide for educational purposes only. Electrical work can be dangerous and may require permits or professional installation. 
                Always turn off power at the breaker before removing outlet covers. Never touch exposed wires or work on damaged outlets. 
                If you encounter burning smells, sparks, or are unsure about safety, immediately contact a licensed electrician. Always prioritize safety over convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Tools and Parts Needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Wrench className="w-6 h-6 text-yellow-600 mr-2" />
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
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-yellow-200"></div>
                )}
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 relative z-10">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                          {step.timeEstimate}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <h4 className="font-medium text-yellow-900 mb-2">Safety Tips:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-yellow-800 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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

        {/* GFCI Information Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-2" />
            Understanding GFCI Outlets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                GFCI protects against electrical shock
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Required in bathrooms, kitchens, garages
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Test monthly by pressing TEST button
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                One GFCI can protect multiple outlets
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Won't reset if there's a ground fault
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Replace every 10-15 years
              </li>
            </ul>
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
                Outlet shows burn marks or damage
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                You smell burning or see sparks
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                GFCI won't reset after troubleshooting
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Multiple outlets stopped working
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Outlets feel warm or tingle when touched
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Uncomfortable with electrical work
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Electrical Help?</h2>
          <p className="text-yellow-100 text-lg mb-6 max-w-2xl mx-auto">
            If basic troubleshooting doesn't restore power or you encounter any safety concerns, 
            our verified electricians can safely diagnose and fix outlet problems with proper tools and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=Electrician">
              <Button 
                size="lg" 
                className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3"
                data-testid="find-electricians"
              >
                <Zap className="w-5 h-5 mr-2" />
                Find Local Electricians
              </Button>
            </Link>
            <Link href="/home-jobs-guide">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3"
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