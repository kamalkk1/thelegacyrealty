import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BrochureForm from "@/components/BrochureForm";
import { MapPin, Download, FileText } from "lucide-react";
import tricity from "../assets/citymaps/TRICITYPLAN.pdf";
import marketing from "../assets/citymaps/MARKETING.pdf";
import aerocity from "../assets/citymaps/sasnagar.pdf";
import gmada from "../assets/citymaps/gmadamasterplan.pdf";
import chandigarh from "../assets/citymaps/ChandigarHSectorsMap.pdf";

interface MapData {
  title: string;
  image: string;
  brochure: string;
  description?: string;
}

const mapsData: MapData[] = [
  {
    title: "Tricity Master Plan",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    brochure: tricity,
    description: "Complete master plan of Chandigarh Tricity region"
  },
  {
    title: "Mohali Sector 100 Map",
    image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=800&q=80",
    brochure: marketing,
    description: "Detailed sector map with commercial zones"
  },
  {
    title: "Mohali Sector 104 Map",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    brochure: marketing,
    description: "Residential and IT park development layout"
  },
  {
    title: "Chandigarh Sectors Map",
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80",
    brochure: chandigarh,
    description: "Official Chandigarh city sector layout"
  },
  {
    title: "GMADA Master Plan",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    brochure: gmada,
    description: "Greater Mohali Area Development Authority plan"
  },
  {
    title: "SAS Nagar City Map",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&q=80",
    brochure: aerocity,
    description: "Complete SAS Nagar municipal area map"
  },
  {
    title: "Zirakpur Development Map",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=80",
    brochure: aerocity,
    description: "Urban development zones and connectivity"
  },
  {
    title: "Aerocity Layout Plan",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    brochure: aerocity,
    description: "Airport proximity commercial hub layout"
  },
];

const MapPage: React.FC = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [selectedMap, setSelectedMap] = useState<MapData | null>(null);

  const handleDownloadClick = (map: MapData) => {
    setSelectedMap(map);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      // Highlight the form briefly
      setTimeout(() => {
        formRef.current?.classList.add('ring-4', 'ring-primary/50', 'ring-offset-4');
        setTimeout(() => {
          formRef.current?.classList.remove('ring-4', 'ring-primary/50', 'ring-offset-4');
        }, 2000);
      }, 500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-foreground to-secondary/80 text-white py-20 px-6 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            Free Download Available
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Explore Our City Maps & <span className="text-primary">Master Plans</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
            Download detailed sector maps and development plans of Tricity, Mohali, Chandigarh, and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-5 h-5 text-primary" />
              <span>High Resolution PDFs</span>
            </div>
            <div className="hidden sm:block text-white/40">|</div>
            <div className="flex items-center gap-2 text-sm">
              <Download className="w-5 h-5 text-primary" />
              <span>Instant Download</span>
            </div>
            <div className="hidden sm:block text-white/40">|</div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Updated 2025</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Maps Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {mapsData.map((map, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={map.image}
                  alt={map.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Icon */}
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={() => handleDownloadClick(map)}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-secondary transition-colors">
                  {map.title}
                </h3>
                {map.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {map.description}
                  </p>
                )}
                <Button
                  onClick={() => handleDownloadClick(map)}
                  className="w-full bg-foreground hover:bg-secondary text-white font-medium group-hover:bg-secondary transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">8+</div>
              <div className="text-sm text-gray-600">Available Maps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">2025</div>
              <div className="text-sm text-gray-600">Updated Data</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">HD</div>
              <div className="text-sm text-gray-600">Quality PDFs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Free</div>
              <div className="text-sm text-gray-600">Download</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div ref={formRef} className="transition-all duration-500">
        <BrochureForm selectedMap={selectedMap} />
      </div>
    </div>
  );
};

export default MapPage;
