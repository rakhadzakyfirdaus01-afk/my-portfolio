import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const education = [
    {
      institution: "SMK Antartika 2 Sidoarjo",
      period: "2024 – Sekarang",
      degree: "Rekayasa Perangkat Lunak (RPL)",
      description:
        "Fokus pembelajaran pada arsitektur web modern, pemrograman berorientasi objek, basis data relasional (SQL), serta implementasi algoritma dan pengujian perangkat lunak.",
      tags: ["Web Programming", "Next.js", "C# & Java", "Database Systems"],
    },
  ];

  const experience = [
    {
      title: "DNA AI Platform",
      role: "Lead Fullstack & AI Integrator",
      badge: "AI Web Platform",
      period: "2026",
      description:
        "Merancang dan mendeploy platform web AI Advertising interaktif dengan integrasi Google Gemini API, asisten percakapan cerdas dengan auto-fallback, dan sistem generator prompt terstruktur.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "Prisma"],
    },
    {
      title: "PT DNA Client Experience Survey",
      role: "Frontend Developer",
      badge: "Client Production",
      period: "2026",
      description:
        "Mengembangkan sistem survei kepuasan klien 5-tahap interaktif untuk PT DNA Advertising dengan alur deklarasi Google Maps review, kompresi foto otomatis, dan verifikasi penilaian digital.",
      tags: ["JavaScript", "HTML5", "CSS3", "Supabase", "Vercel"],
    },
    {
      title: "The Zero Launcher & LuaTools",
      role: "Systems Developer & Localization",
      badge: "Desktop & Systems",
      period: "2026",
      description:
        "Membangun desktop client C# (.NET/WPF) dengan backend Supabase PostgreSQL, serta berkontribusi dalam validasi internasionalisasi konsistensi string di ekosistem open source.",
      tags: ["C#", ".NET", "PostgreSQL", "Python Validation"],
    },
  ];

  return (
    <section id="pendidikan" className="relative py-20 border-t border-slate-800/80 bg-[#030712]">
      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
            TIMELINE & BACKGROUND
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pendidikan & Pengalaman
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            Jejak akademik dan rekam jejak pengembangan perangkat lunak yang telah saya jalani.
          </p>
        </div>

        {/* 2-Column Grid: Left Education - Right Experience */}
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Kolom Kiri: Pendidikan */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Pendidikan Formal</h3>
            </div>

            <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Marker */}
                  <div className="absolute -left-[31px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border-2 border-blue-500 text-[10px] font-bold text-blue-400">
                    {idx + 1}
                  </div>

                  <div className="rounded-2xl border border-slate-800/90 bg-slate-900/60 p-5 transition-colors hover:border-slate-700">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-blue-600/10 border border-blue-500/20 px-3 py-0.5 text-xs font-semibold text-blue-400">
                        {edu.period}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">Vocational High School</span>
                    </div>

                    <h4 className="mt-3 text-lg font-bold text-white">
                      {edu.institution}
                    </h4>
                    <p className="text-xs font-semibold text-slate-300 mt-0.5">
                      {edu.degree}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-slate-400">
                      {edu.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                      {edu.tags.map((t) => (
                        <span key={t} className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Pengalaman & Proyek Nyata */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600/15 text-emerald-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Pengalaman & Proyek</h3>
            </div>

            <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Node Marker */}
                  <div className="absolute -left-[31px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border-2 border-emerald-500 text-[10px] font-bold text-emerald-400">
                    {idx + 1}
                  </div>

                  <div className="rounded-2xl border border-slate-800/90 bg-slate-900/60 p-5 transition-colors hover:border-slate-700">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-emerald-600/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                        {exp.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                    </div>

                    <h4 className="mt-3 text-base font-bold text-white">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-blue-400 font-medium">
                      {exp.role}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                      {exp.tags.map((t) => (
                        <span key={t} className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
