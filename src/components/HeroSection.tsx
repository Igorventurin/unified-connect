import { motion } from "framer-motion";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-tight tracking-tight text-foreground">
              Sua comunicação integrada,{" "}
              <span className="text-primary">
                sua gestão simplificada.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Automatize atendimentos no WhatsApp e Redes Sociais com integração total aos maiores ERPs e CRMs do mercado.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="gradient-primary text-primary-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity shadow-soft"
              >
                Começar agora
              </a>
              <a
                href="#produto"
                className="border border-border text-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-muted transition-colors"
              >
                Ver plataforma
              </a>
            </div>
          </motion.div>

          {/* Dashboard image */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <img
                src={heroDashboard}
                alt="Plataforma Zeeps - Dashboard de atendimento multicanal"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            {/* Decorative blobs */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 rounded-full bg-secondary/5 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
