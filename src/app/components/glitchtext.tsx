"use client";

import { useState, useRef, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  glitchChars: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, glitchChars, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startGlitch = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char) =>
            Math.random() > 0.5
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)] || char
              : char
          )
          .join("")
      );
    }, 50);
  };

  const resetText = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplayText(text);
  };

  return (
    <span
      className={`cursor-pointer font-mono whitespace-pre transition-all duration-100 ${className}`}
      onMouseEnter={startGlitch}
      onMouseLeave={resetText}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;
