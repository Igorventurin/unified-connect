import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Check, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { getSegmento, recursosComuns, segmentos } from "@/data/segmentos";

// Template reaproveitável de segmento (Ajuste 4 no PLANEJAMENTO_AJUSTES.md):
// Hero → O desafio → Solução (4 cards) → Recursos comuns → Resultados →
// Outros segmentos → CTA. Todo o conteúdo vem de `src/data/segmentos.ts`.
const Segmento = () => {
  const { slug } = useParams();
  const segmento = getSegmento(slug);

  // Cada segmento é uma rota distinta: sobe a página ao trocar de slug.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!segmento) return <NotFound />;

  const outros = segmentos.filter((s) => s.slug !== segmento.slug);

  return (
    <Layout>
      <Seo
        title={segmento.fullName}
        description={segmento.seoDescription}
        path={`/segmentos/${segmento.slug}`}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
                <segmento.icon className="w-4 h-4" />
                {segmento.name}
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                {segmento.heroTitle}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {segmento.heroHighlight}
                </span>
              </h1>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                {segmento.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contato"
                  className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-bold shadow-soft transition-all hover:scale-105 hover:opacity-90 inline-flex items-center justify-center gap-2"
                >
                  Conhecer a solução completa
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/funcionalidades"
                  className="border-2 border-border text-foreground px-8 py-4 rounded-xl text-base font-semibold transition-all hover:border-primary/40 hover:scale-105 inline-flex items-center justify-center"
                >
                  Ver funcionalidades
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 w-full"
            >
              <img
                src={segmento.image}
                alt={segmento.imageAlt}
                className="w-full h-auto rounded-[2rem] shadow-card object-cover aspect-[3/2]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* O desafio (dor) */}
      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto rounded-[2rem] border border-border/60 bg-white dark:bg-zinc-900 shadow-card p-8 lg:p-10"
          >
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </span>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">O desafio</h2>
                <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                  {segmento.dor.desc}
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {segmento.dor.pontos.map((ponto) => (
                <li
                  key={ponto}
                  className="rounded-2xl bg-muted/60 border border-border/50 px-5 py-4 text-[15px] leading-relaxed text-foreground/80"
                >
                  {ponto}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Solução para o segmento */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-background via-muted/50 to-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 lg:mb-14"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              A solução
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Como a Zeeps resolve isso em{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {segmento.name}
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">{segmento.solucao.subtitle}</p>
          </motion.div>

          {/*
            Grid "jogo da velha" com efeito de vidro: o container é um bloco só,
            e o que separa os quadrantes são as próprias linhas do grid — o
            `gap-px` deixa o gradiente do pai aparecer entre os quadrantes,
            enquanto cada quadrante é translúcido com `backdrop-blur`.
          */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Luz colorida por trás do vidro — é ela que o blur "borra". */}
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-[3.5rem] bg-[radial-gradient(circle_at_18%_18%,rgba(0,148,81,0.42),transparent_58%),radial-gradient(circle_at_85%_80%,rgba(0,168,150,0.38),transparent_58%),radial-gradient(circle_at_60%_40%,rgba(0,148,81,0.16),transparent_60%)] blur-[60px]"
            />

            <div className="rounded-[2.5rem] p-px bg-gradient-to-br from-primary/45 via-secondary/35 to-primary/45 shadow-[0_30px_70px_-30px_rgba(0,148,81,0.45)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-[calc(2.5rem-1px)]">
                {segmento.solucao.cards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="group relative isolate overflow-hidden bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-8 lg:p-10 transition-colors duration-500 hover:bg-white/90 dark:hover:bg-zinc-900/90"
                  >
                    {/* Brilho que acende só no quadrante sob o cursor. */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_25%_0%,rgba(0,148,81,0.16),transparent_60%)]"
                    />
                    {/* Reflexo de vidro no topo do quadrante. */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-white/70 to-transparent dark:from-white/5"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute top-6 right-7 select-none text-5xl lg:text-6xl font-extrabold leading-none text-primary/[0.09] transition-all duration-500 group-hover:text-primary/20 group-hover:-translate-y-1"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative flex h-full flex-col">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-white/80 shadow-sm backdrop-blur transition-all duration-500 group-hover:scale-105 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:shadow-soft dark:border-white/10 dark:bg-white/5">
                        <card.icon className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-white" />
                      </div>

                      <h3 className="text-lg lg:text-xl font-bold leading-tight text-foreground">
                        {card.title}
                      </h3>
                      {/* Traço que cresce no hover, no lugar da borda do card. */}
                      <span
                        aria-hidden="true"
                        className="mt-3 block h-px w-10 origin-left rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-[3.5]"
                      />
                      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/*
        Faixa escura de segurança — funciona como "respiro" entre duas seções
        claras e é fixa em tom escuro nos dois temas (por isso as cores são
        literais aqui, e não os tokens `foreground`/`background`, que invertem
        no dark mode).
      */}
      <section className="relative overflow-hidden bg-[#08110D] py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-40 h-[460px] w-[460px] rounded-full bg-primary/25 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -right-24 h-[460px] w-[460px] rounded-full bg-secondary/20 blur-[130px]"
        />
        {/* Malha sutil, com máscara radial para sumir nas bordas. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white/80 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Segurança e conformidade
            </span>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold leading-tight text-white">
              Rastreabilidade e LGPD{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                em toda a operação
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/55">
              Cada conversa e cada ligação ficam registradas — do primeiro contato do vendedor
              com o cliente até a negociação do comprador com o fornecedor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-14 grid max-w-5xl border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10"
          >
            {recursosComuns.map((r, i) => (
              <div
                key={r.title}
                className="group relative overflow-hidden px-6 py-10 lg:px-9 transition-colors duration-500 hover:bg-white/[0.03]"
              >
                {/* Luz que sobe da base da coluna sob o cursor. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-primary/15 to-transparent"
                />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary">
                      <r.icon className="h-5 w-5 text-primary transition-colors duration-500 group-hover:text-white" />
                    </span>
                    <span className="font-mono text-sm text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-white">{r.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/55">{r.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 lg:mb-14"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              Resultados
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              O que muda na sua operação
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
            {segmento.resultados.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center bg-gradient-to-b from-primary/5 to-transparent border border-border/60 rounded-[2rem] px-6 py-8"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center shadow-soft">
                  <r.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-lg leading-tight">{r.title}</h3>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros segmentos */}
      <section className="py-14 lg:py-16 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Outros segmentos que atendemos
          </h2>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
            {outros.map((s) => (
              <Link
                key={s.slug}
                to={`/segmentos/${s.slug}`}
                className="group inline-flex items-center gap-3 rounded-2xl bg-white dark:bg-zinc-900 border border-border/60 hover:border-primary/30 shadow-card px-5 py-4 transition-all hover:-translate-y-1"
              >
                <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-4 h-4 text-primary" />
                </span>
                <span className="font-semibold text-foreground">{s.name}</span>
                <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-[2rem] gradient-primary shadow-soft px-8 py-12 text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
              Vamos adaptar a Zeeps ao seu {segmento.name.toLowerCase()}?
            </h2>
            <p className="mt-4 text-primary-foreground/90 text-lg">
              Fale com um especialista e veja a plataforma funcionando com a realidade da sua
              operação.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="bg-white text-primary px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Falar com um especialista
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/planos"
                className="border-2 border-white/70 text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-white/10 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Ver planos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Segmento;
