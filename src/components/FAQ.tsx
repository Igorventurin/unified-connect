import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "O que é a Zeeps e como ela pode ajudar minha empresa?",
        answer:
            "A Zeeps é uma plataforma completa de automação de comunicação empresarial. Ela permite que você integre WhatsApp, Redes Sociais e e-mail em um só lugar, permitindo que múltiplos atendentes utilizem o mesmo número. Além disso, a Zeeps cria agentes de IA para triar chamados, conectar a CRMs e automatizar demandas de forma rápida e escalável.",
    },
    {
        question: "A plataforma integra com o meu sistema atual (TOTVS, RD Station, etc)?",
        answer:
            "Sim! A Zeeps foi projetada com foco em alta conectividade. Oferecemos integrações nativas e robustas com RD Station, TOTVS, Shopify, Meta, Mercado Livre, Vtex, Tiny, Bling e diversas outras soluções de mercado por meio de APIs abertas.",
    },
    {
        question: "Posso ter vários atendentes usando o mesmo número de telefone no WhatsApp?",
        answer:
            "Exatamente. Com o recurso Multi-atendentes da Zeeps, toda a sua equipe de vendas e suporte pode operar simultaneamente através de um único número de WhatsApp oficial, mantendo o histórico de conversas centralizado e oferecendo um chat ágil para os clientes.",
    },
    {
        question: "Como funciona a triagem através dos Agentes de IA?",
        answer:
            "Nossa inteligência artificial conversa com o cliente logo no primeiro contato, entende a necessidade dele e realiza o encaminhamento de forma automática (triagem inteligente) para o setor pertinente na sua empresa (ex: Vendas, Suporte Técnico, Financeiro).",
    },
    {
        question: "A Zeeps oferece um período de teste ou demonstração?",
        answer:
            "Sim! Você pode preencher o formulário na seção 'Contato' e um de nossos consultores agendará uma demonstração ao vivo para entender os desafios do seu negócio e mostrar a ferramenta em ação na prática.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-16 lg:py-24 bg-[#fafafa]">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                        Dúvidas Frequentes
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Perguntas Frequentes (FAQ)
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Encontre respostas rápidas sobre a plataforma, integrações e como a Zeeps pode transformar seu atendimento.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "bg-white border-primary/30 shadow-sm" : "bg-white border-border/60 hover:border-primary/20"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="text-[17px] font-semibold text-foreground pr-8">
                                        {faq.question}
                                    </h3>
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "bg-primary/10 text-primary rotate-180" : "bg-zinc-100 text-zinc-500"
                                            }`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* JSON-LD Schema Markup for FAQ SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                            },
                        })),
                    }),
                }}
            />
        </section>
    );
};

export default FAQ;
