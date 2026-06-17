import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RamaniHeader from "@/components/ramani/RamaniHeader";
import RamaniFooter from "@/components/ramani/RamaniFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramani | Meisterbetrieb für Heizung, Sanitär, Gas & Wasser",
  description:
    "Ihr Meisterbetrieb für Heizung, Sanitär, Gas und Wasser. Heizungsinstallation, Wartung, Badsanierung und Leckortung. Schnell, sauber und zuverlässig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="ramani min-h-screen">
        <RamaniHeader />
        {children}
        <RamaniFooter />
      </body>
    </html>
  );
}
