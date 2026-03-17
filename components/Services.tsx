"use client";

import { motion } from "framer-motion";
import { Target, Film, PenTool } from "lucide-react";

const services = [
  {
    icon: <Target size={32} strokeWidth={1.5} />,
    title: "Gestión de Redes Sociales",
    description:
      "Nos encargamos de todo: estrategia, planificación, publicación y community management. Tus redes, siempre activas y con contenido que conecta.",
    tags: ["Instagram", "TikTok", "Estrategia", "Calendario"],
  },
  {
    icon: <Film size={32} strokeWidth={1.5} />,
    title: "Producción de Reels",
    description:
      "Creamos reels que capturan la atención desde el primer segundo. Desde la idea hasta la edición final, nos ocupamos de cada detalle.",
    tags: ["Reels", "Edición", "Guiones", "Tendencias"],
  },
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: "Creación de Contenido",
    description:
      "Diseñamos contenido visual y escrito que refleja la esencia de tu marca. Cada pieza tiene un propósito y una estética cuidada.",
    tags: ["Diseño", "Copywriting", "Branding", "Fotografía"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 lg:py-32 bg-cream relative overflow-hidden"
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
        <div className="flex items-end justify-between mb-16">
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
        <div className="grid md:grid-cols-3 gap-5">
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
              className="group bg-dark rounded-3xl p-7 flex flex-col justify-between min-h-[320px] relative overflow-hidden"
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
                <div className="text-terracotta mb-6">{service.icon}</div>

                {/* Título */}
                <h3 className="font-syne font-bold text-xl text-white mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-white/45 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-white/30 border border-white/10 rounded-full px-3 py-1"
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
