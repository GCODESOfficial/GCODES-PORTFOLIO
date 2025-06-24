"use client";
import { createContext, useContext, useState } from "react";

type TypingGlitchContextType = {
  isTypingGlitchVisible: boolean;
  setTypingGlitchVisible: (visible: boolean) => void;
};

const TypingGlitchContext = createContext<TypingGlitchContextType>({
  isTypingGlitchVisible: false,
  setTypingGlitchVisible: () => {},
});

export const TypingGlitchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTypingGlitchVisible, setTypingGlitchVisible] = useState(false);

  return (
    <TypingGlitchContext.Provider value={{ isTypingGlitchVisible, setTypingGlitchVisible }}>
      {children}
    </TypingGlitchContext.Provider>
  );
};

export const useTypingGlitch = () => useContext(TypingGlitchContext);