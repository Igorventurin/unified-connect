import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Headphones,
  TrendingUp,
  LifeBuoy,
  Wallet,
  Database,
  Users,
  ShoppingBag,
  MessageSquare,
  GitBranch,
  CheckCircle2,
  Lock,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import zeepsLogo from "@/assets/zeeps-logo-vertical.png";

// Elementos ilustrativos "mockados" para cada bloco de funcionalidade — não são
// screenshots reais do produto, são composições em HTML/SVG que representam o
// conceito de cada recurso (ver Ajuste 7 no PLANEJAMENTO_AJUSTES.md).

export const AgentesIAVisual = () => (
  <div className="relative w-full max-w-sm mx-auto">
    <div className="rounded-3xl bg-white border border-border shadow-soft overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-[#fafafa]">
        <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center shrink-0">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Zeeps IA</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            online agora
          </p>
        </div>
      </div>
      <div className="p-5 space-y-3 min-h-[220px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-[75%] bg-muted rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-foreground/80"
        >
          Oi! Vocês têm plano pra uma clínica pequena?
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="ml-auto max-w-[80%] gradient-primary text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm"
        >
          Temos sim! Me conta quantos atendentes vocês têm hoje que já indico o melhor plano 😊
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-1 pl-1"
        >
          <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" />
        </motion.div>
      </div>
    </div>
    <motion.span
      className="absolute -top-3 -right-3 bg-white border border-border rounded-full px-3 py-1.5 text-xs font-semibold text-primary shadow-card flex items-center gap-1.5"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Sparkles className="w-3.5 h-3.5" />
      Resposta automática
    </motion.span>
  </div>
);

const spokes = [
  { label: "Atendimento", icon: Headphones, style: { top: "4%", left: "50%" } },
  { label: "Vendas", icon: TrendingUp, style: { top: "50%", left: "96%" } },
  { label: "Suporte", icon: LifeBuoy, style: { top: "96%", left: "50%" } },
  { label: "Financeiro", icon: Wallet, style: { top: "50%", left: "4%" } },
];

export const MultiAtendentesVisual = () => (
  <div className="relative aspect-square max-w-sm mx-auto">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {[
        [50, 50, 50, 15],
        [50, 50, 85, 50],
        [50, 50, 50, 85],
        [50, 50, 15, 50],
      ].map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-primary/25" strokeWidth={0.6} strokeDasharray="2 2" />
          <circle r={1.3} className="fill-primary">
            <animateMotion dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" path={`M${x1},${y1} L${x2},${y2}`} />
          </circle>
        </g>
      ))}
    </svg>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-2xl border-2 border-primary/30"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-soft relative">
        <img src={zeepsLogo} alt="Zeeps" className="w-10 h-10 sm:w-12 sm:h-12 object-contain brightness-0 invert" />
      </div>
    </div>

    {spokes.map((s) => (
      <div
        key={s.label}
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
        style={s.style}
      >
        <div className="w-11 h-11 rounded-xl bg-white border border-border shadow-card flex items-center justify-center">
          <s.icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-[11px] sm:text-xs font-semibold text-foreground bg-white/90 px-2 py-0.5 rounded-full border border-border whitespace-nowrap">
          {s.label}
        </span>
      </div>
    ))}
  </div>
);

const chips = [
  { label: "ERP", icon: Database, y: 15 },
  { label: "CRM", icon: Users, y: 50 },
  { label: "E-commerce", icon: ShoppingBag, y: 85 },
];

export const IntegracoesVisual = () => (
  <div className="relative w-full max-w-sm mx-auto aspect-[4/3]">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {chips.map((c, i) => {
        const path = `M 18 ${c.y} C 52 ${c.y}, 52 50, 84 50`;
        return (
          <g key={c.label}>
            <path d={path} fill="none" className="stroke-primary/25" strokeWidth={0.6} strokeDasharray="2 2" />
            <circle r={1.3} className="fill-primary">
              <animateMotion dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={path} />
            </circle>
          </g>
        );
      })}
    </svg>

    {chips.map((c) => (
      <div
        key={c.label}
        className="absolute -translate-y-1/2 flex items-center gap-2 bg-white border border-border shadow-card rounded-xl px-3 py-2"
        style={{ top: `${c.y}%`, left: "2%" }}
      >
        <c.icon className="w-4 h-4 text-primary shrink-0" />
        <span className="text-xs font-semibold text-foreground whitespace-nowrap">{c.label}</span>
      </div>
    ))}

    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
      style={{ top: "50%", left: "84%" }}
    >
      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-soft">
        <img src={zeepsLogo} alt="Zeeps" className="w-9 h-9 object-contain brightness-0 invert" />
      </div>
    </div>
  </div>
);

const bars = [40, 65, 50, 80, 60, 90];

export const AnalyticsVisual = () => (
  <div className="relative w-full max-w-sm mx-auto rounded-2xl bg-white border border-border shadow-soft overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-[#fafafa]">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
      <span className="ml-2 text-xs font-medium text-muted-foreground">Dashboard · Zeeps</span>
    </div>
    <div className="p-5">
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl bg-primary/5 p-3">
          <p className="text-xl font-extrabold text-primary">1.284</p>
          <p className="text-[11px] text-muted-foreground">Atendimentos no mês</p>
        </div>
        <div className="rounded-xl bg-primary/5 p-3">
          <p className="text-xl font-extrabold text-primary">98%</p>
          <p className="text-[11px] text-muted-foreground">Satisfação</p>
        </div>
      </div>
      <div className="flex items-end gap-2 h-24">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            style={{ height: `${h}%`, originY: 1 }}
            className="flex-1 rounded-t-md gradient-primary"
          />
        ))}
      </div>
    </div>
  </div>
);

const steps = [
  { icon: MessageSquare, label: "Mensagem recebida" },
  { icon: GitBranch, label: "Regra aplicada automaticamente" },
  { icon: CheckCircle2, label: "Setor certo, na hora" },
];

export const AutomacaoVisual = () => (
  <div className="relative w-full max-w-sm mx-auto rounded-2xl bg-white border border-border shadow-soft p-6">
    <motion.div
      className="absolute top-5 right-5 flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      Automático
    </motion.div>

    <div className="flex flex-col mt-8">
      {steps.map((s, i) => (
        <div key={s.label} className="flex gap-4">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-soft"
            >
              <s.icon className="w-5 h-5 text-white" />
            </motion.div>
            {i < steps.length - 1 && <span className="w-0.5 flex-1 my-1 bg-gradient-to-b from-primary/50 to-primary/10" />}
          </div>
          <p className={`font-semibold text-foreground text-sm pt-2.5 ${i < steps.length - 1 ? "pb-8" : ""}`}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const badges = [
  { label: "Criptografia", icon: Lock, style: { top: "2%", left: "50%" } },
  { label: "LGPD", icon: BadgeCheck, style: { top: "64%", left: "90%" } },
  { label: "Backup", icon: Database, style: { top: "64%", left: "10%" } },
];

export const SegurancaVisual = () => (
  <div className="relative aspect-square max-w-sm mx-auto flex items-center justify-center">
    <motion.span
      aria-hidden
      className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-dashed border-primary/25"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
    <motion.span
      aria-hidden
      className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-primary/20"
      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl gradient-primary flex items-center justify-center shadow-soft">
      <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
    </div>

    {badges.map((b) => (
      <div
        key={b.label}
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white border border-border shadow-card rounded-full pl-1.5 pr-3 py-1.5"
        style={b.style}
      >
        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <b.icon className="w-3.5 h-3.5 text-primary" />
        </span>
        <span className="text-[11px] font-semibold text-foreground whitespace-nowrap">{b.label}</span>
      </div>
    ))}
  </div>
);
