import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Search, MapPin, Building } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/videos/herovideo.mp4";
import { useProjects } from "../context/ProjectContext";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { projects } = useProjects();
  
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    setCurrentTime(currentTime);
    setDuration(duration);
    setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    videoRef.current.currentTime = newTime;
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = projects.filter((project) => {
      const searchTerm = query.toLowerCase();
      return (
        project.name.toLowerCase().includes(searchTerm) ||
        project.location.toLowerCase().includes(searchTerm) ||
        project.city.toLowerCase().includes(searchTerm) ||
        project.type.toLowerCase().includes(searchTerm)
      );
    });

    setSearchResults(filtered.slice(0, 10)); // Increased to 10 results since we have scrolling
    setShowDropdown(filtered.length > 0);
  };

  const handleResultClick = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowDropdown(false);
  };

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.addEventListener("timeupdate", handleTimeUpdate);
    return () => vid.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-br from-primary to-blue-900 text-white overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Video */}
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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center h-[50vh] flex flex-col items-center justify-center">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-bold font-poiret mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-inter text-white/90">
            Discover luxury homes in Mohali, Chandigarh & New Chandigarh
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                placeholder="Search by property name, location, or city..."
                className="w-full pl-12 pr-4 py-4 text-lg text-gray-900 bg-white/95 backdrop-blur-md rounded-xl border-0 focus:ring-2 focus:ring-secondary focus:outline-none shadow-lg placeholder-gray-500"
              />
            </div>

            {/* Search Results Dropdown */}
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 overflow-hidden z-50 max-h-96">
                <div className="overflow-y-auto max-h-80 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {searchResults.map((project) => (
                    <Link
                      key={project.id}
                      to={`/project/${project.slug}`}
                      onClick={handleResultClick}
                      className="flex items-center p-4 hover:bg-secondary/10 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-4">
                        {project.logoimage ? (
                          <img
                            src={project.logoimage}
                            alt={project.name}
                            className="w-full h-full object-contain bg-gray-100"
                          />
                        ) : (
                          <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                            <Building className="w-8 h-8 text-secondary" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {project.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mt-1">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm truncate">{project.location}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="inline-flex px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                            {project.city}
                          </span>
                          <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                            {project.type}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {searchResults.length === 10 && (
                  <div className="p-3 text-center text-sm text-gray-500 bg-gray-50/90 border-t border-gray-100">
                    Showing top 10 results
                  </div>
                )}
              </div>
            )}

            {/* No Results Message */}
            {showDropdown && searchQuery.trim() !== "" && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-6 text-center z-50">
                <div className="text-gray-500">
                  <Building className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">No properties found</p>
                  <p className="text-sm mt-1">Try searching with different keywords</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls — appear only on hover */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-11/12 sm:w-3/5 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Timeline */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between items-center mt-1 text-xs text-white/90">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration || 0)}</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-3 space-x-4">
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-md"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>

          <button
            onClick={toggleSound}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-md"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
