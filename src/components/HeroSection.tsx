import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import heroVideo from "../assets/videos/herovideo.mp4";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="max-w-4xl mx-auto text-center h-[50vh]">
          {/* Add hero text or CTA here */}
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
