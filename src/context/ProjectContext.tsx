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
import pinnaclebrochure from "../assets/stjpinnacle/Brochure.pdf";
import mdblogo from "../assets/projectlogos/MDB.png";
import amarilogo from "../assets/projectlogos/AmariVintageLogo.png";
import clermontlogo from "../assets/projectlogos/ClearmontONeGroup.png";
import mayfieldslogo from "../assets/projectlogos/MayfieldLogo.png";
import greenwoodslogo from "../assets/projectlogos/GreenwoodLogo.png";
import bollygreenlogo from "../assets/projectlogos/Bollywoodlogo.png"
import khetanbrochure from "../assets/Khetanswissgarden/SwissGardenBrochure.pdf"

import thelakelogo from "../assets/projectlogos/OmaxeLakeLogo.png";
import noblelogo from "../assets/projectlogos/NobleWillasaLogo.png";
import medallionlogo from "../assets/projectlogos/MedallionAurumlogo.png";
import gardenialogo from "../assets/projectlogos/GardeniaHomesLogo.png";


export interface Project {
  id: string;
  name: string;
  location: string;
  city: "Mohali" | "Chandigarh" | "New Chandigarh" | "Himachal";
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
  {
    id: "stj-pinnacle",
    name: "The Pinnacle",
    logoimage: "https://thepinnacle-mohali.com/wp-content/uploads/2024/07/pin_logo.png", // Add your logo image
    location: "Sector 83A IT City, Mohali",
    city: "Mohali",
    type: "Residential",
    status: "Under Construction",
    image: "https://thepinnacle-mohali.com/wp-content/uploads/2025/01/Screenshot-2025-01-27-185636.png", // Add your main image
    brochure: pinnaclebrochure, // Add your brochure PDF
    developer: "STJ Group & GB Realty",
    description: "The Pinnacle Mohali is a luxurious residential project offering 3, 4, and 5 BHK ultra-luxury apartments designed by renowned architect Hafeez Contractor. Located in IT City Mohali with world-class 5-star amenities spread across 8 acres.",

    brandFoundation: {
      title: "Experience the Luxury Living",
      subtitle: "Where Contemporary Design Meets Timeless Elegance",
      philosophy: "At THE PINNACLE, trust and excellence are pivotal. Designed by master architect Hafeez Contractor, this residential masterpiece features cutting-edge Mivan technology, 1 lakh+ sq ft grand clubhouse, and unparalleled luxury in the heart of Mohali IT City.",
      keyPrinciples: [
        {
          title: "Architectural Excellence",
          description: "Designed by legendary architect Hafeez Contractor, ensuring timeless architectural brilliance with cutting-edge design and spectacular planning."
        },
        {
          title: "Prime IT City Location",
          description: "Strategic location adjoining Infosys, HDFC Regional Office, and fronting prestigious Plaksha University with 200 ft Airport Road connectivity."
        },
        {
          title: "Grand Clubhouse & Amenities",
          description: "Experience 1 lakh+ sq ft grand clubhouse with 2-acre sky garden, 5-acre landscaped area, infinity pool, modern gym, golf activity, and premium lifestyle amenities."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Tower Elevation",
        image: "https://thepinnacle-mohali.com/wp-content/uploads/2025/06/Untitled-1024-x-1920-px-1920-x-1080-px-1920-x-1080-px-1500-x-675-px-1600-x-900-px-1500-x-750-px-e1749113903277.png",
        description: "Bold outer elevation merging modern architecture with timeless aesthetics"
      },
      {
        id: 2,
        type: "amenity",
        title: "Grand Clubhouse",
        image: "https://thepinnacle-mohali.com/wp-content/uploads/2024/07/7-e1727435381226.png",
        description: "1 lakh+ sq ft clubhouse with world-class amenities"
      },
      {
        id: 3,
        type: "floorplan",
        title: "3 BHK Layout",
        image: "https://thepinnacle-mohali.com/wp-content/uploads/2024/07/23.png", // Add your floor plan
        description: "Fully equipped 3 BHK apartment with premium specifications"
      },
      {
        id: 4,
        type: "landscape",
        title: "Sky Garden",
        image: "https://thepinnacle-mohali.com/wp-content/uploads/2024/11/331-FLOOR-PLAN-PINNACLE-19-2048x1446.png",
        description: "2-acre sky garden offering breathtaking views"
      }
    ],

    amenities: [
      "1 Lakh+ Sq Ft Grand Clubhouse",
      "2-Acre Sky Garden",
      "5-Acre Landscaped Open Area",
      "Infinity Swimming Pool",
      "Modern Gymnasium & Sports Court",
      "Golf, Cricket, Basketball, Tennis Courts",
      "Yoga & Meditation Center",
      "Hospitality & Dining",
      "Kids Play Area",
      "6 Tier Private Security",
      "Covered Parking for Each Apartment",
      "24/7 Medical Center",
      "Fully Equipped Flats",
      "High-Speed Elevators"
    ],

    specifications: {
      developer: "STJ Group & GB Realty",
      architect: "Hafeez Contractor",
      landParcel: "8 acres",
      construction: "Advanced Mivan Technology",
      skyGarden: "2 acres",
      landscapedArea: "5 acres",
      constructionArea: "3 acres",
      configurations: ["3 BHK", "3+1 BHK", "4+1 BHK", "5 BHK"],
      possession: "2027",
      approvals: ["RERA Approved", "GMADA Approved"],
      connectivity: ["200 ft Airport Road", "150 ft Road"]
    },

    connectivity: [
      "International Airport - 5 km",
      "Adjoining Infosys Campus",
      "Fronting Plaksha University",
      "Neighboring HDFC Regional Office",
      "Chandigarh - 13 km",
      "Himachal, Haryana & Punjab connectivity"
    ],

    highlights: [
      "Designed by Hafeez Contractor",
      "7 Star Residential Property",
      "IT City Prime Location",
      "1 Lakh+ Sq Ft Clubhouse",
      "Mivan Construction Technology",
      "Fully Loaded Apartments"
    ],

    slug: "stj-pinnacle"
  },

  // 2. KHETAN SWISS GARDEN
  {
    id: "khetan-swiss-garden",
    name: "Khetan Swiss Gardens",
    logoimage: "https://khetanswissgardens.com/wp-content/uploads/2025/01/SWISS-LOGO-2.png",
    location: "Sector 126, Airport Road, Mohali",
    city: "Mohali",
    type: "Residential",
    status: "Under Construction",
    image: "https://khetanswissgardens.com/wp-content/uploads/2025/02/Gallery6.png",
    brochure: khetanbrochure,
    developer: "Khetan Realty",
    description: "Step into an enriching environment with Vastu-friendly homes located on Airport Road, Sector 126 Mohali. RERA-approved project offering 2, 3 & 3+1 BHK luxury apartments with S+14 floors and 3-star clubhouse amenities.",

    brandFoundation: {
      title: "Endowing Essence to Your Dreams",
      subtitle: "Vastu Friendly Luxury Living",
      philosophy: "Khetan Swiss Gardens is a RERA-approved project strategically located at Sector 126, Greater Mohali, well-designed with majestic architecture and stunning amenities. The project offers Vastu-friendly homes with 7 towers, each having Stilt+14 floors with clubhouse and ultra-modern amenities.",
      keyPrinciples: [
        {
          title: "Vastu Compliance",
          description: "Every home is designed according to Vastu principles, ensuring positive energy flow and harmonious living environment."
        },
        {
          title: "Strategic Location",
          description: "Prime location on Airport Road with easy access to VR Punjab Mall (1.9 km), International Airport (18 km), and Chandigarh (4 km)."
        },
        {
          title: "3 Star Clubhouse",
          description: "World-class amenities including swimming pool, gymnasium, indoor games, banquet hall, multi-cuisine restaurant, and co-working space."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Project View",
        image: "https://khetanswissgardens.com/wp-content/uploads/2025/02/04.jpg",
        description: "7 towers with Stilt+14 floors each"
      },
      {
        id: 2,
        type: "amenity",
        title: "Clubhouse",
        image: "https://khetanswissgardens.com/wp-content/uploads/2025/02/PANA5795.webp",
        description: "3-star clubhouse with premium amenities"
      },
      {
        id: 3,
        type: "floorplan",
        title: "2 BHK Layout",
        image: "https://khetanswissgardens.com/wp-content/uploads/2025/05/Swiss-Garden-floor-plan-scaled.webp",
        description: "Spacious 2 BHK apartment layout"
      },
      {
        id: 4,
        type: "landscape",
        title: "Central Plaza",
        image: "https://khetanswissgardens.com/wp-content/uploads/2025/02/recreational-path-green-park-lined-up-with-trees-beanch_42667-1212-1.webp",
        description: "Central plaza with outdoor landscape"
      }
    ],

    amenities: [
      "RERA Approved",
      "3 Star Club House",
      "Swimming Pool",
      "Gymnasium",
      "Indoor Games",
      "Banquet Hall",
      "Basketball Court",
      "Badminton Court",
      "Multi-cuisine Restaurant",
      "Co-working Space",
      "Dance Room",
      "Central Plaza",
      "Gazebo",
      "Outdoor Landscape",
      "Recreational Area"
    ],

    specifications: {
      developer: "Khetan Realty",
      landParcel: "4.1 acres",
      towers: 7,
      floors: "Stilt + 14",
      units: "369 units",
      configurations: ["2 BHK", "3 BHK", "3+1 BHK"],
      sizes: "1325 - 2075 sq ft",
      possession: "Under Construction",
      approvals: ["PBRERA-SAS81-PR0827"],
      reraWebsite: "www.rera.punjab.gov.in"
    },

    connectivity: [
      "VR Punjab Mall - 1.9 km",
      "International Airport - 18 km",
      "Chandigarh - 4 km",
      "Max Hospital - 6.4 km",
      "Fortis Hospital - 9 km",
      "ISB Mohali - 11 km",
      "DPS Sector 92 - 5.3 km",
      "Cricket Stadium - 9.5 km"
    ],

    highlights: [
      "Vastu Friendly Homes",
      "Airport Road Location",
      "7 Towers - Stilt+14 Floors",
      "3 Star Clubhouse",
      "Construction Started",
      "Bank Loan Available"
    ],

    slug: "khetan-swiss-garden"
  },

  // 3. THE KASUL (KASAULI HIMACHAL)
  {
    id: "the-kasul-kasauli",
    name: "The Kasul",
    logoimage: "https://kasul.in/wp-content/uploads/2025/08/kasul-logo-1.png",
    location: "Kasauli, Himachal Pradesh",
    city: "Himachal", // Can be changed to "Himachal" if you add that option
    type: "Residential",
    status: "Booking Open",
    image: "https://kasul.in/wp-content/uploads/2025/08/Kasouli-Villa-Aerial-Cam.webp",
    // brochure: kasulbrochure,
    developer: "Hill Homes",
    description: "Himachal's most lavish & unique estate villas. The Kasul offers 4 & 5 BHK drive-in villas with private heated pool, lawn, kitchen garden & independent lift spread across 75 bighas in Kasauli's pine-covered hills.",

    brandFoundation: {
      title: "Himachal's Most Exclusive Estate Villa Development",
      subtitle: "Luxury Living by the Hills",
      philosophy: "The Kasul is more than a home – it's the most precious gift you can give your family. Located in the heart of Kasauli's pine-covered hills, offering only 36 ultra-luxury estate villas in a gated community spread across 75 bighas with 90% open greens.",
      keyPrinciples: [
        {
          title: "Ultra-Luxury Estate Villas",
          description: "4 & 5 BHK villas with 8000+ sq ft usable area, private heated pool, independent lift, parking for 4 SUVs, and 3 living rooms - one on each floor."
        },
        {
          title: "Exclusive Community",
          description: "Only 36 villas in 75 bighas of land with just 10% construction and 90% open greens. Features 3-acre central garden - a first in hill projects."
        },
        {
          title: "World-Class Clubhouse",
          description: "Infinity heated pool, gym, yoga room, signature restaurant, indoor games, co-working lounge, EV charging, and 24x7 security with daily needs convenience."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Estate Villa Exterior",
        image: "https://kasul.in/wp-content/uploads/2025/08/Kasouli-Villa-Villa-Front-Cam.webp",
        description: "Luxurious estate villa with private pool and lawn"
      },
      {
        id: 2,
        type: "amenity",
        title: "Private Heated Pool",
        image: "https://kasul.in/wp-content/uploads/2025/08/Kasouli-Villa_Balcony-Cam.webp",
        description: "Private heated swimming pool for each villa"
      },
      {
        id: 3,
        type: "landscape",
        title: "Valley Views",
        image: "https://kasul.in/wp-content/uploads/2025/08/Kasouli-Villa-Landscape-Cam01.webp",
        description: "Breathtaking valley and pine forest views"
      },
      {
        id: 4,
        type: "amenity",
        title: "Clubhouse",
        image: "https://kasul.in/wp-content/uploads/2025/08/Family-Lounge-2nd-floor.webp",
        description: "World-class clubhouse with infinity pool"
      }
    ],

    amenities: [
      "Private Heated Swimming Pool",
      "Independent Lift in Each Villa",
      "Private Lawn & Kitchen Garden",
      "Parking for 4 SUVs",
      "3 Living Rooms (One Per Floor)",
      "Infinity Heated Clubhouse Pool",
      "Fully Equipped Gym",
      "Yoga & Meditation Room",
      "Signature Restaurant",
      "Indoor Games (Snooker, Table Tennis)",
      "Co-working Lounge",
      "EV Charging Station",
      "24x7 Security",
      "3-Acre Central Garden",
      "90% Open Greens"
    ],

    specifications: {
      developer: "Hill Homes",
      landParcel: "75 bighas",
      totalVillas: 36,
      configurations: ["4 BHK + Servant Room", "5 BHK + Servant Room"],
      usableArea: "8000+ sq ft",
      construction: "10% Built-up Area",
      openArea: "90% Greens",
      centralGarden: "3 acres",
      possession: "Ready to Move",
      approvals: ["RERA Approved", "Himachal Government Approved"],
      bankLoan: "Available"
    },

    connectivity: [
      "Chandigarh Airport - 1.5 hours",
      "Kalka Shimla Highway - 1 km",
      "Kasauli - In the heart",
      "Chandigarh - 1.5 hours drive",
      "Dharampur - Nearby",
      "Shimla - Well connected"
    ],

    highlights: [
      "Only 36 Ultra-Luxury Villas",
      "Private Heated Pool in Each Villa",
      "Independent Lift",
      "8000+ Sq Ft Usable Area",
      "75 Bighas Gated Community",
      "90% Open Greens",
      "3-Acre Central Garden",
      "100% Risk-Free Investment"
    ],

    slug: "the-kasul-kasauli"
  },

  // 4. CARNATION HILLS DHARAMPUR
  {
    id: "carnation-hills-dharampur",
    name: "Carnation Hills",
    logoimage: "https://carnationhills.com/images/logo.png",
    location: "Dharampur, Kasauli, Himachal Pradesh",
    city: "Himachal", // Can be changed
    type: "Residential",
    status: "Under Construction",
    image: "https://carnationhills.com/images/slider2.jpg",
    // brochure: carnationbrochure,
    developer: "RKN Infratech",
    description: "Luxurious 2 & 3 BHK fully furnished apartments and duplexes with servant rooms and terraces at the foothills of Himalayas. Experience endless pine views, valley vistas, and resort-style living in Dharampur, Kasauli.",

    brandFoundation: {
      title: "An Oasis of Luxury and Nature",
      subtitle: "Forest Living with Modern Comfort",
      philosophy: "Carnation Hills offers a unique living experience nestled at the foothills of the Himalayas. Designed with terracotta clay tile sloping roofs, the stepped building design ensures every apartment enjoys unobstructed valley views and never-ending pine tree vistas.",
      keyPrinciples: [
        {
          title: "Breathtaking Views",
          description: "Unlimited green vistas on all sides with endless views of beautiful pine trees. Every apartment features both-side open design for panoramic valley views."
        },
        {
          title: "Luxurious Residences",
          description: "Fully furnished 2 & 3 BHK apartments and duplexes (1741 sq ft to 4121 sq ft) with spacious terraces, servant rooms, and jacuzzi provision with pine views."
        },
        {
          title: "Premium Amenities",
          description: "Infinity swimming pool with valley views, modern gymnasium, yoga & meditation center, luxurious clubhouse, and children's play area spread over 5000 sq meters."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Building Elevation",
        image: "https://carnationhills.com/images/slider.jpg",
        description: "Terracotta clay tile sloping roof design with G+7 floors"
      },
      {
        id: 2,
        type: "landscape",
        title: "Pine Forest Views",
        image: "https://carnationhills.com/images/map.jpg",
        description: "Endless pine tree views from every apartment"
      },
      {
        id: 3,
        type: "amenity",
        title: "Infinity Pool",
        image: "https://carnationhills.com/images/g6.jpg",
        description: "Infinity swimming pool with stunning valley views"
      },
      // {
      //   id: 4,
      //   type: "interior",
      //   title: "Furnished Apartment",
      //   image: "https://carnationhills.com/images/interior.jpg",
      //   description: "Fully furnished spacious living area"
      // }
    ],

    amenities: [
      "Infinity Swimming Pool",
      "Modern Gymnasium",
      "Yoga & Meditation Center",
      "Luxurious Clubhouse",
      "Children's Play Area",
      "Jacuzzi Provision on Terrace",
      "Both Side Open Apartments",
      "Fully Furnished",
      "G + 7 Floors",
      "Lift Facility",
      "Covered & Open Car Parking",
      "Commercial Space",
      "Gated Community",
      "24/7 Security"
    ],

    specifications: {
      developer: "RKN Infratech Private Limited",
      landParcel: "5000 sq meters (1.27 acres)",
      towers: 3,
      floors: "G + 7",
      configurations: ["2 BHK + SR + Terrace", "3 BHK Duplex + SR + Terrace"],
      sizes: "1741 sq ft to 4121 sq ft",
      pricing: "₹1.55 Cr to ₹3.10 Cr (Fully Furnished)",
      possession: "Oct 2026",
      approvals: ["RERAHPSOP09210119"],
      furnishing: "Fully Furnished"
    },

    connectivity: [
      "Kalka Shimla Highway - 1 km",
      "Kasauli - Walking distance",
      "Chandigarh - Well connected",
      "Dharampur - In the heart",
      "Shimla - Connected via highway",
      "Solan - Nearby"
    ],

    highlights: [
      "Foothills of Himalayas",
      "Endless Pine Tree Views",
      "Fully Furnished Apartments",
      "Valley View from Every Unit",
      "Jacuzzi with Pine Views",
      "Both Side Open Design",
      "Terracotta Roof Architecture",
      "RERA Registered"
    ],

    slug: "carnation-hills-dharampur"
  },

  // 5. TIARA NEW CHANDIGARH
  {
    id: "tiara-new-chandigarh",
    name: "The Tiara",
    logoimage: "https://thetiarachandigarh.com/wp-content/uploads/2023/08/the-tiara-new-chandigarh-logo.jpeg",
    location: "New Chandigarh, Punjab",
    city: "New Chandigarh",
    type: "Residential",
    status: "Under Construction",
    image: "https://thetiarachandigarh.com/wp-content/uploads/2023/08/the-tiara-16.jpg",
    // brochure: tiarabrochure,
    developer: "Sham Exotic Group",
    description: "The Tiara is a high-end residential project offering 4 & 5 BHK super luxury apartments (4100 to 8000 sq ft) in 5.6 acres. Experience ultimate luxury with 28-floor high-rise apartments, 60,000 sq ft clubhouse, and three-sided open views amidst Shivalik Hills.",

    brandFoundation: {
      title: "Experience Ultimate High-Class Living",
      subtitle: "Luxury Amidst Nature",
      philosophy: "The Tiara is dedicated to offer a lifestyle of luxury amidst nature. High-rise apartments designed to provide spacious living areas with high ceilings, expansive balconies, and three-sided open views surrounded by Shivalik Hills and protected forest belt.",
      keyPrinciples: [
        {
          title: "Ultra-Spacious Residences",
          description: "Exclusive 4 & 5 BHK apartments ranging from 4100 sq ft to 8000 sq ft with plenty of natural light, ventilation, and panoramic views."
        },
        {
          title: "Premium Location",
          description: "Proximity to Homi Bhabha Cancer Hospital (Tata Memorial Centre), PGIMER, Narsee Monjee Institute, Strawberry Fields School, and The Oberoi Sukhvilas Spa Resort."
        },
        {
          title: "World-Class Amenities",
          description: "60,000 sq ft approx. clubhouse with luxurious infinity pool, state-of-the-art fitness center, lush gardens, dedicated play areas, and premium facilities."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "High-Rise Towers",
        image: "https://thetiarachandigarh.com/wp-content/uploads/2023/08/the-tiara-17.jpg",
        description: "28-floor premium residential towers"
      },
      {
        id: 2,
        type: "amenity",
        title: "Clubhouse",
        image: "https://thetiarachandigarh.com/wp-content/uploads/2023/08/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf-1536x1024.jpg",
        description: "60,000 sq ft world-class clubhouse"
      },
      {
        id: 3,
        type: "landscape",
        title: "Shivalik Hills View",
        image: "https://thetiarachandigarh.com/wp-content/uploads/2023/08/the-tiara-11.jpg",
        description: "Panoramic views of Shivalik Hills"
      },
      {
        id: 4,
        type: "floorplan",
        title: "4 BHK Layout",
        image: "https://thetiarachandigarh.com/wp-content/uploads/2023/08/the-tiara-23.jpg",
        description: "Spacious 4 BHK apartment layout"
      }
    ],

    amenities: [
      "60,000 Sq Ft Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Fitness Center",
      "Lush Green Gardens",
      "Dedicated Play Areas",
      "High Ceilings",
      "Expansive Balconies",
      "Three-Sided Open Views",
      "Natural Light & Ventilation",
      "Parks & Walking Trails",
      "Recreational Facilities",
      "24x7 Security",
      "Power Backup",
      "Covered Parking"
    ],

    specifications: {
      developer: "Sham Exotic Group",
      landParcel: "5.6 acres",
      towers: 6,
      floors: 28,
      units: "308 units",
      configurations: ["4 BHK", "4+1 BHK", "5 BHK"],
      sizes: "4100 sq ft to 8000 sq ft",
      avgPrice: "₹11K - ₹13K per sq ft",
      startingPrice: "₹4 Cr onwards",
      clubhouse: "60,000 sq ft",
      possession: "April 2029",
      approvals: ["PBRERA-SAS80-PR1063"]
    },

    connectivity: [
      "Homi Bhabha Cancer Hospital - Nearby",
      "PGIMER - Close proximity",
      "Narsee Monjee Institute - Nearby",
      "Strawberry Fields School - Adjacent",
      "The Oberoi Sukhvilas Spa - Close",
      "Holiday Inn - Nearby",
      "Chandigarh - Well connected",
      "Shivalik Hills - Surrounded"
    ],

    highlights: [
      "5.6 Acre Premium Development",
      "28-Floor High-Rise Towers",
      "4100 to 8000 Sq Ft Apartments",
      "60,000 Sq Ft Clubhouse",
      "Three-Sided Open Views",
      "Shivalik Hills & Forest Belt",
      "Premium Healthcare Proximity",
      "Luxury Resort Neighborhood"
    ],

    slug: "tiara-new-chandigarh"
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
