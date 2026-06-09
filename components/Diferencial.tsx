"use client";

import { motion } from "framer-motion";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

const pillars = [
  {
    num: "01",
    title: "Business Intelligence",
    body: "Antes de qualquer linha de código, mapeamos os dados do seu negócio — KPIs reais, gargalos reais, decisões que precisam de resposta rápida. BI não é relatório bonito, é visibilidade que muda o que você faz amanhã.",
    accent: "Análise · Dashboards · Decisão",
  },
  {
    num: "02",
    title: "Banco de Dados",
    body: "Toda solução inteligente começa com dados bem estruturados. Modelamos, otimizamos e garantimos que a fundação aguenta crescer — sem retrabalho quando a escala chegar.",
    accent: "Modelagem · Performance · Escala",
  },
  {
    num: "03",
    title: "Inteligência Artificial",
    body: "IA aplicada com critério, não como buzzword. Depois de entender seu negócio e seus dados, aí sim propomos automação, predição ou agentes — porque sabemos onde isso realmente gera valor.",
    accent: "Agentes · Automação · Predição",
  },
];

export default function Diferencial() {
  return (
    <section id="diferenciais" className="bg-ink-700 border-y border-white/[0.05]">
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">

        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div {...reveal(0)}>
            <p className="mb-4 font-body text-[13px] uppercase tracking-[0.18em] text-emerald/70">
              O diferencial
            </p>
            <h2 className="font-display text-[32px] font-bold leading-[1.06] tracking-tightest text-cream sm:text-[40px] lg:text-[52px]">
              A maioria entrega
              <br />
              uma solução.
              <br />
              <span className="text-emerald">Nós entregamos
              <br />a solução certa.</span>
            </h2>
          </motion.div>

          <motion.p
            {...reveal(0.12)}
            className="self-end font-body text-[17px] leading-[1.7] text-mist/80 lg:max-w-[440px]"
          >
            Não somos uma fábrica de software. Cada projeto começa com um
            diagnóstico real — construído sobre três bases que a maioria das
            agências ignora.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 gap-px bg-white/[0.05] md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              {...reveal(0.08 * i)}
              className="group flex flex-col gap-5 bg-ink-700 p-8 transition-colors hover:bg-ink-600"
            >
              <span className="font-display text-5xl font-bold text-emerald/10 transition-colors group-hover:text-emerald/20">
                {p.num}
              </span>
              <h3 className="font-display text-[22px] font-semibold leading-tight text-cream">
                {p.title}
              </h3>
              <p className="font-body text-[15px] leading-[1.7] text-mist/75">
                {p.body}
              </p>
              <p className="mt-auto font-body text-[12px] uppercase tracking-[0.14em] text-emerald/50">
                {p.accent}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
