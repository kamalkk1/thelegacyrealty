import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Trophy, 
  Target, 
  Star, 
  Building, 
  UserCheck, 
  TrendingUp,
  Mail,
  Phone,
  Linkedin
} from "lucide-react";
import rahul from "../assets/Rahul-Ahuja.png";
import gaurav from "../assets/projectlogos/Gaurav.jpeg";
import anmol from "../assets/anmol.jpeg";
import kamal from "../assets/ourteam/kamal.png";
import aman from "../assets/ourteam/Aman_Gill.jpg";
import prabjot from "../assets/ourteam/Prabjot_singh.jpg";
import inderjeet from "../assets/ourteam/Inderjeet.jpg";
// Team member interface
interface TeamMember {
  id: string;
  name: string;
  position: string;
  role: "head" | "manager" | "executive";
  image: string;
  description: string;
  experience: string;
  specialization: string[];
  contact?: {
    email?: string;
    phone?: string;
    linkedin?: string;
  };
}

// Milestones interface
interface Milestone {
  icon: React.ComponentType<any>;
  number: string;
  label: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "founder-ceo-gaurav",
    name: "Gaurav Bajwa",
    position: "Founder & CEO",
    role: "head",
    image: gaurav,
    description: "Welcome friends... we wish fresh start of every project. At The Legacy Realty, our vision is promise is to provide property. We assure the transactions and attract to every aspect of market and buying property. We always guide you visit the available prime properties, sell the best locations, prime locations and also guide you in the legal documentation.",
    experience: "15+ Years",
    specialization: ["Real Estate Development", "Business Strategy", "Client Relations", "Legal Documentation"],
    contact: {
      email: "info.thelegacyrealty@gmail.com",
      phone: "+91 98882 47787",
      linkedin: "https://linkedin.com/in/gaurav-bajwa"
    }
  },
  {
    id: "founder-ceo-rahul",
    name: "Rahul Ahuja",
    position: "Founder & CEO",
    role: "head",
    image: rahul,
    description: "At The Legacy Realty, we believe every new project marks a fresh beginning. Our vision is to make property buying and selling a smooth, transparent, and rewarding experience. We are committed to guiding our clients to the finest prime locations, ensuring every transaction is secure, and supporting them with clear legal documentation at every step.",
    experience: "15+ Years",
    specialization: ["Business Strategy", "Real Estate Development", "Client Relations", "Prime Locations"],
    contact: {
      email: "info.thelegacyrealty@gmail.com",
      phone: "+91 94639 00803",
      linkedin: "https://linkedin.com/in/rahul-ahuja"
    }
  },
  {
    id: "property-consultant-1",
    name: "Anmol",
    position: "Senior Property Consultant",
    role: "manager",
    image: anmol,
    description: "Experienced property consultant specializing in residential and commercial properties across Tricity region.",
    experience: "8+ Years",
    specialization: ["Residential Sales", "Investment Advisory", "Property Valuation"],
    contact: {
      email: "arjun@thelegacyrealty.com",
      phone: "+91 98123 45678"
    }
  },
  {
    id: "digital-partner-kamal",
    name: "Kamal Kishore",
    position: "Digital Partner",
    role: "manager",
    image: kamal,
    description: "Expert in digital strategy and online presence management, ensuring The Legacy Realty reaches the right audience effectively.",
    experience: "10+ Years",
    specialization: ["Digital Marketing", "Brand Strategy", "Online Presence"],
    contact: {
      email: "info.thelegacyrealty@gmail.com"
    }
  },
  {
    id: "sales-manager-aman",
    name: "Aman Gill",
    position: "Sales Manager",
    role: "manager",
    image: aman,
    description: "Seasoned sales professional with a decade of experience in driving growth and building lasting client relationships.",
    experience: "10+ Years",
    specialization: ["Sales Strategy", "Client Relationship", "Market Analysis"],
    contact: {
      email: "info.thelegacyrealty@gmail.com"
    }
  },
  {
    id: "sales-manager-prabjot",
    name: "Prabjot Singh",
    position: "Sales Manager",
    role: "manager",
    image: prabjot,
    description: "Dedicated sales manager focused on understanding client needs and delivering exceptional real estate solutions.",
    experience: "10+ Years",
    specialization: ["Property Sales", "Client Consultation", "Negotiation"],
    contact: {
      email: "info.thelegacyrealty@gmail.com"
    }
  },
  {
    id: "sales-manager-inderjeet",
    name: "Inderjeet",
    position: "Sales Manager",
    role: "manager",
    image: inderjeet,
    description: "Experienced sales manager committed to guiding clients through seamless property transactions with expertise and integrity.",
    experience: "10+ Years",
    specialization: ["Real Estate Sales", "Customer Service", "Market Trends"],
    contact: {
      email: "info.thelegacyrealty@gmail.com"
    }
  },
//   {
//     id: "property-consultant-2",
//     name: "Meera Patel",
//     position: "Property Consultant",
//     role: "executive",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
//     description: "Dedicated property consultant focusing on first-time homebuyers and investment properties.",
//     experience: "5+ Years",
//     specialization: ["First-time Buyers", "Investment Properties", "Documentation"],
//     contact: {
//       email: "meera@thelegacyrealty.com",
//       phone: "+91 97654 32109"
//     }
//   }
];

const milestones: Milestone[] = [
  {
    icon: Users,
    number: "1500+",
    label: "Happy Clients",
    description: "Satisfied customers who found their dream properties with us"
  },
  {
    icon: Building,
    number: "2500+",
    label: "Projects Sold",
    description: "Successful property transactions across Tricity region"
  },
  {
    icon: Award,
    number: "50+",
    label: "Awards Won",
    description: "Recognition for excellence in real estate services"
  },
  {
    icon: Target,
    number: "99%",
    label: "Success Rate",
    description: "Client satisfaction and successful property closures"
  }
];

const OurTeam: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  // Separate heads and team members
  const heads = teamMembers.filter(member => member.role === "head");
  const managers = teamMembers.filter(member => member.role === "manager");
  const executives = teamMembers.filter(member => member.role === "executive");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-foreground to-secondary/80 text-white py-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 border border-white/20 rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Professional Excellence
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our <span className="text-primary">Expert Team</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
            Our dedicated professionals bring years of experience and passion to help you find your perfect property in the Tricity region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm">
              <Trophy className="w-5 h-5 text-primary" />
              <span>Award Winning Team</span>
            </div>
            <div className="hidden sm:block text-white/40">|</div>
            <div className="flex items-center gap-2 text-sm">
              <UserCheck className="w-5 h-5 text-primary" />
              <span>Certified Professionals</span>
            </div>
            <div className="hidden sm:block text-white/40">|</div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Proven Results</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Founders & Leaders
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the visionary founders who established The Legacy Realty and continue to drive excellence in real estate services since 2013
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {heads.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-secondary">{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Specialization:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialization.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.contact && (
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      {member.contact.email && (
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="text-secondary hover:text-foreground transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                      {member.contact.phone && (
                        <a
                          href={`tel:${member.contact.phone}`}
                          className="text-secondary hover:text-foreground transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                        </a>
                      )}
                      {/* {member.contact.linkedin && (
                        <a
                          href={member.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-foreground transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )} */}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-foreground text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Achievements
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Numbers that speak for our dedication and excellence in serving our clients
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <milestone.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{milestone.number}</div>
                <div className="text-xl font-semibold mb-2">{milestone.label}</div>
                <p className="text-white/80 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Professional Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dedicated professionals committed to finding you the perfect property solution
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[...managers, ...executives].map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm">{member.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-secondary/10 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-secondary">{member.experience}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specialization:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialization.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.contact && (
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      {member.contact.email && (
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="text-secondary hover:text-foreground transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {member.contact.phone && (
                        <a
                          href={`tel:${member.contact.phone}`}
                          className="text-secondary hover:text-foreground transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      )}
                      {member.contact.linkedin && (
                        <a
                          href={member.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-foreground transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Work with Our Experts?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of professionals is ready to help you find your dream property. Contact us today for personalized service and expert guidance.
            </p>
            <div className="flex relative before:absolute before:inset-0 before:bg-white before:-z-[1] flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919695798957"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary hover:bg-foreground text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:info.thelegacyrealty@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-secondary border-2 border-secondary font-semibold px-8 py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
