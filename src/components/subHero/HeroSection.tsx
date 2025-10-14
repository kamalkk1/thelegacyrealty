// components/sections/HeroSection.tsx
import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Download } from 'lucide-react';
import { Button } from '../../components/ui/button';
import bgImage from '../../assets/mohali-highstreet.webp';
import LeadForm from '../LeadForm';

const HeroSection = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
<section
  className="relative text-white py-16 pt-28 overflow-hidden bg-no-repeat bg-[length:100%] animate-move-bg"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-slate-500/20 to-slate-400/40"></div>

  <div className="relative container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.span 
                variants={fadeIn}
                className="inline-block text-secondary  bg-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                🏢 RERA APPROVED COMMERCIAL PROJECT
              </motion.span>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl lg:text-5xl font-bold leading-tight mb-6 font-poiret"
              >
                Commercial Property for Sale in 
                <span className="text-primary"> Mohali High Street</span><br/>
                <span className="text-2xl lg:text-3xl font-medium text-primary">
                  Sector 114 Landran Road
                </span>
              </motion.h1>
              
              <motion.div 
                variants={fadeIn}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-primary">₹3.5 Cr</h3>
                  <p className="text-sm text-secondary">Starting Price</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-primary">30 Units</h3>
                  <p className="text-sm text-secondary">Available</p>
                </div>
              </motion.div>
              
              <motion.ul 
                variants={fadeIn}
                className="space-y-3 mb-8"
              >
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span>Prime Landran Road Frontage</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span>Basement + G + 1 + 2 + 3 Floors</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span>Double-Height Showrooms with Parking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span>High Footfall Commercial Corridor</span>
                </li>
              </motion.ul>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild className="bg-primary hover:bg-primary/90 text-secondary px-8 py-3 text-lg">
                  <a href="tel:+919888247787">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +91-9888247787
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-secondary hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
                  onClick={() => setShowLeadForm(true)}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Brochure
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right Lead Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } } }}
              className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl text-secondary font-bold mb-6 text-center font-poiret">
                Get Best Price & Floor Plans
              </h3>
              
              <LeadForm 
                source="Hero Section"
                ctaText="💼 Get Detailed Information"
              />
              
              <p className="text-center text-sm text-gray-600 mt-4">
                <span className="text-primary">⚡</span> Instant Response | 
                <span className="text-primary"> 📱</span> WhatsApp Updates | 
                <span className="text-primary"> 🔒</span> 100% Confidential
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Download Project Brochure</h3>
            <LeadForm 
              source="Hero CTA"
              ctaText="📥 Download Now"
              onClose={() => setShowLeadForm(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
