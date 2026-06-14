"use client";

import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/components/ramani/data";

// --- Typen ---
interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

// --- Daten für das Bild-Akkordeon (Ramani-Leistungen) ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Heizungsinstallation",
    imageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Badsanierung",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sanitär & Wasser",
    imageUrl:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Gas-Service",
    imageUrl:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "24/7 Notdienst",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
  },
];

// --- Akkordeon-Element ---
interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Hintergrundbild */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget;
          target.onerror = null;
          target.src = `https://placehold.co/400x450/ea580c/ffffff?text=${encodeURIComponent(
            item.title
          )}`;
        }}
      />
      {/* Dunkles Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Beschriftung */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Haupt-Hero-Komponente ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="top" className="bg-white font-sans">
      <section className="container mx-auto px-4 pt-24 pb-10 md:pt-28 md:pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Linke Seite: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
              Qualitätsservice{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                aus der Region
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Ihr Meisterbetrieb für Heizung, Sanitär, Gas und Wasser. Wir stehen
              für schnelle Reaktionszeiten, saubere Arbeit und moderne Technik,
              vom Notfall bis zur kompletten Badsanierung.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600 hover:scale-[1.03]"
              >
                Angebot anfordern
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href={COMPANY.emergencyPhoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition-colors duration-300 hover:border-gray-900 hover:bg-gray-50"
              >
                <Phone className="h-4 w-4 text-orange-500" aria-hidden="true" />
                24/7 Notdienst
              </a>
            </div>
          </div>

          {/* Rechte Seite: Bild-Akkordeon */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
