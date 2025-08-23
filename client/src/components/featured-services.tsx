import { Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const featuredServices = [
  {
    id: 1,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for urgent repairs and pipe bursts.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    jobs: "1,200+",
    category: "Plumber"
  },
  {
    id: 2,
    title: "Electrical Installation", 
    description: "Professional electrical installations and safety inspections.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    jobs: "950+", 
    category: "Electrician"
  },
  {
    id: 3,
    title: "HVAC Maintenance",
    description: "Keep your heating and cooling systems running efficiently year-round.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    jobs: "800+",
    category: "HVAC%20Technician"
  },
  {
    id: 4,
    title: "Landscaping Services",
    description: "Transform your outdoor space with professional landscaping and design.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    jobs: "650+",
    category: "Landscaper"
  },
  {
    id: 5,
    title: "Garden Maintenance",
    description: "Keep your garden beautiful year-round with expert care and maintenance.",
    image: "https://images.unsplash.com/photo-1416838375725-e834a83f62b7?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    jobs: "530+",
    category: "Landscaper"
  },
  {
    id: 6,
    title: "House Cleaning",
    description: "Professional house cleaning services for a spotless home.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    jobs: "920+",
    category: "Cleaner"
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-xl text-gray-600">Popular home services trusted by thousands of homeowners</p>
        </div>
        
        <div className="featured-services-container overflow-hidden">
          <div className="featured-services-track animate-scroll">
            {[...featuredServices, ...featuredServices, ...featuredServices].map((service, index) => (
              <div key={`${service.id}-${index}`} className="featured-service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold text-gray-800">{service.rating}</span>
                    </div>
                    <span className="text-gray-500 text-sm ml-3">{service.jobs} jobs completed</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <Link href={`/search?industry=${service.category}`}>
                    <Button className="w-full bg-blue-grey hover:bg-blue-grey-700 text-white flex items-center justify-center">
                      Find Professionals
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}