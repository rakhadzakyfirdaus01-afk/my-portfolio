import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navbar Atas */}
      <Navbar />

      {/* Konten Utama */}
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>

      {/* Footer Bawah */}
      <Footer />
    </div>
  );
}