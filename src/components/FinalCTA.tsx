// components/sections/FinalCTA.tsx
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useScrollToForm } from '../pages/MohaliHghStreetLanding';

const FinalCTA = () => {
  const { scrollToForm } = useScrollToForm();

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Book Your Showroom Today - Limited Units Left!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Don't miss this prime commercial investment opportunity in Mohali's fastest growing area. 
              Secure your investment with RERA approved showrooms.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-gray-100 px-8 py-4 text-lg">
              <a href="tel:+919695798957">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91-9695798957
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-secondary hover:bg-white hover:text-secondary px-8 py-4 text-lg"
              onClick={scrollToForm}
            >
              <Download className="w-5 h-5 mr-2" />
              Get Brochure & Floor Plans
            </Button>
            
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 px-8 py-4 text-lg">
              <a href="https://wa.me/919695798957" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm opacity-75"
          >
            The Legacy Realty - Your Trusted Commercial Property Partner in Mohali
          </motion.p>
        </div>
      </section>
  );
};

export default FinalCTA;
