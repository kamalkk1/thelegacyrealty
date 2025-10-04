import {
  MapPin,
  CheckCircle,
  Home,
  TreePine,
  Users,
  Clock,
  Shield,
  Car,
  Dumbbell,
  Waves,
  Building,
  Zap,
  Smartphone,
  Utensils,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrochureModal from "./BrochureModal";
import type { Variants } from "framer-motion";
import LeadCaptureForm from "./LeadCaptureForm";
import type { Project } from "../context/ProjectContext";

interface ProjectDetailsProps {
  project: Project;
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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

const iconMap: Record<string, any> = {
  "Swimming Pool": Waves,
  "Jogging & Cycle Track": Users,
  "Fully Equipped Gym": Dumbbell,
  "Power backup": Zap,
  "Covered Car Parking": Car,
  Restaurant: Utensils,
  "Club Facilities": Building,
  "Hi-Tech Security": Smartphone,
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Safe gallery operations with defaults
  const gallery = project.gallery || [];
  // const keyPrinciples = project.brandFoundation?.keyPrinciples || [];

  const nextImage = () => {
    if (gallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (gallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? gallery.length - 1 : prev - 1
      );
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };
  // Map amenities to top reasons format
  const topReasons =
    project.amenities?.slice(0, 8).map((amenity, _) => ({
      icon: iconMap[amenity] || CheckCircle,
      title: amenity,
    })) || [];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative min-h-[100svh] md:h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-center flex-shrink-0"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white pt-20 pb-10 md:py-0">
            <motion.h1
              variants={slideIn}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <div
                className=" top-4 right-4 w-auto min-w-[260px] px-3 py-2 rounded-lg 
             bg-gradient-to-tr from-foreground/60 via-secondary/40 to-transparent 
             flex items-center gap-3 shadow-lg"
              >
                {/* Logo with shine effect */}
                <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={project.logoimage}
                    alt={`${project.name} logo`}
                    className="w-full h-full object-contain relative z-10"
                  />
                  {/* Shine overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent 
                    animate-[shine_2s_linear_infinite] transform -skew-x-12"
                  />
                </div>

                {/* Project name */}
                <span className="text-white font-semibold text-2xl">
                  {project.name}
                </span>
              </div>
            </motion.h1>

            <motion.div
              variants={slideIn}
              className="flex items-center mb-6 sm:mb-8"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span className="text-lg sm:text-xl">{project.location}</span>
            </motion.div>

            <motion.p
              variants={slideIn}
              className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg opacity-90 mb-8"
            >
              {project.description}
            </motion.p>

            {project.brochure && (
              <>
                {" "}
                <motion.button
                  onClick={handleDownloadClick}
                  variants={slideIn}
                  className="inline-flex items-center px-6 py-3 bg-foreground text-white font-semibold rounded-lg hover:bg-secondary font-poiret transition-colors duration-300"
                >
                  <motion.svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ y: [0, -4, 0] }} // moves up & back
                    transition={{
                      duration: 1.5, // time for one cycle
                      repeat: Infinity, // loops forever
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      d="M12 16L12 8M12 16L9 13M12 16L15 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V8C22 5.17157 22 3.75736 21.1213 2.87868C20.2426 2 18.8284 2 16 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </motion.svg>
                  Download Brochure
                </motion.button>
                <BrochureModal
                  project={project}
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </>
            )}
          </div>
        </div>
      </motion.section>

      {/* Brand Foundation Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-10 bg-white"
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div variants={slideIn}>
              {project.brandFoundation && (
                <>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {project.brandFoundation.title}
                  </h2>
                  <h3 className="text-xl text-secondary mb-8 font-semibold">
                    {project.brandFoundation.subtitle}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {project.brandFoundation.philosophy}
                  </p>

                  {/* Key Principles */}
                  <div className="space-y-6 mb-8">
                    {project.brandFoundation?.keyPrinciples?.map(
                      (principle, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="border-l-4 border-primary pl-4"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {principle.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {principle.description}
                          </p>
                        </motion.div>
                      )
                    )}
                  </div>
                </>
              )}

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Home className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Type</p>
                    <p className="text-gray-600">{project.type}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Status</p>
                    <p className="text-gray-600">{project.status}</p>
                  </div>
                </div>

                {project.specifications?.landParcel && (
                  <div className="flex items-center space-x-3">
                    <TreePine className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Land Area</p>
                      <p className="text-gray-600">
                        {project.specifications.landParcel}
                      </p>
                    </div>
                  </div>
                )}

                {project.specifications?.units && (
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Total Units</p>
                      <p className="text-gray-600">
                        {project.specifications.units}
                      </p>
                    </div>
                  </div>
                )}

                {project.specifications?.possession && (
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Possession</p>
                      <p className="text-gray-600">
                        {project.specifications.possession}
                      </p>
                    </div>
                  </div>
                )}

                {project.specifications?.developer && (
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Developer</p>
                      <p className="text-gray-600">
                        {project.specifications.developer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Carousel */}
            <motion.div variants={slideIn} className="relative">
              {project.gallery && project.gallery.length > 0 && (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <img
                        src={project.gallery[currentImageIndex].image}
                        alt={project.gallery[currentImageIndex].title}
                        className="w-full h-[500px] object-cover"
                      />

                      {/* Image Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <h4 className="font-semibold text-lg mb-1">
                          {project.gallery[currentImageIndex].title}
                        </h4>
                        <p className="text-sm text-white/90">
                          {project.gallery[currentImageIndex].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Image Type Tags + Download Button */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-wrap gap-2">
                  {project.gallery?.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-secondary text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {img.type}
                    </button>
                  ))}
                </div>

                {/* Download Button */}
                <motion.button
                  onClick={handleDownloadClick}
                  variants={slideIn}
                  className="inline-flex text-nowrap relative before:absolute before:inset-0 before:bg-white before:-z-[1] items-center px-6 py-3 bg-foreground text-white font-semibold rounded-lg hover:bg-secondary font-poiret transition-colors duration-300"
                >
                  <motion.svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      d="M12 16L12 8M12 16L9 13M12 16L15 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V8C22 5.17157 22 3.75736 21.1213 2.87868C20.2426 2 18.8284 2 16 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </motion.svg>
                  Download Brochure
                </motion.button>
                <BrochureModal
                  project={project}
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Top Reasons Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-gray-100"
      >
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <motion.h2
            variants={fadeIn}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            TOP REASONS TO BUY THE PROPERTY
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            Properties from {project.name} have it all, whether you want a home
            or return on investment
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {topReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-foreground transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-center">
                    {reason.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Specifications & Infrastructure */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Infrastructure */}
            <motion.div variants={slideIn}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Premium Infrastructure
              </h2>
              <div className="space-y-4">
                {project.specifications?.infrastructure?.map(
                  (item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Connectivity */}
            <motion.div variants={slideIn}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Prime Connectivity
              </h2>
              <div className="space-y-4">
                {project.specifications?.connectivity?.map(
                  (item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-secondary" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Highlights Section */}
      {project.highlights && project.highlights.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="py-20 bg-primary text-white"
        >
          <div className="container mx-auto px-6 lg:px-16 text-center">
            <motion.h2
              variants={fadeIn}
              className="text-4xl text-secondary lg:text-5xl font-bold mb-16"
            >
              Special Highlights
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-secondary">
              {project.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4">{highlight}</h3>
                  <div className="w-12 h-1 bg-white mx-auto"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Lead Capture Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Get Exclusive Details
              </h2>
              <p className="text-xl text-gray-300">
                Connect with us to know more about {project.name}
              </p>
            </div>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <LeadCaptureForm project={project} />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectDetails;
