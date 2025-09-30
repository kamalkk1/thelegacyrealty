import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import WhyChooseUs from "../components/WhyChooseUs";
import OurStory from "../components/OurStory";
const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary text-white py-6 lg:py-4">
      <div className="">
        <WhyChooseUs />
      </div>
      <div className="container py-12 mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center ">
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.pexels.com/photos/4792479/pexels-photo-4792479.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="About us"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-block bg-teal-700/70 px-4 py-1 rounded-full text-sm font-medium">
            Your Trusted Realty Partner
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-poiret">
            Building <span className="text-primary">Legacies</span>,<br /> One
            Property at a Time
          </h2>

          <p className="text-lg text-gray-200 mb-8 font-inter">
            At <span className="font-semibold">The Legacy Realty</span>, we go
            beyond just selling property — we help you create lasting
            investments and dream spaces. Whether it’s your first home, a
            premium commercial space, or the ideal plot for future growth, our
            mission is to guide you with trust, transparency, and unmatched
            expertise. Proudly serving the{" "}
            <span className="font-semibold">
              Chandigarh, Mohali & New Chandigarh {""}
            </span>
            community for over 12 years, we’ve built relationships that last a
            lifetime.
          </p>

          {/* CTA Button */}
          <Button className="bg-primary text-white font-semibold rounded-full px-6 py-3 hover:bg-foreground transition flex items-center gap-2">
            <PhoneCall className="w-4 h-4" />
            Contact Us
          </Button>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <Card className="bg-foreground border-0 text-center p-4">
              <div className="text-primary text-3xl font-bold">12y+</div>
              <p className="text-sm text-gray-200 mt-1">Experience</p>
            </Card>
            <Card className="bg-foreground border-0 text-center p-4">
              <div className="text-primary text-3xl font-bold">20k+</div>
              <p className="text-sm text-gray-200 mt-1">Clients</p>
            </Card>
            <Card className="bg-foreground border-0 text-center p-4">
              <div className="text-primary text-3xl font-bold">40+</div>
              <p className="text-sm text-gray-200 mt-1">Expert Realtors</p>
            </Card>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-20">
        <OurStory />
      </div>
    </section>
  );
};

export default AboutUs;
