export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      description: "Membangun tampilan web yang responsif, interaktif, dan optimal di berbagai layar.",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      description: "Pengelolaan alur data server, integrasi REST API, dan basis data terstruktur.",
      items: ["Node.js", "RESTful API", "Prisma ORM", "MySQL"],
    },
    {
      title: "Tools & Deployment",
      description: "Peralatan pendukung integrasi AI, version control, dan hosting cloud.",
      items: ["Gemini AI API", "Git & GitHub", "Vercel Deployment"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-800 bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header Seksi */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Teknologi & Keahlian
          </h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Alat dan teknologi yang biasa saya gunakan untuk membangun aplikasi web:
          </p>
        </div>

        {/* 3 Kolom Kategori Keahlian */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {cat.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {cat.description}
                </p>
              </div>

              {/* Tag Daftar Keahlian */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700 bg-slate-800/90 px-2.5 py-1 text-xs font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
