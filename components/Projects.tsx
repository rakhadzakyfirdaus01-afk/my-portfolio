"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "ai") return p.tags.includes("Gemini AI");
    if (filter === "web") return p.tags.includes("Next.js") || p.tags.includes("JavaScript");
    return true;
  });

  const filterTabs = [
    { id: "all", label: "Semua Proyek" },
    { id: "ai", label: "AI Platform" },
    { id: "web", label: "Web App" },
  ];

  return (
    <section id="proyek" className="relative py-24 border-t border-zinc-800/80 bg-[#09090b]">
      
      {/* Topographic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 250 C 350 150, 750 400, 1250 250 S 1750 350, 2050 250" fill="none" stroke="#10b981" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Proyek Pilihan
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl mx-auto">
            Aplikasi web produksi yang telah saya kembangkan dan siap diakses langsung secara online.
          </p>

          {/* Segmented Filter Control with Framer Motion Sliding Pill */}
          <div className="mt-8 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 p-1 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className="relative rounded-full px-4 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:text-white"
                >
                  {isActive && (
                    <motion.div
                      layoutId="filterTabPill"
                      className="absolute inset-0 rounded-full bg-emerald-600 shadow-sm shadow-emerald-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid gap-8 md:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5"
              >
                {/* Preview Image with Clean Aspect Ratio */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-950 sm:h-72 border-b border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-700/80 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-zinc-800/80 pt-5 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/90 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
                    >
                      <Eye size={14} />
                      <span>Coba di Sini</span>
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500"
                    >
                      <span>Kunjungi Web</span>
                      <ExternalLink size={13} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal Interaktif */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
