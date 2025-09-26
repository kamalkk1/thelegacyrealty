import { createContext, useContext, type ReactNode } from 'react';

export interface Project {
  id: string;
  name: string;
  location: string;
  city: 'Mohali' | 'Chandigarh' | 'New Chandigarh';
  type: 'Residential' | 'Commercial' | 'Plots' | 'Mixed Development';
  status: 'Ready to Move' | 'Under Construction' | 'Possession < 1 Year' | 'Limited Availability' | 'Upcoming';
  description: string;
  amenities: string[];
  image?: string;
  gallery?: string[];
  specifications?: Record<string, any>;
  highlights?: string[];
  connectivity?: string[];
  developer?: string;
  slug: string;
}

interface ProjectContextType {
  projects: Project[];
  getProjectBySlug: (slug: string) => Project | undefined;
  getProjectsByCity: (city: string) => Project[];
  getProjectsByType: (type: string) => Project[];
}

// Helper function to generate slug
export const generateSlug = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

const projects: Project[] = [
  {
    id: 'mdb-lutyens',
    name: 'MDB Lutyens',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Mixed Development',
    status: 'Upcoming',
    image: "https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/11/gallery_1670580254574.jpg",
    description: 'A premium township blending classical design influences with modern infrastructure in the heart of Mohali.',
    amenities: [
      'Gated & Secured Society',
      '24×7 CCTV Surveillance',
      'UPVC Doors & Windows',
      'Landscaped Gardens',
      'Open Air Gym Parks',
      'Club House',
      'Jogging Tracks',
      'Kids Play Area',
      'Badminton Court',
      'Basketball Court',
    ],
    specifications: {
      townshipArea: '25 acres',
      approvals: ['RERA Approved'],
      infrastructure: ['Underground Wiring', 'Legrand Switches', 'KEI Wirings', 'Roca Sanitary Fittings'],
      connectivity: ['Near IT Hub', 'Direct PR-6 Road Access', 'High-street Market Steps Away'],
    },
    highlights: ['Easy Payment Plan', 'Lush Green Parks'],
    slug: 'mdb-lutyens'
  },
  {
    id: 'greenwoods-sector-115',
    name: 'Greenwoods',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Under Construction',
    description: '3 BHK floors in a gated township featuring contemporary design and extensive green spaces.',
    amenities: [
      'Gated & Secured Society',
      '24×7 CCTV Surveillance',
      'UPVC Doors & Windows',
      'Club House',
      'Open Air Gym Parks',
      'Kids Play Area',
      'Jogging Tracks',
      'Gazebo Sitting Areas',
      'Badminton Court',
      'Basketball Court',
    ],
    specifications: {
      townshipArea: '25 acres',
      approvals: ['RERA Approved'],
      materials: ['UPVC Doors/Windows', 'Roca Sanitary Fittings', 'Legrand Switches'],
      parksArea: '49,770 sqft',
      clubhouseArea: '28,620 sqft',
    },
    connectivity: ['Direct 200 ft PR-6 Road', 'Near IT Hub & Commercial Outlets', 'Education Hub Nearby'],
    slug: 'greenwoods-sector-115'
  },
  {
    id: 'the-clermont',
    name: 'The Clermont',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Under Construction',
    description: 'Luxurious 3 BHK apartments with designer finishes, biometric security door, and ambient false ceilings.',
    amenities: [
      'Designer Main Entrance Door with Biometric Security',
      'Premium Vitrified Tiles',
      'False Ceilings with Ambient Lighting',
      'Modular Fitted Wardrobes',
      'Stainless Steel Kitchen Sink & Chimney',
      'High-speed Elevators',
    ],
    specifications: {
      interiors: {
        flooring: 'Vitrified Tiles up to 32"x64"',
        walls: 'Emulsion Paint',
        doors: 'Laminated Flush Doors',
      },
      kitchen: 'Modular Kitchen with Overhead Cabinets',
      toilets: 'Vitrified Tiles Dado up to Full Height',
    },
    slug: 'the-clermont'
  },
  {
    id: 'amari-vintage-arc',
    name: 'Amari Vintage ARC',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Upcoming',
    description: 'S + 4 floors project with two complimentary car parks and expansive clubhouse in sector 99.',
    amenities: [
      'Club House (54,000 sqft)',
      'Two Free Car Parking Slots',
      'Biometric Entry',
      'Lift in Every Tower',
      'Large Balconies',
      'Dedicated Parks',
    ],
    specifications: {
      structure: 'S+4 Floors',
      startDate: 'Nov 2024',
      possession: 'Dec 2027',
      approvals: ['RERA Approved', 'SBI Approved'],
    },
    slug: 'amari-vintage-arc'
  },
  {
    id: 'noble-willasa',
    name: 'Noble Willasa',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Ready to Move',
    description: 'Contemporary apartments with premium interiors, landscaped gardens, and 24×7 security in sector 99.',
    amenities: [
      '24×7 Security',
      'Covered Parking',
      'Landscape Garden',
      'Community Hall',
      'Power Backup',
      'Elevator',
    ],
    slug: 'noble-willasa'
  },
  {
    id: 'medallion-aurum',
    name: 'Medallion Aurum',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Ready to Move',
    description: 'Corner flats in every tower with double-height podium parking, designed for abundant light and ventilation.',
    amenities: [
      'Swimming Pool',
      'Jogging & Cycle Track',
      'Fully Equipped Gym',
      'Power Backup',
      'Covered Car Parking',
      'Restaurant',
      'Club Facilities',
      'Hi-Tech Security',
    ],
    slug: 'medallion-aurum'
  },
  {
    id: 'plbl-wellness-city',
    name: 'PLBL The Wellness City',
    location: 'Chandigarh',
    city: 'Chandigarh',
    type: 'Mixed Development',
    status: 'Ready to Move',
    description: 'Expansive township with luxury apartments and town-homes, part of a multi-phase Bollywood-branded development.',
    amenities: [
      '32 acre township spread',
      'Multiple Phases Delivered',
      'Luxury Amenities',
      'Club House',
      'Green Belts',
      'Retail Boutique Stores',
    ],
    slug: 'plbl-wellness-city'
  },
  {
    id: 'sivanta-aetro-heights',
    name: 'Sivanta Aetro Heights',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Under Construction',
    description: '3 BHK luxury apartments in a gated township with high-speed lifts and three-tier security on Kharar-Landran road.',
    amenities: [
      'Lifestyle Club House',
      '3-Tier Security',
      'High-Speed Lifts',
      'Gated Community',
      'Stilt Parking',
    ],
    slug: 'sivanta-aetro-heights'
  },
  {
    id: 'gardenia-boutique-homes',
    name: 'Gardenia Boutique Homes',
    location: 'New Chandigarh',
    city: 'New Chandigarh',
    type: 'Residential',
    status: 'Upcoming',
    description: 'Luxury low-rise residences set among lush landscaping and boutique-style living in New Chandigarh’s eco-zone.',
    amenities: [
      'Boutique-Style Club',
      'Landscaped Gardens',
      'Yoga & Meditation Areas',
      'Organic Farming Pockets',
      'Cycling Trails',
    ],
    slug: 'gardenia-boutique-homes'
  },
  {
    id: 'wave-gardens',
    name: 'Wave Gardens',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Ready to Move',
    description: '12 acre phase II with 70% green open spaces, offering 4 BHK apartments, duplexes, and penthouses.',
    amenities: [
      'Swimming Pool',
      'Jogging & Cycle Track',
      'Fully Equipped Gym',
      'Club Facilities',
      'Power Backup',
      'Covered Parking',
    ],
    slug: 'wave-gardens'
  },
  {
    id: 'omaxe-the-lake',
    name: 'Omaxe The Lake',
    location: 'New Chandigarh',
    city: 'New Chandigarh',
    type: 'Mixed Development',
    status: 'Ready to Move',
    description: 'Integrated eco-township featuring residential, retail, and recreational zones with extensive club and spa facilities.',
    amenities: [
      'Club Lotus with Spa & Hammam',
      'Year-round Heated Pool',
      'Yoga & Meditation Spaces',
      'Library & Business Center',
      'Lawn Tennis Courts',
    ],
    slug: 'omaxe-the-lake'
  },
  {
    id: 'atulyam-the-bliss',
    name: 'Atulyam The Bliss',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Under Construction',
    description: 'Seven towers on 6.12 acre site offering 3 + 1, 4 + 1, and 5 + 1 BHK luxury apartments with premium clubhouse.',
    amenities: [
      'Club House',
      'Swimming Pool',
      'Gymnasium',
      'Landscaped Gardens',
      'Jogging Track',
      'Children’s Play Area',
    ],
    slug: 'atulyam-the-bliss'
  },
  {
    id: 'connaught-homes-117',
    name: 'Connaught Homes',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Upcoming',
    description: 'Modern residential enclave offering low-rise homes with planned street-scapes, parks, and community facilities.',
    amenities: ['Gated Community', 'Club House', 'Parks & Play Areas', 'Walking Trails'],
    slug: 'connaught-homes-117'
  },
  {
    id: 'mayfields',
    name: 'Mayfields',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Residential',
    status: 'Upcoming',
    description: 'Elegant township expansion featuring boutique-style residences, green spaces, and neighborhood retail in Phase IV.',
    amenities: ['Boutique Retail', 'Green Belts', 'Township Roads', 'Community Center'],
    slug: 'mayfields'
  },
  {
    id: 'bollywood-green-city-phase-iv',
    name: 'Bollywood Green City Phase IV',
    location: 'Mohali',
    city: 'Mohali',
    type: 'Mixed Development',
    status: 'Under Construction',
    description: '5 acre expansion offering 3 & 4 BHK homes and boutique commercial stores in a nature-driven setting.',
    amenities: ['Commercial Boutique Stores', 'Club House', 'Green Corridors', 'Wide Internal Roads'],
    slug: 'bollywood-green-city-phase-iv'
  }
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const getProjectBySlug = (slug: string) => {
    return projects.find(project => project.slug === slug);
  };

  const getProjectsByCity = (city: string) => {
    return projects.filter(project => project.city.toLowerCase() === city.toLowerCase());
  };

    const getProjectsByType = (type: string) => {
    return projects.filter(project => project.type.toLowerCase() === type.toLowerCase());
  };
  return (
    <ProjectContext.Provider value={{ projects, getProjectBySlug, getProjectsByCity, getProjectsByType }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};
