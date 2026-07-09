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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Index;
