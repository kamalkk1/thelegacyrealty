import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useProjects } from "../context/ProjectContext";

const FeaturedProjects = () => {
  const { projects } = useProjects();

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poiret font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Browse top residential and commercial properties in prime locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.slice(0, 6).map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className="group bg-white/100 before:bg-white before:absolute before:inset-0 before:-z-[1] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 block relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative p-6 before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl shadow-sm">
                <h3 className="font-poiret font-semibold text-xl text-gray-900 mb-2">
                  {project.name}
                </h3>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2 text-secondary" />
                  <span className="font-inter">{project.location}</span>
                </div>

                {project.status?.length > 0 && (
                  <div className="flex flex-col items-start mb-4">
                    {/* 🔹 Blinking Gradient Pill */}
                    <div
                      className="inline-flex px-3 py-1 text-sm font-semibold text-white rounded-full 
                 bg-gradient-to-r from-chart-4 via-secondary to-chart-3 
                 animate-pulse shadow-md"
                    >
                      {project.status}
                    </div>

                    {/* 🔹 View Details (below pill) */}
                    <div className="inline-flex items-center space-x-2 mt-2 text-secondary hover:text-secondary-dark font-semibold transition-colors duration-200">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                )}

                {/* Logo image in bottom-right */}
                {project.logoimage && (
                  <div
                    className="absolute bottom-4 right-2 w-40 h-20 rounded-lg
                  flex items-center justify-center"
                  >
                    <img
                      src={project.logoimage}
                      alt={`${project.name} logo`}
                      className="w-46 h-34 object-contain"
                    />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Scrolling Projects Loop Section */}
        <div className="mt-16 overflow-hidden">
          <h3 className="font-poiret font-bold text-2xl lg:text-3xl text-gray-900 mb-8 text-center">
            All Our Projects
          </h3>
          
          <div className="relative">
            {/* First scrolling row - Right to Left */}
            <motion.div
              className="flex space-x-6 mb-6"
              animate={{
                x: [0, -100 * projects.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate projects array for seamless loop */}
              {[...projects, ...projects].map((project, index) => (
                <Link
                  key={`${project.id}-${index}`}
                  to={`/project/${project.slug}`}
                  className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.logoimage && (
                      <div className="absolute top-2 right-2 bg-white/90 rounded-md p-1">
                        <img
                          src={project.logoimage}
                          alt={`${project.name} logo`}
                          className="w-12 h-6 object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-poiret font-semibold text-lg text-gray-900 mb-2 truncate">
                      {project.name}
                    </h4>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-3 w-3 mr-1 text-secondary" />
                      <span className="font-inter text-sm truncate">{project.location}</span>
                    </div>
                    {project.status && (
                      <div className="inline-flex px-2 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-chart-4 via-secondary to-chart-3">
                        {project.status}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </motion.div>

            {/* Second scrolling row - Left to Right (reverse direction) */}
            <motion.div
              className="flex space-x-6"
              animate={{
                x: [-100 * projects.length, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate projects array for seamless loop */}
              {[...projects, ...projects].reverse().map((project, index) => (
                <Link
                  key={`reverse-${project.id}-${index}`}
                  to={`/project/${project.slug}`}
                  className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.logoimage && (
                      <div className="absolute top-2 right-2 bg-white/90 rounded-md p-1">
                        <img
                          src={project.logoimage}
                          alt={`${project.name} logo`}
                          className="w-12 h-6 object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-poiret font-semibold text-lg text-gray-900 mb-2 truncate">
                      {project.name}
                    </h4>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-3 w-3 mr-1 text-secondary" />
                      <span className="font-inter text-sm truncate">{project.location}</span>
                    </div>
                    {project.status && (
                      <div className="inline-flex px-2 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-chart-4 via-secondary to-chart-3">
                        {project.status}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
