import { Link } from "wouter";
import { ArrowLeft, Droplets, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import runningToiletImage from "@assets/generated_images/Running_toilet_repair_image_c3d5a6c5.png";

export default function RunningToiletGuide() {
  useSEO({
    title: "Toilet Won't Stop Running? Easy Fixes for Flapper & Fill Valve Problems | Homejobspro.com",
    description: "Learn how to fix a running toilet with step-by-step instructions. Repair flapper, fill valve, and chain issues to stop water waste.",
    keywords: "running toilet repair, toilet flapper fix, fill valve replacement, toilet chain adjustment, bathroom plumbing DIY",
    canonical: "https://homejobspro.com/running-toilet-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Remove the Toilet Tank Lid",
      description: "Carefully lift the tank lid straight up and set it aside on a safe, flat surface. Avoid placing it where it could fall and break.",
      tips: ["Tank lids are heavy and fragile", "Place on a towel to prevent scratching"],
      timeEstimate: "1-2 minutes"
    },
    {
      number: 2,
      title: "Identify the Problem",
      description: "Look inside the tank to see if the flapper is sealing properly, the chain is the right length, or if water keeps filling.",
      tips: ["Common issues: warped flapper, incorrect chain length, stuck fill valve", "Note water level in tank"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 3,
      title: "Adjust or Replace the Flapper",
      description: "If the flapper isn't sealing, clean around the seat and check for warping. Replace if damaged or adjust for proper alignment.",
      tips: ["Turn off water and flush to empty tank first", "Flappers cost $5-10 and are easy to replace"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 4,
      title: "Fix the Chain Length",
      description: "The chain should have slight slack but not be too loose. Adjust the chain length so the flapper opens fully and closes completely.",
      tips: ["Too tight: flapper won't seal", "Too loose: flapper won't open fully"],
      timeEstimate: "3-5 minutes"
    },
    {
      number: 5,
      title: "Check the Fill Valve",
      description: "If water keeps running, the fill valve may be stuck. Try lifting the float arm or replace the fill valve if it's old or damaged.",
      tips: ["Fill valves last 4-5 years typically", "Modern fill valves are more reliable than old ones"],
      timeEstimate: "15-30 minutes"
    },
    {
      number: 6,
      title: "Adjust Water Level",
      description: "Water level should be about 1 inch below the rim of the tank. Bend the float arm or adjust the screw on newer fill valves.",
      tips: ["Too high: water flows into overflow tube", "Too low: weak flush performance"],
      timeEstimate: "5 minutes"
    },
    {
      number: 7,
      title: "Test the Repair",
      description: "Turn water back on, let tank fill, and test flush several times. Ensure toilet stops running and flushes properly.",
      tips: ["Listen for any continuing running sounds", "Check that flush is strong enough"],
      timeEstimate: "5 minutes"
    }
  ];

  const toolsNeeded = [
    "Adjustable pliers",
    "Scissors (for chain adjustment)",
    "Towel for cleanup",
    "Bucket (if replacing fill valve)",
    "Rubber gloves (optional)"
  ];

  const partsNeeded = [
    "Replacement flapper (if needed)",
    "New fill valve (if needed)",
    "Chain (usually comes with flapper)",
    "Plumber's grease for seals",
    "Tank bolt gaskets (if leaking)"
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
              src={runningToiletImage} 
              alt="Running toilet with visible tank components - plumbing repair guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Toilet Won't Stop Running?</h1>
                <p className="text-blue-100 text-lg">Easy Fixes for Flapper & Fill Valve Problems</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>15-45 minutes</span>
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
                This is a generic guide for educational purposes only. Actual results may differ depending on your specific toilet model, age, and condition. 
                Some repairs may require specialized knowledge or replacement of major components. If you're uncomfortable with any step or encounter unexpected issues, 
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
                Toilet is cracked or rocking
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Major leaks around the base
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Multiple toilet problems simultaneously
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Need to replace the entire toilet
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Sewage backup or overflow issues
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Uncomfortable with internal repairs
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            If your toilet continues to run or you encounter a more complex issue, 
            our verified plumbing professionals are ready to help with fast, reliable service.
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