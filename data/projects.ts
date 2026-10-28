export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string; // Link website yang bisa diakses
  adminUrl?: string;
}

export const projects: Project[] = [
  {
    id: "dna-ai-platform",
    title: "DNA AI Platform",
    description:
      "Platform AI Advertising mutakhir dengan asisten cerdas Gemini Auto-fallback, pengenal gambar, generator prompt, pembaca dokumen, dan multi-tema.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "Prisma"],
    image: "/dna-ai-preview.png",
    liveUrl: "https://dna-ai-tools-one.vercel.app/",
  },
  {
    id: "dna-client-survey",
    title: "PT DNA Client Survey & Admin Portal",
    description:
      "Sistem survei kepuasan klien 5-tahap dengan proteksi wajib Google Maps, audit mutu 21 butir evaluasi, portal dashboard korporat terproteksi, serta aplikasi desktop Windows resmi.",
    tags: ["JavaScript", "HTML5", "CSS3", "Supabase", "Electron", "Vercel"],
    image: "/dna-survey-preview.png",
    liveUrl: "https://pt-dna-survey.vercel.app/",
    adminUrl: "https://pt-dna-survey.vercel.app/admin",
  },
];