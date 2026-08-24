import Seo from "@/components/Seo";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import SocialProof from "@/components/SocialProof";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Segmentos from "@/components/Segmentos";
import PlanosPreview from "@/components/PlanosPreview";
import Integrations from "@/components/Integrations";
// Seção "O que nossos parceiros dizem" desativada a pedido do cliente.
// O componente segue intacto em `src/components/Testimonials.tsx` — para
// trazê-la de volta, basta descomentar este import e o <Testimonials />
// abaixo (entre <Integrations /> e <ContactForm />).
// import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SupportMascot from "@/components/SupportMascot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Comunicação Empresarial Simplificada"
        description="A Zeeps automatiza atendimentos no WhatsApp e Redes Sociais, com multi-atendentes, Agentes de IA e integração total aos maiores ERPs e CRMs do mercado."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
        <LogoCarousel />
        <ProductShowcase />
        <SocialProof />
        <Features />
        <Segmentos />
        <PlanosPreview />
        <Integrations />
        {/* <Testimonials /> — desativada a pedido do cliente, ver comentário no import */}
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <SupportMascot />
    </div>
  );
};

export default Index;
