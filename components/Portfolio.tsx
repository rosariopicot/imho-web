"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ImageIcon, PlayCircle, Sparkles } from "lucide-react";

const brands = [
  {
    name: "ZANNAS",
    service: "Creación de contenido",
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
    service: "Community management y Edición de video",
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
    service: "Community management y Creación de contenido",
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
    service: "Creación de contenido",
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
    service: "Community management y Edición de video",
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
    service: "Creación de contenido",
    bg: "#1a1a2e",
    text: "#FFFFFF",
    span: "col-span-2 md:col-span-2",
    height: "min-h-[180px] md:min-h-[200px]",
    titleSize: "text-2xl md:text-3xl",
    ghostSize: "text-[4rem] md:text-[5rem]",
    delay: 0.5,
  },
];

type BrandMediaItem = {
  type: "image" | "video";
  src?: string;
  placeholder?: string;
};

function getCloudinaryVideoUrl(src: string) {
  if (!src.includes("/video/upload/")) {
    return src;
  }

  const optimized = src.replace(
    "/video/upload/",
    "/video/upload/f_auto:video,q_auto,vc_auto/"
  );

  return optimized.replace(/\.(mov|mp4)$/i, ".mp4");
}

const brandMedia: Record<string, BrandMediaItem[]> = {
  ZANNAS: [
    { type: "image", src: "/media/zannas/zannas_1.webp" },
    { type: "image", src: "/media/zannas/zannas_2.webp" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276684/copy_9F7C6695-BAE9-4B3E-AA8B-27D325D69636_h5a9ie.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276690/Zannas_encuesta_Tipografia_d5jvcd.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276690/Zanna_s_CABA_j5veog.mp4" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276687/copy_B8C38686-594D-4149-A151-9628127341E0_njnk9z.mov" },
  ],
  DOU: [
    { type: "image", placeholder: "Próximamente contenido de DOU" },
  ],
  HILO: [
    { type: "image", src: "/media/hilo/hilo_1.webp" },
    { type: "image", src: "/media/hilo/hilo_2.webp" },
    { type: "image", src: "/media/hilo/hilo_3.webp" },
    { type: "image", src: "/media/hilo/hilo_4.webp" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276485/Coming_soon_HILO_y3kd90.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276489/Prueba_5_hilo_subtitulado_puomyc.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276486/Hilo_Respaldos_tdjg4x.mov" },
  ],
  UNUM: [
    { type: "image", src: "/media/unum/unum_1.webp" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276628/UNUM_Rutina_completa_subt_sin_musica_o3zmpn.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276628/UNUM_Lifestyle_3_subt_tahgcq.mov" },
  ],
  "UNIQUE GET AWAY": [
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774277054/copy_32533649-0A9C-4177-BED4-61FED411A5F5_fvgexh.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276759/Pantanal_sin_vibora_ihzhij.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276751/copy_9CF67528-DD0D-4A9C-94A0-5F1C47CD2BAD_m8h1u4.mov" },
  ],
  BABYSHADOW: [
    { type: "image", src: "/media/babyshadow/babyshadow_1.webp" },
    { type: "image", src: "/media/babyshadow/babyshadow_2.webp" },
    { type: "image", src: "/media/babyshadow/babyshadow_3.webp" },
    { type: "image", src: "/media/babyshadow/babyshadow_4.webp" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276579/Baby_Shadow_wet_bag_nuevo_whicvf.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276581/Babyshadow_cortina_subt_G_tvs59v.mov" },
    { type: "video", src: "https://res.cloudinary.com/duhd6ldzm/video/upload/v1774276579/Babyshadow_auto_sin_voz_uu18ot.mov" },
  ],
};

export default function Portfolio() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const selected = brands.find((b) => b.name === selectedBrand);
  const media = selectedBrand ? brandMedia[selectedBrand] || [] : [];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedBrand(null);
    }
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedBrand, handleKeyDown]);

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 auto-rows-auto">
          {brands.map((brand) => (
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
              className={`${brand.span} rounded-2xl md:rounded-3xl overflow-hidden relative cursor-pointer group ${brand.height}`}
              style={{ backgroundColor: brand.bg }}
            >
              <div
                className="p-4 md:p-6 lg:p-7 h-full flex flex-col justify-between relative"
                style={{ minHeight: "inherit" }}
              >
                <span
                  className={`font-syne font-black ${brand.ghostSize} leading-none opacity-[0.06] absolute -top-2 -left-1 select-none pointer-events-none`}
                  style={{ color: brand.text }}
                >
                  {brand.name.split(" ")[0]}
                </span>

                <div className="flex justify-end relative z-10">
                  <motion.div
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `${brand.text}20` }}
                    whileHover={{ scale: 1.15, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={16} style={{ color: brand.text }} />
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <p
                    className="text-[10px] md:text-[11px] font-medium mb-1 opacity-50 leading-snug"
                    style={{ color: brand.text }}
                  >
                    {brand.service}
                  </p>
                  <h3
                    className={`font-syne font-black ${brand.titleSize} leading-tight`}
                    style={{ color: brand.text }}
                  >
                    {"displayName" in brand
                      ? (brand as { displayName: string }).displayName
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i === 0 && <br />}
                            </span>
                          ))
                      : brand.name}
                  </h3>
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${brand.text}08 0%, ${brand.text}15 100%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

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
            <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-cream rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div
                className="p-6 md:p-8 rounded-t-3xl relative"
                style={{ backgroundColor: selected.bg }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBrand(null);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80 z-20 cursor-pointer"
                  style={{
                    backgroundColor: `${selected.text}20`,
                    color: selected.text,
                  }}
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
                <p
                  className="text-xs font-medium uppercase tracking-[0.15em] opacity-60 mb-2 pr-12"
                  style={{ color: selected.text }}
                >
                  {selected.service}
                </p>
                <h3
                  className="font-syne font-black text-3xl md:text-4xl"
                  style={{ color: selected.text }}
                >
                  {selected.name}
                </h3>
              </div>

              <div className="p-6 md:p-8">
                {media.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {media.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        className="rounded-2xl overflow-hidden"
                      >
                        {item.src ? (
                          item.type === "video" ? (
                            <video
                              src={getCloudinaryVideoUrl(item.src)}
                              controls
                              playsInline
                              preload="metadata"
                              className="w-full h-auto rounded-2xl bg-black"
                            >
                              Tu navegador no soporta la reproducción de video HTML5.
                            </video>
                          ) : (
                            <img
                              src={item.src}
                              alt={selectedBrand + " - " + (idx + 1)}
                              className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          )
                        ) : (
                          <div className="bg-dark/5 rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 text-dark/30">
                            {item.type === "video" ? (
                              <PlayCircle size={36} strokeWidth={1.2} />
                            ) : (
                              <ImageIcon size={36} strokeWidth={1.2} />
                            )}
                            <span className="text-xs text-center px-4">
                              {item.placeholder}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-dark/35">
                    <ImageIcon
                      size={48}
                      strokeWidth={1}
                      className="mx-auto mb-4 opacity-40"
                    />
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
