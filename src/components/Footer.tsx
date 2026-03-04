import zeepsLogo from "@/assets/zeeps-logo.png";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

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
          >
            <img src={zeepsLogo} alt="Zeeps" className="h-7 brightness-0 invert mb-4" />
            <p className="text-sm text-background/60 leading-relaxed">
              Comunicação integrada e gestão simplificada para empresas que buscam eficiência.
            </p>
            <p className="text-xs text-background/40 mt-3 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> dpo@zeeps.com.br
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-background text-sm mb-3">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Funcionalidades", href: "/#funcionalidades" },
                { label: "Integrações", href: "/#integracoes" },
                { label: "Sobre", href: "/#sobre" },
                { label: "Documentação", href: "https://documentacao.zeeps.com.br/" },
                { label: "Contato", href: "/#contato" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : "_self"}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Selos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-background text-sm mb-3">Parcerias</h4>
            <p className="text-sm text-background/60">Meta Tech Partner</p>
            <div className="mt-6 flex gap-4">
              {["Instagram", "LinkedIn", "YouTube"].map((s) => (
                <a key={s} href="#" className="text-xs text-background/40 hover:text-background transition-colors">
                  {s}
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
          className="border-t border-background/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-background/40"
        >
          <p>© {new Date().getFullYear()} Zeeps. Todos os direitos reservados.</p>
          <a href="/privacidade" className="hover:text-background transition-colors">
            Política de Privacidade
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
