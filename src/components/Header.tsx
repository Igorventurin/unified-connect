import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import zeepsLogo from "@/assets/zeeps-logo.png";

const navLinks = [
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Integrações", href: "/#integracoes" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Depoimentos", href: "/#depoimentos" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-background/0"
        }`}
    >
      <div className="container mx-auto flex items-center h-20 px-4 lg:px-8 gap-8">
        {/* Logo reduced in size */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={zeepsLogo} alt="Zeeps" className="h-10" />
        </a>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-base font-medium transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-foreground/90 hover:text-foreground"
                }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Button / CTA on the right */}
        <a
          href="/#contato"
          className="hidden md:inline-flex gradient-primary text-primary-foreground px-6 py-3 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity shrink-0"
        >
          Falar com Consultor
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 ${scrolled ? "bg-foreground" : "bg-foreground"} transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 ${scrolled ? "bg-foreground" : "bg-foreground"} transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 ${scrolled ? "bg-foreground" : "bg-foreground"} transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border px-4 pb-4"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contato"
            onClick={() => setMobileOpen(false)}
            className="block gradient-primary text-primary-foreground text-center px-6 py-3 rounded-lg text-base font-semibold mt-2"
          >
            Falar com Consultor
          </a>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
