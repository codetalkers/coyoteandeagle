"use client";

import { useRef, useEffect, useState } from "react";

export function HeroSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    function handleInteraction() {
      if (!hasInteracted) {
        setHasInteracted(true);
        audioRef.current?.play().catch(() => {});
      }
    }

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [hasInteracted]);

  return (
    <section
      className="h-[800px] bg-parallax"
      style={{ backgroundImage: "url('/images/landingpage-c-and-e.png')" }}
    >
      <audio ref={audioRef} src="/audio/landing_mix.mp3" preload="auto" />
    </section>
  );
}
