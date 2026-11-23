"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Eye, Globe } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "ai") return p.tags.includes("Gemini AI");
    if (filter === "web") return p.tags.includes("Next.js") || p.tags.includes("JavaScript");
    return true;
  });

  return (
    <section id="proyek" className="relative py-24 border-t border-slate-800/80 bg-[#030712]">
      
      {/* Topographic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 250 C 350 150, 750 400, 1250 250 S 1750 350, 2050 250" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Proyek Pilihan
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            Aplikasi web produksi yang telah saya kembangkan dan siap diakses langsung secara online.
          </p>

          {/* Segmented Filter Control */}
          <div className="mt-8 inline-flex items-center rounded-full border border-slate-800 bg-slate-900/80 p-1 backdrop-blur-md">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === "ai"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Platform
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === "web"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Web App
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              {/* Preview Image with Clean Aspect Ratio */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950 sm:h-72 border-b border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700/80 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-800/80 pt-5 mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/90 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
                  >
                    <Eye size={14} />
                    <span>Coba di Sini</span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-500 hover:scale-105"
                  >
                    <span>Kunjungi Web</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Interaktif */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
