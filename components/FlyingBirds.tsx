"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Pure Minimalist Swallow Silhouette (Siluet Burung Walet Anggun)
 * - Kedua sayap terlihat jelas dan simetris (gradasi vertikal slate + rim light biru langit)
 * - Kepala dan paruh selalu menghadap ke arah terbang (tidak pernah terbang mundur)
 * - Animasi kepakan sayap aerodinamis lentur dan anggun
 */
function MinimalistSwallow({
  size = 46,
  glowColor = "rgba(56,189,248,0.4)",
  flapSpeed = 0.5,
  direction = "right",
}: {
  size?: number;
  glowColor?: string;
  flapSpeed?: number;
  direction?: "left" | "right";
}) {
  // Koordinat sayap mengepak simetris (kedua sayap kiri dan kanan sama jelasnya)
  const wingUp =
    "M 12 4 Q 28 12, 45 26 Q 62 12, 78 4 Q 63 18, 45 28 Q 27 18, 12 4 Z";
  const wingGlide =
    "M 4 20 Q 25 22, 45 26 Q 65 22, 86 20 Q 66 28, 45 29 Q 24 28, 4 20 Z";
  const wingDown =
    "M 14 44 Q 28 34, 45 28 Q 62 34, 76 44 Q 62 33, 45 30 Q 28 33, 14 44 Z";

  return (
    <div
      style={{
        width: size,
        height: (size * 52) / 90,
        transform: direction === "left" ? "scaleX(-1)" : "none",
      }}
      className="relative select-none pointer-events-none sm:drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] transform-gpu"
    >
      <svg
        viewBox="0 0 90 52"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Gradasi Vertikal Simetris: Kedua sayap mendapatkan pencahayaan yang sama persis */}
          <linearGradient id="swallowGradSymmetric" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="45%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* 1. SEPASANG SAYAP AERODINAMIS LENTUR (FLAPPING DUAL WINGS) */}
        <motion.path
          d={wingGlide}
          fill="url(#swallowGradSymmetric)"
          stroke="#38bdf8"
          strokeWidth="0.8"
          strokeOpacity="0.85"
          animate={{
            d: [wingUp, wingGlide, wingDown, wingGlide, wingUp],
          }}
          transition={{
            duration: flapSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 2. EKOR BERCABANG WALET (SWALLOW FORKED TAIL) */}
        <path
          d="M 45 28 L 35 50 L 45 42 L 55 50 Z"
          fill="url(#swallowGradSymmetric)"
          stroke="#38bdf8"
          strokeWidth="0.7"
          strokeOpacity="0.75"
        />

        {/* 3. BADAN STREAMLINE & KEPALA (AERODYNAMIC BODY & BEAK) */}
        <path
          d="M 45 9 C 41 12, 40 18, 41 28 C 42 35, 45 42, 45 42 C 45 42, 48 35, 49 28 C 50 18, 49 12, 45 9 Z"
          fill="url(#swallowGradSymmetric)"
          stroke="#38bdf8"
          strokeWidth="0.7"
          strokeOpacity="0.85"
        />

        {/* Ujung Paruh Tajam Minimalis Menghadap Depan */}
        <path d="M 44 9 L 45 5 L 46 9 Z" fill="#7dd3fc" />
      </svg>
    </div>
  );
}

/**
 * Burung Hinggap di Dahan (Perched Silhouette di Ranting Pojok)
 */
function MinimalistPerchedSwallow({
  onTakeoff,
}: {
  onTakeoff: () => void;
}) {
  return (
    <motion.div
      className="absolute top-[34%] right-[44%] w-[14%] aspect-[46/40] cursor-pointer group pointer-events-auto"
      onClick={onTakeoff}
      title="Klik untuk menerbangkan burung walet"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -1, 0, 0.5, 0],
      }}
      transition={{
        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      }}
      exit={{ scale: 0.8, opacity: 0, y: -8 }}
    >
      <div className="absolute inset-0 -m-1 rounded-full bg-sky-500/10 group-hover:bg-sky-500/25 blur-sm transition-all duration-300" />

      <svg
        viewBox="0 0 46 40"
        className="w-full h-full overflow-visible sm:drop-shadow-[0_2px_10px_rgba(56,189,248,0.4)]"
      >
        <defs>
          <linearGradient id="perchedSwallowGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* Ekor Walet menjuntai */}
        <path
          d="M 24 25 L 36 38 L 33 39 L 22 28 Z"
          fill="url(#perchedSwallowGrad)"
          stroke="#38bdf8"
          strokeWidth="0.6"
          strokeOpacity="0.7"
        />

        {/* Kaki mungil mencengkeram ranting */}
        <path
          d="M 16 28 L 15 32 M 19 28 L 18 32"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Sayap tertutup rapi */}
        <path
          d="M 16 16 C 18 16, 26 21, 29 27 C 27 28, 22 27, 18 22 Z"
          fill="#334155"
          stroke="#38bdf8"
          strokeWidth="0.6"
          strokeOpacity="0.75"
        />

        {/* Badan & Kepala menoleh alami ke kiri (arah langit bebas) */}
        <motion.g
          animate={{
            rotate: [0, -3, 0, 4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "15px 20px" }}
        >
          <path
            d="M 15 14 C 20 13, 25 16, 27 21 C 29 25, 27 29, 24 32 C 21 31, 18 28, 16 23 C 14 19, 14 16, 15 14 Z"
            fill="url(#perchedSwallowGrad)"
            stroke="#38bdf8"
            strokeWidth="0.7"
            strokeOpacity="0.8"
          />
          <path
            d="M 9 15 C 8 11, 11 8, 15 8 C 18 8, 20 10, 19 14 C 16 13, 12 13, 9 15 Z"
            fill="#475569"
            stroke="#7dd3fc"
            strokeWidth="0.5"
            strokeOpacity="0.8"
          />
          {/* Paruh mungil */}
          <path d="M 4 14 L 9 12.5 L 9 16 Z" fill="#7dd3fc" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/**
 * Ranting Pohon Pojok Kanan Atas (Zen Corner Branch)
 * Menggunakan absolute (bukan fixed) sehingga mengikuti scroll dan tidak menutupi Proyek
 */
function MinimalistCornerBranch({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="absolute top-0 right-0 pointer-events-none z-10 w-[170px] sm:w-[320px] aspect-[360/240] overflow-visible opacity-90">
      <motion.div
        className="w-full h-full relative"
        animate={{
          rotate: [-0.4, 0.4, -0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top right" }}
      >
        <svg
          viewBox="0 0 360 240"
          className="w-full h-full overflow-visible drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        >
          <defs>
            <linearGradient id="zenBark" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="60%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="zenLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Dahan Utama */}
          <path
            d="M 360 0 C 310 15, 250 42, 205 82 C 160 122, 135 152, 105 180"
            stroke="url(#zenBark)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Ranting Tempat Bertengger Burung */}
          <path
            d="M 205 82 C 170 92, 135 100, 85 106 C 132 107, 168 98, 198 87 Z"
            fill="url(#zenBark)"
            stroke="#38bdf8"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />

          {/* Ranting Cabang Atas & Bawah */}
          <path
            d="M 270 28 C 235 22, 205 18, 165 14"
            stroke="url(#zenBark)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 145 140 C 115 150, 75 160, 40 148"
            stroke="url(#zenBark)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Dedaunan Estetik Bernuansa Sky Blue Halus */}
          <g>
            <path
              d="M 170 14 C 160 7, 146 8, 138 16 C 148 19, 163 18, 170 14 Z"
              fill="url(#zenLeaf)"
              stroke="#7dd3fc"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
            <path
              d="M 218 22 C 213 12, 202 10, 196 17 C 204 21, 213 22, 218 22 Z"
              fill="url(#zenLeaf)"
              stroke="#7dd3fc"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
            <path
              d="M 85 106 C 75 100, 64 104, 58 113 C 69 115, 80 111, 85 106 Z"
              fill="url(#zenLeaf)"
              stroke="#38bdf8"
              strokeWidth="0.6"
              strokeOpacity="0.6"
            />
            <path
              d="M 142 96 C 137 87, 127 86, 122 93 C 130 96, 138 97, 142 96 Z"
              fill="url(#zenLeaf)"
              stroke="#7dd3fc"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
            <path
              d="M 120 172 C 111 168, 100 173, 96 183 C 107 183, 116 178, 120 172 Z"
              fill="url(#zenLeaf)"
              stroke="#38bdf8"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
            <path
              d="M 50 142 C 39 138, 28 145, 25 155 C 36 155, 46 150, 50 142 Z"
              fill="url(#zenLeaf)"
              stroke="#7dd3fc"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
          </g>
        </svg>

        {children}
      </motion.div>
    </div>
  );
}

/**
 * The Sky Swallows Atmosphere (Kawanan Burung Walet di Langit)
 * Bagian atas website:
 * - Burung bertengger di ranting pohon pojok kanan atas
 * - Saat terbang, meluncur anggun selalu menghadap ke depan
 * - Kawanan burung melintasi langit di antara awan-awan lembut
 */
export default function FlyingBirds() {
  const [isResting, setIsResting] = useState(true);

  const triggerTakeoff = useCallback(() => {
    setIsResting(false);
  }, []);

  // Istirahat di dahan selama 8 detik lalu terbang menjelajahi langit
  useEffect(() => {
    if (!isResting) return;

    const timer = setTimeout(() => {
      triggerTakeoff();
    }, 8000);

    return () => clearTimeout(timer);
  }, [isResting, triggerTakeoff]);

  const handleFlightComplete = useCallback(() => {
    setIsResting(true);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-[100vh] pointer-events-none z-20 overflow-hidden">
      
      {/* 1. RANTING POHON & BURUNG BERTENGGER */}
      <MinimalistCornerBranch>
        <AnimatePresence>
          {isResting && (
            <MinimalistPerchedSwallow onTakeoff={triggerTakeoff} />
          )}
        </AnimatePresence>
      </MinimalistCornerBranch>

      {/* 2. BURUNG DAHAN SAAT LEPAS LANDAS (SELALU MENGHADAP DEPAN & BERPUTAR ANGGUN) */}
      <AnimatePresence>
        {!isResting && (
          <motion.div
            key="branch-swallow-flight"
            className="absolute"
            initial={{
              x: "82vw",
              y: "11vh",
              opacity: 0,
            }}
            animate={{
              // Meluncur dari dahan ke kiri, melintasi awan, lalu kembali
              x: [
                "82vw",
                "58vw",
                "28vw",
                "8vw",
                "-6vw",
              ],
              y: [
                "11vh",
                "18vh",
                "14vh",
                "22vh",
                "18vh",
              ],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 9,
              ease: "easeInOut",
            }}
            onAnimationComplete={handleFlightComplete}
          >
            {/* Menghadap ke kiri (arah terbangnya) */}
            <MinimalistSwallow
              size={48}
              glowColor="rgba(56,189,248,0.4)"
              flapSpeed={0.48}
              direction="left"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. KAWANAN BURUNG MELINTAS DI LANGIT (Desktop Only untuk efisiensi scroll mobile) */}
      
      {/* Burung 1: Pemimpin Kawanan (Terbang dari Kiri ke Kanan) */}
      <motion.div
        className="hidden sm:block absolute transform-gpu"
        animate={{
          x: ["-8vw", "25vw", "58vw", "88vw", "112vw"],
          y: ["14vh", "11vh", "17vh", "13vh", "16vh"],
        }}
        transition={{
          duration: 22,
          delay: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MinimalistSwallow
          size={40}
          glowColor="rgba(56,189,248,0.35)"
          flapSpeed={0.52}
          direction="right"
        />
      </motion.div>

      {/* Burung 2: Pengiring (Formasi Sayap Belakang) */}
      <motion.div
        className="hidden sm:block absolute transform-gpu"
        animate={{
          x: ["-14vw", "19vw", "52vw", "82vw", "106vw"],
          y: ["18vh", "15vh", "21vh", "17vh", "20vh"],
        }}
        transition={{
          duration: 23,
          delay: 2.2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MinimalistSwallow
          size={34}
          glowColor="rgba(56,189,248,0.3)"
          flapSpeed={0.5}
          direction="right"
        />
      </motion.div>

      {/* Burung 3: Burung Jauh di Latar Belakang (Kedalaman / Parallax Tinggi) */}
      <motion.div
        className="hidden sm:block absolute opacity-60 transform-gpu"
        animate={{
          x: ["-10vw", "28vw", "64vw", "94vw", "114vw"],
          y: ["7vh", "5vh", "9vh", "6vh", "8vh"],
        }}
        transition={{
          duration: 28,
          delay: 4.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MinimalistSwallow
          size={24}
          glowColor="rgba(255,255,255,0.2)"
          flapSpeed={0.62}
          direction="right"
        />
      </motion.div>

      {/* Burung 4: Burung Melintas Berlawanan Arah (Dari Kanan ke Kiri Menghadap Kiri) */}
      <motion.div
        className="hidden sm:block absolute opacity-75 transform-gpu"
        animate={{
          x: ["112vw", "82vw", "50vw", "18vw", "-10vw"],
          y: ["24vh", "28vh", "22vh", "27vh", "23vh"],
        }}
        transition={{
          duration: 25,
          delay: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MinimalistSwallow
          size={32}
          glowColor="rgba(56,189,248,0.3)"
          flapSpeed={0.54}
          direction="left"
        />
      </motion.div>

    </div>
  );
}
