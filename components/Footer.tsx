import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#060608] py-12 text-zinc-500 text-xs">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left copyright */}
        <div className="text-center sm:text-left">
          <div className="text-zinc-300 font-medium">
            © {new Date().getFullYear()} Rakha Dzaky Firdaus. All Rights Reserved.
          </div>
          <div className="text-zinc-500 mt-1">
            Siswa SMK Antartika 2 Sidoarjo • Rekayasa Perangkat Lunak (RPL)
          </div>
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
