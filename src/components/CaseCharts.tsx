import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";

// Gráficos dos cards de case da Home (SocialProof).
// Ambos usam SOMENTE os números reais informados pelo cliente — nenhuma
// série temporal ou valor intermediário foi inventado para preencher.

const ARC_PATH = "M 16 68 A 54 54 0 0 1 124 68";
const ARC_LENGTH = Math.PI * 54;

/** Fokus — arco de progresso preenchendo até os +60% de agilidade. */
export const AgilidadeGauge = () => {
  const progresso = 0.6;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, progresso * 100, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setNumero(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView]);

  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="relative w-28 shrink-0">
        <svg viewBox="0 0 140 78" className="w-full" role="img" aria-label="Indicador de 60% de ganho de agilidade">
          <defs>
            <linearGradient id="gauge-fokus" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>

          <path d={ARC_PATH} fill="none" stroke="hsl(var(--primary))" strokeOpacity={0.12} strokeWidth={13} strokeLinecap="round" />

          <motion.path
            d={ARC_PATH}
            fill="none"
            stroke="url(#gauge-fokus)"
            strokeWidth={13}
            strokeLinecap="round"
            strokeDasharray={ARC_LENGTH}
            initial={{ strokeDashoffset: ARC_LENGTH }}
            animate={inView ? { strokeDashoffset: ARC_LENGTH * (1 - progresso) } : undefined}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </svg>

        {/* Número dentro do arco */}
        <span className="absolute inset-x-0 bottom-0 text-center text-xl font-extrabold text-primary leading-none">
          +{numero}%
        </span>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Ganho de agilidade</p>
        <p className="mt-1 text-sm text-muted-foreground leading-snug">
          Mesma equipe, muito mais atendimentos.
        </p>
      </div>
    </div>
  );
};

const INADIMPLENCIA = [
  { rotulo: "Antes", valor: 63, destaque: false },
  { rotulo: "Depois", valor: 33, destaque: true },
];

/** Grupo Pérola — barras comparando a inadimplência real: 63% → 33%. */
export const InadimplenciaBars = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">Inadimplência</p>

      <div className="space-y-3">
        {INADIMPLENCIA.map((b, i) => (
          <div key={b.rotulo}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">{b.rotulo}</span>
              <span className={b.destaque ? "font-bold text-primary" : "font-medium text-muted-foreground"}>
                {b.valor}%
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-primary/10 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${b.destaque ? "gradient-primary" : "bg-primary/35"}`}
                initial={{ width: 0 }}
                animate={inView ? { width: `${b.valor}%` } : undefined}
                transition={{ duration: 1.1, delay: i * 0.25, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
