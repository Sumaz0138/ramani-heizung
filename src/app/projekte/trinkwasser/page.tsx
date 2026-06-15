import type { Metadata } from "next";
import ProjectDetail from "@/components/ramani/ProjectDetail";

export const metadata: Metadata = {
  title: "Trinkwasser-Anlage | Ramani Heizung",
  description: "Projektbeispiel: Erneuerung einer Trinkwasser-Anlage.",
};

export default function Page() {
  return (
    <ProjectDetail
      title="Trinkwasser-Anlage"
      category="Wasser"
      gradient="from-gray-800/75 via-gray-900/50 to-stone-900"
      imageUrl="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop"
      intro="Hygienisch und zuverlässig: Wir haben die Trinkwasser-Installation erneuert und sorgen so für einwandfreie Wasserqualität im ganzen Haus."
    />
  );
}
