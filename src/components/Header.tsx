import { useEffect, useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import zeepsLogo from "@/assets/zeeps-logo.png";
import { Facebook, Instagram, Linkedin, LifeBuoy, ChevronDown } from "lucide-react";
import { segmentos } from "@/data/segmentos";

type SubLink = { label: string; href: string };
type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; items: SubLink[] };

const navItems: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "dropdown",
    label: "Segmentos",
    items: [
      ...segmentos.map((s) => ({ label: s.name, href: `/segmentos/${s.slug}` })),
      { label: "Ver todos os segmentos", href: "/#segmentos" },
    ],
  },
  { type: "link", label: "Funcionalidades", href: "/funcionalidades" },
  { type: "link", label: "Planos", href: "/planos" },
  {
    type: "dropdown",
    label: "Empresa",
    items: [
      { label: "Institucional", href: "/institucional" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { type: "link", label: "Contato", href: "/contato" },
];

const SUPPORT_URL = "https://suporte.zeeps.com.br/index.php?noAUTO=1";

const isAnchor = (href: string) => href.includes("#");

// Navega via React Router para rotas internas; usa <a> comum para âncoras (ex: /#segmentos).
const NavLink = ({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) => {
  if (isAnchor(href)) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Guardam o label do dropdown aberto (ou null) — há mais de um na nav.
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = `text-base font-medium transition-colors text-muted-foreground hover:text-foreground`;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm border-b border-border/50"
    >
      <div className="container mx-auto flex items-center h-20 px-4 lg:px-8 gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={zeepsLogo} alt="Zeeps" className="h-10" />
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <NavLink key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </NavLink>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(item.label)}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 ${linkClass}`}
                  aria-expanded={desktopDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${desktopDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {desktopDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[220px] z-50"
                    >
                      <div className="bg-white rounded-xl shadow-card border border-border py-2 overflow-hidden">
                        {item.items.map((sub) => (
                          <NavLink
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setDesktopDropdown(null)}
                            className="block whitespace-nowrap px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right side: Suporte + Socials + CTA */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-semibold text-foreground/80 hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <LifeBuoy className="w-4 h-4" />
            Suporte
          </a>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=100084110093569" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.instagram.com/zeeps.com.br" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/zeeps-br/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>

          <Link
            to="/contato"
            className="gradient-primary text-primary-foreground px-6 py-3 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Falar com Consultor
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
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
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </NavLink>
              );
            }

            return (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setMobileDropdown((v) => (v === item.label ? null : item.label))}
                  className="w-full flex items-center justify-between py-3 text-base font-medium text-muted-foreground hover:text-foreground"
                  aria-expanded={mobileDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileDropdown === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden pl-4"
                    >
                      {item.items.map((sub) => (
                        <NavLink
                          key={sub.href}
                          href={sub.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileDropdown(null);
                          }}
                          className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 text-base font-medium text-muted-foreground hover:text-foreground"
          >
            <LifeBuoy className="w-4 h-4" />
            Suporte
          </a>

          <Link
            to="/contato"
            onClick={() => setMobileOpen(false)}
            className="block gradient-primary text-primary-foreground text-center px-6 py-3 rounded-lg text-base font-semibold mt-2"
          >
            Falar com Consultor
          </Link>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
