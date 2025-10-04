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
  Linkedin,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";
import logo from "../assets/tlrlogo.webp";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Example: Social mapping (React / TSX)
const socialLinks = [
  {
    name: "facebook",
    href: "https://www.facebook.com/profile.php?id=61564416080799",
    Icon: Facebook,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/the_legacyrealty/",
    Icon: Instagram,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/company/the-legacy-realty/posts/?feedView=all",
    Icon: Linkedin,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@TheLegacyRealty/videos",
    Icon: Youtube,
  },
];

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
    { name: "Commercial", path: "/projects/commercial" },
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
      <header className="bg-foreground sticky top-0 z-50 shadow-sm py-4">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 -z-10">
          <div className="w-full">
            <div className="h-[2px] bg-white origin-left animate-grow"></div>
          </div>
          <div className="w-full">
            <div className="h-[2px] bg-white origin-left animate-grow"></div>
          </div>
        </div>
        <div className="container sticky mx-auto px-4 sm:px-6 lg:px-8 ">
          <div
            className="flex justify-between  font-poiret items-center px-6 py-3 bg-white/90 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl
           transition"
          >
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="The Legacy Realty" className="h-14 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-lg  font-weight-900">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/aboutus">About Us</NavLink>

              {/* ✅ Cities Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-secondary  transition-colors">
                    <span className="font-extrabold">Cities</span>{" "}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  sideOffset={8}
                  className="w-48 bg-white text-poiret rounded-lg shadow-xl p-1 overflow-hidden"
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
                          className="block px-4 py-2 text-gray-800 text-poiret rounded-md"
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
                  <button className="flex items-center text-secondary  transition-colors">
                    <span className="font-extrabold">Projects</span>{" "}
                    <ChevronDown className="ml-1 w-4 h-4" />
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
                          className="block px-4 py-2 text-gray-800 rounded-md"
                        >
                          {type.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/contact-us"
                className="text-secondary font-extrabold hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* 📞 Call Button (Desktop) */}
            {/* <a
              href="tel:+919888247787"
              className="hidden md:flex items-center bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary text-primary font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 98882 47787
            </a> */}

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
                       backdrop-blur-xl shadow-2xl z-50 flex flex-col font-poiret justify-between p-6 text-white"
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
                    <Link
                      to="/contact-us"
                      onClick={onClose}
                      className="block hover:text-secondary transition"
                    >
                      Contact Us
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
                      <Mail className="w-5 h-5 text-primary" />
                      <a
                        href="mailto:info.thelegacyrealty@gmail.com"
                        className="hover:text-secondary transition"
                      >
                        info.thelegacyrealty@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>
                        2nd floor, sco 275, Sector 118, Sahibzada Ajit Singh
                        Nagar, Punjab
                      </span>
                    </div>

                    <div className="flex space-x-4 mt-8">
                      {socialLinks
                        .filter((s) => s.href && s.href !== "#")
                        .map(({ name, href, Icon }) => (
                          <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-br from-secondary to-foreground hover:from-foreground hover:to-secondary p-3 rounded-full transition-colors duration-200"
                            aria-label={name}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        ))}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <a
                    href="tel:+919888247787"
                    className="mt-8 inline-flex items-center justify-center w-full
                         bg-secondary text-primary font-semibold py-3 rounded-lg
                         hover:bg-secondary hover:text-white transition"
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
            className="fixed bottom-0 left-0 right-0 h-16 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl
           hover:bg-white/30 transition md:hidden z-50"
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
                <Menu className="w-6 h-6 text-foreground" />
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
      className="text-secondary font-[800] hover:text-secondary transition-colors duration-200"
    >
      <span className="font-extrabold">{children}</span>
    </Link>
  );
}

// function MobileLink({
//   to,
//   onClick,
//   children,
// }: {
//   to: string;
//   onClick: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <Link
//       to={to}
//       onClick={onClick}
//       className="block text-secondary hover:text-white transition-colors"
//     >
//       {children}
//     </Link>
//   );
// }
