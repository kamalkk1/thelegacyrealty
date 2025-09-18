import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { ProjectProvider } from './context/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <Router>
        <div className="min-h-screen bg-background font-inter">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<HomePage />} />
            <Route path="/project/:projectName" element={<ProjectDetailPage />} />
          </Routes>
        </div>
      </Router>
    </ProjectProvider>
  );
}

export default App;