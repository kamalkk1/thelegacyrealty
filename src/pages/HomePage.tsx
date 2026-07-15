
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import InstagramSection from '../components/InstagramSection';
import CitySection from '../components/CitySection';
// import StatisticsSection from '../components/StatisticsSection';
// import AuthorityCitations from '../components/AuthorityCitations';
import HomeFAQSection from '../components/HomeFAQSection';
import FAQSchema from '../components/FAQSchema';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      {/* <StatisticsSection /> */}
      <CitySection/>
      <FeaturedProjects />
      {/* <AuthorityCitations /> */}
      <InstagramSection />
      <TestimonialsSection />
      <HomeFAQSection />
      <FAQSchema />
    </div>
  );
};

export default HomePage;