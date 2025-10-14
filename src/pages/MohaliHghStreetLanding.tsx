// components/MohaliHighStreetLanding.tsx

import HeroSection from '../components/subHero/HeroSection';
import ProjectOverview from '../components/ProjectOverview';
import LocationAdvantages from '../components/LocationAdvantages';
import InvestmentCalculator from '../components/InvestmentCalculator';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';

const MohaliHighStreetLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProjectOverview />
      <LocationAdvantages />
      <InvestmentCalculator />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default MohaliHighStreetLanding;
