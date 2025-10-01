
import { motion } from "framer-motion";
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

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-64 bg-foreground bg-cover bg-center flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-sm">Home / Contact</p>
        </motion.div>
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
            <h3 className="text-2xl font-bold mb-2 text-primary">
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
