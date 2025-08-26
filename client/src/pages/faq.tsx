import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSEO } from "../hooks/use-seo";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // Plumbing FAQs
  {
    id: 1,
    category: "Plumbing",
    question: "How do I know if I have a water leak?",
    answer: "Signs of a water leak include: unexplained increases in your water bill, sound of running water when no fixtures are in use, wet spots on walls or ceilings, musty odors, and decreased water pressure. Check your water meter - if it's moving when no water is being used, you likely have a leak."
  },
  {
    id: 2,
    category: "Plumbing",
    question: "What should I do if my toilet is clogged?",
    answer: "First, try using a plunger - make sure you have a good seal and use firm, consistent plunges. If that doesn't work, try a toilet auger. Avoid using chemical drain cleaners as they can damage pipes. If the clog persists, call a professional plumber."
  },
  {
    id: 3,
    category: "Plumbing",
    question: "Why is my water pressure low?",
    answer: "Low water pressure can be caused by: clogged aerators on faucets, mineral deposits in pipes, partially closed main water valve, water leaks, or problems with the municipal water supply. Clean aerators first, then check other fixtures to determine if it's a whole-house issue."
  },
  {
    id: 4,
    category: "Plumbing",
    question: "How often should I have my drains cleaned?",
    answer: "It's recommended to have professional drain cleaning every 1-2 years for preventive maintenance. However, if you notice slow drains, gurgling sounds, or bad odors, it's time for cleaning. Regular maintenance prevents major blockages and expensive repairs."
  },
  {
    id: 5,
    category: "Plumbing",
    question: "What causes my pipes to make noise?",
    answer: "Noisy pipes can be caused by: water hammer (quick valve closure), loose mounting straps, high water pressure, or mineral buildup. Water hammer can be fixed with arrestors, while loose pipes need proper securing. If noise persists, consult a plumber."
  },

  // Electrical FAQs  
  {
    id: 6,
    category: "Electricity",
    question: "When should I call an electrician instead of doing it myself?",
    answer: "Call an electrician for: installing new outlets or switches, upgrading electrical panels, working with main electrical lines, installing ceiling fans, troubleshooting electrical problems, or any work requiring permits. DIY electrical work can be dangerous and may violate local codes."
  },
  {
    id: 7,
    category: "Electricity",
    question: "Why do my circuit breakers keep tripping?",
    answer: "Circuit breakers trip to prevent overloading and potential fires. Common causes include: too many devices on one circuit, faulty appliances, short circuits, or ground faults. If breakers trip frequently, reduce the load or have an electrician inspect for underlying issues."
  },
  {
    id: 8,
    category: "Electricity",
    question: "How do I know if my home needs electrical panel upgrade?",
    answer: "Signs you need an upgrade: frequent breaker trips, flickering lights, burning smells, panels over 25 years old, fuses instead of breakers, insufficient outlets, or planning major appliance installations. Modern homes typically need 200-amp service."
  },
  {
    id: 9,
    category: "Electricity",
    question: "What are GFCI outlets and where do I need them?",
    answer: "GFCI (Ground Fault Circuit Interrupter) outlets protect against electrical shock by detecting ground faults and shutting off power. They're required in bathrooms, kitchens, garages, basements, outdoor areas, and anywhere near water sources."
  },
  {
    id: 10,
    category: "Electricity",
    question: "Why are my lights flickering?",
    answer: "Flickering lights can indicate: loose connections, overloaded circuits, faulty light fixtures, issues with the electrical panel, or problems with the utility company's supply. If multiple lights flicker or it's accompanied by other electrical issues, call an electrician immediately."
  },

  // HVAC FAQs
  {
    id: 11,
    category: "HVAC",
    question: "How often should I change my air filter?",
    answer: "Standard filters should be changed every 1-3 months, depending on usage, pets, and air quality. High-efficiency filters may last 6-12 months. Check monthly and replace when dirty. Dirty filters reduce efficiency and can damage your HVAC system."
  },
  {
    id: 12,
    category: "HVAC",
    question: "Why is my air conditioner not cooling properly?",
    answer: "Common causes include: dirty air filter, low refrigerant, dirty condenser coils, thermostat issues, ductwork problems, or an oversized/undersized unit. Start by checking and replacing the air filter, then contact an HVAC professional for diagnosis."
  },
  {
    id: 13,
    category: "HVAC",
    question: "How can I improve my home's energy efficiency?",
    answer: "Tips for better efficiency: regular HVAC maintenance, proper insulation, sealing air leaks, programmable thermostat, upgrading to energy-efficient equipment, cleaning vents and ducts, and using ceiling fans to circulate air."
  },
  {
    id: 14,
    category: "HVAC",
    question: "What temperature should I set my thermostat?",
    answer: "For optimal comfort and efficiency: 68-72°F in winter, 75-78°F in summer. Lower by 7-10 degrees when away to save energy. Each degree adjustment can change energy costs by 6-8%. Use programmable thermostats for automatic adjustments."
  },
  {
    id: 15,
    category: "HVAC",
    question: "How do I know if my HVAC system needs repair?",
    answer: "Warning signs include: strange noises, uneven heating/cooling, increased energy bills, frequent cycling on/off, poor air quality, unusual odors, or the system not responding to thermostat changes. Schedule professional inspection for any persistent issues."
  },
  {
    id: 16,
    category: "HVAC",
    question: "How often should I have HVAC maintenance?",
    answer: "Schedule professional maintenance twice yearly: once before heating season and once before cooling season. Regular maintenance includes cleaning, inspections, filter changes, and tune-ups that prevent breakdowns and extend system life."
  }
];

export default function FAQ() {
  useSEO({
    title: "Frequently Asked Questions | Home Service Help | Homejobspro.com",
    description: "Get answers to common questions about plumbing, electrical, and HVAC issues. Expert advice on home repairs, maintenance, and when to call professionals.",
    keywords: "home service FAQ, plumbing questions, electrical help, HVAC troubleshooting, home repair advice, maintenance tips, professional help",
    canonical: "https://homejobspro.com/faq",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Home Service Frequently Asked Questions",
      "description": "Common questions and answers about home service repairs and maintenance",
      "url": "https://homejobspro.com/faq"
    }
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = ["All", "Plumbing", "Electricity", "HVAC"];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about plumbing, electrical, and HVAC services</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="faq-search"
              />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-grey hover:bg-blue-grey-700" : ""}
                  data-testid={`category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No FAQs Found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            filteredFAQs.map(faq => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden" data-testid={`faq-${faq.id}`}>
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  data-testid={`faq-question-${faq.id}`}
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-grey text-white text-xs rounded-full mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4" data-testid={`faq-answer-${faq.id}`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-grey to-blue-grey-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg mb-6">Can't find what you're looking for? Our network of professionals is here to help.</p>
          <Button 
            className="bg-orange-primary hover:bg-orange-primary-600 text-white px-8 py-3 text-lg"
            data-testid="find-professional-button"
          >
            Find a Professional
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}