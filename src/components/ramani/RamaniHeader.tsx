"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Wrench, Menu, Phone, Siren, X } from "lucide-react";
import { COMPANY } from "./data";

export default function RamaniHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const to = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-end px-5 py-4 sm:px-8">
        {/* Logo (zentriert, animierter Schraubenschlüssel) */}
        <a
          href={isHome ? "#top" : "/"}
          className="group/logo absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/30 transition-transform duration-300 group-hover/logo:scale-110">
            <Wrench className="logo-wrench h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Ramani<span className="text-orange-500"> Heizung</span>
          </span>
        </a>

        {/* Desktop-CTA (rechts) */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.emergencyPhoneHref}
            className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 ring-2 ring-red-500/20 transition-transform hover:scale-[1.04]"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <Siren className="h-4 w-4" aria-hidden="true" />
            24/7 Notdienst
          </a>
          <a
            href={to("kontakt")}
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-[1.04]"
          >
            Angebot anfordern
          </a>
        </div>

        {/* Mobile-Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-gray-300 bg-white text-gray-900 transition-colors lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile-Menü */}
      {open && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
            <a
              href={COMPANY.emergencyPhoneHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              <Siren className="h-4 w-4" aria-hidden="true" />
              24/7 Notdienst: {COMPANY.emergencyPhone}
            </a>
            <a
              href={to("kontakt")}
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Angebot anfordern
            </a>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900"
            >
              <Phone className="h-4 w-4 text-orange-500" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
