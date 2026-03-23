"use client";

import { motion } from "framer-motion";
import { Target, Film, PenTool } from "lucide-react";

const cardGradients = [
    "animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-[#dbd5f0] via-[#e8dff5] to-[#f0e8f8]",
    "animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-[#f5e0d0] via-[#fae8da] to-[#fdf0e6]",
    "animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-[#ddf0c8] via-[#e8f5d8] to-[#f0f8e4]",
  ];

const services = [
  {
    icon: <Target size={32} strokeWidth={1.5} />,
    title: "Gestión Estratégica de Redes",
    description:
      "Analizamos tu marca y definimos qué comunicar, cómo y para quién. Nos encargamos de planificar y publicar contenido de forma constante, para que tus redes estén siempre activas.",
    tags: ["Estrategia", "Planificación", "Community", "Redes"],
  },
  {
    icon: <Film size={32} strokeWidth={1.5} />,
    title: "Edición de Videos",
    description:
      "Si ya contás con contenido en crudo, lo adaptamos a formatos que funcionan en redes. Editamos reels con foco en retención, ritmo y dinamismo.",
    tags: ["Reels", "Edición", "Ritmo", "Retención"],
  },
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: "Creación de Contenido",
    description:
      "Desarrollamos ideas, estructuras y piezas de contenido pensadas para redes. Diseñamos, grabamos y editamos, adaptando cada pieza a la identidad de la marca.",
    tags: ["Diseño", "Grabación", "Edición", "Identidad"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-20 sm:py-24 lg:py-32 bg-cream relative overflow-hidden"
    >
      {/* Blob decorativo */}
      <div
        className="absolute bottom-0 left-0 w-[50%] h-[50%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, #C8F04D 0%, transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.2,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 sm:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-terracotta mb-4"
            >
              <Target size={36} strokeWidth={1.5} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-dark/45 text-xs font-medium uppercase tracking-[0.22em] mb-3"
            >
              Servicios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-syne font-black text-4xl lg:text-6xl text-dark leading-[0.92] tracking-tight"
            >
              Lo que
              <br />
              <span className="text-terracotta italic">hacemos</span>
            </motion.h2>
          </div>
        </div>

        {/* Grid de servicios */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className={`group ${cardGradients[index]} rounded-2xl md:rounded-3xl p-6 md:p-7 flex flex-col justify-between min-h-[280px] md:min-h-[320px] relative overflow-hidden border border-dark/8`}
            >
              {/* Glow sutil en hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(200,240,77,0.08) 0%, transparent 60%)",
                }}
              />

              <div className="relative z-10">
                {/* Icono */}
                <div className="text-terracotta mb-5 md:mb-6">{service.icon}</div>

                {/* Título */}
                <h3 className="font-syne font-bold text-lg md:text-xl text-dark mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-dark/45 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5 md:mt-6 relative z-10">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-dark/30 border border-dark/15 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
