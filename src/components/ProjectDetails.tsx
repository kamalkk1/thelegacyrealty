
import { MapPin, CheckCircle } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';
import type { Project } from '../context/ProjectContext';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Project Information */}
          <div>
            <div className="mb-8">
              <h1 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                {project.name}
              </h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-secondary" />
                <span className="font-inter text-lg">{project.location}</span>
              </div>

              {project.startingPrice && (
                <div className="bg-primary text-white px-6 py-3 rounded-lg inline-block mb-6">
                  <span className="font-semibold text-lg">{project.startingPrice}</span>
                </div>
              )}
            </div>

            {/* Project Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>

            {/* Description */}
            {project.description && (
              <div className="mb-8">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                  About This Project
                </h2>
                <p className="font-inter text-gray-700 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            {/* Amenities */}
            {project.amenities && project.amenities.length > 0 && (
              <div>
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-6">
                  Amenities & Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="font-inter text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Lead Capture Form */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <LeadCaptureForm project={project} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;