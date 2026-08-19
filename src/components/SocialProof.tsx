import { motion } from "framer-motion";
import fokusLogo from "@/assets/case_fokus_logo.png";
import perolaLogo from "@/assets/case_perola_logo.png";
import milhaoLogo from "@/assets/case_milhao_logo.svg";
import elementsGreen from "@/assets/elements_green.png";

type CaseStudy = {
  slug: string;
  logo: string;
  logoAlt: string;
  headline: string;
  stat?: { value: string; label: string };
  highlight?: string;
  fields: { label: string; text: string }[];
};

// Cases reais fornecidos pelo cliente. O campo "Impacto" citado no material
// não veio acompanhado de um texto próprio para nenhum dos 3 casos — por
// isso cada card mostra só Resultado/Funcionalidades + Diferencial. Se
// "Impacto" tiver um texto específico, é só me passar que eu adiciono.
const cases: CaseStudy[] = [
  {
    slug: "fokus",
    logo: fokusLogo,
    logoAlt: "Fokus",
    headline: "Agilidade e eficiência em escala",
    stat: { value: "+60%", label: "de agilidade nos atendimentos" },
    fields: [
      { label: "Resultado", text: "Crescimento da demanda suportada sem novas contratações." },
      { label: "Diferencial", text: "Centralização de múltiplos números em apenas um oficial." },
    ],
  },
  {
    slug: "perola",
    logo: perolaLogo,
    logoAlt: "Grupo Pérola",
    headline: "Recuperação de receita com cobrança automática",
    stat: { value: "-30%", label: "de inadimplência, de 63% para 33%" },
    fields: [
      {
        label: "Resultado",
        text: "Eliminação do processo manual de extração de relatórios e envios individuais, diminuindo o esforço operacional.",
      },
      {
        label: "Diferencial",
        text: "Integração total com o atual sistema de gestão, mantendo a comunicação padronizada e contínua.",
      },
    ],
  },
  {
    slug: "milhao",
    logo: milhaoLogo,
    logoAlt: "Milhão Ingredients",
    headline: "Autoatendimento especializado",
    highlight: "Extrato do produtor, preços de mercado e clima em tempo real.",
    fields: [
      { label: "Funcionalidades", text: "Atendimento multilíngue (PT, EN, ES) e escala global." },
      { label: "Diferencial", text: "Suporte consultivo da Zeeps para evolução constante." },
    ],
  },
];

const SocialProof = () => {
  return (
    <section className="relative py-14 lg:py-20 bg-proof overflow-hidden">
      <img
        src={elementsGreen}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-32 sm:w-40 lg:w-48 pointer-events-none select-none z-0"
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Resultados reais de quem já usa a Zeeps
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Empresas de diferentes setores que já transformaram o atendimento com a plataforma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col h-full bg-white border border-border rounded-2xl p-6 lg:p-8 shadow-card"
            >
              <div className="h-10 flex items-center mb-6">
                <img src={c.logo} alt={c.logoAlt} className="max-h-10 max-w-[150px] object-contain" />
              </div>

              <h3 className="font-bold text-foreground text-lg leading-snug">{c.headline}</h3>

              {c.stat ? (
                <div className="mt-4">
                  <p className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {c.stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">{c.stat.label}</p>
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.highlight}</p>
              )}

              <div className="mt-6 pt-6 border-t border-border space-y-4 flex-1">
                {c.fields.map((f) => (
                  <div key={f.label}>
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {f.label}
                    </span>
                    <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{f.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
