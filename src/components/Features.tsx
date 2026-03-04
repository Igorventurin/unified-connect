import { motion } from "framer-motion";
import { Users, Bot, GitBranch, Code2, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Multi-atendentes",
    desc: "Vários operadores em um único número de WhatsApp.",
    color: "from-emerald-500/20 to-teal-500/0",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    desc: "Inteligência artificial que tria e resolve demandas automaticamente.",
    color: "from-green-500/20 to-emerald-500/0",
  },
  {
    icon: GitBranch,
    title: "Triagem Automática",
    desc: "Encaminhe o cliente para o departamento certo sem intervenção humana.",
    color: "from-teal-500/20 to-cyan-500/0",
  },
  {
    icon: Code2,
    title: "API Disponível",
    desc: "Flexibilidade total para desenvolvedores.",
    color: "from-cyan-500/20 to-blue-500/0",
  },
  {
    icon: Clock,
    title: "Mensagens Agendadas",
    desc: "Nunca esqueça de um follow-up.",
    color: "from-emerald-500/20 to-green-500/0",
  },
  {
    icon: BarChart3,
    title: "Gestão em Tempo Real",
    desc: "Dashboard com métricas de performance da equipe.",
    color: "from-teal-500/20 to-emerald-500/0",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-14"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
            Recursos Exclusivos
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ferramentas pensadas <br className="hidden lg:block" /> para o seu crescimento
          </h2>
          <p className="mt-6 text-muted-foreground text-lg lg:text-xl">
            Descubra por que equipes de todos os tamanhos escolhem nossa plataforma para automatizar e escalar.
          </p>
        </motion.div>

        {/* Minimalist modern grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative bg-[#fdfdfd] dark:bg-zinc-900 border border-border/60 hover:border-primary/30 rounded-[2rem] p-6 lg:p-8 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,148,81,0.1)] overflow-hidden"
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-100 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 border border-border/50 flex items-center justify-center shrink-0 mb-6 shadow-sm group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-zinc-600 dark:text-zinc-300 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-bold text-foreground text-xl leading-tight mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed flex-1">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
