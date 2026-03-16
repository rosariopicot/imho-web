"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Las 5 marcas del portfolio mostradas como tiles visuales
const tiles = [
  { name: "DOU", service: "Community", bg: "#B8C3D9", text: "#0F0F0F", col: "col-span-2", row: "row-span-2" },
  { name: "HILO", service: "Diseño", bg: "#F2DDD0", text: "#0F0F0F", col: "col-span-1", row: "row-span-1" },
  { name: "UNUM", service: "Contenido", bg: "#C8F04D", text: "#0F0F0F", col: "col-span-1", row: "row-span-1", star: true },
  { name: "ZANNAS", service: "Estrategia", bg: "#C4673A", text: "#FFFFFF", col: "col-span-2", row: "row-span-1" },
  { name: "UNIQUE\nGETAWAY", service: "Reels", bg: "#0F0F0F", text: "#FFFFFF", col: "col-span-1", row: "row-span-1" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-cream pt-28 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Blob decorativo de fondo */}
      <div
        className="absolute top-0 right-0 w-[65%] h-[75%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, #B8C3D9 0%, transparent 65%)",
          filter: "blur(70px)",
          opacity: 0.45,
        }}
      />

      {/* Asterisco decorativo rotando */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute top-28 right-[6%] text-lime text-7xl font-bold hidden lg:block pointer-events-none select-none"
        style={{ lineHeight: 1 }}
      >
        ✳
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Columna izquierda: Texto ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-dark/55 border border-dark/20 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                Agencia Creativa de Marketing Digital
              </span>
            </motion.div>

            {/* Headline principal */}
            <motion.h1
              variants={itemVariants}
              className="font-syne font-black text-[3.2rem] lg:text-[4.5rem] xl:text-[5rem] leading-[0.92] tracking-tight text-dark"
            >
              Contenido
              <br />
              que{" "}
              <span className="text-terracotta italic">conecta</span>
              <br />
              marcas con
              <br />
              personas
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-dark/55 text-lg leading-relaxed max-w-md"
            >
              Somos IMHO. Gestionamos redes sociales, creamos contenido y
              producimos reels que hacen crecer a las marcas de verdad.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("portfolio")}
                className="bg-dark text-cream px-7 py-3.5 rounded-full font-medium text-sm hover:bg-dark/85 transition-all active:scale-95"
              >
                Ver nuestros trabajos
              </button>
              <button
                onClick={() => scrollTo("contacto")}
                className="flex items-center gap-2 text-dark px-7 py-3.5 rounded-full font-medium text-sm border border-dark/25 hover:border-dark hover:bg-dark/5 transition-all active:scale-95"
              >
                Hablemos
                <ArrowRight size={15} />
              </button>
            </motion.div>
          </motion.div>

          {/* ── Columna derecha: Grid de marcas ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            {/*
              Layout del grid (3 cols × 3 rows):
              | DOU  | DOU  | HILO |
              | DOU  | DOU  | UNUM |
              | ZAN  | ZAN  | UNIQ |
            */}
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[480px]">
              {/* DOU — grande */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="col-span-2 row-span-2 rounded-3xl p-6 flex flex-col justify-between cursor-default overflow-hidden relative"
                style={{ backgroundColor: tiles[0].bg }}
              >
                <span
                  className="font-syne font-black text-[5rem] leading-none opacity-[0.07] absolute -top-2 -left-2 select-none"
                  style={{ color: tiles[0].text }}
                >
                  {tiles[0].name}
                </span>
                <div />
                <div>
                  <p className="text-xs font-medium mb-1 opacity-50" style={{ color: tiles[0].text }}>
                    {tiles[0].service}
                  </p>
                  <h3 className="font-syne font-black text-2xl" style={{ color: tiles[0].text }}>
                    {tiles[0].name}
                  </h3>
                </div>
              </motion.div>

              {/* HILO */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl p-5 flex flex-col justify-between cursor-default"
                style={{ backgroundColor: tiles[1].bg }}
              >
                <span className="font-syne font-black text-3xl opacity-[0.08]" style={{ color: tiles[1].text }}>
                  {tiles[1].name}
                </span>
                <div>
                  <p className="text-[11px] font-medium mb-1 opacity-50" style={{ color: tiles[1].text }}>
                    {tiles[1].service}
                  </p>
                  <h3 className="font-syne font-black text-lg" style={{ color: tiles[1].text }}>
                    {tiles[1].name}
                  </h3>
                </div>
              </motion.div>

              {/* UNUM */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl p-5 flex flex-col justify-between cursor-default relative"
                style={{ backgroundColor: tiles[2].bg }}
              >
                <span className="absolute top-3 right-4 text-xl opacity-60" style={{ color: tiles[2].text }}>
                  ✳
                </span>
                <span className="font-syne font-black text-3xl opacity-[0.08]" style={{ color: tiles[2].text }}>
                  {tiles[2].name}
                </span>
                <div>
                  <p className="text-[11px] font-medium mb-1 opacity-50" style={{ color: tiles[2].text }}>
                    {tiles[2].service}
                  </p>
                  <h3 className="font-syne font-black text-lg" style={{ color: tiles[2].text }}>
                    {tiles[2].name}
                  </h3>
                </div>
              </motion.div>

              {/* ZANNAS */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="col-span-2 rounded-3xl p-5 flex flex-col justify-between cursor-default"
                style={{ backgroundColor: tiles[3].bg }}
              >
                <span className="font-syne font-black text-4xl opacity-[0.08]" style={{ color: tiles[3].text }}>
                  {tiles[3].name}
                </span>
                <div>
                  <p className="text-[11px] font-medium mb-1 opacity-50" style={{ color: tiles[3].text }}>
                    {tiles[3].service}
                  </p>
                  <h3 className="font-syne font-black text-xl" style={{ color: tiles[3].text }}>
                    {tiles[3].name}
                  </h3>
                </div>
              </motion.div>

              {/* UNIQUEGETAWAY */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl p-5 flex flex-col justify-between cursor-default"
                style={{ backgroundColor: tiles[4].bg }}
              >
                <span
                  className="font-syne font-black text-2xl opacity-[0.08] leading-tight"
                  style={{ color: tiles[4].text }}
                >
                  UG
                </span>
                <div>
                  <p className="text-[11px] font-medium mb-1 opacity-50" style={{ color: tiles[4].text }}>
                    {tiles[4].service}
                  </p>
                  <h3
                    className="font-syne font-black text-sm leading-tight"
                    style={{ color: tiles[4].text }}
                  >
                    UNIQUE
                    <br />
                    GETAWAY
                  </h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-dark/35 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 bg-dark/20"
        />
      </motion.div>
    </section>
  );
}
