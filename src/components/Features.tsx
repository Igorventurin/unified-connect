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

        {/* Tic-tac-toe grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              // Determine border classes for tic-tac-toe effect
              const col = i % 3;
              const row = Math.floor(i / 3);
              const borderClasses = [
                // Right border for cols 0, 1
                col < 2 ? "lg:border-r" : "",
                // Bottom border for row 0
                row < 1 ? "lg:border-b" : "",
                // For sm (2 cols): right border on odd index not needed, left col gets right border
                i % 2 === 0 ? "sm:border-r lg:border-r-0" : "",
                // Re-apply lg right border
                col < 2 ? "lg:border-r" : "",
                // sm bottom border for first 4 items
                i < 4 ? "sm:border-b lg:border-b-0" : "",
                // Re-apply lg bottom border
                row < 1 ? "lg:border-b" : "",
                // Single col: bottom border for all but last
                i < 5 ? "border-b sm:border-b-0" : "",
              ].join(" ");

              return (
                <div
                  key={f.title}
                  className={`group p-8 border-border transition-colors duration-300 hover:bg-muted/50 ${borderClasses}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg leading-tight">
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
