"use client";
import { useRouter } from "next/navigation";
import BackgroundVideo from "../components/BackgroundVideo";
import Image from "next/image";
import GlitchText from "../components/glitchtext";

const Explore = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BackgroundVideo />

      {/* Centered Text */}
      <div className="absolute bottom-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-6/12 space-y-7">
        <h1 className="font-[VT323] text-white text-2xl">
          Booted at [00:00:00], blazing 24/7
        </h1>
        <h1 className="text-4xl font-extrabold text-white">
          Billions of pixels, millions of ideas, one GCODES.
        </h1>
      </div>

      {/* Logo at Top Center */}
<div
  className="absolute top-5 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer pointer-events-auto"
  onClick={() => {
    router.push("/");
    router.refresh();
  }}
>
  <Image src="/images/LOGO.svg" alt="Logo" width={100} height={100} />
</div>


      {/* Glitch Animation Video */}
      <div className="absolute top-[40px] left-1/2 transform -translate-x-1/2 z-10 w-4/12">
        <video
          src="/glitchoon.webm"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none select-none w-full h-full object-cover"
        />
      </div>

      {/* Portfolio Button */}
      <div
        className="flex justify-center items-center w-full"
        onClick={() => router.push("/portfolio")}
      >
        <div className="absolute bottom-10 z-50 p-2 px-5 ">
          <div className="absolute inset-0 border-2 border-transparent pointer-events-none">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#008b7a]"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#008b7a]"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#008b7a]"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#008b7a]"></div>
          </div>
          <GlitchText text="VIEW PORTFOLIO" glitchChars="_}{()/\\][|<>]" className="text text-white" />
        </div>
      </div>
    </div>
  );
};

export default Explore;