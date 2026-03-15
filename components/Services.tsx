"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    emoji: "ð¯",
    title: "GestiÃ³n estratÃ©gica de redes sociales",
    description:
      "Manejamos tu presencia digital de forma integral. Desde la planificaciÃ³n mensual de contenido hasta la publicaciÃ³n en los mejores horarios para tu audiencia.",
  },
  {
    number: "02",
    emoji: "ð¬",
    title: "CreaciÃ³n y ediciÃ³n de contenido",
    description:
      "Producimos y editamos reels, videos cortos y contenido audiovisual que comunica la identidad de tu marca y conecta con tu comunidad.",
  },
  {
    number: "03",
    emoji: "âï¸",
    title: "DiseÃ±o de piezas grÃ¡ficas",
    description:
      "DiseÃ±amos stories, posts, carruseles y todo tipo de piezas grÃ¡ficas que mantienen la coherencia visual y el estilo de tu marca.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 lg:py-32 bg-lavender relative overflow-hidden"
    >
      {/* Blob decorativo */}
      <div
        className="absolute bottom-0 left-0 w-[45%] h-[55%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, #EEEBE4 0%, transparent 65%)",
          filter: "blur(70px)",
          opacity: 0.4,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header de secciÃ³n */}
        <div className="flex items-center gap-4 mb-16">
          <motion.span
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lime text-4xl"
          >
            â³
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-syne font-black text-4xl lg:text-5xl text-dark"
          >
            Lo que hacemos
          </motion.h2>
        </div>

        {/* Grid de cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-beige rounded-3xl p-8 flex flex-col gap-6 cursor-default"
            >
              {/* Emoji + nÃºmero */}
              <div className="flex items-start justify-between">
                <span className="text-4xl">{service.emoji}</span>
                <span className="font-syne font-black text-7xl text-dark/[0.07] leading-none select-none">
                  {service.number}
                </span>
              </div>

              {/* Texto */}
              <div className="space-y-2">
                <h3 className="font-syne font-bold text-xl text-dark leading-snug">
                  {service.title}
                </h3>
                <p className="text-dark/55 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
