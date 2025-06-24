"use client"
import { useState } from "react";
import Image from "next/image";
import GlitchText from "../components/glitchtext";

const tabs = [
  {
    label: "ABOUT GCODES",
    video: "/portfolio.mp4",
    content: "This is the ABOUT GCODES section.",
    videoClass: "object-cover" // default styling
  },
  {
    label: "MEET GCODES",
    video: "/meet.mp4",
    content: "Get to know the team behind GCODES.",
    videoClass: "object-contain bottom-0 absolute h-3/5" // custom video position
  },
  {
    label: "FEATURED PROJECTS",
    video: "/featured-projects.mp4",
    content: "Check out our highlighted projects.",
    videoClass: "object-cover"
  },
  {
    label: "GET IN TOUCH",
    video: "/get-in-touch.mp4",
    content: "Let's connect and collaborate.",
    videoClass: "object-cover"
  }
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-9/12 h-11/12 border-[0.5px] border-[#008b7a]">
        {/* Header */}
        <div className="text-white border-b border-b-[#008b7a] h-14 relative flex justify-center items-center">
          <div className="absolute left-10">
            <Image src="/images/LOGO.svg" alt="Logo" width={100} height={100} />
          </div>
          <h1>Build | Chain | Animate</h1>
        </div>

        {/* Main Content */}
        <div className="relative w-full h-[calc(100%-3.5rem)] bg-black overflow-hidden">
          {/* Background Video */}
          <video
            key={activeTab.video}
            className={`absolute top-0 left-0 w-8/12 h-10/12 z-0 mix-blend-screen opacity-80 ${activeTab.videoClass}`}
            autoPlay
            muted
            loop
          >
            <source src={activeTab.video} type="video/mp4" />
          </video>

          {/* Edge Fade Overlay */}
          <div className="absolute top-0 left-0 w-8/12 h-10/12 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_40%,_rgba(0,0,0,0.9)_90%)]" />
          </div>

          {/* Tab Buttons */}
          <div className="absolute bottom-6 px-8 z-20 flex text-sm space-x-4">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex justify-center items-center px-4 relative cursor-pointer ${
                  activeIndex === index ? "text-[#00ffe1]" : "text-white"
                } hover:text-[#008b7a] transition-colors duration-300`}
              >
                <div className="p-2">
                  {activeIndex === index && (
                    <div className="absolute inset-0 border-2 border-transparent pointer-events-none">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#008b7a]" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#008b7a]" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#008b7a]" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#008b7a]" />
                    </div>
                  )}
                  <GlitchText
                    text={tab.label}
                    glitchChars="_}{()/\\][|<>]"
                    className="text"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right-Side Content */}
          <div className="absolute right-5 top-5 z-20 w-[30%] h-11/12 text-white flex flex-col justify-between">
            <div className="border border-white w-32 h-10 flex items-center justify-center">
              {activeTab.label}
            </div>
            <div className="border border-white w-full h-[75%] p-4 overflow-y-auto">
              {activeTab.content}
            </div>
            <div className="bg-white w-full h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
