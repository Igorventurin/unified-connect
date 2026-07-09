import { Link } from "react-router-dom";
import zeepsLogo from "@/assets/zeeps-logo.png";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Institucional", href: "/institucional" },
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Integrações", href: "/#integracoes" },
  { label: "Planos", href: "/planos" },
  { label: "Contato", href: "/contato" },
  { label: "Documentação", href: "https://documentacao.zeeps.com.br/" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo + desc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <img src={zeepsLogo} alt="Zeeps" className="h-7 brightness-0 invert mb-4" />
            <p className="text-sm text-background/60 leading-relaxed">
              Comunicação integrada e gestão simplificada para empresas que buscam eficiência.
            </p>
            <p className="text-xs text-background/40 mt-3 flex items-center justify-center md:justify-start gap-1.5">
              <Mail className="w-3.5 h-3.5" /> dpo@zeeps.com.br
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="font-semibold text-background text-sm mb-3">Links Rápidos</h4>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              {quickLinks.map((l) => {
                const isExternal = l.href.startsWith("http");
                const isAnchor = l.href.includes("#");
                if (isExternal || isAnchor) {
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      target={isExternal ? "_blank" : "_self"}
                      rel={isExternal ? "noopener noreferrer" : ""}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {l.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>

          {/* Selos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h4 className="font-semibold text-background text-sm mb-3">Parcerias</h4>
            <p className="text-sm text-background/60">Meta Tech Partner</p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              {[
                { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100084110093569" },
                { name: "Instagram", url: "https://www.instagram.com/zeeps.com.br" },
                { name: "LinkedIn", url: "https://www.linkedin.com/company/zeeps-br/" }
              ].map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-background/40 hover:text-background transition-colors">
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-background/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/40 text-center sm:text-left"
        >
          <p>© {new Date().getFullYear()} Zeeps. Todos os direitos reservados.</p>
          <Link to="/privacidade" className="hover:text-background transition-colors">
            Política de Privacidade
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
