import { useRef, useState } from "react";
import BlurText from "./BlurText";

import { ArrowRight } from "lucide-react";
import heroVideo from "../assets/videos/herovideo.mp4";
const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (optional for dark tint) */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>{" "}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            <BlurText
              text="Find Your Dream Property in"
              delay={350}
              animateBy="words"
              direction="top"
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-2"
            />
            <span className="block text-secondary">
              <div className="flex justify-center">
                <BlurText
                  text="Chandigarh & Mohali"
                  delay={450}
                  animateBy="words"
                  direction="bottom"
                  className="font-poppins font-bold text-3xl sm:text-3xl lg:text-5xl leading-tight"

                />
              </div>
            </span>
          </h1>

          <p className="font-inter text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Curated premium real estate projects with trusted guidance from
            thelegacyrealty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="group bg-secondary hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+919876543210"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Call Now: +91-9876543210
            </a>
          </div>
        </div>
      </div>
      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 z-20 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full shadow-md transition"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
