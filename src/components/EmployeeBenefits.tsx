// components/sections/EmployeeBenefits.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, DollarSign, Stethoscope, GraduationCap, Calendar, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EmployeeBenefits: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: Stethoscope,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and your family'
    },
    {
      icon: Shield,
      title: 'Insurance Benefits',
      description: 'Life and accidental insurance for peace of mind'
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Regular upskilling and professional development workshops'
    },
    {
      icon: Calendar,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling options'
    },
    {
      icon: Gift,
      title: 'Employee Perks',
      description: 'Festival bonuses, team outings, and celebration events'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Employee Benefits & Perks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We invest in our people with comprehensive benefits packages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployeeBenefits;
