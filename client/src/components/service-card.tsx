import { Star, MapPin, Phone, ExternalLink, Mail, Shield, CheckCircle } from "lucide-react";
import { Service } from "@shared/schema";
import { getImageForIndustry } from "@/lib/google-sheets";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
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
    <div className={`bg-white rounded-xl overflow-hidden card-hover ${
      isFeatured 
        ? 'border-[3px] border-red-500 shadow-lg shadow-red-200' 
        : 'shadow-md'
    }`} data-testid={`service-card-${service.id}`}>
      <img 
        src={imageUrl} 
        alt={`${service.industry} professional tools and equipment`}
        className="w-full h-48 object-cover"
        data-testid={`service-image-${service.id}`}
      />
      <div className="p-6">
        <div className="mb-2">
          <h3 className={`text-xl font-semibold truncate mb-2 ${
            isFeatured ? 'text-red-600' : 'text-gray-800'
          }`} data-testid={`service-title-${service.id}`} title={service.title}>
            {service.title}
          </h3>
          <div className="flex flex-wrap gap-2">
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
        <div className="flex justify-center space-x-4">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className={`p-3 ${
              isFeatured 
                ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg border border-red-700' 
                : 'hover:bg-gray-100'
            }`}
            data-testid={`service-phone-${service.id}`}
          >
            <a href={`tel:${service.phone}`} className="flex flex-col items-center">
              <Phone className={`w-6 h-6 mb-1 ${isFeatured ? 'text-white' : 'text-green-600'}`} />
              <span className={`text-sm ${isFeatured ? 'text-white font-medium' : 'text-gray-600'}`}>Call</span>
            </a>
          </Button>

          {service.googleMapsLink && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100"
              data-testid={`service-maps-${service.id}`}
            >
              <a href={service.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-red-600 mb-1" />
                <span className="text-sm text-gray-600">Maps</span>
              </a>
            </Button>
          )}

          {service.email && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100"
              data-testid={`service-email-${service.id}`}
            >
              <a href={`mailto:${service.email}`} className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-purple-600 mb-1" />
                <span className="text-sm text-gray-600">Email</span>
              </a>
            </Button>
          )}

          {service.website && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-3 hover:bg-gray-100"
              data-testid={`service-website-${service.id}`}
            >
              <a href={service.website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <ExternalLink className="w-6 h-6 text-blue-600 mb-1" />
                <span className="text-sm text-gray-600">Website</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}