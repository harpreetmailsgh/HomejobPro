import { Link } from "wouter";
import { ArrowLeft, Droplets, Wrench, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";
import cloggedDrainImage from "@assets/generated_images/Clogged_drain_repair_image_24edec18.png";

export default function CloggedDrainGuide() {
  useSEO({
    title: "Clogged Sink or Shower Drain? Easy DIY Fixes That Actually Work | Homejobspro.com",
    description: "Learn how to unclog drains safely with step-by-step instructions. Clear sink and shower blockages using simple tools and techniques.",
    keywords: "clogged drain repair, unclog sink, shower drain blockage, plumbing DIY, drain cleaning, sink maintenance",
    canonical: "https://homejobspro.com/clogged-drain-guide"
  });

  const steps = [
    {
      number: 1,
      title: "Identify the Type of Blockage",
      description: "Determine if the clog is in the sink, shower, or main drain line. Check if water drains slowly or not at all, and look for visible debris.",
      tips: ["Hair and soap scum are common in bathroom drains", "Food particles typically clog kitchen sinks"],
      timeEstimate: "2-3 minutes"
    },
    {
      number: 2,
      title: "Try Hot Water Flush",
      description: "Pour a large pot of boiling water down the drain slowly. This can dissolve soap scum and minor blockages.",
      tips: ["Use caution with boiling water on PVC pipes", "Pour in 2-3 stages with 30-second intervals"],
      timeEstimate: "5 minutes"
    },
    {
      number: 3,
      title: "Use a Plunger",
      description: "For sink drains, use a cup plunger. Block overflow holes with a wet cloth and plunge vigorously 15-20 times.",
      tips: ["Ensure good seal around drain opening", "Remove standing water first if necessary"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 4,
      title: "Remove Visible Debris",
      description: "Take off the drain cover if possible and remove any visible hair, soap, or debris by hand or with needle-nose pliers.",
      tips: ["Wear rubber gloves for hygiene", "Use a flashlight to see clearly"],
      timeEstimate: "5-10 minutes"
    },
    {
      number: 5,
      title: "Try Baking Soda and Vinegar",
      description: "Pour 1/2 cup baking soda followed by 1/2 cup white vinegar down the drain. Cover with a wet cloth for 30 minutes, then flush with hot water.",
      tips: ["Natural solution safe for all pipe types", "Let mixture sit for best results"],
      timeEstimate: "45 minutes"
    },
    {
      number: 6,
      title: "Use a Drain Snake",
      description: "If other methods fail, use a drain snake or wire coat hanger to physically remove the blockage. Insert and twist to catch debris.",
      tips: ["Work slowly to avoid pushing clog deeper", "Pull out debris rather than pushing through"],
      timeEstimate: "10-15 minutes"
    },
    {
      number: 7,
      title: "Test and Prevent Future Clogs",
      description: "Run hot water to test drainage. Install drain strainers and avoid putting grease, hair, and food scraps down drains.",
      tips: ["Clean drains weekly with hot water", "Use enzyme cleaners monthly for maintenance"],
      timeEstimate: "5 minutes"
    }
  ];

  const toolsNeeded = [
    "Cup plunger",
    "Needle-nose pliers",
    "Rubber gloves",
    "Flashlight or headlamp",
    "Large pot for boiling water"
  ];

  const partsNeeded = [
    "Baking soda",
    "White vinegar",
    "Drain snake (optional)",
    "Drain strainer for prevention",
    "Enzyme drain cleaner (optional)"
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
              src={cloggedDrainImage} 
              alt="Clogged sink drain with standing water - plumbing repair guide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Clogged Sink or Shower Drain?</h1>
                <p className="text-blue-100 text-lg">Easy DIY Fixes That Actually Work</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2" />
                <span>20-60 minutes</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$0-15 in supplies</span>
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
                This is a generic guide for educational purposes only. Actual results may differ depending on your specific drain type, clog severity, and plumbing configuration. 
                Some blockages may require professional equipment or expertise. If you're uncomfortable with any step or encounter unexpected issues, 
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Unclogging Process</h2>
          
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
                Multiple drains backing up simultaneously
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Sewage odors coming from drains
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Water backing up into other fixtures
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Repeated clogs despite proper maintenance
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Gurgling sounds from multiple drains
              </li>
              <li className="text-red-800 flex items-start">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Suspected main sewer line blockage
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            If these methods don't resolve your drain issue or you encounter a more complex problem, 
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