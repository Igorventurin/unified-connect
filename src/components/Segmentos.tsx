import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { segmentos } from "@/data/segmentos";

// Vitrine de segmentos da Home (modelo RD Station): cada card abre a subpágina
// detalhada em /segmentos/:slug. Ver Ajuste 4 no PLANEJAMENTO_AJUSTES.md.
const Segmentos = () => {
  return (
    <section id="segmentos" className="relative py-16 lg:py-20 bg-muted/40 overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-14"
        >
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
            Segmentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Cada setor tem a sua dor.{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              A Zeeps se adapta a ela.
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Atendemos empresas de todo o país em diferentes mercados. Veja como a plataforma
            resolve o problema específico do seu.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {segmentos.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                to={`/segmentos/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white dark:bg-zinc-900 border border-border/60 hover:border-primary/30 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,148,81,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 dark:bg-zinc-900/95 px-3 py-1.5 text-sm font-bold text-foreground shadow-sm">
                    <s.icon className="w-4 h-4 text-primary" />
                    {s.name}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[15px] leading-relaxed text-muted-foreground flex-1">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Ver solução para {s.name}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Card final: quem não se encaixa em nenhum dos anteriores. */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: segmentos.length * 0.07 }}
            className="flex flex-col justify-center rounded-[2rem] border-2 border-dashed border-primary/25 bg-primary/[0.03] p-8 text-center"
          >
            <h3 className="text-lg font-bold text-foreground">
              Não encontrou o seu segmento?
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              A Zeeps atende empresas de todos os portes e mercados em todo o país. Fale com a
              gente e veja como a plataforma se encaixa na sua operação.
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center justify-center gap-2 self-center rounded-xl gradient-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105 hover:opacity-90"
            >
              Falar com um especialista
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Segmentos;
