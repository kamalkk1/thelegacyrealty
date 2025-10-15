// components/sections/ProjectOverview.tsx

import { motion } from 'framer-motion';
import { Building, Download } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useScrollToForm } from '../pages/MohaliHghStreetLanding';

const ProjectOverview = () => {
  const { scrollToForm } = useScrollToForm();
  
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
            RERA Approved Showrooms Starting ₹3.5 Crore
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium commercial showrooms on prime Landran Road frontage with basement parking, 
            ground floor retail, and upper floors for offices or storage.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12 ">
          {/* Option 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ ...fadeInUp}}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 ">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-bold text-secondary ">
                    ₹3.5 Cr Showrooms
                  </h3>
                  <span className="bg-primary/10 text-secondary px-2 py-1 rounded-full text-sm">
                    22 Units
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Plot Size:</span>
                    <span>16.6 × 50 ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Floors:</span>
                    <span>Basement + G + 1 + 2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total Area:</span>
                    <span>~3,300 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Parking:</span>
                    <span>Basement + Ground</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Best For:</span>
                    <span className="text-secondary font-medium">Retail + Small Office</span>
                  </div>
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
          
          {/* Option 2 - Premium */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ ...fadeInUp  }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border-2 border-primary relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                PREMIUM
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-bold text-secondary">
                    ₹6.5 Cr Showrooms
                  </h3>
                  <span className="bg-primary/10 text-secondary px-2 py-1 rounded-full text-sm">
                    8 Units
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Plot Size:</span>
                    <span>16.6 × 66 ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Floors:</span>
                    <span>Basement + G + 1 + 2 + 3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total Area:</span>
                    <span>~5,500 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Parking:</span>
                    <span>Double Basement + Ground</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Best For:</span>
                    <span className="text-secondary font-medium">Large Retail + Offices</span>
                  </div>
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
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
