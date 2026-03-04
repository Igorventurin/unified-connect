import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import contatoBg from "@/assets/contato.png";

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
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${contatoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
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
                background: "linear-gradient(135deg, hsl(153,100%,29%), hsl(174,100%,33%))",
                color: "#fff",
                boxShadow: "0 8px 24px -4px hsla(153,100%,29%,0.45)",
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
