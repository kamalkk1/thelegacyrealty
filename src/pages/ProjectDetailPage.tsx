import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header'
import ProjectDetails from '../components/ProjectDetails';
import ContactFooter from '../components/ContactFooter';
import { useProjects } from '../context/ProjectContext';

const ProjectDetailPage = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const { getProjectByName } = useProjects();

  if (!projectName) {
    return <Navigate to="/" replace />;
  }

  const project = getProjectByName(projectName);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Header />
      <ProjectDetails project={project} />
      <ContactFooter />
    </div>
  );
};

export default ProjectDetailPage;