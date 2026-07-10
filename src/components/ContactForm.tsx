import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", empresa: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Setup payload with UTMs and current URL
      const urlParams = new URLSearchParams(window.location.search);
      const payload = {
        ...form,
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_term: urlParams.get("utm_term") || "",
        utm_content: urlParams.get("utm_content") || "",
        url: window.location.href,
      };

      // Send to webhook
      await fetch("https://n8n-webhook.7it7cw.easypanel.host/webhook/zeeps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Erro ao enviar para o webhook:", error);
    } finally {
      setIsSubmitting(false);
      // Redirect to WhatsApp
      const msg = encodeURIComponent(
        `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}. Gostaria de solicitar uma demonstração da Zeeps. E-mail: ${form.email}, Telefone: ${form.telefone}.`
      );
      window.location.href = `https://wa.me/5562982300168?text=${msg}`;
    }
  };

  return (
    <section
      id="contato"
      className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-secondary/10"
    >
      {/* Blobs decorativos */}
      <div className="absolute top-0 -left-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[420px] h-[420px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Ondas animadas — camadas em gradiente preenchendo ~80% da altura da seção */}
      <div className="absolute inset-x-0 bottom-0 h-[80%] overflow-hidden pointer-events-none">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="wave-grad-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.08" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.14" />
            </linearGradient>
            <linearGradient id="wave-grad-3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="wave-grad-4" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.12" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.22" />
            </linearGradient>
          </defs>
        </svg>

        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute left-0 w-[200%]"
          style={{ top: 0, height: "45%" }}
          animate={{ x: [0, -720] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z M1440,64 C1680,120 1920,0 2160,32 C2400,64 2640,120 2880,64 L2880,120 L1440,120 Z"
            fill="url(#wave-grad-1)"
          />
        </motion.svg>

        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute left-0 w-[200%]"
          style={{ top: "18%", height: "50%" }}
          animate={{ x: [-720, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,80 C240,32 480,120 720,80 C960,40 1200,96 1440,72 L1440,120 L0,120 Z M1440,72 C1680,96 1920,40 2160,80 C2400,120 2640,32 2880,80 L2880,120 L1440,120 Z"
            fill="url(#wave-grad-2)"
          />
        </motion.svg>

        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute left-0 w-[200%]"
          style={{ top: "38%", height: "62%" }}
          animate={{ x: [0, -960] }}
          transition={{ duration: 19, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,48 C200,96 500,16 760,56 C1020,96 1240,32 1440,56 L1440,120 L0,120 Z M1440,56 C1640,32 1940,96 2200,56 C2460,16 2760,96 2880,56 L2880,120 L1440,120 Z"
            fill="url(#wave-grad-3)"
          />
        </motion.svg>

        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute left-0 w-[200%]"
          style={{ bottom: 0, height: "40%" }}
          animate={{ x: [-960, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,72 C260,32 520,112 780,64 C1040,16 1300,88 1440,48 L1440,120 L0,120 Z M1440,48 C1580,88 1840,16 2100,64 C2360,112 2620,32 2880,72 L2880,120 L1440,120 Z"
            fill="url(#wave-grad-4)"
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-3xl p-8 lg:p-12"
          style={{
            background: "linear-gradient(145deg, #1f2430 0%, #151a24 100%)",
            boxShadow:
              "0 32px 64px -12px hsla(0,0%,0%,0.45), 0 0 0 1px hsla(255,255%,255%,0.06)",
          }}
        >
          {/* ── Header ── */}
          <div className="text-center mb-10">
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "hsl(153,80%,55%)" }}
            >
              Fale com um consultor
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "#f0f4f8" }}>
              Solicitar Demonstração
            </h2>
            <p className="mt-4 text-lg" style={{ color: "hsla(210,20%,80%,0.75)" }}>
              Preencha o formulário e um consultor entrará em contato.
            </p>
          </div>

          {/* ── Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5"
          >
            {[
              { key: "nome", label: "Nome", type: "text", placeholder: "Seu nome completo" },
              { key: "email", label: "E-mail Corporativo", type: "email", placeholder: "nome@empresa.com.br" },
              { key: "telefone", label: "Telefone (WhatsApp)", type: "tel", placeholder: "(62) 99999-9999" },
              { key: "empresa", label: "Empresa", type: "text", placeholder: "Nome da empresa" },
            ].map((f) => (
              <div key={f.key}>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "hsla(210,20%,85%,0.90)" }}
                >
                  {f.label}
                </label>
                <input
                  required
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2"
                  style={{
                    background: "hsla(210,20%,100%,0.06)",
                    border: "1px solid hsla(210,20%,100%,0.10)",
                    color: "#f0f4f8",
                    caretColor: "hsl(153,80%,55%)",
                    ["--tw-ring-color" as string]: "hsl(153,80%,42%)",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid hsl(153,80%,42%)";
                    e.target.style.background = "hsla(153,100%,29%,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid hsla(210,20%,100%,0.10)";
                    e.target.style.background = "hsla(210,20%,100%,0.06)";
                  }}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-[0.98] mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(to right, #4f5954, #009245)",
                color: "#fff",
                boxShadow: "0 8px 24px -4px rgba(0, 146, 69, 0.45)",
              }}
            >
              {isSubmitting ? "Redirecionando..." : "Solicitar Demonstração"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
