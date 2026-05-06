import { Droplets, Zap, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import React from 'react';

export const SERVICES = [
  {
    id: 'basic',
    name: 'Full Bike Cleaning',
    price: '$199',
    description: 'A comprehensive deep clean for your daily rider.',
    features: ['Snow foam wash', 'Chain cleaning & lube', 'Basic detailing', 'Tire shine', 'Blow dry'],
    icon: <Droplets className="w-6 h-6 text-brand" />
  },
  {
    id: 'paint',
    name: 'Paint Correction',
    price: '$349',
    description: 'Remove swirls and scratches to restore that factory gloss.',
    features: ['Single-stage polish', 'Light scratch removal', 'Decontamination', 'Gloss enhancement'],
    icon: <Zap className="w-6 h-6 text-brand" />
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    price: '$599',
    description: 'Ultimate long-term protection with 2-year hydrophobic coating.',
    features: ['Prep wash', 'Paint refinement', 'Graphene infusion', 'Water spot protection'],
    icon: <ShieldCheck className="w-6 h-6 text-brand" />
  },
  {
    id: 'engine',
    name: 'Engine Detailing',
    price: '$249',
    description: 'Detailed cleaning of the heart of your machine.',
    features: ['Degreasing', 'Mechanical scrubbing', 'Heat-shield polish', 'Chrome restoration'],
    icon: <ShieldCheck className="w-6 h-6 text-brand" />
  },
  {
    id: 'leather',
    name: 'Leather Care',
    price: '$129',
    description: 'Preserve and condition your seats and saddlebags.',
    features: ['PH neutral cleaning', 'Almond oil conditioning', 'UV protection', 'Soft brush agitation'],
    icon: <CheckCircle2 className="w-6 h-6 text-brand" />
  },
  {
    id: 'showroom',
    name: 'Showroom Package',
    price: '$899',
    description: 'The complete transformation for concourse-level results.',
    features: ['Everything above', 'Disassembly cleaning', 'Full restoration', 'Concours wax finish'],
    icon: <Star className="w-6 h-6 text-brand" />
  }
];

export const TESTIMONIALS = [
  {
    name: "James Wilson",
    bike: "Ducati Panigale V4",
    text: "NTRS Garage took my track bike and made it look brand new. The ceramic coating is insane – dust literally just slides off.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    name: "Sarah Chen",
    bike: "BMW R 1250 GS",
    text: "I take my GS off-road frequently. After a session at NTRS, all that grit and mud was gone. The attention to detail in the nooks and crannies is amazing.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Marcus Rodriguez",
    bike: "Harley Davidson Fat Boy",
    text: "The chrome restoration they did on my Fat Boy is unbelievable. It's got that mirror finish again. Highly recommend the engine detailing.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

export const GALLERY_IMAGES = [
  { id: 1, category: 'Transformation', url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80', title: 'Before & After' },
  { id: 2, category: 'Detailing', url: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80', title: 'Close-up Detail' },
  { id: 3, category: 'Paint', url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80', title: 'Gloss Enhancement' },
  { id: 4, category: 'Engine', url: 'https://images.unsplash.com/photo-1558380838-04ff54289066?w=800&q=80', title: 'Engine Restoration' },
  { id: 5, category: 'Workshop', url: 'https://images.unsplash.com/photo-1563814419166-d4ac1e0ac553?w=800&q=80', title: 'NTRS Studio' },
  { id: 6, category: 'Ceramic', url: 'https://images.unsplash.com/photo-1621259182978-f09e5e2ca93e?w=800&q=80', title: 'Ceramic Protection' },
];
