import { motion } from "framer-motion";
import configImg from "@/assets/configurações_zeeps.png";
import logoVertical from "@/assets/zeeps-logo-vertical.png";

const About = () => {
  return (
    <>
      <section id="sobre" className="py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text content ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Sobre a Zeeps
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              Comunicação empresarial{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                simplificada
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Nascemos com a paixão por simplificar a comunicação empresarial.
              Nossa missão é ser a referência definitiva em integração de
              atendimento até 2028, conectando equipes, clientes e sistemas em
              uma experiência transparente e inovadora.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Acreditamos que a eficiência operacional não precisa ser complexa.
              Com transparência, inovação contínua e um time dedicado, ajudamos
              empresas de todos os portes a escalar seu atendimento com
              inteligência.
            </p>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { value: "2028", label: "Meta de liderança" },
                { value: "100%", label: "Foco no cliente" },
                { value: "24/7", label: "Suporte contínuo" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: 3D Floating Mockup ── */}
          <motion.div
            className="flex-1 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Glow background blob */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 60% 50%, hsla(153,100%,29%,0.13) 0%, transparent 80%)",
              }}
            />

            {/* Outer perspective wrapper — gives the 3D tilt */}
            <motion.div
              className="relative"
              style={{ perspective: "1200px" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Mockup frame */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  rotateX: "4deg",
                  rotateY: "-10deg",
                  transformStyle: "preserve-3d",
                  boxShadow:
                    "0 40px 80px -12px hsla(153,100%,29%,0.3), 0 20px 40px -8px hsla(0,0%,0%,0.25), inset 0 1px 0 hsla(255,255%,255%,0.15)",
                  border: "1px solid hsla(153,100%,29%,0.25)",
                  maxWidth: "520px",
                  width: "100%",
                }}
                initial={{ rotateX: "4deg", rotateY: "-10deg" }}
                whileHover={{ rotateY: "-5deg", rotateX: "2deg", scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                {/* Browser chrome bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{
                    background: "linear-gradient(135deg, #1a1f2e 0%, #0f1319 100%)",
                    borderBottom: "1px solid hsla(255,255%,255%,0.07)",
                  }}
                >
                  <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                  <div
                    className="ml-3 flex-1 rounded-md text-xs text-center py-1"
                    style={{
                      background: "hsla(255,255%,255%,0.06)",
                      color: "hsla(255,255%,255%,0.35)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    app.zeeps.com.br / configurações
                  </div>
                </div>

                {/* Screenshot */}
                <img
                  src={configImg}
                  alt="Tela de configurações da Zeeps"
                  className="w-full block"
                  style={{ display: "block" }}
                />

                {/* Subtle shine overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, hsla(255,255%,255%,0.06) 0%, transparent 50%)",
                  }}
                />
              </motion.div>

              {/* ── Logo badge — top-right corner, floating above the card ── */}
              <motion.div
                className="absolute -top-6 -right-6 rounded-2xl p-3 z-10"
                style={{
                  background: "hsla(0,0%,100%,0.95)",
                  boxShadow:
                    "0 12px 32px -4px hsla(153,100%,29%,0.25), 0 4px 12px -2px hsla(0,0%,0%,0.15)",
                  border: "1px solid hsla(153,100%,29%,0.15)",
                  backdropFilter: "blur(12px)",
                  transformStyle: "preserve-3d",
                  transform: "translateZ(30px)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                whileHover={{ scale: 1.08 }}
              >
                <img
                  src={logoVertical}
                  alt="Zeeps logo vertical"
                  className="w-20 h-auto"
                />
              </motion.div>

              {/* ── Decorative floating dots ── */}
              <motion.div
                aria-hidden
                className="absolute -bottom-4 -left-8 w-16 h-16 rounded-full opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(153,100%,29%), hsl(174,100%,33%))",
                  filter: "blur(2px)",
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="absolute top-1/2 -left-12 w-8 h-8 rounded-full opacity-20"
                style={{
                  background: "hsl(174,100%,33%)",
                  filter: "blur(1px)",
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Elfsight Instagram Feed */}
      <section className="py-12 lg:py-16 bg-[#fafafa]">
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
              Siga nosso perfil e fique por dentro das novidades, atualizações e dicas para escalar seu atendimento.
            </p>
          </motion.div>
          
          <div className="elfsight-app-609802d7-2696-4d81-b454-349a9c0f8780" data-elfsight-app-lazy></div>
        </div>
      </section>
    </>
  );
};

export default About;
