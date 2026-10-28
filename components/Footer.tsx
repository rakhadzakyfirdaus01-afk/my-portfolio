export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-16 text-center text-sm text-slate-400"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          Mari Terhubung & Berkolaborasi
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
          Punya ide proyek, diskusi seputar AI, atau peluang kerja sama? Hubungi saya langsung via WhatsApp atau Email:
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/6281228358630?text=Halo%20Rakha,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berkolaborasi%20atau%20berdiskusi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-white hover:scale-105"
          >
            <span>💬 Chat WhatsApp (+62 812-2835-8630)</span>
          </a>

          <a
            href="mailto:rakhadzakyfirdaus01@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
          >
            <span>✉️ rakhadzakyfirdaus01@gmail.com</span>
          </a>
        </div>

        <div className="mt-12 border-t border-slate-900 pt-6 text-xs text-slate-600">
          © {new Date().getFullYear()} Rakha. Semua hak dilindungi undang-undang.
        </div>
      </div>
    </footer>
  );
}