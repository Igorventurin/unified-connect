import { motion } from "framer-motion";
import heroMockupDesktop from "@/assets/hero_mockup.png";
import heroMockupMobile from "@/assets/hero_mockup_mobile.png";

const HeroSection = () => {
  return (
    <section className="relative z-0 min-h-[600px] md:min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Imagem da plataforma como fundo da Hero */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroMockupDesktop}
          alt=""
          aria-hidden="true"
          className="hidden md:block w-full h-full object-cover object-[85%_center]"
        />
        <img
          src={heroMockupMobile}
          alt=""
          aria-hidden="true"
          className="md:hidden w-full h-full object-cover object-[90%_top]"
        />
        {/* Overlay para legibilidade do texto à esquerda — branco */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white via-50% to-transparent to-80%" />
        <div className="absolute inset-0 bg-gradient-to-b from-white from-0% via-white/80 via-35% to-transparent to-70% md:hidden" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-[40px] md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground">
            Sua comunicação integrada,{" "}
            <span className="text-primary block mt-2">
              sua gestão simplificada.
            </span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-lg leading-relaxed">
            Automatize atendimentos no WhatsApp e Redes Sociais com integração total aos maiores ERPs e CRMs do mercado.
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="/#contato"
              className="gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-all hover:scale-105 shadow-soft"
            >
              Começar agora
            </a>
            <a
              href="/#produto"
              className="bg-white border-2 border-black text-foreground px-7 py-3.5 rounded-xl text-base font-bold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Ver plataforma
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
