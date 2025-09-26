import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { ProjectProvider } from "./context/ProjectContext";
import AboutUs from "./pages/AboutUs";
import Layout from "./layout/Layout";
import MohaliCityPage from "./pages/MohaliCityPage";
import NewChandigarhCityPage from "./pages/NewChandigarhCityPage";
import ProjectTypePage from "./pages/ProjectTypePage";
import ChandigarhCityPage from "./pages/ChandigarhCityPage";
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
              <Route
                path="/project/:projectName"
                element={<ProjectDetailPage />}
              />
              <Route path="/cities/mohali" element={<MohaliCityPage />} />
              <Route
                path="/cities/chandigarh"
                element={<ChandigarhCityPage />}
              />
              <Route
                path="/cities/new-chandigarh"
                element={<NewChandigarhCityPage />}
              />

              <Route path="/projects/:type" element={<ProjectTypePage />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ProjectProvider>
  );
}

export default App;
