import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Check, Star, Phone, MapPin, Mail, Globe, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { useSEO } from '@/hooks/use-seo';

const renewalSchema = z.object({
  industry: z.string().min(1, 'Please select an industry'),
  phone: z.string().min(1, 'Please enter your phone number'),
  renewalType: z.enum(['basic', 'featured'], {
    required_error: 'Please select a renewal type',
  }),
});

type RenewalForm = z.infer<typeof renewalSchema>;

interface BusinessRecord {
  id: number;
  title: string;
  rating: number;
  reviews: number;
  phone: string;
  industry: string;
  address: string;
  email: string;
  website?: string;
  city: string;
  postCode: string;
  verified: string;
  licensed: string;
  featured: string;
}

export default function RenewBusiness() {
  useSEO({
    title: 'Renew Your Business Listing - Homejobspro.com',
    description: 'Renew your business listing on Homejobspro.com and stay visible to thousands of local customers. Choose from basic or featured renewal options.',
  });

  const [foundRecord, setFoundRecord] = useState<BusinessRecord | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const form = useForm<RenewalForm>({
    resolver: zodResolver(renewalSchema),
    defaultValues: {
      industry: '',
      phone: '',
      renewalType: 'basic',
    },
  });

  const watchedValues = form.watch(['industry', 'phone']);

  // Get industries list
  const { data: industries } = useQuery({
    queryKey: ['/api/industries'],
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    const searchBusiness = async () => {
      if (watchedValues[0] && watchedValues[1] && watchedValues[1].length >= 10) {
        setIsSearching(true);
        setSearchAttempted(false);
        setFoundRecord(null);

        try {
          const response = await apiRequest('POST', '/api/search-business', {
            industry: watchedValues[0],
            phone: watchedValues[1],
          });

          if (response.ok) {
            const business = await response.json();
            setFoundRecord(business);
          } else {
            setFoundRecord(null);
          }
        } catch (error) {
          console.error('Search error:', error);
          setFoundRecord(null);
        } finally {
          setIsSearching(false);
          setSearchAttempted(true);
        }
      }
    };

    const timeoutId = setTimeout(searchBusiness, 500);
    return () => clearTimeout(timeoutId);
  }, [watchedValues]);

  const onSubmit = (data: RenewalForm) => {
    console.log('Renewal data:', data, 'Found record:', foundRecord);
    // Payment processing will be implemented later
  };

  // Stripe button component for buy buttons
  const StripeButton = ({ buyButtonId, children }: { buyButtonId: string; children: React.ReactNode }) => {
    useEffect(() => {
      // Load Stripe script
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }, []);

    return (
      <div>
        {children}
        <div
          dangerouslySetInnerHTML={{
            __html: `<stripe-buy-button
              buy-button-id="${buyButtonId}"
              publishable-key="pk_live_51RJIuFKSLjkNdRA0OGFrnl7BO4TgXPBfMRaVtuge1GaHHYvBtsjtwOU8jEDKNuAxjJ6uGQkBevDWdmV0DN5oOeiu00Gasg6ubC">
            </stripe-buy-button>`
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Renew Your Business Listing
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Stay visible to thousands of local customers actively searching for your services
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Increase Visibility</h3>
                <p className="text-sm opacity-90">Get found by more customers in your area</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">More Leads</h3>
                <p className="text-sm opacity-90">Connect with customers ready to hire</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Build Trust</h3>
                <p className="text-sm opacity-90">Showcase your verified status and ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-10 relative z-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Zap className="w-6 h-6 mr-3" />
                  Find Your Business
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Select your industry and enter your phone number to locate your listing
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-industry">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries?.map((industry: string) => (
                              <SelectItem 
                                key={industry} 
                                value={industry}
                                data-testid={`industry-${industry.toLowerCase().replace(' ', '-')}`}
                              >
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(416) 123-4567" 
                            {...field} 
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {isSearching && (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center space-x-2">
                      <div className="animate-spin w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                      <span className="text-gray-600">Searching for your business...</span>
                    </div>
                  </div>
                )}

                {foundRecord && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                      <Check className="w-6 h-6 mr-3 bg-green-500 text-white rounded-full p-1" />
                      ✨ Business Found Successfully!
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-700">
                        <strong className="mr-2">Company:</strong> {foundRecord.title}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="w-4 h-4 mr-2" />
                        {foundRecord.phone}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2" />
                        {foundRecord.address}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Mail className="w-4 h-4 mr-2" />
                        {foundRecord.email}
                      </div>
                      {foundRecord.website && (
                        <div className="flex items-center text-gray-700 md:col-span-2">
                          <Globe className="w-4 h-4 mr-2" />
                          {foundRecord.website}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {searchAttempted && !foundRecord && !isSearching && watchedValues[0] && watchedValues[1] && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700">
                      No business found with that phone number in the {watchedValues[0]} industry. 
                      Please use the phone number listed on your Google listing.
                      <br /><br />
                      If you like, we can change your phone number anytime later.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {foundRecord && (
              <>
                {/* Promotional Banner */}
                <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl p-6 shadow-xl mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Star className="w-8 h-8 mr-2 fill-current" />
                      <span className="text-3xl font-bold">40% OFF</span>
                      <Star className="w-8 h-8 ml-2 fill-current" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Limited Time Offer!</h2>
                    <p className="text-lg opacity-90">
                      Use promo code <strong>40OFF</strong> on both renewal plans
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mt-4 inline-block">
                      <code className="text-xl font-mono font-bold">40OFF</code>
                    </div>
                  </div>
                </div>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
                    <CardTitle className="text-2xl flex items-center">
                      <Award className="w-6 h-6 mr-3" />
                      Choose Your Renewal Plan
                    </CardTitle>
                    <CardDescription className="text-purple-100">
                      Select the best option to grow your business and reach more customers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <FormField
                      control={form.control}
                      name="renewalType"
                      render={({ field }) => (
                        <FormItem className="space-y-6">
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="space-y-6"
                          >
                            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                              <div className="flex items-start space-x-4 mb-4">
                                <RadioGroupItem value="basic" id="basic" data-testid="radio-basic" className="mt-1" />
                                <div className="flex-1">
                                  <Label htmlFor="basic" className="text-2xl font-bold text-gray-800 cursor-pointer block mb-2">
                                    💼 Essential Renewal
                                  </Label>
                                  <p className="text-gray-600 text-lg mb-4">
                                    Keep your business visible and maintain your current listing status
                                  </p>
                                  <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center text-green-600 font-medium">
                                      <Check className="w-5 h-5 mr-2" />
                                      Stay searchable
                                    </div>
                                    <div className="flex items-center text-green-600 font-medium">
                                      <Check className="w-5 h-5 mr-2" />
                                      Maintain ratings
                                    </div>
                                    <div className="flex items-center text-green-600 font-medium">
                                      <Check className="w-5 h-5 mr-2" />
                                      Customer contact info
                                    </div>
                                    <div className="flex items-center text-green-600 font-medium">
                                      <Check className="w-5 h-5 mr-2" />
                                      12-month listing
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="border-2 border-red-300 rounded-xl p-8 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg relative overflow-hidden">
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                                🔥 MOST POPULAR
                              </div>
                              
                              <div className="flex items-start space-x-4 mb-6">
                                <RadioGroupItem value="featured" id="featured" data-testid="radio-featured" className="mt-1" />
                                <div className="flex-1">
                                  <Label htmlFor="featured" className="text-2xl font-bold text-red-700 cursor-pointer block mb-2">
                                    ⭐ Premium Featured Renewal
                                  </Label>
                                  <p className="text-lg font-semibold text-red-600 mb-4">
                                    🚀 Increase chances of calls by at least 10x by featuring your listing!
                                  </p>
                                  
                                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                                    <div className="flex items-center text-green-700 font-bold">
                                      <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                                      Get Featured tag
                                    </div>
                                    <div className="flex items-center text-green-700 font-bold">
                                      <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                                      Call button highlighted
                                    </div>
                                    <div className="flex items-center text-green-700 font-bold">
                                      <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                                      Red border highlighting
                                    </div>
                                    <div className="flex items-center text-green-700 font-bold">
                                      <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                                      Red company name
                                    </div>
                                    <div className="flex items-center text-green-700 font-bold">
                                      <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                                      Priority search placement
                                    </div>
                                    <div className="flex items-center text-green-700 font-bold">
                                      <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                                      Enhanced visibility
                                    </div>
                                  </div>

                                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border-2 border-orange-300">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="text-lg font-semibold text-gray-800">💰 Value Comparison</p>
                                        <p className="text-sm text-gray-600">Compared to traditional advertising</p>
                                      </div>
                                      <div className="text-right">
                                        <div className="text-2xl font-bold text-green-600">10x</div>
                                        <div className="text-sm text-gray-600">More effective</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </RadioGroup>
                        </FormItem>
                      )}
                    />

                    <div className="mt-12 text-center">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎉 Ready to Renew?</h3>
                        <p className="text-lg text-gray-600 mb-6">
                          Don't forget to apply promo code <strong>40OFF</strong> for 40% off your renewal!
                        </p>
                        
                        {form.watch('renewalType') === 'featured' ? (
                          <StripeButton buyButtonId="buy_btn_1S0oNoKSLjkNdRA0qai3ohgt">
                            <div className="mb-4">
                              <Button
                                type="button"
                                size="lg"
                                className="px-12 py-4 text-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-xl transform hover:scale-105 transition-all duration-300"
                                data-testid="button-featured-renewal"
                              >
                                🚀 Get Premium Featured Renewal
                              </Button>
                            </div>
                          </StripeButton>
                        ) : (
                          <StripeButton buyButtonId="buy_btn_1S0oG9KSLjkNdRA0s71IvRKU">
                            <div className="mb-4">
                              <Button
                                type="button"
                                size="lg"
                                className="px-12 py-4 text-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-xl transform hover:scale-105 transition-all duration-300"
                                data-testid="button-basic-renewal"
                              >
                                💼 Get Essential Renewal
                              </Button>
                            </div>
                          </StripeButton>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Trust and Security Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">🔒 Secure & Trusted</h3>
                    <p className="text-gray-600">Your payment and business information is protected</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">SSL Encrypted</h4>
                      <p className="text-sm text-gray-600">Bank-level security</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Trusted by 1000+</h4>
                      <p className="text-sm text-gray-600">Local businesses</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Money Back</h4>
                      <p className="text-sm text-gray-600">30-day guarantee</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}