import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">Política de Privacidade</h1>
          <div className="prose prose-sm text-muted-foreground space-y-4 leading-relaxed">
            <p>
              A Zeeps está comprometida com a proteção dos dados pessoais de seus usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
            <h2 className="text-lg font-semibold text-foreground mt-6">1. Dados Coletados</h2>
            <p>Coletamos nome, e-mail corporativo, telefone e nome da empresa quando você preenche nosso formulário de contato.</p>
            <h2 className="text-lg font-semibold text-foreground mt-6">2. Finalidade</h2>
            <p>Os dados são utilizados exclusivamente para entrar em contato com você sobre nossos serviços e enviar informações relevantes.</p>
            <h2 className="text-lg font-semibold text-foreground mt-6">3. Compartilhamento</h2>
            <p>Não compartilhamos seus dados com terceiros, exceto quando necessário para a prestação dos nossos serviços ou por exigência legal.</p>
            <h2 className="text-lg font-semibold text-foreground mt-6">4. Contato do DPO</h2>
            <p>Para dúvidas sobre privacidade, entre em contato: dpo@zeeps.com.br</p>
          </div>
          <Link to="/" className="inline-block mt-8 text-sm text-primary hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
