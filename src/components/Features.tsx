import { motion } from "framer-motion";
import { Users, Bot, GitBranch, Code2, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Multi-atendentes",
    desc: "Vários operadores em um único número de WhatsApp.",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    desc: "Inteligência artificial que tria e resolve demandas automaticamente.",
  },
  {
    icon: GitBranch,
    title: "Triagem Automática",
    desc: "Encaminhe o cliente para o departamento certo sem intervenção humana.",
  },
  {
    icon: Code2,
    title: "API Disponível",
    desc: "Flexibilidade total para desenvolvedores.",
  },
  {
    icon: Clock,
    title: "Mensagens Agendadas",
    desc: "Nunca esqueça de um follow-up.",
  },
  {
    icon: BarChart3,
    title: "Gestão em Tempo Real",
    desc: "Dashboard com métricas de performance da equipe.",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-proof">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Funcionalidades de Destaque
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tudo o que sua equipe precisa para atender com excelência.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border"
            >
              <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
