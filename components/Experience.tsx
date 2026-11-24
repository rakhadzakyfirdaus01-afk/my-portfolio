"use client";

import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const education = [
    {
      institution: "SMK Antartika 2 Sidoarjo",
      period: "2024 – Sekarang",
      degree: "Rekayasa Perangkat Lunak (RPL)",
      badgeType: "Vocational High School",
      description:
        "Fokus pembelajaran pada arsitektur web modern, pemrograman berorientasi objek, basis data relasional (SQL), serta implementasi algoritma dan pengujian perangkat lunak.",
      tags: ["Web Programming", "Next.js", "TypeScript", "Database Systems"],
    },
    {
      institution: "SMP Hang Tuah 5 Candi",
      period: "2021 – 2024",
      degree: "Sekolah Menengah Pertama (SMP)",
      badgeType: "Junior High School",
      description:
        "Menempuh pendidikan menengah pertama umum dan mulai aktif mengeksplorasi minat dasar pada bidang komputer dan teknologi informasi.",
      tags: ["Pendidikan Menengah Pertama", "Dasar Komputer", "Akademik"],
    },
  ];

  const experience = [
    {
      title: "DNA AI Platform",
      role: "Lead Fullstack & AI Integrator",
      badge: "AI Web Platform",
      period: "2026",
      description:
        "Merancang dan mendeploy platform web AI Advertising interaktif dengan integrasi Google Gemini API, asisten percakapan cerdas dengan auto-fallback, dan sistem generator prompt terstruktur.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "Prisma"],
    },
    {
      title: "PT DNA Client Experience Survey",
      role: "Frontend Developer",
      badge: "Client Production",
      period: "2026",
      description:
        "Mengembangkan sistem survei kepuasan klien 5-tahap interaktif untuk PT DNA Advertising dengan alur deklarasi Google Maps review, kompresi foto otomatis, dan verifikasi penilaian digital.",
      tags: ["JavaScript", "HTML5", "CSS3", "Supabase", "Vercel"],
    },
  ];

  return (
    <section id="pendidikan" className="relative py-24 border-t border-zinc-800/80 bg-transparent">
      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">
            TIMELINE & BACKGROUND
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pendidikan & Pengalaman
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl mx-auto">
            Jejak akademik dan rekam jejak pengembangan perangkat lunak yang telah saya jalani.
          </p>
        </motion.div>

        {/* 2-Column Grid: Left Education - Right Experience */}
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Kolom Kiri: Pendidikan */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600/15 text-sky-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Pendidikan Formal</h3>
            </div>

            <div className="relative border-l border-zinc-800 ml-4 pl-6 space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 border-2 border-sky-500 text-[10px] font-bold text-sky-400">
                    {idx + 1}
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-5 transition-all hover:border-zinc-700 hover:shadow-lg"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-sky-600/10 border border-sky-500/20 px-3 py-0.5 text-xs font-semibold text-sky-400">
                        {edu.period}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">{edu.badgeType}</span>
                    </div>

                    <h4 className="mt-3 text-lg font-bold text-white">
                      {edu.institution}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-300 mt-0.5">
                      {edu.degree}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                      {edu.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                      {edu.tags.map((t) => (
                        <span key={t} className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-[11px] text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Pengalaman & Proyek */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-600/15 text-cyan-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Pengalaman & Proyek</h3>
            </div>

            <div className="relative border-l border-zinc-800 ml-4 pl-6 space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 border-2 border-cyan-500 text-[10px] font-bold text-cyan-400">
                    {idx + 1}
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-5 transition-all hover:border-zinc-700 hover:shadow-lg"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-cyan-600/10 border border-cyan-500/20 px-2.5 py-0.5 text-xs font-semibold text-cyan-400">
                        {exp.badge}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">{exp.period}</span>
                    </div>

                    <h4 className="mt-3 text-base font-bold text-white">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-cyan-400 font-medium">
                      {exp.role}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                      {exp.tags.map((t) => (
                        <span key={t} className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-[11px] text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
