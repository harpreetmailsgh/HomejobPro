import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin, Users, Award, Shield, CheckCircle, Star, Clock } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "../hooks/use-seo";
import heroImage from "@assets/generated_images/Home_services_team_hero_0e492e2c.png";

export default function About() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: "About Homejobspro.com | Connecting You with Trusted Home Service Professionals",
    description: "Learn about Homejobspro.com - your trusted platform for finding verified local home service professionals. We connect homeowners with quality plumbers, electricians, and HVAC technicians.",
    keywords: "about homejobspro, trusted home services, verified professionals, local contractors, home service directory, reliable plumbers electricians HVAC",
    canonical: "https://homejobspro.com/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Homejobspro.com",
      "description": "Learn about Homejobspro.com - your trusted platform for finding verified local home service professionals.",
      "url": "https://homejobspro.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Homejobspro.com",
        "description": "Trusted platform connecting homeowners with verified local home service professionals",
        "url": "https://homejobspro.com"
      }
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/alsdestinations@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Homejobspro.com</h1>
            <p className="text-xl md:text-2xl mb-8">Connecting homeowners with trusted local service professionals</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Verified Professionals</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>24/7 Support</span>
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

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Jobs Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Verified Pros</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <div className="space-y-8">
            <section className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At Homejobspro.com, we're dedicated to making home improvement and maintenance simple and stress-free. 
                We connect homeowners with verified, licensed professionals in their local area, ensuring quality 
                service and peace of mind for every project.
              </p>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Verified Professionals</h3>
                    <p className="text-gray-600 text-sm">Thoroughly vetted and verified service providers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Quality Guarantee</h3>
                    <p className="text-gray-600 text-sm">High-quality service from trusted professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Licensed & Insured</h3>
                    <p className="text-gray-600 text-sm">All professionals properly licensed and insured</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock customer support available</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Our Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Plumbing Services</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Electrical Work</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">HVAC Systems</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Home Maintenance</span>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">Contact Information</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-300" />
                  <span className="text-gray-200">alsdestinations@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-300" />
                  <span className="text-gray-200">Serving communities across Canada</span>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
              <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* FormSubmit.co configuration fields */}
              <input type="hidden" name="_next" value={window.location.origin + "/about?success=true"} />
              <input type="hidden" name="_subject" value="New Contact Form Submission from Homejobspro.com" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    data-testid="contact-name"
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
                    placeholder="your.email@example.com"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    data-testid="contact-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    data-testid="contact-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What is this regarding?"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    data-testid="contact-subject"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Please tell us how we can help you..."
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  data-testid="contact-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                data-testid="contact-submit"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                This form is protected by reCAPTCHA and will send your message securely.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}