import type { LucideIcon } from "lucide-react";
import {
  Sprout,
  Factory,
  ShoppingBag,
  Laptop,
  HeartPulse,
  MessageSquare,
  Plug,
  Workflow,
  ShieldCheck,
  Bot,
  BellRing,
  Wallet,
  Clock,
  LineChart,
  Ticket,
  FileCheck2,
  CalendarCheck,
  Repeat,
  Phone,
  Eye,
  Handshake,
  TrendingDown,
  Gauge,
  Users,
  Scale,
  Timer,
} from "lucide-react";

import imgAgro from "@/assets/segmento_agro.avif";
import imgAtacado from "@/assets/segmento_atacado.jpg";
import imgVarejo from "@/assets/segmento_varejo.avif";
import imgTecnologia from "@/assets/segmento_tecnologia.avif";
import imgSaude from "@/assets/segmento_saude.avif";

export type SegmentoItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type Segmento = {
  slug: string;
  /** Nome curto usado no card da Home e no seletor de segmentos. */
  name: string;
  /** Nome completo do segmento, usado no Hero e no SEO. */
  fullName: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  /** Chamada curta do card da Home. */
  short: string;
  heroTitle: string;
  /** Trecho final do título que recebe o gradiente da marca. */
  heroHighlight: string;
  heroSubtitle: string;
  seoDescription: string;
  dor: {
    desc: string;
    pontos: string[];
  };
  solucao: {
    subtitle: string;
    cards: SegmentoItem[];
  };
  /**
   * TODO: resultados estão descritos de forma qualitativa (o que muda na
   * operação). Números reais de impacto/ROI por segmento ainda não foram
   * fornecidos pelo cliente — quando chegarem, virar métricas.
   */
  resultados: SegmentoItem[];
};

/**
 * Recursos que aparecem, com o mesmo texto, na descrição de todos os
 * segmentos enviada pelo cliente. Ficam em uma faixa comum do template para
 * as páginas não parecerem copy-paste umas das outras.
 */
export const recursosComuns: SegmentoItem[] = [
  {
    icon: Eye,
    title: "Conversas do time acompanhadas em tempo real",
    desc: "A gestão vê o que o vendedor conversa com o cliente externo enquanto acontece, com rastreabilidade e segurança da LGPD.",
  },
  {
    icon: Handshake,
    title: "Negociações de compras sob controle",
    desc: "As tratativas do comprador com o fornecedor também ficam registradas e auditáveis, dentro das regras da LGPD.",
  },
  {
    icon: Phone,
    title: "Ligações com áudio e transcrição",
    desc: "Ao ligar pela plataforma, todo o registro fica salvo — incluindo o áudio e a transcrição da conversa.",
  },
];

export const segmentos: Segmento[] = [
  {
    slug: "agronegocio",
    name: "Agronegócio",
    fullName: "Agronegócio e Distribuição Agrícola",
    icon: Sprout,
    image: imgAgro,
    imageAlt: "Trator em lavoura ao lado de silos de armazenagem de grãos",
    short:
      "Do produtor ao pátio de peças: atendimento, cobrança e dados do ERP em um único canal oficial.",
    heroTitle: "Atendimento do campo ao pátio,",
    heroHighlight: "sem planilha e sem retrabalho",
    heroSubtitle:
      "Equipes de vendas e cobrança do agro perdem tempo em processos manuais no WhatsApp e em planilhas. A Zeeps centraliza tudo em um canal oficial, conectado ao seu ERP.",
    seoDescription:
      "A Zeeps centraliza o atendimento do agronegócio em um canal oficial de WhatsApp, integrado a ERPs do setor: extrato do produtor, cotações, clima, régua de cobrança e rastreabilidade LGPD.",
    dor: {
      desc: "No agro, a informação que o produtor precisa está no ERP — mas quem fala com ele está no WhatsApp, com uma planilha aberta do lado.",
      pontos: [
        "Vendedores e equipe de cobrança presos a processos manuais no WhatsApp e em planilhas.",
        "Dados do ERP (extrato, pedidos, faturamento) longe de quem realmente conversa com o produtor.",
        "Atendimento espalhado em vários números, sem histórico centralizado nem rastreabilidade.",
      ],
    },
    solucao: {
      subtitle:
        "Um canal oficial, conectado ao seu ERP, que entrega ao produtor a informação que ele pede — e à gestão o controle que faltava.",
      cards: [
        {
          icon: MessageSquare,
          title: "Um único canal oficial",
          desc: "Múltiplos números centralizados em um só canal via WhatsApp API, com parceria oficial Meta, e auto atendimento especializado para o agronegócio.",
        },
        {
          icon: Plug,
          title: "Integração com os ERPs do setor",
          desc: "Conexão com TOTVS e outros ERPs para disponibilizar em tempo real, pelo WhatsApp, o extrato do produtor, cotações e clima.",
        },
        {
          icon: Workflow,
          title: "Automação do ciclo comercial e financeiro",
          desc: "Avisos de faturamento, aprovação e liberação de pedidos de compra e venda, régua de cobrança, meta x realizado para a estrutura comercial e aviso de garantia ou troca de peças.",
        },
        {
          icon: Bot,
          title: "IA que direciona o atendimento",
          desc: "Recursos de Inteligência Artificial conduzem todo o atendimento e encaminham o cliente externo ou interno para o departamento correto.",
        },
      ],
    },
    resultados: [
      {
        icon: Timer,
        title: "Menos tempo em tarefa manual",
        desc: "Faturamento, liberação de pedidos e cobrança viram fluxo automático — a equipe volta a vender em vez de alimentar planilha.",
      },
      {
        icon: Clock,
        title: "Produtor atendido na hora",
        desc: "Extrato, cotações e clima ficam disponíveis via WhatsApp a qualquer momento, sem depender de alguém no escritório.",
      },
      {
        icon: ShieldCheck,
        title: "Operação auditável",
        desc: "Cada conversa e cada ligação ficam registradas, com áudio e transcrição, dentro das regras da LGPD.",
      },
    ],
  },
  {
    slug: "atacado-industria",
    name: "Atacado e Indústria",
    fullName: "Atacado, Distribuição e Indústria",
    icon: Factory,
    image: imgAtacado,
    imageAlt: "Equipe de operação em centro de distribuição conferindo mercadorias",
    short:
      "Status de pedido, boleto e PIX respondidos automaticamente pelo ERP — sem dezenas de celulares corporativos.",
    heroTitle: "Escale o atendimento",
    heroHighlight: "sem contratar mais gente",
    heroSubtitle:
      "Representantes, lojistas e clientes repetem sempre as mesmas perguntas. A Zeeps transforma esse volume em notificação automática integrada ao seu ERP.",
    seoDescription:
      "A Zeeps centraliza o atendimento de atacadistas, distribuidoras e indústrias em um canal oficial de WhatsApp, com notificações automáticas integradas ao ERP e rastreabilidade LGPD.",
    dor: {
      desc: "O time gasta o dia respondendo o que o ERP já sabe — e a gestão não enxerga nada do que é combinado no celular de cada vendedor.",
      pontos: [
        "Alto volume de mensagens repetitivas de representantes, lojistas e clientes: status de pedido, 2ª via de boleto ou fatura e chave PIX.",
        "Atendimento pulverizado em dezenas de celulares corporativos, sem controle da gestão.",
        "Nenhum histórico centralizado das negociações feitas com clientes e fornecedores.",
      ],
    },
    solucao: {
      subtitle:
        "O ERP passa a falar direto com o cliente, e toda a operação comercial acontece dentro de um canal oficial e auditável.",
      cards: [
        {
          icon: MessageSquare,
          title: "Fim dos celulares corporativos",
          desc: "Múltiplos números centralizados em um único canal oficial via WhatsApp API, com parceria oficial Meta, e histórico compartilhado por toda a equipe.",
        },
        {
          icon: BellRing,
          title: "Notificações automáticas do ERP",
          desc: "Confirmação de pedido, aviso de despacho e entrega e envio de boletos disparados pelo próprio sistema, reduzindo custo operacional.",
        },
        {
          icon: Wallet,
          title: "Régua de cobrança e metas",
          desc: "Avisos automáticos conforme a régua de cobrança e acompanhamento de meta x realizado para toda a estrutura comercial.",
        },
        {
          icon: Bot,
          title: "IA que direciona o atendimento",
          desc: "Recursos de Inteligência Artificial conduzem todo o atendimento e encaminham o cliente externo ou interno para o departamento correto.",
        },
      ],
    },
    resultados: [
      {
        icon: TrendingDown,
        title: "Custo operacional menor",
        desc: "As perguntas repetitivas saem da fila do time e viram notificação automática disparada pelo ERP.",
      },
      {
        icon: Gauge,
        title: "Escala sem novas contratações",
        desc: "A operação absorve mais demanda sem aumentar o time de atendimento na mesma proporção.",
      },
      {
        icon: Eye,
        title: "Gestão com visão total",
        desc: "Vendas e compras passam a acontecer em um canal único, com histórico e rastreabilidade em vez de conversa em celular pessoal.",
      },
    ],
  },
  {
    slug: "varejo-autopecas",
    name: "Varejo e Autopeças",
    fullName: "Varejo, Autopeças e Bens de Consumo",
    icon: ShoppingBag,
    image: imgVarejo,
    imageAlt: "Atendente de loja de autopeças conversando com um cliente no balcão",
    short:
      "Resposta imediata 24/7 com Agente de IA e régua de cobrança automática para recuperar receita.",
    heroTitle: "Ninguém desiste da compra",
    heroHighlight: "esperando resposta",
    heroSubtitle:
      "No varejo, cada minuto de espera no WhatsApp é uma venda que vai para o concorrente. A Zeeps responde na hora e ainda recupera o que já foi vendido e não foi pago.",
    seoDescription:
      "A Zeeps atende o varejo, autopeças e bens de consumo com resposta imediata 24/7 por Agente de IA, canal oficial de WhatsApp e régua de cobrança automática pré e pós-vencimento.",
    dor: {
      desc: "Cliente esperando resposta é venda perdida; cliente inadimplente cobrado à mão é receita que não volta.",
      pontos: [
        "Perda de vendas por causa do tempo de espera para ser atendido no WhatsApp.",
        "Equipes de atendimento sobrecarregadas com dúvidas repetidas.",
        "Alta taxa de inadimplência somada a uma cobrança manual, lenta e burocrática.",
      ],
    },
    solucao: {
      subtitle:
        "Atendimento imediato para quem está comprando e cobrança automática para quem já comprou — sem sobrecarregar a loja.",
      cards: [
        {
          icon: Bot,
          title: "Agente de IA respondendo 24/7",
          desc: "Resposta imediata a qualquer hora, tirando dúvidas e triando os clientes antes de chegarem ao atendente.",
        },
        {
          icon: MessageSquare,
          title: "Um único canal oficial",
          desc: "Múltiplos números centralizados em um só canal via WhatsApp API, com parceria oficial Meta, e histórico compartilhado pela equipe.",
        },
        {
          icon: Wallet,
          title: "Recuperação de receita",
          desc: "Fluxo automático de régua de cobrança pré e pós-vencimento, comprovado pela redução da inadimplência.",
        },
        {
          icon: ShieldCheck,
          title: "Rastreabilidade e LGPD",
          desc: "Conversas e ligações registradas com áudio e transcrição, mantendo a operação auditável e em conformidade.",
        },
      ],
    },
    resultados: [
      {
        icon: Clock,
        title: "Zero fila de espera",
        desc: "O Agente de IA responde na hora, todos os dias, e encaminha ao atendente apenas quem realmente precisa.",
      },
      {
        icon: TrendingDown,
        title: "Menos inadimplência",
        desc: "A régua automática cobra antes e depois do vencimento, sem depender de ligação manual.",
      },
      {
        icon: Users,
        title: "Equipe menos sobrecarregada",
        desc: "A triagem automática filtra o repetitivo e o time foca em quem está pronto para comprar.",
      },
    ],
  },
  {
    slug: "servicos-tecnologia",
    name: "Serviços e Tecnologia",
    fullName: "Serviços, Tecnologia e Serviços Financeiros",
    icon: Laptop,
    image: imgTecnologia,
    imageAlt: "Equipe de tecnologia analisando indicadores de atendimento em um escritório",
    short:
      "Tickets, produtividade, NPS automatizado e Termo de Aceite LGPD nativo no fluxo do WhatsApp.",
    heroTitle: "Todo atendimento medido,",
    heroHighlight: "todo dado no lugar certo",
    heroSubtitle:
      "Sem rastreabilidade não há gestão, e sem dado de satisfação não há evolução. A Zeeps entrega uma plataforma omni-channel com controle, indicadores e conformidade legal.",
    seoDescription:
      "A Zeeps oferece plataforma omni-channel para empresas de serviços, tecnologia e serviços financeiros: gestão de tickets, relatórios de produtividade, NPS automatizado e Termo de Aceite LGPD.",
    dor: {
      desc: "A operação de serviços é medida por prazo, satisfação e conformidade — e é exatamente isso que some quando o atendimento não é rastreável.",
      pontos: [
        "Falta de rastreabilidade do atendimento e descontrole dos horários das equipes.",
        "Ausência de dados estratégicos de NPS e satisfação para orientar decisões.",
        "Preocupação com a adequação legal (LGPD) no envio de mensagens.",
      ],
    },
    solucao: {
      subtitle:
        "Uma plataforma omni-channel completa, com os indicadores que a gestão precisa e a conformidade legal embutida no fluxo.",
      cards: [
        {
          icon: Ticket,
          title: "Omni-channel com gestão de tickets",
          desc: "Múltiplos números centralizados em um canal oficial via WhatsApp API, com parceria oficial Meta, e cada atendimento tratado como um ticket.",
        },
        {
          icon: LineChart,
          title: "Relatórios de produtividade",
          desc: "Indicadores de desempenho por equipe, mapeamento de motivos de fechamento e horários programados de atendimento.",
        },
        {
          icon: Gauge,
          title: "Pesquisa de NPS automatizada",
          desc: "Coleta automática de satisfação ao final do atendimento, transformando percepção do cliente em dado estratégico.",
        },
        {
          icon: FileCheck2,
          title: "Termo de Aceite LGPD nativo",
          desc: "Aceite integrado nativamente ao fluxo do WhatsApp, garantindo adequação legal no envio de mensagens.",
        },
      ],
    },
    resultados: [
      {
        icon: Eye,
        title: "Rastreabilidade completa",
        desc: "Cada atendimento tem dono, histórico e horário — nada mais se perde em conversa paralela.",
      },
      {
        icon: Scale,
        title: "Conformidade sem esforço extra",
        desc: "O Termo de Aceite LGPD faz parte do próprio fluxo de conversa, não de um processo à parte.",
      },
      {
        icon: LineChart,
        title: "Decisão baseada em dado",
        desc: "NPS, produtividade e motivos de fechamento passam a orientar a gestão da operação.",
      },
    ],
  },
  {
    slug: "saude-educacao",
    name: "Saúde e Educação",
    fullName: "Saúde e Educação — Educacional, Clínicas e Farmacêutica",
    icon: HeartPulse,
    image: imgSaude,
    imageAlt: "Profissional de farmácia sorrindo no balcão de atendimento",
    short:
      "Agendamentos, confirmações e lembretes automáticos para reduzir faltas e liberar a recepção.",
    heroTitle: "Menos faltas na agenda,",
    heroHighlight: "recepção livre para atender",
    heroSubtitle:
      "Agendar, confirmar e lembrar não precisa consumir o dia da recepção. A Zeeps automatiza a rotina e mantém pacientes e alunos engajados pelo WhatsApp.",
    seoDescription:
      "A Zeeps automatiza agendamentos, confirmações e lembretes por WhatsApp para clínicas, instituições de ensino e farmacêuticas, reduzindo faltas e liberando a recepção.",
    dor: {
      desc: "A recepção vira central de telefonemas: confirma, remarca, tira dúvida — e, mesmo assim, a agenda continua com furos.",
      pontos: [
        "Sobrecarga na recepção com agendamentos, confirmações de consultas e aulas.",
        "Dúvidas frequentes de alunos e pacientes chegando a todo momento.",
        "Atrasos e faltas recorrentes na agenda.",
      ],
    },
    solucao: {
      subtitle:
        "A rotina de agenda vira fluxo automático no WhatsApp, e o atendimento humano fica reservado para o que realmente exige atenção.",
      cards: [
        {
          icon: MessageSquare,
          title: "Um único canal oficial",
          desc: "Múltiplos números da recepção centralizados em um canal via WhatsApp API, com parceria oficial Meta, e histórico compartilhado.",
        },
        {
          icon: CalendarCheck,
          title: "Agendamentos e lembretes automáticos",
          desc: "Automação de agendamentos e lembretes de compromissos pelo WhatsApp, atacando diretamente atrasos e faltas.",
        },
        {
          icon: Repeat,
          title: "Reengajamento de pacientes e alunos",
          desc: "Retomada de contato automática com quem parou de comparecer, mantendo o relacionamento ativo.",
        },
        {
          icon: Clock,
          title: "Atendimento humanizado a qualquer hora",
          desc: "Dúvidas operacionais respondidas de forma rápida e humanizada em qualquer horário do dia.",
        },
      ],
    },
    resultados: [
      {
        icon: CalendarCheck,
        title: "Menos faltas e atrasos",
        desc: "O lembrete automático chega antes do compromisso e a confirmação acontece dentro da própria conversa.",
      },
      {
        icon: Users,
        title: "Recepção liberada",
        desc: "A equipe deixa de repetir confirmação e dúvida frequente e volta a atender quem está na sua frente.",
      },
      {
        icon: Repeat,
        title: "Relacionamento contínuo",
        desc: "Pacientes e alunos inativos são reengajados automaticamente, sem depender de alguém lembrar de ligar.",
      },
    ],
  },
];

export const getSegmento = (slug?: string) =>
  segmentos.find((s) => s.slug === slug);
