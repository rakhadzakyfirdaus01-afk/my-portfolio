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
    <footer id="contact" className="py-16 bg-[#080c14] text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Kontak & Informasi
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Silakan hubungi saya untuk keperluan magang, diskusi teknis proyek, atau pertanyaan lainnya:
          </p>
        </div>

        {/* Tombol Kontak Nyata */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi%20atau%20berdiskusi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/15 border border-emerald-500/30 px-4 py-2.5 text-xs font-semibold text-emerald-300 transition-colors hover:bg-emerald-600 hover:text-white"
          >
            <MessageCircle size={15} />
            <span>WhatsApp (+62 812-2835-8630)</span>
          </a>

          <a
            href="mailto:rakhadzakyfirdaus01@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-white"
          >
            <Mail size={15} className="text-slate-400" />
            <span>rakhadzakyfirdaus01@gmail.com</span>
          </a>

          <a
            href="https://github.com/rakhadzakyfirdaus01-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-white"
          >
            <GithubIcon className="h-3.5 w-3.5 text-slate-400" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Lokasi & Asal Sekolah */}
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-slate-500 border-t border-slate-800/80 pt-6">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-rose-400" />
            <span>Sidoarjo, Jawa Timur, Indonesia</span>
          </div>
          <span>•</span>
          <span>Siswa Rekayasa Perangkat Lunak (RPL) di SMK Antartika 2 Sidoarjo</span>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-xs text-slate-600">
          © {new Date().getFullYear()} Rakha Dzaky Firdaus. Dibuat dengan Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
