# Planejamento de Ajustes — Site Zeeps

> Documento de trabalho para reestruturação do site conforme `ajustes_site_zeeps.txt`.
> A execução será **incremental**: um "Ajuste" por vez, sob demanda ("executa o Ajuste 1", "agora o Ajuste 2"...).

---

## 1. Visão geral da mudança

O site sai de uma **One Page** (tudo em `/`) para uma **arquitetura de páginas separadas** (funil de informação), com a Home funcionando como resumo vertical que direciona para páginas internas de detalhamento.

Diretrizes estratégicas que atravessam vários ajustes:
- **Humanização (estilo Meta):** trocar visual "tech frio" por pessoas reais (imagens/vídeos).
- **Remoção do robô** das áreas de destaque (Hero) → vira mascote/assistente secundário (pop-up de suporte).
- **Hero estilo OneDrive:** limpo, claro, focado em benefício.
- **Prova social legível:** logos maiores, sem o efeito cinza→cor, boa leitura no mobile.
- **Funcionalidades por benefício** (dor do cliente), não lista técnica.
- **SEO:** conteúdo de vídeo "quebrado" em texto + prints reais.

---

## 2. Nota técnica importante (leia antes de começar)

O projeto **não usa arquivos `.html` separados**. É um **SPA React + Vite + React Router**. Portanto, cada "página" do documento vira uma **rota React**, não um arquivo `.html`:

| Documento (.txt)      | Rota real no site         | Arquivo a criar                    |
|-----------------------|---------------------------|------------------------------------|
| `index.html`          | `/`                       | `src/pages/Index.tsx` (já existe)  |
| `institucional.html`  | `/institucional`          | `src/pages/Institucional.tsx`      |
| `segmentos.html`      | `/segmentos/:slug`        | `src/pages/Segmento.tsx` (template)|
| `funcionalidades.html`| `/funcionalidades`        | `src/pages/Funcionalidades.tsx`    |
| `planos.html`         | `/planos`                 | `src/pages/Planos.tsx`             |
| `contato.html`        | `/contato`                | `src/pages/Contato.tsx`            |
| *(novo, fora do `.txt`)* | `/blog` e `/blog/:slug` | `src/pages/Blog.tsx` e `src/pages/BlogPost.tsx` |

Rotas que já existem e serão mantidas: `/privacidade`, `/obrigado`, `*` (404).

---

## 3. Mapa da estrutura ATUAL (ponto de partida)

**Roteamento** (`src/App.tsx`): `/` · `/privacidade` · `/obrigado` · `*`

**Home** (`src/pages/Index.tsx`) monta, nesta ordem:
`Header → HeroSection → ProductShowcase → Features → Integrations → Testimonials → About → ContactForm → FAQ → Footer → WhatsAppButton`

**Componentes existentes** (`src/components/`):
| Componente          | O que é hoje | Situação no plano |
|---------------------|--------------|-------------------|
| `Header.tsx`        | Nav âncora (Funcionalidades, Integrações, Sobre, Depoimentos) + socials + CTA. Sem Suporte, sem Documentação. | **Refazer** (menu de páginas + botão Suporte GLPI) |
| `HeroSection.tsx`   | Robô 3D (Spline) + carrossel de logos com efeito grayscale→cor | **Refazer** (remover robô, estilo OneDrive) |
| `SocialProof.tsx`   | Faixa de logos em texto — **NÃO está sendo usado** na Home | Reaproveitar ou remover |
| `ProductShowcase.tsx`| "Interface intuitiva": tabs + acordeão à esquerda, **imagem estática** à direita (não troca) + vídeo "Conheça" | **Evoluir** (troca dinâmica de imagem estilo RD Station) |
| `Features.tsx`      | 6 cards técnicos (Multi-atendentes, IA, Triagem, API, Agendadas, Gestão) | **Reescrever** por benefício |
| `Integrations.tsx`  | Card com 8 logos + "E muito +" + vídeo "Ferramenta". Sem pop-up de detalhe | **Evoluir** (pop-up estilo TOTVS) |
| `Testimonials.tsx`  | Depoimentos **fake** (nomes em inglês, fotos Unsplash) | Substituir por reais / humanizar |
| `About.tsx`         | "Sobre a Zeeps" + mockup 3D + feed Instagram (Elfsight) | Migrar p/ Institucional |
| `ContactForm.tsx`   | Form → webhook n8n + redireciona WhatsApp | Reaproveitar em `/contato` |
| `FAQ.tsx`           | 5 perguntas + JSON-LD SEO | Dividir (FAQ geral / FAQ planos) |
| `Footer.tsx`        | Logo, Links Rápidos (com Documentação), Parcerias, socials, privacidade | **Ajustar** (Documentação já está aqui; padronizar como Footer Global) |
| `WhatsAppButton.tsx`| Botão flutuante fixo | Manter; base p/ mascote de suporte |

**Design system** (`src/index.css`, `tailwind.config.ts`):
- Fonte **Sansation** (local). Cor primária verde `hsl(153 100% 29%)`, secundária `hsl(174 100% 33%)`.
- Utilitários: `gradient-primary`, `glass`, `shadow-soft`, `shadow-card`, `bg-proof`. Dark mode já tokenizado.
- **Reaproveitar esses tokens** em todas as páginas novas para manter consistência.

**SEO** (`index.html`): meta tags, Open Graph, Twitter, JSON-LD `SoftwareApplication`, script Elfsight global.

---

## 4. Ordem de execução (os Ajustes)

Sequência pensada por **dependência técnica** (fundação primeiro) e **impacto visual** (topo da Home antes das páginas internas). Cada ajuste é autocontido e testável isoladamente.

---

### 🔧 Ajuste 1 — Fundação: arquitetura de páginas + Header/Footer globais
**Objetivo:** criar o esqueleto de navegação que sustenta todo o resto.
**Ações:**
1. Criar layout compartilhado (`Header` + `Footer` globais reutilizáveis em todas as páginas).
2. Refazer o `Header`: menu **Home · Segmentos · Funcionalidades · Planos · Empresa ▾ (Institucional, Blog) · Contato**.
3. Adicionar **botão de Suporte (GLPI)** visível, posicionado **antes** dos ícones de redes sociais.
4. Garantir que **Documentação saia do menu** e fique só no **Footer** (hoje já está no footer — validar e padronizar Footer Global).
5. Criar as rotas + páginas placeholder: `/institucional`, `/segmentos/:slug`, `/funcionalidades`, `/planos`, `/contato` em `App.tsx`.
**Arquivos:** `App.tsx`, `Header.tsx`, `Footer.tsx`, novos `src/pages/*.tsx` (placeholders), possível `src/components/Layout.tsx`.
**Preciso de você:** URL do **suporte GLPI**.
**Entrega:** navegar entre todas as páginas (ainda vazias) já funciona; header/footer aparecem em todas.
**Status:** ✅ **Concluído.**
- Criado `src/components/Layout.tsx` (Header + main + Footer + WhatsAppButton) reutilizado pelas páginas novas.
- `Header.tsx` refeito com navegação client-side via `react-router-dom` (sem reload de página), CTA agora aponta para `/contato`.
- Botão **Suporte** adicionado, visível e posicionado antes das redes sociais, tanto no desktop quanto no menu mobile. **Sem URL/destino por decisão do cliente** — implementado como `<button>` (não `<a>`), com comentário `TODO` no código marcando que a URL do GLPI está pendente.
- `Footer.tsx` atualizado: Links Rápidos agora aponta para as novas páginas (Institucional, Funcionalidades, Planos, Contato) + âncora de Integrações + Documentação (mantida, já estava só no footer).
- Rotas criadas em `App.tsx`: `/institucional`, `/segmentos/:slug`, `/funcionalidades`, `/planos`, `/contato` — todas com página placeholder "Em construção".
- **Página de Blog adiantada** (`/blog`, placeholder) — o conteúdo real via API do WordPress continua reservado para o Ajuste 11, mas a rota e a página já existem desde já.
- **Menu reorganizado em dropdown** para não sobrecarregar a nav: agrupamos **Institucional + Blog** sob um item **"Empresa ▾"**. Menu final: `Home · Segmentos · Funcionalidades · Planos · Empresa ▾ · Contato`. No desktop abre no hover (com animação), no mobile funciona como acordeão dentro do menu.
- Testado no preview: navegação desktop, rota dinâmica `/segmentos/:slug`, dropdown "Empresa" (hover + clique nos itens), acordeão mobile, menu mobile completo e botão Suporte (confirmado sem destino).

**Retoque pós-entrega (URL recebida):** botão Suporte trocado de `<button>` (sem destino) para `<a href="https://suporte.zeeps.com.br/index.php?noAUTO=1" target="_blank">`, no desktop e no mobile.

---

### 🔧 Ajuste 2 — Home: nova Hero (sem robô) + Prova Social legível
**Objetivo:** trocar o "rosto" do site.
**Ações:**
1. **Remover o robô 3D (Spline)** da Hero.
2. Nova **Hero estilo OneDrive**: layout limpo, foco em benefício, com espaço para imagem/vídeo humanizado (usaremos placeholder até você fornecer o material final).
3. **Seção de Confiança** (prova social) reformulada: nº de clientes, satisfação, conformidade legal, volume de dados processados.
4. **Logos maiores**, **sem** o efeito cinza→cor, legibilidade garantida no mobile.
**Arquivos:** `HeroSection.tsx`, `SocialProof.tsx` (reativar/refazer), `LogoCarousel.tsx` (novo), `Index.tsx`.
**Preciso de você:** imagem/vídeo humanizado da Hero (ou aprovo placeholder); números da faixa de confiança (qtd clientes, % satisfação, volume de dados).
**Entrega:** topo da Home renovado e responsivo.
**Status:** ✅ **Concluído.**
- Robô 3D (Spline) removido do `HeroSection.tsx`. Componentes órfãos `splite.tsx` e as dependências `@splinetool/*` ficam para a limpeza geral do Ajuste 10 (conforme já previsto no plano), não removidos agora.
- Nova Hero usa a **imagem real enviada pelo cliente** (mockup da plataforma em tablet/celular) **como imagem de fundo** de tela cheia — `src/assets/hero_mockup.png` (desktop, 2000x966) e `src/assets/hero_mockup_mobile.png` (recorte do lado direito da mesma imagem, 500x636). Título, subtítulo e botões ficam sobrepostos à esquerda, com um overlay em degradê (tom igual ao fundo da própria imagem, `#f4edde`) garantindo legibilidade sobre a foto.
  - *Correção de rumo:* a primeira versão tinha colocado a imagem como elemento flutuante ao lado do texto (duas colunas) — ajustado a pedido para virar imagem de fundo de fato, conforme solicitado.
  - *Bug técnico corrigido durante a implementação:* a imagem de fundo não aparecia por um problema clássico de *stacking context* (`z-index: -10` sem a seção pai ter um `z-index` explícito escapava para trás do fundo branco da página) — corrigido adicionando `z-0` na seção.
- **Carrossel de logos virou sua própria mini seção** (`LogoCarousel.tsx`, novo componente), separado da Hero — fundo branco com borda superior/inferior sutil (`bg-white border-y border-border`), criando um respiro visual entre a Hero (foto) e a Seção de Confiança (fundo esverdeado claro) logo abaixo. Logos maiores (h-10, containers h-16) e **sem o efeito cinza→cor** — sempre coloridos e legíveis, inclusive no mobile.
- `SocialProof.tsx` reescrito como a nova **Seção de Confiança**: 4 métricas (empresas atendidas, satisfação, conformidade LGPD, volume de mensagens processadas), com ícones e números em destaque. Estava importado no `Index.tsx` mas nunca renderizado — corrigido e adicionado após o carrossel de logos.
- Também corrigido um bug pré-existente nos CTAs da Hero (`href="#contato"` e `href="#produto"` sem barra inicial, que quebrariam a navegação vindo de outra página) → agora `/#contato` e `/#produto`.
- Testado no preview: desktop (800px e 1440px) e mobile, sem erros no console.

**Retoque pós-entrega (nova Hero, a pedido do cliente):** a imagem de fundo de tela cheia (`hero_mockup.png` / `hero_mockup_mobile.png`) foi **removida**. A Hero virou layout de 2 colunas sobre um **gradiente horizontal** (`#ffffff` de 0% a 50% → `#EBF1E9` em 100%): texto à esquerda, colagem `hero_collage.png` à direita, sem moldura nem sombra.
- ⚠️ O PNG enviado (`imagem_hero.png`) tinha canal alpha mas com **fundo branco opaco**, o que criava um retângulo branco visível sobre o gradiente. Rodei um *flood fill* a partir das bordas para tornar transparente só o branco conectado à borda (28,8% dos pixels), preservando os brancos internos das fotos e das pílulas. O arquivo em `src/assets/hero_collage.png` é essa versão tratada; o original segue intacto na raiz do projeto.
- Proporção da coluna da imagem aumentada em ~10% **apenas no desktop** (`lg:flex-[1.35]`), sem afetar o mobile.
- 🐛 Corrigido de passagem um bug que eu tinha introduzido em `Features.tsx`: o `key` do map ainda usava `f.title`, campo renomeado para `label`/`lead` numa rodada anterior — gerava `undefined` e um warning de "unique key prop" do React no console.

**Retoque pós-entrega (dados reais do cliente):** `SocialProof.tsx` foi reescrito novamente, trocando as 4 métricas agregadas inventadas por **3 cases de sucesso reais** — Fokus, Grupo Pérola e Milhão Ingredients — cada card com logo, headline, estatística/destaque e os campos Resultado (ou Funcionalidades, no caso da Milhão) e Diferencial. ⚠️ O campo "Impacto" citado no material do cliente não veio com texto próprio para nenhum dos 3 casos, então os cards mostram só 2 campos — se houver um texto específico para "Impacto", é só enviar que eu adiciono.

**Retoque pós-entrega (vídeo de depoimento):** ordem dos cards trocada para **Fokus · Milhão · Grupo Pérola** (Milhão no meio) e, só no card da Milhão, os campos Funcionalidades/Diferencial deram lugar ao **vídeo de depoimento** do cliente (`src/assets/feedback_milhao.mp4`, vertical 1080x1920, ~1min12s), usando o `VideoPlayer` já existente. Altura do vídeo fixada em **360px** (a primeira versão usava `flex-1` + `h-full` e esticava para 530px, forçando os 3 cards a 820px e deixando muito espaço vazio nos laterais — agora os cards ficam em 705px).

**Retoque pós-entrega (autor + modal do vídeo):** no card, o vídeo virou uma **prévia clicável** (primeiro frame + botão de play) com a assinatura **Diogo / Gerente de TI** logo abaixo. O clique abre um **modal** (`Dialog`) com o vídeo em tamanho normal — proporção 9:16 original e `object-contain`, garantindo que **nada seja cortado** — repetindo a assinatura no rodapé do modal. Antes o player ficava embutido no card com `object-cover`, o que cortava as laterais do vídeo vertical.

**Retoque pós-entrega (gráficos animados nos cards):** novo `src/components/CaseCharts.tsx` com dois gráficos de tipos diferentes, ambos em verde da marca e animados ao entrar na tela:
- **Fokus — `AgilidadeGauge`:** arco semicircular (SVG) que preenche até 60%, em degradê `secondary → primary`, com o número **+60%** contando de 0 a 60 no centro do arco.
- **Grupo Pérola — `InadimplenciaBars`:** duas barras horizontais comparando a inadimplência **antes (63%) e depois (33%)**, com larguras proporcionais aos valores e a barra "Depois" em `gradient-primary`.

⚠️ **Nenhum dado foi inventado nos gráficos** — o gauge do Fokus usa o próprio "+60%" do material e as barras do Pérola usam os dois percentuais reais (63% → 33%). Como o material não trazia série histórica, evitei gráficos de linha/evolução que exigiriam valores intermediários fictícios.

🐛 *Detalhe técnico:* a primeira versão usava `whileInView` do framer-motion e as animações não disparavam (os gráficos ficam no rodapé do card, e o observer não acionava de forma confiável). Trocado por `useInView` + `animate` explícito, que funciona de forma previsível.

---

### 🔧 Ajuste 3 — Home: Resumo de Funcionalidades + Interface do Produto
**Objetivo:** apresentar as soluções por benefício e a interface de forma dinâmica.
**Ações:**
1. ✅ Reescrever `Features` (6 soluções) em **linguagem de benefício** — "Agentes de IA que vendem", "Sua equipe inteira, um único WhatsApp", "O cliente certo, no setor certo", "Decisões com dados, não com achismo", "Follow-up que nunca esquece", "Sua operação, do seu jeito".
2. ✅ Seção "Interface intuitiva" (`ProductShowcase.tsx`): **6 tópicos em menu + accordion interativo** — ao clicar num botão/tópico, a descrição expande à esquerda (estilo accordion) e o botão fica destacado. Imagem do dashboard à direita não muda de arquivo por enquanto (placeholder `dashboard_imagem.png` — estrutura pronta pra receber prints por tópico depois).
3. ✅ **Vídeo "Conheça a Zeeps"** embaixo com glow animado em gradiente verde — pronto pra quando você fornecer o vídeo real (`src/assets/conheça.mp4` referenciado, usando `dashboard_imagem.png` como poster).
**Arquivos:** `Features.tsx` (6 cards reescritos), `ProductShowcase.tsx` (6 tópicos + accordion + video player), `Index.tsx`.
**Preciso de você:** prints reais das telas por tópico pra trocar o `dashboard_imagem.png` placeholder — estrutura pronta pra receber (basta trocar o caminho na linha 153 ou criar um array de imagens por tópico).
**Entrega:** ✅ **Concluído** — funcionalidades com apelo comercial + interface interativa com 6 tópicos clicáveis.
**Status:** ✅ **Concluído**
- `Features.tsx`: 6 cards reescritos com linguagem de benefício, ícones mantidos, cores de gradiente em padrão.
- `ProductShowcase.tsx`: Reescrito para 6 tópicos dinâmicos, menu de botões no topo (com wrap em mobile), accordion à esquerda com descrições que expandem, imagem placeholder à direita, auto-rotation a cada 6 segundos (manual ao clicar também). Video "Conheça a Zeeps" com glow embaixo.
- Layout testado em desktop (1440px) — botões em 2 linhas (3 em cima, 3 embaixo), accordion bem legível, imagem e vídeo responsivos.

**Retoques pós-entrega:**
- Os botões/pills do topo foram removidos a pedido do cliente — os tópicos continuam trocando normalmente (clique ou auto-rotação) só pelo accordion à esquerda.
- **Prints reais recebidos**: `dashboard_imagem.png` (placeholder único) foi trocado por **6 screenshots reais da plataforma**, um por tópico (`showcase_agentes_ia.jpg`, `showcase_multi_atendentes.jpg`, `showcase_roteamento.jpg`, `showcase_analytics.jpg`, `showcase_followup.jpg`, `showcase_integracoes.jpg`). A imagem à direita agora troca com um **crossfade animado** (fade + leve zoom, via `AnimatePresence`/`framer-motion`) sincronizado com o tópico ativo do accordion.
- Seção movida de lugar na Home a pedido do cliente: `ProductShowcase` ("Todas as soluções em uma interface simples") agora vem **antes** de `SocialProof` ("Resultados reais de quem já usa a Zeeps"), não depois.

---

### 🔧 Ajuste 4 — Home: Segmentação + Página de Segmentos (template)
**Objetivo:** vitrine de segmentos na Home que abre subpáginas detalhadas (modelo RD Station).
**Ações:**
1. ✅ Seção de **cards de Segmentos** na Home; clique leva a `/segmentos/:slug`.
2. ✅ Criar o **template reaproveitável** de segmento: Hero (título, subtítulo, imagem do setor, CTA) → Solução (título, subtítulo, **4 cards**) → Resultados → Footer.
3. ✅ Popular com os **5 segmentos reais** (dor + solução + imagens fornecidas pelo cliente).
**Arquivos:** `Index.tsx` (nova seção), `src/components/Segmentos.tsx` (novo), `src/pages/Segmento.tsx` (template), `src/data/segmentos.ts` (conteúdo), `Header.tsx`, `Footer.tsx`.
**Entrega:** ✅ **Concluído** — Home lista segmentos; cada card abre uma subpágina no template padrão.
**Status:** ✅ **Concluído**
- `src/data/segmentos.ts` (novo): todo o conteúdo dos 5 segmentos em um só lugar (nome, imagem, hero, dor, 4 cards de solução, resultados, descrição de SEO). Adicionar/editar segmento = mexer só neste arquivo.
  - Segmentos e slugs: **Agronegócio** (`/segmentos/agronegocio`), **Atacado e Indústria** (`/segmentos/atacado-industria`), **Varejo e Autopeças** (`/segmentos/varejo-autopecas`), **Serviços e Tecnologia** (`/segmentos/servicos-tecnologia`), **Saúde e Educação** (`/segmentos/saude-educacao`).
  - Os trechos que se repetiam **igual em todos os 5 segmentos** no texto enviado (acompanhamento em tempo real das conversas do vendedor, acompanhamento das negociações do comprador com o fornecedor e ligações com áudio + transcrição, todos sob LGPD) foram extraídos para uma constante `recursosComuns` e viraram uma **faixa própria** no template ("Rastreabilidade e LGPD em toda a operação"), para as 5 páginas não parecerem copy-paste uma da outra.
- `src/components/Segmentos.tsx` (novo): seção `#segmentos` na Home, entre Funcionalidades e Planos. 5 cards com foto real do setor (imagens fornecidas), nome com ícone sobre a imagem e chamada curta + 6º card "Não encontrou o seu segmento?" com CTA para `/contato`.
- `src/pages/Segmento.tsx` (reescrito, era placeholder "Em construção"): template padrão → **Hero** (badge do segmento, título com destaque em gradiente, subtítulo, imagem do setor, CTA "Conhecer a solução completa" + "Ver funcionalidades") → **O desafio** (a dor, com 3 pontos) → **A solução** (4 cards, como pedido no documento) → **Rastreabilidade e LGPD** (faixa comum) → **Resultados** → **Outros segmentos** (navegação cruzada) → **CTA final**. Slug inválido cai no 404.
- `Header.tsx`: o item "Segmentos" deixou de ser âncora e virou **dropdown** com os 5 segmentos + "Ver todos os segmentos" (âncora para a seção da Home). O estado dos dropdowns passou de booleano para o label do menu aberto — antes, com dois dropdowns na nav, "Segmentos" e "Empresa" abririam juntos.
- `Footer.tsx`: link "Segmentos" adicionado aos Links Rápidos.
- ⚠️ **Resultados sem número:** o documento previa "métricas de ROI", mas nenhum número por segmento foi fornecido. A seção está montada com resultados **qualitativos** (o que muda na operação), derivados do próprio texto enviado — nada inventado. Quando os números reais chegarem, é só trocar em `resultados` no arquivo de dados (há um `TODO` marcando isso).

---

### 🔧 Ajuste 5 — Home: Vitrine de Planos + Integrações (pop-up estilo TOTVS)
**Objetivo:** resumo de planos na Home e árvore de integrações interativa.
**Ações:**
1. ✅ **Vitrine de Planos** resumida na Home (preços-resumo + garantia de reembolso) com link para `/planos`.
2. ✅ Integrações: ao **clicar numa integração** (ex.: um ERP), abre **pop-up** detalhando funcionalidades nativas prontas (ex.: régua de cobrança, estoque, financeiro) — modelo TOTVS.
**Arquivos:** `Index.tsx` (nova seção `PlanosPreview`), `PlanosPreview.tsx` (novo), `Integrations.tsx`, `src/data/integracoes.ts` (novo).
**Preciso de você:** resumo de preços/planos reais e validação das funcionalidades nativas por integração (ambos estão como placeholder, ver TODOs no código).
**Entrega:** ✅ **Concluído** — Home com prévia de planos + integrações clicáveis com detalhe.
**Status:** ✅ **Concluído**
- `PlanosPreview.tsx` (novo componente): 3 cards de planos (Essencial, Profissional — destacado como "Mais popular", Empresarial), cada um com preço, descrição, lista de recursos e CTA para `/planos`. Selo de "Garantia de reembolso" acima dos cards. Link final para ver todos os planos.
  - ⚠️ **Preços e limites são placeholder/inventados** (R$ 197, R$ 397, "Sob consulta", quantidade de atendentes etc.) — marcados com `TODO` no código, pendentes dos valores reais.
- `src/data/integracoes.ts` (novo arquivo de dados): centraliza as 8 integrações já existentes (TOTVS, RD Station, Meta, Shopify, Vtex, Bling, Tiny, Mercado Livre) com categoria, descrição e lista de funcionalidades nativas por integração.
  - ⚠️ **Categorias, descrições e funcionalidades nativas são placeholder/inventadas** com base no que cada plataforma tipicamente oferece — marcadas com `TODO`, pendentes de validação com o cliente.
- `Integrations.tsx`: os cards de logo viraram `<button>` clicáveis; ao clicar, abre um **pop-up (Dialog)** com logo, categoria, descrição e lista de funcionalidades nativas com checkmarks — modelo TOTVS conforme pedido. Testado clicando em TOTVS e RD Station, conteúdo muda corretamente por integração.
- **Bug pré-existente corrigido de passagem:** o carrossel de logos (`LogoCarousel.tsx`, criado no Ajuste 2) não tinha `overflow-hidden` no wrapper da faixa de logos, o que fazia a página inteira ganhar ~7500px de largura de scroll horizontal (visível como uma barra de rolagem horizontal sutil no rodapé de várias telas). Corrigido adicionando `overflow-hidden`.

**Retoque visual pós-entrega (a pedido do cliente):**
- **Popup de integração redesenhado:** logo saiu da caixa com moldura empilhada acima do título e virou uma imagem simples (sem borda/fundo) posicionada **ao lado esquerdo** da categoria + título, com a descrição embaixo — visual mais leve, menos "formulário". **Mantido.**
- ~~Seção "Onde o seu negócio estiver..." redesenhada como hub de conexões (logo com anel pulsante + linhas conectoras animadas até cada integração)~~ — **revertido a pedido do cliente**, não gostou do resultado. Seção voltou ao layout original (grid estático simples, sem linhas/anel).

---

### 🔧 Ajuste 6 — Página Institucional (`/institucional`)
**Objetivo:** montar a página institucional completa.
**Ações:** Hero/Sobre a Zeeps · **Nossos Números** · **Pilares e Valores** · **Trajetória** (visão de liderança até 2028) · Footer Global. Reaproveitar conteúdo do atual `About.tsx` + feed Instagram.
**Arquivos:** `src/pages/Institucional.tsx`, migrar partes de `About.tsx`.
**Preciso de você:** números/conquistas, pilares/valores e marcos da trajetória.
**Entrega:** ✅ **Concluído** — página institucional completa em `/institucional`.
**Status:** ✅ **Concluído**
- `src/pages/Institucional.tsx` (reescrito do zero): Hero ("De um problema interno a uma plataforma completa") → **Nossos Números** (4 stats) → **Pilares e Valores** (4 cards) → **Trajetória** (timeline vertical 2018→2026 + visão 2028) → feed do Instagram (reaproveitado do `About.tsx`).
- **Trajetória** montada com o texto real que você mandou (2018 na íntegra; 2020 veio cortado em "Integração oficial ..." — completei de forma plausível com "...com a API do WhatsApp Business", mas fica pendente confirmar a redação exata). Os anos **2022, 2023, 2025 e 2026 são inventados** a seu pedido, marcados com `TODO` no código. Adicionei também um marco de **2028** com visual diferenciado (contorno tracejado, badge "Visão") representando a meta de liderança já mencionada em `About.tsx` — não é fato consumado, é aspiracional.
  - 2026 veio marcado com badge "Hoje" (coerente com a data atual).
- ⚠️ **Nossos Números eram placeholder/inventados** (2018 fundação, 45+ colaboradores, 12 estados, 2 escritórios) e **Pilares e Valores** foram derivados do texto de missão que já existia em `About.tsx` (Transparência, Inovação contínua, Foco no cliente, Simplicidade).
  - **Retoque pós-entrega (dados reais):** os 4 stats inventados foram trocados pelos **2 números reais** fornecidos (+22 mil mensagens processadas, +6,5 mil atendimentos), grid ajustado de 4 para 2 colunas. Abaixo, adicionadas **2 frases institucionais** também fornecidas pelo cliente (parceria oficial Meta® / atuação em todo o país e segmentos). Pilares e Valores permanecem como estavam (dado não fornecido nesta rodada).
  - **Retoque pós-entrega (imagem real):** a Hero virou layout de 2 colunas — texto à esquerda, imagem `institucional_hero.png` (aperto de mão com moldura da logo Zeeps, fornecida pelo cliente) à direita.
- `About.tsx` foi **removido** (conteúdo/estilo migrado para a nova página) e sua seção tirada da Home (`Index.tsx`) — a Home não tinha mais motivo para manter uma seção "Sobre" completa agora que existe a página dedicada.
- Testado no preview: navegação Home → Institucional, timeline, badges "Hoje"/"Visão" e feed do Instagram carregando normalmente, sem erros no console.

---

### 🔧 Ajuste 7 — Página de Funcionalidades (`/funcionalidades`)
**Objetivo:** detalhamento profundo das ferramentas.
**Ações:** Page Hero · blocos **Agentes de IA · Multi-atendentes · Integrações · Analytics · Automação · Segurança e Conformidade** · **FAQ Geral** · CTA Final · Footer. Cada bloco com botão **"Como funciona"** que abre **modal leve com GIF/vídeo curto** (placeholder até material do cliente).
**Arquivos:** `src/pages/Funcionalidades.tsx`, componente `HowItWorksModal.tsx`, reaproveitar `FAQ.tsx`.
**Preciso de você:** GIFs/vídeos curtos das telas (ou aprovo placeholders).
**Status:** ✅ **Concluído**
- `src/pages/Funcionalidades.tsx` (reescrito): Page Hero → **6 seções alternadas** (uma por bloco: Agentes de IA, Multi-atendentes, Integrações, Analytics, Automação, Segurança e Conformidade), texto de um lado e um elemento visual ilustrativo do outro, alternando lado a cada seção (zig-zag) — cada bloco com ícone, subtítulo, descrição, lista de 4 capacidades com checkmark e botão **"Como funciona"** → CTA Final (Falar com consultor / Ver planos) → **FAQ geral reaproveitado** (`<FAQ />`, sem alterações) → Footer via `Layout`.
- `src/components/FeatureVisuals.tsx` (novo): 6 elementos visuais compostos em HTML/SVG/framer-motion (não são screenshots reais), um por bloco — a pedido específico, sem usar fotos de banco de imagens:
  - **Agentes de IA:** mockup de chat com bolhas de mensagem e indicador de "digitando".
  - **Multi-atendentes:** logo da Zeeps no centro com anel pulsante, conectada por linhas animadas a 4 ícones ao redor — "Atendimento", "Vendas", "Suporte", "Financeiro".
  - **Integrações:** 3 chips (ERP, CRM, E-commerce) convergindo por linhas curvas animadas até um card da Zeeps — layout propositalmente diferente do hub de Multi-atendentes.
  - **Analytics:** mini dashboard mockado (browser chrome, 2 KPIs e gráfico de barras que cresce ao entrar na tela).
  - **Automação:** fluxo vertical de 3 passos conectados (mensagem recebida → regra aplicada → setor certo) com badge "Automático" pulsante.
  - **Segurança e Conformidade:** escudo central com anel tracejado giratório e 3 badges flutuantes (Criptografia, LGPD, Backup).
- `src/components/HowItWorksModal.tsx` (novo): modal (Dialog) reutilizável que recebe o bloco selecionado e mostra ícone + título + subtítulo + `VideoPlayer`.
  - ⚠️ **Vídeo do modal é um placeholder compartilhado** entre os 6 blocos (`ferramenta.mp4` + poster `configurações_zeeps.png`, já usados em outras seções do site) — marcado com `TODO` no código, pendente de GIFs/vídeos curtos reais por funcionalidade.
- Testado no preview: as 6 seções alternam de lado corretamente, todos os elementos visuais renderizam e animam, clique em "Como funciona" abre o modal com o vídeo certo, FAQ e footer aparecem no final da página sem erros no console.

**Retoque pós-entrega (a pedido do cliente):**
- Cada seção de bloco ganhou `id={slug}` (ex: `#integracoes`, `#analytics`) para poder ser linkada a partir de outras páginas.
- Adicionado um `useEffect` que rola manualmente até a âncora quando a página carrega com um hash na URL (ex: `/funcionalidades#agentes-ia`) — o scroll automático nativo do navegador não é confiável aqui porque o conteúdo é renderizado pelo React só depois do carregamento inicial da página.
- Na seção **Integrações**, abaixo do elemento visual, adicionado um grid com os ícones/logos das 8 integrações nativas já usadas na Home (`src/data/integracoes.ts` — TOTVS, RD Station, Meta, Shopify, Vtex, Bling, Tiny, Mercado Livre).
- Testado o fluxo completo: clicar em "Saiba mais" na tabela de Planos navega para `/funcionalidades#<slug>` e rola automaticamente até a seção certa.
- **Retoque pós-entrega (imagem real):** Page Hero virou layout de 2 colunas — texto à esquerda, imagem `funcionalidades_hero.png` (time trabalhando com a marca Zeeps) à direita. ⚠️ Cliente pediu pra trocar essa imagem por outra enviada na conversa — ver observação no fim do documento, pendente de receber o arquivo numa pasta acessível.

---

### 🔧 Ajuste 8 — Página de Planos e Preços (`/planos`)
**Objetivo:** página comercial completa.
**Ações:** Page Hero Comercial com **toggle mensal/anual** · **Cards de Preço** (valores, limites, público-alvo, garantia) · **Comparativo Detalhado** (matriz recurso × plano) · **FAQ de Planos** (cancelamento, multas, limites) · CTA Final · Footer.
**Arquivos:** `src/pages/Planos.tsx`, `src/data/planos.ts`.
**Preciso de você:** tabela de preços completa, limites por plano e matriz de recursos.
**Status:** ✅ **Concluído**
- `src/pages/Planos.tsx` (reescrito): Page Hero Comercial → **Cards de Preço** (Básico, Intermediário — "Mais popular", Business) com valor mensal, setup, público-alvo e principais limites → **Comparativo Detalhado** (tabela com as 15 linhas de recursos × 3 planos, coluna do Intermediário destacada) → **FAQ de Planos** (5 perguntas sobre setup, fidelidade/cancelamento, excedente de franquia de IA, troca de plano e o Business sob consulta) → CTA Final → Footer via `Layout`.
- **Todos os preços, limites e recursos são os valores reais** fornecidos por você via `Planos.jpg` e `SITE - integrações e planos.pdf` (Setup R$ 3.190/R$ 3.490/sob consulta, Mensal R$ 813,50/R$ 1.391,50/sob consulta, limites de usuários, Agentes de IA, redes sociais e integração com ERP por plano) — nenhum dado inventado nesta página.
- ⚠️ **Toggle mensal/anual não foi implementado**: o material recebido só tem valores de cobrança mensal, sem tabela de desconto anual — pendente de definição sua se a Zeeps quer oferecer opção anual (e com qual desconto) antes de eu adicionar esse toggle.
- ⚠️ **Respostas da FAQ sobre fidelidade/cancelamento e excedente de franquia de IA são propositalmente genéricas** (direcionam para "fale com um consultor") — marcado com `TODO` no código, pendente das condições contratuais exatas para deixar as respostas mais específicas.
- `src/components/PlanosPreview.tsx` (teaser da Home, Ajuste 5): **atualizado com os mesmos dados reais** desta página (nomes, preços e limites), substituindo os valores inventados anteriormente, e removida a alegação de "garantia de reembolso" que não constava no material do cliente.
- Testado no preview: os 3 cards, a tabela comparativa completa (rolagem horizontal em telas menores) e o acordeão de FAQ funcionam corretamente, sem erros no console.

**Retoque pós-entrega (a pedido do cliente):**
- Linhas do comparativo que correspondem a um bloco de `/funcionalidades` (Agentes de IA, Integração com ERP, Redes sociais, Números de WhatsApp, Usuários simultâneos, Dashboard de atendentes online/offline, Fluxos de chatbot, Pesquisa de NPS, Dashboard de atendimentos) agora têm um link **"Saiba mais →"** que leva direto para a seção correspondente na página de Funcionalidades.

---

### 🔧 Ajuste 9 — Página de Contato (`/contato`)
**Objetivo:** página de captura dedicada.
**Ações:** Page Hero de acolhimento · **Formulário de Captura** (reaproveitar lógica do `ContactForm.tsx` — webhook n8n + WhatsApp) · Footer.
**Arquivos:** `src/pages/Contato.tsx`, reaproveitar `ContactForm.tsx`.
**Status:** ✅ **Concluído**
- `src/pages/Contato.tsx` (reescrito): Page Hero de acolhimento ("Vamos conversar sobre o seu atendimento") com 3 pontos de confiança (Conversa sem compromisso, Resposta rápida, Sem letras miúdas) → `<ContactForm />` reaproveitado sem alterações (mesmo webhook n8n + redirecionamento pro WhatsApp) → Footer via `Layout`.
- `ContactForm.tsx` continua também na Home (seção `#contato`) — mesmo padrão de "teaser na Home + página dedicada" já usado em Funcionalidades e Planos.
- Testado no preview: hero, formulário e footer renderizam corretamente, sem erros no console.

**Retoque pós-entrega (a pedido do cliente):** removida a imagem de fundo (`contato.png`) atrás do `ContactForm` — trocada por um gradiente branco/verde com blobs suaves e duas ondas SVG animadas (drift horizontal em loop) na base da seção. Como o componente é compartilhado, o efeito vale tanto para `/contato` quanto para a seção de contato da Home.

---

### 🔧 Ajuste 10 — Humanização final, robô-mascote, depoimentos reais e SEO
**Objetivo:** acabamento e coerência.
**Ações:**
1. **Robô como mascote de suporte** (pop-up/assistente secundário), não mais protagonista.
2. Substituir **depoimentos fake** por reais (fotos e nomes de clientes).
3. Passada de **humanização** (imagens de pessoas reais onde couber).
4. Limpeza de componentes órfãos e **SEO por página** (title/description/OG por rota).
**Arquivos:** `Testimonials.tsx`, `WhatsAppButton.tsx`/novo mascote, `index.html` + meta por rota, remoção de código morto.
**Preciso de você:** depoimentos reais (texto, nome, cargo, foto/logo) e imagens humanizadas.
**Status:** 🟡 **Parcialmente concluído** — itens 1 e 4 feitos; itens 2 e 3 bloqueados por falta de material.
1. **Robô-mascote** ✅ — `src/components/SupportMascot.tsx` (novo): pop-up amigável ("Precisa de ajuda? 👋") com avatar do robô, que aparece perto do botão de WhatsApp após alguns segundos (uma vez por sessão, via `sessionStorage`) e leva pro WhatsApp ao clicar. Botão de WhatsApp (`WhatsAppButton.tsx`) mantido como estava — o mascote é um elemento adicional, não substitui o CTA já validado.
2. **Depoimentos reais** ⏳ **bloqueado** — `Testimonials.tsx` continua com os 9 depoimentos fictícios (nomes e fotos de banco de imagens), agora marcados com `TODO` explícito no código. Preciso que você me passe os depoimentos reais (texto, nome, cargo, foto) pra trocar.
3. **Humanização geral** ⏳ **bloqueado** — não avancei nessa frente por não ter fotos reais de pessoas/equipe além da já usada no Institucional; aguardando material.
4. **Limpeza de código morto + SEO por página** ✅
   - Removido `src/components/ui/splite.tsx` (wrapper do robô 3D Spline, órfão desde que o Hero mudou) e desinstaladas as dependências `@splinetool/react-spline` e `@splinetool/runtime` do `package.json`.
   - `src/components/Seo.tsx` (novo): componente leve que ajusta `document.title`, `description`, `og:*`, `twitter:*`, `canonical` e `robots` por rota via `useEffect` (sem precisar de lib como react-helmet). Adicionado em todas as páginas: Home, Institucional, Funcionalidades, Planos, Contato, Blog, Segmento (dinâmico por slug), Privacidade, Obrigado e 404 (as duas últimas com `noindex`).
   - Testado no preview: título da aba e meta tags mudam corretamente por rota, tanto em navegação cheia quanto client-side; mascote aparece, fecha e não reaparece na mesma sessão; sem erros no console.

---

### 🔧 Ajuste 11 — Página de Blog (`/blog`), integrada via API do WordPress
**Objetivo:** criar uma página de blog simples, que puxa os posts direto de um WordPress via API (WordPress como CMS "headless", sem duplicar conteúdo manualmente no site).
**Ações:**
1. Criar `/blog`: listagem de posts (capa, título, resumo, data), consumindo a **WordPress REST API** (`/wp-json/wp/v2/posts`).
2. Criar `/blog/:slug`: página de post individual, renderizando o conteúdo vindo da API.
3. Adicionar **Blog** ao menu do Header e/ou ao Footer (a definir junto com você quando chegarmos nesse ajuste).
4. SEO básico por post (title/description a partir dos dados do próprio WordPress).
**Arquivos:** `src/pages/Blog.tsx`, `src/pages/BlogPost.tsx`, `src/lib/wordpress.ts` (funções de consumo da API), `App.tsx` (novas rotas), `Header.tsx`/`Footer.tsx` (link).
**Preciso de você:** URL base do WordPress (ex.: `https://blog.zeeps.com.br`) usado como fonte da API.
**Entrega:** página de blog listando os posts reais do WordPress, com página de leitura individual.
**Status:** ✅ **Concluído** (front-end pronto — falta o WordPress ir ao ar)
- `src/lib/wordpress.ts` (novo): funções `fetchPosts` (listagem, paginada, com `_embed=true` pra trazer a imagem de capa numa única chamada) e `fetchPostBySlug` (post individual), consumindo `https://blog.zeeps.com.br/wp-json/wp/v2/posts` — URL definida por você, ainda não publicada.
- `src/pages/Blog.tsx` (reescrito): Page Hero → grid de cards (capa, data, título, resumo, "Ler mais →") → estados de **loading** (skeleton), **vazio** ("nenhum post publicado ainda") e **erro** (mensagem amigável avisando que o blog ainda não está no ar, sem quebrar a página).
- `src/pages/BlogPost.tsx` (novo): página de post individual — título, data, imagem de capa e conteúdo renderizado via `dangerouslySetInnerHTML` (conteúdo vem do WordPress do próprio cliente, fonte confiável), estilizado com `@tailwindcss/typography` (o plugin já estava instalado no projeto mas faltava registrar no `tailwind.config.ts` — corrigido). Mesmos estados de loading/erro/não encontrado da listagem.
- Rota `/blog/:slug` adicionada no `App.tsx`. Link **Blog** já existia no Header (dropdown "Empresa") e foi adicionado também no Footer (Links Rápidos).
- SEO por post via `<Seo />` (reaproveitando o componente do Ajuste 10), usando título/resumo do próprio WordPress; páginas de erro/não encontrado marcadas `noindex`.
- ⚠️ **O WordPress ainda não está publicado** em `blog.zeeps.com.br` — testado no preview e confirmado que, enquanto isso, a página mostra o aviso "O blog ainda não está no ar" de forma elegante (sem tela em branco ou erro feio), tanto na listagem quanto no post individual. Assim que o WordPress subir, os posts aparecem automaticamente, sem precisar mexer no código.

> Combinado: este era o **último ajuste numerado** da fila (1 a 11) — falta retomar o **Ajuste 4** (Segmentação), combinado para ser feito por último.

---

### 🗃️ Seção desativada (guardada para possível retorno) — "O que nossos parceiros dizem"

A pedido do cliente, a seção de depoimentos foi **removida da Home**, mas **nada foi apagado**: o componente continua inteiro em `src/components/Testimonials.tsx`, apenas não é mais renderizado.

**Como ela era:** seção `#depoimentos` com fundo `bg-proof`, título "O que nossos parceiros dizem" + subtítulo "A revolução na comunicação empresarial", 9 depoimentos distribuídos em **3 colunas que rolam verticalmente em loop infinito** (velocidades diferentes: 15s, 19s e 17s), com máscara de degradê no topo/base, cards com avatar redondo + nome + cargo, hover que levanta o card, e um CTA "Falar com consultor" ao final. No mobile mostrava 1 coluna; a 2ª aparecia em `md` e a 3ª em `lg`.
⚠️ Os 9 depoimentos ali são **fictícios** (nomes e fotos de banco de imagens) — se a seção voltar, o ideal é trocar pelos depoimentos reais antes de publicar.

**Como trazer de volta:** em `src/pages/Index.tsx`, descomentar duas linhas — o `import Testimonials from "@/components/Testimonials";` e o `<Testimonials />` que fica entre `<Integrations />` e `<ContactForm />`. Ambas estão marcadas com comentário explicando isso no próprio arquivo.

---

### 🎨 Retoque visual pós-entrega — elementos decorativos da marca

Duas variantes fornecidas pelo cliente (fragmentos em verde da marca), usadas como decoração de canto (baixa intrusão, atrás do conteúdo). A orientação da imagem determina em qual canto ela é aplicada:
- `elements_green.png` → cantos **inferior direito**
- `elements_green_top_left.png` (arquivo original: `elements_green - esquerda_superior.png`) → cantos **superior esquerdo**

Posições atuais:
- Home → "Recursos Exclusivos" / `Features.tsx` — superior esquerdo (variante top-left)
- Home → "Todas as soluções em uma interface simples" / `ProductShowcase.tsx` — superior esquerdo (variante top-left)
- Home → "Resultados reais de quem já usa a Zeeps" / `SocialProof.tsx` — inferior direito
- Home → seção de Planos / `PlanosPreview.tsx` — inferior direito
- `/planos` → Page Hero — superior esquerdo (variante top-left)
- `/planos` → "Comparativo detalhado" — inferior direito

Também nesta rodada: a ordem das seções na Home foi trocada (`ProductShowcase` antes de `SocialProof`), e as heroes de `/funcionalidades` e `/institucional` ganharam imagem real do cliente ao lado do texto (`funcionalidades_hero.png` e `institucional_hero.png`).

⚠️ **Pendente:** o cliente enviou uma nova versão da imagem da Hero de Funcionalidades diretamente no chat, mas ela não chega como arquivo acessível no projeto (só o conteúdo visual). Assim que ele salvar o arquivo em `unified-connect/src/assets/` (ou em qualquer pasta do projeto), eu troco.

---

## 5. Materiais que vou precisar de você (consolidado)

Nada disso trava o início — uso **placeholders** e você substitui depois. Mas quanto antes tiver, melhor:

- [x] URL do **Suporte GLPI** (Ajuste 1) — ✅ **resolvido**: `https://suporte.zeeps.com.br/index.php?noAUTO=1`, link ativo no Header (desktop e mobile).
- [x] Imagem da Hero (Ajuste 2) — ✅ **resolvido**, usada a imagem enviada (mockup da plataforma), recortada em versão desktop e mobile.
- [x] Números da **faixa de confiança** (Ajuste 2) — ✅ **resolvido**: a seção virou 3 cases de sucesso reais (Fokus, Grupo Pérola, Milhão Ingredients) com logo, estatística, resultado e diferencial de cada um, substituindo os números agregados inventados.
- [x] **Prints** das telas por tópico da interface (Ajuste 3) — ✅ **resolvido**: 6 screenshots reais da plataforma, um por tópico da seção "Todas as soluções em uma interface simples".
- [x] **Lista de segmentos** + textos/imagens por segmento (Ajuste 4) — ✅ **resolvido**: 5 segmentos com dor, solução e imagem do setor (Agronegócio, Atacado e Indústria, Varejo e Autopeças, Serviços e Tecnologia, Saúde e Educação). Falta só número/ROI por segmento para a seção de Resultados.
- [x] Funcionalidades nativas por **integração** (Ajuste 5) — ✅ **resolvido** via `SITE - integrações e planos.pdf` (TOTVS Protheus/Winthor, RD CRM/MKT, Pipedrive, Ploomes, Jira, GLPI, API/Webhook/BD, IA nativa vs. IA própria do cliente)
- [x] **Números/pilares/trajetória** institucionais (Ajuste 6) — ✅ **parcialmente resolvido**: "Nossos números" agora usa os valores reais (+22 mil mensagens processadas, +6,5 mil atendimentos) + 2 frases institucionais (parceria Meta®, atuação nacional). Pilares e trajetória continuam com o conteúdo definido no Ajuste 6.
- [ ] **GIFs/vídeos** curtos das telas (Ajuste 7)
- [x] **Tabela de preços** e matriz de recursos por plano (Ajuste 8) — ✅ **resolvido** via `Planos.jpg` + PDF (Básico, Intermediário, Business — setup, mensalidade e recursos por plano)
- [ ] **Depoimentos reais** — texto, nome, cargo, foto/logo (Ajuste 10)
- [x] **URL base do WordPress** (Ajuste 11) — ✅ **resolvido**: `blog.zeeps.com.br` (ainda não publicado pelo cliente, mas já integrado no código; posts aparecem automaticamente assim que o WordPress subir)

> Observação do próprio documento: vídeos e prints da plataforma são de responsabilidade do cliente fornecer, ou cotar produção com a equipe Catalisa.

> Lista formatada para envio ao cliente (materiais de imagem/vídeo): [`MATERIAIS_NECESSARIOS_CLIENTE.md`](../MATERIAIS_NECESSARIOS_CLIENTE.md)

---

## 6. Princípios de execução

- **Consistência visual:** reusar tokens/utilitários já existentes (`gradient-primary`, cores, Sansation, sombras).
- **Mobile-first:** cada ajuste validado no mobile (o `.txt` reforça legibilidade mobile).
- **Sem inventar dados de negócio:** preço, número, segmento, funcionalidade nativa → placeholder explícito ou pergunto a você. Nunca "chuto".
- **Testável a cada passo:** ao final de cada ajuste, rodo o preview e mostro o resultado antes de seguir.
- **Placeholder marcado:** todo conteúdo provisório fica sinalizado para troca fácil depois.

---

## 7. Status

| Ajuste | Descrição | Status |
|--------|-----------|--------|
| 1 | Fundação: arquitetura + Header/Footer | ✅ Concluído |
| 2 | Home: Hero + Prova Social | ✅ Concluído |
| 3 | Home: Funcionalidades + Interface | ⬜ Pendente |
| 4 | Home: Segmentação + template Segmentos | ✅ Concluído |
| 5 | Home: Planos + Integrações (TOTVS) | ⬜ Pendente |
| 6 | Página Institucional | ⬜ Pendente |
| 7 | Página Funcionalidades | ⬜ Pendente |
| 8 | Página Planos e Preços | ⬜ Pendente |
| 9 | Página Contato | ⬜ Pendente |
| 10 | Humanização + mascote + SEO | ⬜ Pendente |
| 11 | Blog via API do WordPress | ⬜ Pendente |
