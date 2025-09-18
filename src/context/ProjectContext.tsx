import { createContext, useContext,type ReactNode } from 'react';

export interface Project {
  name: string;
  location: string;
  description?: string;
  amenities?: string[];
  startingPrice?: string;
  image?: string;
}

interface ProjectContextType {
  projects: Project[];
  getProjectByName: (name: string) => Project | undefined;
}

const projects: Project[] = [
  {
    name: "The Lake",
    location: "New Chandigarh",
    description: "Experience luxury living by the lakeside with this premium residential project featuring modern amenities and serene water views.",
    amenities: ["Lakefront Views", "Swimming Pool", "Clubhouse", "24/7 Security", "Landscaped Gardens", "Gymnasium"],
    startingPrice: "₹85 Lakhs onwards",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Gardenia",
    location: "New Chandigarh",
    description: "A beautiful residential complex surrounded by lush greenery, offering spacious apartments with modern interiors and premium amenities.",
    amenities: ["Green Spaces", "Children's Play Area", "Community Hall", "Parking", "Power Backup", "Water Supply"],
    startingPrice: "₹75 Lakhs onwards",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "DLF",
    location: "New Chandigarh",
    description: "Premium luxury apartments by DLF featuring world-class amenities, modern architecture, and prime location connectivity.",
    amenities: ["Premium Finishes", "Concierge Services", "Multi-level Parking", "High-speed Elevators", "Shopping Complex", "Medical Facilities"],
    startingPrice: "₹1.2 Crores onwards",
    image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Marbella Grand",
    location: "Mohali",
    description: "Grand residential project with spacious flats, modern amenities, and excellent connectivity to major business hubs in Mohali.",
    amenities: ["Spacious Layouts", "Modular Kitchen", "Balconies", "Community Center", "Security", "Maintenance Services"],
    startingPrice: "₹68 Lakhs onwards",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "LA Parisian",
    location: "Mohali",
    description: "Elegant French-inspired architecture meets modern living in this sophisticated residential development in the heart of Mohali.",
    amenities: ["European Design", "Rooftop Terrace", "Fitness Center", "Intercom Facility", "Landscaping", "Visitor Parking"],
    startingPrice: "₹72 Lakhs onwards",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Plots",
    location: "Mohali",
    description: "Prime residential plots in well-developed sectors of Mohali, perfect for building your dream home with complete infrastructure.",
    amenities: ["Developed Infrastructure", "Wide Roads", "Electricity Connection", "Water Supply", "Sewerage System", "Park Nearby"],
    startingPrice: "₹45 Lakhs onwards",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const getProjectByName = (name: string) => {
    return projects.find(project => 
      project.name.toLowerCase().replace(/\s+/g, '-') === name.toLowerCase()
    );
  };

  return (
    <ProjectContext.Provider value={{ projects, getProjectByName }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};