// components/BrochureModal.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, User, Phone, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Project } from '../context/ProjectContext';

interface BrochureModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ project, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Handle form submission here
      console.log('Brochure download request:', { project: project.name, ...formData });
      
      // Trigger download
      if (project.brochure) {
        const link = document.createElement('a');
        link.href = project.brochure;
        link.download = `${project.name}-Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      setIsDownloading(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
        <div>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-foreground to-secondary p-6 text-white rounded-t-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-poppins">Download Brochure</h2>
                    <p className="text-white/90 text-sm">{project.name}</p>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm">
                  Get detailed information about amenities, floor plans, pricing, and more.
                </p>
              </div>

              {/* Content */}
              <div className="p-3">
                <form onSubmit={handleSubmit} className="space-y-1">
                    <div className="flex gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={isDownloading}
                      className="flex-1 bg-foreground hover:bg-secondary text-white font-semibold"
                    >
                      {isDownloading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Download Now
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      disabled={isDownloading}
                      className='bg-secondary'
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Label htmlFor="brochure-name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="brochure-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="brochure-phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="brochure-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98xxx xxxxx"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="brochure-email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="brochure-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      What you'll get in the brochure:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Detailed floor plans and layouts</li>
                      <li>• Complete amenities list</li>
                      <li>• Pricing and payment plans</li>
                      <li>• Location advantages</li>
                    </ul>
                  </div>

                  
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}</div>
    </AnimatePresence>
  );
};

export default BrochureModal;
