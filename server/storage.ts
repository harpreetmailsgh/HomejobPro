import { Service, SearchFilters, SearchResults } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getServices(): Promise<Service[]>;
  searchServices(filters: SearchFilters): Promise<SearchResults>;
  syncFromGoogleSheets(): Promise<void>;
  getUniqueIndustries(): Promise<string[]>;
  getUniqueCities(): Promise<string[]>;
}

export class MemStorage implements IStorage {
  private services: Map<number, Service> = new Map();
  private lastSyncTime: number = 0;

  constructor() {
    // Initialize with empty data - will be populated from Google Sheets
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async searchServices(filters: SearchFilters): Promise<SearchResults> {
    let services = Array.from(this.services.values());

    // Filter out duplicates
    services = services.filter(service => !service.duplicate);

    // Apply filters
    if (filters.query) {
      const query = filters.query.toLowerCase();
      services = services.filter(service => 
        service.industry.toLowerCase().includes(query) ||
        service.title.toLowerCase().includes(query)
      );
    }

    if (filters.industry) {
      services = services.filter(service => 
        service.industry.toLowerCase().includes(filters.industry!.toLowerCase())
      );
    }

    if (filters.city) {
      services = services.filter(service => 
        this.extractCity(service.address).toLowerCase().includes(filters.city!.toLowerCase())
      );
    }

    if (filters.minRating !== undefined) {
      services = services.filter(service => service.rating >= filters.minRating!);
    }

    if (filters.companyName) {
      services = services.filter(service => 
        service.title.toLowerCase().includes(filters.companyName!.toLowerCase())
      );
    }

    // Sort services
    switch (filters.sortBy) {
      case 'rating_desc':
        services.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating_asc':
        services.sort((a, b) => a.rating - b.rating);
        break;
      case 'name_asc':
        services.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    // Pagination
    const total = services.length;
    const totalPages = Math.ceil(total / filters.limit);
    const startIndex = (filters.page - 1) * filters.limit;
    const paginatedServices = services.slice(startIndex, startIndex + filters.limit);

    // Get unique industries and cities for filters
    const allServices = Array.from(this.services.values()).filter(s => !s.duplicate);
    const industries = Array.from(new Set(allServices.map(s => s.industry))).sort();
    const cities = Array.from(new Set(allServices.map(s => this.extractCity(s.address)))).filter(Boolean).sort();

    return {
      services: paginatedServices,
      total,
      page: filters.page,
      totalPages,
      industries,
      cities
    };
  }

  async syncFromGoogleSheets(): Promise<void> {
    try {
      // Fetch data directly from Google Sheets CSV export
      const SHEET_ID = '1dZ_sckZb9L6eXjymMk4gBUFC-mbTIIKydA2W_LZ0Yu8';
      const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
      
      let sheetsData = [];
      try {
        const response = await fetch(csvUrl);
        if (response.ok) {
          const csvText = await response.text();
          const rows = csvText.split('\n').map(row => row.split(',').map(cell => cell.replace(/"/g, '').trim()));
          
          if (rows && rows.length > 1) {
            const headers = rows[0];
            const dataRows = rows.slice(1).filter(row => row.length > 1 && row[0]); // Filter out empty rows
            
            sheetsData = dataRows.map((row: string[]) => {
              const rowData: any = {};
              headers.forEach((header: string, index: number) => {
                rowData[header] = row[index] || '';
              });
              return rowData;
            });
          }
        }
      } catch (error) {
        console.warn('Could not fetch from Google Sheets, using sample data:', error);
      }

      // If no data from sheets, use sample data for testing
      if (sheetsData.length === 0) {
        this.populateWithSampleData();
      } else {
        // Convert Google Sheets data to our Service format
        const services = sheetsData.map((row, index) => ({
          id: parseInt(row['S no']) || index + 1,
          title: row['Title'] || '',
          rating: parseFloat(row['Rating']) || 0,
          reviews: parseInt(row['Reviews']) || 0,
          phone: row['Phone'] || '',
          industry: row['Industry'] || '',
          address: row['Address'] || '',
          website: row['Website'] || undefined,
          googleMapsLink: row['Google Maps Link'] || undefined,
          duplicate: row['duplicate']?.toLowerCase() === 'true' || false
        })).filter(service => service.title && service.industry); // Filter out empty rows

        this.populateServices(services);
      }
      
      this.lastSyncTime = Date.now();
      console.log(`Synced ${this.services.size} services from data source`);
    } catch (error) {
      console.error('Error syncing from Google Sheets:', error);
      // Fallback to sample data if import fails
      this.populateWithSampleData();
      this.lastSyncTime = Date.now();
    }
  }

  private populateWithSampleData(): void {
    const sampleServices = [
      {
        id: 1,
        title: "Elite Plumbing Services",
        rating: 4.8,
        reviews: 142,
        phone: "(555) 123-4567",
        industry: "Plumber",
        address: "123 Main St, San Francisco, CA 94102",
        website: "https://eliteplumbing.com",
        googleMapsLink: "https://maps.google.com/maps?q=Elite+Plumbing+Services+San+Francisco",
        duplicate: false
      },
      {
        id: 2,
        title: "ProElectric Solutions",
        rating: 4.6,
        reviews: 89,
        phone: "(555) 234-5678",
        industry: "Electrician",
        address: "456 Oak Ave, San Francisco, CA 94103",
        website: "https://proelectric.com",
        googleMapsLink: "https://maps.google.com/maps?q=ProElectric+Solutions+San+Francisco",
        duplicate: false
      },
      {
        id: 3,
        title: "Climate Control Experts",
        rating: 4.9,
        reviews: 203,
        phone: "(555) 345-6789",
        industry: "HVAC Technician",
        address: "789 Pine St, San Jose, CA 95101",
        website: "https://climatecontrol.com",
        googleMapsLink: "https://maps.google.com/maps?q=Climate+Control+Experts+San+Jose",
        duplicate: false
      },
      {
        id: 4,
        title: "Green Thumb Landscaping",
        rating: 4.7,
        reviews: 156,
        phone: "(555) 456-7890",
        industry: "Landscaper",
        address: "321 Garden Blvd, Oakland, CA 94601",
        website: "https://greenthumb.com",
        googleMapsLink: "https://maps.google.com/maps?q=Green+Thumb+Landscaping+Oakland",
        duplicate: false
      },
      {
        id: 5,
        title: "AllFix Home Services",
        rating: 4.5,
        reviews: 98,
        phone: "(555) 567-8901",
        industry: "Home Services",
        address: "654 Repair Rd, Berkeley, CA 94702",
        website: "https://allfix.com",
        googleMapsLink: "https://maps.google.com/maps?q=AllFix+Home+Services+Berkeley",
        duplicate: false
      },
      {
        id: 6,
        title: "Quick Fix Plumbing",
        rating: 4.4,
        reviews: 67,
        phone: "(555) 678-9012",
        industry: "Plumber",
        address: "987 Water St, Palo Alto, CA 94301",
        website: "https://quickfixplumbing.com",
        googleMapsLink: "https://maps.google.com/maps?q=Quick+Fix+Plumbing+Palo+Alto",
        duplicate: false
      },
      {
        id: 7,
        title: "Spark Electric Co",
        rating: 4.8,
        reviews: 134,
        phone: "(555) 789-0123",
        industry: "Electrician",
        address: "147 Voltage Ave, San Mateo, CA 94401",
        website: "https://sparkelectric.com",
        googleMapsLink: "https://maps.google.com/maps?q=Spark+Electric+Co+San+Mateo",
        duplicate: false
      },
      {
        id: 8,
        title: "Cool Air HVAC",
        rating: 4.6,
        reviews: 78,
        phone: "(555) 890-1234",
        industry: "HVAC Technician",
        address: "258 Cool Breeze Ln, Fremont, CA 94536",
        website: "https://coolair.com",
        googleMapsLink: "https://maps.google.com/maps?q=Cool+Air+HVAC+Fremont",
        duplicate: false
      }
    ];

    this.populateServices(sampleServices);
  }

  async getUniqueIndustries(): Promise<string[]> {
    const services = Array.from(this.services.values()).filter(s => !s.duplicate);
    return Array.from(new Set(services.map(s => s.industry))).sort();
  }

  async getUniqueCities(): Promise<string[]> {
    const services = Array.from(this.services.values()).filter(s => !s.duplicate);
    return Array.from(new Set(services.map(s => this.extractCity(s.address)))).filter(Boolean).sort();
  }

  private extractCity(address: string): string {
    // Extract city from address format: "123 Street, City, State ZIP"
    const parts = address.split(',');
    if (parts.length >= 2) {
      return parts[1].trim();
    }
    return '';
  }

  // Method to populate services (will be called from Google Sheets API)
  populateServices(servicesData: Service[]): void {
    this.services.clear();
    servicesData.forEach(service => {
      this.services.set(service.id, service);
    });
  }
}

export const storage = new MemStorage();
