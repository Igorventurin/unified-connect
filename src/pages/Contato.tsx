import { motion } from "framer-motion";
import { MessageCircle, Clock, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";

const pontos = [
  {
    icon: MessageCircle,
    title: "Conversa sem compromisso",
    desc: "Entenda como a Zeeps se encaixa na sua operação antes de decidir qualquer coisa.",
  },
  {
    icon: Clock,
    title: "Resposta rápida",
    desc: "Um consultor entra em contato pelo WhatsApp assim que você enviar o formulário.",
  },
  {
    icon: ShieldCheck,
    title: "Sem letras miúdas",
    desc: "Setup, mensalidade e recursos explicados de forma clara, sem pegadinha.",
  },
];

const Contato = () => {
  return (
    <Layout>
      <Seo
        title="Contato"
        description="Fale com um consultor da Zeeps e descubra como automatizar o atendimento no WhatsApp e Redes Sociais da sua empresa."
        path="/contato"
      />
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
              Contato
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Vamos conversar sobre{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                o seu atendimento
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Preencha o formulário abaixo e um consultor da Zeeps fala com você para entender
              sua operação e mostrar o plano ideal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 grid sm:grid-cols-3 gap-6"
          >
            {pontos.map((p) => (
              <div key={p.title} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Formulário de Captura */}
      <ContactForm />
    </Layout>
  );
};

export default Contato;
