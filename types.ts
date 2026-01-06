
export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  description: string;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  rating: number;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  serviceId: string;
  professionalId: string;
  date: string;
  time: string;
  userName: string;
  userPhone: string;
}

export enum BookingStep {
  SERVICE = 'service',
  PROFESSIONAL = 'professional',
  DATE_TIME = 'datetime',
  CONFIRMATION = 'confirmation'
}
