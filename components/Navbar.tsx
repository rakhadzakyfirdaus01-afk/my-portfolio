"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("tentang");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ["tentang", "pendidikan", "proyek", "keahlian", "kontak"];
          const scrollY = window.scrollY;

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop - 140;
              const height = el.offsetHeight;
              if (scrollY >= top && scrollY < top + height) {
                setActiveTab(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl"
    >
      <div className="flex items-center justify-between rounded-full border border-zinc-800/90 bg-[#09090b]/85 px-3 py-1.5 shadow-2xl backdrop-blur-xl">
        
        {/* Brand Avatar */}
        <Link
          href="#tentang"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white shadow-md shadow-sky-500/25 transition-transform hover:scale-105"
        >
          R
        </Link>

        {/* Navigation Links with Framer-motion Sliding Pill */}
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveTab(link.id)}
                className="relative rounded-full px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-sky-600 shadow-sm shadow-sky-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* WhatsApp Quick Link */}
        <a
          href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 sm:w-auto sm:px-3 items-center justify-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold hover:bg-sky-500 hover:text-white transition-all duration-200"
          title="Hubungi via WhatsApp"
        >
          <MessageCircle size={14} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

      </div>
    </motion.header>
  );
}
