import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO-1.png";
const ContactFooter = () => {
  return (
    <footer id="contact" className="relative before:absolute before:inset-0 before:bg-foreground before:-z-[1] bg-foreground/100 backdrop-blur-xl shadow-md text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="The Legacy Realty"
                  className="h-24 w-auto"
                />
              </Link>
            </div>

            <h3 className="font-poiret font-semibold text-xl mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-poiret text-blue-100">
                    The Legacy Realty SCO 275 / 2nd floor Sector 118 Tdi city
                    Mohali
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="font-poiret text-blue-100 hover:text-white transition-colors duration-200"
                >
                  (+91) 98882 47787 , (+91) 94639 00803
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@thelegacyrealty.com"
                  className="font-poiret text-blue-100 hover:text-white transition-colors duration-200"
                >
                  info.thelegacyrealty@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8 ">
              <a
                href="https://facebook.com/thelegacyrealty"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/thelegacyrealty"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/thelegacyrealty"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Responsive Google Map */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.6823402822542!2d76.6810989!3d30.727329499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefcac86cdadb%3A0xf9515c632247610b!2sThe%20Legacy%20Realty!5e0!3m2!1sen!2sin!4v1758900467346!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-70 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="font-poiret text-blue-200 text-center lg:text-left">
              © 2025 thelegacyrealty. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link
                to="/"
                className="font-poiret text-blue-200 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="font-poiret text-blue-200 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
