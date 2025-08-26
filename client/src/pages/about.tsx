import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin, Users, Award, Shield } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function About() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="back-to-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Homejobspro.com</h1>
          <p className="text-xl text-gray-600">Connecting homeowners with trusted local service professionals</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At Homejobspro.com, we're dedicated to making home improvement and maintenance simple and stress-free. 
                We connect homeowners with verified, licensed professionals in their local area, ensuring quality 
                service and peace of mind for every project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Verified Professionals</h3>
                    <p className="text-gray-600">All service providers are thoroughly vetted and verified</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Quality Guarantee</h3>
                    <p className="text-gray-600">We ensure high-quality service from trusted professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Licensed & Insured</h3>
                    <p className="text-gray-600">All professionals are properly licensed and insured</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Plumbing services and repairs</li>
                <li>• Electrical installations and maintenance</li>
                <li>• HVAC systems and climate control</li>
                <li>• Home maintenance and repairs</li>
                <li>• And many more home services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">alsdestinations@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Serving communities across Canada</span>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* FormSubmit.co configuration fields */}
              <input type="hidden" name="_next" value={window.location.origin + "/about?success=true"} />
              <input type="hidden" name="_subject" value="New Contact Form Submission from Homejobspro.com" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  data-testid="contact-name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  data-testid="contact-email"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  data-testid="contact-phone"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is this regarding?"
                  data-testid="contact-subject"
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Please tell us how we can help you..."
                  data-testid="contact-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                data-testid="contact-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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