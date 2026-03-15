"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Componente que anima un nÃºmero del 0 al valor final cuando entra en viewport
function AnimatedNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    number: 20,
    suffix: "+",
    label: "Marcas trabajadas",
    description: "Desde emprendimientos hasta marcas consolidadas",
  },
  {
    number: 100,
    suffix: "%",
    label: "Contenido original",
    description: "Todo lo que creamos es Ãºnico para tu marca",
  },
  {
    number: 2,
    suffix: " aÃ±os",
    label: "Creando contenido",
    description: "De experiencia en el mundo del marketing digital",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-24 lg:py-32 bg-dark relative overflow-hidden"
    >
      {/* Blob terracotta de fondo */}
      <div
        className="absolute top-0 right-0 w-[55%] h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, #C4673A 0%, transparent 65%)",
          filter: "blur(90px)",
          opacity: 0.12,
        }}
      />
      {/* Blob lavender de fondo */}
      <div
        className="absolute bottom-0 left-0 w-[40%] h-[40%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, #B8C3D9 0%, transparent 65%)",
          filter: "blur(90px)",
          opacity: 0.1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ââ Columna izquierda: Texto ââ */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ opacity: 0, rotate: -90 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-lime text-4xl"
              >
                â³
              </motion.span>
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/40 text-xs font-medium uppercase tracking-[0.22em]"
              >
                Sobre nosotros
              </motion.p>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-syne font-black text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.92] tracking-tight"
            >
              Somos
              <br />
              <span className="text-terracotta italic">IMHO</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/55 text-lg leading-relaxed"
            >
              Somos una agencia creativa especializada en marketing digital.
              Creemos que el buen contenido no solo se ve, se siente. Trabajamos
              junto a las marcas para construir una presencia digital autÃ©ntica
              que conecte con las personas correctas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/40 leading-relaxed"
            >
              Cada pieza que creamos tiene un propÃ³sito. Desde el primer reel
              hasta la Ãºltima story, todo estÃ¡ pensado para hacer crecer tu
              comunidad y tu negocio.
            </motion.p>
          </div>

          {/* ââ Columna derecha: Stats ââ */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  borderColor: "rgba(255,255,255,0.2)",
                  transition: { duration: 0.2 },
                }}
                className="border border-white/10 rounded-2xl p-6 flex items-center gap-6 transition-colors"
              >
                <span className="font-syne font-black text-5xl text-lime leading-none w-36 shrink-0">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </span>
                <div>
                  <p className="font-syne font-bold text-white text-lg leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-white/35 text-sm mt-1">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
