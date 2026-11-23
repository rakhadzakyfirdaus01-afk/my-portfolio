"use client";

import Link from "next/link";
import { Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#060913]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo / Brand Name */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-base shadow-lg shadow-cyan-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-500/30">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white transition group-hover:text-cyan-400">
              RAKHA<span className="text-cyan-400">.DEV</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400">
              Fullstack & AI Web
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <Link
            href="#projects"
            className="transition-colors hover:text-cyan-400"
          >
            Proyek Pilihan
          </Link>
          <Link
            href="#skills"
            className="transition-colors hover:text-cyan-400"
          >
            Teknologi & Keahlian
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-cyan-400"
          >
            Kontak
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi%20atau%20berdiskusi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400 transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:scale-105"
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">WhatsApp</span>
            <ArrowUpRight size={13} className="text-emerald-400/80" />
          </a>
        </div>
      </div>
    </header>
  );
}
