import { ArrowDown, MessageCircle, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Topographic Contour Background Curves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C 200 100, 400 400, 800 250 S 1400 150, 1800 350" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-100 350 C 300 250, 600 500, 1000 350 S 1500 250, 1900 450" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-100 500 C 250 400, 700 650, 1100 500 S 1600 400, 2000 600" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-100 650 C 350 550, 800 800, 1200 650 S 1700 550, 2100 750" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Subtle radial ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        
        {/* Welcome Tag */}
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-6">
          <span>WELCOME TO MY PORTOFOLIO</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]">
          RAKHA DZAKY <br className="hidden sm:inline" />
          <span className="text-blue-500">FIRDAUS</span>
        </h1>

        {/* Role & School */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-medium text-slate-300">
          <span>Software Engineer</span>
          <span className="text-slate-600">•</span>
          <span className="text-blue-400">AI Web Developer</span>
          <span className="text-slate-600">•</span>
          <span>SMK Antartika 2 Sidoarjo</span>
        </div>

        {/* Bio Ringkas */}
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400">
          Aku berfokus pada pengembangan aplikasi web modern menggunakan Next.js, integrasi Gemini AI API, serta perancangan antarmuka yang bersih, cepat, dan berdampak nyata.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="#proyek"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:scale-105"
          >
            <span>Lihat Portofolio</span>
            <ArrowDown size={15} />
          </Link>

          <a
            href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-medium text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800"
          >
            <MessageCircle size={15} className="text-emerald-400" />
            <span>Hubungi Saya</span>
          </a>
        </div>

      </div>
    </section>
  );
}
