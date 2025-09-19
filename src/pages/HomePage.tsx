
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import InstagramSection from '../components/InstagramSection';
import CitySection from '../components/CitySection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CitySection/>
      <FeaturedProjects />
      <InstagramSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;