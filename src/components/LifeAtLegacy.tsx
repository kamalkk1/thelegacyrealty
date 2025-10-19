// components/sections/LifeAtLegacy.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, PartyPopper, Award } from 'lucide-react';

const LifeAtLegacy: React.FC = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      title: 'Team Collaboration',
      icon: Users
    },
    {
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      title: 'Office Culture',
      icon: Coffee
    },
    {
      url: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80',
      title: 'Team Celebrations',
      icon: PartyPopper
    },
    {
      url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      title: 'Achievement Recognition',
      icon: Award
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Life at Legacy Realty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our vibrant workplace culture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => {
            const IconComponent = image.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer h-64"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <IconComponent className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LifeAtLegacy;
