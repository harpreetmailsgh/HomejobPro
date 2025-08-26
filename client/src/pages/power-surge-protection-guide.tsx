import { Link } from "wouter";
import { ArrowLeft, Zap, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import powerSurgeImage from "@assets/generated_images/Power_surge_protection_equipment_e4d97487.png";

export default function PowerSurgeProtectionGuide() {
  useSEO({
    title: "How to Protect Your Home from Power Surges: Causes, Fixes, and Surge Protectors | Homejobspro.com",
    description: "Learn how to protect your home and electronics from damaging power surges. Complete guide to surge protection devices and prevention.",
    keywords: "power surge protection, surge protector, electrical protection, power surge causes, whole house surge protector, electrical safety",
    canonical: "https://homejobspro.com/power-surge-protection-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Understand Power Surge Causes",
      description: "Identify common sources of power surges including lightning, electrical grid switching, large appliances cycling on/off, and faulty wiring.",
      tips: ["External surges come from utility grid issues", "Internal surges often from AC units or appliances"],
      timeEstimate: "Educational"
    },
    {
      number: 2,
      title: "Install Whole-House Surge Protector",
      description: "Have a licensed electrician install a whole-house surge protector at your main electrical panel for comprehensive protection.",
      tips: ["Provides first line of defense", "Protects hardwired appliances and outlets"],
      timeEstimate: "2-4 hours (professional)"
    },
    {
      number: 3,
      title: "Use Point-of-Use Surge Protectors",
      description: "Plug sensitive electronics into quality surge protector power strips rated for your equipment's needs.",
      tips: ["Look for UL 1449 rating", "Replace surge protectors every 3-5 years"],
      timeEstimate: "15-30 minutes"
    },
    {
      number: 4,
      title: "Protect Major Appliances",
      description: "Install individual surge protectors for expensive appliances like refrigerators, washers, HVAC systems, and water heaters.",
      tips: ["Use appliance-specific surge protectors", "Some require professional installation"],
      timeEstimate: "30-60 minutes each"
    },
    {
      number: 5,
      title: "Unplug During Storms",
      description: "Disconnect sensitive electronics during thunderstorms, as surge protectors cannot guarantee protection from direct lightning strikes.",
      tips: ["Unplug computers, TVs, and gaming systems", "Lightning can overwhelm any protection"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 6,
      title: "Inspect and Maintain Protection",
      description: "Regularly check surge protector indicator lights and replace units that no longer provide protection.",
      tips: ["Green/red lights indicate protection status", "Replace if indicator shows protection lost"],
      timeEstimate: "Monthly check"
    },
    {
      number: 7,
      title: "Consider Electrical System Upgrades",
      description: "If experiencing frequent surges, have an electrician inspect your home's wiring and grounding system for improvements.",
      tips: ["Proper grounding is essential", "Old wiring may need updating"],
      timeEstimate: "Professional assessment"
    }
  ];

  const protectionTypes = [
    {
      type: "Whole-House Surge Protector",
      description: "Installed at main panel, protects entire home",
      cost: "$300-800 installed",
      protection: "20,000-40,000+ amps"
    },
    {
      type: "Point-of-Use Surge Protectors",
      description: "Individual power strips for electronics",
      cost: "$20-100 each",
      protection: "1,000-4,000 joules"
    },
    {
      type: "Appliance Surge Protectors",
      description: "Dedicated protection for major appliances",
      cost: "$50-200 each",
      protection: "Varies by appliance"
    }
  ];

  const toolsNeeded = [
    "Quality surge protector power strips",
    "UL-listed surge protection devices",
    "Voltage meter (for monitoring)",
    "Professional electrician (for whole-house)",
    "Appliance-specific protectors"
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
              src={powerSurgeImage} 
              alt="Power surge protection devices and electrical safety equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Protect Your Home from Power Surges</h1>
                <p className="text-blue-100 text-lg">Causes, Fixes, and Surge Protectors</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>Prevention focused</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$20-800 investment</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Wrench className="w-5 h-5 mr-2" />
                <span>Professional recommended</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Protection Investment Guide</h3>
              <p className="text-blue-700 leading-relaxed">
                This is a generic guide for educational purposes only. Power surge protection requirements vary by location, home age, and electrical system. 
                Whole-house surge protectors require professional installation by licensed electricians. No surge protection guarantees 100% protection from all surges, 
                especially direct lightning strikes. Consult with electrical professionals to design the best protection strategy for your specific home and needs.
              </p>
            </div>
          </div>
        </div>

        {/* Protection Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {protectionTypes.map((protection, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{protection.type}</h3>
              <p className="text-gray-600 mb-4 text-sm">{protection.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Cost:</span>
                  <span className="text-sm font-medium text-gray-900">{protection.cost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Protection:</span>
                  <span className="text-sm font-medium text-gray-900">{protection.protection}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Step-by-Step Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comprehensive Protection Strategy</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-purple-200"></div>
                )}
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 relative z-10">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                          {step.timeEstimate}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-medium text-purple-900 mb-2">Key Points:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-purple-800 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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

        {/* Surge Causes Information */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
            <Zap className="w-6 h-6 text-yellow-600 mr-2" />
            Common Power Surge Causes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">External Causes:</h4>
              <ul className="space-y-2">
                <li className="text-yellow-800 flex items-start">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Lightning strikes (direct or nearby)
                </li>
                <li className="text-yellow-800 flex items-start">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Utility grid switching operations
                </li>
                <li className="text-yellow-800 flex items-start">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Power outages and restoration
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Internal Causes:</h4>
              <ul className="space-y-2">
                <li className="text-yellow-800 flex items-start">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Large appliances cycling on/off
                </li>
                <li className="text-yellow-800 flex items-start">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  HVAC systems starting up
                </li>
                <li className="text-yellow-800 flex items-start">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Faulty wiring or electrical issues
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Buying Guide */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
            Surge Protector Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-green-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Look for UL 1449 certification
              </li>
              <li className="text-green-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Higher joule rating = better protection
              </li>
              <li className="text-green-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Low clamping voltage (330V or less)
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-green-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Fast response time (nanoseconds)
              </li>
              <li className="text-green-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Indicator lights for protection status
              </li>
              <li className="text-green-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Warranty and connected equipment coverage
              </li>
            </ul>
          </div>
        </div>

        {/* When to Call a Professional */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <Wrench className="w-6 h-6 text-blue-600 mr-2" />
            Professional Installation Recommended For:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Whole-house surge protector installation
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Electrical panel upgrades or modifications
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Grounding system improvements
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                220V appliance surge protection
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Evaluation of frequent surge problems
              </li>
              <li className="text-blue-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Commercial or high-value equipment protection
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Surge Protection?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
            Protect your valuable electronics and appliances with professional surge protection installation. 
            Our verified electricians can design and install comprehensive protection systems for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=Electrician">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
                data-testid="find-electricians"
              >
                <Shield className="w-5 h-5 mr-2" />
                Find Surge Protection Experts
              </Button>
            </Link>
            <Link href="/home-jobs-guide">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
                data-testid="more-guides"
              >
                <Wrench className="w-5 h-5 mr-2" />
                More Electrical Guides
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}