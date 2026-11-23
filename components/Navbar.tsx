"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("tentang");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["tentang", "pendidikan", "proyek", "keahlian", "kontak"];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "tentang", label: "Tentang" },
    { id: "pendidikan", label: "Pendidikan" },
    { id: "proyek", label: "Proyek" },
    { id: "keahlian", label: "Keahlian" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#070c18]/85 px-3 py-1.5 shadow-2xl backdrop-blur-xl">
        
        {/* Brand Avatar / Initial */}
        <Link
          href="#tentang"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-transform hover:scale-105"
        >
          R
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveTab(link.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* WhatsApp Quick Link */}
        <a
          href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 sm:w-auto sm:px-3 items-center justify-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200"
          title="Hubungi via WhatsApp"
        >
          <MessageCircle size={14} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

      </div>
    </header>
  );
}
