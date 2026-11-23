"use client";

import { useState } from "react";
import { Globe, Terminal, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function Folders() {
  const [activeFolder, setActiveFolder] = useState<number>(0);

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
      title: "Desktop & Tooling",
      count: "2 Proyek",
      icon: Terminal,
      color: "border-teal-500/30 text-teal-400 bg-teal-500/10",
      description: "Software native Windows menggunakan C# (.NET/WPF), WebView2, dan automasi.",
      items: [
        { name: "The Zero Launcher", desc: "Cloud & Desktop Distribution Platform" },
        { name: "LuaTools Localization", desc: "i18n string schema & Python validation" },
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
        { name: "Vercel & Railway", desc: "Automated continuous cloud deployment" },
      ],
    },
  ];

  return (
    <section className="py-20 border-t border-zinc-800/80 bg-[#0c0c0e]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            SHOWCASE VAULT
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
            Kategori Portofolio
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Jelajahi area keahlian teknis dan kumpulan hasil rekayasa kode.
          </p>
        </motion.div>

        {/* 3 Folders Grid with Framer Motion */}
        <div className="grid gap-6 md:grid-cols-3">
          {folders.map((folder, idx) => {
            const Icon = folder.icon;
            const isSelected = activeFolder === idx;
            return (
              <motion.div
                key={folder.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => setActiveFolder(idx)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between ${
                  isSelected
                    ? "border-emerald-500/60 bg-zinc-900 shadow-xl shadow-emerald-500/5"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${folder.color}`}>
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full border border-zinc-700 bg-zinc-800/80 px-2.5 py-1 text-[11px] font-mono text-zinc-400">
                      {folder.count}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {folder.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                    {folder.description}
                  </p>
                </div>

                {/* Stack Cards */}
                <div className="mt-6 space-y-2 pt-4 border-t border-zinc-800/80">
                  {folder.items.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-2.5 transition-colors hover:border-zinc-700"
                    >
                      <div className="text-xs font-semibold text-zinc-200">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                        {item.desc}
                      </div>
                    </div>
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
