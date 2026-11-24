"use client";

import { motion } from "framer-motion";

/**
 * Awan Kumulus Estetik (Aesthetic Drifting Clouds)
 * Didesain khusus untuk tema Langit & Samudra:
 * - Awan putih kebiruan lembut dengan bentuk kumulus alami
 * - Terlihat jelas dan anggun melayang di langit (Hero & About)
 * - Lapisan multi-kedalaman (foreground, midground, background)
 */
export default function Clouds() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[120vh] pointer-events-none z-10 overflow-hidden">
      
      {/* 1. SAPUAN CAHAYA LANGIT / ATMOSPHERIC CELESTIAL GLOW */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] rounded-full" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      {/* 2. AWAN KUMULUS BESAR 1 (Kiri Atas melayang ke Kanan - Tenang & Megah) */}
      <motion.div
        className="absolute top-8 left-[-15%] w-[520px] sm:w-[720px] opacity-45"
        animate={{
          x: ["0vw", "125vw"],
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 460 170" className="w-full h-auto overflow-visible filter blur-[1px]">
          <defs>
            <linearGradient id="cloudMainGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#e0f2fe" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#7dd3fc" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 70 140 C 40 140, 10 120, 10 92 C 10 70, 32 55, 55 60 C 72 32, 115 15, 155 32 C 185 10, 240 10, 275 32 C 310 15, 360 22, 385 55 C 415 55, 450 78, 450 105 C 450 135, 420 140, 390 140 Z"
            fill="url(#cloudMainGrad1)"
          />
        </svg>
      </motion.div>

      {/* 3. AWAN SEDANG 2 (Tengah Langit - Bentuk Strato-Kumulus Elegan) */}
      <motion.div
        className="absolute top-44 left-[-22%] w-[440px] sm:w-[620px] opacity-40"
        animate={{
          x: ["0vw", "130vw"],
        }}
        transition={{
          duration: 80,
          delay: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 420 140" className="w-full h-auto overflow-visible filter blur-[1.5px]">
          <defs>
            <linearGradient id="cloudMainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#bae6fd" stopOpacity="0.65" />
              <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 50 110 C 25 110, 8 96, 8 78 C 8 60, 26 48, 45 52 C 62 28, 98 16, 134 30 C 165 12, 215 12, 245 30 C 275 14, 322 20, 345 46 C 375 46, 410 62, 410 86 C 410 106, 385 110, 360 110 Z"
            fill="url(#cloudMainGrad2)"
          />
        </svg>
      </motion.div>

      {/* 4. AWAN 3 (Melayang Perlahan dari Kanan ke Kiri di Latar Belakang) */}
      <motion.div
        className="absolute top-28 right-[-18%] w-[380px] sm:w-[540px] opacity-35"
        animate={{
          x: ["0vw", "-125vw"],
        }}
        transition={{
          duration: 90,
          delay: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 380 130" className="w-full h-auto overflow-visible filter blur-[2px]">
          <defs>
            <linearGradient id="cloudMainGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#bae6fd" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 45 105 C 22 105, 6 92, 6 75 C 6 60, 22 50, 38 54 C 52 32, 82 20, 112 32 C 135 15, 175 15, 198 32 C 224 20, 265 24, 284 46 C 310 46, 344 60, 344 80 C 344 100, 322 105, 298 105 Z"
            fill="url(#cloudMainGrad3)"
          />
        </svg>
      </motion.div>

      {/* 5. AWAN WISPY HALUS DEKAT NAMA (Area Headline Hero) */}
      <motion.div
        className="absolute top-[280px] left-[-10%] w-[340px] sm:w-[480px] opacity-30"
        animate={{
          x: ["0vw", "120vw"],
        }}
        transition={{
          duration: 72,
          delay: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 320 100" className="w-full h-auto overflow-visible filter blur-[2.5px]">
          <defs>
            <linearGradient id="cloudMainGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#7dd3fc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 30 80 C 15 80, 4 70, 4 58 C 4 45, 16 38, 28 41 C 40 24, 65 15, 90 25 C 110 10, 142 10, 160 25 C 180 15, 212 18, 228 35 C 248 35, 275 45, 275 60 C 275 75, 258 80, 238 80 Z"
            fill="url(#cloudMainGrad4)"
          />
        </svg>
      </motion.div>

      {/* 6. GRADASI KABUT LANGIT HORIZON */}
      <div className="absolute top-0 left-0 right-0 h-[480px] bg-gradient-to-b from-sky-400/10 via-sky-500/5 to-transparent pointer-events-none" />
    </div>
  );
}
