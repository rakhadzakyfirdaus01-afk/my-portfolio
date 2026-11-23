import { ArrowRight, Sparkles, MessageCircle, MapPin, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-[600px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-[350px] w-[400px] rounded-full bg-indigo-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* KOLOM KIRI: Text & Inti Pengenalan (7 Kolom) */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Tersedia untuk Proyek Web & Magang
            </div>

            {/* Sub-badge role */}
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Sparkles size={14} className="animate-pulse" />
              <span>Fullstack & AI Web Developer</span>
            </div>

            {/* Headline Judul Utama */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-[1.18]">
              Membangun Solusi Web Modern & Berbasis{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Kecerdasan Buatan
              </span>
            </h1>

            {/* Deskripsi Lengkap */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Halo, saya <strong className="text-white font-semibold">Rakha Dzaky Firdaus</strong> — pengembang web yang berfokus menciptakan aplikasi interaktif menggunakan Next.js, integrasi AI, serta pengalaman antarmuka yang cepat dan responsif.
            </p>

            {/* Highlight Poin Keahlian */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-400 lg:justify-start">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Next.js 16 & React 19</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Integrasi Gemini AI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Rekayasa Perangkat Lunak (RPL)</span>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
              >
                <span>Lihat Proyek Web</span>
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi%20atau%20berdiskusi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-slate-700/80 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-400 hover:scale-105"
              >
                <MessageCircle size={17} className="text-emerald-400" />
                <span>Hubungi Saya (WhatsApp)</span>
              </a>
            </div>

          </div>

          {/* KOLOM KANAN: Kartu Foto Profil Developer (5 Kolom) */}
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            
            {/* Ambient backlight glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-sky-500/20 to-indigo-500/30 blur-2xl opacity-75 transition duration-500 hover:opacity-100" />

            {/* Card Frame */}
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-2xl">
              
              {/* Header macOS/Window bar */}
              <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 pb-2.5 px-1">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Terminal size={12} className="text-cyan-400" />
                  <span>rakha.profile.tsx</span>
                </div>
                <span className="text-[10px] text-slate-600 font-mono">v1.0</span>
              </div>

              {/* Photo Container */}
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-950">
                <img
                  src="/rakha.jpg"
                  alt="Rakha Dzaky Firdaus"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle bottom shadow vignette on photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Floating Chip: AI Stack (Pojok Kanan Atas) */}
                <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-slate-900/85 px-3 py-1 text-[11px] font-semibold text-cyan-300 shadow-lg backdrop-blur-md">
                  <Sparkles size={12} className="text-cyan-400" />
                  <span>Gemini AI Integrator</span>
                </div>

                {/* Text Overlay di bagian bawah foto */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-slate-900/85 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">Rakha Dzaky Firdaus</h3>
                      <p className="text-xs text-cyan-400">Software Engineer & Web Developer</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin size={12} className="text-rose-400" />
                      <span>Sidoarjo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-3.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Status: Ready to Build</span>
                </div>
                <span className="font-mono text-cyan-400/90 text-[11px]">SMK Antartika 2</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
