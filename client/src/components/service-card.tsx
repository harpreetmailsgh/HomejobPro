import { Star, MapPin, Phone, ExternalLink } from "lucide-react";
import { Service } from "@shared/schema";
import { getImageForIndustry } from "@/lib/google-sheets";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const imageUrl = getImageForIndustry(service.industry);
  
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 fill-current text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover" data-testid={`service-card-${service.id}`}>
      <img 
        src={imageUrl} 
        alt={`${service.industry} professional tools and equipment`}
        className="w-full h-48 object-cover"
        data-testid={`service-image-${service.id}`}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2" data-testid={`service-title-${service.id}`}>
          {service.title}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center star-rating">
            {renderStars(service.rating)}
          </div>
          <span className="ml-2 text-gray-600" data-testid={`service-rating-${service.id}`}>
            {service.rating.toFixed(1)}
          </span>
          <span className="ml-1 text-gray-500">
            (<span data-testid={`service-reviews-${service.id}`}>{service.reviews}</span> reviews)
          </span>
        </div>
        
        {/* Full Address */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm" data-testid={`service-address-${service.id}`}>
            {service.address}
          </p>
        </div>
        
        {/* Action Icons */}
        <div className="flex justify-center space-x-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="p-3 hover:bg-gray-100 rounded-full"
            data-testid={`service-phone-${service.id}`}
          >
            <a href={`tel:${service.phone}`} className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-green-600 mb-1" />
              <span className="text-xs text-gray-600">Call</span>
            </a>
          </Button>
          
          {service.googleMapsLink && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-full"
              data-testid={`service-maps-${service.id}`}
            >
              <a href={service.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-red-600 mb-1" />
                <span className="text-xs text-gray-600">Maps</span>
              </a>
            </Button>
          )}
          
          {service.website && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100 rounded-full"
              data-testid={`service-website-${service.id}`}
            >
              <a href={service.website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <ExternalLink className="w-6 h-6 text-blue-600 mb-1" />
                <span className="text-xs text-gray-600">Website</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
