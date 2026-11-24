"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Pure Minimalist Swallow Silhouette (Burung Walet / Sriti Estetik)
 * - Desain siluet organik murni tanpa elemen kartun (tidak ada paruh bebek / mata kancing)
 * - Sayap aerodinamis khas burung walet dengan animasi kepakan lentur (morphing curves)
 * - Tampilan anggun, profesional, dan mewah (dark obsidian + emerald aura)
 */
function MinimalistSwallow({
  size = 46,
  color = "#27272a",
  glowColor = "rgba(16,185,129,0.3)",
  flapSpeed = 0.55,
}: {
  size?: number;
  color?: string;
  glowColor?: string;
  flapSpeed?: number;
}) {
  // Sayap Atas (Upstroke): Sayap melengkung anggun ke atas
  const wingUp =
    "M 14 6 Q 30 14, 45 27 Q 60 14, 76 6 Q 62 20, 45 28 Q 28 20, 14 6 Z";
  
  // Sayap Meluncur (Glide): Sayap terbentang lurus aerodinamis
  const wingGlide =
    "M 6 22 Q 26 23, 45 27 Q 64 23, 84 22 Q 65 29, 45 29 Q 25 29, 6 22 Z";
  
  // Sayap Bawah (Downstroke): Sayap menukik ke bawah mendorong udara
  const wingDown =
    "M 16 46 Q 30 36, 45 29 Q 60 36, 74 46 Q 60 35, 45 30 Q 30 35, 16 46 Z";

  return (
    <div
      style={{
        width: size,
        height: (size * 52) / 90,
        filter: `drop-shadow(0 2px 10px ${glowColor})`,
      }}
      className="relative select-none pointer-events-none"
    >
      <svg
        viewBox="0 0 90 52"
        className="w-full h-full overflow-visible"
        style={{ color }}
      >
        <defs>
          <linearGradient id="swallowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" />
            <stop offset="60%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
        </defs>

        {/* 1. SEPASANG SAYAP LENTUR (FLAPPING WINGS) */}
        <motion.path
          d={wingGlide}
          fill="url(#swallowGrad)"
          stroke="#10b981"
          strokeWidth="0.75"
          strokeOpacity="0.4"
          animate={{
            d: [wingUp, wingGlide, wingDown, wingGlide, wingUp],
          }}
          transition={{
            duration: flapSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 2. BADAN & EKOR WALET BERCABANG (SWALLOWTAIL SILHOUETTE) */}
        <g>
          {/* Ekor bercabang khas burung walet */}
          <path
            d="M 45 28 L 36 50 L 45 42 L 54 50 Z"
            fill="url(#swallowGrad)"
            stroke="#10b981"
            strokeWidth="0.6"
            strokeOpacity="0.35"
          />

          {/* Badan ramping & kepala streamline */}
          <path
            d="M 45 10 C 42 12, 40 18, 41 28 C 42 35, 45 42, 45 42 C 45 42, 48 35, 49 28 C 50 18, 48 12, 45 10 Z"
            fill="url(#swallowGrad)"
            stroke="#10b981"
            strokeWidth="0.6"
            strokeOpacity="0.5"
          />

          {/* Ujung kepala lancip siluet */}
          <path d="M 44 11 L 45 7 L 46 11 Z" fill="#34d399" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Burung Hinggap di Dahan (Perched Silhouette):
 * - Siluet burung minimalis yang bertengger di ranting
 * - Bernapas halus dan ekor sesekali bergerak
 * - Klik / sentuh untuk terbang
 */
function MinimalistPerchedSwallow({
  onTakeoff,
}: {
  onTakeoff: () => void;
}) {
  return (
    <motion.div
      className="absolute z-20 cursor-pointer pointer-events-auto select-none group"
      style={{
        left: "36%",
        top: "40%",
        width: 38,
        height: 34,
      }}
      onClick={onTakeoff}
      onMouseEnter={onTakeoff}
      title="Sentuh atau klik burung untuk membuatnya terbang!"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0, y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -m-1 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/25 blur-sm transition-all duration-300" />

      <svg
        viewBox="0 0 46 40"
        className="w-full h-full overflow-visible drop-shadow-[0_2px_8px_rgba(16,185,129,0.35)]"
      >
        <defs>
          <linearGradient id="perchedSwallowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" />
            <stop offset="70%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
        </defs>

        {/* Ekor walet menjuntai */}
        <motion.path
          d="M 24 25 L 36 38 L 33 39 L 22 28 Z"
          fill="#18181b"
          stroke="#10b981"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          animate={{
            rotate: [0, 0, -4, 2, 0, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "23px 26px" }}
        />

        {/* Kaki mungil di dahan */}
        <path
          d="M 16 28 L 15 32 M 19 28 L 18 32"
          stroke="#10b981"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* Badan burung dengan nafas halus */}
        <motion.g
          animate={{
            y: [0, -0.6, 0],
            scaleY: [1, 1.02, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "17px 28px" }}
        >
          {/* Siluet badan ramping */}
          <path
            d="M 10 16 C 8 21, 10 27, 15 28 C 21 29, 25 27, 27 23 C 26 18, 24 14, 20 11 C 15 9, 11 12, 10 16 Z"
            fill="url(#perchedSwallowGrad)"
            stroke="#27272a"
            strokeWidth="0.6"
          />

          {/* Sayap terlipat */}
          <path
            d="M 15 14 C 20 13, 25 16, 27 21 C 29 25, 27 29, 24 32 C 21 31, 18 28, 16 23 C 14 19, 14 16, 15 14 Z"
            fill="#18181b"
            stroke="#10b981"
            strokeWidth="0.6"
            strokeOpacity="0.6"
          />

          {/* Kepala siluet menoleh */}
          <path
            d="M 9 15 C 8 11, 11 8, 15 8 C 18 8, 20 10, 19 14 C 16 13, 12 13, 9 15 Z"
            fill="#27272a"
            stroke="#34d399"
            strokeWidth="0.4"
            strokeOpacity="0.4"
          />
          <path d="M 4 14 L 9 12.5 L 9 16 Z" fill="#34d399" opacity="0.8" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/**
 * Ranting Pohon Estetik (Zen Botanical Corner Branch)
 * - Ditempatkan ABSOLUTE di header / hero (TIDAK LAGI FIXED mengikuti scroll!)
 * - Tidak akan menghalangi judul "Proyek Pilihan" atau kartu konten saat di-scroll
 */
function MinimalistCornerBranch({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="absolute top-0 right-0 pointer-events-none z-10 w-[220px] sm:w-[300px] md:w-[360px] aspect-[360/240] overflow-visible opacity-85">
      <motion.div
        className="w-full h-full relative"
        animate={{
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 8,
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
            <linearGradient id="cleanBark" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#27272a" />
              <stop offset="60%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>

            <linearGradient id="cleanLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="80%" stopColor="#064e3b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>

          {/* Batang Utama Halus */}
          <path
            d="M 360 -10 C 310 15, 260 42, 205 82 C 160 115, 115 135, 50 142 C 95 150, 150 134, 195 98 C 250 58, 305 28, 360 35 Z"
            fill="url(#cleanBark)"
            stroke="#27272a"
            strokeWidth="0.6"
          />

          {/* Dahan Tempat Bertengger */}
          <path
            d="M 205 82 C 170 92, 135 100, 85 106 C 132 107, 168 98, 198 87 Z"
            fill="url(#cleanBark)"
            stroke="#10b981"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />

          {/* Ranting Atas */}
          <path
            d="M 275 35 C 245 20, 212 12, 170 14 C 205 20, 238 30, 266 44 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="0.5"
          />

          {/* Ranting Bawah */}
          <path
            d="M 230 62 C 198 102, 166 142, 120 172 C 150 148, 182 114, 216 75 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="0.5"
          />

          {/* Dedaunan Minimalis Elegan */}
          <g>
            <path
              d="M 170 14 C 160 7, 146 8, 138 16 C 148 19, 163 18, 170 14 Z"
              fill="url(#cleanLeaf)"
              stroke="#34d399"
              strokeWidth="0.4"
              strokeOpacity="0.4"
            />
            <path
              d="M 218 22 C 213 12, 202 10, 196 17 C 204 21, 213 22, 218 22 Z"
              fill="url(#cleanLeaf)"
              stroke="#34d399"
              strokeWidth="0.4"
              strokeOpacity="0.3"
            />
            <path
              d="M 85 106 C 75 100, 64 104, 58 113 C 69 115, 80 111, 85 106 Z"
              fill="url(#cleanLeaf)"
              stroke="#10b981"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
            <path
              d="M 142 96 C 137 87, 127 86, 122 93 C 130 96, 138 97, 142 96 Z"
              fill="url(#cleanLeaf)"
              stroke="#34d399"
              strokeWidth="0.4"
              strokeOpacity="0.3"
            />
            <path
              d="M 120 172 C 111 168, 100 173, 96 183 C 107 183, 116 178, 120 172 Z"
              fill="url(#cleanLeaf)"
              stroke="#10b981"
              strokeWidth="0.4"
              strokeOpacity="0.4"
            />
            <path
              d="M 50 142 C 39 138, 28 145, 25 155 C 36 155, 46 150, 50 142 Z"
              fill="url(#cleanLeaf)"
              stroke="#34d399"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </g>
        </svg>

        {children}
      </motion.div>
    </div>
  );
}

/**
 * FlyingBirds Component
 * - Berada di area langit atas (header/hero)
 * - Tidak akan menutupi atau mengganggu kartu proyek saat di-scroll
 */
export default function FlyingBirds() {
  const [isResting, setIsResting] = useState<boolean>(true);

  const triggerTakeoff = useCallback(() => {
    setIsResting(false);
  }, []);

  // Istirahat di dahan selama 7 detik lalu terbang
  useEffect(() => {
    if (!isResting) return;

    const timer = setTimeout(() => {
      triggerTakeoff();
    }, 7000);

    return () => clearTimeout(timer);
  }, [isResting, triggerTakeoff]);

  const handleFlightComplete = useCallback(() => {
    setIsResting(true);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-[100vh] pointer-events-none z-20 overflow-hidden">
      {/* 1. RANTING POHON & BURUNG HINGGAP */}
      <MinimalistCornerBranch>
        <AnimatePresence>
          {isResting && (
            <MinimalistPerchedSwallow onTakeoff={triggerTakeoff} />
          )}
        </AnimatePresence>
      </MinimalistCornerBranch>

      {/* 2. BURUNG 1: TERBANG ANGGUN MEMBELAH LANGIT DENGAN KEPALA DI DEPAN */}
      <AnimatePresence>
        {!isResting && (
          <motion.div
            key="bird1-swallow"
            className="absolute"
            initial={{
              x: "82vw",
              y: "10vh",
              scaleX: 1, // Menghadap kiri
              rotate: -15,
              opacity: 0,
            }}
            animate={{
              // Lintasan melengkung anggun di langit atas
              x: [
                "82vw",
                "58vw",
                "30vw",
                "12vw",
                "8vw",
                "15vw",
                "42vw",
                "68vw",
                "82vw",
              ],
              y: [
                "10vh",
                "16vh",
                "12vh",
                "18vh",
                "22vh",
                "24vh",
                "18vh",
                "14vh",
                "10vh",
              ],
              scaleX: [
                1,  // Menghadap kiri
                1,  // Menghadap kiri
                1,  // Menghadap kiri
                1,  // Bank turn
                -1, // Berbalik menghadap kanan
                -1, // Menghadap kanan
                -1, // Menghadap kanan
                -1, // Menghadap kanan
                1,  // Hinggap kembali ke dahan
              ],
              rotate: [
                -15, -4, 4, 12, -14, -6, -2, -1, 0,
              ],
              opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1],
            }}
            transition={{
              duration: 18,
              times: [0, 0.18, 0.38, 0.48, 0.55, 0.62, 0.76, 0.9, 1],
              ease: "easeInOut",
            }}
            onAnimationComplete={handleFlightComplete}
          >
            <MinimalistSwallow
              size={48}
              color="#27272a"
              glowColor="rgba(16,185,129,0.3)"
              flapSpeed={0.52}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. BURUNG 2: PENDAMPING DI LANGIT TINGGI */}
      <motion.div
        className="absolute"
        initial={{
          scaleX: -1, // Menghadap kanan searah gerak dari kiri ke kanan
        }}
        animate={{
          x: ["-10vw", "22vw", "54vw", "84vw", "115vw"],
          y: ["14vh", "11vh", "17vh", "13vh", "16vh"],
          rotate: [-4, 2, -3, 3, -2],
        }}
        transition={{
          duration: 25,
          delay: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MinimalistSwallow
          size={36}
          color="#3f3f46"
          glowColor="rgba(255,255,255,0.15)"
          flapSpeed={0.62}
        />
      </motion.div>
    </div>
  );
}
