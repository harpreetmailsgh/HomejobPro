import { Link } from "wouter";
import { ArrowLeft, Droplets, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield, Snowflake } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import frozenPipesImage from "@assets/generated_images/Frozen_pipes_repair_image_f11a73bf.png";

export default function FrozenPipesGuide() {
  useSEO({
    title: "Frozen Pipes? How to Thaw and Prevent Burst Pipes in Winter | Homejobspro.com",
    description: "Learn how to safely thaw frozen pipes and prevent bursting. Step-by-step guide to protect your plumbing during freezing weather.",
    keywords: "frozen pipes, thaw frozen pipes, prevent burst pipes, winter plumbing, pipe insulation, emergency plumbing",
    canonical: "https://homejobspro.com/frozen-pipes-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Turn Off Main Water Supply",
      description: "Immediately shut off the main water valve to prevent flooding if pipes have already burst or are about to burst from pressure buildup.",
      tips: ["Locate main shut-off valve before winter arrives", "Turn valve clockwise to close completely"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 2,
      title: "Turn On Affected Faucets",
      description: "Open both hot and cold water taps served by the frozen pipe. This relieves pressure and allows water to flow once thawing begins.",
      tips: ["Keep faucets open throughout thawing process", "Moving water helps prevent refreezing"],
      timeEstimate: "2 minutes"
    },
    {
      number: 3,
      title: "Locate the Frozen Section",
      description: "Find the frozen pipe section by checking exposed pipes in unheated areas like basements, crawl spaces, attics, or exterior walls.",
      tips: ["Look for frost or ice on pipe surface", "Check areas where pipes run along exterior walls"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 4,
      title: "Apply Heat Gradually",
      description: "Use a hair dryer, heating pad, or warm towels to gradually warm the pipe. Start from the faucet end and work toward the frozen area.",
      tips: ["Never use open flame or blowtorch", "Keep heat source moving to avoid overheating one spot"],
      timeEstimate: "20-45 minutes"
    },
    {
      number: 5,
      title: "Wrap Pipes with Warm Towels",
      description: "Soak towels in hot water and wrap around frozen pipes. Replace with newly heated towels every 10-15 minutes.",
      tips: ["Electric heating pads can maintain constant warmth", "Focus on the most accessible frozen sections first"],
      timeEstimate: "30-60 minutes"
    },
    {
      number: 6,
      title: "Use Space Heater for Large Areas",
      description: "For frozen pipes in enclosed spaces, use a space heater to warm the entire area. Ensure proper ventilation and safety clearances.",
      tips: ["Keep heater away from water and flammable materials", "Never leave space heater unattended"],
      timeEstimate: "1-3 hours"
    },
    {
      number: 7,
      title: "Check for Leaks",
      description: "Once water starts flowing, carefully inspect the entire pipe length for cracks or leaks that may have occurred during freezing.",
      tips: ["Even small leaks can become major problems", "Mark any damaged areas for immediate repair"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 8,
      title: "Insulate to Prevent Future Freezing",
      description: "Add pipe insulation, heat tape, or allow faucets to drip during future cold spells to prevent refreezing.",
      tips: ["Insulate pipes in unheated spaces", "Disconnect and drain outdoor hoses before winter"],
      timeEstimate: "30-60 minutes"
    }
  ];

  const toolsNeeded = [
    "Hair dryer or heat gun",
    "Electric heating pad",
    "Hot towels and bucket",
    "Space heater (if needed)",
    "Flashlight for inspection"
  ];

  const partsNeeded = [
    "Pipe insulation sleeves",
    "Heat tape for pipes",
    "Faucet covers for outdoor spigots",
    "Pipe repair clamps (if leaks found)",
    "Professional pipe replacement (if burst)"
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
              src={frozenPipesImage} 
              alt="Frozen pipe with ice formation - winter plumbing emergency guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Frozen Pipes?</h1>
                <p className="text-blue-100 text-lg">How to Thaw and Prevent Burst Pipes in Winter</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>1-4 hours</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$20-100 prevention</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Wrench className="w-5 h-5 mr-2" />
                <span>Basic tools needed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">EMERGENCY SAFETY WARNING</h3>
              <p className="text-red-700 leading-relaxed">
                This is a generic guide for educational purposes only. Frozen pipes can burst and cause significant water damage. 
                Never use open flames, blowtorches, or excessive heat which can damage pipes or create fire hazards. If pipes have already burst or you're unsure about safety, 
                immediately contact a licensed plumber. Always prioritize safety and consider professional help for complex situations or valuable property protection.
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
              Prevention & Repair Supplies
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Emergency Thawing Process</h2>
          
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
                        <h4 className="font-medium text-blue-900 mb-2">Safety Tips:</h4>
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

        {/* Prevention Tips */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-cyan-900 mb-4 flex items-center">
            <Snowflake className="w-6 h-6 text-cyan-600 mr-2" />
            Winter Prevention Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-cyan-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Insulate pipes in unheated spaces
              </li>
              <li className="text-cyan-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Let faucets drip during extreme cold
              </li>
              <li className="text-cyan-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Disconnect and drain outdoor hoses
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-cyan-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Keep garage doors closed
              </li>
              <li className="text-cyan-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Open cabinet doors under sinks
              </li>
              <li className="text-cyan-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Maintain home heating during vacations
              </li>
            </ul>
          </div>
        </div>

        {/* When to Call a Professional */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            IMMEDIATELY Call a Professional If:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Pipes have already burst or cracked
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Water damage is occurring
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Multiple pipes are frozen
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Pipes are inaccessible or in walls
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                No water throughout entire house
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Electrical hazards near water
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Emergency Plumbing Help?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            If pipes have burst, you can't locate the problem, or thawing isn't working, 
            our verified emergency plumbers are available 24/7 to prevent serious water damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?industry=Plumber">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                data-testid="find-plumbers"
              >
                <Droplets className="w-5 h-5 mr-2" />
                Find Emergency Plumbers
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