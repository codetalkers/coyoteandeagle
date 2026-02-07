"use client";

import { AudioPlayer } from "@/components/audio/AudioPlayer";

export function CoyoteTransition() {
  return (
    <section className="min-h-[400px] bg-coyote-purple">
      <div className="px-4 md:px-[200px]">
        <h1 className="text-center text-white font-josefin text-[45px] italic font-bold text-shadow-dark pt-8">
          Coyote begins his own path by looking for Eagle to learn more about
          his language and culture.
        </h1>
        <div className="flex justify-center mt-4">
          <div className="w-[300px]">
            <AudioPlayer src="/audio/coyote howl.mp3" />
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
          <source src="/videos/first_scene_test.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
