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
import { Check, Star, Phone, MapPin, Mail, Globe } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { useSEO } from '@/hooks/use-seo';

const renewFormSchema = z.object({
  industry: z.string().min(1, 'Please select an industry'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  renewalType: z.enum(['basic', 'featured']).default('featured'),
});

type RenewFormData = z.infer<typeof renewFormSchema>;

interface ServiceRecord {
  id: number;
  title: string;
  address: string;
  email: string;
  website: string;
  phone: string;
  industry: string;
}

const industryOptions = [
  'Plumbing',
  'Electrical',
  'HVAC',
  'Landscaping',
  'Roofing',
  'Painting',
  'Cleaning Services',
  'Handyman',
  'Flooring',
  'Windows & Doors',
  'Pest Control',
  'Security Systems',
  'Pool Services',
  'Moving Services',
  'Appliance Repair',
];

export default function RenewBusiness() {
  useSEO({
    title: 'Renew Your Business Listing - Homejobspro.com',
    description: 'Renew your business listing on Homejobspro.com to keep your services visible to local customers. Feature your listing for 10x more visibility.',
  });

  const [foundRecord, setFoundRecord] = useState<ServiceRecord | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const form = useForm<RenewFormData>({
    resolver: zodResolver(renewFormSchema),
    defaultValues: {
      industry: '',
      phone: '',
      renewalType: 'featured',
    },
  });

  const watchedValues = form.watch(['industry', 'phone']);

  // Search for business record when industry and phone are provided
  const { data: searchResult, isLoading: isSearching } = useQuery({
    queryKey: ['/api/search-business', watchedValues[0], watchedValues[1]],
    queryFn: async () => {
      if (!watchedValues[0] || !watchedValues[1] || watchedValues[1].length < 10) {
        return null;
      }
      
      const response = await apiRequest('POST', '/api/search-business', {
        industry: watchedValues[0],
        phone: watchedValues[1],
      });
      
      if (!response.ok) {
        throw new Error('Failed to search for business');
      }
      
      return response.json();
    },
    enabled: watchedValues[0] !== '' && watchedValues[1] !== '' && watchedValues[1].length >= 10,
  });

  useEffect(() => {
    if (searchResult) {
      setFoundRecord(searchResult);
      setSearchAttempted(true);
    } else if (watchedValues[0] && watchedValues[1] && watchedValues[1].length >= 10) {
      setFoundRecord(null);
      setSearchAttempted(true);
    }
  }, [searchResult, watchedValues]);

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    form.setValue('phone', formatted);
  };

  const onSubmit = (data: RenewFormData) => {
    console.log('Renewal data:', data, 'Found record:', foundRecord);
    // Payment processing will be implemented later
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Renew Your Business Listing
          </h1>
          <p className="text-xl text-gray-600">
            Keep your business visible to local customers searching for your services
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Find Your Business</CardTitle>
                <CardDescription>
                  Select your industry and enter your phone number to locate your listing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                          {industryOptions.map((industry) => (
                            <SelectItem key={industry} value={industry}>
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
                          {...field}
                          onChange={handlePhoneChange}
                          placeholder="(555) 123-4567"
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {isSearching && (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center">
                      <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full mr-2" />
                      Searching for your business...
                    </div>
                  </div>
                )}

                {foundRecord && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      Business Found!
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
                      Please verify your information or contact support.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {foundRecord && (
              <Card>
                <CardHeader>
                  <CardTitle>Choose Your Renewal Plan</CardTitle>
                  <CardDescription>
                    Select the best option for your business needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                          <div className="border rounded-lg p-6">
                            <div className="flex items-center space-x-2 mb-3">
                              <RadioGroupItem value="basic" id="basic" data-testid="radio-basic" />
                              <Label htmlFor="basic" className="text-lg font-semibold">
                                Renew my listing
                              </Label>
                            </div>
                            <p className="text-gray-600 ml-6">
                              Renew my listings so customers can find me
                            </p>
                          </div>

                          <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                            <div className="flex items-center space-x-2 mb-3">
                              <RadioGroupItem value="featured" id="featured" data-testid="radio-featured" />
                              <Label htmlFor="featured" className="text-lg font-semibold">
                                Renew my listing PLUS Feature my listing
                              </Label>
                            </div>
                            <p className="text-gray-700 ml-6 mb-4">
                              Increase chances of calls by at least 10x by featuring your listing.
                            </p>
                            <div className="ml-6 space-y-2">
                              <div className="flex items-center text-green-700 font-medium">
                                <Check className="w-5 h-5 mr-2 font-bold" />
                                Get Featured tag
                              </div>
                              <div className="flex items-center text-green-700 font-medium">
                                <Check className="w-5 h-5 mr-2 font-bold" />
                                Call button highlighted
                              </div>
                              <div className="flex items-center text-green-700 font-medium">
                                <Check className="w-5 h-5 mr-2 font-bold" />
                                Highlight listing with red border
                              </div>
                              <div className="flex items-center text-green-700 font-medium">
                                <Check className="w-5 h-5 mr-2 font-bold" />
                                Company name appears in red
                              </div>
                            </div>

                            {field.value === 'featured' && (
                              <div className="mt-6 ml-6">
                                <p className="text-gray-700 mb-3">
                                  Apply the below promo code on the next page, for discount
                                </p>
                                <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-4 rounded-lg font-bold text-xl text-center shadow-lg">
                                  <div className="flex items-center justify-center">
                                    <Star className="w-6 h-6 mr-2 fill-current" />
                                    40OFF
                                    <Star className="w-6 h-6 ml-2 fill-current" />
                                  </div>
                                  <div className="text-sm mt-1 font-normal">
                                    for 40% Off
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </RadioGroup>
                      </FormItem>
                    )}
                  />

                  <div className="mt-8 text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className={`px-8 py-3 text-lg ${
                        form.watch('renewalType') === 'featured'
                          ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                      data-testid={form.watch('renewalType') === 'featured' ? 'button-featured-renewal' : 'button-basic-renewal'}
                    >
                      {form.watch('renewalType') === 'featured'
                        ? 'Continue to Featured Renewal Payment'
                        : 'Continue to Basic Renewal Payment'
                      }
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}