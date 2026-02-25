import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "A Zeeps revolucionou nossas operações, simplificando finanças e atendimento. A plataforma nos mantém produtivos, mesmo remotamente.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Gerente de Operações",
  },
  {
    text: "A implementação foi rápida e suave. A interface personalizável e intuitiva tornou o treinamento da equipe muito fácil.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "Gerente de TI",
  },
  {
    text: "O suporte é excepcional, nos guiando na configuração e fornecendo assistência contínua, garantindo nossa satisfação.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Líder de Suporte",
  },
  {
    text: "A integração perfeita da Zeeps aprimorou nossas operações e eficiência. Altamente recomendado pela interface intuitiva.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Recursos robustos e suporte rápido transformaram nosso fluxo de trabalho, tornando-nos significativamente mais eficientes.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Gerente de Projetos",
  },
  {
    text: "A implementação superou expectativas. Simplificou processos, melhorando o desempenho geral dos negócios.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Analista de Negócios",
  },
  {
    text: "Nossas funções de negócio melhoraram com design amigável e feedback positivo dos clientes.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Diretor de Marketing",
  },
  {
    text: "Entregaram uma solução que superou expectativas, entendendo nossas necessidades e aprimorando nossas operações.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Gerente de Vendas",
  },
  {
    text: "Usando a Zeeps, nossa presença online e conversões melhoraram significativamente, impulsionando o desempenho.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Gerente de E-commerce",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({
  className,
  testimonials: items,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[0, 1].map((index) => (
          <React.Fragment key={index}>
            {items.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="p-8 rounded-2xl border border-border shadow-card bg-card max-w-xs w-full transition-all duration-300 cursor-default select-none group"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-muted-foreground leading-relaxed font-normal m-0">
                    {text}
                  </p>
                  <footer className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={`Avatar de ${name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/30 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-foreground">
                        {name}
                      </cite>
                      <span className="text-sm leading-5 tracking-tight text-muted-foreground mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="py-20 lg:py-28 bg-proof overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2
            id="testimonials-heading"
            className="text-3xl lg:text-4xl font-bold text-foreground"
          >
            O que nossos parceiros dizem
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A revolução na comunicação empresarial.
          </p>
        </motion.div>

        <div
          className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Depoimentos em rolagem"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
