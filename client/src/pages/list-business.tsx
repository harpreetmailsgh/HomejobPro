import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Building2, Star, Shield, CheckCircle, Phone, Mail, MapPin, Globe } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/Business_owner_professional_hero_1db2eef7.png";

export default function ListBusiness() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [industry, setIndustry] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add industry to form data
    formData.append('industry', industry);
    
    try {
      const response = await fetch('https://formsubmit.co/alsdestinations@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        // Redirect to thank you page
        window.location.href = '/list-business/thank-you';
      } else {
        throw new Error('Failed to submit listing');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your business listing. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">List Your Business</h1>
            <p className="text-xl md:text-2xl mb-8">Join our network of trusted professionals and grow your business</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                <span>Increase Visibility</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Building2 className="w-5 h-5 mr-2" />
                <span>Grow Your Business</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 mr-2" />
                <span>Trusted Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="back-to-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why List Your Business With Us?</h2>
            <p className="text-green-100 text-lg">Join thousands of professionals who trust us to connect them with customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Increase Your Reach</h3>
              <p className="text-green-100">Get discovered by more customers in your local area</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
              <p className="text-green-100">Connect with homeowners who need your services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Trust</h3>
              <p className="text-green-100">Showcase your credentials and customer reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Business Information</h2>
                <p className="text-gray-600">Fill out your business details to get listed on our platform</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit.co configuration */}
                <input type="hidden" name="_next" value={window.location.origin + "/list-business/thank-you"} />
                <input type="hidden" name="_subject" value="New Business Listing Submission from Homejobspro.com" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />

                {/* Business Name & Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title" className="block text-sm font-medium mb-2 text-gray-700">
                      Business Name *
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      required
                      placeholder="Your business name"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      data-testid="business-name"
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium mb-2 text-gray-700">
                      Industry *
                    </Label>
                    <Select value={industry} onValueChange={setIndustry} required>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500" data-testid="industry-select">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Plumber">Plumber</SelectItem>
                        <SelectItem value="Electrician">Electrician</SelectItem>
                        <SelectItem value="HVAC Technician">HVAC Technician</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      data-testid="business-phone"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="business@example.com"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      data-testid="business-email"
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <Label htmlFor="website" className="block text-sm font-medium mb-2 text-gray-700">
                    Website (Optional)
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://www.yourbusiness.com"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    data-testid="business-website"
                  />
                </div>

                {/* Address Information */}
                <div>
                  <Label htmlFor="complete_address" className="block text-sm font-medium mb-2 text-gray-700">
                    Complete Business Address *
                  </Label>
                  <Input
                    id="complete_address"
                    name="complete_address"
                    type="text"
                    required
                    placeholder="123 Main Street, Suite 100"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    data-testid="business-address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-700">
                      City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      placeholder="Toronto"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      data-testid="business-city"
                    />
                  </div>

                  <div>
                    <Label htmlFor="post_code" className="block text-sm font-medium mb-2 text-gray-700">
                      Postal Code *
                    </Label>
                    <Input
                      id="post_code"
                      name="post_code"
                      type="text"
                      required
                      placeholder="M5V 3A8"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      data-testid="business-postal-code"
                    />
                  </div>
                </div>

                {/* Google Maps Link */}
                <div>
                  <Label htmlFor="google_maps_link" className="block text-sm font-medium mb-2 text-gray-700">
                    Google Maps Link (Optional)
                  </Label>
                  <Input
                    id="google_maps_link"
                    name="google_maps_link"
                    type="url"
                    placeholder="https://maps.google.com/..."
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    data-testid="google-maps-link"
                  />
                </div>

                {/* Business Description */}
                <div>
                  <Label htmlFor="business_description" className="block text-sm font-medium mb-2 text-gray-700">
                    Business Description *
                  </Label>
                  <Textarea
                    id="business_description"
                    name="business_description"
                    required
                    rows={4}
                    placeholder="Tell us about your business, services offered, years of experience, certifications, etc..."
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    data-testid="business-description"
                  />
                </div>

                {/* Licensing Information */}
                <div>
                  <Label htmlFor="licensed" className="block text-sm font-medium mb-2 text-gray-700">
                    Licensed Professional?
                  </Label>
                  <Select name="licensed">
                    <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500" data-testid="licensed-select">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes - Licensed</SelectItem>
                      <SelectItem value="No">No - Not Licensed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                  data-testid="submit-listing"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Building2 className="w-6 h-6 mr-2" />
                      Submit Business Listing
                    </div>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  This form is protected by reCAPTCHA. By submitting, you agree to our terms of service.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Review Process</h4>
                    <p className="text-gray-600 text-sm">We'll review your application within 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Verification</h4>
                    <p className="text-gray-600 text-sm">We'll verify your credentials and business information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Go Live</h4>
                    <p className="text-gray-600 text-sm">Your listing goes live and customers can find you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>alsdestinations@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}