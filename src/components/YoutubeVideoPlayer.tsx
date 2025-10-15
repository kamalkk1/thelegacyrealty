// components/YouTubeVideoPlayer.tsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X} from 'lucide-react';
import { Button } from '../components/ui/button';

interface YouTubeVideoPlayerProps {
  videoId: string;
  title?: string;
  thumbnail?: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showTitle?: boolean;
  customThumbnail?: string;
}

const YouTubeVideoPlayer: React.FC<YouTubeVideoPlayerProps> = ({
  videoId,
  title = "Video",
  thumbnail,
  autoplay = true,
  muted = false,
  controls = true,
  className = "",
  aspectRatio = '16/9',
  size = 'lg',
  showTitle = true,
  customThumbnail
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Get YouTube thumbnail URL
  const getThumbnailUrl = (quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'maxres') => {
    if (customThumbnail) return customThumbnail;
    if (thumbnail) return thumbnail;
    return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
  };

  // Get video embed URL
  const getEmbedUrl = () => {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: muted ? '1' : '0',
      controls: controls ? '1' : '0',
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
      iv_load_policy: '3',
      fs: '1',
      hl: 'en',
      cc_load_policy: '1',
      origin: window.location.origin
    });
    
    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  };

  // Size configurations
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'w-full'
  };

  // Aspect ratio configurations
  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square'
  };

  const handlePlayVideo = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    setIsLoading(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto ${className}`}>
      {/* Video Container */}
      <div className={`relative ${aspectRatioClasses[aspectRatio]} bg-gray-900 rounded-xl overflow-hidden shadow-2xl`}>
        
        {/* Thumbnail & Play Button */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 cursor-pointer group"
              onClick={handlePlayVideo}
            >
              {/* Background Thumbnail */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${getThumbnailUrl('maxres')})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 sm:p-6 shadow-2xl group-hover:shadow-red-600/50 transition-all duration-300"
                >
                  <Play className="w-8 h-8 sm:w-12 sm:h-12 ml-1" fill="currentColor" />
                </motion.div>
              </div>

              {/* Bottom Left Play Indicator */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                <Play className="w-4 h-4" fill="currentColor" />
                <span>Play Video</span>
              </div>

              {/* Video Title */}
              {showTitle && title && (
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium max-w-xs truncate">
                  {title}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 flex items-center justify-center z-10"
            >
              <div className="flex flex-col items-center gap-4 text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent"></div>
                <p className="text-sm">Loading video...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* YouTube Iframe */}
        <AnimatePresence>
          {isPlaying && (
            <motion.iframe
              ref={iframeRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={getEmbedUrl()}
              title={title}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          )}
        </AnimatePresence>

        {/* Close Button */}
        {isPlaying && (
          <Button
            onClick={handleCloseVideo}
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Video Info */}
      {showTitle && title && !isPlaying && (
        <div className="mt-4 px-2">
          <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideoPlayer;
