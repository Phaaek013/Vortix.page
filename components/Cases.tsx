"use client";

import { motion } from "framer-motion";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

const cases = [
  {
    category: "Software Médico · Produto Vortix",
    title: "ClinicOps",
    description:
      "Clínica operando com sistemas fragmentados — agenda em planilha, fila no papel, municípios por e-mail. O ClinicOps centraliza tudo: agenda multi-profissional, fila com senhas, kiosk de TV para recepção, prontuário e portal para encaminhamentos municipais.",
    result: "Operação clínica inteira em uma plataforma — do encaminhamento municipal ao atendimento.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Laravel", "Supabase"],
    wide: true,
  },
  {
    category: "Agente de IA · Produto Vortix",
    title: "Central de Agendamento Inteligente",
    description:
      "Clínica com agenda lotada, confirmações manuais e recepção sobrecarregada. Recepção virtual 24/7 no WhatsApp — agendamento, reagendamento, cancelamento, confirmação automática e fila de espera com tapa-buraco.",
    result: "Atendimento automatizado em horário integral — recepção sem sobrecarga, agenda sem buracos.",
    techs: ["N8N", "OpenAI GPT-4", "WhatsApp API Oficial", "Supabase", "Google Calendar"],
    wide: false,
  },
  {
    category: "Agente de IA · Produto Vortix",
    title: "Central de Atendimento Inteligente",
    description:
      "Empresa perdendo vendas por demora no primeiro contato — cliente pergunta, não é respondido rápido, vai embora. A Central responde 24/7, faz triagem, responde dúvidas e encaminha para o humano certo na hora certa.",
    result: "Zero cliente sem resposta — atendimento imediato a qualquer hora, sem aumentar equipe.",
    techs: ["N8N", "OpenAI GPT-4", "WhatsApp API Oficial", "Supabase"],
    wide: false,
  },
  {
    category: "Dashboard & BI",
    title: "Painel Estratégico de Credenciamento",
    description:
      "Instituição de saúde em processo de credenciamento de alto risco financeiro sem visibilidade sobre gaps. Dashboard que cruza histórico de procedimentos com itens do edital — alertas de gap, simulações de receita e radar de riscos.",
    result: "Decisão baseada em dado — visibilidade completa sobre risco e oportunidade antes de assinar.",
    techs: ["React", "Supabase", "Recharts", "JavaScript"],
    wide: false,
  },
  {
    category: "Sistema de Gestão",
    title: "Plataforma para Coaching Fitness",
    description:
      "CT gerenciando alunos, treinos e feedbacks por planilha e WhatsApp. Plataforma com perfis de Coach, Aluno e Admin — gestão de treinos, histórico, PDFs, log de auditoria e controle de limite de alunos.",
    result: "Operação 100% digital — fim das planilhas e do acúmulo de mensagens no WhatsApp.",
    techs: ["Next.js", "Prisma", "NextAuth", "TypeScript"],
    wide: false,
  },
];

function CaseCard({
  category,
  title,
  description,
  result,
  techs,
  wide,
  delay,
}: (typeof cases)[0] & { delay: number }) {
  return (
    <motion.article
      {...reveal(delay)}
      className={`group flex flex-col gap-5 rounded-2xl border border-white/[0.06] bg-ink-700 p-8 transition-all duration-300 hover:border-emerald/20 hover:bg-ink-600 ${wide ? "lg:col-span-2" : ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-body text-[11px] uppercase tracking-[0.16em] text-emerald/60">
          {category}
        </span>
        <div className="h-1.5 w-1.5 rounded-full bg-emerald/25 transition-colors group-hover:bg-emerald/60" />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-display text-[22px] font-semibold leading-tight tracking-tight text-cream">
          {title}
        </h3>
        <p className="font-body text-[15px] leading-[1.7] text-mist/70">
          {description}
        </p>
      </div>

      <div className="rounded-xl border border-emerald/10 bg-emerald/[0.04] px-4 py-3">
        <p className="font-body text-[13px] leading-[1.6] text-emerald/75">
          {result}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {techs.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 font-body text-[12px] text-slate/55"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="bg-ink-900">
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">

        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <motion.div {...reveal(0)}>
            <p className="mb-4 font-body text-[13px] uppercase tracking-[0.18em] text-emerald/70">
              Cases
            </p>
            <h2 className="font-display text-[32px] font-bold leading-[1.06] tracking-tightest text-cream sm:text-[40px] lg:text-[52px]">
              Problemas reais,
              <br />soluções reais.
            </h2>
          </motion.div>

          <motion.p
            {...reveal(0.1)}
            className="max-w-[320px] font-body text-[15px] leading-[1.65] text-slate lg:text-right"
          >
            Cada case começou com diagnóstico —
            não com escopo fechado.
          </motion.p>
        </div>

        {/*
          Grid 3 cols:
          Linha 1: Central Agendamento (wide=col-span-2) + CISLAGOS (1)
          Linha 2: CT Capixaba (1) + Hotel (1) + ClinicOps (1)
        */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {cases.map((c, i) => (
            <CaseCard key={c.title} {...c} delay={0.06 + i * 0.07} />
          ))}
        </div>

        <motion.div
          {...reveal(0.4)}
          className="mt-4 flex items-center justify-center rounded-2xl border border-dashed border-white/[0.10] py-8"
        >
          <p className="font-body text-[14px] text-slate/50">
            Mais cases em breve — novos projetos em andamento.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
