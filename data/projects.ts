export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string; // Link website yang bisa diakses
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
    title: "PT DNA Client Experience Survey",
    description:
      "Sistem survei kepuasan klien 5-tahap interaktif untuk PT DNA Advertising dengan alur terpadu deklarasi Google Maps review, kompresi foto otomatis, dan verifikasi penilaian digital.",
    tags: ["JavaScript", "HTML5", "CSS3", "Supabase", "Vercel"],
    image: "/dna-survey-preview.png",
    liveUrl: "https://pt-dna-survey.vercel.app/",
  },
];
