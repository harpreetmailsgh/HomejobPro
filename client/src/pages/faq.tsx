import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
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
  },

  // Additional Plumbing FAQs
  {
    id: 17,
    category: "Plumbing",
    question: "How much does it cost to fix a leaky faucet?",
    answer: "Faucet repair costs typically range from $75-$200 for simple fixes like replacing washers or O-rings. Complete faucet replacement costs $150-$400 including labor. DIY repairs cost $5-$25 in parts, but improper installation can lead to water damage."
  },
  {
    id: 18,
    category: "Plumbing",
    question: "What causes brown or discolored water?",
    answer: "Brown water is usually caused by rust in old iron pipes, recent water main work, or sediment buildup. Run cold water for a few minutes - if it clears, it's temporary. Persistent discoloration requires professional inspection and possibly pipe replacement."
  },
  {
    id: 19,
    category: "Plumbing",
    question: "How do I shut off my home's main water supply?",
    answer: "The main water shutoff is typically located near where the water line enters your home, often in the basement, crawl space, or near the street. Turn the valve clockwise to close. Every household member should know this location for emergencies."
  },
  {
    id: 20,
    category: "Plumbing",
    question: "Why does my shower have low water pressure?",
    answer: "Shower low pressure can be caused by clogged showerheads, mineral buildup, old pipes, water leaks, or issues with the pressure regulator. Clean the showerhead first, then check other fixtures to determine if it's isolated to the shower."
  },
  {
    id: 21,
    category: "Plumbing",
    question: "What should I never put down my garbage disposal?",
    answer: "Never put: grease/oil, bones, fruit pits, pasta/rice, coffee grounds, eggshells, fibrous vegetables (celery, onions), or non-food items. These can clog pipes, dull blades, or damage the motor."
  },
  {
    id: 22,
    category: "Plumbing",
    question: "How often should I replace my toilet?",
    answer: "Toilets typically last 15-30 years with proper maintenance. Replace if you have frequent repairs, cracks in the bowl/tank, constant running, wobbling, or inefficient water usage. Modern toilets are more water-efficient and can save money."
  },
  {
    id: 23,
    category: "Plumbing",
    question: "What causes sewage backup and how do I prevent it?",
    answer: "Sewage backup is caused by main sewer line clogs, tree root intrusion, or municipal system issues. Prevent by avoiding flushing inappropriate items, regular drain cleaning, and installing a backwater valve. Call professionals immediately if it occurs."
  },

  // Additional Electrical FAQs
  {
    id: 24,
    category: "Electrical",
    question: "How much does it cost to install a new electrical outlet?",
    answer: "Installing a new outlet costs $100-$300 depending on location and wiring complexity. GFCI outlets cost $150-$400. Adding outlets in finished walls requires more work and costs $200-$500. Always hire a licensed electrician for safety."
  },
  {
    id: 25,
    category: "Electrical",
    question: "What are GFCI outlets and where do I need them?",
    answer: "GFCI (Ground Fault Circuit Interrupter) outlets protect against electrical shock by shutting off power when they detect ground faults. Required in bathrooms, kitchens, garages, basements, and outdoor areas. Test monthly using test/reset buttons."
  },
  {
    id: 26,
    category: "Electrical",
    question: "How do I know if my electrical panel needs upgrading?",
    answer: "Upgrade if you have: frequent breaker trips, fuses instead of breakers, burning smells, flickering lights, or insufficient power for modern appliances. Panels over 25 years old or rated below 100 amps typically need replacement."
  },
  {
    id: 27,
    category: "Electrical",
    question: "What causes electrical outlets to stop working?",
    answer: "Dead outlets can be caused by: tripped GFCI or circuit breaker, loose wire connections, damaged outlet, or circuit overload. Check GFCI reset buttons and breaker panel first. If problem persists, call an electrician."
  },
  {
    id: 28,
    category: "Electrical",
    question: "How much electricity do common household appliances use?",
    answer: "Average usage: refrigerator (400-600W), AC unit (3000-5000W), water heater (4000W), washing machine (400-1300W), dryer (2000-4000W), microwave (700-1200W). Understanding usage helps manage energy costs."
  },
  {
    id: 29,
    category: "Electrical",
    question: "What should I do during a power outage?",
    answer: "During outages: turn off major appliances to prevent damage from power surges, use flashlights instead of candles, keep refrigerator/freezer closed, never use generators indoors, and report outages to your utility company."
  },
  {
    id: 30,
    category: "Electrical",
    question: "How can I reduce my electricity bill?",
    answer: "Reduce costs by: using LED bulbs, unplugging devices when not in use, adjusting thermostat settings, using programmable thermostats, sealing air leaks, upgrading to energy-efficient appliances, and using ceiling fans."
  },

  // Additional HVAC FAQs
  {
    id: 31,
    category: "HVAC",
    question: "How much does HVAC repair typically cost?",
    answer: "HVAC repair costs vary: $150-$300 for minor repairs, $300-$800 for moderate issues, $800-$1500 for major repairs. Emergency service costs more. Regular maintenance ($100-$200) can prevent expensive breakdowns."
  },
  {
    id: 32,
    category: "HVAC",
    question: "What size HVAC system do I need for my home?",
    answer: "HVAC sizing depends on home square footage, insulation, windows, and climate. Generally, you need 20-25 BTU per square foot. A professional load calculation ensures proper sizing - oversized systems waste energy, undersized systems can't maintain comfort."
  },
  {
    id: 33,
    category: "HVAC",
    question: "Why is my energy bill so high in winter/summer?",
    answer: "High bills often result from: poor insulation, air leaks, dirty filters, inefficient equipment, extreme weather, or thermostat settings. Schedule an energy audit to identify issues and improve efficiency."
  },
  {
    id: 34,
    category: "HVAC",
    question: "What's the difference between a heat pump and a furnace?",
    answer: "Heat pumps move heat from outside air (efficient in mild climates), while furnaces generate heat by burning fuel. Heat pumps provide both heating and cooling, are more efficient in moderate climates, but furnaces work better in very cold areas."
  },
  {
    id: 35,
    category: "HVAC",
    question: "How do I improve indoor air quality?",
    answer: "Improve air quality by: changing filters regularly, using air purifiers, controlling humidity (30-50%), proper ventilation, cleaning ducts, removing pollutant sources, and adding plants. Consider UV lights or whole-house air cleaners."
  },
  {
    id: 36,
    category: "HVAC",
    question: "When should I replace my HVAC system?",
    answer: "Replace your system if it's 15+ years old, requires frequent repairs, has rising energy bills, provides inconsistent temperatures, or uses R-22 refrigerant. New systems are 15-20% more efficient than older models."
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

  const categories = ["All", "Plumbing", "Electrical", "HVAC"];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory || (selectedCategory === "Electrical" && faq.category === "Electricity");
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-fd4a85a8fc00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed drop-shadow">Get expert answers to the most common home service questions. From plumbing emergencies to electrical safety and HVAC maintenance.</p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-10">

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search through our knowledge base..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                data-testid="faq-search"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`h-12 px-6 rounded-xl font-medium transition-all ${
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg" 
                      : "border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                  data-testid={`category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Results Counter */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-blue-600">{filteredFAQs.length}</span> {filteredFAQs.length === 1 ? 'result' : 'results'} found
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Results Found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any FAQs matching your search criteria.</p>
              <Button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                variant="outline"
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`faq-${faq.id}`}>
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-8 hover:bg-gray-50 transition-all duration-200 flex justify-between items-start gap-4"
                  data-testid={`faq-question-${faq.id}`}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">{faq.question}</h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      expandedFAQ === faq.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-blue-300'
                    }`}>
                      <ChevronDown className={`w-5 h-5 transition-all duration-200 ${
                        expandedFAQ === faq.id 
                          ? 'rotate-180 text-blue-600' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <div className="pt-6">
                      <p className="text-gray-700 leading-relaxed text-lg" data-testid={`faq-answer-${faq.id}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Can't find what you're looking for? Our network of trusted professionals is ready to help with your home service needs.</p>
          <Button 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
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