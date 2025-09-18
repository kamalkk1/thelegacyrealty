
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactFooter from '../components/ContactFooter';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <ContactFooter />
    </div>
  );
};

export default HomePage;