import { MessageCircle, Mail, MapPin } from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/[0.08] bg-[#04060c] py-20 text-slate-400"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        
        {/* Glow badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Open for Opportunities</span>
        </div>

        <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
          Mari Terhubung & Berkolaborasi
        </h3>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
          Punya ide proyek, diskusi seputar AI, atau peluang kerja sama? Hubungi saya langsung via WhatsApp atau Email:
        </p>

        {/* Contact Action Cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi%20atau%20berdiskusi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <MessageCircle size={18} />
            <span>Chat WhatsApp (+62 812-2835-8630)</span>
          </a>

          <a
            href="mailto:rakhadzakyfirdaus01@gmail.com"
            className="inline-flex items-center gap-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-105"
          >
            <Mail size={18} className="text-cyan-400" />
            <span>rakhadzakyfirdaus01@gmail.com</span>
          </a>

          <a
            href="https://github.com/rakhadzakyfirdaus01-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-slate-700 hover:text-white hover:scale-105"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Location & School info */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-rose-400" />
            <span>Sidoarjo, Jawa Timur, Indonesia</span>
          </div>
          <span>•</span>
          <span>SMK Antartika 2 Sidoarjo (RPL)</span>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 border-t border-white/[0.06] pt-8 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Rakha Dzaky Firdaus. Dibuat dengan Next.js & Tailwind CSS.</span>
          </div>
          <div className="text-slate-500 font-mono text-[11px]">
            Designed with precision & performance
          </div>
        </div>
      </div>
    </footer>
  );
}
