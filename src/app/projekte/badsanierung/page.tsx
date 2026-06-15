import type { Metadata } from "next";
import ProjectDetail from "@/components/ramani/ProjectDetail";

export const metadata: Metadata = {
  title: "Komplette Badsanierung | Ramani Heizung",
  description: "Projektbeispiel: komplette Badsanierung aus einer Hand.",
};

export default function Page() {
  return (
    <ProjectDetail
      title="Komplette Badsanierung"
      category="Bad & Sanitär"
      gradient="from-gray-800/80 via-gray-900/55 to-stone-900"
      imageUrl="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
      intro="Vom ersten Entwurf bis zur letzten Fuge: Wir haben dieses Bad komplett neu geplant und umgesetzt. Modern, funktional und termingerecht."
    />
  );
}
