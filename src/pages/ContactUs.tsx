
import { motion,type Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  phone: string;
  email?: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          message: data.message,
          source: "Contact Us Page",
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
    const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-bold mb-6 font-poiret flex justify-between gap-8 flex-wrap"
            >
              Contact Us
              
              
            </motion.h1>

           
          </motion.div>
        </div>
      </section>

      {/* Location + Form */}
      <section className="container mx-auto py-12 px-4 grid md:grid-cols-2 gap-8">
        {/* Map + Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Where to <span className="text-foreground">Find Us</span>
          </h2>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.6823402822542!2d76.6810989!3d30.727329499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefcac86cdadb%3A0xf9515c632247610b!2sThe%20Legacy%20Realty!5e0!3m2!1sen!2sin!4v1758900467346!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              <strong>Call:</strong> +91 98882 47787{" "}
            </p>
            <p>
              <strong>Write:</strong> info.thelegacyrealty@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-black text-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-2 text-primary font-poiret">
              Get In Touch With Us
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Get real help from the best real estate consultants in Tricity!
            </p>

            {submitted ? (
              <p className="text-green-400 font-semibold">
                ✅ Thank you! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative before:absolute before:inset-0 before:bg-white before:-z-[1]">
                {/* Full Name */}
                <div>
                  <Label className="text-gray-200">Full Name</Label>
                  <Input
                    placeholder="Enter your full name"
                    className="mt-1 bg-white text-black"
                    {...register("name", { required: "Full name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <Label className="text-gray-200">Mobile</Label>
                  <Input
                    placeholder="+91-9876543210"
                    className="mt-1 bg-white text-black"
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label className="text-gray-200">Email</Label>
                  <Input
                    type="email"
                    placeholder="you@email.com"
                    className="mt-1 bg-white text-black"
                    {...register("email")}
                  />
                </div>

                {/* Message */}
                <div>
                  <Label className="text-gray-200">Message</Label>
                  <Textarea
                    placeholder="Your message..."
                    className="mt-1 bg-white text-black"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-secondary text-primary font-semibold mt-4"
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
