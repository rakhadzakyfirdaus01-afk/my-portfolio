import { ArrowUp, MessageCircle } from "lucide-react";
import Link from "next/link";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-sky-950/40 bg-transparent py-12 text-zinc-400 text-xs">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left copyright */}
        <div className="text-center sm:text-left">
          <div className="text-zinc-300 font-medium">
            © {new Date().getFullYear()} Rakha Dzaky Firdaus. All Rights Reserved.
          </div>
          <div className="text-zinc-500 mt-1">
            Siswa SMK Antartika 2 Sidoarjo • Rekayasa Perangkat Lunak (RPL)
          </div>
        </div>

        {/* Center Social Media Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/d_fr_rak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-zinc-800 transition-all shadow-sm"
            title="Kunjungi Instagram @d_fr_rak"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/rakhadzakyfirdaus01-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all shadow-sm"
            title="Kunjungi GitHub rakhadzakyfirdaus01-afk"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/6281228358630"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-zinc-800 transition-all shadow-sm"
            title="Kirim Pesan WhatsApp"
          >
            <MessageCircle size={15} />
          </a>
        </div>

        {/* Right back to top */}
        <Link
          href="#tentang"
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp size={13} />
        </Link>

      </div>
    </footer>
  );
}
