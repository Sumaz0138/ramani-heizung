import type { Metadata } from "next";
import ProjectDetail from "@/components/ramani/ProjectDetail";

export const metadata: Metadata = {
  title: "Wärmepumpen-Installation | Ramani Heizung",
  description: "Projektbeispiel: Installation einer modernen Wärmepumpe.",
};

export default function Page() {
  return (
    <ProjectDetail
      title="Wärmepumpen-Installation"
      category="Heizung"
      gradient="from-gray-700/80 via-gray-900/50 to-stone-900"
      imageUrl="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop"
      intro="Effizient und zukunftssicher heizen: Wir haben hier eine moderne Wärmepumpe geplant, installiert und in Betrieb genommen."
    />
  );
}
