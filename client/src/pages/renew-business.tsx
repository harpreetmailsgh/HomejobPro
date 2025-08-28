import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Check, Star, Phone, MapPin, Mail, Globe, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { useSEO } from '@/hooks/use-seo';
import Header from '@/components/header';
import renewBusinessHero from '@assets/generated_images/Business_growth_analytics_dashboard_d24d677d.png';

const renewalSchema = z.object({
  industry: z.string().min(1, 'Please select an industry'),
  phone: z.string().min(1, 'Please enter your phone number'),
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
    },
  });

  const watchedValues = form.watch(['industry', 'phone']);

  // Get industries list
  const { data: industries } = useQuery({
    queryKey: ['/api/industries'],
    staleTime: 5 * 60 * 1000,
  });

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSearchRef = useRef<string>('');

  useEffect(() => {
    const industry = watchedValues[0];
    const phone = watchedValues[1];
    
    // Clear any existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
      searchTimeoutRef.current = null;
    }

    // Reset states when inputs are incomplete
    if (!industry || !phone || phone.length < 10) {
      setFoundRecord(null);
      setSearchAttempted(false);
      setIsSearching(false);
      lastSearchRef.current = '';
      return;
    }

    // Create a unique key for this search
    const searchKey = `${industry}-${phone}`;
    
    // Don't search if it's the same as the last successful search
    if (searchKey === lastSearchRef.current) {
      return;
    }

    const searchBusiness = async () => {
      // Double check we should still search (component might have unmounted)
      if (!industry || !phone || phone.length < 10) {
        return;
      }

      setIsSearching(true);
      setSearchAttempted(false);
      
      try {
        const response = await apiRequest('POST', '/api/search-business', {
          industry,
          phone,
        });

        if (response.ok) {
          const business = await response.json();
          setFoundRecord(business);
          lastSearchRef.current = searchKey;
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
    };

    // Debounce search with 1 second delay
    searchTimeoutRef.current = setTimeout(searchBusiness, 1000);

    // Cleanup function
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
        searchTimeoutRef.current = null;
      }
    };
  }, [watchedValues]);

  const onSubmit = (data: RenewalForm) => {
    console.log('Renewal data:', data, 'Found record:', foundRecord);
    // Payment processing will be implemented later
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      {/* Hero Section */}
      <div 
        className="relative text-white py-20"
        style={{
          backgroundImage: `url(${renewBusinessHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
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
                    <div className="space-y-6">
                      <div className="border-2 border-red-300 rounded-xl p-8 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                          🔥 MOST POPULAR
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-red-700 mb-2">
                            ⭐ Premium Featured Renewal
                          </h3>
                          <p className="text-lg font-semibold text-red-600 mb-4">
                            Renew and highlight my business to increase chances of calls by at least 10x
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-3 mb-6">
                            <div className="flex items-center text-green-700 font-bold">
                              <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                              Everything in Essential Renewal
                            </div>
                            <div className="flex items-center text-green-700 font-bold">
                              <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                              Get Featured tag on your listing
                            </div>
                            <div className="flex items-center text-green-700 font-bold">
                              <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                              Appear on TOP of FRONT page
                            </div>
                            <div className="flex items-center text-green-700 font-bold">
                              <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                              Red border highlighting your business
                            </div>
                            <div className="flex items-center text-green-700 font-bold">
                              <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                              Highlighted Call button (boosting priority calls)
                            </div>
                            <div className="flex items-center text-green-700 font-bold">
                              <Check className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full p-0.5" />
                              Highlighted Company name
                            </div>
                          </div>

                          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border-2 border-orange-300 mb-4">
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

                          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border-2 border-green-300 mb-4">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-gray-800 mb-1">$197.00</p>
                              <p className="text-sm text-gray-600">One-time renewal fee</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border-2 border-dashed border-orange-400 p-3 mb-6">
                            <div className="text-center">
                              <p className="text-sm font-bold text-orange-800 mb-1">🎉 EXCLUSIVE DISCOUNT CODE</p>
                              <div className="bg-white border-2 border-dashed border-red-500 rounded-lg p-2 my-2">
                                <p className="text-xl font-bold text-red-600">40OFF</p>
                              </div>
                              <p className="text-xs text-orange-700">40% off the base price - Apply at checkout!</p>
                            </div>
                          </div>

                          <div className="mt-6">
                            <a 
                              href="https://buy.stripe.com/14A28sfoZ8Ale9idBkgfu03" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <Button
                                type="button"
                                size="lg"
                                className="w-full px-8 py-4 text-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-xl transform hover:scale-105 transition-all duration-300"
                                data-testid="button-featured-renewal-top"
                              >
                                🚀 Get Premium Featured Renewal Now
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            💼 Essential Renewal
                          </h3>
                          <p className="text-gray-600 text-lg mb-4">
                            Keep my business visible and maintain my current listing status
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
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

                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-blue-300 mb-4">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-gray-800 mb-1">$97.00</p>
                              <p className="text-sm text-gray-600">One-time renewal fee</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-dashed border-blue-400 p-3 mb-4">
                            <div className="text-center">
                              <p className="text-sm font-bold text-blue-800 mb-1">🎉 EXCLUSIVE DISCOUNT CODE</p>
                              <div className="bg-white border-2 border-dashed border-red-500 rounded-lg p-2 my-2">
                                <p className="text-xl font-bold text-red-600">40OFF</p>
                              </div>
                              <p className="text-xs text-blue-700">40% off the base price - Apply at checkout!</p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <a 
                              href="https://buy.stripe.com/28EaEY2CdbMxe9ibtcgfu02" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <Button
                                type="button"
                                size="lg"
                                className="w-full px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg transform hover:scale-105 transition-all duration-300"
                                data-testid="button-essential-renewal-inline"
                              >
                                💼 Get Essential Renewal
                              </Button>
                            </a>
                          </div>
                        </div>
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