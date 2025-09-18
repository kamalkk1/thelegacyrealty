
import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <Building2 className="h-8 w-8 text-secondary" />
              <span className="font-poppins font-bold text-2xl">
                thelegacyrealty
              </span>
            </div>

            <h3 className="font-poppins font-semibold text-xl mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-inter text-blue-100">
                    SCO 123, Sector 67, Mohali, Punjab
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="font-inter text-blue-100 hover:text-white transition-colors duration-200"
                >
                  +91-9876543210
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@thelegacyrealty.com"
                  className="font-inter text-blue-100 hover:text-white transition-colors duration-200"
                >
                  info@thelegacyrealty.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a
                href="https://facebook.com/thelegacyrealty"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground hover:bg-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/thelegacyrealty"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground hover:bg-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/thelegacyrealty"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground hover:bg-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-6">
              Quick Inquiry
            </h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-foreground border border-foreground text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-foreground border border-foreground text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-foreground border border-foreground text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-amber-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-70 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="font-inter text-blue-200 text-center lg:text-left">
              © 2025 thelegacyrealty. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <Link to="/" className="font-inter text-blue-200 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/" className="font-inter text-blue-200 hover:text-white transition-colors duration-200">
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