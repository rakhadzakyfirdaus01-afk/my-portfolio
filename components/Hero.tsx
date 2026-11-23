"use client";

import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090b]">
      
      {/* Animated Topographic Contour Waves */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C 200 100, 400 400, 800 250 S 1400 150, 1800 350" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <path d="M-100 350 C 300 250, 600 500, 1000 350 S 1500 250, 1900 450" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <path d="M-100 500 C 250 400, 700 650, 1100 500 S 1600 400, 2000 600" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <path d="M-100 650 C 350 550, 800 800, 1200 650 S 1700 550, 2100 750" fill="none" stroke="#10b981" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Wandering Emerald Ambient Light Orbs */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[520px] w-[680px] rounded-full bg-emerald-500/15 blur-[160px]"
      />
      
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[350px] w-[450px] rounded-full bg-teal-500/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        
        {/* Welcome Tag with smooth slide & glow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>WELCOME TO MY PORTOFOLIO</span>
        </motion.div>

        {/* Big Bold Headline with Letter Stagger Reveal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 100 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]"
        >
          RAKHA DZAKY <br className="hidden sm:inline" />
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
          >
            FIRDAUS
          </motion.span>
        </motion.h1>

        {/* Role & School Badge Bar with subtle hover pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-medium text-zinc-300"
        >
          <span className="px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800">
            Software Engineer
          </span>
          <span className="text-zinc-600">•</span>
          <span className="px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-semibold shadow-sm shadow-emerald-500/10">
            AI Web Developer
          </span>
          <span className="text-zinc-600">•</span>
          <span className="px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800">
            SMK Antartika 2 Sidoarjo
          </span>
        </motion.div>

        {/* Bio Ringkas */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400"
        >
          Aku berfokus pada pengembangan aplikasi web modern menggunakan Next.js, integrasi Gemini AI API, serta perancangan antarmuka yang bersih, cepat, dan berdampak nyata.
        </motion.p>

        {/* Action Buttons with spring scale & bounce */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="#proyek"
              className="relative group overflow-hidden inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-600/25 transition-colors hover:bg-emerald-500"
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span>Lihat Portofolio</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={15} />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a
              href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 px-6 py-3.5 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-500/60 hover:bg-zinc-800"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>Hubungi Saya</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
