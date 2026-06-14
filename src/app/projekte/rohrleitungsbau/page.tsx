import type { Metadata } from "next";
import ProjectDetail from "@/components/ramani/ProjectDetail";

export const metadata: Metadata = {
  title: "Rohrleitungsbau | Ramani Heizung",
  description: "Projektbeispiel: fachgerechter Rohrleitungsbau.",
};

export default function Page() {
  return (
    <ProjectDetail
      title="Rohrleitungsbau"
      category="Installation"
      gradient="from-stone-600/70 via-orange-700/45 to-stone-900"
      imageUrl="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2070&auto=format&fit=crop"
      intro="Sauber geplant und langlebig verlegt: Hier haben wir neue Rohrleitungen fachgerecht installiert."
    />
  );
}
