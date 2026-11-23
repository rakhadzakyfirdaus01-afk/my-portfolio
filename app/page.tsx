import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500 selection:text-white overflow-hidden">
      {/* Navbar Atas */}
      <Navbar />

      {/* Konten Utama */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
      </main>

      {/* Footer Bawah */}
      <Footer />
    </div>
  );
}
