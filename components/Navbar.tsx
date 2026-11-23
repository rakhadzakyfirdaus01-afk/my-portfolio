"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0b0f19]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand / Nama */}
        <Link href="/" className="flex flex-col">
          <span className="text-base font-bold tracking-tight text-white hover:text-sky-400 transition-colors">
            Rakha Dzaky Firdaus
          </span>
          <span className="text-[11px] text-slate-400">
            Siswa RPL & Web Developer
          </span>
        </Link>

        {/* Menu Navigasi */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <Link href="#tentang" className="transition-colors hover:text-sky-400">
            Tentang
          </Link>
          <Link href="#skills" className="transition-colors hover:text-sky-400">
            Keahlian
          </Link>
          <Link href="#projects" className="transition-colors hover:text-sky-400">
            Proyek
          </Link>
          <Link href="#contact" className="transition-colors hover:text-sky-400">
            Kontak
          </Link>
        </nav>

        {/* Tombol Kontak WhatsApp */}
        <div className="flex items-center">
          <a
            href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/20 border border-emerald-500/40 px-3.5 py-1.5 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-600 hover:text-white"
          >
            <MessageCircle size={14} />
            <span>Hubungi Saya</span>
          </a>
        </div>
      </div>
    </header>
  );
}
