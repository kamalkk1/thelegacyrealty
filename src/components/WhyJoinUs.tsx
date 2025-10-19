// components/sections/WhyJoinUs.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Award, Heart, Target, Lightbulb } from 'lucide-react';

const WhyJoinUs: React.FC = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths with regular performance reviews and promotions',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Performance-based incentives, awards, and recognition programs',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with passionate professionals in a supportive team environment',
      color: 'text-green-500'
    },
    {
      icon: Lightbulb,
      title: 'Learning & Development',
      description: 'Regular training programs, workshops, and skill development opportunities',
      color: 'text-purple-500'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and employee wellness programs',
      color: 'text-red-500'
    },
    {
      icon: Target,
      title: 'Impactful Work',
      description: 'Help families find their dream homes and make a real difference',
      color: 'text-primary'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Join Legacy Realty?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of a team that values excellence, innovation, and people
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className={`${reason.color} bg-gray-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7 bg-accent-foreground rounded-md" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
