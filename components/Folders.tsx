"use client";

import { useState } from "react";
import { Globe, Layout, Database, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Folders() {
  const [hoveredFolder, setHoveredFolder] = useState<number | null>(null);

  const folders = [
    {
      title: "Web & AI Platform",
      count: "2 Proyek",
      icon: Globe,
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      description: "Platform berbasis Next.js 16, TypeScript, dan integrasi Google Gemini AI API.",
      items: [
        { name: "DNA AI Platform", desc: "AI Advertising System with Gemini fallback" },
        { name: "PT DNA Client Survey", desc: "Interactive 5-stage client review workflow" },
      ],
    },
    {
      title: "Frontend Engineering",
      count: "4 Stack",
      icon: Layout,
      color: "border-teal-500/30 text-teal-400 bg-teal-500/10",
      description: "Arsitektur antarmuka modern yang cepat, interaktif, responsif, dan elegan.",
      items: [
        { name: "Next.js 16 & React 19", desc: "Server components & client hydration" },
        { name: "Tailwind CSS & Motion", desc: "Clean typography & spring physics animation" },
      ],
    },
    {
      title: "Database & Cloud",
      count: "3 Teknologi",
      icon: Database,
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
      description: "Pengelolaan alur data relasional dengan Row-Level Security dan deployment cloud.",
      items: [
        { name: "Supabase PostgreSQL", desc: "RLS Policies & Custom PL/pgSQL Triggers" },
        { name: "Prisma ORM & MySQL", desc: "Schema migrations & relational mapping" },
        { name: "Vercel Continuous Deploy", desc: "Automated continuous cloud deployment" },
      ],
    },
  ];

  return (
    <section className="py-24 border-t border-zinc-800/80 bg-[#0c0c0e]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            SHOWCASE VAULT
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
            Kategori Portofolio
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Arahkan kursor ke folder untuk melihat dokumen dan stack di dalamnya.
          </p>
        </motion.div>

        {/* 3 Folders Grid with Tactile Spring Fan-Out Physics */}
        <div className="grid gap-8 md:grid-cols-3">
          {folders.map((folder, idx) => {
            const Icon = folder.icon;
            const isHovered = hoveredFolder === idx;
            return (
              <motion.div
                key={folder.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredFolder(idx)}
                onMouseLeave={() => setHoveredFolder(null)}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div>
                  {/* Folder Tab Header */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? -5 : 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${folder.color} shadow-sm`}
                    >
                      <Icon size={22} />
                    </motion.div>
                    <span className="rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-[11px] font-mono text-zinc-300 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                      {folder.count}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {folder.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {folder.description}
                  </p>
                </div>

                {/* Tactile Stack Cards that Fan Out upward on Hover */}
                <div className="mt-8 space-y-2.5 pt-4 border-t border-zinc-800/80">
                  {folder.items.map((item, i) => (
                    <motion.div
                      key={i}
                      animate={
                        isHovered
                          ? {
                              y: -(i + 1) * 4,
                              rotate: i % 2 === 0 ? -1.5 : 1.5,
                              borderColor: "rgba(16, 185, 129, 0.4)",
                            }
                          : { y: 0, rotate: 0, borderColor: "rgba(39, 39, 42, 1)" }
                      }
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      className="rounded-xl border bg-zinc-950/80 p-3 shadow-md transition-colors"
                    >
                      <div className="text-xs font-semibold text-zinc-200 flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="text-[10px] text-emerald-400 font-mono">0{i + 1}</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate mt-1">
                        {item.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
