import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface FeaturedService {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  jobs: number;
}

interface FeaturedServicesProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export default function FeaturedServices({
  sectionTitle = "Featured Services",
  sectionSubtitle = "Top-rated professionals in your area"
}: FeaturedServicesProps) {
  const services: FeaturedService[] = [
    {
      id: 1,
      title: "Elite Plumbing Services",
      category: "Plumber",
      description: "Professional plumbing solutions for your home and business",
      image: "🔧",
      jobs: 142
    },
    {
      id: 2,
      title: "ProElectric Solutions",
      category: "Electrician",
      description: "Licensed electricians for all your electrical needs",
      image: "⚡",
      jobs: 89
    },
    {
      id: 3,
      title: "Climate Control Experts",
      category: "HVAC Technician",
      description: "Heating, cooling, and ventilation specialists",
      image: "❄️",
      jobs: 203
    },
    {
      id: 4,
      title: "Green Thumb Landscaping",
      category: "Landscaper",
      description: "Transform your outdoor space with expert landscaping",
      image: "🌿",
      jobs: 156
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-xl text-gray-600">{sectionSubtitle}</p>
        </div>

        <div className="featured-services-container overflow-hidden">
          <div className="featured-services-track animate-scroll">
            {[...services, ...services, ...services].map((service, index) => (
              <div key={`${service.id}-${index}`} className="featured-service-card flex-shrink-0 bg-white rounded-lg shadow-md p-6 mx-4 w-80">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{service.image}</div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">⭐</span>
                      <span className="font-semibold">4.8</span>
                    </div>
                    <span className="text-gray-500 text-sm ml-3">{service.jobs} jobs completed</span>
                  </div>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}