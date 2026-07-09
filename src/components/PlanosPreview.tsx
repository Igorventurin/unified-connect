import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ShieldCheck } from "lucide-react";

// Preços e limites reais, fornecidos pelo cliente (Planos.jpg / SITE - integrações
// e planos.pdf — ver Ajuste 8 no PLANEJAMENTO_AJUSTES.md).
const planos = [
  {
    nome: "Básico",
    preco: "R$ 813,50",
    periodo: "/mês",
    destaque: false,
    descricao: "Para times pequenos que estão começando a organizar o atendimento.",
    itens: [
      "Até 2 números de WhatsApp na plataforma",
      "Até 5 usuários simultâneos",
      "Até 5 Agentes de IA (franquia de até 1.000 atendimentos)",
      "Até 1 rede social (Instagram e Facebook)",
    ],
  },
  {
    nome: "Intermediário",
    preco: "R$ 1.391,50",
    periodo: "/mês",
    destaque: true,
    descricao: "Para equipes que já têm volume e querem conectar a Zeeps ao ERP.",
    itens: [
      "Até 10 usuários simultâneos",
      "Até 10 Agentes de IA (franquia de até 5.000 atendimentos)",
      "Integração com ERP: até 10.000 disparos em 4 regras de negócio",
      "Sem limite de atendimentos, fluxos de chatbot e NPS",
    ],
  },
  {
    nome: "Business",
    preco: "Sob consulta",
    periodo: "",
    destaque: false,
    descricao: "Para operações grandes, com atendimento personalizado e integrações sem limite.",
    itens: [
      "Vários números de WhatsApp na plataforma",
      "Mais de 10 usuários simultâneos e Agentes de IA",
      "Integrações com ERP sem limite",
      "Atendimento personalizado",
    ],
  },
];

const PlanosPreview = () => {
  return (
    <section id="planos" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-6"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
            Planos
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Um plano para cada momento do seu negócio
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Comece pequeno e escale conforme sua operação cresce.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-12"
        >
          <ShieldCheck className="w-4 h-4 text-primary" />
          Setup único de implementação + mensalidade, sem taxas escondidas
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {planos.map((p, i) => (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 border transition-shadow duration-300 ${
                p.destaque
                  ? "bg-white border-primary shadow-[0_20px_50px_-12px_rgba(0,148,81,0.25)] md:-translate-y-3"
                  : "bg-white border-border shadow-card hover:shadow-soft"
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-soft">
                  Mais popular
                </span>
              )}

              <h3 className="font-bold text-foreground text-xl">{p.nome}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{p.descricao}</p>

              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-foreground">{p.preco}</span>
                {p.periodo && <span className="text-muted-foreground text-sm">{p.periodo}</span>}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {p.itens.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/planos"
                className={`text-center px-6 py-3 rounded-xl text-base font-semibold transition-all hover:scale-105 ${
                  p.destaque
                    ? "gradient-primary text-primary-foreground shadow-soft hover:opacity-90"
                    : "border-2 border-border text-foreground hover:border-primary/40"
                }`}
              >
                Ver detalhes
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/planos" className="text-primary font-semibold hover:underline">
            Ver todos os planos e recursos completos →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanosPreview;
