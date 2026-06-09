"use client";

import { motion } from "framer-motion";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

function IconAgentes() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <path d="M8 10h.01M12 10h.01M16 10h.01"/>
    </svg>
  );
}

function IconSistemas() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
      <path d="M3 17h4m0 0v4m0-4H3m4 0V9"/>
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8l3 3 2-2 3 3"/>
    </svg>
  );
}

function IconIntegracoes() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>
    </svg>
  );
}

function IconPaginas() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2"/>
      <path d="M2 9h20"/>
      <path d="M7 3v6"/>
      <path d="M7 15h4M7 18h8"/>
    </svg>
  );
}

type CardProps = {
  icon: React.ReactNode;
  tag: string;
  title: string;
  body: string;
  techs: string[];
  wide?: boolean;
  delay?: number;
};

function ServiceCard({ icon, tag, title, body, techs, wide, delay = 0 }: CardProps) {
  return (
    <motion.div
      {...reveal(delay)}
      className={`group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-700 p-7 transition-all duration-300 hover:border-emerald/20 hover:bg-ink-600 ${wide ? "lg:col-span-2" : ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between">
        <span className="text-emerald">{icon}</span>
        <span className="font-body text-[11px] uppercase tracking-[0.16em] text-slate/45">
          {tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-display text-[21px] font-semibold leading-tight tracking-tight text-cream">
          {title}
        </h3>
        <p className="font-body text-[15px] leading-[1.7] text-mist/70">
          {body}
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
    </motion.div>
  );
}

export default function Servicos() {
  return (
    <section id="servicos" className="bg-ink-900">
      <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">

        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <motion.div {...reveal(0)}>
            <p className="mb-4 font-body text-[13px] uppercase tracking-[0.18em] text-emerald/70">
              Serviços
            </p>
            <h2 className="font-display text-[32px] font-bold leading-[1.06] tracking-tightest text-cream sm:text-[40px] lg:text-[52px]">
              O que construímos
              <br />
              para você.
            </h2>
          </motion.div>

          <motion.p
            {...reveal(0.1)}
            className="max-w-[340px] font-body text-[15px] leading-[1.65] text-slate lg:text-right"
          >
            Cada serviço parte de um diagnóstico do negócio —
            nunca de um template pronto.
          </motion.p>
        </div>

        {/*
          Grid 3 colunas:
          Linha 1: Agentes (wide=col-span-2) + Sistemas (1)
          Linha 2: Dashboards (1) + Integrações (1) + Páginas & LP (1)
        */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          <ServiceCard
            wide
            icon={<IconAgentes />}
            tag="Produto pronto · Vortix.IA"
            title="Centrais Inteligentes no WhatsApp"
            body="Dois produtos com implantação em até 15 dias úteis: Central de Atendimento Inteligente (SAC 24/7, triagem e encaminhamento para humano) e Central de Agendamento Inteligente (recepção virtual completa — consulta, agenda, reagendamento, fila de espera e tapa-buraco). Modelo modular: entra com a base e expande quando precisar. API Oficial da Meta — sem QR Code, sem risco de ban."
            techs={["WhatsApp API Oficial", "N8N", "OpenAI GPT-4", "Supabase", "Google Calendar"]}
            delay={0.06}
          />

          <ServiceCard
            icon={<IconSistemas />}
            tag="Software"
            title="Sistemas de Gestão"
            body="Plataformas sob medida para operações que não cabem em planilha — ClinicOps, VortixAgendamento e sistemas customizados construídos depois de entender como o negócio funciona de verdade."
            techs={["Next.js", "Prisma", "PostgreSQL", "NextAuth"]}
            delay={0.1}
          />

          <ServiceCard
            icon={<IconDashboard />}
            tag="Inteligência"
            title="Dashboards & BI"
            body="Dados brutos viram visibilidade para decisão. Painéis que mostram o que importa, no ritmo certo — não relatórios que ninguém abre na segunda-feira."
            techs={["Power BI", "SQL", "ETL", "Visualização"]}
            delay={0.14}
          />

          <ServiceCard
            icon={<IconIntegracoes />}
            tag="Sob demanda"
            title="Automações Personalizadas"
            body="Para o que não cabe num produto pronto. Mapeamos o processo, identificamos onde o tempo é desperdiçado e construímos a automação certa — integrações entre sistemas, fluxos internos, notificações, relatórios automáticos. Escopo definido junto com o cliente, sem pacote fechado."
            techs={["N8N", "APIs REST", "Webhooks", "Supabase", "Python"]}
            delay={0.18}
          />

          <ServiceCard
            icon={<IconPaginas />}
            tag="Web"
            title="Sites & Landing Pages"
            body="Páginas institucionais e LPs de alta conversão — rápidas, responsivas e construídas com foco no que converte. Do layout à publicação, com DNA de performance e identidade real."
            techs={["Next.js", "Tailwind CSS", "Vercel", "SEO"]}
            delay={0.22}
          />

        </div>
      </div>
    </section>
  );
}
