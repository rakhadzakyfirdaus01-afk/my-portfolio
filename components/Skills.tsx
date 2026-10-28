export default function Skills() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Gemini AI API",
    "Node.js",
    "Prisma ORM",
    "MySQL",
    "RESTful API",
    "Git & GitHub",
    "Vercel Deployment",
  ];

  return (
    <section id="skills" className="border-y border-slate-800/80 bg-slate-900/30 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Teknologi & Keahlian
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Alat dan teknologi yang biasa saya gunakan untuk membangun aplikasi web.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}