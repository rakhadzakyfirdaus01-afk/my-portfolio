"use client";

import { X, ExternalLink, Globe } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <Globe size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                {project.title}
              </h3>
              <p className="hidden text-xs text-slate-400 sm:block">
                {project.liveUrl}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tombol Buka Tab Baru */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
            >
              <span>Buka Tab Baru</span>
              <ExternalLink size={14} />
            </a>

            {/* Tombol Tutup */}
            <button
              onClick={onClose}
              className="rounded-xl p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              aria-label="Tutup"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Layar Website Interaktif */}
        <div className="relative flex-1 bg-black">
          <iframe
            src={project.liveUrl}
            title={project.title}
            className="h-full w-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
}