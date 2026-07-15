import { useParams, Navigate } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';
import ProductSchema from '../components/ProductSchema';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { useProjects } from '../context/ProjectContext';

const ProjectDetailPage = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const { getProjectBySlug } = useProjects();

  if (!projectName) {
    return <Navigate to="/" replace />;
  }

  const project = getProjectBySlug(projectName);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <ProductSchema project={project} />
      <BreadcrumbSchema projectName={project.name} breadcrumbs={[
        { name: 'Projects', url: 'https://thelegacyrealty.in/projects' },
        { name: project.name, url: `https://thelegacyrealty.in/project/${project.slug}` }
      ]} />
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailPage;
