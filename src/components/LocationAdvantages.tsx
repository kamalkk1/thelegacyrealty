import { motion } from 'framer-motion';
import { MapPin, Building, Car, TrendingUp } from 'lucide-react';
import bgImage from '../assets/bg-highstreet.webp'; // ✅ import your image

const LocationAdvantages = () => {
  const advantages = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Landran Road Frontage, Sector 114 Ansal",
      color: "text-blue-500"
    },
    {
      icon: Building,
      title: "Double Height",
      description: "Ground Floor Double-Height Showrooms",
      color: "text-green-500"
    },
    {
      icon: Car,
      title: "Ample Parking",
      description: "Basement + Ground Level Parking",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "High ROI",
      description: "Commercial Corridor with High Footfall",
      color: "text-primary"
    }
  ];

  const benefits = [
    "RERA approved commercial development",
    "Prime Landran Road frontage location",
    "Growing commercial hub in Sector 114",
    "Easy connectivity to Airport & IT City",
    "Suitable for retail chains & branded stores",
    "High rental yields expected",
    "Flexible payment plans available",
    "Ready for possession timeline"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      className="relative py-26 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ✅ optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative container mx-auto px-4 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 font-poiret"
        >
          Prime Commercial Property in Mohali for Investors & Retailers
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div
                  className={`${advantage.color} bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">{advantage.title}</h4>
                <p className="text-gray-200">{advantage.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-6 text-center text-white">
            Why Invest in Mohali High Street?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-green-400 text-lg">✅</span>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationAdvantages;
