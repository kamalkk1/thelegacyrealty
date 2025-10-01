// components/BrochureModal.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { X, Download, User, Phone, Mail, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Project } from "../context/ProjectContext";

interface BrochureModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  phone: string;
  email?: string;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ project, isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsDownloading(true);

    try {
      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email || "Not Provided",
          project: project.name,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Trigger brochure download
      if (project.brochure) {
        const link = document.createElement("a");
        link.href = project.brochure;
        link.download = `${project.name}-Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setSubmitted(true); // show thank you screen
      reset(); // reset form
    } catch (err) {
      console.error("EmailJS Error:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Conditional Content */}
            {!submitted ? (
              <>
                {/* Header */}
                <div className="bg-gradient-to-r from-foreground to-secondary p-6 text-white rounded-t-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Download Brochure</h2>
                      <p className="text-white/90 text-sm">{project.name}</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Get detailed information about amenities, floor plans, pricing, and more.
                  </p>
                </div>

                {/* Form */}
                <div className="p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" /> Full Name
                      </Label>
                      <Input
                        id="name"
                        {...register("name", { required: true })}
                        placeholder="Enter your full name"
                        className="mt-1 text-secondary"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" /> Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone", { required: true })}
                        placeholder="+91 98882 47787"
                        className="mt-1 text-secondary"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Email Address (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        className="mt-1 text-secondary"
                      />
                    </div>

                    {/* Actions */}
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
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" /> Download Now
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={onClose}
                        disabled={isDownloading}
                        className="bg-secondary"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              // ✅ Thank You Animation
              <div className="flex flex-col items-center justify-center p-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-green-100 rounded-full p-6 mb-4"
                >
                  <CheckCircle className="w-12 h-12 text-foreground-600" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-semibold text-gray-800"
                >
                  Thank You!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-500 mt-2"
                >
                  Your request has been received. The brochure is downloading! Our Experts will contact you soon...
                </motion.p>
                <Button onClick={onClose} className="mt-6 bg-foreground text-secondary">
                  Close
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochureModal;
