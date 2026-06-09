import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Diferencial from "@/components/Diferencial";
import Servicos from "@/components/Servicos";
import Processo from "@/components/Processo";
import Cases from "@/components/Cases";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Diferencial />
      <Servicos />
      <Processo />
      <Cases />
      <Contato />
      <Footer />
    </main>
  );
}
