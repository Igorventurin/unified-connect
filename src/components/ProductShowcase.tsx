import { motion } from "framer-motion";
import heroDashboard from "@/assets/hero-dashboard.png";

const slides = [
  { title: "Multi-atendimento", desc: "Gerencie dezenas de conversas simultâneas com eficiência." },
  { title: "Fluxo de Chatbot", desc: "Crie automações visuais sem nenhuma linha de código." },
  { title: "Relatórios em Tempo Real", desc: "Acompanhe métricas de desempenho da sua equipe." },
];

const ProductShowcase = () => {
  return (
    <section id="produto" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Uma interface intuitiva para operações robustas
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tenha o controle total da sua equipe em um único lugar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-card border border-border max-w-4xl mx-auto"
        >
          <img
            src={heroDashboard}
            alt="Plataforma Zeeps"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {slides.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
