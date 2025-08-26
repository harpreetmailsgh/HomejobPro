import { Link } from "wouter";
import { ArrowLeft, Zap, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield, Flame } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import hotOutletImage from "@assets/generated_images/Hot_outlet_safety_warning_c31840c2.png";

export default function HotBuzzingOutletGuide() {
  useSEO({
    title: "Is Your Outlet Hot or Buzzing? Dangers and Fixes You Need to Know | Homejobspro.com",
    description: "Learn about the serious dangers of hot or buzzing electrical outlets. Immediate safety steps and when to call an electrician.",
    keywords: "hot outlet, buzzing outlet, electrical fire hazard, outlet safety, electrical emergency, dangerous outlet",
    canonical: "https://homejobspro.com/hot-buzzing-outlet-guide"
  });

  const steps = [
    {
      number: 1,
      title: "IMMEDIATELY Unplug All Devices",
      description: "Stop using the outlet immediately and unplug any connected devices. Do not touch the outlet itself - use the plugs to remove devices.",
      tips: ["Pull by the plug, not the cord", "Do not touch the outlet with bare hands"],
      timeEstimate: "30 seconds",
      urgency: "EMERGENCY"
    },
    {
      number: 2,
      title: "Turn Off Power at Circuit Breaker",
      description: "Go to your electrical panel and turn off the breaker that controls the hot/buzzing outlet. This stops power flow and prevents fire risk.",
      tips: ["Find the correct breaker using outlet labels", "Turn breaker fully OFF, not just to middle position"],
      timeEstimate: "2-3 minutes",
      urgency: "URGENT"
    },
    {
      number: 3,
      title: "Check for Visible Damage",
      description: "With power OFF, visually inspect the outlet for burn marks, melted plastic, discoloration, or scorch marks around the opening.",
      tips: ["Do not touch - only look", "Take photos for electrician if safe to do so"],
      timeEstimate: "2 minutes",
      urgency: "IMMEDIATE"
    },
    {
      number: 4,
      title: "Test Other Outlets on Same Circuit",
      description: "Check if other outlets controlled by the same breaker are also warm or showing problems. This indicates circuit-wide issues.",
      tips: ["Use back of hand to sense warmth without touching", "Note any other unusual electrical behavior"],
      timeEstimate: "5 minutes",
      urgency: "IMPORTANT"
    },
    {
      number: 5,
      title: "Document the Problem",
      description: "Write down what devices were plugged in, when you noticed the problem, and any sounds or smells associated with the outlet.",
      tips: ["Include device wattage if known", "Note if problem occurs with specific appliances"],
      timeEstimate: "5 minutes",
      urgency: "HELPFUL"
    },
    {
      number: 6,
      title: "Contact Licensed Electrician",
      description: "Call a professional electrician immediately. Hot or buzzing outlets indicate serious electrical problems that require expert diagnosis.",
      tips: ["Describe it as an electrical emergency", "Do not attempt DIY repairs on hot outlets"],
      timeEstimate: "Varies",
      urgency: "REQUIRED"
    }
  ];

  const toolsNeeded = [
    "None - Do NOT work on hot outlets",
    "Phone to call electrician",
    "Camera for documentation (if safe)",
    "Circuit breaker directory",
    "Fire extinguisher nearby (precaution)"
  ];

  const dangerSigns = [
    "Outlet feels warm or hot to touch",
    "Buzzing, crackling, or sizzling sounds",
    "Burn marks or discoloration",
    "Sparks when plugging/unplugging",
    "Burning smell from outlet",
    "Outlet cover is melted or warped"
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
              src={hotOutletImage} 
              alt="Hot electrical outlet safety warning - electrical fire hazard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Outlet Hot or Buzzing?</h1>
                <p className="text-red-100 text-lg">Dangers and Fixes You Need to Know</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>IMMEDIATE ACTION</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Flame className="w-5 h-5 mr-2" />
                <span>FIRE HAZARD</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Zap className="w-5 h-5 mr-2" />
                <span>CALL ELECTRICIAN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Warning */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-3">⚠️ ELECTRICAL FIRE HAZARD WARNING ⚠️</h3>
              <p className="text-red-700 leading-relaxed text-lg mb-3">
                Hot or buzzing outlets are serious fire hazards that require immediate professional attention. This is NOT a DIY repair situation.
              </p>
              <p className="text-red-700 leading-relaxed">
                Stop using the outlet immediately, turn off power at the breaker, and call a licensed electrician. 
                Do not attempt to fix this yourself - improper handling can result in electrical fire, shock, or death.
              </p>
            </div>
          </div>
        </div>

        {/* Danger Signs */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center">
            <Flame className="w-6 h-6 text-red-600 mr-2" />
            Immediate Danger Signs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dangerSigns.map((sign, index) => (
              <div key={index} className="text-red-800 flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-medium">{sign}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">EMERGENCY Response Steps</h2>
          
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
                        <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                          step.urgency === 'EMERGENCY' ? 'text-red-700 bg-red-200' :
                          step.urgency === 'URGENT' ? 'text-orange-700 bg-orange-200' :
                          step.urgency === 'IMMEDIATE' ? 'text-yellow-700 bg-yellow-200' :
                          step.urgency === 'IMPORTANT' ? 'text-blue-700 bg-blue-200' :
                          'text-gray-700 bg-gray-200'
                        }`}>
                          {step.urgency}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-medium text-red-900 mb-2">Critical Safety Points:</h4>
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

        {/* What NOT to Do */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            What NOT to Do - NEVER:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Continue using a hot or buzzing outlet
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Touch the outlet with bare hands
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Use water near electrical problems
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Attempt DIY repairs on hot outlets
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Ignore the problem hoping it goes away
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Cover outlet with anything flammable
              </li>
            </ul>
          </div>
        </div>

        {/* Causes Information */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
            <Zap className="w-6 h-6 text-yellow-600 mr-2" />
            Common Causes (For Your Information Only)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-yellow-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Overloaded circuits drawing too much current
              </li>
              <li className="text-yellow-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Loose wire connections creating resistance
              </li>
              <li className="text-yellow-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Damaged wiring or deteriorated insulation
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-yellow-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Old outlets unable to handle modern loads
              </li>
              <li className="text-yellow-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Faulty outlet components or internal damage
              </li>
              <li className="text-yellow-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Arc faults creating heat and sparks
              </li>
            </ul>
          </div>
          <p className="text-yellow-800 mt-4 text-sm font-medium">
            ⚠️ These issues require professional diagnosis and repair - do not attempt to fix yourself.
          </p>
        </div>

        {/* Emergency Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">🚨 EMERGENCY ELECTRICAL SERVICE NEEDED 🚨</h2>
          <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
            Hot or buzzing outlets are serious electrical emergencies that can cause fires. 
            Our verified emergency electricians are available 24/7 to prevent dangerous situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=Electrician">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 font-bold"
                data-testid="find-emergency-electricians"
              >
                <Flame className="w-5 h-5 mr-2" />
                Find Emergency Electricians
              </Button>
            </Link>
            <Link href="/home-jobs-guide">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3"
                data-testid="more-guides"
              >
                <Shield className="w-5 h-5 mr-2" />
                More Safety Guides
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}