import { motion } from "framer-motion";

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

const LogoCarousel = () => {
  return (
    <section className="py-10 lg:py-12 bg-white border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-muted-foreground mb-8"
        >
          Empresas que confiam na Zeeps para escalar seu atendimento
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex animate-scroll-logos-mobile md:animate-scroll-logos whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-3 sm:mx-4 min-w-[120px] sm:min-w-[150px] h-16 px-5 rounded-xl bg-white border border-zinc-200 hover:shadow-card transition-shadow duration-300 select-none"
            >
              <img src={logo.src} alt={logo.alt} className="w-auto h-10 max-w-[130px] object-contain" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LogoCarousel;
