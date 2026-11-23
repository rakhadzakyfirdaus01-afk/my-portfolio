"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090b]">
      
      {/* Topographic Contour Texture in Emerald Tint */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C 200 100, 400 400, 800 250 S 1400 150, 1800 350" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <path d="M-100 350 C 300 250, 600 500, 1000 350 S 1500 250, 1900 450" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <path d="M-100 500 C 250 400, 700 650, 1100 500 S 1600 400, 2000 600" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <path d="M-100 650 C 350 550, 800 800, 1200 650 S 1700 550, 2100 750" fill="none" stroke="#10b981" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Subtle emerald radial ambient light */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-emerald-500/15 blur-[160px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        
        {/* Welcome Tag with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-6"
        >
          <span>WELCOME TO MY PORTOFOLIO</span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]"
        >
          RAKHA DZAKY <br className="hidden sm:inline" />
          <span className="text-emerald-400">FIRDAUS</span>
        </motion.h1>

        {/* Role & School */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-medium text-zinc-300"
        >
          <span>Software Engineer</span>
          <span className="text-zinc-600">•</span>
          <span className="text-emerald-400 font-semibold">AI Web Developer</span>
          <span className="text-zinc-600">•</span>
          <span>SMK Antartika 2 Sidoarjo</span>
        </motion.div>

        {/* Bio Ringkas */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400"
        >
          Aku berfokus pada pengembangan aplikasi web modern menggunakan Next.js, integrasi Gemini AI API, serta perancangan antarmuka yang bersih, cepat, dan berdampak nyata.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#proyek"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-500"
            >
              <span>Lihat Portofolio</span>
              <ArrowDown size={15} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <a
              href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-500/50 hover:bg-zinc-800"
            >
              <MessageCircle size={15} className="text-emerald-400" />
              <span>Hubungi Saya</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
