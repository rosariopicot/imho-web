"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const brands = [
  {
    name: "DOU",
    service: "Community Management + Contenido",
    bg: "#B8C3D9",
    text: "#0F0F0F",
    span: "col-span-2 md:col-span-2",
    height: "min-h-[300px] md:min-h-[340px]",
    titleSize: "text-4xl md:text-5xl",
    ghostSize: "text-[6rem] md:text-[8rem]",
    delay: 0,
  },
  {
    name: "HILO",
    service: "Diseño de Piezas Gráficas",
    bg: "#F2DDD0",
    text: "#0F0F0F",
    span: "col-span-1",
    height: "min-h-[160px] md:min-h-[180px]",
    titleSize: "text-xl",
    ghostSize: "text-5xl",
    delay: 0.1,
  },
  {
    name: "UNUM",
    service: "Creación de Contenido",
    bg: "#C8F04D",
    text: "#0F0F0F",
    span: "col-span-1",
    height: "min-h-[160px] md:min-h-[180px]",
    titleSize: "text-xl",
    ghostSize: "text-5xl",
    delay: 0.2,
    star: true,
  },
  {
    name: "ZANNAS",
    service: "Estrategia + Community Management",
    bg: "#C4673A",
    text: "#FFFFFF",
    span: "col-span-1",
    height: "min-h-[180px] md:min-h-[200px]",
    titleSize: "text-2xl",
    ghostSize: "text-5xl",
    delay: 0.3,
  },
  {
    name: "UNIQUEGETAWAY",
    service: "Reels + Edición de Contenido",
    bg: "#0F0F0F",
    text: "#FFFFFF",
    span: "col-span-2",
    height: "min-h-[180px] md:min-h-[200px]",
    titleSize: "text-2xl",
    ghostSize: "text-6xl",
    delay: 0.4,
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-dark/45 text-xs font-medium uppercase tracking-[0.22em] mb-3"
            >
              Trabajos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-syne font-black text-4xl lg:text-6xl text-dark leading-[0.92] tracking-tight"
            >
              Nuestro
              <br />
              <span className="text-terracotta italic">trabajo</span>
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lime text-5xl hidden md:block"
          >
            ✳
          </motion.span>
        </div>

        {/*
          Grid layout (3 columnas):
          Fila 1–2: [DOU — 2 cols, 2 rows] [HILO — 1 col]
                    [DOU — continúa]        [UNUM — 1 col]
          Fila 3:   [ZANNAS — 1 col]        [UNIQUEGETAWAY — 2 cols]
        */}
        <div className="grid grid-cols-3 gap-4 lg:gap-5 auto-rows-auto">
          {/* DOU — grande (2 cols × 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: brands[0].delay }}
            whileHover="hover"
            className={`${brands[0].span} row-span-2 rounded-3xl overflow-hidden relative cursor-pointer group ${brands[0].height}`}
            style={{ backgroundColor: brands[0].bg }}
          >
            <div className="p-7 h-full flex flex-col justify-between" style={{ minHeight: "inherit" }}>
              {/* Nombre ghost de fondo */}
              <span
                className={`font-syne font-black ${brands[0].ghostSize} leading-none opacity-[0.06] absolute -top-3 -left-2 select-none pointer-events-none`}
                style={{ color: brands[0].text }}
              >
                {brands[0].name}
              </span>
              <div />
              {/* Footer de card */}
              <div className="flex items-end justify-between relative z-10">
                <div>
                  <p
                    className="text-xs font-medium mb-1 opacity-50"
                    style={{ color: brands[0].text }}
                  >
                    {brands[0].service}
                  </p>
                  <h3
                    className={`font-syne font-black ${brands[0].titleSize}`}
                    style={{ color: brands[0].text }}
                  >
                    {brands[0].name}
                  </h3>
                </div>
                <motion.div
                  variants={{ hover: { scale: 1.15, rotate: 45 } }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${brands[0].text}15` }}
                >
                  <ArrowUpRight size={18} style={{ color: brands[0].text }} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* HILO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: brands[1].delay }}
            className={`${brands[1].span} rounded-3xl overflow-hidden relative cursor-pointer ${brands[1].height}`}
            style={{ backgroundColor: brands[1].bg }}
          >
            <div className="p-6 h-full flex flex-col justify-between" style={{ minHeight: "inherit" }}>
              <span
                className={`font-syne font-black ${brands[1].ghostSize} leading-none opacity-[0.07] select-none`}
                style={{ color: brands[1].text }}
              >
                {brands[1].name}
              </span>
              <div>
                <p className="text-[11px] font-medium mb-1 opacity-50" style={{ color: brands[1].text }}>
                  {brands[1].service}
                </p>
                <h3 className={`font-syne font-black ${brands[1].titleSize}`} style={{ color: brands[1].text }}>
                  {brands[1].name}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* UNUM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: brands[2].delay }}
            className={`${brands[2].span} rounded-3xl overflow-hidden relative cursor-pointer ${brands[2].height}`}
            style={{ backgroundColor: brands[2].bg }}
          >
            <div className="p-6 h-full flex flex-col justify-between" style={{ minHeight: "inherit" }}>
              <span className="absolute top-4 right-4 text-xl" style={{ color: brands[2].text }}>
                ✳
              </span>
              <span
                className={`font-syne font-black ${brands[2].ghostSize} leading-none opacity-[0.07] select-none`}
                style={{ color: brands[2].text }}
              >
                {brands[2].name}
              </span>
              <div>
                <p className="text-[11px] font-medium mb-1 opacity-50" style={{ color: brands[2].text }}>
                  {brands[2].service}
                </p>
                <h3 className={`font-syne font-black ${brands[2].titleSize}`} style={{ color: brands[2].text }}>
                  {brands[2].name}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* ZANNAS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: brands[3].delay }}
            className={`${brands[3].span} rounded-3xl overflow-hidden relative cursor-pointer ${brands[3].height}`}
            style={{ backgroundColor: brands[3].bg }}
          >
            <div className="p-6 h-full flex flex-col justify-between" style={{ minHeight: "inherit" }}>
              <span
                className={`font-syne font-black ${brands[3].ghostSize} leading-none opacity-[0.07] select-none`}
                style={{ color: brands[3].text }}
              >
                {brands[3].name}
              </span>
              <div>
                <p className="text-[11px] font-medium mb-1 opacity-50" style={{ color: brands[3].text }}>
                  {brands[3].service}
                </p>
                <h3 className={`font-syne font-black ${brands[3].titleSize}`} style={{ color: brands[3].text }}>
                  {brands[3].name}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* UNIQUEGETAWAY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: brands[4].delay }}
            className={`${brands[4].span} rounded-3xl overflow-hidden relative cursor-pointer ${brands[4].height}`}
            style={{ backgroundColor: brands[4].bg }}
          >
            <div className="p-6 h-full flex flex-col justify-between" style={{ minHeight: "inherit" }}>
              <span
                className={`font-syne font-black ${brands[4].ghostSize} leading-none opacity-[0.06] select-none`}
                style={{ color: brands[4].text }}
              >
                {brands[4].name}
              </span>
              <div>
                <p className="text-[11px] font-medium mb-1 opacity-50" style={{ color: brands[4].text }}>
                  {brands[4].service}
                </p>
                <h3 className={`font-syne font-black ${brands[4].titleSize}`} style={{ color: brands[4].text }}>
                  {brands[4].name}
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-dark/35 text-sm mt-10 flex items-center justify-center gap-2"
        >
          <span>Pronto más trabajos y casos de éxito</span>
          <span className="text-lime">✳</span>
        </motion.p>
      </div>
    </section>
  );
}
