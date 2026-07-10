import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5562982300168?text=Olá! Gostaria de saber mais sobre a Zeeps.";
const STORAGE_KEY = "zeeps_mascote_dismissed";

// Robô como mascote secundário de suporte — um pop-up amigável que
// complementa o botão de WhatsApp (mantido como está, sem alterações), em
// vez de ser o protagonista da Hero como antes (ver Ajuste 10 no
// PLANEJAMENTO_AJUSTES.md).
const SupportMascot = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-24 right-6 z-40 max-w-[260px]"
        >
          <div className="relative bg-white rounded-2xl rounded-br-sm border border-border shadow-card p-4 pr-8">
            <button
              type="button"
              onClick={dismiss}
              aria-label="Fechar"
              className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-start gap-2.5">
              <motion.span
                className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shrink-0"
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 1.2, delay: 0.5, repeat: 2, repeatDelay: 3 }}
              >
                <Bot className="w-4 h-4 text-white" />
              </motion.span>
              <div>
                <p className="text-sm font-semibold text-foreground leading-snug">
                  Precisa de ajuda? 👋
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="mt-1 inline-block text-xs font-semibold text-primary hover:underline"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SupportMascot;
