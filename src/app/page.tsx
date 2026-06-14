import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import TrustBar from "@/components/ramani/TrustBar";
import Services from "@/components/ramani/Services";
import About from "@/components/ramani/About";
import Process from "@/components/ramani/Process";
import WhyChooseUs from "@/components/ramani/WhyChooseUs";
import Gallery from "@/components/ramani/Gallery";
import EmergencyCTA from "@/components/ramani/EmergencyCTA";
import RamaniContact from "@/components/ramani/RamaniContact";

export default function Home() {
  return (
    <>
      <LandingAccordionItem />
      <TrustBar />
      <Services />
      <About />
      <Process />
      <WhyChooseUs />
      <Gallery />
      <EmergencyCTA />
      <RamaniContact />
    </>
  );
}
