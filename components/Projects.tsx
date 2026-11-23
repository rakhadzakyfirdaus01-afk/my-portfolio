"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Eye, Globe, Sparkles, Laptop } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <Sparkles size={13} />
            <span>Karya Terpilih</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Proyek Pilihan
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            Koleksi aplikasi web produksi yang telah saya kembangkan dan siap diakses secara langsung.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Browser Window Header Mockup */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex max-w-[200px] truncate items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1 text-[11px] font-mono text-slate-400 sm:max-w-xs">
                  <Globe size={11} className="text-cyan-400 flex-shrink-0" />
                  <span className="truncate">{project.liveUrl.replace("https://", "")}</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Thumbnail Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950 sm:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70" />
                
                {/* Live Badge */}
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-slate-950/80 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Production</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-800/80 pt-5 mt-auto">
                  {/* Modal Trigger */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/90 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
                  >
                    <Eye size={15} className="text-cyan-400" />
                    <span>Coba di Sini</span>
                  </button>

                  {/* Open in new tab */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-105 hover:shadow-cyan-500/30"
                  >
                    <span>Kunjungi Web</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
