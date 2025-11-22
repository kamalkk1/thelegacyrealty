import { createContext, useContext, type ReactNode } from "react";
import mdbmain from "../assets/mdblutyens/mdbmain.webp";
import medallion from "../assets/medallion/medallion.webp";
import greenwood from "../assets/greenwoods/greenwoodmain.webp";
import gardenia from "../assets/gardenia/gardeniamain.webp";
import onegroup from "../assets/onegroupclermont/clermont-banner.webp";
import mayfields from "../assets/mayfields/mayfiledsmain.webp";
import wellnesscity from "../assets/wellnesscity/wellnesscity.webp";
import noblewillassa from "../assets/noblewillassa/noblewillassa.webp";
import waveestate from "../assets/waveestate/mainwave.webp";
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
import wavegradens1 from "../assets/waveestate/new.jpeg";
import wavegradens2 from "../assets/waveestate/new2.jpeg";
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
import anandaCrownImage from "../assets/anandacrown/anandacrown.webp";
import thelakelogo from "../assets/projectlogos/OmaxeLakeLogo.png";
import noblelogo from "../assets/projectlogos/NobleWillasaLogo.png";
import medallionlogo from "../assets/projectlogos/MedallionAurumlogo.png";
import gardenialogo from "../assets/projectlogos/GardeniaHomesLogo.png";
import mohalihighstreet from "../assets/bg-highstreet.webp";
import mainsukh from "../assets/sukhvillas/mainsukhvillas.webp";
import mainsukh1 from "../assets/sukhvillas/2.jpeg";
import mainsukh2 from "../assets/sukhvillas/1.jpeg";
import mainsukh3 from "../assets/sukhvillas/flayout.webp";
import mainsukh4  from "../assets/sukhvillas/hotelsukhvillas.webp";
import sukhvillasbrochure from "../assets/sukhvillas/LuxurioSukhPlazaBrochure.pdf";
import alpine from "../assets/alpinegroup/WhatsApp Image 2025-10-30 at 2.08.42 PM.jpeg"
import brochurewave from "../assets/waveestate/brochure.pdf";
import wavegradensmain from "../assets/slp-moksha/main.jpeg";
import moksha1 from "../assets/slp-moksha/1.jpeg";
import moksha2 from "../assets/slp-moksha/2.jpeg";
import moksha3 from "../assets/slp-moksha/floor.jpeg";
import kayra2 from "../assets/kayrahomes/kayranew.jpg";
import kayra3 from "../assets/kayrahomes/kayra2.jpg";
import kayra4 from "../assets/kayrahomes/kayra3.jpg";
import atlantis360logo from "../assets/atlantis360/Atlantis-Three-Sixtylogo.png";
import atlantis360image from "../assets/atlantis360/Screenshot 2025-11-17 at 11.21.35 AM.webp";
import atlantis360brochure from "../assets/atlantis360/ATLANTIS_360_ROUGH_FOR_APPROVAL.pdf";
import atlantis3601 from "../assets/atlantis360/atlantis-360.jpeg";
import atlantis3602 from "../assets/atlantis360/gl.jpg";
import atlantis3603 from "../assets/atlantis360/WhatsApp Image 2025-11-17 at 11.01.37 AM.jpeg";


export interface Project {
  id: string;
  name: string;
  location: string;
  city: "Mohali" | "Chandigarh" | "New Chandigarh" | "Himachal" | "Sirhind";
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
      | "elevation"
      | "commercial";
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
    type: "Residential",
    logoimage: greenwoodslogo,
    image: greenwood,
    brochure: greenwoodsbrochure,
    status: "Ready to Move",
    developer: "CEE DEE",
    description:
      "3BHK Floors in Greenwoods Sector 115 with Easy Payment Plan. Experience luxury living in a 25-acre RERA approved gated township with premium amenities including clubhouse, parks, sports courts, and premium fittings. Located on 80ft wide sector road with direct connectivity to 200ft wide PR-6 road.",

    // Brand Foundation Section
    brandFoundation: {
      title: "3BHK Floors in Greenwoods Mohali",
      subtitle: "25-Acre RERA Approved Township",
      philosophy:
        "Greenwoods offers premium 3BHK floors in a fully integrated 25-acre township with world-class amenities and premium fittings. With easy payment plans and strategic location near IT Hub, education centers, and commercial outlets, it's designed for modern family living.",
      keyPrinciples: [
        {
          title: "Premium 3BHK Floors",
          description:
            "Spacious 3BHK floors with UPVC doors/windows, Roca sanitary fittings, KEI wirings, and Legrand switches for modern comfortable living."
        },
        {
          title: "25-Acre Integrated Township",
          description:
            "RERA approved gated & secured society with 24×7 CCTV surveillance, clubhouse (28,620 sq ft), and lush green parks (49,770 sq ft)."
        },
        {
          title: "Strategic Connectivity",
          description:
            "Located on 80ft wide sector road with direct connection to 200ft wide PR-6 road, near IT Hub, Swaraj Factory, and education centers."
        },
      ],
    },

    // Gallery Images
    gallery: [
      {
        id: 1,
        type: "landscape",
        title: "25-Acre Township Overview",
        image: greenwoods1,
        description:
          "25-acre RERA approved gated township with modern facilities"
      },
      {
        id: 2,
        type: "amenity",
        title: "Lush Green Parks",
        image: greenwood2,
        description:
          "49,770 sq ft lush green parks with theme-based gardens"
      },
      {
        id: 3,
        type: "exterior",
        title: "Grand Entrance",
        image: greenwoods3,
        description: "Gated & secured society entrance with 24×7 surveillance"
      },
      {
        id: 4,
        type: "amenity",
        title: "Clubhouse & Sports Courts",
        image: greenwoods4,
        description: "28,620 sq ft clubhouse with badminton and basketball courts"
      },
    ],

    amenities: [
      "25-Acre Township",
      "RERA Approved",
      "Gated & Secured Society",
      "24×7 CCTV Surveillance",
      "UPVC Doors/Windows",
      "Roca Sanitary Fittings",
      "KEI Wirings",
      "Legrand Switches",
      "Underground Wiring",
      "Open Air Gym Parks",
      "Lush Green Parks (49,770 sq ft)",
      "Club House (28,620 sq ft)",
      "Jogging Tracks",
      "Gazebo (Sitting Area)",
      "Kids Play Area",
      "Badminton Court",
      "Basketball Court",
      "KFC & McDonald's Nearby",
      "High Street Market on Footsteps"
    ],

    specifications: {
      developer: "CEE DEE",
      landParcel: "25 acres",
      type: "3BHK Floors",
      approvals: ["RERA Approved"],
      society: "Gated & Secured",
      clubhouseSize: "28,620 sq ft",
      parkArea: "49,770 sq ft",
      roadConnectivity: "80ft sector road + 200ft PR-6 road",
      paymentPlan: "Easy Payment Plan Available",
      fittings: {
        doors: "UPVC Doors/Windows",
        sanitary: "Roca Sanitary Fittings",
        wiring: "KEI Wirings",
        switches: "Legrand Switches",
        wiringType: "Underground Wiring"
      }
    },

    highlights: [
      "3BHK Floors with Easy Payment Plan",
      "25-Acre RERA Approved Township",
      "Gated & Secured Society with 24×7 CCTV",
      "Premium Fittings (Roca, KEI, Legrand)",
      "Clubhouse (28,620 sq ft) & Parks (49,770 sq ft)",
      "Sports Courts (Badminton & Basketball)",
      "80ft Sector Road + 200ft PR-6 Connectivity",
      "Near IT Hub, Swaraj Factory & Education Centers",
      "KFC & McDonald's Nearby",
      "High Street Market on Footsteps"
    ],

    connectivity: [
      "80ft wide sector internal road",
      "Direct connection to 200ft wide PR-6 road",
      "Near IT Hub/Swaraj Factory/Commercial outlets",
      "Close to Education Hub",
      "KFC & McDonald's nearby",
      "High Street Market on few footsteps",
      "Strategic proximity to Mohali, Chandigarh, and Panchkula",
      "Well-connected road network"
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
  "id": "wave-gardens",
  "name": "Wave Gardens - Luxury Flats in Mohali",
  "location": "Wave Estate, Sector 85, Mohali",
  "city": "Mohali",
  "type": "Residential",
  "status": "Ready to Move",
   "image": waveestate,
  "logoimage": "https://www.waveestate.in/img/core-img/logo.png",
  "slug": "wave-gardens",
   brochure: brochurewave,

  "description": "Wave Gardens - Premium flats in Mohali featuring luxury 3BHK & 4BHK apartments in Sector 85. Wave Gardens offers ready-to-move flats near Homeland with 70% green spaces. Discover vastu compliant apartment design in Mohali, low rise home living, and harmony in modern architecture. Perfect for apartment mohali buyers seeking flats in mohali near Airport Road on a 12-acre gated community. Book your site visit today at Wave Gardens Mohali.",

  "brandFoundation": {
    "title": "Wave Gardens - Premium Flats in Mohali | Sector 85 Luxury Apartments",
    "subtitle": "Vastu Compliant Low-Rise Homes with 70% Green Spaces - Wave Estate",
    "philosophy": "Wave Gardens brings harmony through vastu compliant design in a low rise home environment. Our flats in Mohali blend modern luxury with natural serenity, offering apartment mohali residents the perfect balance. Wave Gardens provides ready-to-move flats near Homeland with exceptional connectivity to Chandigarh.",
    "keyPrinciples": [
      {
        "title": "Vastu Compliant Apartment Design - Harmony Greens Inspired",
        "description": "Wave Gardens features vastu compliant flats in Mohali with optimal spatial harmony. Each apartment mohali unit ensures positive energy flow, inspired by harmony greens principles, creating vastu compliant homes for modern families."
      },
      {
        "title": "Low Rise Home Living - Wave of Harmony",
        "description": "Experience low rise home luxury at Wave Gardens. Our 3BHK & 4BHK flats in Mohali provide a wave of harmony with intimate community living, perfect for families seeking peaceful apartment mohali options away from high-rise congestion."
      },
      {
        "title": "Ready-to-Move Flats Near Homeland - 12-Acre Estate",
        "description": "Wave Gardens offers ready-to-move flats in Mohali with 70% green landscaping. Located near Homeland, these vastu compliant apartment options in Sector 85 ensure immediate possession with premium amenities and gated security."
      }
    ]
  },

  "gallery": [
    {
      "id": 1,
      "type": "exterior",
      "title": "Wave Gardens - Flats in Mohali Low-Rise Community",
      "image": wavegradens1, 
      "description": "Modern low rise home architecture at Wave Gardens showcasing vastu compliant apartment design with lush greenery. Premium flats in Mohali featuring wave-inspired low rise home aesthetics near Homeland."
    },
    {
      "id": 2,
      "type": "amenity",
      "title": "Premium Amenities - Harmony Greens Quality",
      "image": wavegradens2,
      "description": "World-class clubhouse, swimming pool and gym at Wave Gardens. These amenities rival harmony greens, offering apartment mohali residents premium facilities in a ready-to-move low rise home setting."
    },
    {
      "id": 3,
      "type": "floorplan",
      "title": "Vastu Compliant Floor Plans - 3BHK & 4BHK Flats in Mohali",
      "image": wavegradens3,
      "description": "Detailed vastu compliant floor plans for flats in Mohali at Wave Gardens. Each apartment mohali layout ensures optimal energy flow with low rise home design near Homeland on Airport Road."
    }
  ],

  "amenities": [
    "Swimming Pool",
    "Jogging & Cycling Track",
    "Fully Equipped Gym",
    "Clubhouse Facilities",
    "Power Backup",
    "Covered Car Parking",
    "Landscaped Gardens",
    "Children’s Play Area"
  ],

  "specifications": {
    "structure": "High-Rise Towers - Premium 3BHK & 4BHK Flats in Mohali",
    "units": "3BHK flats in Mohali, 4BHK flats in Mohali, Duplexes & Penthouses",
    "location": "Sector 85 Mohali on Airport Road near Homeland",
    "townshipSize": "12 Acres Premium Township",
    "greenArea": "70% Open Green Spaces",
    "possession": "Ready to Move - 3BHK Apartments in Mohali",
    "approvals": [
      "RERA Certified – PBRERA-SAS81-PR1009"
    ]
  },

  "connectivity": [
    "Wave Estate Sector 85 - Prime location for flats in Mohali",
    "Located near Homeland - Walking distance apartment mohali access",
    "Chandigarh International Airport - 10 mins from Wave Gardens",
    "Low rise home community with excellent connectivity",
    "Educational Institutions - Within 5-10 mins from apartment mohali",
    "Medical Centres - Within 10 mins",
    "Wave of Harmony - Shopping & Dining at Homeland",
    "Chandigarh City Centre - 15 mins connectivity",
    "Easy access to IT parks, business hubs, and professional centers",
    "Proximity to Vastu Compliant cultural centers"
  ],

  "highlights": [
    "Wave Gardens - Premium Flats in Mohali Sector 85",
    "Vastu Compliant Apartment Design - Harmony Greens Quality",
    "Low Rise Home Living - 3BHK & 4BHK Flats Near Homeland",
    "Ready-to-Move Apartment Mohali on Airport Road",
    "70% Green Space - Wave of Harmony Estate",
    "Vastu Compliant Apartment Mohali with Low Rise Home Architecture",
    "12-Acre Wave Gardens - Luxury Gated Community",
    "100% Occupancy Phase 1 - Trusted Developer",
    "Low Rise Home Amenities - Clubhouse, Pool, Gym",
    "Wave Estate Premium Flats Near Homeland Mall & Airport"
  ],

  // "seo": {
  //   "metaTitle": "3BHK & 4BHK Flats in Mohali Sector 85 | Wave Gardens – Luxury Apartments Near Airport Road",
  //   "metaDescription": "Discover ready-to-move 3BHK & 4BHK flats in Mohali’s Wave Gardens, Sector 85. Premium township, 70% open green space, luxury amenities, prime connectivity near Airport Road and Homeland Mall. Schedule a site visit today!",
  //   "slug": "wave-gardens",
  //   "keywords": [
  //     "3bhk flats in mohali", 
  //     "4bhk flats in mohali",
  //     "3bhk apartments in mohali",
  //     "3bhk flats in sector 85 mohali",
  //     "4bhk flats in sector 85 mohali",
  //     "flats near airport road mohali",
  //     "flats for sale near homeland mall",
  //     "luxury apartments mohali"
  //   ]
  // }
}
,
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
    image: "https://thepinnacle-mohali.com/wp-content/uploads/2025/01/Screenshot-2025-01-27-185636.png",
    brochure: pinnaclebrochure,
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
  {
    id: "victoria-street-sirhind",
    name: "Victoria Street",
    logoimage: "https://bklanddevelopers.com/wp-content/uploads/2025/08/Victoria-Street-Logo2-min-scaled.png",
    location: "Sirhind-Chandigarh International Airport Road",
    city: "Sirhind",
    type: "Commercial",
    status: "Under Construction",
    image: "https://bklanddevelopers.com/wp-content/uploads/2025/06/bkland-14.jpg",
    brochure: "https://example.com/victoria-street-brochure.pdf",
    developer: "BK Land Developers",
    description: "Victoria Street is Sirhind's first and largest retail destination, a grand commercial landmark at the gateway of a 64-acre mega township. This vibrant high street brings together mixed-use luxury retail spaces for premium brands, featuring shopping, entertainment, fine dining, and world-class hospitality with strategic highway location.",

    brandFoundation: {
      title: "Sirhind's Premier Retail Destination",
      subtitle: "Landmark High Street at 64-Acre Township Gateway",
      philosophy: "Victoria Street redefines commercial excellence as a glitzy hub of shopping, entertainment, fine dining, and hospitality. With strategic location and proximity to residential colonies, it guarantees a strong captive audience while serving as a cosmopolitan commercial landmark.",
      keyPrinciples: [
        {
          title: "Highway Commercial Hub",
          description: "Prime location on Sirhind-Chandigarh International Airport Road with maximum visibility and high footfall potential."
        },
        {
          title: "Mixed-Use Luxury Retail",
          description: "29 acres of diverse commercial spaces including 200+ premium showrooms, entertainment zones, food street, and multiplex facilities."
        },
        {
          title: "Future-Ready Infrastructure",
          description: "State-of-the-art architecture with wide roads (100-150 ft), 3000+ car parking spaces, and modern design for sustained growth."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Victoria Street Entrance",
        image: "https://bklanddevelopers.com/wp-content/uploads/2025/09/1366-%C3%97-768-px.jpg",
        description: "1000 sq ft grand entrance with magnificent façade and prime road frontage"
      },
      {
        id: 2,
        type: "amenity",
        title: "Entertainment Zone",
        image: "https://bklanddevelopers.com/wp-content/uploads/2025/06/Replace-to-water-fountains.jpg",
        description: "42,000 sq ft entertainment zone with multiplex and microbrewery"
      },
      {
        id: 3,
        type: "commercial",
        title: "Premium Showrooms",
        image: "https://bklanddevelopers.com/wp-content/uploads/2025/09/Shopping.jpg",
        description: "200+ premium showrooms in G+1 configuration for global brands"
      },
      {
        id: 4,
        type: "amenity",
        title: "Food Street",
        image: "https://bklanddevelopers.com/wp-content/uploads/2025/06/1290-%C3%97-710-px-021.jpg",
        description: "10,000 sq ft food street with 4 drive-thrus and multiple dining booths"
      }
    ],

    amenities: [
      "29 Acres Commercial Hub",
      "200+ Premium Showrooms", 
      "42,000 Sq Ft Entertainment Zone",
      "Multiplex Cinema",
      "Microbrewery",
      "10,000 Sq Ft Food Street",
      "4 Drive-Thru Restaurants",
      "3000+ Car Parking Spaces",
      "1000 Sq Ft Grand Entrance",
      "Wide 100-150 Ft Roads",
      "Gaming Zones",
      "Global Brand Showrooms",
      "24x7 Security",
      "Power Backup"
    ],

    specifications: {
      developer: "BK Land Developers",
      landParcel: "29 acres",
      totalShowrooms: "200+",
      structure: "G+1 Various Sizes",
      entertainmentZone: "42,000 sq ft",
      foodStreet: "10,000 sq ft",
      parking: "3000+ spaces",
      roadWidth: "100-150 ft",
      phase1Clearance: "11 acres CLU Cleared by GMADA",
      approvals: ["GMADA Approved Phase 1"]
    },

    connectivity: [
      "Sirhind-Chandigarh International Airport Road",
      "Gateway to 64-acre mega township",
      "Close proximity to residential colonies",
      "Strategic highway location",
      "High visibility commercial corridor",
      "Direct airport road connectivity"
    ],

    highlights: [
      "Sirhind's First & Largest Retail Destination",
      "Gateway of 64-Acre Mega Township",
      "29 Acres Mixed-Use Commercial Hub",
      "200+ Premium Brand Showrooms",
      "42,000 Sq Ft Entertainment Complex",
      "Prime Highway Location with Maximum Visibility",
      "3000+ Car Parking Spaces",
      "One-of-its-Kind in Sirhind"
    ],

    slug: "victoria-street-sirhind"
  },
  {
    id: "alpine-grove-dera-bassi",
    name: "Alpine Nest Homes",
    logoimage: "https://alpinegroove.in/images/logo.png",
    location: "Barwala Highway, Dera Bassi",
    city: "Chandigarh",
    type: "Residential",
    status: "Upcoming",
    image: alpine,
    brochure: "https://example.com/alpine-grove-brochure.pdf",
    developer: "Alpine Next Homes LLP",
    description: "Alpine Nest Homes presents 1 BHK Premium Residences on Barwala Highway – The Fastest Growing Investment Belt! Experience smart & stylish 1 BHK homes with ~435 sq ft super area in S+22 high-rise towers. Only 32 exclusive units available with 80% open space, lush gardens, and premium amenities.",

    brandFoundation: {
      title: "1 BHK Premium Residences",
      subtitle: "The Fastest Growing Investment Belt",
      philosophy: "Alpine Nest Homes offers smart & stylish 1 BHK homes designed for modern living on Barwala Highway. With only 32 limited, exclusive & high-demand units, this development combines contemporary design with strategic location for maximum investment potential.",
      keyPrinciples: [
        {
          title: "Smart & Stylish Design",
          description: "1 BHK premium residences with ~435 sq ft super area, thoughtfully designed for optimal space utilization and modern lifestyle."
        },
        {
          title: "Strategic Investment Location",
          description: "Located on Barwala Highway – The Fastest Growing Investment Belt with excellent connectivity and growth potential."
        },
        {
          title: "Exclusive Limited Units",
          description: "Only 32 units available making it limited, exclusive & high-demand investment opportunity with premium amenities."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Alpine Nest Homes Towers",
        image: "https://alpinegroove.in/images/new/building.webp",
        description: "S+22 high-rise towers with contemporary design on Barwala Highway"
      },
      {
        id: 2,
        type: "amenity",
        title: "Poolside Retreat",
        image: "https://alpinegroove.in/images/new/3.webp",
        description: "Luxurious swimming pool with landscaped surroundings"
      },
      {
        id: 3,
        type: "landscape",
        title: "Lush Gardens",
        image: "https://alpinegroove.in/images/2.jpg",
        description: "80% open space with expansive green landscapes and fountains"
      },
      {
        id: 4,
        type: "interior",
        title: "1 BHK Premium Interior",
        image: "https://alpinegroove.in/images/new/2.webp",
        description: "Smart & stylish 1 BHK home interior with modern design"
      }
    ],

    amenities: [
      "80% Open Green Space",
      "Grand Entrance with Fountains",
      "Poolside Retreat",
      "Fully-Equipped Clubhouse",
      "Swimming Pool",
      "Children's Play Areas",
      "Fitness Zones",
      "Lush Gardens & Landscapes",
      "5-Tier Security System",
      "Ample Car Parking",
      "Spacious Balconies",
      "24x7 Security",
      "Power Backup",
      "Modern Elevators"
    ],

    specifications: {
      developer: "Alpine Next Homes LLP",
      structure: "S+22 High-Rise Towers",
      configurations: ["1 BHK Premium Residences"],
      superArea: "~435 sq ft",
      totalUnits: "Only 32 Units",
      exclusivity: "Limited, Exclusive & High-Demand",
      construction: "Mivan Technology",
      openSpace: "80%",
      status: "Investment Opportunity",
      approvals: ["Under Process"],
      security: "5-Tier Security System"
    },

    connectivity: [
      "Barwala Highway - Fastest Growing Investment Belt",
      "Chandigarh - 15 mins",
      "Mohali - 20 mins", 
      "Zirakpur - 10 mins",
      "Chandigarh-Delhi Highway - Close proximity",
      "Indus Hospital & HIIMS Dera Bassi - Nearby",
      "Paras Downtown Square Mall - Nearby",
      "Elante Mall - 20 mins",
      "VR Punjab Mall - 25 mins"
    ],

    highlights: [
      "1 BHK Premium Residences",
      "Barwala Highway – Fastest Growing Investment Belt",
      "Super Area: ~435 sq ft",
      "Smart & Stylish 1 BHK Homes",
      "Only 32 Units – Limited, Exclusive & High-Demand",
      "S+22 High-Rise Living",
      "80% Open Green Space",
      "Premium Investment Opportunity"
    ],

    slug: "alpine-grove-dera-bassi"
  },
  {
    id: "ananda-crown-mohali",
    name: "Ananda Crown",
    logoimage: "https://assets.zyrosite.com/YZ9VoV177xUOwgWd/ai-logo-mk3zozb5ezh8bOgM.svg",
    location: "Sector 78, Mohali",
    city: "Mohali",
    type: "Residential",
    status: "Upcoming",
    image: anandaCrownImage,
    brochure: "https://example.com/ananda-crown-brochure.pdf",
    developer: "Ananda Developers",
    description: "Discover luxury living at Ananda Crown, offering ultra-luxury apartments with modern amenities in the heart of Mohali's prime Sector 78 location. Experience redefined luxury with spacious 3BHK, 3+1 BHK, and 4+1 BHK layouts designed for your ultimate comfort and lifestyle.",

    brandFoundation: {
      title: "Luxury Living Redefined",
      subtitle: "Ultra-Luxury Apartments in Prime Mohali",
      philosophy: "Ananda Crown represents the epitome of luxury living in Mohali's prestigious Sector 78. Every apartment is meticulously designed with modern amenities and spacious layouts to provide an unparalleled living experience that caters to your lifestyle needs.",
      keyPrinciples: [
        {
          title: "Ultra-Luxury Design",
          description: "Premium apartments with contemporary architecture and high-end finishes that redefine luxury living standards in Mohali."
        },
        {
          title: "Spacious Living",
          description: "Choose from thoughtfully designed 3BHK, 3+1 BHK, and 4+1 BHK layouts tailored for your lifestyle with ample space and modern conveniences."
        },
        {
          title: "Modern Amenities",
          description: "World-class facilities including clubhouse, swimming pools, and kids play area designed for your ultimate comfort and recreation."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Ananda Crown Facade",
        image: "https://images.unsplash.com/photo-1571832725367-7b7a782fe3aa?auto=format&fit=crop&w=800&h=928",
        description: "Ultra-luxury residential towers with contemporary architecture"
      },
      {
        id: 2,
        type: "amenity",
        title: "Swimming Pool",
        image: "https://images.unsplash.com/photo-1618404399394-123316e32859?auto=format&fit=crop&w=800&h=928",
        description: "Premium swimming pools designed for ultimate comfort"
      },
      {
        id: 3,
        type: "amenity",
        title: "Clubhouse",
        image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&h=792",
        description: "Modern clubhouse with luxury amenities and facilities"
      },
      {
        id: 4,
        type: "interior",
        title: "Spacious Apartment Interior",
        image: "https://images.unsplash.com/photo-1572381384575-d9f15ca07264?auto=format&fit=crop&w=800&h=792",
        description: "Luxurious interiors with modern design and premium finishes"
      }
    ],

    amenities: [
      "Ultra-Luxury Apartments",
      "Modern Clubhouse",
      "Swimming Pools",
      "Kids Play Area",
      "Premium Finishes",
      "Spacious Layouts",
      "24x7 Security",
      "Power Backup",
      "Covered Parking",
      "Landscaped Gardens",
      "Modern Elevators",
      "Recreational Facilities"
    ],

    specifications: {
      developer: "Ananda Developers",
      location: "Sector 78, Mohali",
      configurations: ["3 BHK", "3+1 BHK", "4+1 BHK"],
      features: "Ultra-luxury apartments with modern amenities",
      amenities: "Clubhouse, Swimming Pools, Kids Play Area",
      status: "Upcoming Project",
      approvals: ["Under Process"]
    },

    connectivity: [
      "Prime Sector 78 location",
      "Heart of Mohali",
      "Easy access to major roads",
      "Close to commercial centers",
      "Well-connected to Chandigarh",
      "Proximity to educational institutions",
      "Near healthcare facilities",
      "Shopping and entertainment nearby"
    ],

    highlights: [
      "Ultra-Luxury Apartments in Prime Location",
      "Sector 78, Mohali - Premium Address",
      "3BHK, 3+1 BHK & 4+1 BHK Layouts",
      "Modern Amenities & Clubhouse",
      "Swimming Pools & Kids Play Area",
      "Luxury Living Redefined",
      "Contemporary Architecture",
      "Premium Finishes Throughout"
    ],

    slug: "ananda-crown-mohali"
  },
  {
    id: "f-towers-mohali",
    name: "F-Towers by FashionTV",
    logoimage: "https://reconsultadvisory.com/wp-content/uploads/2024/07/F-Tower-logo-by-Fashion-TV-Property-in-mohali-call-9988091143.png",
    location: "Sector 121, Mohali",
    city: "Mohali",
    type: "Residential",
    status: "Under Construction",
    image: "https://reconsultadvisory.com/wp-content/uploads/2024/07/F-Tower-by-FashionTV-Property-in-mohali-call91-9988091143-elevation6.webp",
    brochure: "https://example.com/f-towers-brochure.pdf",
    developer: "Glenworld Realtors",
    description: "F Towers Mohali brings the glamour of Fashion TV right into your home. This premier residential project is a collaboration between Fashion TV and Glenworld Realtors, offering 3 & 4 BHK luxury apartments with servant quarters. Experience the ultimate living with Fashion TV branded residences, MIVAN construction technology, and world-class amenities across 8 acres with 7 towers.",

    brandFoundation: {
      title: "Join the Fashion TV Lifestyle",
      subtitle: "Where Glamour Meets Modern Living",
      philosophy: "F Towers stands as a testament to luxury and style, combining the sophistication of high fashion with the comfort and convenience of modern urban living. Each residence is crafted with precision, featuring high-end finishes and premium fixtures that reflect the glamour and elegance associated with the Fashion TV brand.",
      keyPrinciples: [
        {
          title: "Fashion TV Branded Residences",
          description: "Elegant and stylish interiors reflecting the glamour of Fashion TV with meticulously designed spaces that exude opulence and sophistication."
        },
        {
          title: "MIVAN Construction Technology",
          description: "Advanced aluminum formwork construction method for stronger, longer-lasting structure with faster construction timelines and reduced maintenance costs."
        },
        {
          title: "World-Class Amenities",
          description: "Exclusive F Clubhouse with F Lounge and F Bar, fitness center, swimming pool, mini golf course, and premium lifestyle facilities."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "F-Towers Facade",
        image: "https://reconsultadvisory.com/wp-content/uploads/2024/07/F-Tower-by-FashionTV-Property-in-mohali-call91-9988091143-elevation1.webp",
        description: "Seven luxury towers with Fashion TV branded architecture"
      },
      {
        id: 2,
        type: "amenity",
        title: "F Clubhouse",
        image: "https://reconsultadvisory.com/wp-content/uploads/2024/07/F-Tower-by-FashionTV-Property-in-mohali-call91-9988091143-elevation2.webp",
        description: "Exclusive F Clubhouse with F Lounge and F Bar"
      },
      {
        id: 3,
        type: "floorplan",
        title: "3 BHK + Servant Layout",
        image: "https://reconsultadvisory.com/wp-content/uploads/2024/07/F-Tower-by-FashionTV-Property-in-mohali-call91-9988091143-elevation4.webp",
        description: "2247 sq ft spacious 3 BHK apartment with servant quarter"
      },
      {
        id: 4,
        type: "floorplan",
        title: "4 BHK + Servant Layout",
        image: "https://reconsultadvisory.com/wp-content/uploads/2024/07/F-Tower-by-FashionTV-Property-in-mohali-call91-9988091143-about.jpg",
        description: "3000 sq ft luxury 4 BHK apartment with servant quarter"
      }
    ],

    amenities: [
      "Fashion TV Branded Residences",
      "Exclusive F Clubhouse with F Lounge & F Bar",
      "Basketball Court",
      "Badminton/Tennis Court",
      "Hi-Tech Gymnasium",
      "CCTV Surveillance System",
      "24x7 Security & Support",
      "Skating Rink",
      "Cycling Track",
      "Indoor Squash Court",
      "Temple",
      "Yoga Center",
      "Spa and Jacuzzi",
      "Rainwater Harvesting",
      "Jogging Track",
      "Terrace Area for Events",
      "Amphitheatre",
      "Open Roof Garden",
      "1100 Basement Car Parking"
    ],

    specifications: {
      developer: "Glenworld Realtors",
      collaboration: "Fashion TV Partnership",
      landParcel: "8 acres",
      towers: 7,
      floors: 25,
      totalUnits: 350,
      configurations: ["3 BHK + Servant", "4 BHK + Servant"],
      sizes: {
        "3 BHK + Servant": "2247 sq ft",
        "4 BHK + Servant": "3000 sq ft"
      },
      construction: "MIVAN Technology",
      parking: "1100 Basement Cars",
      possession: "End of 2027 / Mid-2028",
      approvals: ["RERA Approval Coming Soon"]
    },

    connectivity: [
      "Sector 121, Mohali - Prime Location",
      "0.5 km from Chandigarh",
      "Easy access to key areas in Chandigarh region",
      "Major roads and highways connectivity",
      "Well-connected to essential services",
      "Seamless travel to Mohali and Chandigarh",
      "Close to commercial centers",
      "Near educational institutions"
    ],

    highlights: [
      "Fashion TV Branded Luxury Residences",
      "8 Acres Premium Development",
      "7 Towers with 350 Units",
      "MIVAN Construction Technology",
      "3 & 4 BHK with Servant Quarters",
      "Exclusive F Clubhouse with F Lounge & F Bar",
      "World-Class Amenities & Facilities",
      "Prime Sector 121 Location",
      "0.5 km from Chandigarh",
      "Possession by End 2027"
    ],

    slug: "f-towers-mohali"
  },
  {
    id: "mohali-high-street-114",
    name: "Mohali High Street",
    logoimage: mohalihighstreet,
    location: "Sector 114, Landran Road, Mohali",
    city: "Mohali",
    type: "Commercial",
    status: "Booking Open",
    image: mohalihighstreet,
    brochure: "https://example.com/mohali-high-street-brochure.pdf",
    developer: "Ansal Properties",
    description: "Premium commercial showrooms on prime Landran Road frontage with basement parking, ground floor retail, and upper floors for offices or storage. RERA approved commercial development with double-height showrooms starting from ₹3.5 Crore in the growing commercial hub of Sector 114.",

    brandFoundation: {
      title: "Prime Commercial Property in Mohali",
      subtitle: "RERA Approved Showrooms Starting ₹3.5 Crore",
      philosophy: "Mohali High Street offers premium commercial showrooms strategically located on Landran Road frontage in Sector 114. With basement parking, double-height showrooms, and flexible upper floors, it's designed for retail chains, branded stores, and businesses seeking high-footfall commercial spaces.",
      keyPrinciples: [
        {
          title: "Prime Landran Road Frontage",
          description: "Strategic location on Landran Road with high visibility and footfall in the growing commercial corridor of Sector 114 Ansal."
        },
        {
          title: "Flexible Commercial Spaces",
          description: "Double-height ground floor showrooms with basement parking and upper floors suitable for offices, storage, or additional retail space."
        },
        {
          title: "Investment Ready",
          description: "RERA approved project with flexible payment plans, high rental yields expected, and ready for possession timeline."
        }
      ]
    },

    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Mohali High Street Facade",
        image: mohalihighstreet,
        description: "Premium commercial development on Landran Road frontage"
      },
      {
        id: 2,
        type: "commercial",
        title: "Double Height Showrooms",
        image: mohalihighstreet,
        description: "Ground floor double-height showrooms with basement parking"
      },
      {
        id: 3,
        type: "floorplan",
        title: "₹3.5 Cr Unit Layout",
        image: mohalihighstreet,
        description: "16.6 × 50 ft plot with basement + G + 1 + 2 floors"
      },
      {
        id: 4,
        type: "floorplan",
        title: "₹6.5 Cr Premium Unit",
        image: mohalihighstreet,
        description: "16.6 × 66 ft plot with basement + G + 1 + 2 + 3 floors"
      }
    ],

    amenities: [
      "RERA Approved Commercial Project",
      "Prime Landran Road Frontage",
      "Double-Height Ground Floor Showrooms",
      "Basement + Ground Level Parking",
      "Basement + G + 1 + 2 + 3 Floors",
      "High Footfall Commercial Corridor",
      "Easy Connectivity to Airport & IT City",
      "Suitable for Retail Chains & Branded Stores",
      "Flexible Payment Plans",
      "Ready for Possession Timeline"
    ],

    specifications: {
      developer: "Ansal Properties",
      location: "Sector 114, Landran Road, Mohali",
      totalUnits: 30,
      unitTypes: [
        {
          price: "₹3.5 Crore",
          units: 22,
          plotSize: "16.6 × 50 ft",
          floors: "Basement + G + 1 + 2",
          totalArea: "~3,300 sq ft",
          parking: "Basement + Ground",
          bestFor: "Retail + Small Office"
        },
        {
          price: "₹6.5 Crore",
          units: 8,
          plotSize: "16.6 × 66 ft", 
          floors: "Basement + G + 1 + 2 + 3",
          totalArea: "~5,500 sq ft",
          parking: "Double Basement + Ground",
          bestFor: "Large Retail + Offices"
        }
      ],
      approvals: ["RERA Approved"],
      possession: "Ready for Possession"
    },

    connectivity: [
      "Prime Landran Road frontage location",
      "Growing commercial hub in Sector 114",
      "Easy connectivity to Airport & IT City",
      "High footfall commercial corridor",
      "Close to residential developments",
      "Well-connected to major roads",
      "Strategic location in Ansal Sector 114"
    ],

    highlights: [
      "RERA Approved Commercial Development",
      "Starting from ₹3.5 Crore",
      "30 Units Available",
      "Prime Landran Road Frontage",
      "Double-Height Showrooms with Parking",
      "High Footfall Commercial Corridor",
      "Flexible Payment Plans Available",
      "Ready for Possession",
      "High ROI Investment Opportunity"
    ],

    slug: "mohali-high-street-114"
  },
  {
    id: "slp-moksha-kharar",
    name: "SLP Moksha",
    location: "Kharar-Landran Road, Near Chandigarh University",
    city: "Mohali",
    type: "Residential",
    logoimage: wavegradens3, // Add logo import when available
    image: wavegradensmain, // Add main image import when available
    brochure: wavegradens3, // Add brochure import when available
    status: "Under Construction",
    developer: "SLP Group",
    description:
      "Welcome to SLP Moksha, a premium 18-acre township designed for modern living, located just minutes away from Chandigarh University. Experience a blend of comfort, convenience, and luxury with 2 BHK & 3 BHK high-rise apartments featuring Mivan construction technology.",

    // Brand Foundation Section
    brandFoundation: {
      title: "SLP Moksha",
      subtitle: "Premium 18-Acre Township for Modern Living",
      philosophy:
        "SLP Moksha is designed for modern living with a perfect blend of comfort, convenience, and luxury. Located strategically near Chandigarh University, it offers high-rise apartments with superior Mivan construction technology in a gated township environment with world-class amenities.",
      keyPrinciples: [
        {
          title: "Mivan Construction Technology",
          description:
            "Superior strength, durability, and seamless finish with advanced Mivan construction technology ensuring quality construction and long-lasting structures."
        },
        {
          title: "Strategic Location",
          description:
            "Located just minutes away from Chandigarh University with excellent connectivity to Mohali, Kharar & Chandigarh, making it perfect for families and professionals."
        },
        {
          title: "Premium Township Living",
          description:
            "18-acre gated township with 24×7 security, modern amenities including clubhouse, gym, swimming pool, and landscaped gardens for a complete lifestyle experience."
        },
      ],
    },

    // Gallery Images
    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "SLP Moksha High-Rise Towers",
        image: moksha1, // Add image import when available
        description:
          "18-floor high-rise towers with Mivan construction technology"
      },
      {
        id: 2,
        type: "amenity",
        title: "Clubhouse & Swimming Pool",
        image: moksha2, // Add image import when available
        description:
          "Premium clubhouse with swimming pool and recreational facilities"
      },
      {
        id: 3,
        type: "landscape",
        title: "Landscaped Gardens",
        image: moksha3, // Add image import when available
        description: "Beautifully landscaped gardens and green spaces"
      },
      {
        id: 4,
        type: "amenity",
        title: "Kids Play Area & Gym",
        image: wavegradensmain, // Add image import when available
        description: "Modern gym facilities and dedicated kids play area"
      },
    ],

    amenities: [
      "18-Acre Premium Township",
      "Gated Community with 24×7 Security",
      "Mivan Construction Technology",
      "18-Floor High-Rise Towers",
      "2 BHK & 3 BHK Apartments",
      "Landscaped Gardens",
      "Clubhouse",
      "Swimming Pool",
      "Gymnasium",
      "Kids Play Area",
      "24×7 Security",
      "Modern Amenities",
      "Superior Strength & Durability",
      "Seamless Finish",
      "Near Chandigarh University"
    ],

    specifications: {
      developer: "SLP Group",
      totalArea: "18 Acres",
      projectType: "High-Rise Apartments",
      configuration: "2 BHK & 3 BHK",
      towers: "18 Floors each",
      constructionTechnology: "Mivan Construction Technology",
      security: "Gated Township with 24×7 Security",
      location: "Kharar-Landran Road",
      university: "Near Chandigarh University"
    },

    highlights: [
      "Premium 18-Acre Township",
      "Near Chandigarh University",
      "2 BHK & 3 BHK High-Rise Apartments",
      "18-Floor Towers with Mivan Construction",
      "Gated Township with 24×7 Security",
      "Clubhouse, Swimming Pool & Gym",
      "Landscaped Gardens & Kids Play Area",
      "Superior Strength & Durability",
      "Perfect for Families & Professionals",
      "Excellent Connectivity to Major Cities"
    ],

    connectivity: [
      "Near Chandigarh University",
      "Kharar-Landran Road location",
      "Excellent connectivity to Mohali",
      "Easy access to Kharar",
      "Direct connectivity to Chandigarh",
      "Close to educational institutions",
      "Well-connected road network",
      "Strategic location for professionals"
    ],

    slug: "slp-moksha-kharar",
  },
  {
    id: "luxurio-sukh-plaza",
    name: "Luxurio Sukh Plaza",
    location: "NH-05, Chandigarh-Ludhiana Road, Kharar",
    city: "Mohali",
    type: "Commercial",
    logoimage: "https://newprojects.99acres.com/projects/psp_group/psp_luxurio_sukh_plaza/pdxgpiz_1719309066_500467223.jpg", // Add logo import when available
    image: mainsukh, // Add main image import when available
    brochure: sukhvillasbrochure, // Add brochure import when available
    status: "Under Construction",
    developer: "PSP Group",
    description:
      "A prestigious commercial real estate project that sets a new standard for business success. First commercial project on the Chandigarh-Ludhiana Highway near Chandigarh, offering prime location, innovative design, and versatile spaces for unparalleled growth and prosperity.",

    // Brand Foundation Section
    brandFoundation: {
      title: "Luxurio Sukh Plaza",
      subtitle: "Better Than Expected - Where Shopping & Hospitality Meets the Cosmos of Outlets",
      philosophy:
        "Luxurio Sukh Plaza is not only a shopping destination but a galaxy of outlets offering diverse options to cater to various needs and preferences. Experience the advantage of a bustling neighborhood with constant stream of visitors, shoppers, businessmen, and office-goers for unmatched exposure and footfall.",
      keyPrinciples: [
        {
          title: "Prime Location Advantage",
          description:
            "First commercial project on Chandigarh-Ludhiana Highway near Chandigarh, ensuring maximum visibility, footfall, and accessibility with a steady stream of potential customers."
        },
        {
          title: "Versatile Commercial Spaces",
          description:
            "From corporate offices and showrooms to microbrewery, food courts, gaming arcade, and 3-star hotel space - catering to all business needs in one prestigious destination."
        },
        {
          title: "Investment Excellence",
          description:
            "Spanning across low-rise magnificent floors with 97 showrooms & SOHOs, 235 covered parking slots, and 150 ft wide frontage on National Highway for maximum business opportunities."
        },
      ],
    },

    // Gallery Images
    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "Luxurio Sukh Plaza Facade",
        image: mainsukh1, // Add image import when available
        description:
          "Prestigious commercial destination with iconic design excellence"
      },
      {
        id: 2,
        type: "amenity",
        title: "Food Court & Dining",
        image: mainsukh2, // Add image import when available
        description:
          "Expansive food court with diverse dining options and microbrewery"
      },
      {
        id: 3,
        type: "commercial",
        title: "Showrooms & SOHOs",
        image: mainsukh4, // Add image import when available
        description: "97 showrooms and SOHOs with modern design and versatile spaces"
      },
      {
        id: 4,
        type: "amenity",
        title: "3-Star Hotel Space",
        image: mainsukh3, // Add image import when available
        description: "Dedicated 3-star hotel space with business lounges"
      },
    ],

    amenities: [
      "97 Showrooms & SOHOs",
      "235 Covered Car Parking Slots",
      "150 ft Wide Frontage",
      "Dedicated 3-Star Hotel Space",
      "24×7 Security & Maintenance",
      "National Highway Visibility",
      "Corporate Office Spaces",
      "Microbrewery",
      "Food Court",
      "Kiosks & Drive-Thrus",
      "Hyper Market",
      "Smart Retail",
      "Gaming Arcade",
      "Kids Play Area",
      "Business Lounges",
      "Food & Beverages",
      "Readily Available Customer Base"
    ],

    specifications: {
      developer: "PSP Group",
      projectType: "Commercial Complex",
      totalShowrooms: "97 Showrooms & SOHOs",
      parking: "235 Covered Car Parking Slots",
      frontage: "150 ft Wide",
      location: "NH-05, Chandigarh-Ludhiana Road",
      uniqueFeature: "First Commercial Project on Chandigarh-Ludhiana Highway",
      hotelSpace: "Dedicated 3-Star Hotel Space",
      security: "24×7 Security & Maintenance",
      visibility: "National Highway Visibility"
    },

    highlights: [
      "First Commercial Project on Chandigarh-Ludhiana Highway",
      "Prime Location Near Chandigarh",
      "97 Showrooms & SOHOs",
      "235 Covered Car Parking Slots",
      "150 ft Wide National Highway Frontage",
      "Dedicated 3-Star Hotel Space",
      "Microbrewery & Gaming Arcade",
      "24×7 Security & Maintenance",
      "PSP Group - A Diamond of Trust",
      "Multiple Commercial Spaces Under One Roof"
    ],

    connectivity: [
      "NH-05, Chandigarh-Ludhiana Road, Kharar",
      "Chandigarh University: 2 mins",
      "Kharar Bus Stand: 2 mins", 
      "Rayat Bahra: 5 mins",
      "Railway Station Mohali: 20 mins",
      "Cricket Stadium Mohali: 20 mins",
      "International Airport: 25 mins",
      "Direct National Highway connectivity",
      "High visibility location with maximum footfall"
    ],

    slug: "luxurio-sukh-plaza",
  },
{
  id: "atlantis360-mohali",
  name: "Atlantis360",
  location: "PR7 Airport Road, Mohali",
  city: "Mohali",
  type: "Residential",
  logoimage: atlantis360logo, // Replace with actual logo import
  status: "Under Construction",
  image: atlantis360image, // Replace with actual image import
  brochure: atlantis360brochure, // Replace with actual brochure import

  description:
    "Atlantis360 by Atlantis Group offers premium high-rise luxury apartments on PR7 Airport Road, Mohali. Spread across 4.75 acres with 5 towers housing 176 spacious units, this RERA-approved project features 3BHK and 4BHK residences with exclusive amenities including personal lifts, wraparound balconies, and mountain-facing views. Built with advanced MIVAN construction technology, it's a self-financed, debt-free project offering world-class living with seamless connectivity to Punjab, Chandigarh, Himachal, Haryana, and Delhi.",

  brandFoundation: {
    title: "High-Rise Luxury on Airport Road",
    subtitle: "Exclusive Living with Mountain Views",
    philosophy:
      "Atlantis360 redefines luxury living in Mohali with spacious high-rise apartments designed for privacy and exclusivity. With only 2 flats per floor, personal lifts in every home, and panoramic mountain views, this project combines contemporary architecture with premium lifestyle amenities on the 200-ft wide Airport Road.",
    keyPrinciples: [
      {
        title: "Exclusive Privacy",
        description:
          "Only 2 spacious apartments per floor with private lifts in each unit, ensuring complete privacy and personalized living experience across 5 elegant towers.",
      },
      {
        title: "Prime Location",
        description:
          "Strategically located on 200-ft wide PR7 Airport Road with exceptional connectivity to Punjab, Chandigarh, Himachal Pradesh, Haryana, and Delhi.",
      },
      {
        title: "Premium Construction",
        description:
          "Advanced MIVAN construction technology ensuring superior quality, durability, and faster completion. Self-financed, debt-free project by Atlantis Group.",
      },
    ],
  },

  gallery: [
    {
      id: 1,
      type: "exterior",
      title: "Tower Elevation",
      image: atlantis3601, // Replace with actual image URL
      description:
        "Modern high-rise towers (B+S+15-16-22) with contemporary architecture on Airport Road",
    },
    {
      id: 2,
      type: "amenity",
      title: "Clubhouse & Recreation",
      image: atlantis3602, // Replace with actual image URL
      description: "State-of-the-art clubhouse with 15+ leisure activities and swimming pool",
    },
    {
      id: 3,
      type: "amenity",
      title: "Mountain View",
      image: atlantis3603, // Replace with actual image URL
      description: "Breathtaking mountain-facing views with wraparound balconies",
    },
  ],

  amenities: [
    "15+ Leisure Activities in Premium Clubhouse",
    "Swimming Pool with Deck",
    "Personal Lift in Every Apartment",
    "Wraparound Balconies",
    "Landscaped Green Parks",
    "MIVAN Construction Technology",
    "24/7 Security with CCTV",
    "Power Backup",
    "Covered Parking",
    "Children's Play Area",
    "Jogging Track",
    "Indoor Games Room",
    "Gymnasium & Fitness Center",
    "Multi-purpose Hall",
  ],

  specifications: {
    structure: "5 High-Rise Towers (B+S+15-16-22 Floors)",
    units: "176 Luxury Apartments - 3BHK, 3+1BHK & 4+1BHK",
    townshipSize: "4.75 Acres",
    possession: "1st Tower Ready - Possession in 2 Years",
    approvals: ["RERA Approved", "Self-Financed & Debt-Free Project"],
    apartmentSizes: [
      "3BHK - 2325 sq ft approx",
      "3+1BHK - 2600 sq ft approx",
      "3+1BHK - 2660 sq ft approx",
      "4+1BHK - 3204 sq ft approx",
    ],
    exclusiveFeatures: [
      "Only 2 Flats Per Floor",
      "Private Lift in Each Apartment",
      "Wraparound Balconies",
      "Mountain Facing Views",
      "Park Facing Units",
    ],
  },

  connectivity: [
    "Located on 200 ft Wide PR7 Airport Road",
    "Chandigarh International Airport - 15 mins",
    "Chandigarh City Center - 20 mins",
    "Panchkula - 25 mins",
    "Multi-connectivity to Punjab, Himachal Pradesh & Haryana",
    "Easy Access to Delhi via National Highway",
    "Schools & Hospitals - Within 10 mins",
    "Shopping Malls & Markets - Nearby",
  ],

  highlights: [
    "RERA-approved luxury high-rise project",
    "4.75 acres with 5 towers and 176 units",
    "Only 2 exclusive apartments per floor",
    "Personal lift in every flat",
    "Wraparound balconies with mountain views",
    "Advanced MIVAN construction",
    "15+ leisure activities in clubhouse",
    "Self-financed & debt-free project",
    "1st tower ready for possession",
    "Flexible payment plans available",
  ],

  // paymentPlan: {
  //   options: [
  //     {
  //       plan: "Construction Linked",
  //       details: "25% in 4 quarterly installments",
  //     },
  //     {
  //       plan: "Easy Payment",
  //       details: "40% now, 60% on possession (after 2 years)",
  //     },
  //   ],
  // },

  slug: "atlantis360-mohali-airport-road",
},
  {
    id: "kayra-homes-sector-125",
    name: "Kayra Homes",
    location: "Sector 125, Sunny Enclave, Mohali",
    city: "Mohali",
    type: "Residential",
    logoimage: kayra2,
    image: kayra4, 
    brochure: "",
    status: "Ready to Move",
    developer: "Kayra Homes",
    description:
      "Kayra Homes presents fully furnished 4BHK kothi in Sector 125 Sunny Enclave Mohali on 118 sq yards. These ready-to-move 4BHK independent houses in Mohali come completely furnished with bed, sofa, chimney, RO, geyser, false ceiling, premium lights, and complete sanitary fittings. Perfect for families seeking 4BHK kothi for sale in Sunny Enclave Mohali with modern amenities and immediate possession. Prices starting from ₹1.45 Crore for these luxury 4BHK villas in Mohali.",

    // Brand Foundation Section
    brandFoundation: {
      title: "Fully Furnished 4BHK Kothi in Sector 125 Sunny Enclave Mohali",
      subtitle: "Ready-to-Move Independent Houses Starting ₹1.45 Cr",
      philosophy:
        "Kayra Homes offers premium 4BHK kothi in Sunny Enclave Mohali, designed for modern families seeking ready-to-move independent houses. Each 118 sq yard villa comes fully furnished with high-end furniture, appliances, and fittings, providing hassle-free immediate possession in Sector 125 Mohali.",
      keyPrinciples: [
        {
          title: "Fully Furnished 4BHK Kothi - Move-in Ready",
          description:
            "Each 4BHK independent house in Mohali comes completely furnished with premium bed, sofa, modular kitchen with chimney, RO water purifier, geyser, false ceiling, designer lights, and complete sanitary fittings for immediate occupancy."
        },
        {
          title: "Prime Location - Sector 125 Sunny Enclave Mohali",
          description:
            "Strategically located 4BHK kothi for sale in Sunny Enclave Mohali with excellent connectivity to Chandigarh, schools, hospitals, and shopping centers. Ideal for families seeking independent houses in Mohali."
        },
        {
          title: "118 Sq Yards - Spacious 4BHK Villas",
          description:
            "Premium 4BHK kothi on 118 sq yards plot offering spacious living areas, modern architecture, and complete privacy. Best value for 4BHK independent houses in Mohali at ₹1.45 Crore onwards."
        },
      ],
    },

    // Gallery Images
    gallery: [
      {
        id: 1,
        type: "exterior",
        title: "4BHK Kothi Exterior - Sunny Enclave",
        image: kayra2, // Add image import when available
        description:
          "Modern 4BHK independent house in Sector 125 Sunny Enclave Mohali with contemporary architecture"
      },
      {
        id: 2,
        type: "interior",
        title: "Fully Furnished Living Room",
        image: kayra3, // Add image import when available
        description:
          "Luxurious fully furnished 4BHK kothi with premium sofa, false ceiling, and designer lighting"
      },
      {
        id: 3,
        type: "interior",
        title: "Modern Modular Kitchen",
        image: kayra4, // Add image import when available
        description: "Fully equipped modular kitchen with chimney, RO, and premium fittings in 4BHK villa Mohali"
      },
     
    ],

    amenities: [
      "Fully Furnished 4BHK Kothi",
      "118 Sq Yards Plot Area",
      "Premium Bed & Wardrobes",
      "Luxury Sofa Set",
      "Modular Kitchen with Chimney",
      "RO Water Purifier",
      "Geyser in All Bathrooms",
      "False Ceiling Throughout",
      "Designer LED Lights",
      "Complete Sanitary Fittings",
      "Premium Flooring",
      "Car Parking",
      "Gated Community",
      "24×7 Security",
      "Power Backup",
      "Ready to Move"
    ],

    specifications: {
      developer: "Kayra Homes",
      propertyType: "4BHK Kothi / Independent House",
      plotSize: "118 Sq Yards",
      configuration: "4BHK Fully Furnished",
      location: "Sector 125, Sunny Enclave, Mohali",
      priceRange: "Starting ₹1.45 Crore",
      furnishing: "Fully Furnished (Bed, Sofa, Chimney, RO, Geyser, etc.)",
      possession: "Ready to Move - Immediate Possession",
      features: "False Ceiling, Designer Lights, Complete Sanitary Fittings",
      community: "Gated Society with 24×7 Security"
    },

    highlights: [
      "4BHK Kothi in Sector 125 Sunny Enclave Mohali - Ready to Move",
      "Fully Furnished Independent House - ₹1.45 Cr Onwards",
      "118 Sq Yards - Spacious 4BHK Villa in Mohali",
      "Complete Furnishing: Bed, Sofa, Chimney, RO, Geyser",
      "False Ceiling & Designer Lights Throughout",
      "Premium Sanitary Fittings & Modular Kitchen",
      "4BHK Kothi for Sale in Sunny Enclave Mohali",
      "Immediate Possession - Move-in Ready",
      "Gated Community with 24×7 Security",
      "Prime Location in Sector 125 Mohali"
    ],

    connectivity: [
      "Located in Sector 125, Sunny Enclave, Mohali",
      "Easy access to Chandigarh city center",
      "Close to top schools and educational institutions",
      "Nearby hospitals and medical facilities",
      "Shopping malls and markets within reach",
      "Well-connected to Airport Road",
      "Proximity to IT parks and business hubs",
      "Public transport readily available",
      "Excellent road connectivity to Panchkula and Zirakpur"
    ],

    slug: "kayra-homes-sector-125-sunny-enclave",
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
