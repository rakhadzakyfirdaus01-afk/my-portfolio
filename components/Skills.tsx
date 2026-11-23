import { Code2, Server, Wrench, CheckCircle } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend Architecture",
      icon: Code2,
      description: "Pengembangan antarmuka yang responsif, interaktif, dan optimal di berbagai perangkat.",
      skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      category: "Backend & Database",
      icon: Server,
      description: "Arsitektur server terstruktur, integrasi REST API, dan perancangan database relasional.",
      skills: ["Node.js", "RESTful API", "Prisma ORM", "MySQL", "Supabase PostgreSQL"],
    },
    {
      category: "AI, Tools & Workflow",
      icon: Wrench,
      description: "Peralatan integrasi kecerdasan buatan, kontrol versi Git, dan otomasi deployment cloud.",
      skills: ["Google Gemini API", "Git & GitHub", "Vercel Deployment", "C# (.NET)", "Python"],
    },
  ];

  return (
    <section id="keahlian" className="py-20 border-t border-slate-800/80 bg-[#040814]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Teknologi & Keahlian
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            Kumpulan bahasa pemrograman, framework, dan peralatan yang biasa saya gunakan dalam membangun produk digital.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-slate-900/60 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {group.category}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700/80 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-blue-300"
                    >
                      {skill}
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
