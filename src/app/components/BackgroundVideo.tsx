/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRef, useEffect, useState } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setIsReversing(true);
      reverseVideo(video);
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => video.removeEventListener("ended", handleVideoEnd);
  }, []);

  const reverseVideo = (video: HTMLVideoElement) => {
    if (!video) return;

    const interval = setInterval(() => {
      if (video.currentTime <= 0) {
        setIsReversing(false);
        video.play();
        clearInterval(interval);
      } else {
        video.currentTime -= 0.05;
      }
    }, 100);
  };

  return (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none select-none"
      autoPlay
      muted
    >
      <source src="/WELCOME.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
