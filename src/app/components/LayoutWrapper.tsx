"use client";
import { useEffect, useRef, useState } from "react";
import { useTypingGlitch } from "../context/TypingGlitchContext";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isTypingGlitchVisible } = useTypingGlitch();

  // Play audio on mount (but not during glitch)
  useEffect(() => {
    if (isTypingGlitchVisible) return;

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.loop = true;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Autoplay blocked:", err));
      }
    };

    const timeout = setTimeout(playAudio, 1000);
    return () => clearTimeout(timeout);
  }, [isTypingGlitchVisible]);

  // Toggle audio play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (isTypingGlitchVisible) return null;

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center">
        <button
          onClick={togglePlay}
          className={`relative w-4 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
            isPlaying ? "bg-[#008b7a]" : "bg-gray-500"
          }`}
        >
          <span
            className={`absolute w-3 h-4 bg-white rounded-full shadow-md transition-all duration-300 ${
              isPlaying ? "translate-y-2" : "-translate-y-2"
            }`}
          />
        </button>
      </div>

      <audio ref={audioRef} src="/AUDIO.mp3" preload="auto" />
    </>
  );
};

export default AudioPlayer;