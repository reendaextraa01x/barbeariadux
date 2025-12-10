
export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  image: string;
  instagram?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  LOCATION = 'location',
  BOOKING = 'booking',
  CONTACT = 'contact'
}
