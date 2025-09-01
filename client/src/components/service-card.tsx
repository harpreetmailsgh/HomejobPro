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
        <div className="flex justify-center items-center gap-1 sm:grid sm:grid-cols-5">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className={`p-0 h-16 px-2 rounded-none w-full sm:w-full ${
              isFeatured 
                ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg border border-red-700' 
                : 'hover:bg-gray-100'
            } sm:${isFeatured ? 'bg-red-600' : 'hover:bg-gray-100'}`}
            data-testid={`service-phone-${service.id}`}
          >
            <a href={`tel:${service.phone}`} className="flex flex-col items-center justify-center h-full px-1 gap-1">
              <Phone className={`w-4 h-4 ${isFeatured ? 'text-white' : 'text-green-600'}`} />
              <span className={`text-xs ${isFeatured ? 'text-white font-medium' : 'text-gray-600'}`}>Call Now</span>
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="p-0 hover:bg-gray-100 h-16 px-2 rounded-none w-full sm:w-full"
            data-testid={`service-whatsapp-${service.id}`}
          >
            <a href={`https://wa.me/${service.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center h-full px-1 gap-1">
              <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
              <span className="text-xs text-gray-600">WhatsApp</span>
            </a>
          </Button>

          {service.googleMapsLink ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-0 hover:bg-gray-100 h-16 px-2 rounded-none w-full sm:w-full"
              data-testid={`service-maps-${service.id}`}
            >
              <a href={service.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center h-full px-1 gap-1">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-xs text-gray-600">Location</span>
              </a>
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="p-0 hover:bg-gray-100 h-16 px-2 rounded-none w-full opacity-50 cursor-not-allowed"
              disabled
            >
              <div className="flex flex-col items-center justify-center h-full px-1 gap-1">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-400">Location</span>
              </div>
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="p-0 hover:bg-gray-100 h-16 px-2 rounded-none w-full sm:w-full"
            data-testid={`service-email-${service.id}`}
            onClick={() => {
              if (service.email) {
                window.location.href = `mailto:${service.email}`;
              } else {
                alert('Email not available for this service provider.');
              }
            }}
          >
            <div className="flex flex-col items-center justify-center h-full px-1 gap-1">
              <Mail className={`w-4 h-4 ${service.email ? 'text-purple-600' : 'text-gray-400'}`} />
              <span className={`text-xs ${service.email ? 'text-gray-600' : 'text-gray-400'}`}>Email</span>
            </div>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="p-0 hover:bg-gray-100 h-16 px-2 rounded-none w-full sm:w-full"
            data-testid={`service-website-${service.id}`}
            onClick={() => {
              if (service.website) {
                window.open(service.website, '_blank', 'noopener,noreferrer');
              } else {
                alert('Website not available for this service provider.');
              }
            }}
          >
            <div className="flex flex-col items-center justify-center h-full px-1 gap-1">
              <ExternalLink className={`w-4 h-4 ${service.website ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`text-xs ${service.website ? 'text-gray-600' : 'text-gray-400'}`}>Website</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}