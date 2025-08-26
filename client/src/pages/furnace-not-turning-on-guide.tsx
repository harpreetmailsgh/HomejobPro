
import { Link } from "wouter";
import { ArrowLeft, Thermometer, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield, Flame } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import furnaceNotWorkingImage from "@assets/generated_images/Furnace_not_working_image_beeb5f8d.png";

export default function FurnaceNotTurningOnGuide() {
  useSEO({
    title: "Furnace Not Turning On? Troubleshooting Guide for Quick Fixes | Homejobspro.com",
    description: "Learn how to troubleshoot and fix a furnace that won't turn on. Step-by-step guide to diagnose common heating problems and restore warmth to your home.",
    keywords: "furnace not turning on, furnace troubleshooting, heating system repair, furnace not working, HVAC problems, heating repair guide",
    canonical: "https://homejobspro.com/furnace-not-turning-on-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Check the Thermostat Settings",
      description: "Verify the thermostat is set to 'Heat' mode and the temperature is set higher than the current room temperature. Check if the display is working and batteries are functional.",
      tips: ["Set temperature 5-10 degrees above current room temp", "Replace thermostat batteries if display is dim or blank", "Try switching from 'Auto' to 'Heat' mode"],
      timeEstimate: "2-5 minutes"
    },
    {
      number: 2,
      title: "Check Power Supply and Circuit Breakers",
      description: "Ensure the furnace power switch is ON (usually located on or near the furnace). Check that circuit breakers for the furnace haven't tripped and are in the ON position.",
      tips: ["Look for a light switch-style power switch near the furnace", "Check both the main furnace breaker and the blower motor breaker", "Reset any tripped breakers by turning them fully OFF, then ON"],
      timeEstimate: "3-5 minutes"
    },
    {
      number: 3,
      title: "Inspect the Air Filter",
      description: "A severely clogged air filter can cause the furnace to overheat and shut down for safety. Remove and inspect the filter - replace if dirty or clogged.",
      tips: ["Hold filter up to light - if you can't see through it, replace it", "Check filter size (usually printed on the frame)", "Install with airflow arrows pointing toward the furnace"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 4,
      title: "Check Gas Supply (Gas Furnaces Only)",
      description: "For gas furnaces, ensure the gas shut-off valve is open (handle parallel to the gas line). Check if other gas appliances in your home are working normally.",
      tips: ["Gas valve handle should be parallel to the pipe when open", "Test other gas appliances like water heater or stove", "If you smell gas, leave immediately and call the gas company"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 5,
      title: "Inspect the Pilot Light (Older Gas Furnaces)",
      description: "For older gas furnaces with pilot lights, check if the pilot flame is lit. If not, follow the manufacturer's instructions to relight it safely.",
      tips: ["Look for a small blue flame in the pilot light assembly", "Follow relighting instructions on the furnace label", "If pilot won't stay lit, call a professional"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 6,
      title: "Check Furnace Doors and Access Panels",
      description: "Ensure all furnace doors and access panels are properly closed and latched. Many furnaces have safety switches that prevent operation when panels are open.",
      tips: ["Push firmly on all access panels until they click", "Look for loose or bent panel edges", "Some panels have safety switches - ensure they're engaged"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 7,
      title: "Examine the Condensate Drain",
      description: "High-efficiency furnaces have condensate drains that can become clogged. Check the drain pan and clear any visible blockages from the drain line.",
      tips: ["Look for standing water in the drain pan", "Use a wet/dry vacuum to clear drain line clogs", "Pour cup of water in drain to test flow"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 8,
      title: "Test the System",
      description: "After completing the checks above, set the thermostat to call for heat and wait 5-10 minutes for the system to start up. Listen for normal furnace sounds.",
      tips: ["Be patient - furnaces can take several minutes to start", "Normal sounds include clicking, whooshing, and gentle rumbling", "Abnormal sounds include banging, screeching, or loud rattling"],
      timeEstimate: "10-15 minutes"
    }
  ];

  const toolsNeeded = [
    "Flashlight or headlamp",
    "Screwdriver (Phillips and flathead)",
    "New air filter (correct size)",
    "Wet/dry vacuum (for drain clearing)",
    "Multimeter (for advanced troubleshooting)"
  ];

  const partsNeeded = [
    "Replacement air filter",
    "Thermostat batteries",
    "Condensate drain cleaner",
    "Igniter (if needed - professional install)",
    "Professional service call for gas issues"
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
              src={furnaceNotWorkingImage} 
              alt="Furnace not turning on - heating system troubleshooting guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Furnace Not Turning On?</h1>
                <p className="text-blue-100 text-lg">Troubleshooting Guide for Quick Fixes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>30-60 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$10-40 in supplies</span>
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
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Safety Disclaimer</h3>
              <p className="text-yellow-700 leading-relaxed">
                This is a generic guide for educational purposes only. Furnace systems involve gas, electricity, and complex mechanical components that can be dangerous. 
                If you smell gas, detect carbon monoxide, or are uncomfortable with any troubleshooting step, stop immediately and contact a licensed HVAC professional. 
                Some repairs require specialized training and tools. Always prioritize safety and know your limits when working with heating systems.
              </p>
            </div>
          </div>
        </div>

        {/* Tools and Parts Needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Wrench className="w-6 h-6 text-orange-600 mr-2" />
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
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-orange-200"></div>
                )}
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 relative z-10">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                          {step.timeEstimate}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h4 className="font-medium text-orange-900 mb-2">Pro Tips:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-orange-800 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
                Gas leaks or strong gas odor
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Carbon monoxide detector alarms
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Faulty igniter or flame sensor
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Blower motor or control board issues
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Heat exchanger cracks or damage
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Basic troubleshooting doesn't resolve issue
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Heating Repair?</h2>
          <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
            If your furnace still won't turn on after troubleshooting, our verified HVAC technicians 
            can diagnose and repair complex heating system problems safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=HVAC Technician">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3"
                data-testid="find-hvac-techs"
              >
                <Flame className="w-5 h-5 mr-2" />
                Find Local HVAC Techs
              </Button>
            </Link>
            <Link href="/home-jobs-guide">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
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
