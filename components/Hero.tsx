"use client";

import { motion } from "framer-motion";
import VortixSpiral from "./VortixSpiral";

function FloatingSpiral({
  className,
  delay = 0,
  size = 200,
  spin = 60,
  rotate = 0,
  glow = false,
  opacity = 1,
}: {
  className?: string;
  delay?: number;
  size?: number;
  spin?: number;
  rotate?: number;
  glow?: boolean;
  opacity?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80, rotate: rotate - 12 }}
      animate={{ opacity, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <VortixSpiral size={size} spin={spin} glow={glow} tilt={0} scroll={0} />
      </motion.div>
    </motion.div>
  );
}

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 + i * 0.18, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
});

export default function Hero() {
  return (
    <section className="grain relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink-900">

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald/[0.04] via-transparent to-transparent blur-3xl"
      />

      {/* ── Floating spirals ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Top-left — large */}
        <FloatingSpiral
          delay={0.3}
          size={340}
          spin={55}
          rotate={14}
          glow={false}
          opacity={0.55}
          className="left-[-6%] top-[12%] md:left-[-2%] md:top-[16%]"
        />
        {/* Top-right — medium */}
        <FloatingSpiral
          delay={0.5}
          size={220}
          spin={70}
          rotate={-18}
          glow={false}
          opacity={0.45}
          className="right-[-4%] top-[8%] md:right-[2%] md:top-[12%]"
        />
        {/* Bottom-right — large, glowing */}
        <FloatingSpiral
          delay={0.4}
          size={300}
          spin={44}
          rotate={-10}
          glow
          opacity={0.5}
          className="right-[-8%] bottom-[6%] md:right-[-2%] md:bottom-[10%]"
        />
        {/* Bottom-left — small */}
        <FloatingSpiral
          delay={0.65}
          size={150}
          spin={80}
          rotate={22}
          glow={false}
          opacity={0.35}
          className="left-[8%] bottom-[10%] md:left-[12%] md:bottom-[14%]"
        />
        {/* Top-center-right — tiny */}
        <FloatingSpiral
          delay={0.75}
          size={110}
          spin={90}
          rotate={-30}
          glow={false}
          opacity={0.3}
          className="right-[22%] top-[6%] md:right-[26%] md:top-[8%]"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-8">

        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="mb-6 font-body text-[13px] uppercase tracking-[0.18em] text-emerald/70"
        >
          Vortix — consultoria técnica
        </motion.p>

        <motion.h1
          variants={fadeUp(1)}
          initial="hidden"
          animate="visible"
          className="font-display font-bold leading-[1.03] tracking-tightest text-cream"
          style={{ fontSize: "clamp(36px, 6vw, 84px)" }}
        >
          Estudamos seu negócio.
          <br />
          <span className="text-emerald">Desenhamos a solução certa.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp(2)}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-7 max-w-[500px] font-body text-[16px] leading-[1.75] text-mist/70"
        >
          Não somos uma fábrica de software. Cada projeto começa com
          análise real — Business Intelligence, estrutura de dados e IA
          aplicada ao que o seu negócio precisa de verdade.
        </motion.p>

        <motion.div
          variants={fadeUp(3)}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href="#processo"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 font-body text-sm font-semibold text-ink-900 transition-colors hover:bg-emerald-bright"
          >
            Como trabalhamos
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://wa.me/5535984215199"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-7 py-3.5 font-body text-sm text-mist transition-all hover:border-white/20 hover:text-cream"
          >
            Falar conosco
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900 to-transparent"
      />

      {/* Bottom divider line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />
    </section>
  );
}
