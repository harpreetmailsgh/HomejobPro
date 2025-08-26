import { Link } from "wouter";
import { ArrowLeft, Zap, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import lightSwitchImage from "@assets/generated_images/Light_switch_repair_guide_5d34952f.png";

export default function LightSwitchNotWorkingGuide() {
  useSEO({
    title: "Light Switch Not Working? How to Diagnose and Fix Common Issues | Homejobspro.com",
    description: "Learn how to troubleshoot and fix non-working light switches safely. Step-by-step guide to diagnose switch problems.",
    keywords: "light switch not working, switch troubleshooting, electrical switch repair, light switch replacement, electrical problems",
    canonical: "https://homejobspro.com/light-switch-not-working-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Test the Light Bulb First",
      description: "Before assuming the switch is broken, verify that the light bulb itself is working by trying it in another fixture or replacing it.",
      tips: ["Use a known working bulb for testing", "Check if bulb is screwed in tightly"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 2,
      title: "Check Circuit Breakers",
      description: "Go to your electrical panel and ensure the breaker controlling the light circuit hasn't tripped. Reset any tripped breakers.",
      tips: ["Look for breakers in middle position or 'OFF'", "Turn breaker fully OFF then back ON"],
      timeEstimate: "5 minutes"
    },
    {
      number: 3,
      title: "Test the Switch Operation",
      description: "Toggle the switch on and off several times. Listen for clicking sounds and feel if the switch operates smoothly.",
      tips: ["Loose or no clicking may indicate internal switch failure", "Switch should have firm on/off positions"],
      timeEstimate: "2 minutes"
    },
    {
      number: 4,
      title: "Check for Hot or Damaged Switch",
      description: "Feel if the switch plate is warm and look for cracks, burn marks, or other visible damage. Never touch exposed parts.",
      tips: ["Warm switches indicate electrical problems", "Turn off power immediately if switch feels hot"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 5,
      title: "Test with Non-Contact Voltage Tester",
      description: "Use a non-contact voltage tester to check if power is reaching the switch without removing the switch plate.",
      tips: ["Test the tester on a known live circuit first", "Power present but no light suggests switch failure"],
      timeEstimate: "3-5 minutes"
    },
    {
      number: 6,
      title: "Turn Off Power and Remove Switch Plate",
      description: "Turn off power at the breaker, verify with voltage tester, then remove switch plate screws to inspect connections.",
      tips: ["Always verify power is OFF before proceeding", "Take photo of wiring before disconnecting anything"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 7,
      title: "Check Wire Connections",
      description: "With power OFF, visually inspect wire connections to the switch. Look for loose, burned, or disconnected wires.",
      tips: ["Do not touch bare wires", "Loose connections cause switch failures"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 8,
      title: "Replace Switch if Faulty",
      description: "If connections are secure but switch doesn't work, replace it with an identical switch, connecting wires to the same terminals.",
      tips: ["Match wire colors to original configuration", "Use wire nuts for secure connections"],
      timeEstimate: "15-30 minutes"
    }
  ];

  const toolsNeeded = [
    "Non-contact voltage tester",
    "Screwdriver set",
    "Wire nuts",
    "Wire strippers (if needed)",
    "New light switch (if replacement needed)"
  ];

  const partsNeeded = [
    "Replacement light switch",
    "Wire nuts for connections",
    "Electrical tape",
    "Switch plate cover (if damaged)",
    "Professional electrical service (for complex wiring)"
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
              src={lightSwitchImage} 
              alt="Light switch troubleshooting and repair guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Light Switch Not Working?</h1>
                <p className="text-blue-100 text-lg">How to Diagnose and Fix Common Issues</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>30-60 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$5-25 in parts</span>
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
                Always turn off power at the breaker before working on switches. Never work on electrical components if you're unsure about safety procedures. 
                If you encounter hot switches, burning smells, or complex wiring, immediately contact a licensed electrician. Always prioritize safety over convenience.
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

        {/* Switch Types Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <Zap className="w-6 h-6 text-blue-600 mr-2" />
            Common Switch Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Single-pole:</strong> Controls one light from one location
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Three-way:</strong> Controls one light from two locations
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Dimmer:</strong> Controls light brightness levels
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>GFCI:</strong> Provides ground fault protection
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Smart:</strong> WiFi-enabled programmable switches
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <strong>Timer:</strong> Automatically turns lights on/off
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
                Switch feels hot or makes crackling sounds
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                You see sparks or burning smell
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Multiple switches stopped working
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Complex three-way or four-way wiring
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Aluminum wiring in older homes
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
            If switch troubleshooting doesn't solve the problem or you encounter any safety concerns, 
            our verified electricians can safely diagnose and fix switch issues with proper tools and expertise.
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