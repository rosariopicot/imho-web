"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ImageIcon, PlayCircle, Sparkles } from "lucide-react";

const brands = [
  {
    name: "ZANNAS",
    service: "Estrategia + Community Management",
    bg: "#C4673A",
    text: "#FFFFFF",
    span: "col-span-1 md:col-span-1",
    height: "min-h-[200px] md:min-h-[240px]",
    titleSize: "text-2xl md:text-3xl",
    ghostSize: "text-[4rem] md:text-[5rem]",
    delay: 0,
  },
  {
    name: "DOU",
    service: "Community Management + Contenido",
    bg: "#B8C3D9",
    text: "#0F0F0F",
    span: "col-span-2 md:col-span-2",
    height: "min-h-[200px] md:min-h-[240px]",
    titleSize: "text-3xl md:text-5xl",
    ghostSize: "text-[5rem] md:text-[7rem]",
    delay: 0.1,
  },
  {
    name: "HILO",
    service: "Diseño de Piezas Gráficas",
    bg: "#F2DDD0",
    text: "#0F0F0F",
    span: "col-span-1",
    height: "min-h-[180px] md:min-h-[200px]",
    titleSize: "text-xl md:text-2xl",
    ghostSize: "text-[3rem] md:text-[4rem]",
    delay: 0.2,
  },
  {
    name: "UNUM",
    service: "Creación de Contenido",
    bg: "#C8F04D",
    text: "#0F0F0F",
    span: "col-span-1",
    height: "min-h-[180px] md:min-h-[200px]",
    titleSize: "text-xl md:text-2xl",
    ghostSize: "text-[3rem] md:text-[4rem]",
    delay: 0.3,
  },
  {
    name: "UNIQUE GET AWAY",
    displayName: "UNIQUE\nGET AWAY",
    service: "Reels + Edición de Contenido",
    bg: "#0F0F0F",
    text: "#FFFFFF",
    span: "col-span-1",
    height: "min-h-[180px] md:min-h-[200px]",
    titleSize: "text-lg md:text-xl",
    ghostSize: "text-[2.5rem] md:text-[3rem]",
    delay: 0.4,
  },
  {
    name: "BABYSHADOW",
    service: "Contenido + Diseño Gráfico",
    bg: "#1a1a2e",
    text: "#FFFFFF",
    span: "col-span-2 md:col-span-2",
    height: "min-h-[180px] md:min-h-[200px]",
    titleSize: "text-2xl md:text-3xl",
    ghostSize: "text-[4rem] md:text-[5rem]",
    delay: 0.5,
  },
];

// Placeholder media — será reemplazado con contenido real de Google Drive
const brandMedia: Record<string, { type: "image" | "video"; placeholder: string }[]> = {
  ZANNAS: [
    { type: "image", placeholder: "Próximamente fotos y videos de ZANNAS" },
  ],
  DOU: [
    { type: "image", placeholder: "Próximamente fotos y videos de DOU" },
  ],
  HILO: [
    { type: "image", placeholder: "Próximamente fotos y videos de HILO" },
  ],
  UNUM: [
    { type: "image", placeholder: "Próximamente fotos y videos de UNUM" },
  ],
  "UNIQUE GET AWAY": [
    { type: "image", placeholder: "Próximamente fotos y videos de UNIQUE GET AWAY" },
  ],
  BABYSHADOW: [
    { type: "image", placeholder: "Próximamente fotos y videos de BABYSHADOW" },
  ],
};

export default function Portfolio() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const selected = brands.find((b) => b.name === selectedBrand);
  const media = selectedBrand ? brandMedia[selectedBrand] || [] : [];

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
            className="text-lime hidden md:block"
          >
            <Sparkles size={40} strokeWidth={1.5} />
          </motion.span>
        </div>

        {/* Grid de marcas */}
        <div className="grid grid-cols-3 gap-4 lg:gap-5 auto-rows-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: brand.delay }}
              whileHover={{
                scale: 1.03,
                y: -4,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              onClick={() => setSelectedBrand(brand.name)}
              className={`${brand.span} rounded-3xl overflow-hidden relative cursor-pointer group ${brand.height}`}
              style={{ backgroundColor: brand.bg }}
            >
              <div
                className="p-6 md:p-7 h-full flex flex-col justify-between relative"
                style={{ minHeight: "inherit" }}
              >
                {/* Nombre ghost de fondo */}
                <span
                  className={`font-syne font-black ${brand.ghostSize} leading-none opacity-[0.06] absolute -top-2 -left-1 select-none pointer-events-none`}
                  style={{ color: brand.text }}
                >
                  {brand.name.split(" ")[0]}
                </span>

                {/* Indicador de clickeable */}
                <div className="flex justify-end relative z-10">
                  <motion.div
                    className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `${brand.text}20` }}
                    whileHover={{ scale: 1.15, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={16} style={{ color: brand.text }} />
                  </motion.div>
                </div>

                {/* Footer de card */}
                <div className="relative z-10">
                  <p
                    className="text-[11px] font-medium mb-1 opacity-50"
                    style={{ color: brand.text }}
                  >
                    {brand.service}
                  </p>
                  <h3
                    className={`font-syne font-black ${brand.titleSize} leading-tight`}
                    style={{ color: brand.text }}
                  >
                    {"displayName" in brand
                      ? (brand as { displayName: string }).displayName.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))
                      : brand.name}
                  </h3>
                </div>
              </div>

              {/* Overlay hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${brand.text}08 0%, ${brand.text}15 100%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Nota al pie */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-dark/35 text-sm mt-10 flex items-center justify-center gap-2"
        >
          <span>Pronto más trabajos y casos de éxito</span>
          <span className="text-lime">
            <Sparkles size={16} strokeWidth={1.5} />
          </span>
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBrand && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            onClick={() => setSelectedBrand(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm" />

            {/* Panel del modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-cream rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              {/* Header del modal */}
              <div
                className="p-8 rounded-t-3xl relative"
                style={{ backgroundColor: selected.bg }}
              >
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: `${selected.text}20`,
                    color: selected.text,
                  }}
                >
                  <X size={20} />
                </button>
                <p
                  className="text-xs font-medium uppercase tracking-[0.15em] opacity-60 mb-2"
                  style={{ color: selected.text }}
                >
                  {selected.service}
                </p>
                <h3
                  className="font-syne font-black text-4xl"
                  style={{ color: selected.text }}
                >
                  {selected.name}
                </h3>
              </div>

              {/* Contenido del modal — galería */}
              <div className="p-8">
                {media.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {media.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        className="bg-dark/5 rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 text-dark/30"
                      >
                        {item.type === "video" ? (
                          <PlayCircle size={36} strokeWidth={1.2} />
                        ) : (
                          <ImageIcon size={36} strokeWidth={1.2} />
                        )}
                        <span className="text-xs text-center px-4">
                          {item.placeholder}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-dark/35">
                    <ImageIcon size={48} strokeWidth={1} className="mx-auto mb-4 opacity-40" />
                    <p className="text-sm">
                      Próximamente fotos y videos de este proyecto
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
