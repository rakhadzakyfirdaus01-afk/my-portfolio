"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Eye } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header Seksi */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Proyek Pilihan
          </h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Koleksi aplikasi web yang telah saya kembangkan dan dapat diakses langsung secara online:
          </p>
        </div>

        {/* Grid Proyek */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 transition-colors hover:border-slate-700"
            >
              {/* Gambar Pratinjau Proyek */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950 sm:h-64 border-b border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Konten Kartu */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Tag Teknologi */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-700/80 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol Aksi */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-5 mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-700"
                  >
                    <Eye size={14} />
                    <span>Coba di Sini</span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-500"
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
