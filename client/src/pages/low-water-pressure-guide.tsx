import { Link } from "wouter";
import { ArrowLeft, Droplets, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import lowWaterPressureImage from "@assets/generated_images/Low_water_pressure_image_27745333.png";

export default function LowWaterPressureGuide() {
  useSEO({
    title: "Low Water Pressure in House or Shower? Here's How to Fix It | Homejobspro.com",
    description: "Learn how to diagnose and fix low water pressure issues. Step-by-step guide to improve water flow in your home.",
    keywords: "low water pressure fix, improve water flow, shower pressure problems, plumbing water pressure, home water systems",
    canonical: "https://homejobspro.com/low-water-pressure-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Determine the Scope of the Problem",
      description: "Check if low pressure affects one fixture, multiple fixtures, or the entire house. This helps identify if it's a localized or system-wide issue.",
      tips: ["Test hot and cold water separately", "Check both upstairs and downstairs fixtures"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 2,
      title: "Check and Clean Aerators",
      description: "Remove and clean aerators from faucets and showerheads. Mineral buildup often restricts water flow through these small screens.",
      tips: ["Soak in vinegar overnight for tough buildup", "Use an old toothbrush to scrub debris"],
      timeEstimate: "15-30 minutes"
    },
    {
      number: 3,
      title: "Inspect Showerheads",
      description: "Remove showerhead and check for clogs. Clean holes with a thin wire or soak in vinegar solution to dissolve mineral deposits.",
      tips: ["Use plastic bag with vinegar tied around showerhead", "Replace if holes are permanently damaged"],
      timeEstimate: "20-30 minutes"
    },
    {
      number: 4,
      title: "Check Water Shut-off Valves",
      description: "Ensure main water valve and individual fixture valves are fully open. Partially closed valves are a common cause of reduced pressure.",
      tips: ["Main valve is usually near water meter", "Under-sink valves should be turned counter-clockwise fully"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 5,
      title: "Test Water Pressure",
      description: "Use a pressure gauge at an outdoor spigot to measure actual water pressure. Normal pressure is 30-50 PSI, optimal is 40-45 PSI.",
      tips: ["Test at different times of day", "Pressure below 30 PSI needs professional attention"],
      timeEstimate: "10 minutes"
    },
    {
      number: 6,
      title: "Check for Leaks",
      description: "Inspect visible pipes, joints, and fixtures for leaks. Even small leaks can significantly reduce pressure throughout the system.",
      tips: ["Look for water stains or dampness", "Check toilet for internal leaks"],
      timeEstimate: "15-20 minutes"
    },
    {
      number: 7,
      title: "Consider Age of Pipes",
      description: "Older galvanized pipes may have internal corrosion reducing flow. This typically requires professional evaluation and potential replacement.",
      tips: ["Galvanized pipes typically last 20-50 years", "Newer homes with copper/PEX rarely have this issue"],
      timeEstimate: "Assessment only"
    }
  ];

  const toolsNeeded = [
    "Adjustable wrench",
    "Water pressure gauge",
    "Pliers",
    "Wire or thin needle",
    "Bucket and towels"
  ];

  const partsNeeded = [
    "White vinegar",
    "New aerators (if damaged)",
    "Replacement showerhead (if needed)",
    "Teflon tape for connections",
    "Cleaning brush or old toothbrush"
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
              src={lowWaterPressureImage} 
              alt="Low water pressure from shower head - plumbing repair guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Low Water Pressure?</h1>
                <p className="text-blue-100 text-lg">Here's How to Fix It</p>
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
                <span>$10-30 in supplies</span>
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
                This is a generic guide for educational purposes only. Actual results may differ depending on your specific plumbing system, local water supply, and infrastructure. 
                Some pressure issues may require professional diagnosis or municipal water system evaluation. If you're uncomfortable with any step or encounter unexpected issues, 
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
              Supplies You May Need
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Diagnosis & Repair</h2>
          
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
                Pressure below 30 PSI throughout house
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Need pressure regulator or booster pump
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Suspected pipe corrosion or damage
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Municipal water supply issues
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Need whole-house water system evaluation
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Pressure problems persist after cleaning
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            If basic cleaning doesn't solve your water pressure issues, our verified plumbing professionals 
            can diagnose and fix complex pressure problems with the right tools and expertise.
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