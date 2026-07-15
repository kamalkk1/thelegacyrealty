// components/sections/ProjectOverview.tsx

import { motion } from 'framer-motion';
import { Building, Download } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useScrollToForm } from '../pages/MohaliHghStreetLanding';

const ProjectOverview = () => {
  const { scrollToForm } = useScrollToForm();
  const pricingOptions = [
    {
      title: "16.6 × 66 ft",
      subtitle: "Premium frontage inventory",
      pricing: [
        ["Ground + Basement", "₹3.30 Cr"],
        ["First Floor", "₹1.65 Cr"],
        ["Second Floor", "₹1.40 Cr"],
        ["Third Floor", "₹1.15 Cr"],
      ],
    },
    {
      title: "16.6 × 50 ft",
      subtitle: "Flexible retail and office format",
      pricing: [
        ["Ground + Basement", "₹2.00 Cr"],
        ["First Floor", "₹1.20 Cr"],
        ["Second Floor", "₹0.95 Cr"],
        ["Third Floor", "₹0.85 Cr"],
      ],
    },
    {
      title: "14 × 40 ft",
      subtitle: "Compact full-stack commercial unit",
      pricing: [["Basement + Ground + First", "₹2.50 Cr"]],
    },
  ];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12 "
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 ">
            Commercial Floors Starting ₹0.85 Crore
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium commercial pricing on Landran Road frontage with floor-wise rates across
            three inventory formats and a construction-linked payment plan.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12 ">
          {pricingOptions.map((option) => (
            <motion.div
              key={option.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ ...fadeInUp }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 ">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-8 h-8 text-secondary" />
                    <div>
                      <h3 className="text-2xl font-bold text-secondary ">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-500">{option.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {option.pricing.map(([floor, price]) => (
                      <div key={floor} className="flex justify-between gap-4">
                        <span className="font-medium">{floor}</span>
                        <span className="text-secondary font-semibold">{price}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToForm}
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Get Brochure & Floor Plans
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="shadow-lg relative before:absolute before:inset-0 before:bg-white before:-z-[1]">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-secondary mb-6">
              Construction-Linked Payment Plan
            </h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                ["Booking", "10%"],
                ["Within 30 Days", "15%"],
                ["Layout / Plan Approval", "25%"],
                ["Super Structure", "25%"],
                ["Possession", "25%"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500 mb-1">{label}</p>
                  <p className="text-xl font-bold text-secondary">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectOverview;
