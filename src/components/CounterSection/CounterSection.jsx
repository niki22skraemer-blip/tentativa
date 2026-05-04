import { useEffect, useRef, useState } from "react";
import "./CounterSection.css";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    setValue(0);

    const start = performance.now();
    const to = Number(target) || 0;

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);

      setValue(Math.round(to * eased));

      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else setValue(to);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [target, durationMs]);

  return value;
}

function formatPtBr(n) {
  return Number(n).toLocaleString("pt-BR");
}

function CounterItem({ target, label, prefix = "", suffix = "", durationMs = 1200 }) {
  const value = useCountUp(target, durationMs);

  return (
    <div className="counter">
      <h1>
        {prefix}
        {formatPtBr(value)}
        {suffix}
      </h1>
      <h3>{label}</h3>
    </div>
  );
}

export default function CounterSection({ items, durationMs = 1200, className = "" }) {
  return (
    <section className={className}>
      <div className="counters">
        <div>
          {items.map((it, idx) => (
            <CounterItem
              key={idx}
              target={it.target}
              label={it.label}
              prefix={it.prefix || ""}
              suffix={it.suffix || ""}
              durationMs={it.durationMs ?? durationMs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
