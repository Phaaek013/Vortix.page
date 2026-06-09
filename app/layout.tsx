import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vortix — Tecnologia que gira a seu favor",
  description:
    "Consultoria técnica em IA. Estudamos seu negócio e desenhamos a solução certa — fundamentada em Business Intelligence, Banco de Dados e Inteligência Artificial.",
  metadataBase: new URL("https://vortix-page.vercel.app"),
  openGraph: {
    title: "Vortix — Tecnologia que gira a seu favor",
    description:
      "Consultoria técnica em IA. Estudamos seu negócio e desenhamos a solução certa — BI, Banco de Dados e IA aplicada.",
    url: "https://vortix-page.vercel.app",
    siteName: "Vortix",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vortix — Tecnologia que gira a seu favor" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortix — Tecnologia que gira a seu favor",
    description: "Consultoria técnica em IA. BI, Dados e Inteligência Artificial aplicada ao seu negócio.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
