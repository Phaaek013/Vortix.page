"use client";

import { motion } from "framer-motion";
import VortixSpiral from "./VortixSpiral";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  return (
    <section className="grain relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 72% 52%, rgba(61,217,160,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-container grid-cols-1 items-center px-6 lg:grid-cols-[1fr_auto] lg:px-12">
        {/* Texto */}
        <div className="relative z-10 pb-16 pt-32 lg:py-0">
          <motion.p
            {...rise(0.05)}
            className="mb-5 font-body text-[13px] uppercase tracking-[0.18em] text-emerald/70"
          >
            Vortix — consultoria técnica
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="font-display font-bold leading-[1.02] tracking-tightest text-cream"
            style={{ fontSize: "clamp(38px, 5.5vw, 80px)" }}
          >
            Estudamos seu negócio.
            <br />
            <span className="text-emerald">
              Desenhamos a solução certa.
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.28)}
            className="mt-6 max-w-[420px] font-body text-[16px] leading-[1.7] text-mist/80"
          >
            Não somos uma fábrica de software. Cada projeto começa com
            análise real — Business Intelligence, estrutura de dados e IA
            aplicada ao que o seu negócio precisa de verdade.
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#processo"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 font-body text-sm font-semibold text-ink-900 transition-colors hover:bg-emerald-bright sm:px-7 sm:py-3.5"
            >
              Como trabalhamos
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="https://wa.me/5535984215199"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-6 py-3 font-body text-sm text-mist transition-all hover:border-white/20 hover:text-cream sm:px-7 sm:py-3.5"
            >
              Falar conosco
            </a>
          </motion.div>
        </div>

        {/* Espiral desktop */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.93 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hidden lg:block"
          style={{ marginRight: "-60px" }}
        >
          <VortixSpiral size={500} spin={44} glow tilt={7} scroll={14} />
        </motion.div>

        {/* Espiral mobile — fantasma de fundo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute bottom-[-40px] right-[-80px] lg:hidden"
        >
          <VortixSpiral size={300} spin={50} glow={false} tilt={0} scroll={0} />
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />
    </section>
  );
}
