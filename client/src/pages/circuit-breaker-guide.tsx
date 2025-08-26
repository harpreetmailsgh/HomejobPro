import { Link } from "wouter";
import { ArrowLeft, Zap, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import circuitBreakerImage from "@assets/generated_images/Circuit_breaker_repair_image_920db4bd.png";

export default function CircuitBreakerGuide() {
  useSEO({
    title: "Circuit Breaker Keeps Tripping? Causes and Easy Fixes You Can Try | Homejobspro.com",
    description: "Learn why circuit breakers trip and how to safely troubleshoot electrical issues. Step-by-step guide to identify and fix common problems.",
    keywords: "circuit breaker tripping, electrical troubleshooting, breaker panel repair, home electrical safety, power outage fixes",
    canonical: "https://homejobspro.com/circuit-breaker-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Ensure Safety First",
      description: "Turn off and unplug all devices on the affected circuit before working on the breaker panel. Never work on electrical systems with wet hands or in wet conditions.",
      tips: ["Keep a flashlight handy in case of power loss", "Wear rubber-soled shoes for added protection"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 2,
      title: "Locate the Tripped Breaker",
      description: "Find the breaker that has switched to the 'OFF' position or is in the middle position. It may look different from the others or feel loose.",
      tips: ["Tripped breakers often have a red indicator", "Check circuit labels to identify affected areas"],
      timeEstimate: "2-5 minutes"
    },
    {
      number: 3,
      title: "Identify the Cause",
      description: "Before resetting, determine why the breaker tripped. Common causes include overloaded circuits, short circuits, or ground faults.",
      tips: ["Count devices on the circuit", "Look for burning smells or scorch marks"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 4,
      title: "Reduce Circuit Load",
      description: "Unplug or turn off some devices on the circuit to reduce the electrical load. High-power appliances like space heaters often cause overloads.",
      tips: ["Move high-power devices to different circuits", "Avoid using extension cords for major appliances"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 5,
      title: "Reset the Breaker",
      description: "Firmly push the breaker switch to the 'OFF' position first, then switch it to 'ON'. You should hear a click and feel it engage properly.",
      tips: ["Don't force the switch", "If it won't stay on, there's still a problem"],
      timeEstimate: "1-2 minutes"
    },
    {
      number: 6,
      title: "Test the Circuit",
      description: "Turn on lights and plug in essential devices one at a time to test the circuit and ensure it's working properly.",
      tips: ["Start with lights and low-power devices", "Add devices gradually to test capacity"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 7,
      title: "Monitor for Problems",
      description: "Keep an eye on the circuit for the next few days. If the breaker trips again, there may be a more serious electrical issue requiring professional help.",
      tips: ["Note what was running when it tripped again", "Document patterns of tripping"],
      timeEstimate: "Ongoing"
    }
  ];

  const toolsNeeded = [
    "Flashlight or headlamp",
    "Non-contact voltage tester",
    "Insulated screwdriver (if needed)",
    "Rubber-soled shoes",
    "Circuit directory or labels"
  ];

  const partsNeeded = [
    "Replacement breaker (if faulty)",
    "Circuit labels for organization",
    "Power strips with surge protection",
    "Extension cords (proper gauge)",
    "GFCI outlets (if needed)"
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
              src={circuitBreakerImage} 
              alt="Electrical circuit breaker panel - electrical safety guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Circuit Breaker Keeps Tripping?</h1>
                <p className="text-blue-100 text-lg">Causes and Easy Fixes You Can Try</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>15-30 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$0-50 in parts</span>
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
                Never work on electrical systems if you're unsure, and always turn off power at the main breaker when in doubt. 
                If you smell burning, see sparks, or encounter repeated tripping, immediately contact a licensed electrician. Always prioritize safety over convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Tools and Parts Needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Wrench className="w-6 h-6 text-yellow-600 mr-2" />
              Safety Tools You'll Need
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
                You smell burning or see sparks
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Breaker trips immediately when reset
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Scorch marks around outlets or panel
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Multiple breakers tripping frequently
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Panel feels hot or makes buzzing sounds
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                You're unsure about electrical safety
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Electrical Help?</h2>
          <p className="text-yellow-100 text-lg mb-6 max-w-2xl mx-auto">
            If basic troubleshooting doesn't solve the problem or you encounter any warning signs, 
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