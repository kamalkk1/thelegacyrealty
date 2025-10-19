import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import ScrollToTop from "../lib/ScrollToTop";
import backgroundImg from "../assets/layoutbg.webp";
import CTAPopup from "../components/CTAPopup";
import {  Mail, Phone } from "lucide-react";
import {motion} from "framer-motion";
import whatsapp from "../assets/icons8-whatsapp.gif";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttons = [
    {
      id: 1,
      label: "Contact Us",
      icon: <Mail className="w-5 h-5" />,
      bg: "bg-secondary hover:bg-secondary/90",
      link: "/contact-us",
      isInternal: true,
    },
    {
      id: 2,
      label: "WhatsApp",
      icon: <img
        src={whatsapp}
        alt="Chat on WhatsApp"
        className="w-4 h-4 sm:w-6 sm:h-6 rounded-full  transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      />,
      bg: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/919695798957",
      isInternal: false,
    },
    {
      id: 3,
      label: "Call Now",
      icon: <Phone className="w-5 h-5" />,
      bg: "bg-blue-500 hover:bg-blue-600",
      link: "tel:+919695798957",
      isInternal: false,
    },
  ];
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      />

      <ScrollToTop />

      {/* Top Navigation */}
      <Header />

      {/* CTA Popup */}
      <CTAPopup />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <ContactFooter />

        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
      <div
        className="flex flex-col items-start gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Contact Buttons */}
        <div className="flex flex-col gap-">
          {buttons.map((btn, index) => (
            <motion.div
              key={btn.id}
              className="relative overflow-hidden"
              initial={{ width: "auto" }}
              animate={{ width: isHovered ? "auto" : "auto" }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              {btn.isInternal ? (
                <Link
                  to={btn.link}
                  className={`flex items-center gap-3 text-white px-4 py-3 rounded-r-sm shadow-lg transition-all duration-300 ${btn.bg} group`}
                >
                  <div className="flex-shrink-0">
                    {btn.icon}
                  </div>
                  <motion.span 
                    className="font-semibold text-sm whitespace-nowrap overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0 
                    }}
                    transition={{
                      delay: isHovered ? index * 0.1 + 0.2 : 0,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {btn.label}
                  </motion.span>
                </Link>
              ) : (
                <a
                  href={btn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-white px-4 py-3 rounded-r-sm shadow-lg transition-all duration-300 ${btn.bg} group`}
                >
                  <div className="flex-shrink-0">
                    {btn.icon}
                  </div>
                  <motion.span 
                    className="font-semibold text-sm whitespace-nowrap overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0 
                    }}
                    transition={{
                      delay: isHovered ? index * 0.1 + 0.2 : 0,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {btn.label}
                  </motion.span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>

      {/* Floating WhatsApp Button */}
     <a
      href="https://wa.me/919695798957" // replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 sm:bottom-6 right-6 z-50"
    >
      <img
        src={whatsapp}
        alt="Chat on WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full  transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      />
    </a>
    </div>
  );
};

export default Layout;
