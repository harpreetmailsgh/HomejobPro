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
