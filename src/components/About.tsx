import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Sobre a Zeeps
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Nascemos com a paixão por simplificar a comunicação empresarial. Nossa missão é ser a referência definitiva em integração de atendimento até 2028, conectando equipes, clientes e sistemas em uma experiência transparente e inovadora.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Acreditamos que a eficiência operacional não precisa ser complexa. Com transparência, inovação contínua e um time dedicado, ajudamos empresas de todos os portes a escalar seu atendimento com inteligência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
