import VortixSpiral from "@/components/VortixSpiral";
import VortixMark from "@/components/VortixMark";

export const metadata = {
  title: "Vortix — Espiral (teste)",
};

export default function SpiralTestPage() {
  return (
    <main className="grain relative min-h-screen overflow-hidden bg-ink-900">
      {/* atmospheric mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 38%, rgba(61,217,160,0.08), transparent 70%)",
        }}
      />

      <section className="relative mx-auto flex min-h-screen max-w-container flex-col items-center justify-center gap-16 px-6 py-24">
        <header className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-emerald">
            Fase 1 · Identidade viva
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-cream sm:text-5xl">
            O espiral da Vortix
          </h1>
          <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-slate">
            Vetor real (paths matemáticos), fundo transparente, rotação lenta
            contínua + reação sutil ao mouse e ao scroll.
          </p>
        </header>

        {/* The living mark */}
        <div className="flex items-center justify-center">
          <VortixSpiral size={440} spin={40} glow tilt={9} scroll={20} />
        </div>

        {/* Scale showcase — proves it's vector at any size */}
        <div className="flex flex-wrap items-end justify-center gap-12">
          {[40, 72, 120].map((s) => (
            <div key={s} className="flex flex-col items-center gap-3">
              <VortixMark style={{ width: s, height: s }} />
              <span className="font-body text-[11px] uppercase tracking-widest text-slate">
                {s}px
              </span>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-slate/70">
          Mova o mouse e role a página — o vórtex responde.
        </p>
      </section>
    </main>
  );
}
