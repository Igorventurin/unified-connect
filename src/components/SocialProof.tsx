import { motion } from "framer-motion";

const logos = [
  "TOTVS", "RD Station", "Shopify", "Meta", "Vtex", "Bling", "Tiny",
  "Mercado Livre", "Magalu", "Olist", "Tray", "Nuvemshop",
];

const SocialProof = () => {
  return (
    <section className="py-12 bg-proof overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg font-medium text-muted-foreground mb-8"
        >
          Empresas que confiam na Zeeps para escalar seu atendimento
        </motion.p>
      </div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Gradient masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-proof to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-proof to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-logos whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 min-w-[120px] h-10 px-4 rounded-md text-muted-foreground/50 hover:text-foreground font-semibold text-lg transition-colors duration-300 select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SocialProof;
