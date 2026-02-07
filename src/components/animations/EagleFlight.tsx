"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Original GSAP Bezier waypoints from the Rails app:
// entry:   [{x:100,y:-20}, {x:300,y:10}]
// looping: [{x:510,y:60}, {x:620,y:-60}, {x:500,y:-100}, {x:380,y:20}, {x:500,y:60}, {x:580,y:20}, {x:620,y:15}]
// leave:   [{x:660,y:20}, {x:800,y:130}, {x:windowWidth,y:-10}]
//
// Converted to keyframe arrays for Framer Motion useTransform.
// The timeline had durations 1.2 (entry) + 2.0 (looping) + 1.0 (leave) = 4.2 total.
// Normalized progress: entry ends at ~0.286, looping ends at ~0.762, leave ends at 1.0.

const progressKeys = [
  0, 0.143, 0.286, 0.355, 0.423, 0.492, 0.560, 0.629, 0.697, 0.762, 0.881,
  1.0,
];

const xKeys = [0, 100, 300, 510, 620, 500, 380, 500, 580, 620, 800, 1200];
const yKeys = [0, -20, 10, 60, -60, -100, 20, 60, 20, 15, 130, -10];
const rotateKeys = [0, -5, 3, 8, -15, -20, 5, 10, 3, 2, 15, -3];

export function EagleFlight() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const x = useTransform(scrollYProgress, progressKeys, xKeys);
  const y = useTransform(scrollYProgress, progressKeys, yKeys);
  const rotate = useTransform(scrollYProgress, progressKeys, rotateKeys);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ x, y, rotate }}
        className="absolute top-1/2 left-0"
      >
        <Image
          src="/images/eagle-2.png"
          alt="Eagle in flight"
          width={120}
          height={72}
          priority
        />
      </motion.div>
    </div>
  );
}
