import { Card, CardContent } from "../components/ui/card";
import { MapPin, Mountain, TreePine, Home, MapIcon, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
import { useProjects } from "../context/ProjectContext";
import { Link } from "react-router-dom";

const HimachalCityPage = () => {
  const { getProjectsByCity } = useProjects();
  const properties = getProjectsByCity("Himachal");

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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-700/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7093.845764928495!2d76.96756892395956!3d30.878094088506817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8b4c9ccd8d7b%3A0x8b3bb7b7b26dcd72!2sKasauli%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1759143860000!5m2!1sen!2sin"
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
            <div className="top-4 right-4 w-auto min-w-[280px] px-3 py-4 rounded-lg 
             bg-gradient-to-tr from-emerald-500/60 via-blue-500/40 to-transparent 
             flex flex-col items-center gap-3 shadow-lg">
              <h1 className="text-6xl text-primary lg:text-8xl font-bold font-poiret mb-6">
                HIMACHAL
              </h1>
            </div>
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
              Heaven in the Hills
            </h2>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
              Himachal Pradesh, the "Land of Gods," offers an unparalleled blend of 
              natural beauty and modern living. Nestled in the foothills of the mighty 
              Himalayas, destinations like Kasauli and Dharampur provide the perfect 
              escape from urban chaos while maintaining excellent connectivity to major cities.
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed">
              With its pristine mountain air, endless pine forests, and panoramic valley 
              views, Himachal represents the ultimate luxury living experience where 
              nature meets sophistication. These hill stations offer year-round pleasant 
              climate and serve as ideal retreats for those seeking tranquility without 
              compromising on modern amenities.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
              alt="Himachal Mountains and Valleys"
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
              <Mountain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poiret mb-3">
                Himalayan Gateway
              </h3>
              <p className="text-gray-600 font-inter">
                Gateway to the majestic Himalayas with breathtaking mountain views, 
                pristine valleys, and year-round pleasant climate perfect for luxury living.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center">
              <TreePine className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poiret mb-3">
                Pine Forest Living
              </h3>
              <p className="text-gray-600 font-inter">
                Surrounded by endless pine forests and pristine nature, offering 
                clean mountain air and scenic beauty that rejuvenates the soul.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center">
              <Snowflake className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poiret mb-3">
                Perfect Climate
              </h3>
              <p className="text-gray-600 font-inter">
                Enjoy pleasant temperatures year-round, from cool summers to 
                crisp winters, making it an ideal destination for luxury homes and retreats.
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
              Luxury Properties in Himachal
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              Discover exclusive mountain retreats, luxury villas, and premium apartments 
              nestled in the pristine beauty of Himachal Pradesh
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
                                                  bg-emerald-100 text-emerald-800'
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
                      <button className="w-full mt-4 bg-primary text-secondary py-2 px-2 rounded-lg hover:bg-primary/90 transition-colors font-medium text-start">
                        View Details
                      </button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Information Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-poiret text-gray-900 mb-4">
                Why Choose Himachal for Your Dream Home?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Valley Views</h4>
                <p className="text-sm text-gray-600">Panoramic mountain and valley vistas from every property</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Pure Environment</h4>
                <p className="text-sm text-gray-600">Pollution-free air and pristine natural surroundings</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Luxury Living</h4>
                <p className="text-sm text-gray-600">Premium amenities and modern comforts in natural settings</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Investment Value</h4>
                <p className="text-sm text-gray-600">Excellent appreciation potential in hill station properties</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HimachalCityPage;
