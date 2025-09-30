import { useParams } from 'react-router-dom';
import { Card, CardContent } from "../components/ui/card";
import { MapPin, MapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useProjects } from '../context/ProjectContext';
import { Link } from 'react-router-dom';

const ProjectTypePage = () => {
  const { type } = useParams<{ type: string }>();
  const { getProjectsByType } = useProjects();
  
  // Convert URL parameter to proper type format
  const formattedType = type?.replace(/-/g, ' ').split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const properties = getProjectsByType(formattedType || '');

  return (
    <div className="min-h-screen bg-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-foreground text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-poiret mb-6">
              {formattedType} Projects
            </h1>
            <p className="text-xl font-inter text-gray-200 max-w-2xl mx-auto">
              Discover our exclusive collection of {formattedType?.toLowerCase()} properties
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Properties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link to={`/project/${property.slug}`}>
                  <Card className="overflow-hidden relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
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
                      <h3 className="text-xl font-semibold font-poiret mb-2">{property.name}</h3>
                      <p className="text-gray-600 font-inter mb-2">{property.type}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.location}</span>
                      </div>
                      <div className="w-full mt-4 bg-primary flex text-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-center">
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

export default ProjectTypePage;
