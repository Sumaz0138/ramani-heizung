"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { COMPANY, NAV_LINKS, NAV_PAGES } from "./data";

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
          ? "border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-white/10 bg-white/80 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        {/* Logo */}
        <a href={isHome ? "#top" : "/"} className="group/logo flex items-center gap-2.5">
          <span
            className={`relative transition-all duration-300 group-hover/logo:scale-105 ${
              scrolled ? "h-11 w-[68px]" : "h-16 w-[100px]"
            }`}
          >
            <Image
              src="/ramani.logo.jpeg"
              alt="Ramani Gebäudetechnik Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </span>
        </a>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.hash}
              href={to(link.hash)}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-950"
            >
              {link.label}
            </a>
          ))}
          {NAV_PAGES.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className={`text-sm font-medium transition-colors hover:text-gray-950 ${
                pathname === page.href ? "text-gray-950 font-semibold" : "text-gray-700"
              }`}
            >
              {page.label}
            </a>
          ))}
        </nav>

        {/* Desktop-CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={to("kontakt")}
            className="rounded-full bg-gradient-to-r from-gray-900 to-gray-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-transform hover:scale-[1.04]"
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
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.hash}
                href={to(link.hash)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
            {NAV_PAGES.map((page) => (
              <a
                key={page.href}
                href={page.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-gray-100"
              >
                {page.label}
              </a>
            ))}
            <a
              href={to("kontakt")}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Angebot anfordern
            </a>
            <a
              href={COMPANY.phoneHref}
              className="mt-1 flex items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900"
            >
              <Phone className="h-4 w-4 text-gray-700" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
