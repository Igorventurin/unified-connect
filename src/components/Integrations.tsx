import { motion } from "framer-motion";
import zeepsLogo from "@/assets/zeeps-logo-vertical.png";

const integrations = [
  "TOTVS", "RD Station", "Meta", "Shopify", "Vtex", "Bling", "Tiny", "Mercado Livre",
];

const Integrations = () => {
  return (
    <section id="integracoes" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
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

        {/* Honeycomb / Hub layout */}
        <div className="relative max-w-xl mx-auto">
          {/* Center logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center shadow-soft mb-8"
          >
            <img src={zeepsLogo} alt="Zeeps" className="w-12 h-12 object-contain brightness-0 invert" />
          </motion.div>

          {/* Grid of integrations around */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {integrations.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card border border-border rounded-xl p-4 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <span className="text-sm font-semibold text-foreground">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
