import { motion } from "framer-motion";
import { Plus } from "lucide-react";
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
            <div className="md:w-2/3 p-8 md:p-10">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                {integrations.map((name) => (
                  <div
                    key={name}
                    className="bg-muted/50 border border-border rounded-xl px-4 py-3 text-center hover:bg-muted transition-colors duration-200"
                  >
                    <span className="text-sm font-semibold text-foreground">{name}</span>
                  </div>
                ))}
                {/* "More" indicator */}
                <div className="bg-muted/30 border border-dashed border-border rounded-xl px-4 py-3 flex items-center justify-center gap-1.5 text-muted-foreground">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">e mais</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
