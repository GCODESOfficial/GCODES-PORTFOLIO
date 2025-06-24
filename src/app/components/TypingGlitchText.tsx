/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTypingGlitch } from "../context/TypingGlitchContext";

const TypingGlitchText = () => {
  const fullText = "Initializing...";
  const [text, setText] = useState("");
  const [glitch, setGlitch] = useState(false);
  const [snapOut, setSnapOut] = useState(false);
  const { setTypingGlitchVisible } = useTypingGlitch(); // ⬅️ destructure setter

  useEffect(() => {
    // Notify context that glitch is showing
    setTypingGlitchVisible(true);

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setGlitch(true);
          setTimeout(() => {
            setGlitch(false);
            setSnapOut(true);

            // Glitch finished, notify context
            setTypingGlitchVisible(false); // ⬅️ hide glitch, show audio
          }, 1500);
        }, 800);
      }
    }, 150);

    return () => {
      clearInterval(typingInterval);
      setTypingGlitchVisible(false); // In case component unmounts early
    };
  }, [setTypingGlitchVisible]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: snapOut ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute w-full h-screen flex items-center justify-center z-50 bg-black"
    >
      {/* Glitch Typing Effect */}
      <motion.h1
        initial={{ scale: 1 }}
        animate={{
          scale: snapOut ? [1, 1.2, 0.9, 1.3, 0] : 1, // Quick zoom in & out
          opacity: snapOut ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`text-[#008b7a] text-5xl font-[VT323] relative ${
          glitch ? "glitch" : ""
        }`}
      >
        {text}
        {/* Extra Glitch Layers */}
        {glitch && (
          <>
            <span className="absolute top-0 left-0 w-full h-full text-[#008b7a] blur-md glitch-layer">
              {text}
            </span>
            <span className="absolute top-0 left-0 w-full h-full text-[#008b7a] blur-lg glitch-layer translate-x-1">
              {text}
            </span>
          </>
        )}
      </motion.h1>

      {/* Scanline Effect */}
      {glitch && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 pointer-events-none glitch-lines"></div>
      )}

      <style jsx>{`
        @keyframes intenseGlitch {
          0% {
            transform: translate(0);
          }
          10% {
            transform: translate(-6px, 6px) skew(-10deg);
          }
          20% {
            transform: translate(6px, -6px) skew(10deg);
          }
          30% {
            transform: translate(-10px, 10px) skew(-15deg);
          }
          40% {
            transform: translate(10px, -10px) skew(15deg);
          }
          50% {
            transform: translate(-8px, 8px) skew(-5deg);
          }
          60% {
            transform: translate(8px, -8px) skew(5deg);
          }
          70% {
            transform: translate(-12px, 12px) skew(-12deg);
          }
          80% {
            transform: translate(12px, -12px) skew(12deg);
          }
          90% {
            transform: translate(-5px, 5px) skew(-8deg);
          }
          100% {
            transform: translate(0);
          }
        }

        .glitch {
          animation: intenseGlitch 0.05s infinite alternate; /* Faster and stronger */
          text-shadow: 4px 4px 8px rgba(0, 255, 0, 0.9),
                       -4px -4px 8px rgba(0, 255, 0, 0.9);
        }

        .glitch-layer {
          position: absolute;
          animation: intenseGlitch 0.05s infinite alternate;
        }

        .glitch-lines {
          background: repeating-linear-gradient(
            to bottom,
            rgba(0, 255, 0, 0.1),
            rgba(0, 255, 0, 0.1) 2px,
            transparent 4px,
            transparent 6px
          );
          background-size: 100% 6px;
        }
      `}</style>
    </motion.div>
  );
};

export default TypingGlitchText;
