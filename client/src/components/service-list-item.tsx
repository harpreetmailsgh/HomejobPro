import { Star, MapPin, Phone, ExternalLink, Mail, Shield, CheckCircle } from "lucide-react";
import { Service } from "@shared/schema";
import { getImageForIndustry } from "@/lib/google-sheets";
import { Button } from "@/components/ui/button";

interface ServiceListItemProps {
  service: Service;
}

export default function ServiceListItem({ service }: ServiceListItemProps) {
  const isFeatured = service.featured?.toLowerCase() === 'yes';
  const getServiceTypeImage = (industry: string): string => {
    // Check if there's a custom image from settings
    const customImageFn = (window as any).getServiceTypeImage;
    if (customImageFn) {
      const customImage = customImageFn(industry);
      if (customImage && customImage.trim()) {
        return customImage;
      }
    }

    // Fallback to default images
    const imageMap: { [key: string]: string } = {
      "Plumber": "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop&crop=center",
      "Electrician": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop&crop=center", 
      "HVAC Technician": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center",
      "Landscaper": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      "Home Services": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center"
    };

    return imageMap[industry] || "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center";
  };

  const imageUrl = getServiceTypeImage(service.industry);

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
    <div className={`rounded-xl overflow-hidden p-6 flex items-center space-x-6 ${
      isFeatured 
        ? 'bg-red-50 border-[3px] border-red-500 shadow-lg shadow-red-200' 
        : 'bg-white shadow-md'
    }`} data-testid={`service-list-${service.id}`}>
      <img 
        src={imageUrl} 
        alt={`${service.industry} professional tools and equipment`}
        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
        data-testid={`service-list-image-${service.id}`}
      />

      <div className="flex-1 min-w-0">
        <div className="mb-2">
          <h3 className={`text-xl font-semibold truncate mb-2 ${
            isFeatured ? 'text-red-600' : 'text-gray-800'
          }`} data-testid={`service-list-title-${service.id}`} title={service.title}>
            {service.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {isFeatured && (
              <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Featured
              </div>
            )}
            {service.verified?.toLowerCase() === 'yes' && (
              <div className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified
              </div>
            )}
            {service.licensed?.toLowerCase() === 'yes' && (
              <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                Licensed
              </div>
            )}
          </div>
        </div>

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
          className={`p-0 min-w-[80px] h-16 ${
            isFeatured 
              ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg border border-red-700' 
              : 'hover:bg-gray-100'
          }`}
          data-testid={`service-list-phone-${service.id}`}
        >
          <a href={`tel:${service.phone}`} className="flex flex-col items-center justify-center h-full w-full gap-1">
            <Phone className={`w-5 h-5 ${isFeatured ? 'text-white' : 'text-green-600'}`} />
            <span className={`text-sm ${isFeatured ? 'text-white font-medium' : 'text-gray-600'}`}>Call Now</span>
          </a>
        </Button>

        {service.googleMapsLink && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="p-0 hover:bg-gray-100 rounded-lg min-w-[80px] h-16"
            data-testid={`service-list-maps-${service.id}`}
          >
            <a href={service.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center h-full w-full gap-1">
              <MapPin className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-600">Location</span>
            </a>
          </Button>
        )}

        <Button
          variant="ghost"
          size="sm"
          className="p-0 hover:bg-gray-100 rounded-lg min-w-[80px] h-16"
          data-testid={`service-list-email-${service.id}`}
          onClick={() => {
            if (service.email) {
              window.location.href = `mailto:${service.email}`;
            } else {
              alert('Email not available for this service provider.');
            }
          }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full gap-1">
            <Mail className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-600">Email</span>
          </div>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="p-0 hover:bg-gray-100 rounded-lg min-w-[80px] h-16"
          data-testid={`service-list-website-${service.id}`}
          onClick={() => {
            if (service.website) {
              window.open(service.website, '_blank', 'noopener,noreferrer');
            } else {
              alert('Website not available for this service provider.');
            }
          }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full gap-1">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Website</span>
          </div>
        </Button>
      </div>
    </div>
  );
}