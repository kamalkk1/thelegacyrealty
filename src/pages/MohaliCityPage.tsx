import { Card, CardContent } from "../components/ui/card";
import { MapPin, Building2, Home, MapIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useProjects } from "../context/ProjectContext";
import { Link } from "react-router-dom";
import mohalicity from "../assets/mohalicitypage.jpg";
const MohaliCityPage = () => {
  const { getProjectsByCity } = useProjects();
  const properties = getProjectsByCity("Mohali");
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Map */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Interactive Map Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54891.428049691836!2d76.65618080945939!3d30.698314897558408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1759143766210!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-secondary px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
             <div
                className=" top-4 right-4 w-auto min-w-[260px] px-3 py-2 rounded-lg 
             bg-gradient-to-tr from-primary/60 via-secondary/40 to-transparent 
             flex flex-col items-center gap-3 shadow-lg"
              >
            <h1 className="text-6xl text-primary lg:text-8xl font-bold font-poiret mb-6">
              MOHALI
            </h1>
            <p className="text-xl text-primary lg:text-2xl font-inter mb-8">
              The IT Hub of Punjab - Where Innovation Meets Opportunity
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="w-6 h-6" />
              <span></span>
            </div></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold font-poiret text-gray-900 mb-6">
              The Silicon Valley of North India
            </h2>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
              Officially known as Sahibzada Ajit Singh Nagar, Mohali stands as
              Punjab's crown jewel of modern development. Named after the eldest
              son of Guru Gobind Singh, this planned city has evolved from
              agricultural lands into a thriving metropolis that bridges
              tradition with innovation.
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed">
              Strategically positioned in the heart of the Chandigarh Tricity
              region, Mohali offers the perfect blend of urban sophistication
              and natural beauty, with the Shivalik Hills providing a stunning
              backdrop to this emerging IT powerhouse.
            </p>
          </div>
          <div className="relative">
            <img
              src={mohalicity}
              alt="Mohali Cityscape"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Surrounding Highlights */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <Card className="p-8 border-0 relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poiret mb-3">
                Strategic Location
              </h3>
              <p className="text-gray-600 font-inter">
                Just 10 minutes from Chandigarh International Airport and
                connected to major highways NH-5, NH-152, making it the perfect
                business destination.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poiret mb-3">
                IT Revolution
              </h3>
              <p className="text-gray-600 font-inter">
                Home to IT City spanning 1,700 acres, hosting multinational
                companies, startups, and tech parks that drive Punjab's digital
                transformation.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center">
              <Home className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poiret mb-3">
                Living Standards
              </h3>
              <p className="text-gray-600 font-inter">
                World-class infrastructure with planned sectors, green spaces,
                premium educational institutions, and healthcare facilities
                ensuring quality lifestyle.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-poiret text-gray-900 mb-4">
              Premium Properties in Mohali
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              Discover luxury living, commercial opportunities, and investment
              potential in Mohali's most sought-after developments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link to={`/project/${property.slug}`}>
                  <Card className="overflow-hidden border-0 relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                         <span className='px-3 py-1 rounded-full text-sm font-medium 
                                                  bg-orange-100 text-orange-800'
                                                >
                                                  <MapIcon className="w-4 h-4 inline mr-1" />
                                                  {property.location}
                                                </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold font-poiret mb-2">
                        {property.name}
                      </h3>
                      <p className="text-gray-600 font-inter mb-2">
                        {property.type}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.description}</span>
                      </div>
                      <button className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                        View Details
                      </button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MohaliCityPage;
