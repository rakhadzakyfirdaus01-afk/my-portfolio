"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * HD Two-Winged Flying Bird Component:
 * - Natural SVG orientation: Facing LEFT (beak on left, tail on right)
 * - TWO distinct symmetrical wings (Upper Wing & Lower Wing)
 * - Flap & Glide cycle: 4 vigorous flaps followed by an outstretched soaring glide
 * - Swallow-tail with twin streamers & sharp golden beak with emerald eye glint
 */
function HDTwoWingedBird({
  size = 58,
  glowColor = "rgba(16,185,129,0.35)",
  accentColor = "#34d399",
}: {
  size?: number;
  glowColor?: string;
  accentColor?: string;
}) {
  return (
    <div
      style={{
        width: size,
        height: (size * 56) / 72,
        filter: `drop-shadow(0 2px 8px ${glowColor})`,
      }}
      className="relative select-none pointer-events-none"
    >
      <svg
        viewBox="0 0 72 56"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Body gradient */}
          <linearGradient id="birdBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" />
            <stop offset="50%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          {/* Upper Wing gradient */}
          <linearGradient id="upperWingGrad" x1="50%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="70%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
          </linearGradient>

          {/* Lower Wing gradient */}
          <linearGradient id="lowerWingGrad" x1="50%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="70%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* 1. SAYAP ATAS (UPPER / FAR WING) - Mengepak ke atas */}
        <motion.g
          style={{ transformOrigin: "26px 26px" }}
          animate={{
            // 4 flaps, then glide hold, then repeat
            rotate: [-28, 24, -28, 24, -28, 24, -28, 24, -6, -6, -28],
            scaleY: [1, 0.45, 1, 0.45, 1, 0.45, 1, 0.45, 0.9, 0.9, 1],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Bilah Sayap Atas dengan lekukan bulu primer yang jelas */}
          <path
            d="M 26 26 C 24 18, 19 8, 23 -2 C 26 1, 28 5, 30 10 C 33 6, 36 11, 37 16 C 39 14, 41 18, 40 22 C 35 25, 30 26, 26 26 Z"
            fill="url(#upperWingGrad)"
            stroke={accentColor}
            strokeWidth="0.7"
            strokeOpacity="0.8"
          />
          {/* Garis pemisah bulu primer */}
          <path
            d="M 26 26 L 24 2 M 28 25 L 30 11 M 31 25 L 36 17"
            stroke={accentColor}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            fill="none"
          />
        </motion.g>

        {/* 2. BADAN BURUNG & EKOR (CENTRAL FUSELAGE) */}
        <g>
          {/* Ekor Burung Layang-Layang (Forked Swallow Tail) */}
          <path
            d="M 40 26 L 60 18 L 50 28 L 60 38 L 40 30 Z"
            fill="url(#birdBody)"
            stroke={accentColor}
            strokeWidth="0.6"
            strokeOpacity="0.6"
          />

          {/* Badan Streamline & Kepala */}
          <path
            d="M 6 28 L 14 25 C 18 23, 25 24, 30 26 C 36 28, 40 28, 44 28 C 40 31, 34 32, 28 32 C 20 32, 14 31, 6 28 Z"
            fill="url(#birdBody)"
            stroke="#27272a"
            strokeWidth="0.6"
          />

          {/* Paruh Lancip Emas (Menghadap Kiri) */}
          <path d="M 4 28 L 13 25.5 L 13 30.5 Z" fill="#fbbf24" />

          {/* Kilau Mata Emerald & Specular Light */}
          <circle cx="16" cy="27" r="1.3" fill="#34d399" />
          <circle cx="15.6" cy="26.6" r="0.45" fill="#ffffff" />
        </g>

        {/* 3. SAYAP BAWAH (LOWER / NEAR WING) - Mengepak simetris ke bawah */}
        <motion.g
          style={{ transformOrigin: "26px 30px" }}
          animate={{
            // 4 flaps, then glide hold, then repeat (simetris berlawanan dengan sayap atas!)
            rotate: [28, -24, 28, -24, 28, -24, 28, -24, 6, 6, 28],
            scaleY: [1, 0.45, 1, 0.45, 1, 0.45, 1, 0.45, 0.9, 0.9, 1],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Bilah Sayap Bawah dengan lekukan bulu primer yang jelas */}
          <path
            d="M 26 30 C 24 38, 19 48, 23 58 C 26 55, 28 51, 30 46 C 33 50, 36 45, 37 40 C 39 42, 41 38, 40 34 C 35 31, 30 30, 26 30 Z"
            fill="url(#lowerWingGrad)"
            stroke={accentColor}
            strokeWidth="0.7"
            strokeOpacity="0.8"
          />
          {/* Garis pemisah bulu primer */}
          <path
            d="M 26 30 L 24 54 M 28 31 L 30 45 M 31 31 L 36 39"
            stroke={accentColor}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            fill="none"
          />
        </motion.g>
      </svg>
    </div>
  );
}

/**
 * HD Perched Bird (Burung Bertengger Santai di Ranting):
 * - Ditempatkan di dahan ranting pojok kanan atas
 * - Animasi bernapas halus, menoleh, dan ekor bergerak
 * - Klik / sentuh untuk langsung terbang!
 */
function HDPerchedBird({
  onTakeoff,
}: {
  onTakeoff: () => void;
}) {
  return (
    <motion.div
      className="absolute z-30 cursor-pointer pointer-events-auto select-none group"
      style={{
        left: "32%",
        top: "39%",
        width: 52,
        height: 44,
      }}
      onClick={onTakeoff}
      onMouseEnter={onTakeoff}
      title="Sentuh atau klik burung untuk membuatnya terbang!"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -m-1 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/25 blur-sm transition-all duration-300" />

      <svg
        viewBox="0 0 54 46"
        className="w-full h-full overflow-visible drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)]"
      >
        <defs>
          <linearGradient id="perchedBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" />
            <stop offset="60%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
        </defs>

        {/* Ekor bergoyang santai */}
        <motion.path
          d="M 28 29 L 46 43 L 42 45 L 26 33 Z"
          fill="#18181b"
          stroke="#10b981"
          strokeWidth="0.6"
          strokeOpacity="0.5"
          animate={{
            rotate: [0, 0, -6, 2, 0, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "27px 31px" }}
        />

        {/* Cakar memegang ranting kayu */}
        <path
          d="M 18 33 L 16 38 M 22 33 L 20 38"
          stroke="#fbbf24"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Badan dengan ritme napas */}
        <motion.g
          animate={{
            y: [0, -0.8, 0],
            scaleY: [1, 1.02, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "20px 33px" }}
        >
          <path
            d="M 11 18 C 9 24, 11 31, 17 33 C 24 34, 28 32, 31 28 C 30 22, 28 17, 23 13 C 17 10, 12 13, 11 18 Z"
            fill="url(#perchedBodyGrad)"
            stroke="#27272a"
            strokeWidth="0.6"
          />

          {/* Sayap terlipat rapi dengan detail bulu bertingkat */}
          <path
            d="M 17 16 C 24 15, 30 18, 33 24 C 35 28, 33 33, 29 37 C 26 36, 22 32, 19 26 C 17 21, 16 18, 17 16 Z"
            fill="#18181b"
            stroke="#10b981"
            strokeWidth="0.7"
            strokeOpacity="0.7"
          />
          <path
            d="M 21 21 C 25 22, 28 26, 29 32 M 23 25 C 26 27, 29 30, 30 35"
            stroke="#34d399"
            strokeWidth="0.5"
            strokeOpacity="0.4"
            fill="none"
          />
        </motion.g>

        {/* Kepala yang sesekali menoleh */}
        <motion.g
          animate={{
            rotate: [0, 0, -8, -8, 5, 0, 0],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "15px 17px" }}
        >
          <path
            d="M 9 17 C 8 13, 12 9, 17 9 C 21 9, 23 12, 22 17 C 18 16, 13 16, 9 17 Z"
            fill="#27272a"
            stroke="#34d399"
            strokeWidth="0.5"
            strokeOpacity="0.5"
          />
          <path d="M 3 16 L 10 13.5 L 10 18.5 Z" fill="#fbbf24" />
          <circle cx="14" cy="14" r="1.2" fill="#34d399" />
          <circle cx="13.7" cy="13.7" r="0.4" fill="#ffffff" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/**
 * Aesthetic Corner Tree Branch (Ranting Pohon Estetik di Pojok Layar)
 */
function AestheticCornerBranch({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="fixed top-0 right-0 pointer-events-none z-20 w-[240px] sm:w-[320px] md:w-[380px] aspect-[380/260] overflow-visible">
      <motion.div
        className="w-full h-full relative"
        animate={{
          rotate: [-0.6, 0.6, -0.6],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top right" }}
      >
        <svg
          viewBox="0 0 380 260"
          className="w-full h-full overflow-visible drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          <defs>
            <linearGradient id="barkGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="50%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>

            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#064e3b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>

          {/* Batang Utama dari sudut kanan atas */}
          <path
            d="M 380 -10 C 330 15, 270 45, 210 88 C 160 125, 110 148, 40 156 C 90 166, 150 146, 202 108 C 260 64, 320 32, 380 42 Z"
            fill="url(#barkGrad)"
            stroke="#27272a"
            strokeWidth="0.8"
          />

          {/* Ranting Atas */}
          <path
            d="M 285 38 C 255 22, 220 12, 175 14 C 210 22, 245 32, 275 48 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="0.6"
          />

          {/* Dahan Tempat Bertengger (The Perch Twig) */}
          <path
            d="M 210 88 C 175 99, 138 108, 85 114 C 135 116, 172 105, 205 93 Z"
            fill="url(#barkGrad)"
            stroke="#10b981"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />

          {/* Ranting Bawah */}
          <path
            d="M 240 68 C 205 115, 170 158, 120 192 C 152 165, 186 128, 224 82 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="0.5"
          />

          {/* Gugusan Daun Obsidian + Emerald */}
          <g className="leaves">
            <path
              d="M 175 14 C 165 6, 150 7, 142 16 C 152 19, 168 18, 175 14 Z"
              fill="url(#leafGrad)"
              stroke="#34d399"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
            <path
              d="M 195 16 C 190 6, 178 4, 172 11 C 180 15, 190 16, 195 16 Z"
              fill="#18181b"
              stroke="#27272a"
              strokeWidth="0.5"
            />
            <path
              d="M 225 24 C 220 12, 208 10, 202 18 C 210 22, 220 24, 225 24 Z"
              fill="url(#leafGrad)"
              stroke="#34d399"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <path
              d="M 85 114 C 74 108, 62 112, 56 122 C 68 124, 80 120, 85 114 Z"
              fill="url(#leafGrad)"
              stroke="#10b981"
              strokeWidth="0.6"
              strokeOpacity="0.6"
            />
            <path
              d="M 105 112 C 98 102, 85 101, 80 110 C 90 114, 100 114, 105 112 Z"
              fill="#18181b"
              stroke="#27272a"
              strokeWidth="0.5"
            />
            <path
              d="M 150 102 C 145 92, 134 91, 128 98 C 137 102, 145 103, 150 102 Z"
              fill="url(#leafGrad)"
              stroke="#34d399"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
            <path
              d="M 120 192 C 110 188, 98 194, 94 206 C 106 206, 116 200, 120 192 Z"
              fill="url(#leafGrad)"
              stroke="#10b981"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
            <path
              d="M 145 170 C 136 160, 122 162, 118 172 C 128 176, 140 174, 145 170 Z"
              fill="#18181b"
              stroke="#27272a"
              strokeWidth="0.5"
            />
            <path
              d="M 172 140 C 165 128, 152 130, 148 140 C 158 144, 168 142, 172 140 Z"
              fill="url(#leafGrad)"
              stroke="#34d399"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <path
              d="M 40 156 C 28 152, 16 160, 12 172 C 24 172, 36 166, 40 156 Z"
              fill="url(#leafGrad)"
              stroke="#34d399"
              strokeWidth="0.6"
              strokeOpacity="0.5"
            />
            <path
              d="M 58 152 C 52 142, 40 142, 35 150 C 44 154, 53 154, 58 152 Z"
              fill="#18181b"
              stroke="#27272a"
              strokeWidth="0.5"
            />
          </g>
        </svg>

        {/* Burung yang hinggap di ranting */}
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Main FlyingBirds Component
 */
export default function FlyingBirds() {
  const [isBird1Resting, setIsBird1Resting] = useState<boolean>(true);

  const triggerTakeoff = useCallback(() => {
    setIsBird1Resting(false);
  }, []);

  // Waktu istirahat di ranting ~7 detik, lalu otomatis take-off
  useEffect(() => {
    if (!isBird1Resting) return;

    const timer = setTimeout(() => {
      triggerTakeoff();
    }, 7000);

    return () => clearTimeout(timer);
  }, [isBird1Resting, triggerTakeoff]);

  const handleFlightComplete = useCallback(() => {
    setIsBird1Resting(true);
  }, []);

  return (
    <>
      {/* 1. RANTING POHON & BURUNG 1 SAAT BERTENGGER */}
      <AestheticCornerBranch>
        <AnimatePresence>
          {isBird1Resting && (
            <HDPerchedBird onTakeoff={triggerTakeoff} />
          )}
        </AnimatePresence>
      </AestheticCornerBranch>

      {/* 2. OVERLAY TERBANG BEBAS */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {/* BURUNG 1: SIKLUS TERBANG LENGKAP & BERPUTAR (TIDAK ADA TERBANG MUNDUR!) */}
        <AnimatePresence>
          {!isBird1Resting && (
            <motion.div
              key="bird1-flying"
              className="absolute"
              initial={{
                x: "82vw",
                y: "11vh",
                scaleX: 1, // Menghadap Kiri (searah gerakan ke kiri)
                rotate: -12,
                opacity: 0,
              }}
              animate={{
                // 1. Terbang ke kiri (scaleX: 1) -> 2. Berputar (bank loop) -> 3. Terbang kembali ke kanan (scaleX: -1) -> 4. Mendarat
                x: [
                  "82vw",
                  "62vw",
                  "36vw",
                  "14vw",
                  "8vw",
                  "14vw",
                  "38vw",
                  "64vw",
                  "82vw",
                ],
                y: [
                  "11vh",
                  "18vh",
                  "14vh",
                  "20vh",
                  "26vh",
                  "28vh",
                  "22vh",
                  "16vh",
                  "11vh",
                ],
                scaleX: [
                  1,  // Menghadap kiri
                  1,  // Menghadap kiri
                  1,  // Menghadap kiri
                  1,  // Mulai membelok
                  -1, // Berputar menghadap KANAN!
                  -1, // Menghadap kanan
                  -1, // Menghadap kanan
                  -1, // Menghadap kanan
                  1,  // Mendarat di ranting menghadap kiri
                ],
                rotate: [
                  -12, // Menukik turun
                  -4,  // Meluncur datar
                  6,   // Menanjak anggun
                  14,  // Mulai bank turn
                  -16, // Bank turn balik
                  -8,  // Meluncur kembali ke kanan
                  -4,  // Meluncur kembali
                  -2,  // Mendekati dahan
                  0,   // Mendarat
                ],
                opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1],
              }}
              transition={{
                duration: 17,
                times: [0, 0.16, 0.35, 0.48, 0.55, 0.62, 0.74, 0.88, 1],
                ease: "easeInOut",
              }}
              onAnimationComplete={handleFlightComplete}
            >
              <HDTwoWingedBird
                size={58}
                accentColor="#34d399"
                glowColor="rgba(16,185,129,0.35)"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* BURUNG 2: PENDAMPING DI ANGKASA ATAS (Menghadap Kanan searah gerak dari Kiri ke Kanan) */}
        <motion.div
          className="absolute"
          initial={{
            scaleX: -1, // Menghadap KANAN karena bergerak dari kiri ke kanan (Head-first forward!)
          }}
          animate={{
            x: ["-10vw", "24vw", "56vw", "86vw", "115vw"],
            y: ["18vh", "14vh", "22vh", "15vh", "20vh"],
            rotate: [-4, 2, -3, 3, -2],
          }}
          transition={{
            duration: 24,
            delay: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <HDTwoWingedBird
            size={42}
            accentColor="#a1a1aa"
            glowColor="rgba(255,255,255,0.18)"
          />
        </motion.div>
      </div>
    </>
  );
}
