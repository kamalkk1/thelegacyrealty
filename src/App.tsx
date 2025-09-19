
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { ProjectProvider } from './context/ProjectContext';
import AboutUs from './pages/AboutUs';
import Layout from './layout/Layout';

function App() {
  return (
    <ProjectProvider>
      <Router>
        <div className="min-h-screen bg-background font-inter">
          <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<HomePage />} />
             <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/project/:projectName" element={<ProjectDetailPage />} />
          </Routes>
          </Layout>
        </div>
      </Router>
    </ProjectProvider>
  );
}

export default App;