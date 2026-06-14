import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import TrustBar from "@/components/ramani/TrustBar";
import Services from "@/components/ramani/Services";
import About from "@/components/ramani/About";
import EmergencyCTA from "@/components/ramani/EmergencyCTA";
import RamaniContact from "@/components/ramani/RamaniContact";

export default function Home() {
  return (
    <>
      <LandingAccordionItem />
      <TrustBar />
      <Services />
      <About />
      <EmergencyCTA />
      <RamaniContact />
    </>
  );
}
