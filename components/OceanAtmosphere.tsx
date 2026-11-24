"use client";

import { motion } from "framer-motion";

/**
 * Minimalist Swimming Fish Silhouette (Siluet Ikan Laut / Koi Anggun)
 * - Badan ramping aerodinamis khas ikan perenang cepat
 * - Ekor meliuk fleksibel dengan gerakan renang alami (sinuous tail stroke)
 * - Aksen cahaya bioluminescent cyan & emerald yang lembut
 */
function MinimalistFish({
  size = 48,
  glowColor = "rgba(6,182,212,0.35)",
  accentColor = "#06b6d4",
  swimSpeed = 0.8,
}: {
  size?: number;
  glowColor?: string;
  accentColor?: string;
  swimSpeed?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: (size * 26) / 58,
      }}
      className="relative select-none pointer-events-none sm:drop-shadow-[0_2px_8px_rgba(6,182,212,0.35)] transform-gpu"
    >
      <svg
        viewBox="0 0 62 28"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Gradasi badan ikan laut dalam */}
          <linearGradient id="fishBodyGrad" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="40%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Gradasi sirip transparan */}
          <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* 1. SIRIP EKOR YANG MELIUK BERENANG (SWIMMING CAUDAL FIN) */}
        <motion.g
          style={{ transformOrigin: "14px 14px" }}
          animate={{
            rotate: [-14, 14, -14],
            skewY: [-8, 8, -8],
          }}
          transition={{
            duration: swimSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Ekor melengkung lentur */}
          <path
            d="M 14 14 C 9 8, 2 5, 0 8 C 3 12, 5 14, 0 18 C 3 20, 9 19, 14 14 Z"
            fill="url(#finGrad)"
            stroke={accentColor}
            strokeWidth="0.6"
            strokeOpacity="0.6"
          />
          {/* Tulang sirip ekor */}
          <path
            d="M 14 14 L 2 9 M 14 14 L 2 17"
            stroke={accentColor}
            strokeWidth="0.4"
            strokeOpacity="0.4"
            fill="none"
          />
        </motion.g>

        {/* 2. SIRIP PUNGGUNG & DADA (DORSAL & PECTORAL FINS) */}
        <path
          d="M 32 8 C 26 4, 20 6, 18 9 C 24 9, 28 8.5, 32 8 Z"
          fill="url(#finGrad)"
          stroke={accentColor}
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />
        <path
          d="M 38 18 C 33 22, 28 22, 26 19 C 30 18.5, 34 18, 38 18 Z"
          fill="url(#finGrad)"
          stroke={accentColor}
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />

        {/* 3. BADAN IKAN STREAMLINE & KEPALA (AERODYNAMIC FISH FUSELAGE) */}
        <g>
          {/* Siluet badan ramping menghadap kanan */}
          <path
            d="M 60 14 C 54 8, 38 7, 24 10 C 17 12, 13 14, 13 14 C 13 14, 17 16, 24 18 C 38 21, 54 20, 60 14 Z"
            fill="url(#fishBodyGrad)"
            stroke={accentColor}
            strokeWidth="0.75"
            strokeOpacity="0.5"
          />

          {/* Garis insang bioluminescent */}
          <path
            d="M 45 10 C 44 13, 44 15, 45 18"
            stroke={accentColor}
            strokeWidth="0.6"
            strokeOpacity="0.5"
            fill="none"
          />

          {/* Kilau mata laut dalam */}
          <circle cx="53" cy="12.5" r="1.1" fill={accentColor} />
          <circle cx="53.3" cy="12.2" r="0.4" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Siluet Ikan Pari / Manta Ray Megah di Kedalaman
 */
function MinimalistManta({
  size = 72,
}: {
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: (size * 44) / 72,
        filter: "drop-shadow(0 4px 14px rgba(6,182,212,0.25))",
      }}
      className="relative select-none pointer-events-none"
    >
      <svg
        viewBox="0 0 72 44"
        className="w-full h-full overflow-visible opacity-50"
      >
        <defs>
          <linearGradient id="mantaGrad" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="60%" stopColor="#082f49" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
        </defs>

        {/* Ekor cambuk tipis */}
        <path
          d="M 18 22 C 10 22, 2 24, 0 26"
          stroke="#06b6d4"
          strokeWidth="0.8"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* Sayap Manta mengepak meluncur */}
        <motion.path
          d="M 64 22 C 54 12, 38 4, 28 2 C 30 14, 24 20, 18 22 C 24 24, 30 30, 28 42 C 38 40, 54 32, 64 22 Z"
          fill="url(#mantaGrad)"
          stroke="#06b6d4"
          strokeWidth="0.75"
          strokeOpacity="0.4"
          animate={{
            scaleY: [1, 0.88, 1],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "35px 22px" }}
        />
      </svg>
    </div>
  );
}

/**
 * Gelembung Mikro Naik (Rising Underwater Bubbles)
 */
function RisingBubbles() {
  const bubbles = [
    { id: 1, left: "8%", size: 6, duration: 14, delay: 0 },
    { id: 2, left: "18%", size: 4, duration: 18, delay: 3 },
    { id: 3, left: "28%", size: 8, duration: 16, delay: 1.5 },
    { id: 4, left: "42%", size: 5, duration: 20, delay: 5 },
    { id: 5, left: "55%", size: 7, duration: 15, delay: 2 },
    { id: 6, left: "68%", size: 4, duration: 19, delay: 6 },
    { id: 7, left: "78%", size: 9, duration: 17, delay: 4 },
    { id: 8, left: "88%", size: 5, duration: 21, delay: 1 },
    { id: 9, left: "94%", size: 6, duration: 16, delay: 7 },
  ];

  return (
    <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_6px_rgba(6,182,212,0.3)] backdrop-blur-[0.5px]"
          style={{
            left: b.left,
            bottom: "-20px",
            width: b.size,
            height: b.size,
          }}
          animate={{
            y: ["0px", "-1600px"],
            x: [0, 8, -8, 6, -4, 0],
            opacity: [0, 0.7, 0.8, 0.6, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/**
 * The Deep Ocean Atmosphere (Alam Samudra / Laut Dalam)
 * Melingkupi bagian bawah website:
 * - Kawanan Ikan Berenang (School of Fish) mengikuti arus air
 * - Ikan Pari Manta meluncur megah di kedalaman
 * - Gelembung air mikro naik perlahan
 * - Gelombang arus cahaya laut (Oceanic Caustics & Sunbeams)
 */
export default function OceanAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      
      {/* 1. UNDERWATER CAUSTIC AMBIENT GLOW (Desktop Only) */}
      <motion.div
        animate={{
          opacity: [0.03, 0.07, 0.03],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden sm:block absolute top-1/3 left-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/15 blur-[160px]"
      />

      <motion.div
        animate={{
          opacity: [0.04, 0.08, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden sm:block absolute bottom-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[150px]"
      />

      {/* 2. GELEMBUNG UDARA MIKRO (RISING BUBBLES - Desktop Only) */}
      <RisingBubbles />

      {/* 3. KAWANAN IKAN (SCHOOL OF FISH) */}
      
      {/* Ikan 1: Pemimpin Kawanan (Berenang dari Kiri ke Kanan) */}
      <motion.div
        className="absolute transform-gpu"
        animate={{
          x: ["-8vw", "28vw", "60vw", "92vw", "112vw"],
          y: ["18vh", "22vh", "16vh", "24vh", "20vh"],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MinimalistFish
          size={50}
          accentColor="#06b6d4"
          glowColor="rgba(6,182,212,0.35)"
          swimSpeed={0.75}
        />
      </motion.div>

      {/* Ikan 2: Mengikuti Ikan 1 (Formasi Bergerombol) */}
      <motion.div
        className="absolute transform-gpu"
        animate={{
          x: ["-12vw", "24vw", "56vw", "88vw", "108vw"],
          y: ["24vh", "27vh", "21vh", "29vh", "25vh"],
        }}
        transition={{
          duration: 27,
          delay: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MinimalistFish
          size={42}
          accentColor="#38bdf8"
          glowColor="rgba(56,189,248,0.35)"
          swimSpeed={0.7}
        />
      </motion.div>

      {/* Ikan 3: Ikan Kecil (Desktop Only) */}
      <motion.div
        className="hidden sm:block absolute opacity-80 transform-gpu"
        animate={{
          x: ["-16vw", "20vw", "52vw", "84vw", "104vw"],
          y: ["20vh", "25vh", "19vh", "26vh", "22vh"],
        }}
        transition={{
          duration: 28,
          delay: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MinimalistFish
          size={34}
          accentColor="#06b6d4"
          glowColor="rgba(6,182,212,0.25)"
          swimSpeed={0.82}
        />
      </motion.div>

      {/* Ikan 4: Ikan di Kedalaman Menengah (Desktop Only) */}
      <motion.div
        className="hidden sm:block absolute opacity-70 transform-gpu"
        animate={{
          x: ["-10vw", "30vw", "65vw", "95vw", "115vw"],
          y: ["62vh", "58vh", "66vh", "60vh", "64vh"],
        }}
        transition={{
          duration: 32,
          delay: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MinimalistFish
          size={44}
          accentColor="#2dd4bf"
          glowColor="rgba(45,212,191,0.25)"
          swimSpeed={0.8}
        />
      </motion.div>

      {/* Ikan 5: Ikan Berenang Sebaliknya (Desktop Only) */}
      <motion.div
        className="hidden sm:block absolute opacity-75 transform-gpu"
        initial={{ scaleX: -1 }}
        animate={{
          x: ["112vw", "82vw", "50vw", "18vw", "-10vw"],
          y: ["78vh", "74vh", "82vh", "76vh", "80vh"],
        }}
        transition={{
          duration: 34,
          delay: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MinimalistFish
          size={46}
          accentColor="#0ea5e9"
          glowColor="rgba(14,165,233,0.3)"
          swimSpeed={0.85}
        />
      </motion.div>

      {/* Ikan 6: Ikan Pari Manta di Samudra Paling Dalam (Desktop Only) */}
      <motion.div
        className="hidden sm:block absolute opacity-40 transform-gpu"
        animate={{
          x: ["-15vw", "25vw", "60vw", "90vw", "118vw"],
          y: ["86vh", "84vh", "88vh", "85vh", "87vh"],
        }}
        transition={{
          duration: 42,
          delay: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MinimalistManta size={78} />
      </motion.div>

    </div>
  );
}
