import { Card, CardContent } from "../components/ui/card";
import { MapPin, Crown, TreePine, Landmark, Clock } from "lucide-react";
import { motion } from "framer-motion";
import chandigarh1 from "../assets/cities/chandigarhplan1.webp";
import { useProjects } from "../context/ProjectContext";
import { Link } from "react-router-dom";

const ChandigarhCityPage = () => {
  const { getProjectsByCity } = useProjects();
  const properties = getProjectsByCity('Chandigarh');

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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-600/20">
          <iframe
            src={chandigarh1}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%)" }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-30"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold font-poppins mb-6">
              CHANDIGARH
            </h1>
            <p className="text-xl lg:text-2xl font-inter mb-8">
              The City Beautiful - India's First Planned City
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="w-6 h-6" />
              <span>30°45'N 76°47'E</span>
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
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6">
              A Masterpiece of Urban Planning
            </h2>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
              Conceived by the visionary Swiss-French architect Le Corbusier, Chandigarh stands as India's first planned city and a UNESCO World Heritage site. This union territory serves as the joint capital of Punjab and Haryana, embodying the dreams of modern India.
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed">
              Nestled at the foothills of the Shivalik range, Chandigarh seamlessly blends architectural brilliance with natural beauty. The city's grid-like structure, abundant green spaces, and modernist buildings create an urban experience unlike any other in India.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
              alt="Chandigarh Architecture"
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
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center">
              <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poppins mb-3">Capital Status</h3>
              <p className="text-gray-600 font-inter">
                Unique distinction of being the joint capital of two states, Punjab and Haryana, with highest per capita income in India.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center">
              <Landmark className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poppins mb-3">UNESCO Heritage</h3>
              <p className="text-gray-600 font-inter">
                Capitol Complex declared UNESCO World Heritage Site, featuring iconic architecture by Le Corbusier that defines modern India.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center">
              <TreePine className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-poppins mb-3">Green Paradise</h3>
              <p className="text-gray-600 font-inter">
                Ranked happiest city in India with Sukhna Lake, Rock Garden, Rose Garden, and extensive green belt covering 40% of the city.
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
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-4">
              Exclusive Properties in Chandigarh
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              Experience premium living in India's most planned city with properties that offer unmatched quality of life
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
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          property.status === 'Ready to Move' ? 'bg-green-100 text-green-800' : 
                          property.status === 'Under Construction' ? 'bg-blue-100 text-blue-800' :
                          property.status === 'Possession < 1 Year' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          <Clock className="w-4 h-4 inline mr-1" />
                          {property.status}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold font-poppins mb-2">{property.name}</h3>
                      <p className="text-gray-600 font-inter mb-2">{property.type}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.location}</span>
                      </div>
                      <div className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-center">
                        View Details
                      </div>
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

export default ChandigarhCityPage;
