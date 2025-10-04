// components/CTAPopup.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { X, Home, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormValues {
  name: string;
  phone: string;
  email?: string;
}

const CTAPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormValues>();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("legacy-realty-popup-seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("legacy-realty-popup-seen", "true");
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email || "Not Provided",
          source: "CTA Popup",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="relative bg-gradient-to-r from-secondary to-secondary p-6 text-white rounded-t-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Home className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-poppins">
                        Welcome to The Legacy Realty
                      </h2>
                      <p className="text-white/90 text-sm">Your Dream Home Awaits</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 font-inter">
                    Get exclusive access to premium properties in Mohali,
                    Chandigarh, and New Chandigarh. Let our experts help you find
                    your perfect home.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        {...register("name", { required: true })}
                        placeholder="Enter your name"
                        required
                        className="mt-1 text-secondary"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone", { required: true })}
                        placeholder="+91 98882 47787"
                        required
                        className="mt-1 text-secondary"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        className="mt-1 text-secondary"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-secondary hover:bg-foreground/90 text-white font-semibold"
                      >
                        {loading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Phone className="w-4 h-4 mr-2" />
                            Get Call Back
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleClose}
                        className="px-6"
                      >
                        Later
                      </Button>
                    </div>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <span>info.thelegacyrealty@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        <span>
                          +91 98882 47787 , +91 94639 00803
                        </span>
                      </div>
                    </div>
                  </div>
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
                  <CheckCircle className="w-12 h-12 text-green-600" />
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
                  Our team will reach out to you shortly.
                </motion.p>
                <Button onClick={handleClose} className="mt-6 bg-foreground text-white">
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

export default CTAPopup;
