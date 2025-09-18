import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';

const FeaturedProjects = () => {
  const { projects } = useProjects();

  const getProjectSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

return (
  <section id="projects" className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
          Browse top residential and commercial properties in prime locations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/project/${getProjectSlug(project.name)}`}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 block"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                {project.name}
              </h3>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-2 text-secondary" />
                <span className="font-inter">{project.location}</span>
              </div>

              {project.startingPrice && (
                <div className="text-primary font-semibold text-lg mb-4">
                  {project.startingPrice}
                </div>
              )}

              <div className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200">
                <span>View Details</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
}

export default FeaturedProjects;