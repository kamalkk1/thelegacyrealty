import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
} from "lucide-react";
import logo from "../assets/LOGO-1.png";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openCities, setOpenCities] = useState(false);
  const [showBottomMenu, setShowBottomMenu] = useState(false);
  const cities = [
    { name: "Mohali", path: "/cities/mohali" },
    { name: "New Chandigarh", path: "/cities/new-chandigarh" },
    { name: "Chandigarh", path: "/cities/chandigarh" },
  ];

  const projectTypes = [
    { name: "Residential", path: "/projects/residential" },
    { name: "Mixed Development", path: "/projects/mixed-development" },
  ];
  const subItemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  // Helper to close the mobile menu
  const onClose = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBottomMenu(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 py-3 md:flex md:items-center md:justify-between">
            {/* Cell 1: Email */}
            <div className="flex text-nowrap items-center gap-1 text-white text-sm md:text-base font-medium">
              <Mail className="w-5 h-5 text-orange-400 " />
              <a
                href="mailto:info@legacyrealty.in"
                className="break-all hover:text-orange-300 transition-colors text-[10px] sm:text-sm"
              >
                info@legacyrealty.in
              </a>
            </div>

            {/* Cell 2: Address */}
            <div className="flex items-center text-nowrap gap-2 text-white text-[12px] md:text-base font-medium">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="leading-tight text-[10px] sm:text-sm">
                SCO 275, Sector 118, Mohali
              </span>
            </div>

            {/* Cell 3: Social Icons */}
            <div className="flex items-center gap-2 text-white/90">
              <a
                href="#"
                className="hover:text-orange-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-orange-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-orange-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Cell 4: Contact Button */}
            <span className="w-full flex flex-row justify-end">
              <a
                href="tel:+919888247787"
                className="text-[10px] flex  items-end bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary text-primary font-semibold px-3 py-2 rounded-xl hover:opacity-90 transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 98882 47787
              </a>
            </span>
          </div>
        </div>
      </div>
      <header className="bg-primary sticky top-0 z-50 shadow-sm py-4">
        <div className="container sticky mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="The Legacy Realty" className="h-14 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-lg">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/aboutus">About Us</NavLink>

              {/* ✅ Cities Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-secondary hover:text-white transition-colors">
                    Cities <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  sideOffset={8}
                  className="w-48 bg-white rounded-lg shadow-xl p-1 overflow-hidden"
                  asChild
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {cities.map((city) => (
                      <DropdownMenuItem asChild key={city.path}>
                        <Link
                          to={city.path}
                          className="block px-4 py-2 text-gray-800 bg-gradient-to-br from-white to-secondary hover:from-foreground hover:to-secondary rounded-md"
                        >
                          {city.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* ✅ Projects Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-secondary hover:text-white transition-colors">
                    Projects <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  sideOffset={8}
                  className="w-56 bg-white rounded-lg shadow-xl p-1 overflow-hidden"
                  asChild
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {projectTypes.map((type) => (
                      <DropdownMenuItem asChild key={type.path}>
                        <Link
                          to={type.path}
                          className="block px-4 py-2 text-gray-800 bg-gradient-to-br from-white to-foreground hover:from-foreground hover:to-secondary rounded-md"
                        >
                          {type.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="#contact"
                className="text-secondary hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* 📞 Call Button (Desktop) */}
            <a
              href="tel:+919888247787"
              className="hidden md:flex items-center bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary text-primary font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 98882 47787
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-secondary hover:text-white"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* ✅ Mobile Nav */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={onClose}
                  className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
                />

                {/* Drawer */}
                <motion.aside
                  key="drawer"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  className="fixed top-0 right-0 w-80 max-w-[85%] h-full
                       bg-gradient-to-br from-gray-900/90 to-gray-800/90
                       backdrop-blur-xl shadow-2xl z-50 flex flex-col justify-between p-6 text-white"
                >
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-secondary transition"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Main Nav */}
                  <nav className="mt-10 space-y-6 text-lg font-medium">
                    <Link
                      to="/"
                      onClick={onClose}
                      className="block hover:text-secondary transition"
                    >
                      Home
                    </Link>

                    <Link
                      to="/aboutus"
                      onClick={onClose}
                      className="block hover:text-secondary transition"
                    >
                      About Us
                    </Link>

                    {/* ✅ Projects Accordion */}
                    <div>
                      <button
                        onClick={() => setOpenProjects(!openProjects)}
                        className="flex items-center justify-between w-full hover:text-secondary transition"
                      >
                        <span>Projects</span>
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                            openProjects ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openProjects && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{}}
                            className="mt-2 pl-4 space-y-2 text-base"
                          >
                            {projectTypes.map((type) => (
                              <motion.div
                                key={type.path}
                                variants={subItemVariants}
                                transition={{ duration: 0.25 }}
                              >
                                <Link
                                  to={type.path}
                                  onClick={onClose}
                                  className="block text-gray-200 hover:text-secondary transition"
                                >
                                  {type.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* ✅ Cities Accordion */}
                    <div>
                      <button
                        onClick={() => setOpenCities(!openCities)}
                        className="flex items-center justify-between w-full hover:text-secondary transition"
                      >
                        <span>Cities</span>
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                            openCities ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openCities && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{}}
                            className="mt-2 pl-4 space-y-2 text-base"
                          >
                            {cities.map((city) => (
                              <motion.div
                                key={city.path}
                                variants={subItemVariants}
                                transition={{ duration: 0.25 }}
                              >
                                <Link
                                  to={city.path}
                                  onClick={onClose}
                                  className="block text-gray-200 hover:text-secondary transition"
                                >
                                  {city.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </nav>

                  {/* Contact Info */}
                  <div className="space-y-4 mt-12">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-5 h-5 text-secondary" />
                      <a
                        href="mailto:info@thelegacyrealty.in"
                        className="hover:text-secondary transition"
                      >
                        info@thelegacyrealty.in
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <span>2nd floor, sco 275, Sector 118, Sahibzada Ajit Singh Nagar, Punjab</span>
                    </div>

                    <div className="flex gap-4 pt-2">
                      {[Facebook, Twitter, Instagram].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="hover:text-secondary transition"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <a
                    href="tel:+919888247787"
                    className="mt-8 inline-flex items-center justify-center w-full
                         bg-secondary text-primary font-semibold py-3 rounded-lg
                         hover:bg-primary hover:text-white transition"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact
                  </a>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Floating Bottom Menu */}
      <AnimatePresence>
        {showBottomMenu && !isMenuOpen && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-br from-primary to-foreground shadow-lg md:hidden z-50"
          >
            <div className="flex items-center justify-between px-4 h-full">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="The Legacy Realty"
                  className="h-10 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-secondary/20 rounded-full transition-colors"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Helpers */
function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-secondary hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block text-secondary hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
