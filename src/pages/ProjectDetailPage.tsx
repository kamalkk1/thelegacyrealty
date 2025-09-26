import { useParams, Navigate } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';
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
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailPage;
