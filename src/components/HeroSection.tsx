import { motion } from "framer-motion";
import heroCollage from "@/assets/hero_collage.png";

const HeroSection = () => {
  return (
    <section className="relative z-0 min-h-[600px] md:min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Fundo em gradiente: branco até 50% e depois verde-claro à direita */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to right, #ffffff 0%, #ffffff 50%, #EBF1E9 100%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 max-w-xl"
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

          {/* Colagem de imagens — PNG com fundo transparente, sem moldura */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex-1 w-full lg:flex-[1.35]"
          >
            <img
              src={heroCollage}
              alt="Equipes usando a Zeeps com integração a CRMs, Agentes de IA e ERPs"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
