"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingGlitchText from "./components/TypingGlitchText";
import Explore from "./explore/page";

const Page = () => {
  const [showExplore, setShowExplore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowExplore(true), 3000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!showExplore ? (
        <motion.div
          key="typing"
          initial={{ opacity: 1 }} // No zoom, just opacity
          animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }} // Smooth opacity transition
        >
          <TypingGlitchText />
        </motion.div>
      ) : (
        <motion.div
          key="explore"
          initial={{ opacity: 0 }} // Start with opacity 0 for a fade-in effect
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 500 } // Snap transition
          }} // Snap effect when showing the explore page
        >
          <Explore />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Page;
