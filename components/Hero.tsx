import { ArrowRight, MessageCircle, MapPin, GraduationCap, Code } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="tentang" className="py-14 md:py-20 lg:py-24 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Kolom Teks Pengenalan (7 Kolom) */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Tagline Sekolah / Jurusan */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <GraduationCap size={16} />
              <span>Siswa SMK Antartika 2 Sidoarjo • Jurusan RPL</span>
            </div>

            {/* Judul Utama */}
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Membangun Solusi Web Modern & Berbasis{" "}
              <span className="text-sky-400">
                Kecerdasan Buatan
              </span>
            </h1>

            {/* Paragraf Pengenalan yang Humanis */}
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Halo, perkenalkan saya <strong className="text-white font-semibold">Rakha Dzaky Firdaus</strong>. Saya berfokus pada pengembangan aplikasi web interaktif menggunakan ekosistem Next.js, integrasi AI, serta pembuatan pengalaman antarmuka yang cepat dan responsif.
            </p>

            {/* Detail Profil Singkat */}
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Code size={16} className="text-sky-400 shrink-0" />
                <span>Fokus: Next.js, TypeScript, Tailwind CSS, & Integrasi API Gemini</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-rose-400 shrink-0" />
                <span>Domisili: Sidoarjo, Jawa Timur, Indonesia</span>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-500 shadow-sm"
              >
                <span>Lihat Proyek Pilihan</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi%20atau%20berdiskusi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-500/50 hover:bg-emerald-600/10 hover:text-emerald-300"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                <span>Hubungi Saya (WhatsApp)</span>
              </a>
            </div>

          </div>

          {/* Kolom Foto Profil Developer (5 Kolom) */}
          <div className="w-full max-w-sm mx-auto lg:col-span-5 lg:max-w-none">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-xl">
              
              {/* Foto Rakha */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-950">
                <img
                  src="/rakha.jpg"
                  alt="Rakha Dzaky Firdaus"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Keterangan di bawah foto */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col gap-0.5">
                <h2 className="text-base font-bold text-white">Rakha Dzaky Firdaus</h2>
                <p className="text-xs text-sky-400">Junior Fullstack & AI Web Developer</p>
                <p className="text-xs text-slate-400 mt-1">SMK Antartika 2 Sidoarjo • RPL</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
