import { motion } from "framer-motion";
import { Users, Bot, GitBranch, Code2, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    label: "Agentes de IA",
    lead: "Agentes de IA que vendem",
    desc: "Sua IA entende o cliente, qualifica o interesse e conduz o primeiro contato sozinha, 24 horas por dia.",
    color: "from-green-500/20 to-emerald-500/0",
  },
  {
    icon: Users,
    label: "Multi-atendentes",
    lead: "Sua equipe inteira, um único WhatsApp",
    desc: "Acabe com a bagunça de vários números: todos os atendentes trabalham juntos, com histórico compartilhado.",
    color: "from-emerald-500/20 to-teal-500/0",
  },
  {
    icon: GitBranch,
    label: "Roteamento Inteligente",
    lead: "O cliente certo, no setor certo",
    desc: "Encaminhamento automático para o departamento certo, sem intervenção manual e sem cliente perdido no meio do caminho.",
    color: "from-teal-500/20 to-cyan-500/0",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    lead: "Decisões com dados, não com achismo",
    desc: "Acompanhe a performance da equipe em tempo real e tome decisões melhores com métricas de verdade.",
    color: "from-teal-500/20 to-emerald-500/0",
  },
  {
    icon: Clock,
    label: "Follow-up Automático",
    lead: "Follow-up que nunca esquece",
    desc: "Agende lembretes e retornos automáticos e nunca mais perca uma oportunidade por falha humana.",
    color: "from-emerald-500/20 to-green-500/0",
  },
  {
    icon: Code2,
    label: "API Aberta",
    lead: "Sua operação, do seu jeito",
    desc: "Conecte a Zeeps a qualquer sistema com uma API aberta e flexível, sem depender só de integrações prontas.",
    color: "from-cyan-500/20 to-blue-500/0",
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
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-border/50 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <f.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg leading-tight">
                    {f.label}
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed flex-1">
                  <span className="font-semibold text-foreground/90">{f.lead}: </span>
                  <span className="text-muted-foreground">{f.desc}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a
            href="/#contato"
            className="gradient-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all hover:scale-105 shadow-soft inline-block"
          >
            Começar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
