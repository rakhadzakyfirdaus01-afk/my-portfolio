"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * HD Flying Bird Component with detailed anatomy:
 * - Sleek aerodynamic body & sharp beak
 * - Glinting eye specular detail
 * - Aerodynamic forked swallow tail
 * - Multi-feather primary wing tips with 3D flap-and-glide articulation
 */
function HDFlyingBird({
  size = 56,
  color = "#34d399",
  glowColor = "rgba(16,185,129,0.35)",
  wingSpeed = 0.5,
}: {
  size?: number;
  color?: string;
  glowColor?: string;
  wingSpeed?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: (size * 42) / 64,
        filter: `drop-shadow(0 2px 8px ${glowColor})`,
      }}
      className="relative select-none pointer-events-none"
    >
      <svg
        viewBox="0 0 68 44"
        className="w-full h-full overflow-visible"
        style={{ color }}
      >
        <defs>
          <linearGradient id="birdBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="60%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" />
            <stop offset="70%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* FAR WING (Behind Fuselage) */}
        <motion.g
          style={{ transformOrigin: "24px 17px" }}
          animate={{
            rotate: [-28, 22, -28],
            scaleY: [0.95, 0.45, 0.95],
          }}
          transition={{
            duration: wingSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 24 17 C 22 9, 20 2, 22 -6 C 24 -4, 26 0, 27 3 C 29 1, 31 5, 32 8 C 34 7, 35 11, 35 14 C 32 16, 27 17, 24 17 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="0.6"
          />
        </motion.g>

        {/* BIRD FUSELAGE / BODY */}
        <g>
          {/* Aerodynamic Forked Swallow Tail */}
          <path
            d="M 36 17 L 54 11 L 46 19 L 41 18.5 L 45 20.5 L 52 25 L 36 20 Z"
            fill="url(#birdBodyGrad)"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.5"
          />

          {/* Torso & Head */}
          <path
            d="M 6 15 L 13 13 C 17 10, 24 10, 30 14 C 36 17, 39 18, 41 18.5 C 38 21, 32 23, 25 22 C 17 21, 11 19, 6 15 Z"
            fill="url(#birdBodyGrad)"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeOpacity="0.6"
          />

          {/* Sharp Beak */}
          <path d="M 3 15.5 L 9 13.5 L 8.5 17 Z" fill="#fbbf24" />

          {/* Eye Specular Highlight */}
          <circle cx="12.5" cy="14" r="1.1" fill="#34d399" />
          <circle cx="12.2" cy="13.7" r="0.4" fill="#ffffff" />

          {/* Emerald Feather Trims on Flank */}
          <path
            d="M 18 17 C 23 16, 28 17, 32 19"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.6"
            fill="none"
          />
        </g>

        {/* NEAR WING (In Front with detailed feather fingers) */}
        <motion.g
          style={{ transformOrigin: "22px 16px" }}
          animate={{
            rotate: [-34, 26, -34],
            scaleY: [1, 0.4, 1],
          }}
          transition={{
            duration: wingSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main Wing Body with 4 Layered Primaries */}
          <path
            d="M 22 16 C 19 8, 18 -1, 20 -10 C 22 -7, 24 -3, 26 1 C 28 -2, 31 2, 32 6 C 34 4, 36 8, 36 12 C 37 11, 38 14, 37 16 C 33 17, 27 17, 22 16 Z"
            fill="url(#wingGrad)"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeOpacity="0.8"
          />
          {/* Primary Feather Separation Lines */}
          <path
            d="M 22 16 L 21 -8 M 25 15 L 26 2 M 28 15 L 32 7"
            stroke="currentColor"
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
 * HD Perched Bird (Burung Bertengger):
 * - Perched naturally on the branch twig
 * - Breathing pulse & occasional curious head tilt / tail twitch
 * - Interactive hover & click reaction: takes flight immediately!
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
      {/* Subtle pulse aura indicating interactivity */}
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

        {/* Tail Feathers with twitch animation */}
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

        {/* Feet Gripping the Branch Twig */}
        <path
          d="M 18 33 L 16 38 M 22 33 L 20 38"
          stroke="#fbbf24"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Bird Body with gentle breathing pulse */}
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
          {/* Rounded Plump Chest & Body */}
          <path
            d="M 11 18 C 9 24, 11 31, 17 33 C 24 34, 28 32, 31 28 C 30 22, 28 17, 23 13 C 17 10, 12 13, 11 18 Z"
            fill="url(#perchedBodyGrad)"
            stroke="#27272a"
            strokeWidth="0.6"
          />

          {/* Folded Wing with Layered Primary Feathers */}
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

        {/* Head with curious tilt animation */}
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
          {/* Head Crown */}
          <path
            d="M 9 17 C 8 13, 12 9, 17 9 C 21 9, 23 12, 22 17 C 18 16, 13 16, 9 17 Z"
            fill="#27272a"
            stroke="#34d399"
            strokeWidth="0.5"
            strokeOpacity="0.5"
          />
          {/* Sharp Beak facing left */}
          <path d="M 3 16 L 10 13.5 L 10 18.5 Z" fill="#fbbf24" />
          {/* Eye with Specular Light */}
          <circle cx="14" cy="14" r="1.2" fill="#34d399" />
          <circle cx="13.7" cy="13.7" r="0.4" fill="#ffffff" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/**
 * Aesthetic Corner Tree Branch (Ranting Pohon Estetik di Pojok Layar)
 * Stylized in minimalist obsidian & emerald botanical silhouette.
 */
function AestheticCornerBranch({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="fixed top-0 right-0 pointer-events-none z-20 w-[240px] sm:w-[320px] md:w-[380px] aspect-[380/260] overflow-visible">
      {/* Branch Gentle Breeze Swaying */}
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
            {/* Trunk Wood Gradient */}
            <linearGradient id="barkGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="50%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>

            {/* Emerald Leaf Gradient */}
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#064e3b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>

          {/* MAIN TRUNK: Sweeping from top-right corner inward */}
          <path
            d="M 380 -10 C 330 15, 270 45, 210 88 C 160 125, 110 148, 40 156 C 90 166, 150 146, 202 108 C 260 64, 320 32, 380 42 Z"
            fill="url(#barkGrad)"
            stroke="#27272a"
            strokeWidth="0.8"
          />

          {/* UPPER TWIG */}
          <path
            d="M 285 38 C 255 22, 220 12, 175 14 C 210 22, 245 32, 275 48 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="0.6"
          />

          {/* THE PERCH TWIG: Shelf where the bird rests */}
          <path
            d="M 210 88 C 175 99, 138 108, 85 114 C 135 116, 172 105, 205 93 Z"
            fill="url(#barkGrad)"
            stroke="#10b981"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />

          {/* LOWER BRANCH */}
          <path
            d="M 240 68 C 205 115, 170 158, 120 192 C 152 165, 186 128, 224 82 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="0.5"
          />

          {/* BOTANICAL LEAF CLUSTERS (Obsidian with Emerald Sheen) */}
          <g className="leaves">
            {/* Upper Twig Leaves */}
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

            {/* Perch Branch Leaves */}
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

            {/* Lower Branch Leaves */}
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

            {/* Main Tip Leaves */}
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

        {/* Perched Bird Mounted at Perch Node */}
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Main FlyingBirds Component
 * Features:
 * 1. Aesthetic Corner Tree Branch in top-right
 * 2. Bird 1: Cycles between resting on the branch (6-8s) and taking off to fly gracefully across the screen
 * 3. Interactive hover/touch: hovering over the resting bird makes it startle & take off immediately!
 * 4. Bird 2: Companion bird high in the sky in smooth flap-and-glide trajectory
 */
export default function FlyingBirds() {
  // State for Bird 1: resting on branch or flying
  const [isBird1Resting, setIsBird1Resting] = useState<boolean>(true);

  // Takeoff handler (triggered by timer or user mouse interaction)
  const triggerTakeoff = useCallback(() => {
    setIsBird1Resting(false);
  }, []);

  // Automatic rest timer: rests for 7 seconds, then takes off
  useEffect(() => {
    if (!isBird1Resting) return;

    const timer = setTimeout(() => {
      triggerTakeoff();
    }, 7000);

    return () => clearTimeout(timer);
  }, [isBird1Resting, triggerTakeoff]);

  // When flight animation finishes, land back on the branch
  const handleFlightComplete = useCallback(() => {
    setIsBird1Resting(true);
  }, []);

  return (
    <>
      {/* 1. CORNER TREE BRANCH WITH RESTING BIRD */}
      <AestheticCornerBranch>
        <AnimatePresence>
          {isBird1Resting && (
            <HDPerchedBird onTakeoff={triggerTakeoff} />
          )}
        </AnimatePresence>
      </AestheticCornerBranch>

      {/* 2. FLIGHT PATH OVERLAYS */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {/* BIRD 1 IN FLIGHT: Swoops from branch across the viewport and returns */}
        <AnimatePresence>
          {!isBird1Resting && (
            <motion.div
              key="bird1-flying"
              className="absolute"
              initial={{
                x: "82vw",
                y: "11vh",
                rotate: -12,
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                x: [
                  "82vw",
                  "68vw",
                  "46vw",
                  "18vw",
                  "-8vw",
                  "-10vw",
                  "108vw",
                  "94vw",
                  "82vw",
                ],
                y: [
                  "11vh",
                  "17vh",
                  "25vh",
                  "19vh",
                  "24vh",
                  "10vh",
                  "7vh",
                  "9vh",
                  "11vh",
                ],
                rotate: [-14, -6, 6, -8, 2, 0, -16, -10, -4],
                scale: [0.9, 1.0, 1.05, 1.0, 0.9, 0.75, 0.75, 0.85, 0.9],
                opacity: [0, 1, 1, 1, 1, 0, 0, 1, 1],
              }}
              transition={{
                duration: 17,
                times: [0, 0.12, 0.28, 0.46, 0.6, 0.65, 0.75, 0.9, 1],
                ease: "easeInOut",
              }}
              onAnimationComplete={handleFlightComplete}
            >
              <HDFlyingBird
                size={54}
                color="#34d399"
                glowColor="rgba(16,185,129,0.35)"
                wingSpeed={0.48}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* BIRD 2: COMPANION HIGH IN THE SKY (Soaring calmly across the viewport) */}
        <motion.div
          className="absolute"
          animate={{
            x: ["-8vw", "22vw", "52vw", "82vw", "114vw"],
            y: ["20vh", "26vh", "16vh", "25vh", "21vh"],
            rotate: [6, 12, 3, 9, 5],
          }}
          transition={{
            duration: 25,
            delay: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <HDFlyingBird
            size={40}
            color="#a1a1aa"
            glowColor="rgba(255,255,255,0.18)"
            wingSpeed={0.58}
          />
        </motion.div>
      </div>
    </>
  );
}
