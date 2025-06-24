"use client"
import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <audio ref={audioRef} src="/AUDIO.mp3" />
      <button
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full shadow-lg backdrop-blur-md transition hover:bg-black/70"
      >
        {isPlaying ? "🔇" : "🔊"}
      </button>
    </div>
  );
}
