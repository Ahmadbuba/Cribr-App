import { Customer } from './customer.model';
import { PropertyImage } from './propertyImage.model';

export interface Property {
  id: number;
  owner: Customer;
  status: boolean;
  city: string;
  district: string;
  address: string;
  category: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  no_bedrooms: number;
  condition: string;
  square_meters: number;
  furnishing: string;
  parking_spaces: string;
  secure_parking: boolean;
  price: number;
  negotiable: boolean;
  ad_tier: string;
  images: PropertyImage[];
}
