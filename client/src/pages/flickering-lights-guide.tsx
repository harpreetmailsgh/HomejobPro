import { Link } from "wouter";
import { ArrowLeft, Zap, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import flickeringLightsImage from "@assets/generated_images/Flickering_light_bulb_troubleshooting_6e9f776a.png";

export default function FlickeringLightsGuide() {
  useSEO({
    title: "Why Do My Lights Flicker? Common Causes and How to Fix Them | Homejobspro.com",
    description: "Learn why lights flicker and how to fix the problem safely. Step-by-step guide to diagnose and repair flickering light issues.",
    keywords: "flickering lights, electrical troubleshooting, light switch problems, electrical repair, home electrical issues",
    canonical: "https://homejobspro.com/flickering-lights-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Identify the Pattern",
      description: "Determine if flickering affects one light, multiple lights on the same circuit, or lights throughout the house. Note when flickering occurs most.",
      tips: ["Single light usually indicates bulb or fixture issue", "Multiple lights may indicate circuit problem"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 2,
      title: "Check and Replace the Bulb",
      description: "Start with the simplest solution: ensure the bulb is screwed in tightly and replace it with a new one of the same type and wattage.",
      tips: ["Turn off power before handling bulbs", "LED bulbs may flicker with incompatible dimmers"],
      timeEstimate: "5 minutes"
    },
    {
      number: 3,
      title: "Inspect Light Switch",
      description: "Check if the switch feels loose, hot, or makes crackling sounds. Toggle the switch several times to see if flickering changes.",
      tips: ["Never work on switches with wet hands", "Hot switches need immediate professional attention"],
      timeEstimate: "3-5 minutes"
    },
    {
      number: 4,
      title: "Test with High-Power Appliances",
      description: "Turn on large appliances like microwaves, hair dryers, or space heaters to see if lights flicker when these devices start up.",
      tips: ["This indicates voltage drop from overloaded circuits", "Note which appliances cause the flickering"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 5,
      title: "Check Dimmer Switch Compatibility",
      description: "If using dimmers, ensure they're compatible with your bulb type. Some LED and CFL bulbs require specific dimmer switches.",
      tips: ["Replace standard dimmer with LED-compatible version", "Check bulb packaging for dimmer compatibility"],
      timeEstimate: "10-20 minutes"
    },
    {
      number: 6,
      title: "Inspect Light Fixture Connections",
      description: "Turn off power at the breaker and check that wire connections in the light fixture are tight and secure.",
      tips: ["Use non-contact voltage tester to verify power is off", "Look for burned or discolored wires"],
      timeEstimate: "15-30 minutes"
    },
    {
      number: 7,
      title: "Monitor Main Electrical Panel",
      description: "Check if flickering occurs house-wide, especially when large appliances cycle on. This may indicate service panel issues.",
      tips: ["Note any burning smells around electrical panel", "Document patterns of flickering for electrician"],
      timeEstimate: "10-15 minutes"
    }
  ];

  const toolsNeeded = [
    "Non-contact voltage tester",
    "Screwdriver set",
    "Wire nuts (if needed)",
    "LED-compatible dimmer switch",
    "Replacement bulbs for testing"
  ];

  const partsNeeded = [
    "Compatible LED or CFL bulbs",
    "New light switch (if faulty)",
    "LED-compatible dimmer switch",
    "Wire nuts for connections",
    "Professional electrical service (for major issues)"
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
              src={flickeringLightsImage} 
              alt="Flickering light bulb - electrical troubleshooting guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Why Do My Lights Flicker?</h1>
                <p className="text-blue-100 text-lg">Common Causes and How to Fix Them</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>20-60 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$5-50 in parts</span>
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
              <h3 className="text-lg font-semibold text-red-800 mb-2">ELECTRICAL SAFETY WARNING</h3>
              <p className="text-red-700 leading-relaxed">
                This is a generic guide for educational purposes only. Electrical work can be dangerous and may require permits or professional installation. 
                Always turn off power at the breaker before working on electrical components. If you encounter burning smells, hot switches, or are unsure about safety, 
                immediately contact a licensed electrician. Some flickering may indicate serious electrical problems requiring professional diagnosis. Always prioritize safety over convenience.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Diagnosis Process</h2>
          
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
                Lights flicker throughout entire house
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Switches feel hot or make crackling sounds
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Burning smell from electrical components
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Flickering coincides with electrical panel issues
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Multiple electrical problems occurring
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Uncomfortable with electrical troubleshooting
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Electrical Help?</h2>
          <p className="text-yellow-100 text-lg mb-6 max-w-2xl mx-auto">
            If simple fixes don't solve the flickering or you encounter any safety concerns, 
            our verified electricians can safely diagnose and fix electrical issues with proper tools and expertise.
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