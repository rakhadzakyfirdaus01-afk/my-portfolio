import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo / Nama Brand */}
        <Link href="/" className="text-xl font-bold tracking-wider text-white">
          PORTFOLIO<span className="text-cyan-400">.AI</span>
        </Link>

        {/* Menu Tautan */}
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link
            href="#projects"
            className="transition hover:text-cyan-400"
          >
            Proyek
          </Link>
          <Link
            href="#skills"
            className="transition hover:text-cyan-400"
          >
            Keahlian
          </Link>
          <Link
            href="#contact"
            className="transition hover:text-cyan-400"
          >
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
}