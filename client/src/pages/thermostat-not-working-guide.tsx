
import { Link } from "wouter";
import { ArrowLeft, Thermometer, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield, Settings } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import thermostatImage from "@assets/generated_images/Thermostat_not_working_image_c8f1c412.png";

export default function ThermostatNotWorkingGuide() {
  useSEO({
    title: "Thermostat Not Working? Easy Fixes for Heating and Cooling Issues | Homejobspro.com",
    description: "Learn how to troubleshoot and fix common thermostat problems. Step-by-step guide to diagnose temperature control issues and restore home comfort.",
    keywords: "thermostat not working, thermostat troubleshooting, temperature control problems, HVAC thermostat repair, smart thermostat issues",
    canonical: "https://homejobspro.com/thermostat-not-working-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Check Thermostat Display and Power",
      description: "Verify the thermostat display is active and readable. If blank or dim, the unit may need new batteries or have a power supply issue.",
      tips: ["Look for low battery indicators on digital displays", "Try fresh alkaline batteries first"],
      timeEstimate: "5 minutes"
    },
    {
      number: 2,
      title: "Verify Thermostat Settings",
      description: "Ensure the thermostat is set to the correct mode (Heat/Cool/Auto) and the temperature setting is appropriate for your desired comfort level.",
      tips: ["Set temperature 5 degrees from current room temperature", "Check that fan is set to 'Auto' not 'On'"],
      timeEstimate: "3 minutes"
    },
    {
      number: 3,
      title: "Check Circuit Breakers",
      description: "Locate and check circuit breakers for both the HVAC system and thermostat. Reset any tripped breakers by switching them fully off, then back on.",
      tips: ["Look for breakers labeled 'HVAC', 'Furnace', or 'AC'", "Some thermostats have separate low-voltage breakers"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 4,
      title: "Replace Thermostat Batteries",
      description: "Even if display seems normal, weak batteries can cause intermittent operation. Replace with fresh alkaline batteries and wait 5 minutes for system to reset.",
      tips: ["Use quality alkaline batteries, not rechargeable", "Note battery orientation before removal"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 5,
      title: "Clean the Thermostat",
      description: "Remove the thermostat cover and gently clean dust and debris from sensors and contacts using a soft brush or compressed air.",
      tips: ["Turn off power before removing cover", "Don't use liquid cleaners on electronic components"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 6,
      title: "Check Wiring Connections",
      description: "Inspect visible wiring connections at the thermostat for loose, corroded, or damaged wires. Ensure all wires are securely connected to terminals.",
      tips: ["Take photo before disconnecting any wires", "Look for green corrosion on wire connections"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 7,
      title: "Test System Response",
      description: "After basic troubleshooting, test both heating and cooling modes. Allow 10-15 minutes for system to respond to temperature changes.",
      tips: ["Listen for system startup sounds", "Check that air flows from vents in correct mode"],
      timeEstimate: "20-30 minutes"
    }
  ];

  const commonIssues = [
    {
      problem: "Blank or Dark Display",
      causes: ["Dead batteries", "Tripped breaker", "Blown fuse", "Loose wiring"],
      solutions: ["Replace batteries", "Check/reset breakers", "Inspect fuse box", "Tighten wire connections"]
    },
    {
      problem: "System Won't Turn On",
      causes: ["Wrong mode setting", "Temperature set incorrectly", "HVAC breaker off", "Dirty air filter"],
      solutions: ["Check mode (Heat/Cool)", "Adjust temperature setting", "Reset HVAC breaker", "Replace air filter"]
    },
    {
      problem: "Temperature Not Accurate",
      causes: ["Thermostat location", "Dust on sensors", "Calibration drift", "Heat/cold sources nearby"],
      solutions: ["Relocate thermostat", "Clean sensors", "Recalibrate unit", "Remove heat sources"]
    },
    {
      problem: "System Cycles Too Often",
      causes: ["Wrong thermostat size", "Poor calibration", "Dirty components", "HVAC system issues"],
      solutions: ["Check compatibility", "Recalibrate settings", "Clean thermostat", "Service HVAC system"]
    }
  ];

  const toolsNeeded = [
    "Small screwdriver set",
    "Soft brush or compressed air",
    "Digital multimeter (for testing)",
    "Flashlight for inspection",
    "Phone camera (for wiring photos)"
  ];

  const partsNeeded = [
    "Fresh alkaline batteries",
    "Wire nuts (if needed)",
    "Electrical tape",
    "Contact cleaner spray",
    "Replacement thermostat (if faulty)"
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
              src={thermostatImage} 
              alt="Thermostat troubleshooting guide - temperature control problems"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Thermostat Not Working?</h1>
                <p className="text-blue-100 text-lg">Easy Fixes for Heating and Cooling Issues</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>45-90 minutes</span>
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
                This is a generic guide for educational purposes only. Thermostat wiring and systems vary significantly by manufacturer and model. 
                Always turn off power before working on electrical connections. If you're uncomfortable with electrical work or encounter 
                complex wiring issues, consult a licensed HVAC technician to prevent damage or safety hazards.
              </p>
            </div>
          </div>
        </div>

        {/* Common Issues Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 mr-3 text-red-600" />
            Common Thermostat Problems
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIssues.map((issue, index) => (
              <div key={index} className="border border-red-200 rounded-xl p-6 bg-red-50">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{issue.problem}</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">Possible Causes:</h4>
                    <ul className="space-y-1">
                      {issue.causes.map((cause, causeIndex) => (
                        <li key={causeIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Solutions:</h4>
                    <ul className="space-y-1">
                      {issue.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
                Complex wiring issues or multiple loose wires
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Thermostat replacement or upgrade needed
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                HVAC system compatibility questions
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Electrical panel or breaker problems
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Smart thermostat installation or setup
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Persistent problems after basic troubleshooting
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Thermostat Help?</h2>
          <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
            If basic troubleshooting doesn't resolve your thermostat issues, our verified HVAC technicians 
            can diagnose complex problems, handle wiring issues, and install new thermostats safely.
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
