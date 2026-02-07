"use client";

import { AudioPlayer } from "@/components/audio/AudioPlayer";

interface EagleTransitionProps {
  heading: string;
  audioSrc: string;
  videoSrc: string;
  backgroundColor: string;
}

export function EagleTransition({
  heading,
  audioSrc,
  videoSrc,
  backgroundColor,
}: EagleTransitionProps) {
  return (
    <section className="min-h-[400px]" style={{ backgroundColor }}>
      <div className="px-4 md:px-[200px]">
        <h1 className="text-center text-white font-josefin text-[45px] italic font-bold text-shadow-dark pt-8">
          {heading}
        </h1>
        <div className="flex justify-center mt-4">
          <div className="w-[300px]">
            <AudioPlayer src={audioSrc} />
          </div>
        </div>
      </div>

      <div className="pt-[60px]">
        <video
          className="w-full"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
