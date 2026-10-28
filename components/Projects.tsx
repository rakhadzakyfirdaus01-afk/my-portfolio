"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Eye } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Proyek Pilihan
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Koleksi aplikasi web yang telah saya kembangkan dan dapat diakses langsung.
          </p>
        </div>

        <div
          className={`grid gap-8 ${
            projects.length === 1 ? "mx-auto max-w-2xl" : "md:grid-cols-2"
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              {/* Thumbnail Proyek */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              </div>

              {/* Konten Kartu */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tag Teknologi */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol Aksi */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-800/80 pt-5 mt-auto">
                  {/* Coba di Modal */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700"
                  >
                    <Eye size={15} />
                    <span>Coba di Sini</span>
                  </button>

                  {/* Kunjungi Web Tab Baru */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:scale-105"
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

      {/* Modal Interaktif */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}