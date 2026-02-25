import zeepsLogo from "@/assets/zeeps-logo.png";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo + desc */}
          <div>
            <img src={zeepsLogo} alt="Zeeps" className="h-7 brightness-0 invert mb-4" />
            <p className="text-sm text-background/60 leading-relaxed">
              Comunicação integrada e gestão simplificada para empresas que buscam eficiência.
            </p>
            <p className="text-xs text-background/40 mt-3 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> dpo@zeeps.com.br
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background text-sm mb-3">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Funcionalidades", href: "#funcionalidades" },
                { label: "Integrações", href: "#integracoes" },
                { label: "Sobre", href: "#sobre" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-background/60 hover:text-background transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Selos */}
          <div>
            <h4 className="font-semibold text-background text-sm mb-3">Parcerias</h4>
            <p className="text-sm text-background/60">Meta Tech Partner</p>
            <div className="mt-6 flex gap-4">
              {["Instagram", "LinkedIn", "YouTube"].map((s) => (
                <a key={s} href="#" className="text-xs text-background/40 hover:text-background transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-background/40">
          <p>© {new Date().getFullYear()} Zeeps. Todos os direitos reservados.</p>
          <a href="/privacidade" className="hover:text-background transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
