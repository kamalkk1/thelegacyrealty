import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
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
                  href="tel:+919695798957"
                  className="font-poiret text-blue-100 hover:text-white transition-colors duration-200"
                >
                  (+91) 9695798957, (+91) 94639 00803 
                  (+91) 98882 47787
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
                href="https://www.facebook.com/profile.php?id=61564416080799"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/the_legacyrealty/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-legacy-realty/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
               <a
                href="https://www.youtube.com/@TheLegacyRealty/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary p-3 rounded-full transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
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

        {/* RERA Verification Section */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm hover:border-[#c9a84c]/30 transition-colors duration-300">
          <div className="flex flex-col space-y-4 md:max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#c9a84c]">
              <ShieldCheck className="w-7 h-7" />
              <h4 className="font-poiret font-bold text-2xl tracking-wider">RERA APPROVED</h4>
            </div>
            <p className="font-poiret text-blue-100 text-sm md:text-base leading-relaxed">
              The Legacy Realty is officially registered under the Real Estate (Regulation and Development) Act, ensuring transparency, integrity, and trust in all our property dealings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center md:justify-start">
              <div className="bg-black/40 px-5 py-3 rounded-lg border border-white/5 shadow-inner">
                <span className="block text-xs text-gray-400 font-poiret mb-1 uppercase tracking-wider">Registration Number</span>
                <span className="font-bold text-[#c9a84c] tracking-wider text-lg">PBRERA-SAS81-REA3241</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white p-3.5 rounded-xl shadow-[0_0_30px_rgba(201,168,76,0.15)] ring-1 ring-white/10 hover:scale-105 transition-transform duration-300">
              <QRCodeSVG 
                value="https://rera.punjab.gov.in/reraindex/publicview/agentinfo" 
                size={130}
                level="M"
                includeMargin={false}
                fgColor="#081218"
              />
            </div>
            <span className="font-poiret text-xs text-gray-400 uppercase tracking-[0.2em]">Scan to Verify</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="font-poiret text-blue-200 text-center lg:text-left">
              © {new Date().getFullYear()} thelegacyrealty. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="font-poiret text-blue-200 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
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
