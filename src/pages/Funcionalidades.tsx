import { useEffect, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Users, Plug, BarChart3, Workflow, ShieldCheck, Check, PlayCircle } from "lucide-react";
import Layout from "@/components/Layout";
import FAQ from "@/components/FAQ";
import HowItWorksModal, { type FeatureBlock } from "@/components/HowItWorksModal";
import {
  AgentesIAVisual,
  MultiAtendentesVisual,
  IntegracoesVisual,
  AnalyticsVisual,
  AutomacaoVisual,
  SegurancaVisual,
} from "@/components/FeatureVisuals";
import { integracoes } from "@/data/integracoes";
import ferramentaVideo from "@/assets/ferramenta.mp4";
import configZeeps from "@/assets/configurações_zeeps.png";

type Funcionalidade = FeatureBlock & { Visual: ComponentType };

const blocos: Funcionalidade[] = [
  {
    slug: "agentes-ia",
    icon: Bot,
    title: "Agentes de IA",
    subtitle: "Atendimento automático que qualifica e vende sozinho",
    desc: "Sua IA entende o cliente, qualifica o interesse e conduz o primeiro contato sozinha, 24 horas por dia.",
    bullets: [
      "Conversa natural desde o primeiro contato, sem parecer um robô decorado",
      "Qualifica o interesse do cliente antes de encaminhar para um humano",
      "Funciona 24 horas por dia, inclusive fora do horário comercial",
      "Aprende com o histórico de conversas para responder cada vez melhor",
    ],
    Visual: AgentesIAVisual,
  },
  {
    slug: "multi-atendentes",
    icon: Users,
    title: "Multi-atendentes",
    subtitle: "Toda a equipe no mesmo número de WhatsApp",
    desc: "Acabe com a bagunça de vários números: todos os atendentes trabalham juntos, com histórico compartilhado.",
    bullets: [
      "Vários atendentes conectados ao mesmo número oficial, sem duplicar chip",
      "Histórico de conversas compartilhado entre toda a equipe",
      "Transferência de atendimento entre setores sem perder contexto",
      "Visão em tempo real de quem está atendendo o quê",
    ],
    Visual: MultiAtendentesVisual,
  },
  {
    slug: "integracoes",
    icon: Plug,
    title: "Integrações",
    subtitle: "Conectada ao ecossistema que sua empresa já usa",
    desc: "Integrações nativas com os maiores ERPs, CRMs e plataformas de e-commerce do mercado.",
    bullets: [
      "Integrações nativas com ERPs, CRMs e plataformas de e-commerce",
      "Sincronização automática de pedidos, estoque e cadastros",
      "API aberta para conectar sistemas próprios ou sob medida",
      "Dados do cliente disponíveis direto na tela de atendimento",
    ],
    Visual: IntegracoesVisual,
  },
  {
    slug: "analytics",
    icon: BarChart3,
    title: "Analytics",
    subtitle: "Decisões com dados, não com achismo",
    desc: "Acompanhe a performance da equipe em tempo real e tome decisões melhores com métricas de verdade.",
    bullets: [
      "Relatórios de performance por atendente, setor e canal",
      "Tempo médio de resposta e de resolução em tempo real",
      "Funil de atendimento do primeiro contato até o fechamento",
      "Exportação de dados para compartilhar com a diretoria",
    ],
    Visual: AnalyticsVisual,
  },
  {
    slug: "automacao",
    icon: Workflow,
    title: "Automação",
    subtitle: "Fluxos que trabalham enquanto sua equipe foca no que importa",
    desc: "Encaminhamento automático, lembretes e respostas para perguntas frequentes, sem depender de time técnico.",
    bullets: [
      "Encaminhamento automático para o setor certo, sem intervenção manual",
      "Lembretes e follow-up automáticos para não perder oportunidades",
      "Respostas automáticas para perguntas frequentes",
      "Regras configuráveis sem precisar de time técnico",
    ],
    Visual: AutomacaoVisual,
  },
  {
    slug: "seguranca",
    icon: ShieldCheck,
    title: "Segurança e Conformidade",
    subtitle: "Dados protegidos, em conformidade com a LGPD",
    desc: "Criptografia, controle de acesso e conformidade com a LGPD no tratamento de dados dos seus clientes.",
    bullets: [
      "Criptografia de ponta a ponta nas conversas",
      "Controle de acesso por perfil de usuário",
      "Conformidade com a LGPD no tratamento de dados de clientes",
      "Backups regulares para não perder histórico de atendimento",
    ],
    Visual: SegurancaVisual,
  },
];

const Funcionalidades = () => {
  const [selected, setSelected] = useState<FeatureBlock | null>(null);

  // Rola até o bloco correto quando a página é acessada com uma âncora
  // (ex: /funcionalidades#analytics vindo do comparativo de planos) — o
  // scroll automático do navegador não funciona de forma confiável aqui
  // porque o conteúdo é renderizado pelo React após o carregamento inicial.
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <Layout>
      {/* Page Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Funcionalidades
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Tudo que sua operação de atendimento precisa,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                em um só lugar
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Da inteligência artificial à segurança dos dados, conheça em detalhe cada ferramenta
              que a Zeeps coloca à disposição da sua equipe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blocos de funcionalidades — seções alternadas, texto/imagem trocando de lado */}
      {blocos.map((b, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={b.slug}
            id={b.slug}
            className={`py-16 lg:py-20 scroll-mt-24 ${reversed ? "bg-[#fafafa]" : "bg-white"}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div
                className={`max-w-6xl mx-auto flex flex-col ${
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12 lg:gap-16`}
              >
                {/* Texto */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 max-w-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <b.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-bold text-foreground text-2xl lg:text-3xl">{b.title}</h2>
                  <p className="mt-2 text-primary font-semibold">{b.subtitle}</p>
                  <p className="mt-4 text-muted-foreground text-[15px] lg:text-base leading-relaxed">{b.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {b.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm lg:text-[15px] text-foreground/90">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setSelected(b)}
                    className="mt-7 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Como funciona
                  </button>
                </motion.div>

                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex-1 w-full"
                >
                  <b.Visual />

                  {b.slug === "integracoes" && (
                    <div className="mt-8 flex flex-col items-center">
                      <div className="flex items-center">
                        {integracoes.map((item, idx) => (
                          <div
                            key={item.slug}
                            className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-white ring-1 ring-border shadow-card flex items-center justify-center overflow-hidden shrink-0"
                            style={{
                              marginLeft: idx === 0 ? 0 : "-10px",
                              zIndex: integracoes.length - idx,
                            }}
                          >
                            <img src={item.logo} alt={item.name} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        + de {integracoes.length} integrações nativas
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

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
              Pronto para ver tudo isso funcionando na prática?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Fale com um consultor e descubra como a Zeeps se encaixa na sua operação.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contato"
                className="gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-all hover:scale-105 shadow-soft"
              >
                Falar com consultor
              </Link>
              <Link
                to="/planos"
                className="bg-white border-2 border-border text-foreground px-7 py-3.5 rounded-xl text-base font-bold hover:border-primary/40 transition-all hover:scale-105"
              >
                Ver planos e preços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Geral */}
      <FAQ />

      <HowItWorksModal
        feature={selected}
        videoSrc={ferramentaVideo}
        poster={configZeeps}
        onClose={() => setSelected(null)}
      />
    </Layout>
  );
};

export default Funcionalidades;
