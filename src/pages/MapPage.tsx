import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BrochureForm from "@/components/BrochureForm";

interface MapData {
  title: string;
  image: string;
  brochure: string;
}

const mapsData: MapData[] = [
  {
    title: "Tricity Master Plan",
    image: "/maps/tricity-plan.jpg",
    brochure: "/brochures/tricity-plan.pdf",
  },
  {
    title: "Mohali Sector 100 Map",
    image: "/maps/mohali-sector-100.jpg",
    brochure: "/brochures/mohali-sector-100.pdf",
  },
  {
    title: "Mohali Sector 104 Map",
    image: "/maps/mohali-sector-104.jpg",
    brochure: "/brochures/mohali-sector-104.pdf",
  },
  {
    title: "Chandigarh Sectors Map",
    image: "/maps/chandigarh-sectors.jpg",
    brochure: "/brochures/chandigarh-sectors.pdf",
  },
  {
    title: "GMADA Master Plan",
    image: "/maps/gmada-plan.jpg",
    brochure: "/brochures/gmada-plan.pdf",
  },
  {
    title: "SAS Nagar City Map",
    image: "/maps/sas-nagar-map.jpg",
    brochure: "/brochures/sas-nagar-map.pdf",
  },
  {
    title: "Zirakpur Development Map",
    image: "/maps/zirakpur-map.jpg",
    brochure: "/brochures/zirakpur-map.pdf",
  },
  {
    title: "Aerocity Layout Plan",
    image: "/maps/aerocity-plan.jpg",
    brochure: "/brochures/aerocity-plan.pdf",
  },
];

const MapPage: React.FC = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [selectedMap, setSelectedMap] = useState<MapData | null>(null);

  const handleDownloadClick = (map: MapData) => {
    setSelectedMap(map);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-foreground to-secondary/80 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our City Maps & Master Plans</h1>
        <p className="max-w-2xl mx-auto text-lg text-white/80">
          Download detailed sector maps and development plans of Tricity, Mohali, Chandigarh, and more.
        </p>
      </section>

      {/* Maps Grid */}
      <section className="max-w-7xl relative before:absolute before:inset-0 before:bg-white before:-z-[1] mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mapsData.map((map, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <img
              src={map.image}
              alt={map.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">{map.title}</h3>
              <Button
                onClick={() => handleDownloadClick(map)}
                className="bg-foreground hover:bg-secondary text-white font-medium"
              >
                Download PDF
              </Button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Form Section */}
      <div ref={formRef}>
        <BrochureForm selectedMap={selectedMap} />
      </div>
    </div>
  );
};

export default MapPage;
