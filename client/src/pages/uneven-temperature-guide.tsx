
import { Link } from "wouter";
import { ArrowLeft, Thermometer, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield, Home } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import unevenTemperatureImage from "@assets/generated_images/Uneven_temperature_control_image_c7be73c4.png";

export default function UnevenTemperatureGuide() {
  useSEO({
    title: "Why Are Some Rooms Hotter Than Others? How to Fix Uneven Heating & Cooling | Homejobspro.com",
    description: "Learn why some rooms are hotter or colder than others and how to fix uneven heating and cooling. Step-by-step guide to balance temperature throughout your home.",
    keywords: "uneven heating cooling, hot cold rooms, temperature balance, HVAC airflow, ductwork problems, zone control",
    canonical: "https://homejobspro.com/uneven-temperature-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Check All Air Vents and Registers",
      description: "Ensure all supply and return vents throughout the house are open and unblocked. Furniture, curtains, or debris can restrict airflow to specific rooms.",
      tips: ["Open all vents at least 80% for proper system balance", "Remove furniture or objects blocking vents", "Clean dust and debris from vent openings"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 2,
      title: "Inspect and Replace Air Filter",
      description: "A dirty air filter reduces airflow and can cause uneven temperatures. Check the main system filter and any individual room filters if applicable.",
      tips: ["Replace filter if you can't see light through it", "Check filter size and airflow direction arrows", "Consider upgrading to higher MERV rating for better filtration"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 3,
      title: "Balance the Dampers in Ductwork",
      description: "Locate dampers in your ductwork and adjust them to redirect more airflow to rooms that need it. Dampers are usually near the main trunk lines.",
      tips: ["Partially close dampers to rooms that are too hot/cold", "Open dampers fully to rooms that need more conditioning", "Make small adjustments and test for 24-48 hours"],
      timeEstimate: "15-30 minutes"
    },
    {
      number: 4,
      title: "Check for Air Leaks in Ductwork",
      description: "Inspect accessible ductwork in basements, crawl spaces, or attics for disconnected joints, holes, or loose connections that could cause air loss.",
      tips: ["Look for obvious gaps or disconnected ducts", "Feel for air leaks around duct joints", "Use duct tape or mastic sealant for small leaks"],
      timeEstimate: "20-45 minutes"
    },
    {
      number: 5,
      title: "Evaluate Insulation and Air Sealing",
      description: "Poor insulation or air leaks in problematic rooms can cause temperature imbalances. Check windows, doors, and walls for drafts or inadequate insulation.",
      tips: ["Use incense or tissue paper to detect air leaks", "Check weatherstripping around doors and windows", "Consider adding insulation to problem areas"],
      timeEstimate: "15-30 minutes"
    },
    {
      number: 6,
      title: "Assess Sun Exposure and Heat Sources",
      description: "Rooms with large windows, southern exposure, or heat-generating appliances will naturally be warmer. Consider window treatments or heat management solutions.",
      tips: ["Install blinds or curtains on south-facing windows", "Use ceiling fans to improve air circulation", "Relocate heat-generating electronics if possible"],
      timeEstimate: "10-20 minutes"
    },
    {
      number: 7,
      title: "Consider Zoning Solutions",
      description: "For persistent problems, evaluate whether your home needs zone control systems, additional return air ducts, or mini-split systems for problem areas.",
      tips: ["Zone systems allow independent temperature control", "Mini-splits can supplement existing HVAC", "Additional return ducts improve air circulation"],
      timeEstimate: "Research phase - 30 minutes"
    }
  ];

  const toolsNeeded = [
    "Flashlight or headlamp",
    "Incense stick or tissue paper",
    "Screwdriver for vent adjustments",
    "Duct tape or mastic sealant",
    "Ladder for accessing high vents"
  ];

  const partsNeeded = [
    "Replacement air filter",
    "Duct sealant or tape",
    "Weatherstripping for doors/windows",
    "Window treatments (blinds/curtains)",
    "Professional consultation for major fixes"
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
              src={unevenTemperatureImage} 
              alt="Uneven heating and cooling in home - temperature balance guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Why Are Some Rooms Hotter Than Others?</h1>
                <p className="text-blue-100 text-lg">How to Fix Uneven Heating & Cooling</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>1-3 hours</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$20-100 in supplies</span>
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
                This is a general guide for educational purposes only. HVAC systems vary significantly, and some issues may require professional assessment. 
                Working in attics, crawl spaces, or with ductwork can be dangerous. Major ductwork modifications, zoning systems, or electrical work 
                should always be performed by licensed HVAC professionals. Prioritize safety and consult professionals when in doubt.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Balancing Process</h2>
          
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
                Major ductwork modifications needed
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Installing zone control systems
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Adding new return air ducts
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                HVAC system sizing problems
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Persistent problems after basic fixes
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Installing mini-split systems
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional HVAC Balancing?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            If basic adjustments don't solve your uneven heating and cooling problems, our verified HVAC technicians 
            can perform professional system balancing and recommend advanced solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=HVAC Technician">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                data-testid="find-hvac-techs"
              >
                <Thermometer className="w-5 h-5 mr-2" />
                Find Local HVAC Techs
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
