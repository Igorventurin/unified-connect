import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", empresa: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}. Gostaria de solicitar uma demonstração da Zeeps. E-mail: ${form.email}, Telefone: ${form.telefone}.`
    );
    window.open(`https://wa.me/5562999999999?text=${msg}`, "_blank");
    navigate("/obrigado");
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-form-bg">
      <div className="container mx-auto px-4 lg:px-8 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Solicitar Demonstração
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário e um consultor entrará em contato.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {[
            { key: "nome", label: "Nome", type: "text", placeholder: "Seu nome completo" },
            { key: "email", label: "E-mail Corporativo", type: "email", placeholder: "nome@empresa.com.br" },
            { key: "telefone", label: "Telefone (WhatsApp)", type: "tel", placeholder: "(62) 99999-9999" },
            { key: "empresa", label: "Empresa", type: "text", placeholder: "Nome da empresa" },
          ].map((f) => (
            <div key={f.key}>
              <label className="block text-sm font-medium text-foreground mb-1.5">{f.label}</label>
              <input
                required
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full gradient-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity shadow-soft"
          >
            Solicitar Demonstração
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
