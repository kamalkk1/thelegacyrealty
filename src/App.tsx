import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { ProjectProvider } from "./context/ProjectContext";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MohaliHighStreetLanding from "./pages/MohaliHghStreetLanding";
import Layout from "./layout/Layout";
import MohaliCityPage from "./pages/MohaliCityPage";
import NewChandigarhCityPage from "./pages/NewChandigarhCityPage";
import ProjectTypePage from "./pages/ProjectTypePage";
import ChandigarhCityPage from "./pages/ChandigarhCityPage";
import MapPage from "./pages/MapPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import OurTeam from "./pages/OurTeam";
import CareersPage from "./pages/CareersPage";
import HimachalCityPage from "./pages/HimachalCityPage";
import NotFound from "./pages/NotFound";

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
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/location-map-mohali-chandigarh-zirakpur-tricity" element={<MapPage />} />
              <Route path="/commercial/mohali-high-street-sector-114-landran-road" element={<MohaliHighStreetLanding />} />
              <Route path="/careers" element={<CareersPage />} />
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
              <Route
                path="/cities/himachal"
                element={<HimachalCityPage />}
              />

              <Route path="/projects/:type" element={<ProjectTypePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              
              {/* 404 Catch-all route - must be last */}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </Layout>
        </div>
      </Router>
    </ProjectProvider>
  );
}

export default App;
