
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactFooter from '../components/ContactFooter';
import InstagramSection from '../components/InstagramSection';
import CitySection from '../components/CitySection';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CitySection/>
      <FeaturedProjects />
      <InstagramSection />
      <TestimonialsSection />
      <ContactFooter />
    </div>
  );
};

export default HomePage;