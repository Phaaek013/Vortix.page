"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import VortixMark from "./VortixMark";

/* ─────────────────────────────────────────────
   SpiralCapsule
   Pill-shaped form with a squished VortixMark
   spinning inside — glassy depth, like a spiral
   disc seen at an oblique angle.
───────────────────────────────────────────── */
type CapsuleProps = {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  opacity?: number;
  spin?: number;
  glowLeft?: boolean;
};

function SpiralCapsule({
  className = "",
  delay = 0,
  width = 500,
  height = 115,
  rotate = 0,
  opacity = 0.7,
  spin = 58,
  glowLeft = false,
}: CapsuleProps) {
  const uid = useId().replace(/:/g, "");
  const r = height / 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: -140, rotate: rotate - 14 }}
      animate={{ opacity, y: 0, rotate }}
      transition={{
        duration: 2.6,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.4 },
      }}
      className={`absolute ${className}`}
      style={{ width, height }}
    >
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.6,
        }}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        {/* Pill shell */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: r,
            overflow: "hidden",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: glowLeft
              ? "0 6px 40px rgba(61,217,160,0.10), inset 0 1px 0 rgba(255,255,255,0.07)"
              : "inset 0 1px 0 rgba(255,255,255,0.06)",
            background: glowLeft
              ? "linear-gradient(90deg,rgba(61,217,160,0.09) 0%,rgba(13,13,18,0.55) 55%,transparent 100%)"
              : "linear-gradient(90deg,rgba(255,255,255,0.04) 0%,rgba(13,13,18,0.50) 50%,transparent 100%)",
          }}
        >
          {/* Squished spiral spinning inside */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: spin, ease: "linear", repeat: Infinity }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: height * 1.7,
              height: height * 1.7,
              transform: "translate(-50%,-50%)",
              opacity: 0.28,
            }}
          >
            <VortixMark
              className="w-full h-full"
              from={glowLeft ? "#3DD9A0" : "rgba(61,217,160,0.9)"}
              to={glowLeft ? "#2BB98A" : "rgba(43,185,138,0.5)"}
            />
          </motion.div>

          {/* Top-edge light reflection */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "38%",
              background:
                "linear-gradient(180deg,rgba(255,255,255,0.05) 0%,transparent 100%)",
              borderRadius: `${r}px ${r}px 0 0`,
            }}
          />
        </div>
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

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="grain relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink-900">

      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(61,217,160,0.045) 0%, transparent 70%)",
        }}
      />

      {/* ── Capsules ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>

        {/* TOP-LEFT — large, slight positive tilt */}
        <SpiralCapsule
          delay={0.25}
          width={560}
          height={124}
          rotate={12}
          opacity={0.68}
          glowLeft
          spin={52}
          className="left-[-8%] top-[18%] md:left-[-4%] md:top-[22%]"
        />

        {/* TOP-RIGHT — medium, negative tilt */}
        <SpiralCapsule
          delay={0.45}
          width={420}
          height={100}
          rotate={-16}
          opacity={0.55}
          spin={66}
          className="right-[-6%] top-[10%] md:right-[-2%] md:top-[14%]"
        />

        {/* BOTTOM-RIGHT — large, glow */}
        <SpiralCapsule
          delay={0.35}
          width={500}
          height={118}
          rotate={-10}
          opacity={0.62}
          glowLeft
          spin={48}
          className="right-[-7%] bottom-[12%] md:right-[-3%] md:bottom-[15%]"
        />

        {/* BOTTOM-LEFT — medium */}
        <SpiralCapsule
          delay={0.6}
          width={340}
          height={86}
          rotate={20}
          opacity={0.45}
          spin={74}
          className="left-[4%] bottom-[8%] md:left-[8%] md:bottom-[11%]"
        />

        {/* TOP-CENTER-RIGHT — small */}
        <SpiralCapsule
          delay={0.72}
          width={220}
          height={60}
          rotate={-26}
          opacity={0.35}
          spin={88}
          className="right-[20%] top-[6%] md:right-[24%] md:top-[8%]"
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
