import { Star, MapPin, Phone, ExternalLink, Mail } from "lucide-react";
import { Service } from "@shared/schema";
import { getImageForIndustry } from "@/lib/google-sheets";
import { Button } from "@/components/ui/button";

interface ServiceListItemProps {
  service: Service;
}

export default function ServiceListItem({ service }: ServiceListItemProps) {
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex items-center space-x-6" data-testid={`service-list-${service.id}`}>
      <img 
        src={imageUrl} 
        alt={`${service.industry} professional tools and equipment`}
        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
        data-testid={`service-list-image-${service.id}`}
      />
      
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-semibold text-gray-800 mb-2" data-testid={`service-list-title-${service.id}`}>
          {service.title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center star-rating">
            {renderStars(service.rating)}
          </div>
          <span className="ml-2 text-gray-600" data-testid={`service-list-rating-${service.id}`}>
            {service.rating.toFixed(1)}
          </span>
          <span className="ml-1 text-gray-500">
            (<span data-testid={`service-list-reviews-${service.id}`}>{service.reviews}</span> reviews)
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4" data-testid={`service-list-address-${service.id}`}>
          {service.address}
        </p>
      </div>
      
      {/* Action Icons */}
      <div className="flex items-center space-x-3 flex-shrink-0">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-gray-100 rounded-full"
          data-testid={`service-list-phone-${service.id}`}
        >
          <a href={`tel:${service.phone}`} className="flex flex-col items-center">
            <Phone className="w-5 h-5 text-green-600" />
          </a>
        </Button>
        
        {service.googleMapsLink && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-100 rounded-full"
            data-testid={`service-list-maps-${service.id}`}
          >
            <a href={service.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <MapPin className="w-5 h-5 text-red-600" />
            </a>
          </Button>
        )}
        
        {service.email && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-100 rounded-full"
            data-testid={`service-list-email-${service.id}`}
          >
            <a href={`mailto:${service.email}`} className="flex flex-col items-center">
              <Mail className="w-5 h-5 text-purple-600" />
            </a>
          </Button>
        )}
        
        {service.website && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-100 rounded-full"
            data-testid={`service-list-website-${service.id}`}
          >
            <a href={service.website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <ExternalLink className="w-5 h-5 text-blue-600" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}