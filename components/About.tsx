"use client";

import { MessageCircle, ArrowRight, Code2, Cpu, Database } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="tentang" className="relative py-24 border-t border-zinc-800/80 bg-[#0c0c0e]">
      
      {/* Topographic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 150 C 300 50, 700 300, 1200 150 S 1700 250, 2000 150" fill="none" stroke="#10b981" strokeWidth="1.2" />
          <path d="M-100 300 C 400 200, 800 450, 1300 300 S 1800 400, 2100 300" fill="none" stroke="#10b981" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            ABOUT ME
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tentang Saya
          </h2>
        </motion.div>

        {/* 3-Column Layout: Left Text - Center Photo - Right Focus */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Kolom Kiri: Bio & Cerita */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-4 text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold text-white">
              Halo, Saya <span className="text-emerald-400">Rakha</span> 👋
            </h3>
            <p className="text-sm leading-relaxed text-zinc-300">
              Siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK Antartika 2 Sidoarjo dengan minat mendalam pada rekayasa perangkat lunak dan arsitektur web modern.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              Saya senang memecahkan masalah melalui kode yang rapi, terstruktur, serta membangun pengalaman digital yang nyata, interaktif, dan mudah digunakan orang banyak.
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20tertarik%20berdiskusi%20denganmu."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-5 py-2.5 text-xs font-semibold text-zinc-200 hover:border-emerald-500 hover:text-white transition-colors"
                >
                  <MessageCircle size={14} className="text-emerald-400" />
                  <span>Kirim Pesan WhatsApp</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Kolom Tengah: Foto Portrait Rakha dengan Animasi Spring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto w-full max-w-xs lg:col-span-4"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group"
            >
              {/* Diffuse Emerald Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-emerald-500/20 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-3xl border border-zinc-700/80 bg-zinc-900 p-2.5 shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-950">
                  <img
                    src="/rakha.jpg"
                    alt="Rakha Dzaky Firdaus"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Caption Bar */}
                <div className="mt-3 px-2 pb-1 text-center">
                  <div className="text-sm font-bold text-white">Rakha Dzaky Firdaus</div>
                  <div className="text-[11px] text-emerald-400 font-medium">Fullstack & AI Web Developer</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Fokus Keahlian Utama */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 lg:col-span-4"
          >
            
            <motion.div
              whileHover={{ x: 6 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Frontend Architecture</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Next.js 16, React 19, TypeScript, & Tailwind</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">AI Model Integration</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Google Gemini AI API, Chatbot & Prompts</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-600/10 text-cyan-400">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Backend & Database</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Node.js REST API, Prisma ORM, MySQL</p>
                </div>
              </div>
            </motion.div>

            <div className="pt-2 flex justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#proyek"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/20"
                >
                  <span>Lihat Portofolio Proyek</span>
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
