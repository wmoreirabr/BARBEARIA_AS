
import { Service, Professional } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Corte Clássico',
    price: 50.00,
    duration: 45,
    description: 'Corte tradicional com tesoura e máquina, finalizado com produtos premium.'
  },
  {
    id: '2',
    name: 'Degradê / Fade',
    price: 65.00,
    duration: 60,
    description: 'Efeito sombreado moderno com precisão extrema.'
  },
  {
    id: '3',
    name: 'Barba Terapia',
    price: 45.00,
    duration: 30,
    description: 'Toalha quente, óleos essenciais e barbear tradicional com navalha.'
  },
  {
    id: '4',
    name: 'Combo (Cabelo + Barba)',
    price: 100.00,
    duration: 90,
    description: 'A experiência completa para renovar seu visual.'
  },
  {
    id: '5',
    name: 'Sobrancelha',
    price: 25.00,
    duration: 15,
    description: 'Limpeza e alinhamento do olhar.'
  },
  {
    id: '6',
    name: 'Pigmentação de Barba',
    price: 40.00,
    duration: 40,
    description: 'Correção de falhas e realce do contorno da barba.'
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'p1',
    name: 'Carlos "Mestre" Lima',
    role: 'Barbeiro Sênior',
    bio: 'Especialista em cortes clássicos e visagismo facial com mais de 10 anos de experiência.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 4.9
  },
  {
    id: 'p2',
    name: 'Ricardo Silva',
    role: 'Especialista em Fade',
    bio: 'Referência em degradês modernos e desenhos artísticos na navalha.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 4.8
  },
  {
    id: 'p3',
    name: 'André Santos',
    role: 'Stylist & Beard Designer',
    bio: 'Focado em tendências contemporâneas e cuidados avançados com a barba.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 5.0
  }
];

export const BUSINESS_HOURS = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
