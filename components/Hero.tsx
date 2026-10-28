import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 text-center md:py-32">
      {/* Efek Glow di Background */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Badge Keahlian */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 shadow-sm">
          <Sparkles size={14} />
          Fullstack & AI Web Developer
        </div>

        {/* Headline Judul */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Membangun Solusi Web Modern & Berbasis{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Kecerdasan Buatan
          </span>
        </h1>

        {/* Deskripsi Singkat */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
          Halo, saya pengembang web yang berfokus menciptakan aplikasi interaktif menggunakan Next.js, integrasi AI, serta pengalaman antarmuka yang cepat dan responsif.
        </p>

        {/* Tombol Aksi */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:scale-105"
          >
            <span>Lihat Proyek Web</span>
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi%20atau%20berdiskusi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 hover:scale-105"
          >
            <span>Hubungi Saya (WhatsApp)</span>
          </a>
        </div>
      </div>
    </section>
  );
}