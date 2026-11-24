import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Folders from "@/components/Folders";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FlyingBirds from "@/components/FlyingBirds";
import OceanAtmosphere from "@/components/OceanAtmosphere";
import Clouds from "@/components/Clouds";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c234a] via-[#08172c] to-[#021120] text-zinc-100 selection:bg-sky-600 selection:text-white">
      {/* ☁️ AWAN LEMBUT MELAYANG DI LANGIT (Aesthetic Drifting Clouds) */}
      <Clouds />

      {/* 🌌 ALAM LANGIT (THE SKY): Kawanan burung walet & ranting siluet di pojok atas */}
      <FlyingBirds />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Bagian Atas: Angkasa & Daratan */}
        <Hero />
        <About />
        <Experience />
        <Folders />
        <Projects />

        {/* 🌊 ALAM SAMUDRA (THE DEEP OCEAN): Kawanan ikan berenang, gelembung mikro, & cahaya bawah laut */}
        <div className="relative">
          <OceanAtmosphere />
          <Skills />
          <Contact />
        </div>
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />
    </div>
  );
}
