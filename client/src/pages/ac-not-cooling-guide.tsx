import { Link } from "wouter";
import { ArrowLeft, Thermometer, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import acNotCoolingImage from "@assets/generated_images/AC_not_cooling_image_713e80fc.png";

export default function ACNotCoolingGuide() {
  useSEO({
    title: "AC Running but Not Cooling? Top Reasons and Fixes | Homejobspro.com",
    description: "Learn why your air conditioner runs but doesn't cool. Step-by-step troubleshooting guide to fix common AC cooling problems.",
    keywords: "AC not cooling, air conditioner repair, HVAC troubleshooting, cooling system problems, air conditioner maintenance",
    canonical: "https://homejobspro.com/ac-not-cooling-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Check the Thermostat Settings",
      description: "Ensure the thermostat is set to 'Cool' mode and the temperature is set lower than the current room temperature. Check that it's not in 'Fan Only' mode.",
      tips: ["Try lowering temperature by 5 degrees", "Replace thermostat batteries if digital display is dim"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 2,
      title: "Inspect and Replace Air Filter",
      description: "A dirty air filter restricts airflow and reduces cooling efficiency. Check the filter and replace if it's dirty, clogged, or hasn't been changed in 3+ months.",
      tips: ["Hold filter up to light - if you can't see through it, replace it", "Mark calendar for monthly filter checks"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 3,
      title: "Check Circuit Breakers",
      description: "Verify that the circuit breakers for both the indoor and outdoor AC units are in the 'ON' position. A tripped breaker can cause partial operation.",
      tips: ["Outdoor unit often has a separate breaker", "Look for breakers labeled 'AC', 'Air Handler', or 'Condenser'"],
      timeEstimate: "3-5 minutes"
    },
    {
      number: 4,
      title: "Examine the Outdoor Unit",
      description: "Check that the outdoor condenser unit is running and not blocked by debris, leaves, or vegetation. Ensure adequate clearance around the unit.",
      tips: ["Clear 2-3 feet around unit", "Gently clean debris from condenser coils with garden hose"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 5,
      title: "Verify Indoor Vents Are Open",
      description: "Ensure all supply vents throughout the house are open and unblocked by furniture, curtains, or other obstructions.",
      tips: ["Check each room systematically", "Aim for 80% of vents open for proper system balance"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 6,
      title: "Check for Ice Buildup",
      description: "Look for ice on the indoor evaporator coils or refrigerant lines. If present, turn off the system and let it thaw completely before restarting.",
      tips: ["Ice indicates airflow or refrigerant problems", "May take 4-6 hours to fully thaw"],
      timeEstimate: "5 minutes check, 4-6 hours thaw"
    },
    {
      number: 7,
      title: "Test After Basic Maintenance",
      description: "After completing basic checks and maintenance, run the system for 30-60 minutes to see if cooling improves.",
      tips: ["Give system time to reach set temperature", "Monitor for unusual sounds or odors"],
      timeEstimate: "30-60 minutes"
    }
  ];

  const toolsNeeded = [
    "Flashlight or headlamp",
    "Garden hose for cleaning",
    "New air filter (correct size)",
    "Soft brush for coil cleaning",
    "Screwdriver (if needed)"
  ];

  const partsNeeded = [
    "Replacement air filter",
    "Coil cleaner (if needed)",
    "Thermostat batteries",
    "Condensate drain cleaner",
    "Professional refrigerant (requires tech)"
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
              src={acNotCoolingImage} 
              alt="Air conditioning unit not cooling properly - HVAC repair guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">AC Running but Not Cooling?</h1>
                <p className="text-blue-100 text-lg">Top Reasons and Fixes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>30-90 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$15-50 in supplies</span>
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
                This is a generic guide for educational purposes only. Actual results may differ depending on your specific HVAC system, age, and condition. 
                Some issues may require specialized tools, refrigerant handling, or electrical work that must be performed by licensed professionals. 
                If you're uncomfortable with any step or encounter unexpected issues, we strongly recommend seeking guidance from a licensed HVAC technician. Always prioritize safety and know your limits.
              </p>
            </div>
          </div>
        </div>

        {/* Tools and Parts Needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Wrench className="w-6 h-6 text-red-600 mr-2" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Troubleshooting Process</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-red-200"></div>
                )}
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 relative z-10">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full">
                          {step.timeEstimate}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-medium text-red-900 mb-2">Pro Tips:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-red-800 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
                Refrigerant leak or low refrigerant levels
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Compressor or motor problems
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Electrical issues or damaged wiring
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Ductwork problems or leaks
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                System age over 15 years with frequent issues
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Basic maintenance doesn't restore cooling
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional HVAC Help?</h2>
          <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
            If basic troubleshooting doesn't restore your AC's cooling performance, our verified HVAC technicians 
            can diagnose and fix complex cooling system problems with the right tools and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=HVAC Technician">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
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
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3"
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