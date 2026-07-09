import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Minus, ChevronDown, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

// Preços, limites e recursos abaixo são os valores reais fornecidos pelo
// cliente (Planos.jpg / "SITE - integrações e planos.pdf") — ver Ajuste 8 no
// PLANEJAMENTO_AJUSTES.md.
const planos = [
  {
    nome: "Básico",
    setup: "R$ 3.190,00",
    mensal: "R$ 813,50",
    destaque: false,
    descricao: "Para times pequenos que estão começando a organizar o atendimento.",
    itens: [
      "Suporte por chat, e-mail e WhatsApp",
      "Até 2 números de WhatsApp na plataforma",
      "Até 5 usuários simultâneos",
      "Até 5 Agentes de IA (franquia de até 1.000 atendimentos)",
      "Até 1 rede social (Instagram e Facebook)",
      "Sem limite de atendimentos, fluxos de chatbot e NPS",
    ],
  },
  {
    nome: "Intermediário",
    setup: "R$ 3.490,00",
    mensal: "R$ 1.391,50",
    destaque: true,
    descricao: "Para equipes que já têm volume e querem conectar a Zeeps ao ERP.",
    itens: [
      "Suporte por chat, e-mail e WhatsApp",
      "Até 2 números de WhatsApp na plataforma",
      "Até 10 usuários simultâneos",
      "Até 10 Agentes de IA (franquia de até 5.000 atendimentos)",
      "Até 1 rede social (Instagram e Facebook)",
      "Integração com ERP: até 10.000 disparos em 4 regras de negócio",
      "Sem limite de atendimentos, fluxos de chatbot e NPS",
    ],
  },
  {
    nome: "Business",
    setup: "Sob consulta",
    mensal: "Sob consulta",
    destaque: false,
    descricao: "Para operações grandes, com atendimento personalizado e integrações sem limite.",
    itens: [
      "Atendimento personalizado",
      "Vários números de WhatsApp na plataforma",
      "Mais de 10 usuários simultâneos",
      "Mais de 10 Agentes de IA (franquia de até 5.000 atendimentos)",
      "Mais de 1 rede social (Instagram e Facebook)",
      "Integrações com ERP sem limite",
    ],
  },
];

// Matriz de recursos × plano — mesma fonte de dados real citada acima.
// `true` = incluso (mostra checkmark), string = valor específico por plano.
// `link` (opcional) = slug do bloco correspondente em /funcionalidades, quando
// existir uma seção que detalha esse recurso — vira um "Saiba mais →" na linha.
const comparativo: {
  recurso: string;
  valores: [string | true, string | true, string | true];
  link?: string;
}[] = [
  { recurso: "Suporte", valores: ["Chat, e-mail e WhatsApp", "Chat, e-mail e WhatsApp", "Atendimento personalizado"] },
  { recurso: "Disparos de mensagens em massa (Campanhas/MKT)", valores: [true, true, true] },
  { recurso: "Dashboard de campanhas", valores: [true, true, true] },
  { recurso: "Dashboard de atendimentos", valores: [true, true, true], link: "analytics" },
  {
    recurso: "Dashboard de atendentes online/offline em tempo real",
    valores: [true, true, true],
    link: "multi-atendentes",
  },
  { recurso: "Números de WhatsApp na plataforma", valores: ["Até 2", "Até 2", "Vários"], link: "multi-atendentes" },
  { recurso: "Usuários simultâneos", valores: ["Até 5", "Até 10", "Mais de 10"], link: "multi-atendentes" },
  {
    recurso: "Agentes de IA",
    valores: [
      "Até 5 · franquia de até 1.000 atendimentos",
      "Até 10 · franquia de até 5.000 atendimentos",
      "Mais de 10 · franquia de até 5.000 atendimentos",
    ],
    link: "agentes-ia",
  },
  {
    recurso: "Redes sociais (Instagram e Facebook)",
    valores: ["Até 1", "Até 1", "Mais de 1"],
    link: "integracoes",
  },
  { recurso: "Atendimentos a clientes únicos", valores: ["Sem limite", "Sem limite", "Sem limite"] },
  { recurso: "Fluxos de chatbot", valores: ["Sem limite", "Sem limite", "Sem limite"], link: "automacao" },
  {
    recurso: "Pesquisa de NPS por atendimento",
    valores: ["Sem limite", "Sem limite", "Sem limite"],
    link: "analytics",
  },
  {
    recurso: "Integração com ERP",
    valores: ["—", "Até 10.000 disparos · 4 regras de negócio", "Sem limite"],
    link: "integracoes",
  },
  { recurso: "Setup", valores: ["R$ 3.190,00", "R$ 3.490,00", "Sob consulta"] },
  { recurso: "Mensalidade", valores: ["R$ 813,50", "R$ 1.391,50", "Sob consulta"] },
];

// TODO: condições exatas de fidelidade/cancelamento e o mecanismo de excedente
// de franquia dos Agentes de IA são respostas genéricas — pendente de
// confirmação do cliente para deixar as respostas mais específicas (ver
// Ajuste 8 no PLANEJAMENTO_AJUSTES.md).
const faqPlanos = [
  {
    question: "Como funciona o valor de Setup?",
    answer:
      "O Setup é uma taxa única de implementação, cobrada na contratação, que cobre a configuração inicial da plataforma para o seu negócio. A partir daí, você paga apenas a mensalidade do plano escolhido.",
  },
  {
    question: "Existe fidelidade ou multa por cancelamento?",
    answer:
      "As condições de fidelidade e cancelamento são definidas no contrato comercial. Fale com um de nossos consultores para conhecer todos os detalhes antes de fechar.",
  },
  {
    question: "O que acontece se eu ultrapassar a franquia de atendimentos dos Agentes de IA?",
    answer:
      "Nesse caso, nossa equipe entra em contato para ajustar seu plano ou franquia conforme o volume real de atendimentos da sua operação.",
  },
  {
    question: "Posso mudar de plano depois de contratado?",
    answer:
      "Sim, você pode migrar de plano a qualquer momento conforme sua operação cresce — do Básico ao Intermediário, ou para o Business sob consulta.",
  },
  {
    question: "O plano Business tem valor fixo?",
    answer:
      "Não. O Business é sob consulta: montamos uma proposta personalizada de acordo com o volume de atendimentos, integrações e necessidades específicas da sua empresa.",
  },
];

const Planos = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Page Hero Comercial */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Planos
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Um plano para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                cada momento
              </span>{" "}
              do seu negócio
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Setup único de implementação + mensalidade fixa. Escolha o plano que combina com o
              tamanho da sua operação hoje — e migre conforme ela cresce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards de Preço */}
      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
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

                <div className="mt-4 mb-2">
                  <p className="text-3xl font-extrabold text-foreground">
                    {p.mensal}
                    {p.mensal !== "Sob consulta" && <span className="text-muted-foreground text-sm font-medium">/mês</span>}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {p.setup !== "Sob consulta" ? `+ Setup de ${p.setup} (único)` : "Setup sob consulta"}
                  </p>
                </div>

                <ul className="mt-4 space-y-3 flex-1">
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
                  to="/contato"
                  className={`mt-8 text-center px-6 py-3 rounded-xl text-base font-semibold transition-all hover:scale-105 ${
                    p.destaque
                      ? "gradient-primary text-primary-foreground shadow-soft hover:opacity-90"
                      : "border-2 border-border text-foreground hover:border-primary/40"
                  }`}
                >
                  {p.nome === "Business" ? "Falar com consultor" : "Contratar plano"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo Detalhado */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              Comparativo detalhado
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              O que cada plano inclui
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-white shadow-card"
          >
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-semibold text-foreground p-4 lg:p-5 w-[38%]">Recurso</th>
                  {planos.map((p) => (
                    <th
                      key={p.nome}
                      className={`text-center font-semibold p-4 lg:p-5 ${
                        p.destaque ? "bg-primary/5 text-primary" : "text-foreground"
                      }`}
                    >
                      {p.nome}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparativo.map((row, i) => (
                  <tr key={row.recurso} className={i % 2 === 1 ? "bg-[#fafafa]" : "bg-white"}>
                    <td className="p-4 lg:p-5 text-foreground/90 font-medium">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span>{row.recurso}</span>
                        {row.link && (
                          <a
                            href={`/funcionalidades#${row.link}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline whitespace-nowrap"
                          >
                            Saiba mais
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </td>
                    {row.valores.map((v, j) => (
                      <td
                        key={j}
                        className={`p-4 lg:p-5 text-center ${planos[j].destaque ? "bg-primary/5" : ""}`}
                      >
                        {v === true ? (
                          <Check className="w-4 h-4 text-primary mx-auto" />
                        ) : v === "—" ? (
                          <Minus className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                        ) : (
                          <span className="text-foreground/80">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ de Planos */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
              Dúvidas sobre planos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Perguntas frequentes sobre contratação
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqPlanos.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                    isOpen ? "bg-white border-primary/30 shadow-sm" : "bg-white border-border/60 hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-[17px] font-semibold text-foreground pr-8">{faq.question}</h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "bg-primary/10 text-primary rotate-180" : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-20 bg-proof">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Não sabe qual plano escolher?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Fale com um consultor e descubra o plano ideal para o tamanho da sua operação.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contato"
                className="gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-all hover:scale-105 shadow-soft"
              >
                Falar com consultor
              </Link>
              <Link
                to="/funcionalidades"
                className="bg-white border-2 border-border text-foreground px-7 py-3.5 rounded-xl text-base font-bold hover:border-primary/40 transition-all hover:scale-105"
              >
                Ver funcionalidades
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Planos;
