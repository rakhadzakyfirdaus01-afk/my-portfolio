"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin, Send, Check } from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Contact() {
  const [pesan, setPesan] = useState("");
  const [nama, setNama] = useState("");

  const handleSendWA = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Rakha, saya ${nama || "rekan"}.\n\n${pesan || "Saya melihat portofolio Anda dan ingin berdiskusi."}`
    );
    window.open(`https://wa.me/6281228358630?text=${text}`, "_blank");
  };

  return (
    <section id="kontak" className="py-24 border-t border-slate-800/80 bg-[#030712]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
            GET IN TOUCH
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Hubungi & Terhubung
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-lg mx-auto">
            Terbuka untuk diskusi proyek, kesempatan magang, atau kolaborasi pengembangan web.
          </p>
        </div>

        {/* 2 Cards Grid: Left Contact Info - Right Direct Form */}
        <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto items-start">
          
          {/* Kolom Kiri: Info & Sosial (5 Kolom) */}
          <div className="lg:col-span-5 space-y-4">
            
            <a
              href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-emerald-500/40 hover:bg-slate-900 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                <MessageCircle size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-400">WhatsApp Langsung</div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  +62 812-2835-8630
                </div>
              </div>
            </a>

            <a
              href="mailto:rakhadzakyfirdaus01@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-blue-500/40 hover:bg-slate-900 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Email Resmi</div>
                <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate max-w-[210px] sm:max-w-none">
                  rakhadzakyfirdaus01@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://github.com/rakhadzakyfirdaus01-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-slate-700 hover:bg-slate-900 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-slate-300 group-hover:scale-105 transition-transform">
                <GithubIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">GitHub Profile</div>
                <div className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors">
                  rakhadzakyfirdaus01-afk
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Domisili</div>
                <div className="text-sm font-bold text-white">
                  Sidoarjo, Jawa Timur, Indonesia
                </div>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Formulir Kirim Pesan Cepat (7 Kolom) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Kirim Pesan Cepat
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Pesan akan langsung diarahkan ke chat WhatsApp saya secara otomatis.
              </p>

              <form onSubmit={handleSendWA} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Pak Budi / Teman Belajar"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Pesan / Pertanyaan
                  </label>
                  <textarea
                    rows={4}
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Tulis pesan atau tawaran kerja sama di sini..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:border-blue-500 focus:outline-none resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500"
                >
                  <Send size={14} />
                  <span>Kirim Pesan ke WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
