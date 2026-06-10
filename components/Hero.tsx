"use client";

import { motion } from "framer-motion";
import VortixSpiral from "./VortixSpiral";

/* ─────────────────────────────────────────────
   FloatingSpiral
   The real VortixSpiral tilted in 3D (rotateX)
   so it looks like a disc lying in perspective,
   matching the depth feel of the reference.
───────────────────────────────────────────── */
type SpiralProps = {
  className?: string;
  delay?: number;
  size?: number;
  spin?: number;
  rotateX?: number; // tilt toward viewer (deg) — creates depth
  rotateZ?: number; // in-plane rotation for variety
  opacity?: number;
  glow?: boolean;
};

function FloatingSpiral({
  className = "",
  delay = 0,
  size = 300,
  spin = 60,
  rotateX = 72,
  rotateZ = 0,
  opacity = 0.65,
  glow = false,
}: SpiralProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, rotateX, rotateZ: rotateZ - 14 }}
      animate={{ opacity, y: 0, rotateX, rotateZ }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.3 },
      }}
      className={`absolute ${className}`}
      style={{ perspective: 700, transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5,
        }}
      >
        <VortixSpiral
          size={size}
          spin={spin}
          glow={glow}
          tilt={0}
          scroll={0}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Content fade-up ─── */
const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.18,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
});

export default function Hero() {
  return (
    <section className="grain relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink-900">

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(61,217,160,0.045) 0%, transparent 70%)",
        }}
      />

      {/* ── Spirals positioned like the reference capsules ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>

        {/* TOP-LEFT — large, tilted ~72° toward viewer, slight Z-rotate */}
        <FloatingSpiral
          delay={0.25}
          size={400}
          spin={52}
          rotateX={72}
          rotateZ={10}
          opacity={0.60}
          glow={false}
          className="left-[-12%] top-[14%] md:left-[-6%] md:top-[18%]"
        />

        {/* TOP-RIGHT — medium, mirrored tilt */}
        <FloatingSpiral
          delay={0.45}
          size={300}
          spin={68}
          rotateX={68}
          rotateZ={-14}
          opacity={0.50}
          glow={false}
          className="right-[-8%] top-[8%] md:right-[-2%] md:top-[12%]"
        />

        {/* BOTTOM-RIGHT — large, emerald glow */}
        <FloatingSpiral
          delay={0.35}
          size={380}
          spin={48}
          rotateX={74}
          rotateZ={-8}
          opacity={0.58}
          glow
          className="right-[-10%] bottom-[8%] md:right-[-4%] md:bottom-[12%]"
        />

        {/* BOTTOM-LEFT — medium */}
        <FloatingSpiral
          delay={0.60}
          size={260}
          spin={76}
          rotateX={70}
          rotateZ={18}
          opacity={0.42}
          glow={false}
          className="left-[3%] bottom-[6%] md:left-[7%] md:bottom-[10%]"
        />

        {/* TOP-CENTER-RIGHT — small */}
        <FloatingSpiral
          delay={0.72}
          size={180}
          spin={90}
          rotateX={65}
          rotateZ={-22}
          opacity={0.32}
          glow={false}
          className="right-[18%] top-[5%] md:right-[22%] md:top-[7%]"
        />
      </div>

      {/* ── Text content ── */}
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
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ink-900 to-transparent"
      />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />
    </section>
  );
}
