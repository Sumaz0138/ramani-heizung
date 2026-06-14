import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import Services from "@/components/ramani/Services";
import EmergencyCTA from "@/components/ramani/EmergencyCTA";
import RamaniContact from "@/components/ramani/RamaniContact";

export default function Home() {
  return (
    <>
      <LandingAccordionItem />
      <Services />
      <EmergencyCTA />
      <RamaniContact />
    </>
  );
}
