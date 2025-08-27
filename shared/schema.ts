import { z } from "zod";

export const serviceSchema = z.object({
  id: z.number(),
  title: z.string(), // company name
  rating: z.number().min(0).max(5),
  reviews: z.number().min(0),
  phone: z.string(),
  industry: z.string(), // service type like Plumber
  address: z.string(),
  city: z.string().optional(),
  postCode: z.string().optional(),
  website: z.string().url().optional(),
  googleMapsLink: z.string().url().optional(),
  email: z.string().email().optional(),
  verified: z.string().optional(),
  licensed: z.string().optional(),
  duplicate: z.boolean().optional()
});

export const searchFiltersSchema = z.object({
  query: z.string().optional(),
  industry: z.string().optional(),
  city: z.string().optional(),
  postCode: z.string().optional(),
  minRating: z.number().min(0).max(5).optional(),
  companyName: z.string().optional(),
  phone: z.string().optional(),
  sortBy: z.enum(['rating_desc', 'rating_asc', 'name_asc', 'reviews_desc']).default('rating_desc'),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(50).default(20)
});

export type Service = z.infer<typeof serviceSchema>;
export type SearchFilters = z.infer<typeof searchFiltersSchema>;

export const searchResultsSchema = z.object({
  services: z.array(serviceSchema),
  total: z.number(),
  page: z.number(),
  totalPages: z.number(),
  industries: z.array(z.string()),
  cities: z.array(z.string())
});

export type SearchResults = z.infer<typeof searchResultsSchema>;

export const settingsSchema = z.object({
  id: z.string().default('default'),
  // Home page settings
  heroTitle: z.string().optional(),
  heroSubtitle: z.string().optional(),
  siteTitle: z.string().optional(),
  rotatingServices: z.array(z.string()).optional(),
  backgroundImage: z.string().optional(),
  primaryColor: z.string().optional(),
  accentColor: z.string().optional(),
  
  // Stats section
  statsTitle: z.string().optional(),
  statsSubtitle: z.string().optional(),
  stat1Value: z.string().optional(),
  stat1Label: z.string().optional(),
  stat2Value: z.string().optional(),
  stat2Label: z.string().optional(),
  stat3Value: z.string().optional(),
  stat3Label: z.string().optional(),
  stat4Value: z.string().optional(),
  stat4Label: z.string().optional(),

  // Featured Services section
  featuredTitle: z.string().optional(),
  featuredSubtitle: z.string().optional(),

  // How It Works section
  howItWorksTitle: z.string().optional(),
  howItWorksSubtitle: z.string().optional(),

  // Search Box section
  searchPlaceholders: z.array(z.string()).optional(),

  // Search Results page settings
  searchPageTitle: z.string().optional(),
  searchPageSubtitle: z.string().optional(),
  resultsFoundText: z.string().optional(),
  noResultsText: z.string().optional(),
  filterSectionTitle: z.string().optional(),
  
  // Service type images
  plumberImage: z.string().optional(),
  electricianImage: z.string().optional(),
  hvacImage: z.string().optional(),
  
  // Service type descriptions
  plumberDescription: z.string().optional(),
  electricianDescription: z.string().optional(),
  hvacDescription: z.string().optional(),

  // Home Jobs Guide settings
  homeJobsSections: z.array(z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    color: z.string(),
    description: z.string()
  })).optional(),

  updatedAt: z.string().optional()
});

export type Settings = z.infer<typeof settingsSchema>;
