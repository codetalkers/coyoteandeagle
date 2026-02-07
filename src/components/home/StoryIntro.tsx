"use client";

import { AudioPlayer } from "@/components/audio/AudioPlayer";
import { EagleFlight } from "@/components/animations/EagleFlight";

export function StoryIntro() {
  return (
    <section
      className="relative min-h-[440px] bg-parallax"
      style={{ backgroundImage: "url('/images/hair-accessories2.png')" }}
    >
      <EagleFlight />

      <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none">
        <div className="max-w-3xl px-4 text-center pointer-events-auto">
          <h1 className="font-josefin text-4xl italic font-bold text-white text-shadow-dark mb-6">
            Stories of Language Preservation
          </h1>

          <p className="text-lg text-white text-shadow-dark mb-6 leading-relaxed">
            In the beginning there was a Coyote and an Eagle. The old coyote was
            a trickster who was native to the urban area, while the wise Eagle
            was from the rural reservation. Together they created this
            story-telling platform to learn, preserve, interact and share our
            diverse Native languages and cultures. The conversation started with
            a hello.
          </p>

          <div className="flex justify-center">
            <div className="w-[400px]">
              <AudioPlayer src="/audio/hellos.mp3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
