"use client";

import { X, ExternalLink, Globe, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-slate-950 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
              <Globe size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white sm:text-base">
                  {project.title}
                </h3>
                <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
                  Live View
                </span>
              </div>
              <p className="hidden text-xs text-slate-400 sm:block font-mono">
                {project.liveUrl}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Open in new tab */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500/15 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-500 hover:text-white"
            >
              <span>Buka Tab Baru</span>
              <ExternalLink size={13} />
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              aria-label="Tutup"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* Iframe View */}
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
