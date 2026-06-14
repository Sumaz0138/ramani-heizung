/**
 * Premium animierter Hintergrund: technisches Raster, fließende
 * Energie-Orbs, glühende Linien und schwebende Partikel.
 * Reines CSS (performant, kein Canvas) – als Layer hinter Inhalt legen.
 */

// Feste Partikel-Konfiguration -> keine Hydration-Mismatches
const PARTICLES = [
  { left: "8%", size: 4, delay: 0, duration: 14 },
  { left: "18%", size: 6, delay: 3, duration: 18 },
  { left: "27%", size: 3, delay: 6, duration: 12 },
  { left: "39%", size: 5, delay: 1.5, duration: 16 },
  { left: "48%", size: 4, delay: 4.5, duration: 20 },
  { left: "57%", size: 7, delay: 2, duration: 15 },
  { left: "66%", size: 3, delay: 5.5, duration: 13 },
  { left: "74%", size: 5, delay: 0.8, duration: 19 },
  { left: "83%", size: 4, delay: 3.6, duration: 17 },
  { left: "92%", size: 6, delay: 6.5, duration: 14 },
];

export default function AnimatedBackground({
  variant = "hero",
}: {
  variant?: "hero" | "subtle";
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Animiertes Raster */}
      <div className="ramani-grid absolute inset-0 opacity-60" />

      {/* Fließende Energie-Orbs */}
      <div
        className="ramani-glow absolute -left-24 top-0 h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)" }}
      />
      <div
        className="ramani-glow absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.28), transparent 70%)",
          animationDelay: "2.5s",
        }}
      />
      {variant === "hero" && (
        <div
          className="ramani-glow absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(125,211,252,0.22), transparent 70%)",
            animationDelay: "4s",
          }}
        />
      )}

      {/* Glühende horizontale Energie-Linien (Rohr-/Flow-Andeutung) */}
      <div className="ramani-shimmer-line absolute left-0 top-1/4 h-px w-full bg-sky-400/10" />
      <div className="ramani-shimmer-line absolute left-0 top-2/3 h-px w-full bg-sky-400/10" />

      {/* Schwebende Partikel */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-sky-300/70"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(56,189,248,0.8)",
            animation: `ramani-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Vignette für Tiefe */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 0%, transparent 40%, rgba(5,13,26,0.85) 100%)",
        }}
      />
    </div>
  );
}
