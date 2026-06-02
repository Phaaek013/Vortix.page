import Link from "next/link";
import VortixSpiral from "@/components/VortixSpiral";

/**
 * Temporary landing placeholder for Phase 1.
 * The full Hero arrives in Phase 2 — for now this points to the spiral
 * approval page.
 */
export default function Home() {
  return (
    <main className="grain relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-ink-900 px-6 text-center">
      <VortixSpiral size={220} spin={44} glow tilt={7} scroll={0} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-display text-3xl font-bold tracking-tightest text-cream">
          Vortix
        </h1>
        <p className="font-body text-sm text-slate">
          Tecnologia que gira a seu favor
        </p>
      </div>
      <Link
        href="/spiral"
        className="rounded-full border border-white/10 px-6 py-2 font-body text-sm text-mist transition-colors hover:border-emerald/60 hover:text-emerald"
      >
        Ver o espiral vivo →
      </Link>
    </main>
  );
}
