import { Layout, Server, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      color: "from-cyan-500 to-blue-500",
      description: "Antarmuka modern, reaktif, cepat, dan responsif di berbagai perangkat.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      icon: Server,
      color: "from-blue-500 to-indigo-500",
      description: "Arsitektur server terstruktur, manajemen basis data, dan REST API efisien.",
      skills: ["Node.js", "RESTful API", "Prisma ORM", "MySQL"],
    },
    {
      title: "AI & Cloud Deployment",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      description: "Integrasi model AI terkini, version control Git, dan workflow deployment otomatis.",
      skills: ["Gemini AI API", "Git & GitHub", "Vercel Deployment"],
    },
  ];

  return (
    <section id="skills" className="relative border-y border-white/[0.06] bg-slate-950/40 py-20 backdrop-blur-sm">
      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <Sparkles size={13} />
            <span>Stack & Alat Kerja</span>
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Teknologi & Keahlian
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Alat dan teknologi yang biasa saya gunakan untuk membangun aplikasi web modern dari hulu ke hilir.
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                {/* Glow subtle top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} opacity-80`} />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-800/80 text-cyan-400 shadow-md">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {cat.skills.length} Techs
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/90 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                    >
                      <CheckCircle2 size={12} className="text-cyan-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
