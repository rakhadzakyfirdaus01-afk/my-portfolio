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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-600 selection:text-white">
      {/* 2 Animated Flying Birds Overlay */}
      <FlyingBirds />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Folders />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />
    </div>
  );
}
