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
        service.industry.toLowerCase() === filters.industry!.toLowerCase()
      );
    }

    if (filters.city) {
      services = services.filter(service =>
        service.city && service.city.toLowerCase().includes(filters.city!.toLowerCase())
      );
    }

    if (filters.postCode) {
      services = services.filter(service =>
        service.postCode && service.postCode.toLowerCase().includes(filters.postCode!.toLowerCase())
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

    if (filters.phone) {
      services = services.filter(service =>
        service.phone.toLowerCase().includes(filters.phone!.toLowerCase())
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
      case 'reviews_desc':
        services.sort((a, b) => b.reviews - a.reviews);
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
    const cities = Array.from(new Set(allServices.map(s => s.city).filter((city): city is string => Boolean(city)))).sort();

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
      // Fetch data from all sheets in the Google Sheets document
      const SHEET_ID = '1dZ_sckZb9L6eXjymMk4gBUFC-mbTIIKydA2W_LZ0Yu8';

      // List of sheet names to fetch from
      const sheetNames = ['Plumber', 'Electrician', 'HVAC Technician'];
      let allSheetsData: any[] = [];

      for (const sheetName of sheetNames) {
        try {
          const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
          const response = await fetch(csvUrl);

          if (response.ok) {
            const csvText = await response.text();

            // Skip if response is HTML (indicates sheet doesn't exist)
            if (csvText.includes('<HTML>') || csvText.includes('<!DOCTYPE')) {
              console.log(`Sheet "${sheetName}" not found, skipping...`);
              continue;
            }

            const rows = csvText.split('\n').map(row => {
              // Handle CSV parsing with proper quote handling
              const cells = [];
              let current = '';
              let inQuotes = false;

              for (let i = 0; i < row.length; i++) {
                const char = row[i];
                if (char === '"' && (i === 0 || row[i-1] === ',' || inQuotes)) {
                  inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                  cells.push(current.trim());
                  current = '';
                } else {
                  current += char;
                }
              }
              cells.push(current.trim());
              return cells;
            });

            if (rows && rows.length > 1) {
              const headers = rows[0];
              const dataRows = rows.slice(1).filter(row => row.length > 1 && row[0]); // Filter out empty rows

              const sheetData = dataRows.map((row: string[]) => {
                const rowData: any = {};
                headers.forEach((header: string, index: number) => {
                  rowData[header] = row[index] || '';
                });
                return rowData;
              });

              allSheetsData = allSheetsData.concat(sheetData);
              console.log(`Fetched ${dataRows.length} rows from "${sheetName}" sheet`);
            }
          }
        } catch (error) {
          // Continue to next sheet if this one fails
          console.log(`Error fetching sheet "${sheetName}":`, error);
        }
      }

      let sheetsData = allSheetsData;

      // If no data from sheets, use sample data for testing
      if (sheetsData.length === 0) {
        this.populateWithSampleData();
      } else {
        // Log available columns for debugging
        const firstRow = sheetsData[0];
        if (firstRow) {
          console.log('Available Google Sheets columns:', Object.keys(firstRow));
        }

        // Convert Google Sheets data to our Service format
        let globalId = 1;

        // Debug: Check data structure
        console.log(`Processing ${sheetsData.length} total rows from all sheets`);
        if (sheetsData.length > 0) {
          console.log('Sample row structure:', Object.keys(sheetsData[0]));
        }

        const services = sheetsData.map((row, index) => {
          // Handle different column names between sheets
          const title = row['Title'] || row['itle'] || ''; // Electrician sheet has 'itle' not 'Title'
          const industry = row['Industry'] || '';
          const address = row['Complete address'] || row['GM Address'] || row['Address'] || '';

          const service = {
            id: parseInt(row['S no']) || globalId++,
            title: title.trim(),
            rating: parseFloat(row['Rating']) || 0,
            reviews: parseInt(row['Reviews']) || 0,
            phone: row['Phone'] || '',
            industry: industry.trim(),
            address: address.trim(),
            city: (row['City from address'] || '').trim(),
            postCode: (row['Post code'] || '').trim(),
            website: row['Website'] || undefined,
            googleMapsLink: row['Google Maps Link'] || undefined,
            email: row['Email'] || undefined,
            duplicate: row['duplicate']?.toLowerCase() === 'true' || false
          };

          return service;
        }).filter((service, index) => {
          // Basic validation for required fields
          const hasTitle = service.title && service.title.trim() !== '';
          const hasIndustry = service.industry && service.industry.trim() !== '';
          
          // Filter out invalid/test entries
          const isInvalidTitle = service.title && (
            service.title.toLowerCase().includes('feel free to ask') ||
            service.title.toLowerCase().includes('test') ||
            service.title.trim() === '' ||
            service.title.length < 2
          );
          
          // Filter out invalid industry values - must be one of the expected industries
          const validIndustries = ['Plumber', 'Electrician', 'HVAC Technician'];
          const hasValidIndustry = service.industry && validIndustries.includes(service.industry.trim());
          
          const isValid = hasTitle && hasIndustry && !isInvalidTitle && hasValidIndustry;
          
          if (!isValid && index < 10) {
            console.log(`Filtering out row ${index}:`, { 
              title: service.title, 
              industry: service.industry,
              reason: !hasTitle ? 'no title' : !hasIndustry ? 'no industry' : 
                      isInvalidTitle ? 'invalid title' : !hasValidIndustry ? 'invalid industry' : 'unknown'
            });
          }
          return isValid;
        }); // Filter out invalid entries

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
    const industries = new Set<string>();

    // Only include valid industry values
    const validIndustries = ['Plumber', 'Electrician', 'HVAC Technician'];

    services.forEach(service => {
      if (service.industry && service.industry.trim() !== '') {
        const cleanIndustry = service.industry.trim();
        // Only add if it's a valid industry
        if (validIndustries.includes(cleanIndustry)) {
          industries.add(cleanIndustry);
        }
      }
    });

    return Array.from(industries).sort();
  }

  async getUniqueCities(): Promise<string[]> {
    const services = Array.from(this.services.values()).filter(s => !s.duplicate);
    return Array.from(new Set(services.map(s => s.city).filter((city): city is string => Boolean(city)))).sort();
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
    let id = 1;
    servicesData.forEach(service => {
      // Ensure unique IDs by assigning incremental IDs
      const uniqueService = { ...service, id: id++ };
      this.services.set(uniqueService.id, uniqueService);
    });
    console.log(`Total services populated: ${this.services.size}`);
  }
}

export const storage = new MemStorage();