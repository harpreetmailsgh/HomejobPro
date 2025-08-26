import { Link } from "wouter";
import { CheckCircle, Home, Building2, Mail, Clock } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your business listing has been successfully submitted. We'll review your application and get back to you shortly.
          </p>

          {/* What's Next Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">What Happens Next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Review Process</h3>
                <p className="text-gray-600">We'll review your application within 24-48 hours and verify all information</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Verification</h3>
                <p className="text-gray-600">We'll contact you to verify your credentials and business details</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Go Live</h3>
                <p className="text-gray-600">Your listing will go live and customers can start finding your business</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-semibold mb-4">We'll Connect With You Shortly</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Response within 24-48 hours</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>Updates via email</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Professional support team</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Link href="/">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                data-testid="back-to-home-button"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <p className="text-gray-600">
              Have questions? Contact us at{" "}
              <a href="mailto:alsdestinations@gmail.com" className="text-blue-600 hover:underline">
                alsdestinations@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}