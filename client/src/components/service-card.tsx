import { useState } from "react";
import { Star, MapPin, Phone, ExternalLink, Navigation } from "lucide-react";
import { Service } from "@shared/schema";
import { getImageForIndustry } from "@/lib/google-sheets";
import { Button } from "@/components/ui/button";
import AddressPopup from "./address-popup";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [showAddressPopup, setShowAddressPopup] = useState(false);
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
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAddressPopup(true)}
              className="p-2 hover:bg-gray-100"
              data-testid={`service-address-${service.id}`}
            >
              <MapPin className="w-5 h-5 text-blue-grey" />
            </Button>
            
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-gray-100"
              data-testid={`service-phone-${service.id}`}
            >
              <a href={`tel:${service.phone}`}>
                <Phone className="w-5 h-5 text-green-600" />
              </a>
            </Button>
          </div>
          
          <div className="flex space-x-2">
            {service.website && (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-100"
                data-testid={`service-website-${service.id}`}
              >
                <a href={service.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-blue-grey" />
                </a>
              </Button>
            )}
            {service.googleMapsLink && (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-100"
                data-testid={`service-maps-${service.id}`}
              >
                <a href={service.googleMapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-5 h-5 text-orange-primary" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <AddressPopup 
          address={service.address}
          isOpen={showAddressPopup}
          onClose={() => setShowAddressPopup(false)}
        />
      </div>
    </div>
  );
}
