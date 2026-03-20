import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { GradientBackground } from "@/components/ui/gradient-background";

import logoAcopara from "@/assets/logo_clientes/acopara.png";
import logoBarao from "@/assets/logo_clientes/barao.png";
import logoBelma from "@/assets/logo_clientes/belma.png";
import logoCapul from "@/assets/logo_clientes/capul.png";
import logoDeledela from "@/assets/logo_clientes/deledela.png";
import logoFokus from "@/assets/logo_clientes/fokus.png";
import logoFribel from "@/assets/logo_clientes/fribel.png";
import logoGees from "@/assets/logo_clientes/gees.png";
import logoGoiais from "@/assets/logo_clientes/goiais.png";
import logoMarajo from "@/assets/logo_clientes/marajo.png";
import logoMilhao from "@/assets/logo_clientes/milhao.png";
import logoNortesul from "@/assets/logo_clientes/nortesul.png";
import logoPerola from "@/assets/logo_clientes/perola.png";
import logoUp from "@/assets/logo_clientes/up.png";

const logos = [
  { src: logoAcopara, alt: "Acopara" },
  { src: logoBarao, alt: "Barao" },
  { src: logoBelma, alt: "Belma" },
  { src: logoCapul, alt: "Capul" },
  { src: logoDeledela, alt: "Deledela" },
  { src: logoFokus, alt: "Fokus" },
  { src: logoFribel, alt: "Fribel" },
  { src: logoGees, alt: "Gees" },
  { src: logoGoiais, alt: "Goiais" },
  { src: logoMarajo, alt: "Marajo" },
  { src: logoMilhao, alt: "Milhao" },
  { src: logoNortesul, alt: "Nortesul" },
  { src: logoPerola, alt: "Perola" },
  { src: logoUp, alt: "Up" },
];

const HeroSection = () => {
  return (
    <GradientBackground
      className="relative min-h-screen pt-20 flex flex-col justify-between"
      animationDuration={25}
    >
      <div className="container mx-auto px-4 lg:px-8 flex-1 flex flex-col justify-center mt-8 pb-8">
        {/* Spline card with spotlight effect */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/95 backdrop-blur-md min-h-[520px] lg:min-h-[600px] flex-shrink-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgb(0 147 61 / 0.15)"
          />

          <div className="flex flex-col lg:flex-row h-full min-h-[520px] lg:min-h-[600px]">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 p-10 lg:p-16 relative z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground">
                Sua comunicação integrada,{" "}
                <span className="text-primary block mt-2">
                  sua gestão simplificada.
                </span>
              </h1>
              <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                Automatize atendimentos no WhatsApp e Redes Sociais com integração total aos maiores ERPs e CRMs do mercado.
              </p>
              <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
                <a
                  href="#contato"
                  className="gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-all hover:scale-105 shadow-soft"
                >
                  Começar agora
                </a>
                <a
                  href="#produto"
                  className="bg-white border-2 border-black text-foreground px-7 py-3.5 rounded-xl text-base font-bold hover:bg-gray-100 transition-all hover:scale-105"
                >
                  Ver plataforma
                </a>
              </div>
            </motion.div>

            {/* Right — Spline 3D scene */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 relative min-h-[400px] lg:min-h-0"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Logos Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full flex-shrink-0 z-10 pb-6"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm font-medium text-zinc-900 mb-8 mt-2">
            Empresas que confiam na Zeeps para escalar seu atendimento
          </p>
        </div>

        {/* Carousel Wrapper with CSS Mask for edge fading over any background */}
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-scroll-logos-mobile md:animate-scroll-logos whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-3 sm:mx-4 min-w-[100px] sm:min-w-[120px] h-12 px-4 rounded-xl bg-zinc-100/80 border border-zinc-200 hover:bg-white transition-all duration-300 select-none backdrop-blur-sm shadow-sm"
              >
                <img src={logo.src} alt={logo.alt} className="w-auto h-8 max-w-[100px] object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </GradientBackground>
  );
};

export default HeroSection;
