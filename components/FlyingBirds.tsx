"use client";

import { motion } from "framer-motion";

function SilhouetteBird({
  size = 36,
  flapSpeed = 0.65,
  color = "currentColor",
}: {
  size?: number;
  flapSpeed?: number;
  color?: string;
}) {
  // SVG path morphing for natural bird flapping:
  // Wings High -> Wings Mid -> Wings Low -> Wings Mid -> Wings High
  const wingHigh =
    "M 3 5 Q 15 15, 26 19 Q 37 15, 49 5 Q 37 11, 26 17 Q 15 11, 3 5 Z";
  const wingMid =
    "M 3 13 Q 15 15, 26 18 Q 37 15, 49 13 Q 37 17, 26 18 Q 15 17, 3 13 Z";
  const wingLow =
    "M 3 24 Q 15 18, 26 18 Q 37 18, 49 24 Q 37 21, 26 19 Q 15 21, 3 24 Z";

  return (
    <div style={{ width: size, height: (size * 26) / 52 }} className="relative">
      <svg
        viewBox="0 0 52 26"
        className="w-full h-full overflow-visible"
        style={{ color }}
      >
        {/* Bird Wings Morphed */}
        <motion.path
          d={wingHigh}
          fill="currentColor"
          animate={{
            d: [wingHigh, wingMid, wingLow, wingMid, wingHigh],
          }}
          transition={{
            duration: flapSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Small Bird Head / Body silhouette */}
        <circle cx="26" cy="18" r="2.5" fill="currentColor" />
        <path d="M 25 19 L 26 23 L 27 19 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function FlyingBirds() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      
      {/* BURUNG 1: Terbang membelah langit dengan anggun dari kiri ke kanan */}
      <motion.div
        className="absolute text-emerald-400/70 drop-shadow-[0_2px_8px_rgba(16,185,129,0.25)]"
        animate={{
          x: ["-8vw", "22vw", "55vw", "85vw", "112vw"],
          y: ["14vh", "11vh", "19vh", "15vh", "22vh"],
          rotate: [6, 2, 8, 4, 7],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <SilhouetteBird size={34} flapSpeed={0.7} color="currentColor" />
      </motion.div>

      {/* BURUNG 2: Pendamping dengan ukuran sedikit lebih kecil (efek kedalaman/perspektif) */}
      <motion.div
        className="absolute text-zinc-300/60 drop-shadow-[0_2px_6px_rgba(255,255,255,0.15)]"
        animate={{
          x: ["-10vw", "18vw", "48vw", "82vw", "115vw"],
          y: ["22vh", "26vh", "18vh", "28vh", "24vh"],
          rotate: [8, 12, 5, 9, 6],
        }}
        transition={{
          duration: 26,
          delay: 4.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <SilhouetteBird size={25} flapSpeed={0.6} color="currentColor" />
      </motion.div>

    </div>
  );
}
