import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { User, Phone, Mail, Download, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormValues {
  name: string;
  phone: string;
  email?: string;
}

interface BrochureFormProps {
  selectedMap: {
    title: string;
    brochure: string;
  } | null;
}

const BrochureForm: React.FC<BrochureFormProps> = ({ selectedMap }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentMap, setCurrentMap] = useState(selectedMap);

  const { register, handleSubmit, reset } = useForm<FormValues>();

  useEffect(() => {
    if (selectedMap) {
      setCurrentMap(selectedMap);
      setSubmitted(false); // reset thank you state when user picks new map
    }
  }, [selectedMap]);

  const onSubmit = async (data: FormValues) => {
    if (!currentMap) return;

    setIsProcessing(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email || "Not Provided",
          map_name: currentMap.title,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Trigger dynamic PDF download
      const link = document.createElement("a");
      link.href = currentMap.brochure;
      link.download = `${currentMap.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("Error sending email:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white relative before:absolute before:inset-0 before:bg-white before:-z-[1] py-16 px-6 shadow-inner border-t border-gray-200">
      {!submitted ? (
        <>
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-3">
              <FileText className="w-6 h-6 text-foreground" />
              <h2 className="text-2xl font-semibold text-gray-800">
                {currentMap ? `Download ${currentMap.title}` : "Download Your Map"}
              </h2>
            </div>
            <p className="text-gray-500">
              Fill out your details to get instant access to the selected map PDF.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto grid grid-cols-1 gap-4"
          >
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                <User className="w-4 h-4" /> Full Name
              </Label>
              <Input
                id="name"
                {...register("name", { required: true })}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" /> Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone", { required: true })}
                placeholder="+91 98765 43210"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4" /> Email (Optional)
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="mt-1"
              />
            </div>

            <Button
              type="submit"
              disabled={isProcessing}
              className="bg-foreground hover:bg-secondary text-white mt-4"
            >
              {isProcessing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" /> Download Now
                </>
              )}
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-green-100 rounded-full p-5 mx-auto mb-4 w-16 h-16 flex items-center justify-center"
          >
            <CheckCircle className="w-10 h-10 text-foreground" />
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-800">Thank You!</h3>
          <p className="text-gray-600 mt-2">
            The {currentMap?.title} is downloading! Our team will reach out if you need more details.
          </p>
        </div>
      )}
    </div>
  );
};

export default BrochureForm;
