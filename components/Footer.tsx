import Link from "next/link";
import VortixMark from "./VortixMark";

const links = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-ink-900">
      <div className="mx-auto max-w-container px-6 py-12 lg:px-12">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <VortixMark className="h-7 w-7" />
              <span className="font-display text-[15px] font-semibold tracking-tight text-cream">
                Vortix
              </span>
            </Link>
            <p className="max-w-[260px] font-body text-[14px] leading-[1.6] text-slate/50">
              Tecnologia que gira a seu favor.
              <br />
              Consultoria técnica em IA.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-body text-[14px] text-slate/50 transition-colors hover:text-cream"
              >
                {label}
              </Link>
            ))}
          </nav>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.04] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[13px] text-slate/30">
            © {new Date().getFullYear()} Vortix. Todos os direitos reservados.
          </p>
          <p className="font-body text-[13px] text-slate/20">
            CNPJ 65.269.794/0001-39 · BI · Dados · IA
          </p>
        </div>

      </div>
    </footer>
  );
}
