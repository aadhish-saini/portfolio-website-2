import { useState, useRef, useEffect, useCallback } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FiCode, FiPlay } from "react-icons/fi";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
  title?: string;
  category?: string;
}

const WorkImage = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Use the exact public asset URL
  const rawVideoSrc = props.video
    ? props.video.startsWith("/") || props.video.startsWith("http")
      ? props.video
      : `/work_videos/${props.video}`
    : undefined;

  const videoSrc = rawVideoSrc ? encodeURI(rawVideoSrc) : undefined;

  const startPlayback = useCallback(() => {
    if (!videoRef.current || !videoSrc || hasVideoError) return;
    setIsPlaying(true);
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy or abort is caught gracefully
      });
    }
  }, [videoSrc, hasVideoError]);

  const stopPlayback = useCallback(() => {
    if (!videoRef.current) return;
    setIsPlaying(false);
    videoRef.current.pause();
    try {
      videoRef.current.currentTime = 0;
    } catch {
      // Ignored if video not seekable yet
    }
  }, []);

  // Pause video if scrolled out of viewport
  useEffect(() => {
    if (!containerRef.current || !videoSrc) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isPlaying) {
            stopPlayback();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isPlaying, videoSrc, stopPlayback]);

  // Touch device support: Pause video on outside tap
  useEffect(() => {
    if (!isPlaying) return;
    const handleDocumentTouch = (e: TouchEvent | MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        stopPlayback();
      }
    };
    document.addEventListener("touchstart", handleDocumentTouch);
    document.addEventListener("mousedown", handleDocumentTouch);
    return () => {
      document.removeEventListener("touchstart", handleDocumentTouch);
      document.removeEventListener("mousedown", handleDocumentTouch);
    };
  }, [isPlaying, stopPlayback]);

  const handleMouseEnter = () => {
    startPlayback();
  };

  const handleMouseLeave = () => {
    stopPlayback();
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // If user clicked the dedicated GitHub link, let it handle navigation
    if ((e.target as HTMLElement).closest(".work-link")) {
      return;
    }

    // For touch screens or clicks on the preview
    if (videoSrc && !hasVideoError) {
      if (!isPlaying) {
        startPlayback();
      } else if (!props.link) {
        stopPlayback();
      }
    }
  };

  const isPlaceholder =
    !props.image ||
    props.image.includes("placeholder") ||
    imgError;

  return (
    <div className="work-image" ref={containerRef}>
      <div
        className={`work-image-in ${isPlaying ? "is-playing" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        onClick={handleCardClick}
        data-cursor="disable"
      >
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
            title="View GitHub Repository"
            aria-label={`View ${props.title || "project"} on GitHub`}
            data-cursor="disable"
            onClick={(e) => e.stopPropagation()}
          >
            <MdArrowOutward />
          </a>
        )}

        {/* Base Layer: Static Image or Styled Dark Purple Placeholder */}
        {!isPlaceholder ? (
          <img
            src={props.image}
            alt={props.alt || "Project preview"}
            onError={() => setImgError(true)}
            className="work-image-static"
          />
        ) : (
          <div className="work-image-placeholder">
            <div className="work-placeholder-bg"></div>
            <div className="work-placeholder-content">
              <div className="work-placeholder-icon">
                <FiCode />
              </div>
              <span className="work-placeholder-title">
                {props.title || "Project Preview"}
              </span>
              {videoSrc && !hasVideoError && (
                <span className="work-video-badge">
                  <FiPlay className="work-play-icon" /> Hover to preview
                </span>
              )}
            </div>
          </div>
        )}

        {/* Video Overlay Layer: Smooth Fade-In and Cover */}
        {videoSrc && !hasVideoError && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            loop
            preload="metadata"
            className={`work-video-element ${isPlaying ? "work-video-visible" : ""}`}
            onError={() => setHasVideoError(true)}
          />
        )}
      </div>
    </div>
  );
};

export default WorkImage;

