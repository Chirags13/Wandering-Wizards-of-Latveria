export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  address: string;
  phone: string;
  email: string;
  website?: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export type Category = 'cafe' | 'bookstore' | 'crafts' | 'restaurant' | 'retail';

export interface SearchFilters {
  query: string;
  category: Category | 'all';
  rating: number | null;
}