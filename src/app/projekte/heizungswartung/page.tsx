import type { Metadata } from "next";
import ProjectDetail from "@/components/ramani/ProjectDetail";

export const metadata: Metadata = {
  title: "Heizungswartung | Ramani Heizung",
  description: "Projektbeispiel: regelmäßige Heizungswartung im Bestand.",
};

export default function Page() {
  return (
    <ProjectDetail
      title="Heizungswartung"
      category="Service"
      gradient="from-gray-700/75 via-stone-700/55 to-stone-900"
      imageUrl="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop"
      intro="Damit die Anlage zuverlässig läuft: regelmäßige Wartung für volle Leistung, niedrige Kosten und eine lange Lebensdauer."
    />
  );
}
