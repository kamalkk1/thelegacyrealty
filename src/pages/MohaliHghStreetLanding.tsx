// components/MohaliHighStreetLanding.tsx

import { useRef, createContext, useContext } from 'react';
import HeroSection from '../components/subHero/HeroSection';
import ProjectOverview from '../components/ProjectOverview';
import LocationAdvantages from '../components/LocationAdvantages';
import InvestmentCalculator from '../components/InvestmentCalculator';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import YouTubeVideoPlayer from "../components/YoutubeVideoPlayer"
// Create context for scroll functionality
interface ScrollContextType {
  scrollToForm: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollToForm = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollToForm must be used within ScrollContext.Provider');
  }
  return context;
};

const MohaliHighStreetLanding = () => {
  const heroFormRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (heroFormRef.current) {
      heroFormRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      // Add a slight highlight effect
      heroFormRef.current.style.transform = 'scale(1.02)';
      heroFormRef.current.style.transition = 'transform 0.3s ease';
      setTimeout(() => {
        if (heroFormRef.current) {
          heroFormRef.current.style.transform = 'scale(1)';
        }
      }, 500);
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToForm }}>
      <div className="min-h-screen bg-white">
        <HeroSection formRef={heroFormRef} />
        
        <ProjectOverview />
         <YouTubeVideoPlayer
        videoId="ijVdTIYspX8" // Replace with your video ID
        title="Mohali High Street - Project Walkthrough"
        size="xl"
        aspectRatio="16/9"
        autoplay={true}
        showTitle={true}
      />
        <LocationAdvantages />
        <InvestmentCalculator />
        <FAQSection />
        <FinalCTA />
      </div>
    </ScrollContext.Provider>
  );
};

export default MohaliHighStreetLanding;
