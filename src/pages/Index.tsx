import Seo from "@/components/Seo";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import SocialProof from "@/components/SocialProof";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import PlanosPreview from "@/components/PlanosPreview";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
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
        <SocialProof />
        <ProductShowcase />
        <Features />
        <PlanosPreview />
        <Integrations />
        <Testimonials />
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
