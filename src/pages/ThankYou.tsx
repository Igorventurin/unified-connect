import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Seo from "@/components/Seo";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Seo
        title="Obrigado"
        description="Recebemos sua solicitação de demonstração da Zeeps."
        path="/obrigado"
        noindex
      />
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Obrigado!</h1>
        <p className="text-muted-foreground mb-8">
          Recebemos sua solicitação. Um consultor entrará em contato em breve para agendar sua demonstração.
        </p>
        <Link
          to="/"
          className="gradient-primary text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
