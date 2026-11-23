"use client";

import { Code2, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend Architecture",
      icon: Code2,
      description: "Pengembangan antarmuka yang responsif, interaktif, dan optimal di berbagai perangkat.",
      skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      category: "Backend & Database",
      icon: Server,
      description: "Arsitektur server terstruktur, integrasi REST API, dan perancangan database relasional.",
      skills: ["Node.js", "RESTful API", "Prisma ORM", "MySQL", "Supabase PostgreSQL"],
    },
    {
      category: "AI, Tools & Workflow",
      icon: Wrench,
      description: "Peralatan integrasi kecerdasan buatan, kontrol versi Git, dan otomasi deployment cloud.",
      skills: ["Google Gemini API", "Git & GitHub", "Vercel Deployment", "Responsive Design", "API Integration"],
    },
  ];

  return (
    <section id="keahlian" className="py-24 border-t border-zinc-800/80 bg-[#0c0c0e]">
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
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Teknologi & Keahlian
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl mx-auto">
            Kumpulan bahasa pemrograman, framework, dan peralatan yang biasa saya gunakan dalam membangun produk digital.
          </p>
        </motion.div>

        {/* 3 Columns with Framer Motion */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between rounded-3xl border border-zinc-800/90 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {group.category}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-700/80 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
                    >
                      {skill}
                    </span>
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
