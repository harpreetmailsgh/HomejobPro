
import { Link } from "wouter";
import { ArrowLeft, Volume2, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield, Ear } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import hvacNoiseImage from "@assets/generated_images/HVAC_noise_issue_image_f38410af.png";

export default function HVACNoiseGuide() {
  useSEO({
    title: "HVAC Making Loud or Strange Noises? What They Mean and How to Fix Them | Homejobspro.com",
    description: "Learn what different HVAC noises mean and how to fix them. Troubleshooting guide for banging, squealing, rattling, and other strange heating and cooling sounds.",
    keywords: "HVAC noises, air conditioner sounds, furnace noises, HVAC troubleshooting, loud air conditioner, strange heating sounds",
    canonical: "https://homejobspro.com/hvac-noise-guide"
  });

  const noiseTypes = [
    {
      sound: "Banging or Clanking",
      description: "Loud metallic banging sounds, especially when system starts or stops.",
      possibleCauses: ["Loose or broken blower fan blades", "Loose access panels", "Ductwork expansion/contraction", "Loose motor mounts"],
      solutions: ["Tighten loose panels and screws", "Inspect and secure blower assembly", "Add ductwork supports", "Check motor mounting bolts"],
      urgency: "Medium - Address within a week",
      color: "orange"
    },
    {
      sound: "Squealing or Screeching",
      description: "High-pitched squealing sounds, often when system starts.",
      possibleCauses: ["Worn or loose blower belt", "Dirty or failing blower motor bearings", "Fan blade rubbing against housing"],
      solutions: ["Replace worn blower belt", "Lubricate motor bearings if possible", "Align fan blades properly", "Clean debris from blower area"],
      urgency: "High - Address immediately",
      color: "red"
    },
    {
      sound: "Rattling or Vibrating",
      description: "Continuous rattling or vibrating sounds during operation.",
      possibleCauses: ["Loose screws or bolts", "Debris in ductwork or unit", "Worn motor mounts", "Loose ductwork connections"],
      solutions: ["Tighten all visible screws and bolts", "Remove debris from unit and vents", "Secure loose ductwork", "Replace worn rubber isolators"],
      urgency: "Low - Monitor and address soon",
      color: "yellow"
    },
    {
      sound: "Clicking or Ticking",
      description: "Repetitive clicking sounds, especially during startup.",
      possibleCauses: ["Electrical relay problems", "Thermostat issues", "Loose electrical connections", "Failing capacitor"],
      solutions: ["Check thermostat settings", "Inspect electrical connections", "Test and replace relays if needed", "Professional electrical diagnosis"],
      urgency: "Medium - May indicate electrical issues",
      color: "orange"
    },
    {
      sound: "Hissing or Whistling",
      description: "Air leakage sounds or high-pitched whistling.",
      possibleCauses: ["Ductwork air leaks", "Dirty air filter", "Closed or blocked vents", "Refrigerant leaks"],
      solutions: ["Seal ductwork leaks", "Replace dirty air filter", "Open closed vents", "Professional refrigerant leak check"],
      urgency: "Medium - Can affect efficiency",
      color: "blue"
    },
    {
      sound: "Grinding or Scraping",
      description: "Metal-on-metal grinding or scraping sounds.",
      possibleCauses: ["Worn motor bearings", "Damaged fan blades", "Foreign objects in unit", "Failing compressor"],
      solutions: ["Turn off system immediately", "Professional motor inspection", "Remove any visible debris", "Compressor replacement may be needed"],
      urgency: "Critical - Stop using system",
      color: "red"
    }
  ];

  const preventiveMaintenance = [
    "Change air filters every 1-3 months",
    "Keep outdoor unit clear of debris",
    "Lubricate motor bearings annually (if applicable)",
    "Tighten electrical connections during service",
    "Clean condenser and evaporator coils",
    "Inspect and secure ductwork connections"
  ];

  const toolsNeeded = [
    "Screwdriver set (Phillips and flathead)",
    "Adjustable wrench",
    "Flashlight or headlamp",
    "Level for checking unit alignment",
    "Multimeter for electrical testing"
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'red': return 'border-red-200 bg-red-50';
      case 'orange': return 'border-orange-200 bg-orange-50';
      case 'yellow': return 'border-yellow-200 bg-yellow-50';
      case 'blue': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getUrgencyColor = (color: string) => {
    switch(color) {
      case 'red': return 'text-red-800 bg-red-100';
      case 'orange': return 'text-orange-800 bg-orange-100';
      case 'yellow': return 'text-yellow-800 bg-yellow-100';
      case 'blue': return 'text-blue-800 bg-blue-100';
      default: return 'text-gray-800 bg-gray-100';
    }
  };

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
              src={hvacNoiseImage} 
              alt="HVAC system making loud noises - troubleshooting guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">HVAC Making Loud or Strange Noises?</h1>
                <p className="text-blue-100 text-lg">What They Mean and How to Fix Them</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>15-60 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$10-50 for parts</span>
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
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Safety Warning</h3>
              <p className="text-yellow-700 leading-relaxed">
                This guide helps identify common HVAC noises, but some issues require immediate professional attention. 
                If you hear grinding, metal-on-metal scraping, or electrical arcing sounds, turn off your system immediately and contact an HVAC professional. 
                Working with electrical components or refrigerant systems requires specialized training and tools. Always prioritize safety over DIY repairs.
              </p>
            </div>
          </div>
        </div>

        {/* Noise Identification Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Ear className="w-8 h-8 mr-3 text-purple-600" />
            HVAC Noise Identification Guide
          </h2>
          
          <div className="space-y-6">
            {noiseTypes.map((noise, index) => (
              <div key={index} className={`border rounded-xl p-6 ${getColorClasses(noise.color)}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{noise.sound}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(noise.color)}`}>
                    {noise.urgency}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{noise.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Possible Causes:</h4>
                    <ul className="space-y-1">
                      {noise.possibleCauses.map((cause, causeIndex) => (
                        <li key={causeIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Potential Solutions:</h4>
                    <ul className="space-y-1">
                      {noise.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-gray-700 text-sm flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
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

        {/* Tools and Preventive Maintenance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Wrench className="w-6 h-6 text-purple-600 mr-2" />
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
              Preventive Maintenance
            </h2>
            <ul className="space-y-2">
              {preventiveMaintenance.map((task, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Situations */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            Stop Using System Immediately If You Hear:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Grinding or metal-on-metal scraping
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Electrical arcing or sparking sounds
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Loud banging that gets progressively worse
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Hissing sounds near electrical components
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Any sound accompanied by burning smell
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Continuous loud squealing that won't stop
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional HVAC Diagnosis?</h2>
          <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
            If you can't identify the noise or the problem persists after basic troubleshooting, our verified HVAC technicians 
            can diagnose and repair complex system issues safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=HVAC Technician">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
                data-testid="find-hvac-techs"
              >
                <Volume2 className="w-5 h-5 mr-2" />
                Find Local HVAC Techs
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
