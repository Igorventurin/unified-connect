import { motion } from "framer-motion";
import { Users, Smile, ShieldCheck, Database } from "lucide-react";

// TODO: valores abaixo são placeholders inventados temporariamente.
// Repor com os números reais assim que o cliente enviar (ver checklist
// "Materiais que vou precisar de você" no PLANEJAMENTO_AJUSTES.md, Ajuste 2).
const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Empresas atendidas",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Satisfação dos clientes",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Conformidade com a LGPD",
  },
  {
    icon: Database,
    value: "10M+",
    label: "Mensagens processadas por mês",
  },
];

const SocialProof = () => {
  return (
    <section className="py-14 lg:py-16 bg-proof">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
