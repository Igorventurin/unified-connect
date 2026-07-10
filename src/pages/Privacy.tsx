import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import policyPdf from "@/assets/politica_privacidade.pdf";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo
        title="Política de Privacidade"
        description="Saiba como a Zeeps trata os dados pessoais coletados na plataforma e no site, em conformidade com a LGPD."
        path="/privacidade"
      />
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Política de Privacidade</h1>
            <a
              href={policyPdf}
              download="Politica_Privacidade_Zeeps.pdf"
              className="text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-2 rounded-lg"
            >
              Baixar PDF
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden h-[75vh]">
            <iframe
              src={`${policyPdf}#toolbar=0&view=FitH`}
              title="Política de Privacidade Zeeps"
              className="w-full h-full border-none"
            />
          </div>

          <Link to="/" className="inline-block mt-8 text-sm font-medium text-primary hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
