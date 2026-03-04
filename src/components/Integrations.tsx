import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import zeepsLogo from "@/assets/zeeps-logo-vertical.png";
import { VideoPlayer } from "./ui/video-player";
import ferramentaVideo from "@/assets/ferramenta.mp4";

import logoMercadoLivre from "@/assets/integrations/Logotipo_MercadoLivre.png";
import logoMeta from "@/assets/integrations/Meta-Logo.png";
import logoVtex from "@/assets/integrations/VTEX_Logo.svg.png";
import logoBling from "@/assets/integrations/logo-bling.png";
import logoTiny from "@/assets/integrations/logo-tiny-2.png";
import logoRdStation from "@/assets/integrations/rd-station-cor-md.png";
import logoShopify from "@/assets/integrations/shopify-logo.png";
import logoTotvs from "@/assets/integrations/totvs-logo-1.png";

const integrations = [
  { name: "TOTVS", logo: logoTotvs },
  { name: "RD Station", logo: logoRdStation },
  { name: "Meta", logo: logoMeta },
  { name: "Shopify", logo: logoShopify },
  { name: "Vtex", logo: logoVtex },
  { name: "Bling", logo: logoBling },
  { name: "Tiny", logo: logoTiny },
  { name: "Mercado Livre", logo: logoMercadoLivre },
];

const Integrations = () => {
  return (
    <>
      <section id="integracoes" className="py-12 lg:py-16 bg-gradient-to-br from-[#009451]/15 to-[#22c55e]/15 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Onde o seu negócio estiver, a Zeeps se conecta
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Integrações nativas com o ecossistema RD Station, TOTVS e as principais plataformas de e-commerce.
            </p>
          </motion.div>

          {/* Wide card with logo left + integrations right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto bg-card border border-border rounded-2xl shadow-card overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Left — Zeeps logo big */}
              <div className="md:w-1/3 flex items-center justify-center p-10 md:p-14 md:border-r border-border">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl gradient-primary flex items-center justify-center shadow-soft">
                  <img
                    src={zeepsLogo}
                    alt="Zeeps"
                    className="w-20 h-20 md:w-24 md:h-24 object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* Right — integrations grid */}
              <div className="md:w-2/3 p-8 md:p-10 w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {integrations.map((item) => (
                    <div
                      key={item.name}
                      className="bg-background border border-border rounded-xl px-4 py-3 flex items-center justify-center hover:bg-muted transition-colors duration-200 aspect-video h-20 sm:h-24 group"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="max-h-10 sm:max-h-12 w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}

                  {/* "More" indicator */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: ["0px 0px 0px rgba(var(--primary), 0)", "0px 0px 20px rgba(var(--primary), 0.6)", "0px 0px 0px rgba(var(--primary), 0)"]
                    }}
                    transition={{
                      boxShadow: { repeat: Infinity, duration: 2 }
                    }}
                    className="gradient-primary border-none rounded-xl px-4 py-3 flex flex-col items-center justify-center text-primary-foreground shadow-lg aspect-video h-20 sm:h-24 cursor-pointer overflow-hidden relative group"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="text-lg sm:text-xl font-extrabold z-10 text-center leading-tight group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                      E muito +
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Player "Ferramenta" Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
                Por dentro
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                Veja a ferramenta em ação
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Acompanhe uma demonstração rápida de como nossa solução simplifica a organização dos seus fluxos, ajudando sua equipe a manter o foco em escalar resultados com um atendimento hiper-eficiente.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground text-[17px]">
                  <span className="text-primary mt-[2px] font-bold">✓</span> Interface amigável focada em produtividade
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-[17px]">
                  <span className="text-primary mt-[2px] font-bold">✓</span> Visão unificada de todos os atendimentos
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-[17px]">
                  <span className="text-primary mt-[2px] font-bold">✓</span> Configuração rápida de regras em poucos minutos
                </li>
              </ul>
            </motion.div>

            {/* Right Side: Video */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full"
            >
              <VideoPlayer
                src={ferramentaVideo}
                className="shadow-[0_24px_60px_rgba(0,0,0,0.12)] rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integrations;
