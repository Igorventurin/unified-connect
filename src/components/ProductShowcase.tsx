import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dashboardImagem from "@/assets/dashboard_imagem.png";
import { VideoPlayer } from "./ui/video-player";
import conhecaVideo from "@/assets/conheça.mp4";

const slides = [
  {
    title: "Agentes de IA que vendem",
    desc: "Sua IA entende o cliente, qualifica o interesse e conduz o primeiro contato sozinha, 24 horas por dia.",
  },
  {
    title: "Sua equipe inteira, um único WhatsApp",
    desc: "Acabe com a bagunça de vários números: todos os atendentes trabalham juntos, com histórico compartilhado.",
  },
  {
    title: "O cliente certo, no setor certo",
    desc: "Encaminhamento automático para o departamento certo, sem intervenção manual e sem cliente perdido no meio do caminho.",
  },
  {
    title: "Decisões com dados, não com achismo",
    desc: "Acompanhe a performance da equipe em tempo real e tome decisões melhores com métricas de verdade.",
  },
  {
    title: "Follow-up que nunca esquece",
    desc: "Agende lembretes e retornos automáticos e nunca mais perca uma oportunidade por falha humana.",
  },
  {
    title: "Sua operação, do seu jeito",
    desc: "Conecte a Zeeps a qualquer sistema com uma API aberta e flexível, sem depender só de integrações prontas.",
  },
];

const INTERVAL = 6000;

const ProductShowcase = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="produto" className="py-12 lg:py-20 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Todas as soluções em uma interface simples
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Descubra como cada funcionalidade pode transformar sua operação de atendimento.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 overflow-hidden ${active === i
                ? "gradient-primary text-white border-transparent shadow-md"
                : "bg-white text-muted-foreground border-border hover:border-[#009245] hover:text-[#009245]"
                }`}
            >
              {s.title}
              {active === i && (
                <motion.span
                  key={`progress-${i}`}
                  className="absolute bottom-0 left-0 h-[3px] bg-white/40"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Two-column layout */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-10 items-center">
          {/* Left: Accordion topics */}
          <div className="flex flex-col gap-0">
            {slides.map((s, i) => {
              const isActive = active === i;
              return (
                <div
                  key={s.title}
                  className={`border-b border-border cursor-pointer group`}
                  onClick={() => setActive(i)}
                >
                  <div className="flex items-center gap-3 py-5 px-2">
                    {/* Indicator bar */}
                    <div
                      className={`w-1 self-stretch rounded-full transition-all duration-300 ${isActive ? "bg-primary" : "bg-border"
                        }`}
                      style={{ minHeight: 20 }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-semibold text-base transition-colors duration-200 ${isActive
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                            }`}
                        >
                          {s.title}
                        </h3>
                        <span
                          className={`ml-4 text-lg transition-transform duration-300 select-none ${isActive
                            ? "text-primary rotate-180"
                            : "text-muted-foreground rotate-0"
                            }`}
                          style={{ display: "inline-block" }}
                        >
                          ›
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            key={`desc-${i}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="text-sm text-muted-foreground mt-2 leading-relaxed overflow-hidden"
                          >
                            {s.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dashboard image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-border shadow-soft bg-white p-2"
          >
            <img
              src={dashboardImagem}
              alt="Dashboard Zeeps"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Video Player "Conheça" */}
        <div className="mt-28 max-w-5xl mx-auto">
          {/* Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Plataforma
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Conheça a Zeeps
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Uma plataforma completa de atendimento que une automação inteligente, gestão de equipes e relatórios em tempo real — tudo em um único lugar.
            </p>
          </motion.div>

          {/* Glow + Video */}
          <div className="relative">
            {/* Blobs estendem para os lados e embaixo — seção tem overflow-hidden para não causar scroll */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10"
              style={{ inset: "0 -18% -18% -18%" }}
            >
              {/* Lado esquerdo */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  left: "0",
                  top: "15%",
                  width: "40%",
                  height: "85%",
                  background: "radial-gradient(ellipse at left center, rgba(0, 148, 81, 0.85) 0%, rgba(0, 148, 81, 0.4) 50%, transparent 75%)",
                  filter: "blur(45px)",
                  borderRadius: "50%",
                }}
              />
              {/* Lado direito */}
              <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.7, 0.95, 0.7] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  right: "0",
                  top: "10%",
                  width: "40%",
                  height: "85%",
                  background: "radial-gradient(ellipse at right center, rgba(21, 128, 61, 0.8) 0%, rgba(21, 128, 61, 0.35) 50%, transparent 75%)",
                  filter: "blur(50px)",
                  borderRadius: "50%",
                }}
              />
              {/* Embaixo centro */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "5%",
                  width: "90%",
                  height: "55%",
                  background: "radial-gradient(ellipse at bottom center, rgba(0, 148, 81, 0.9) 0%, rgba(0, 148, 81, 0.5) 50%, transparent 75%)",
                  filter: "blur(40px)",
                  borderRadius: "50%",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <VideoPlayer
                src={conhecaVideo}
                poster={dashboardImagem}
                className="shadow-[0_20px_50px_rgba(0,148,81,0.2)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
