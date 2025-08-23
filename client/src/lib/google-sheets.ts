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
  if (!GOOGLE_SHEETS_API_KEY) {
    console.warn('Google Sheets API key not found. Using fallback method.');
    return [];
  }

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:J?key=${GOOGLE_SHEETS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length === 0) {
      return [];
    }

    // First row contains headers
    const headers = rows[0];
    const dataRows = rows.slice(1);

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
