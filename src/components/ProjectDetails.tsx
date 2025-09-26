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
  Utensils
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import LeadCaptureForm from './LeadCaptureForm';
import type { Project } from '../context/ProjectContext';

interface ProjectDetailsProps {
  project: Project;
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
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
  'Swimming Pool': Waves,
  'Jogging & Cycle Track': Users,
  'Fully Equipped Gym': Dumbbell,
  'Power backup': Zap,
  'Covered Car Parking': Car,
  'Restaurant': Utensils,
  'Club Facilities': Building,
  'Hi-Tech Security': Smartphone,
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  // Map amenities to top reasons format
  const topReasons = project.amenities?.slice(0, 8).map((amenity, index) => ({
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white pt-20 pb-10 md:py-0">
            <motion.h1 
              variants={slideIn}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              {project.name}
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
              className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg opacity-90"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Brand Foundation Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideIn}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Brand Foundation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Embracing five key principles: light, volume, air, quality and nature, we 
                visualize the possibilities of every venue. We see every element in its whole, 
                allowing imagination to lead design. Integrating nature with the built form is 
                an important aspect of our form and design. It ensures every residence feels 
                connected to the landscapes and enjoys abundant natural light and airflow.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Home className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Type</p>
                    <p className="text-gray-600">{project.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Status</p>
                    <p className="text-gray-600">{project.status}</p>
                  </div>
                </div>
                {project.specifications?.townshipArea && (
                  <div className="flex items-center space-x-3">
                    <TreePine className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-gray-900">Area</p>
                      <p className="text-gray-600">{project.specifications.townshipArea}</p>
                    </div>
                  </div>
                )}
                {project.specifications?.approvals && (
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-gray-900">Approval</p>
                      <p className="text-gray-600">{project.specifications.approvals[0]}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            
            <motion.div variants={scaleIn} className="relative">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Architecture"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
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
            Properties from {project.name} have it all, whether you want a home or return on investment
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
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
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
                {project.specifications?.infrastructure?.map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Connectivity */}
            <motion.div variants={slideIn}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Prime Connectivity
              </h2>
              <div className="space-y-4">
                {project.specifications?.connectivity?.map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
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
              className="text-4xl lg:text-5xl font-bold mb-16"
            >
              Special Highlights
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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