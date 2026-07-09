import logoMercadoLivre from "@/assets/integrations/Logotipo_MercadoLivre.png";
import logoMeta from "@/assets/integrations/Meta-Logo.png";
import logoVtex from "@/assets/integrations/VTEX_Logo.svg.png";
import logoBling from "@/assets/integrations/logo-bling.png";
import logoTiny from "@/assets/integrations/logo-tiny-2.png";
import logoRdStation from "@/assets/integrations/rd-station-cor-md.png";
import logoShopify from "@/assets/integrations/shopify-logo.png";
import logoTotvs from "@/assets/integrations/totvs-logo-1.png";

export type Integracao = {
  slug: string;
  name: string;
  logo: string;
  categoria: string;
  descricao: string;
  funcionalidades: string[];
};

// TODO: conteúdo (categoria, descrição e lista de funcionalidades nativas) é
// placeholder/inventado com base no que cada plataforma tipicamente oferece —
// pendente de validação com o cliente antes de publicar (ver Ajuste 5 no
// PLANEJAMENTO_AJUSTES.md).
export const integracoes: Integracao[] = [
  {
    slug: "totvs",
    name: "TOTVS",
    logo: logoTotvs,
    categoria: "ERP",
    descricao: "Conecte a Zeeps direto ao seu ERP TOTVS e leve dados de gestão para dentro do atendimento.",
    funcionalidades: [
      "Régua de cobrança automática via WhatsApp",
      "Consulta de estoque em tempo real durante o atendimento",
      "Envio de boletos e status financeiro ao cliente",
      "Sincronização de cadastro de clientes e pedidos",
    ],
  },
  {
    slug: "rd-station",
    name: "RD Station",
    logo: logoRdStation,
    categoria: "Marketing",
    descricao: "Una automação de marketing e atendimento: leads que chegam pelo RD Station seguem direto para a Zeeps.",
    funcionalidades: [
      "Envio automático de leads qualificados para o WhatsApp",
      "Atualização de estágio no funil a partir da conversa",
      "Disparo de campanhas de nutrição pós-atendimento",
      "Histórico unificado de interações do lead",
    ],
  },
  {
    slug: "meta",
    name: "Meta",
    logo: logoMeta,
    categoria: "Redes Sociais",
    descricao: "Centralize Instagram e Facebook Messenger no mesmo painel de atendimento do WhatsApp.",
    funcionalidades: [
      "Caixa de entrada única para Instagram Direct e Messenger",
      "Resposta automática a comentários e menções",
      "Distribuição de conversas entre a equipe",
      "Relatórios de atendimento por canal",
    ],
  },
  {
    slug: "shopify",
    name: "Shopify",
    logo: logoShopify,
    categoria: "E-commerce",
    descricao: "Traga os pedidos da sua loja Shopify para o atendimento e recupere carrinhos abandonados.",
    funcionalidades: [
      "Notificação automática de status do pedido",
      "Recuperação de carrinho abandonado via WhatsApp",
      "Consulta de pedidos direto na conversa",
      "Envio de código de rastreio automático",
    ],
  },
  {
    slug: "vtex",
    name: "Vtex",
    logo: logoVtex,
    categoria: "E-commerce",
    descricao: "Integração nativa com a VTEX para acompanhar pedidos e impulsionar recompra pelo WhatsApp.",
    funcionalidades: [
      "Atualização automática de status de entrega",
      "Recuperação de carrinho abandonado",
      "Consulta de histórico de compras no atendimento",
      "Disparo de campanhas de recompra",
    ],
  },
  {
    slug: "bling",
    name: "Bling",
    logo: logoBling,
    categoria: "Gestão",
    descricao: "Sincronize pedidos, estoque e financeiro do Bling direto no fluxo de atendimento.",
    funcionalidades: [
      "Consulta de estoque em tempo real",
      "Emissão e envio de nota fiscal pelo chat",
      "Status de pedido automático para o cliente",
      "Alertas de contas a receber em atraso",
    ],
  },
  {
    slug: "tiny",
    name: "Tiny",
    logo: logoTiny,
    categoria: "Gestão",
    descricao: "Conecte o ERP Tiny à Zeeps para automatizar consultas de pedido e estoque no atendimento.",
    funcionalidades: [
      "Consulta de status de pedido em tempo real",
      "Verificação de disponibilidade de estoque",
      "Envio automático de nota fiscal e boleto",
      "Atualização de cadastro de clientes",
    ],
  },
  {
    slug: "mercado-livre",
    name: "Mercado Livre",
    logo: logoMercadoLivre,
    categoria: "E-commerce",
    descricao: "Centralize as perguntas e vendas do Mercado Livre no mesmo painel de atendimento.",
    funcionalidades: [
      "Respostas automáticas a perguntas de produto",
      "Notificação de novas vendas em tempo real",
      "Consulta de status do pedido pelo chat",
      "Alertas de reclamações e mediações",
    ],
  },
];
