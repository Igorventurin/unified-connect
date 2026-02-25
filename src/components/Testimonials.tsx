import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor Comercial, TechLogística",
    text: "A Zeeps transformou nosso atendimento. Reduzimos o tempo de resposta em 70% e triplicamos a satisfação dos clientes.",
    rating: 5,
  },
  {
    name: "Fernanda Oliveira",
    role: "Gerente de Operações, Grupo Nova",
    text: "A integração com o TOTVS foi surpreendentemente simples. Agora toda a equipe trabalha em um fluxo unificado.",
    rating: 5,
  },
  {
    name: "Ricardo Souza",
    role: "CEO, E-Shop Brasil",
    text: "Os agentes de IA da Zeeps resolvem 40% das demandas sem intervenção humana. O ROI foi imediato.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-proof">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            O que nossos parceiros dizem
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A revolução na comunicação empresarial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
