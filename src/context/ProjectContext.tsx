import { createContext, useContext, type ReactNode } from "react";
import mdbmain from "../assets/mdblutyens/mdbmain.webp";
import medallion from "../assets/medallion/medallion.webp";
import greenwood from "../assets/greenwoods/greenwoodmain.webp";
import gardenia from "../assets/gardenia/gardeniamain.webp";
import onegroup from "../assets/onegroupclermont/clermont-banner.webp";
import mayfields from "../assets/mayfields/mayfiledsmain.webp";
import wellnesscity from "../assets/wellnesscity/wellnesscity.webp";
import noblewillassa from "../assets/noblewillassa/noblewillassa.webp";
import waveestate from "../assets/waveestate/waveestate.webp";
import connaught from "../assets/connaught/connaught.webp";
import bollywoodgreen from "../assets/bollywoodgreen/DJI_0514.webp";
import thelakebrochure from "../assets/thelakeomaxe/thelake.pdf";
import greenwoodsbrochure from "../assets/greenwoods/GreenwoodFloors.pdf";
import connaughtbrochure from "../assets/connaught/ConnaughtHomes.pdf";
import medallionb from "../assets/medallion/themedallion.pdf";
import lutyensb from "../assets/mdblutyens/TheLutyensBroucher.pdf";
import bollywoodgBrochure from "../assets/bollywoodgreen/BGC.pdf";
import mayfieldsbrochure from "../assets/mayfields/Mayfields_Clubh.pdf";
import wellnesscitybrochure from "../assets/wellnesscity/PLPB.pdf";
import nobleB from "../assets/noblewillassa/Noble.pdf";
import gardeniab from "../assets/gardenia/Gardenia.pdf";
import amaribrochure from "../assets/amarivintage/Broucher.pdf";
import amariMainImage from "../assets/amarivintage/banner-imagee-low-two.webp";
import mdbfloorplan from "../assets/mdblutyens/MDB-THE-LUTYENS-MOHALI-17.webp";
import mdbamenity from "../assets/mdblutyens/MDB-THE-LUTYENS-MOHALI-9.webp";
import mdblandscape from "../assets/mdblutyens/MDB-THE-LUTYENS-MOHALI-1.webp";
import greenwoods1 from "../assets/greenwoods/greenwoodf1.webp";
import greenwood2 from "../assets/greenwoods/greenwoodf2.webp";
import greenwoods3 from "../assets/greenwoods/greenwoodf3.webp";
import greenwoods4 from "../assets/greenwoods/greenwoodf2.webp";
import onegroup1 from "../assets/onegroupclermont/onegroup1.jpg";
import onegroup2 from "../assets/onegroupclermont/onegroup2.jpg";
import onegroup3 from "../assets/onegroupclermont/onegroup3.png";
import onegroupfloor from "../assets/onegroupclermont/onegroupfloorplan.jpeg";
import gardenia1 from "../assets/gardenia/gardeniainterior.png";
import gardenia2 from "../assets/gardenia/gardeniaterrace.png";
import gardenia3 from "../assets/gardenia/gardeniafloorplan.png";
import wavegradens1 from "../assets/waveestate/waveestateLiving_Dining_Family_Lounge.jpg";
import wavegradens2 from "../assets/waveestate/waveestateMaster-bedroom.jpg";
import wavegradens3 from "../assets/waveestate/waveestatefloorplan.jpg";
import connught1 from "../assets/connaught/connaughthomeinterior.png";
import connught2 from "../assets/connaught/connaughthomesexterior.png";
import connught3 from "../assets/connaught/connauhgthomesfront.png";
import mayfields1 from "../assets/mayfields/mayfields1.webp";
import mayfields2 from "../assets/mayfields/mayfileds2.webp";
import mayfields3 from "../assets/mayfields/mayfileds3.webp";
import bollygreen1 from "../assets/bollywoodgreen/bollygreen1.webp";
import bollygreen2 from "../assets/bollywoodgreen/bollygreen3.webp";
import bollygreen3 from "../assets/bollywoodgreen/DJI_0514.webp";
import wellness1 from "../assets/wellnesscity/plbp1.webp";
import wellness2 from "../assets/wellnesscity/plbp2.webp";
import wellness3 from "../assets/wellnesscity/plbp3.webp";
import theomakelake from "../assets/thelakeomaxe/theomakelakemain.jpg";
import medallion1 from "../assets/medallion/aboutmedallion.jpg";
import medallion2 from "../assets/medallion/floorplanmedaallion.jpg";
import medallion3 from "../assets/medallion/meddalionexterior.jpg";
import noble1 from "../assets/noblewillassa/noblewilllasaamenity.png";
import noble2 from "../assets/noblewillassa/Noblefloor.png";
import noble3 from "../assets/noblewillassa/noblewillasaexterior.jpg";
import amari1 from "../assets/amarivintage/amariclubhouse.webp";
import amari2 from "../assets/amarivintage/gym.webp";
import amari3 from "../assets/amarivintage/interior1.webp";

import mdblogo from "../assets/projectlogos/MDB.png";
import amarilogo from "../assets/projectlogos/AmariVintageLogo.png";
import clermontlogo from "../assets/projectlogos/ClearmontONeGroup.png";
import mayfieldslogo from "../assets/projectlogos/MayfieldLogo.png";
import greenwoodslogo from "../assets/projectlogos/GreenwoodLogo.png";
import bollygreenlogo from "../assets/projectlogos/Bollywoodlogo.png"


import thelakelogo from "../assets/projectlogos/OmaxeLakeLogo.png";
import noblelogo from "../assets/projectlogos/NobleWillasaLogo.png";
import medallionlogo from "../assets/projectlogos/MedallionAurumlogo.png";
import gardenialogo from "../assets/projectlogos/GardeniaHomesLogo.png";


export interface Project {
  id: string;
  name: string;
  location: string;
  city: "Mohali" | "Chandigarh" | "New Chandigarh";
  type: "Residential" | "Commercial" | "Plots" | "Commercial";
  status:
    | "Ready to Move"
    | "Under Construction"
    | "Possession < 1 Year"
    | "Limited Availability"
    | "Upcoming"
    | "Booking Open";
  description: string;
  amenities: string[];
  image?: string;
  logoimage?: string;
  specifications?: Record<string, any>;
  highlights?: string[];
  connectivity?: string[];
  developer?: string;
  slug: string;
  brochure?: string;
  // Enhanced gallery structure for carousel
  gallery?: {
    id: number;
    type:
      | "exterior"
      | "interior"
      | "floorplan"
      | "amenity"
      | "landscape"
      | "elevation";
    title: string;
    image: string;
    description?: string;
  }[];

  // Brand foundation for detailed project story
  brandFoundation?: {
    title: string;
    subtitle?: string;
    philosophy: string;
    keyPrinciples?: {
      title: string;
      description: string;
    }[];
  };
}

interface ProjectContextType {
  projects: Project[];
  getProjectBySlug: (slug: string) => Project | undefined;
  getProjectsByCity: (city: string) => Project[];
  getProjectsByType: (type: string) => Project[];
}

// Helper function to generate slug
export const generateSlug = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, "-");
};

const projects: Project[] = [
  {
    id: "mdb-lutyens",
    name: "MDB The Lutyens",
    logoimage: mdblogo,
    location: "Landran-Banur Road, Mohali",
    city: "Mohali",
    type: "Residential",
    status: "Booking Open",
    image: mdbmain,
    brochure: lutyensb,
    description:
      "The Lutyens is a residential marvel that exudes sophistication and class. Its visually striking towers boast grand entrances and beautifully landscaped surroundings, with high-speed elevators readily available to transport you to your abode, promising exclusivity and luxury.",

    // New Brand Foundation Section
    brandFoundation: {
      title: "Welcome to The Lutyens",
      subtitle: "Where Sophistication Meets Modern Living",
      philosophy:
        "The Lutyens is a residential marvel that exudes sophistication and class. Its visually striking towers boast grand entrances and beautifully landscaped surroundings, with high-speed elevators readily available to transport you to your abode, promising exclusivity and luxury.",
      keyPrinciples: [
        {
          title: "Outdoor Recreation",
          description:
            "One of the greatest gifts you can give your child is the joy of playing outdoors with friends, surrounded by lush greenery, games to play, and refreshing swimming pools to dive into. At Lutyens, you can recreate these cherished childhood memories for your little ones with creatively designed, sprawling gardens.",
        },
        {
          title: "Luxury Clubhouse",
          description:
            "Discover a world of lavish leisure at our exceptional 12,000 square foot state-of-the-art clubhouse. Nestled in the heart of our prestigious community, this extraordinary facility is designed to redefine the essence of upscale living.",
        },
        {
          title: "Kids Paradise",
          description:
            "Welcome to a wonderland designed just for our young adventurers! Our kids' play area and creche, brimming with vibrant colors and delightful surprises, await the giggles and laughter of our little ones.",
        },
      ],
    },

    // Carousel Images
    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Tower Elevation",
        image:
          "https://lutyens.in/assets/img/gallery/MDB-THE-LUTYENS-MOHALI-3.webp",
        description: "Striking architectural design with grand entrances",
      },
      {
        id: 2,
        type: "floorplan",
        title: "3 BHK Floor Plan",
        image: mdbfloorplan,
        description: "Spacious 3 BHK layout with premium finishes",
      },
      {
        id: 3,
        type: "amenity",
        title: "Clubhouse Interior",
        image: mdbamenity,
        description: "12,000 sq ft state-of-the-art clubhouse",
      },
      {
        id: 4,
        type: "landscape",
        title: "Garden & Pool Area",
        image: mdblandscape,
        description: "Beautifully landscaped gardens with swimming pool",
      },
    ],

    amenities: [
      "5 Tier Security System",
      "24×7 CCTV Surveillance",
      "High-Speed Elevators",
      "Fully Furnished Units",
      "12,000 sq ft Clubhouse",
      "Swimming Pool",
      "Kids Play Area & Creche",
      "Landscaped Gardens",
      "Jogging Tracks",
      "Rooftop Pool",
      "Lotus Ponds",
      "Tree-lined Pathways",
      "Modular Kitchen",
      "Gymnasium",
    ],

    specifications: {
      developer: "MDB Group",
      landParcel: "6.5 acres",
      floors: "S+20",
      units: "331 Units",
      possession: "June 2027",
      configurations: ["3 BHK", "3+1 BHK"],
      approvals: ["RERA Approved"],
      infrastructure: ["Modern Amenities", "With Lift", "Fully Furnished"],
      connectivity: ["Near Aerocity", "Near Airport", "Landran-Banur Road"],
    },

    highlights: [
      "Booking Open - Limited Time Only",
      "Prime Location Near Aerocity & Airport",
      "Luxurious 3 & 3+1 BHK Flats",
      "12,000 sq ft State-of-the-art Clubhouse",
    ],

    slug: "mdb-lutyens",
  },
  {
    id: "greenwoods-sector-115",
    name: "Greenwoods Mohali",
    location: "Sector 115, Mohali",
    city: "Mohali",
    type: "Plots",
    logoimage: greenwoodslogo,
    image: greenwood,
    brochure: greenwoodsbrochure,
    status: "Ready to Move",
    developer: "CEE DEE",
    description:
      "Welcome to Greenwoods Mohali, our gated plotted development in Mohali Sector 115. Every plot here comes with the kind of luxury you'll only find at a resort. It's a home where you can plot a lifetime of happiness.",

    // Brand Foundation Section
    brandFoundation: {
      title: "Greenwoods Mohali",
      subtitle: "Plot Your Lifetime of Happiness",
      philosophy:
        "Choosing to purchase a plot is a better idea than purchasing a flat. A plot gives you a bigger sense of ownership and is a recommended investment option, as opposed to other property purchases. Simply because the value of the land keeps rising with time, and that's why it yields better returns.",
      keyPrinciples: [
        {
          title: "Resort-Style Living",
          description:
            "Every plot here comes with the kind of luxury you'll only find at a resort, offering an unparalleled living experience in a gated community setting.",
        },
        {
          title: "Investment Excellence",
          description:
            "Land value appreciation over time makes plots a superior investment choice compared to flats, providing better returns and complete ownership.",
        },
        {
          title: "Strategic Location",
          description:
            "Prime location with easy access to Mohali, Chandigarh, and Panchkula, along with proximity to hospitals, educational hubs, retail outlets and hotels.",
        },
      ],
    },

    // Gallery Images
    gallery: [
      {
        id: 1,
        type: "landscape",
        title: "Gated Community Overview",
        image: greenwoods1,
        description:
          "27-acre integrated plotted development with modern facilities",
      },
      {
        id: 2,
        type: "amenity",
        title: "Theme Gardens",
        image: greenwood2,
        description:
          "5 theme-based gardens with maximum greenery and landscaping",
      },
      {
        id: 3,
        type: "exterior",
        title: "Grand Entrance",
        image: greenwoods3,
        description: "Dedicated grand entrance from 24 meters road",
      },
      {
        id: 4,
        type: "amenity",
        title: "Walkway & Roads",
        image: greenwoods4,
        description: "2.5 km shaded walkway with 30/40/60 ft roads",
      },
    ],

    amenities: [
      "Gated & Secured Community",
      "5 Theme Based Gardens",
      "24×7 Security Guard",
      "2.5 km Shaded Walkway",
      "Parks & Green Spaces",
      "30/40/60 ft Roads",
      "Maximum Greenery",
      "Modern Facilities",
      "Grand Entrance Gate",
      "Integrated Development",
    ],

    specifications: {
      developer: "CEE DEE",
      landParcel: "27 acres",
      plotSizes: ["100 Sq.Yrd", "125 Sq.Yrd", "150 Sq.Yrd"],
      roadWidths: ["30 ft", "40 ft", "60 ft"],
      walkwayLength: "2.5 km",
      entranceRoad: "24 meters",
      approvals: ["RERA Approved"],
      plotType: "Residential Plots",
      pricing: "Price on Request",
    },

    highlights: [
      "Strategically Located Near Mohali, Chandigarh & Panchkula",
      "Close to Major Hospitals & Educational Hubs",
      "Grand Amenities & Modern Facilities",
      "Dedicated Grand Entrance from 24m Road",
      "2.5 km Shaded Walkway",
      "Maximum Greenery with Theme Gardens",
      "Integrated Plotted Development",
      "Superior Investment Returns",
    ],

    connectivity: [
      "Strategic proximity to Mohali, Chandigarh, and Panchkula",
      "Close to major hospitals and medical facilities",
      "Near educational hubs and schools",
      "Adjacent to retail outlets and hotels",
      "Direct access from 24 meters road",
      "Well-connected road network",
    ],

    slug: "greenwoods-sector-115",
  },
  {
    id: "the-clermont",
    name: "The Clermont",
    location: "One City Hamlet, Sector 98, Mohali",
    city: "Mohali",
    logoimage: clermontlogo,
    type: "Residential",
    status: "Under Construction",
    image: onegroup,
    brochure: "",
    description:
      "Tucked within the vibrant heart of Mohali, The Clermont offers more than a home—it presents a lifestyle curated for those who seek elegance in every corner and luxury in every moment. Designed as a sanctuary of spacious, independent residences, it combines the calm of serene surroundings with the excitement of city life.",

    brandFoundation: {
      title: "Experience Mohali’s Most Exclusive Address",
      subtitle: "A Sanctuary of Elegance & Luxury",
      philosophy:
        "Every detail at The Clermont reflects a commitment to timeless design and uncompromising quality, creating spaces that are as functional as they are beautiful. From grand living areas to meticulously crafted finishes, residents experience a sense of pride with every step.",
      keyPrinciples: [
        {
          title: "Timeless Design",
          description:
            "Meticulously crafted finishes and grand living areas for a sense of enduring elegance.",
        },
        {
          title: "Independent Residences",
          description:
            "Spacious floor plans offering privacy and exclusivity within a vibrant urban setting.",
        },
        {
          title: "Luxury Amenities",
          description:
            "Curated facilities that elevate daily living, from fitness to leisure to security.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Grand Entrance",
        image: onegroup1,
        description: "Striking facade and porte-cochère entrance",
      },
      {
        id: 2,
        type: "amenity",
        title: "Landscaped Parks",
        image: onegroup2,
        description: "Serene garden areas with walking paths",
      },
      {
        id: 3,
        type: "interior",
        title: "Living Room Sample",
        image: onegroup3,
        description: "Spacious living area with designer finishes",
      },
      {
        id: 4,
        type: "floorplan",
        title: "3 BHK Layout",
        image: onegroupfloor,
        description: "Elegant 3 BHK floor plan with balconies",
      },
    ],

    amenities: [
      "CCTV Cameras",
      "Landscaped Parks",
      "Dedicated Parking",
      "24×7 Security",
      "Kids Zone",
      "Jogging Track",
      "25m & 12m Wide Roads",
      "Shopping Complex",
      "Open Gym",
    ],

    specifications: {
      developer: "One Group",
      floors: "S+G+20",
      units: 180,
      configurations: ["3 BHK", "4 BHK"],
      interiors: {
        flooring: "Premium Vitrified Tiles",
        walls: "Emulsion Paint",
        doors: "Laminated Flush Doors",
      },
      kitchen: "Modular Kitchen with Overhead Cabinets & SS Sink",
      toilets: "Vitrified Tiles Dado up to Full Height",
      security: ["Biometric Entry", "CCTV Surveillance"],
    },

    connectivity: [
      "Airport - 10 KM",
      "Railway Station - 17 KM",
      "Chandigarh - 13 KM",
      "CP 67 Mall - 6 KM",
      "ISB Mohali - 5.2 KM",
    ],

    highlights: [
      "Exclusive independent residences",
      "Curated luxury lifestyle",
      "Timeless design and quality",
      "Prime heart-of-city location",
    ],

    slug: "the-clermont",
  },
  {
    id: "amari-vintage-arc",
    name: "Amari Vintage ARC",
    location: "IT City, Mohali",
    logoimage: amarilogo,
    city: "Mohali",
    type: "Residential",
    status: "Upcoming",
    image: amariMainImage,
    brochure: amaribrochure,

    description:
      "Live the Future of Luxury in the Heart of IT City, Mohali. Experience Mohali’s first independent floor project offering 3 BHK homes with premium amenities, security, and style.",

    brandFoundation: {
      title: "Experience Premium Township Living",
      subtitle: "Private Independent Floors",
      philosophy:
        "Not just another residential society; own a 3 BHK independent floor with 2240 sq. ft. of carpet area, offering the perfect fusion of privacy, luxury, & prestige.",
      keyPrinciples: [
        {
          title: "Risk-Free Reservation",
          description:
            "100% satisfaction guaranteed or your money back. Secure your spot with flexible payment plans.",
        },
        {
          title: "Flexible Payment Plans",
          description:
            "Designed to fit your budget with up to 80% financing: 12.5% on booking, 12.5% on agreement, 20% on foundation, 25% on exterior, 20% on interior, 10% on handover.",
        },
        {
          title: "Strategic Connectivity",
          description:
            "Minutes away from Airport, Elante Mall, ISB & NIPER, universities, PCA Stadium, Infosys, and Tribune Chowk.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "interior",
        title: "Living Area Sample",
        image: amari1,
        description:
          "Spacious living room with high ceilings and ambient lighting",
      },
      {
        id: 2,
        type: "floorplan",
        title: "3 BHK Independent Floor Plan",
        image: amari2,
        description: "2240 sq. ft. carpet area layout",
      },
      {
        id: 3,
        type: "amenity",
        title: "Clubhouse Interior",
        image: amari3,
        description: "54,000 sqft state-of-the-art clubhouse",
      },
    ],

    amenities: [
      "Premium Club House (54,000 sqft)",
      "Two Complimentary Car Parking Slots",
      "Biometric Entry",
      "Lift in Every Tower",
      "Large Balconies",
      "Dedicated Parks & Green Spaces",
      "State-of-the-art Security",
      "Modular Kitchen & Bath Fittings",
    ],

    specifications: {
      structure: "S+4 Floors",
      units: 250,
      carpetArea: "2240 sq ft",
      startDate: "Nov 2024",
      possession: "Dec 2027",
      approvals: ["Pre-launch RERA Certified", "GMADA Approved"],
    },

    connectivity: [
      "International Airport – 3 mins",
      "Elante Mall – 10 mins",
      "ISB & NIPER – 4 mins",
      "Ashoka & Amity University – 2 mins",
      "PCA Stadium – 7 mins",
      "Infosys Campus – 2 mins",
      "IT City Core – 2 mins",
      "Tribune Chowk, Chandigarh – 9 mins",
    ],

    highlights: [
      "First Independent Floor Project in Mohali",
      "100% Risk-Free Investment with Refund Guarantee",
      "Flexible 6-stage Payment Plan",
      "250 Exclusive Units",
      "Luxurious Semi-Furnished Interiors",
      "Four Distinct Design Themes",
    ],

    slug: "amari-vintage-arc",
  },
  {
    id: "noble-willasa",
    name: "Noble Willasa",
    location: "Sector 99, Wave Estate, Mohali",
    city: "Mohali",
    logoimage: noblelogo,
    type: "Residential",
    status: "Ready to Move",
    image: noblewillassa,
    brochure: nobleB,
    description:
      "Contemporary independent floors with premium interiors, landscaped gardens, and 24×7 security in Wave Estate Sector 99.",

    brandFoundation: {
      title: "First-of-its-Kind Luxury Independent Floors",
      subtitle: "Italian Marble & Smart Home Innovations",
      philosophy:
        "Noble Willasa combines cutting-edge Mivan construction with designer Italian furnishings to deliver unmatched luxury in Mohali’s premier township.",
      keyPrinciples: [
        {
          title: "Italian Marble Flooring",
          description:
            "Premium marble in kitchen, living, dining & drawing areas with wooden flooring in all bedrooms.",
        },
        {
          title: "Advanced Infrastructure",
          description:
            "Mivan construction technology for superior strength and durability in every independent floor.",
        },
        {
          title: "Smart Home Features",
          description:
            "Complete home automation package including lighting, security, and climate control.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Building Elevation",
        image: noble1,
        description: "Modern facade with Mivan structural details",
      },
      {
        id: 2,
        type: "amenity",
        title: "Italian Marble Interiors",
        image: noble2,
        description: "Luxurious marble flooring and wooden accents",
      },
      {
        id: 3,
        type: "amenity",
        title: "Clubhouse & Garden",
        image: noble3,
        description: "Landscaped gardens and community hall",
      },
    ],

    amenities: [
      "24×7 Security",
      "Covered Parking with EV Charging",
      "Landscape Garden",
      "Community Hall",
      "Power Backup",
      "High-speed Elevators",
      "Smart Home Automation",
    ],

    specifications: {
      structure: "Stilt + 4 Floors",
      units: 180,
      configurations: ["3 BHK Independent Floors"],
      carpetArea: "2240 sq ft",
      developer: "Wave Estate Developers",
      approvals: ["RERA Approved"],
    },

    connectivity: [
      "Wave Estate Main Road",
      "Chandigarh Airport 10 mins",
      "IT City 5 mins",
      "Elante Mall 8 mins",
    ],

    highlights: [
      "Designer Italian Furnishings",
      "Mivan Construction Technology",
      "Complete Home Automation",
      "Premium Marble & Wood Flooring",
      "Luxury Club House & Gardens",
    ],

    slug: "noble-willasa",
  },
  {
    id: "medallion-aurum",
    name: "Medallion Aurum",
    location: "Sector 67, Mohali",
    city: "Mohali",
    logoimage: medallionlogo,
    type: "Residential",
    status: "Ready to Move",
    image: medallion,
    brochure: medallionb,

    description:
      "Corner flats in every tower with double-height podium parking, designed for abundant light and ventilation.",

    brandFoundation: {
      title: "Modern Luxury Living",
      subtitle: "Exclusive Corner Residences",
      philosophy:
        "Every residence at Medallion Aurum is designed with attention to natural light, ventilation, and contemporary elegance. With podium-level amenities and premium finishes, it redefines ready-to-move-in luxury.",
      keyPrinciples: [
        {
          title: "Double-Height Podium Parking",
          description:
            "Spacious parking levels ensuring convenience and safety.",
        },
        {
          title: "Corner Flats in Every Tower",
          description:
            "Maximized light, ventilation, and privacy in every unit.",
        },
        {
          title: "Luxury Lifestyle Facilities",
          description:
            "Modern clubhouse, pool, fitness, and dining facilities.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Tower View",
        image: medallion1,
        description: "Modern architectural facade with podium-level design",
      },
      {
        id: 2,
        type: "amenity",
        title: "Swimming Pool",
        image: medallion2,
        description: "Resort-style pool with leisure deck",
      },
      {
        id: 3,
        type: "interior",
        title: "Living Room",
        image: medallion3,
        description: "Elegant interiors with abundant natural lighting",
      },
    ],

    amenities: [
      "Swimming Pool",
      "Jogging & Cycle Track",
      "Fully Equipped Gym",
      "Power Backup",
      "Covered Car Parking",
      "Restaurant",
      "Club Facilities",
      "Hi-Tech Security",
    ],

    specifications: {
      structure: "High-Rise Towers",
      units: "Multiple Configurations",
      carpetArea: "Varies by Unit Type",
      possession: "Ready to Move",
      approvals: ["RERA Certified", "GMADA Approved"],
    },

    connectivity: [
      "International Airport – 10 mins",
      "Railway Station – 17 KM",
      "Chandigarh – 13 KM",
      "CP 67 Mall – 6 KM",
      "ISB Mohali – 5.2 KM",
    ],

    highlights: [
      "Corner flats in every tower",
      "Double-height podium parking",
      "Luxury lifestyle amenities",
      "Ready-to-move residences",
    ],

    slug: "medallion-aurum",
  },
  {
    id: "plbl-wellness-city",
    name: "PLBL The Wellness City",
    location: "Mohali-Rajpura Highway",
    city: "Chandigarh",
    type: "Commercial",
    status: "Under Construction",
    image: wellnesscity,
    brochure: wellnesscitybrochure,

    description:
      "India’s first large-scale township dedicated to holistic wellbeing. Spread across 90+ acres on the Mohali-Rajpura highway, The Wellness City is designed on the principles of bioclimatic architecture, blending sustainability, nature, and luxury living.",

    brandFoundation: {
      title: "Holistic Wellness Living",
      subtitle: "Bioclimatic Township Design",
      philosophy:
        "The Wellness City is conceptualised to harmonise modern life with nature. By incorporating the five elements of nature and the eight pillars of wellness, it creates an environment that nurtures body, mind, and soul. Every home and amenity is designed to promote sustainable and healthy living.",
      keyPrinciples: [
        {
          title: "Bioclimatic Architecture",
          description:
            "Township designed to work in harmony with natural elements for sustainable living.",
        },
        {
          title: "Wellness-Centric Community",
          description:
            "Focus on spiritual, emotional, physical, and social wellbeing through planning and amenities.",
        },
        {
          title: "Revolutionary Clubhouse",
          description:
            "100+ activities with gym, pool, co-working, theatre, banquet halls, and more.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Township View",
        image: wellness1,
        description: "Expansive view of the 90+ acre holistic township",
      },
      {
        id: 2,
        type: "amenity",
        title: "Clubhouse",
        image: wellness2,
        description:
          "Revolutionary clubhouse with unmatched wellness amenities",
      },
      {
        id: 3,
        type: "landscape",
        title: "Step Gardens",
        image: wellness3,
        description: "Natural landscapes integrated into community gardens",
      },
    ],

    amenities: [
      "Low-rise Apartments, Bungalows & Plots",
      "Backyard Garden in Every Home",
      "Step Gardens with Natural Landscape",
      "Separate Pedestrian & Vehicle Roads",
      "Swimming Pool",
      "Co-working Spaces",
      "Indoor Gymnasium",
      "Mini Theatre",
      "Multipurpose Banquet Halls",
      "Art of Living Ashram – Largest in North India",
    ],

    specifications: {
      structure: "Mixed Residential & Commercial Development",
      units: "Low-rise apartments, bungalows, and plots",
      townshipSize: "90+ Acres",
      frontage: "2000 ft. on NH-7 Rajpura Highway",
      possession: "Under Development",
      approvals: ["Planned as India’s First Holistic Wellness Township"],
    },

    connectivity: [
      "Proposed Punjab Govt. 10,000-acre Industrial Hub – Rajpura",
      "Education Hub: Chitkara University, Gian Sagar, Delhi Public School",
      "Healthcare: Neelam Multi-speciality Hospital",
      "Chandigarh International Airport – 25 KM",
    ],

    highlights: [
      "India’s first wellness-focused township",
      "90+ acres of sustainable development",
      "Bioclimatic architectural design",
      "2000 ft. highway frontage",
      "North India’s largest Art of Living Ashram",
      "Revolutionary clubhouse with 100+ activities",
    ],

    slug: "plbl-wellness-city",
  },
  // {
  //   id: 'sivanta-aetro-heights',
  //   name: 'Sivanta Aetro Heights',
  //   location: 'Mohali',
  //   city: 'Mohali',
  //   type: 'Residential',
  //   status: 'Under Construction',
  //   description: '3 BHK luxury apartments in a gated township with high-speed lifts and three-tier security on Kharar-Landran road.',
  //   amenities: [
  //     'Lifestyle Club House',
  //     '3-Tier Security',
  //     'High-Speed Lifts',
  //     'Gated Community',
  //     'Stilt Parking',
  //   ],
  //   slug: 'sivanta-aetro-heights'
  // },
  {
    id: "gardenia-boutique",
    name: "Omaxe Gardenia Boutique",
    location: "New Chandigarh",
    city: "Chandigarh",
    type: "Residential",
    logoimage: gardenialogo,
    image: gardenia, // replace with actual logo image import
    brochure: gardeniab, // replace with actual brochure import
    status: "Under Construction",

    description:
      "Omaxe Gardenia Boutique Home is a luxury retreat amidst the serene beauty of nature, blending green surroundings with modern lifestyle and affluence. Part of the 1000+ acre Omaxe New Chandigarh township housing 5000+ affluent families, Gardenia offers spacious, ventilated homes designed with impeccable architectural finesse.",

    brandFoundation: {
      title: "Rise Above the Ordinary",
      subtitle: "Luxury Living Close to Nature",
      philosophy:
        "Meticulously designed to blend natural surroundings with modern affluence, Gardenia Boutique offers spacious high-ceiling homes, penthouses, and well-ventilated interiors that invite sunlight into every corner.",
      keyPrinciples: [
        {
          title: "High Ceilings",
          description:
            "Majestic and spacious units with high ceilings offering ample space for life to unfold in all its glory.",
        },
        {
          title: "Spacious & Well-Ventilated Rooms",
          description:
            "Large, exquisitely laid-out rooms with big balconies, combining space and design with architectural finesse.",
        },
        {
          title: "Luxury Penthouses",
          description:
            "For the first time in Tri-City Chandigarh, penthouses with contemporary design, double-glass insulation, and private views of lush greens.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Gardenia Boutique Towers",
        image: gardenia1,
        description: "Modern residential facade set amidst lush greenery",
      },
      {
        id: 2,
        type: "interior",
        title: "Spacious Living Room",
        image: gardenia2,
        description: "Large, airy interiors with natural light and ventilation",
      },
      {
        id: 3,
        type: "amenity",
        title: "Penthouse View",
        image: gardenia3,
        description: "Exclusive penthouse with panoramic views of greens",
      },
    ],

    amenities: [
      "Proposed 258 Acre Medicity",
      "Tata Memorial Centre (TMC) Hospital",
      "Proposed 384 Acres Education City",
      "Maharaja Yadavindra Singh International Cricket Stadium",
      "New Road Connectivity to International Airport (20 mins)",
      "High Ceilings",
      "Spacious & Well-Ventilated Rooms",
      "Exclusive Luxury Penthouses",
    ],

    specifications: {
      structure: "High-Rise Boutique Residences",
      units: "Multiple Configurations",
      carpetArea: "Varies by Unit Type",
      possession: "Ongoing Construction",
      approvals: ["GMADA Approved", "RERA Registered"],
    },

    connectivity: [
      "International Airport – 20 mins",
      "Proposed 258 Acre Medicity",
      "Tata Memorial Centre (TMC) Hospital",
      "384 Acres Education City",
      "Maharaja Yadavindra Singh Cricket Stadium",
    ],

    highlights: [
      "First luxury boutique homes in Tri-City Chandigarh",
      "Part of 1000+ acre Omaxe New Chandigarh township",
      "High ceilings and well-ventilated layouts",
      "Exclusive penthouses with panoramic views",
      "Blend of nature and modern affluence",
    ],

    slug: "gardenia-boutique",
  },
  {
    id: "wave-gardens",
    name: "Wave Gardens",
    location: "Wave Estate, Mohali",
    city: "Mohali",
    type: "Residential",
    status: "Ready to Move",
    image: waveestate,
    // brochure: wavegardensbrochure,

    description:
      "Wave Gardens Phase II at Wave Estate offers 3 & 4 BHK apartments, duplexes, and penthouses set across 12 acres with 70% open green spaces. Combining luxury, comfort, and convenience, it is one of Mohali’s premier residential communities.",

    brandFoundation: {
      title: "Luxury Living Amidst Greenery",
      subtitle: "Where Architecture Meets Nature",
      philosophy:
        "Wave Gardens brings together modern design and natural serenity. With 70% open landscapes, premium residences, and world-class facilities, it represents a sanctuary of luxury and tranquility in Mohali.",
      keyPrinciples: [
        {
          title: "Spacious Township Living",
          description:
            "12-acre development with meticulously designed apartments, duplexes, and penthouses.",
        },
        {
          title: "Green & Open Spaces",
          description:
            "70% of the township dedicated to greenery and open landscaped areas for a serene lifestyle.",
        },
        {
          title: "Proven Track Record",
          description:
            "Phase 1 successfully delivered with 100% occupancy, ensuring credibility and trust.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Tower View",
        image: wavegradens1,
        description: "Modern towers with a backdrop of landscaped greenery",
      },
      {
        id: 2,
        type: "amenity",
        title: "Clubhouse & Pool",
        image: wavegradens2,
        description:
          "Premium clubhouse with swimming pool and wellness facilities",
      },
      {
        id: 3,
        type: "floorplan",
        title: "Unit Plans",
        image: wavegradens3,
        description: "Options include 3BHK, 4BHK, duplexes, and penthouses",
      },
    ],

    amenities: [
      "Swimming Pool",
      "Jogging & Cycling Track",
      "Fully Equipped Gym",
      "Club Facilities",
      "Power Backup",
      "Covered Car Parking",
      "Landscaped Gardens",
      "Children’s Play Area",
    ],

    specifications: {
      structure: "High-Rise Towers",
      units: "3 BHK, 4 BHK, Duplexes & Penthouses",
      townshipSize: "12 Acres",
      greenArea: "70% Open Green Spaces",
      possession: "Ready to Move",
      approvals: ["RERA Certified – PBRERA-SAS81-PR1009"],
    },

    connectivity: [
      "Chandigarh International Airport – Nearby",
      "Educational Institutions – Within 5-10 mins",
      "Medical Centres – Within 10 mins",
      "Shopping & Dining Destinations – Nearby",
      "Chandigarh City – Easy Access",
    ],

    highlights: [
      "12-acre township with 70% open green area",
      "3 & 4 BHK, duplexes, and penthouses",
      "Phase 1 delivered with 100% occupancy",
      "Premium clubhouse and lifestyle amenities",
      "Located in the heart of Wave Estate, Mohali",
    ],

    slug: "wave-gardens",
  },
  {
    id: "omaxe-the-lake",
    name: "Omaxe The Lake",
    location: "New Chandigarh",
    city: "New Chandigarh",
    type: "Residential",
    logoimage: thelakelogo,
    status: "Ready to Move",
    image: theomakelake,
    brochure: thelakebrochure,

    description:
      "Spread across 25 acres in New Chandigarh, Omaxe The Lake offers 2, 3, and 4 BHK luxury apartments and villas. Designed for modern living amidst nature, it combines international lifestyle, peaceful surroundings, and convenient connectivity to Chandigarh city.",

    brandFoundation: {
      title: "Luxury Living by the Lake",
      subtitle: "Nature-Inspired Modern Residences",
      philosophy:
        "Omaxe The Lake is built for those who seek balance between luxury and tranquility. Surrounded by greenery and water bodies, it creates a serene environment while offering premium lifestyle amenities and international-class residences.",
      keyPrinciples: [
        {
          title: "Expansive Township",
          description:
            "25-acre development with luxury apartments, villas, and penthouses designed for elegance and comfort.",
        },
        {
          title: "Convenient Location",
          description:
            "Close to schools, hospitals, shopping centers, and Chandigarh city with upcoming botanical garden, health village, and amusement park.",
        },
        {
          title: "Luxury Amenities",
          description:
            "Clubhouse, swimming pool, gym, yoga spaces, tennis courts, and jogging tracks for a complete lifestyle.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Project View",
        image:
          "https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/11/gallery_1670580254574.jpg",
        description:
          "Modern high-rise towers surrounded by landscaped greenery",
      },
      {
        id: 2,
        type: "amenity",
        title: "Clubhouse & Pool",
        image: "https://example.com/thelake-clubhouse.jpg",
        description: "Luxury clubhouse with spa, hammam, and heated pool",
      },
      {
        id: 3,
        type: "interior",
        title: "Apartment Interior",
        image: "https://example.com/thelake-interior.jpg",
        description: "Spacious living with premium finishes and ventilation",
      },
    ],

    amenities: [
      "Club Lotus with Spa & Hammam",
      "Year-round Heated Swimming Pool",
      "Jogging & Cycling Track",
      "Yoga & Meditation Spaces",
      "Library & Business Center",
      "Basketball & Tennis Courts",
      "Gym & Fitness Center",
      "Children’s Play Area",
      "Retail & Shopping Spaces",
    ],

    specifications: {
      structure: "High-rise Towers + Villas",
      units: "2, 3 & 4 BHK Apartments, Villas, and Penthouses",
      townshipSize: "25 Acres",
      possession: "Ready to Move",
      approvals: ["RERA Certified", "Omaxe Township Development Standards"],
    },

    connectivity: [
      "Chandigarh City – 10 mins",
      "Proposed Botanical Garden – Nearby",
      "Proposed Health Village – Within Township",
      "Proposed Amusement Park – Nearby",
      "Hospitals & Schools – Within 5-10 mins drive",
    ],

    highlights: [
      "25-acre integrated township",
      "2, 3, 4 BHK Apartments & Villas",
      "Surrounded by greenery & water bodies",
      "Luxury amenities including Club Lotus",
      "International lifestyle in New Chandigarh",
    ],

    slug: "omaxe-the-lake",
  },
  // {
  //   id: 'atulyam-the-bliss',
  //   name: 'Atulyam The Bliss',
  //   location: 'Mohali',
  //   city: 'Mohali',
  //   type: 'Residential',
  //   status: 'Under Construction',
  //   description: 'Seven towers on 6.12 acre site offering 3 + 1, 4 + 1, and 5 + 1 BHK luxury apartments with premium clubhouse.',
  //   amenities: [
  //     'Club House',
  //     'Swimming Pool',
  //     'Gymnasium',
  //     'Landscaped Gardens',
  //     'Jogging Track',
  //     'Children’s Play Area',
  //   ],
  //   slug: 'atulyam-the-bliss'
  // },
  {
    id: "connaught-homes-117",
    name: "Connaught Homes",
    location: "Sector 117, TDI Smart City, Mohali",
    city: "Mohali",
    type: "Residential",
    status: "Upcoming",
    image: connaught,
    brochure: connaughtbrochure,
    description:
      "Nestled in the heart of TDI Smart City, Connaught Homes is an exclusive gated community offering stilt + 4 storey apartments in spacious 3BHK and 4BHK configurations, designed for elegance, comfort, and modern convenience.",

    brandFoundation: {
      title: "Welcome to Connaught Homes",
      subtitle: "Elegance, Comfort & Modern Convenience",
      philosophy:
        "Every detail at Connaught Homes is crafted with precision and excellence, delivering visually stunning architecture built to stand the test of time while offering premium lifestyle amenities.",
      keyPrinciples: [
        {
          title: "Architecture & Build",
          description:
            "From foundation to finishing touches, every element is engineered for durability and timeless elegance.",
        },
        {
          title: "Luxury Apartments",
          description:
            "Meticulously designed interiors with premium finishes, delivering the perfect fusion of style and comfort.",
        },
        {
          title: "Premium Location",
          description:
            "Minutes from airport, malls, universities, and integrated with the upcoming PR6 Road for seamless connectivity.",
        },
      ],
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Gateway Entrance",
        image: connught1,
        description: "Grand gated entrance with landscaped drive",
      },
      {
        id: 2,
        type: "amenity",
        title: "Clubhouse",
        image: connught2,
        description: "State-of-the-art clubhouse with fitness and lounge areas",
      },
      {
        id: 3,
        type: "interior",
        title: "Living Room",
        image: connught3,
        description: "Spacious living area with designer finishes",
      },
    ],

    amenities: [
      "Gated Community",
      "Spectacular Clubhouse",
      "State-of-the-Art Fitness Center",
      "Swimming Pool & Lounge",
      "Indoor & Outdoor Sports Courts",
      "Children’s Play Area",
      "24×7 Security",
      "Landscaped Parks",
    ],

    specifications: {
      structure: "Stilt + 4 Floors",
      units: 200,
      configurations: ["3 BHK", "4 BHK"],
      developer: "TDI Smart City Pvt Ltd",
      approvals: ["Pre-launch RERA Certified", "GMADA Approved"],
    },

    connectivity: [
      "International Airport – 15 mins drive",
      "Elante Mall – 10 mins",
      "ISB & NIPER – 5 mins",
      "Ashoka & Amity University – 2 mins",
      "PCA Stadium – 7 mins",
      "Infosys Campus – 2 mins",
      "PR6 Road – Adjacent",
      "Tribune Chowk, Chandigarh – 9 mins",
    ],

    highlights: [
      "Exclusive gated community",
      "Stilt + 4 floor independent apartments",
      "Spectacular clubhouse with world-class facilities",
      "Prime location with seamless connectivity",
      "Precision-crafted architecture and interiors",
    ],

    slug: "connaught-homes-117",
  },
{
  id: "mayfields",
  name: "Highland Mayfield",
  location: "Sector 118, Airport Road, Mohali",
  city: "Mohali",
  type: "Residential",
  logoimage: mayfieldslogo,
  status: "Upcoming",
  developer: "Highland Group",
  image: mayfields,
  brochure: mayfieldsbrochure,
  description: "Highland Mayfield is located off the main stretch of Airport Road, Mohali. Spread over 12 acres with magnificent towers offering 3 and 4 BHK residences, each tower features exclusive rooftop amenities like horizon pools and skyscape gyms for an unparalleled lifestyle.",
  
  brandFoundation: {
    title: "Book Your Dream Home & Save Up To ₹15 Lacs*",
    subtitle: "Spot Booking Offers Available",
    philosophy: "Experience a world crafted exclusively for you with private decks, no shared walls, and panoramic L-shaped windows that maximize sunlight and ventilation.",
    keyPrinciples: [
      {
        title: "Privacy First",
        description: "No common walls between homes for enhanced privacy and tranquility."
      },
      {
        title: "Panoramic Views",
        description: "L-shaped master bedroom windows offering sweeping vistas of Airport Road and the tricity skyline."
      },
      {
        title: "Rooftop Amenities",
        description: "Private horizon pool and skyscape gym atop each tower for luxury living."
      }
    ]
  },

  gallery: [
    {
      id: 1,
      type: "exterior",
      title: "Tower Elevation",
      image: mayfields1,
      description: "Modern facade with rooftop horizon pool"
    },
    {
      id: 2,
      type: "floorplan",
      title: "3 BHK Layout",
      image: mayfields2,
      description: "Spacious 3 BHK apartment layout"
    },
    {
      id: 3,
      type: "floorplan",
      title: "4 BHK Layout",
      image: mayfields3,
      description: "Expansive 4 BHK apartment layout"
    }
  ],

  amenities: [
    "Rooftop Horizon Pool",
    "Skyscape Gym",
    "Jogging Track",
    "Ample Car Parking",
    "Advanced Security & Intercom",
    "Private Apartment Decks"
  ],

  specifications: {
    landParcel: "12 Acres",
    towers: ["3 BHK", "4 BHK"],
    carpetArea: { "3 BHK": "2250 sq ft", "4 BHK": "2950 sq ft" },
    approvals: ["RERA Approved"],
    booking: { bookingAmount: "₹25 Lakhs", paymentPlan: "Flexible up to 80% financing" }
  },

  connectivity: [
    "International Airport – 3 mins drive",
    "Tricity Expressway – Nearby",
    "Elante Mall – 10 mins",
    "Schools & Hospitals – Within 5 mins"
  ],

  highlights: [
    "Spacious homes with modern interiors",
    "No shared walls for complete privacy",
    "L-shaped master bedroom windows",
    "West-facing units with cross ventilation",
    "Exclusive rooftop amenities",
    "Prime Airport Road connectivity"
  ],

  slug: "mayfields"
},
{
  id: "bollywood-green-city-phase-iv",
  name: "Bollywood Green City Phase IV",
  location: "Mohali",
  logoimage: bollygreenlogo,
  city: "Mohali",
  type: "Residential",
  status: "Under Construction",
  developer: "Bollywood Group",
  image: bollywoodgreen,
  brochure: bollywoodgBrochure,
  description: "The next chapter in upscale living, Phase IV expands Bollywood Green City by 5 acres, introducing spacious 3 BHK & 4 BHK apartments and boutique commercial stores amidst 6 acres of green spaces in a 32 acre township.",
  
  brandFoundation: {
    title: "Enjoy Nature’s Comfort in Luxury & Peace",
    subtitle: "Region’s 1st Green Residential Project",
    philosophy: "A home is more than walls—it’s a personal sanctuary. Phase IV enhancements include updated architecture, refreshed façade, elevated finishes, and expanded green corridors based on resident feedback for a superior living environment.",
    keyPrinciples: [
      {
        title: "Green Living",
        description: "Over 6 acres of green spaces and landscaped corridors for health and leisure."
      },
      {
        title: "Premium Residences",
        description: "Spacious 3 BHK & 4 BHK layouts with modern finishes and expanded square footage."
      },
      {
        title: "Boutique Commerce",
        description: "Curated boutique stores delivered in phase for convenience and lifestyle enrichment."
      }
    ]
  },

  gallery: [
    {
      id: 1,
      type: "exterior",
      title: "Phase IV Towers",
      image: bollygreen1,
      description: "Updated architectural schematic and refreshed façade"
    },
    {
      id: 2,
      type: "landscape",
      title: "Green Corridors",
      image: bollygreen2,
      description: "Expansive landscaped pathways across the township"
    },
    {
      id: 3,
      type: "interior",
      title: "Apartment Interior",
      image: bollygreen3,
      description: "Modern premium finishes and high ceilings"
    }
  ],

  amenities: [
    "Commercial Boutique Stores",
    "Club House",
    "Green Corridors",
    "Wide Internal Roads",
    "32 Acre Integrated Township",
    "GMADA & RERA Approved",
    "State-of-the-Art Fitness Center",
    "Swimming Pool & Jogging Track"
  ],

  specifications: {
    townshipSize: "32 Acres",
    expansion: "5 Acre Phase IV",
    floorTypes: ["3 BHK", "4 BHK"],
    greenSpace: "6 Acres",
    approvals: ["GMADA Approved", "RERA Approved"]
  },

  connectivity: [
    "International Airport Road frontage",
    "Adjoining GMADA Leisure Valley",
    "Adjacent to Medallion Edge Marriott Commercial",
    "Minutes from Chandigarh & Panchkula"
  ],

  highlights: [
    "Region’s 1st Green Residential Project",
    "32 Acre Integrated Township",
    "Over 6 Acres of Green Spaces",
    "Grand Club House with World-Class Facilities",
    "Over 400 Families Currently Residing"
  ],

  slug: "bollywood-green-city-phase-iv"
},
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const getProjectBySlug = (slug: string) => {
    return projects.find((project) => project.slug === slug);
  };

  const getProjectsByCity = (city: string) => {
    return projects.filter(
      (project) => project.city.toLowerCase() === city.toLowerCase()
    );
  };

  const getProjectsByType = (type: string) => {
    return projects.filter(
      (project) => project.type.toLowerCase() === type.toLowerCase()
    );
  };
  return (
    <ProjectContext.Provider
      value={{
        projects,
        getProjectBySlug,
        getProjectsByCity,
        getProjectsByType,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
