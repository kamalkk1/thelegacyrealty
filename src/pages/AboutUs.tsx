import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Award, Target, Eye, MessageSquare } from "lucide-react";
import { motion, type Variants } from "framer-motion"; // Import Variants type
import { useState } from "react";
import CTAPopup from "../components/CTAPopup";
import rahul from "../assets/Rahul-Ahuja.png";
import gaurav from "../assets/projectlogos/Gaurav.jpeg";

import { Link } from "react-router-dom";
import ceos from "../assets/TheLegacyRealtyCEOs.jpg";
const AboutUs = () => {
  const [isPopupOpen] = useState(false);

  // Properly typed variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
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
              About Us
              
              
            </motion.h1>

           
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              custom={0}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ceos}
                  alt="About Legacy Realty"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-16 -right-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              custom={0}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-primary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  <Award className="w-4 h-4" />
                  DELIVERING LUXURY, TRUST, AND CUSTOMER EXCELLENCE SINCE 2013
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins leading-tight"
                >
                  Building Dreams with{" "}
                  <span className="text-secondary">Excellence</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                  Founded in 2013, The Legacy Realty is one of the most respected
                  and trusted real estate companies in North India. We help
                  people buy and sell homes at the optimal price, whether you
                  want to buy or sell a residential property or rent have an
                  office space, we help you succeed.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                  We assure you a niche experience with personalized services -
                  like the Way Academy, transparent dealings, ethical pricing,
                  honest construction, and a well-organized programme to make
                  your right and reach your dream home and help your wealth
                  secure assets.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {/* Popup */}
                {isPopupOpen && <CTAPopup />}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              OUR MISSION AND VISION
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full shadow-xl border-0 overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center">
                    <Target className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    MISSION STATEMENT
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our mission is to offer best-in-class and online sharing
                    consultancy and management services to our channel and
                    residential consumers. We are focused on improving our
                    clients' lives by fostering favorable solutions to all their
                    real estate ascertainment.
                  </p>
                  <Link to="/contact-us">
                    <Button
                      variant="outline"
                      className="relative before:absolute before:inset-0  before:bg-white before:-z-[1] bg-white/100 mt-6 border-secondary text-secondary hover:bg-primary hover:text-secondary"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full shadow-xl border-0 overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Vision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center">
                    <Eye className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    VISION STATEMENT
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our vision is to create a remarkable impact on the real
                    estate market of North India by driving innovation, customer
                    excellence with unmatched service standards, and a spotlight
                    in the region with the vision to become the most
                    professional.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
                FOUNDER'S <span className="text-secondary">MESSAGE</span>
              </h2>
              <div className="w-24 h-1 bg-foreground mx-auto"></div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="relative">
                  <img
                    src={gaurav}
                    alt="Founder"
                    className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-foreground text-white p-4 rounded-2xl shadow-lg">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>

              {/* Message Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "Welcome friends... we wish fresh start of every project. At The
                    Legacy Realty, our vision is promise is to provide property.
                    We assure the transactions and attract to every aspect of
                    market and buying property... We always guide you visit the
                    available prime properties, sell the best locations, prime
                    locations and also guide you in the legal documentation."
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    "Our clients satisfaction is a reflection of our success;
                    their ideas and suggestions from clients and legendary based
                    on a foundation of sound staff and interact and our clients
                    attitude. We offer to put together the different requirement
                    with regard to residential or commercial project..."
                  </p>

                  <div className="border-l-4 border-primary pl-6">
                    <p className="font-semibold text-gray-900 text-lg">
                      Gaurav Bajwa
                    </p>
                    <p className="text-secondary font-medium">
                      Founder & CEO, The Legacy Realty
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Message Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "At The Legacy Realty, we believe every new project marks a
                    fresh beginning. Our vision is to make property buying and
                    selling a smooth, transparent, and rewarding experience. We
                    are committed to guiding our clients to the finest prime
                    locations, ensuring every transaction is secure, and
                    supporting them with clear legal documentation at every
                    step."
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    "For us, client satisfaction is the true measure of success.
                    We value every idea and suggestion shared by our clients,
                    and our dedicated team works tirelessly to understand and
                    fulfill unique requirements—whether residential or
                    commercial. With integrity, care, and expertise, we strive
                    to build lasting relationships and help our clients make
                    confident and informed property decisions."
                  </p>

                  <div className="border-l-4 border-primary pl-6">
                    <p className="font-semibold text-gray-900 text-lg">
                      Rahul Ahuja
                    </p>
                    <p className="text-secondary font-medium">
                      Founder & CEO, The Legacy Realty
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="relative">
                  <img
                    src={rahul}
                    alt="Founder"
                    className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-foreground text-white p-4 rounded-2xl shadow-lg">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-poppins">
              Feel free to contact us in case of any queries.
            </h3>

            <Link to="/contact-us">
              <Button
                size="lg"
                className="bg-white relative before:absolute before:inset-0 before:bg-white before:-z-[1] text-secondary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
