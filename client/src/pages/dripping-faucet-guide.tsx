import { Link } from "wouter";
import { ArrowLeft, Droplets, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import drippingFaucetImage from "@assets/generated_images/Dripping_faucet_repair_image_cde1cce0.png";

export default function DrippingFaucetGuide() {
  useSEO({
    title: "How to Fix a Dripping Faucet: Step-by-Step Guide to Stop Leaks Fast | Homejobspro.com",
    description: "Complete step-by-step guide to fixing a dripping faucet. Learn how to identify the problem, gather tools, and repair common faucet types safely.",
    keywords: "dripping faucet repair, fix leaky tap, faucet cartridge replacement, plumbing DIY, stop faucet drip, faucet repair guide",
    canonical: "https://homejobspro.com/dripping-faucet-guide",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Fix a Dripping Faucet",
      "description": "Complete step-by-step guide to fixing a dripping faucet and stopping leaks fast",
      "totalTime": "PT30M",
      "supply": [
        "Adjustable wrench",
        "Screwdriver set",
        "Plumber's grease",
        "Replacement parts (washers, O-rings, cartridge)"
      ],
      "tool": [
        "Adjustable wrench",
        "Screwdriver",
        "Pliers"
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Turn off water supply",
          "text": "Locate and turn off the water supply valves under the sink"
        },
        {
          "@type": "HowToStep", 
          "name": "Remove faucet handle",
          "text": "Unscrew and remove the faucet handle to access internal components"
        },
        {
          "@type": "HowToStep",
          "name": "Identify and replace worn parts",
          "text": "Replace worn washers, O-rings, or cartridge causing the leak"
        }
      ]
    }
  });

  const steps = [
    {
      number: 1,
      title: "Turn Off the Water Supply",
      description: "Before starting any repair, locate the shut-off valves under the sink and turn them clockwise to stop water flow. If you can't find these valves, turn off the main water supply to your home.",
      tips: ["Test that water is off by trying to turn on the faucet", "Keep a bucket handy to catch any remaining water"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 2,
      title: "Remove the Faucet Handle",
      description: "Look for a screw either on top of the handle or hidden under a decorative cap. Remove the screw and gently pull the handle straight up or wiggle it off.",
      tips: ["Take a photo before disassembly for reference", "Use gentle pressure to avoid breaking plastic parts"],
      timeEstimate: "3-5 minutes"
    },
    {
      number: 3,
      title: "Access the Packing Nut",
      description: "Once the handle is removed, you'll see the packing nut (large nut around the stem). Use an adjustable wrench to loosen this nut by turning counterclockwise.",
      tips: ["Hold the faucet body steady while turning", "Don't overtighten when reassembling"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 4,
      title: "Remove the Valve Stem",
      description: "After removing the packing nut, pull out the entire valve stem assembly. This may require some wiggling or gentle twisting motion.",
      tips: ["Note the orientation of the stem for proper reinstallation", "Check for any obvious wear or damage"],
      timeEstimate: "3-4 minutes"
    },
    {
      number: 5,
      title: "Inspect and Replace Worn Parts",
      description: "Look for worn washers at the bottom of the stem, damaged O-rings around the stem, or a worn valve seat. Replace any damaged components with exact matches.",
      tips: ["Bring old parts to the hardware store for matching", "Apply thin layer of plumber's grease to new O-rings"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 6,
      title: "Reassemble the Faucet",
      description: "Install the valve stem back into the faucet body, replace the packing nut, and reattach the handle. Make sure everything is properly aligned.",
      tips: ["Don't overtighten - snug is sufficient", "Ensure handle operates smoothly before final tightening"],
      timeEstimate: "5-7 minutes"
    },
    {
      number: 7,
      title: "Turn Water Back On and Test",
      description: "Slowly turn the water supply back on and test your repair. Check for any remaining leaks and ensure the faucet operates properly.",
      tips: ["Turn water on gradually to avoid pressure shock", "Let faucet run for a few minutes to check for leaks"],
      timeEstimate: "3-5 minutes"
    }
  ];

  const toolsNeeded = [
    "Adjustable wrench or pipe wrench",
    "Screwdriver set (Phillips and flathead)",
    "Needle-nose pliers", 
    "Flashlight or headlamp",
    "Bucket or towels for water cleanup"
  ];

  const partsNeeded = [
    "Replacement washers (various sizes)",
    "O-rings (bring old ones for matching)",
    "Valve seat (if damaged)",
    "Plumber's grease or silicone lubricant",
    "Potentially: new cartridge or stem assembly"
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
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <img 
              src={drippingFaucetImage} 
              alt="Close-up of a dripping faucet showing water droplet - professional plumbing repair guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">How to Fix a Dripping Faucet</h1>
                <p className="text-blue-100 text-lg">Step-by-Step Guide to Stop Leaks Fast</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>30-45 minutes</span>
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
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-700 leading-relaxed">
                This is a generic guide for educational purposes only. Actual results may differ depending on your specific faucet type, age, and condition. 
                Some repairs may require specialized tools or knowledge. If you're uncomfortable with any step or encounter unexpected issues, 
                we strongly recommend seeking guidance from a licensed plumbing professional. Always prioritize safety and know your limits.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Repair Process</h2>
          
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
                        <h4 className="font-medium text-blue-900 mb-2">Pro Tips:</h4>
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
            When to Call a Professional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Multiple leaks or widespread plumbing issues
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Damaged valve seat that needs professional tools
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Water pressure issues throughout the house
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Corroded or seized plumbing components
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                You're uncomfortable with any repair step
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Need permits or code compliance verification
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            If this repair seems too complex or you encounter unexpected issues, our verified plumbing professionals 
            are ready to help with fast, reliable service.
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