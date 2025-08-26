// Google Sheets API integration utility
const GOOGLE_SHEETS_API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || '';
const SHEET_ID = '1dZ_sckZb9L6eXjymMk4gBUFC-mbTIIKydA2W_LZ0Yu8';

export interface GoogleSheetsRow {
  'S no': string;
  'Title': string;
  'Rating': string;
  'Reviews': string;
  'Phone': string;
  'Industry': string;
  'Address': string;
  'Website': string;
  'Google Maps Link': string;
  'duplicate': string;
}

export const getImageForIndustry = (industry: string): string => {
  // First check for custom uploaded images from settings
  const searchSettings = localStorage.getItem('search-results-settings');
  if (searchSettings) {
    try {
      const settings = JSON.parse(searchSettings);
      const key = industry.toLowerCase();
      
      if (key === 'plumber' && settings.plumberImage) {
        return settings.plumberImage;
      }
      if (key === 'electrician' && settings.electricianImage) {
        return settings.electricianImage;
      }
      if ((key === 'hvac technician' || key === 'hvac') && settings.hvacImage) {
        return settings.hvacImage;
      }
    } catch (error) {
      console.error('Error loading search settings for images:', error);
    }
  }

  // Fallback to default Unsplash images
  const industryImages: Record<string, string> = {
    'plumber': 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    'electrician': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    'hvac technician': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    'landscaper': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    'home services': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    'handyman': 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250'
  };

  const key = industry.toLowerCase();
  return industryImages[key] || industryImages['home services'];
};

export const fetchGoogleSheetsData = async (): Promise<GoogleSheetsRow[]> => {
  try {
    // Use CSV export URL for public Google Sheets
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
    
    const response = await fetch(csvUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();
    const rows = csvText.split('\n').map(row => row.split(',').map(cell => cell.replace(/"/g, '').trim()));

    if (!rows || rows.length === 0) {
      return [];
    }

    // First row contains headers
    const headers = rows[0];
    const dataRows = rows.slice(1).filter(row => row.length > 1 && row[0]); // Filter out empty rows

    return dataRows.map((row: string[]) => {
      const rowData: any = {};
      headers.forEach((header: string, index: number) => {
        rowData[header] = row[index] || '';
      });
      return rowData as GoogleSheetsRow;
    });
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
    throw error;
  }
};
