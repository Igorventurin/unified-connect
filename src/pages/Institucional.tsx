import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import {
  Calendar,
  Users,
  MapPin,
  Building2,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Rocket,
} from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

// TODO: foto placeholder (Unsplash) — trocar por uma foto real do time/escritório da Zeeps.
const teamPhoto =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900&h=1200";

// TODO: números institucionais abaixo são placeholder/inventados — pendente
// dos valores reais do cliente (ver Ajuste 6 no PLANEJAMENTO_AJUSTES.md).
const numeros = [
  { icon: Calendar, value: "2018", label: "Ano de fundação" },
  { icon: Users, value: "45+", label: "Colaboradores" },
  { icon: MapPin, value: "12", label: "Estados atendidos" },
  { icon: Building2, value: "2", label: "Escritórios" },
];

const pilares = [
  {
    icon: ShieldCheck,
    title: "Transparência",
    desc: "Relações claras com clientes, parceiros e nosso time — sem letras miúdas.",
  },
  {
    icon: Lightbulb,
    title: "Inovação contínua",
    desc: "Evoluímos a plataforma constantemente para acompanhar como as empresas realmente se comunicam.",
  },
  {
    icon: HeartHandshake,
    title: "Foco no cliente",
    desc: "Cada funcionalidade nasce de um problema real de quem usa a Zeeps todos os dias.",
  },
  {
    icon: Rocket,
    title: "Simplicidade",
    desc: "Eficiência operacional não precisa ser complicada — buscamos sempre o caminho mais simples.",
  },
];

// TODO: trajetória — 2018 e o início de 2020 vieram de texto real enviado
// pelo cliente ("Integração oficial ..." chegou cortado, completado aqui de
// forma plausível e pendente de confirmação). 2022, 2023, 2025 e 2026 são
// placeholder/inventados a pedido explícito, pendentes de validação (ver
// Ajuste 6 no PLANEJAMENTO_AJUSTES.md).
const trajetoria = [
  {
    year: "2018",
    text: "Fundação em Goiânia. Primeiros protótipos para resolver atendimento multi-atendentes no WhatsApp de clientes locais.",
  },
  {
    year: "2020",
    text: "Integração oficial com a API do WhatsApp Business, permitindo atendimento multi-canal de forma escalável para os primeiros clientes.",
  },
  {
    year: "2022",
    text: "Expansão para outros estados do Brasil e lançamento do atendimento integrado a Instagram e Facebook.",
  },
  {
    year: "2023",
    text: "Lançamento dos primeiros Agentes de IA da Zeeps, automatizando triagem e primeiro contato no atendimento.",
  },
  {
    year: "2025",
    text: "Integrações nativas com os principais ERPs e CRMs do mercado (TOTVS, RD Station e outros), consolidando a Zeeps como plataforma completa.",
  },
  {
    year: "2026",
    text: "Hoje: a Zeeps unifica atendimento, automação e gestão para centenas de empresas em todo o Brasil.",
    isNow: true,
  },
];

const visao2028 = "Ser a plataforma de referência em comunicação e automação empresarial na América Latina.";

// Número que "conta" de 0 até o valor real quando entra na tela — dá um ar mais dinâmico às estatísticas.
const AnimatedNumber = ({ value, className }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(() => value.replace(/\d/g, "0"));

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

// Item da trajetória: acende de cor (dot + ano) e permanece aceso conforme a
// linha de progresso do scroll ultrapassa o seu marco — efeito de "trilha"
// cumulativa, não um holofote que apaga o item anterior.
const TimelineItem = ({
  year,
  text,
  isNow,
  index,
  threshold,
  progress,
}: {
  year: string;
  text: string;
  isNow?: boolean;
  index: number;
  threshold: number;
  progress: MotionValue<number>;
}) => {
  const [active, setActive] = useState(threshold <= 0);
  useMotionValueEvent(progress, "change", (v) => setActive(v >= threshold));

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pb-10 last:pb-0"
    >
      <span
        className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ring-4 ring-[#fafafa] transition-colors duration-500 ${
          active ? "bg-primary" : "bg-border"
        }`}
      />
      <div className="flex items-center gap-3 flex-wrap">
        <span
          className={`text-2xl font-extrabold transition-colors duration-500 ${
            active ? "text-primary" : "text-muted-foreground/40"
          }`}
        >
          {year}
        </span>
        {isNow && (
          <span className="text-xs font-semibold uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            Hoje
          </span>
        )}
      </div>
      <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
    </motion.div>
  );
};

const Institucional = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Layout>
      <Seo
        title="Institucional"
        description="Conheça a história da Zeeps: de um problema interno a uma plataforma completa de automação de atendimento, com foco em transparência, inovação e simplicidade."
        path="/institucional"
      />
      {/* Hero / Sobre a Zeeps */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Institucional
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              De um problema interno a uma{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                plataforma completa
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Nascemos com a paixão por simplificar a comunicação empresarial. Nossa missão é
              ser a referência definitiva em integração de atendimento, conectando equipes,
              clientes e sistemas em uma experiência transparente e inovadora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossos Números */}
      <section className="relative py-14 lg:py-16 bg-gradient-to-br from-primary/15 via-white to-muted overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-2xl lg:text-3xl font-bold text-foreground mb-10"
          >
            Nossos números
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto"
          >
            {numeros.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center bg-white rounded-2xl shadow-card px-4 py-6"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <AnimatedNumber
                  value={s.value}
                  className="block text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                />
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pilares e Valores */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              Pilares e Valores
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              O que guia cada decisão da Zeeps
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-border hover:border-primary/30 rounded-2xl p-6 shadow-card hover:shadow-soft transition-[box-shadow,border-color] duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-300">
                  <p.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary text-lg transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              Trajetória
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              De problema interno a plataforma consolidada
            </h2>
          </motion.div>

          {/* Foto ilustrativa — em cima por padrão */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card border border-border mb-10"
          >
            <img
              src={teamPhoto}
              alt="Time Zeeps"
              className="w-full h-56 lg:h-[360px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent pointer-events-none" />
            <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wide bg-white/90 text-foreground px-2.5 py-1 rounded-full">
              Time Zeeps · Goiânia
            </span>
          </motion.div>

          {/* Linha do tempo */}
          <div ref={timelineRef} className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-primary to-secondary"
              />

              {trajetoria.map((item, i) => (
                <TimelineItem
                  key={item.year}
                  year={item.year}
                  text={item.text}
                  isNow={item.isNow}
                  index={i}
                  threshold={i / (trajetoria.length - 1)}
                  progress={scrollYProgress}
                />
              ))}

              {/* Visão de futuro — estilo diferenciado (aspiracional, não é fato consumado) */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: trajetoria.length * 0.08 }}
                className="relative opacity-80"
              >
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-2 border-dashed border-muted-foreground/50 ring-4 ring-[#fafafa]" />
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl font-extrabold text-muted-foreground">2028</span>
                  <span className="text-xs font-semibold uppercase tracking-wide bg-muted text-muted-foreground border border-dashed border-border px-2 py-0.5 rounded-full">
                    Visão
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{visao2028}</p>
              </motion.div>
            </div>
        </div>
      </section>

      {/* Elfsight Instagram Feed — reaproveitado do About.tsx original */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Nossas Redes
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Acompanhe a Zeeps no Instagram
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Siga nosso perfil e fique por dentro das novidades, atualizações e dicas para
              escalar seu atendimento.
            </p>
          </motion.div>

          <div className="elfsight-app-609802d7-2696-4d81-b454-349a9c0f8780" data-elfsight-app-lazy></div>
        </div>
      </section>
    </Layout>
  );
};

export default Institucional;
