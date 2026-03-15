"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail } from "lucide-react";

// â ï¸ REEMPLAZAR con el nÃºmero de WhatsApp real de IMHO (sin + ni espacios)
const WHATSAPP_NUMBER = "5491100000000";
const WHATSAPP_MESSAGE =
  "Hola! Vi su web y me gustarÃ­a hablar sobre un proyecto para mi marca.";
const INSTAGRAM_URL = "https://instagram.com/imho.creators";
const EMAIL = "imhocreators@gmail.com";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section
      id="contacto"
      className="py-28 lg:py-36 bg-beige relative overflow-hidden"
    >
      {/* IMHO ghost text de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-syne font-black text-[22vw] text-dark/[0.025] leading-none select-none">
          IMHO
        </span>
      </div>

      {/* Blob decorativo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #F2DDD0 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.5,
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Asterisco */}
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-lime text-5xl"
          >
            â³
          </motion.span>

          {/* Headline */}
          <h2 className="font-syne font-black text-5xl lg:text-7xl text-dark leading-[0.92] tracking-tight">
            Â¿TenÃ©s un
            <br />
            <span className="text-terracotta italic">proyecto</span>
            <br />
            en mente?
          </h2>

          {/* SubtÃ­tulo */}
          <p className="text-dark/55 text-lg leading-relaxed max-w-md mx-auto">
            Contanos de tu marca y te armamos una propuesta personalizada, sin
            compromiso.
          </p>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-dark text-cream px-8 py-4 rounded-full text-base font-medium transition-colors hover:bg-dark/85 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} fill="currentColor" strokeWidth={0} />
              Escribinos por WhatsApp
            </motion.a>

            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 border-2 border-dark text-dark px-8 py-4 rounded-full text-base font-medium hover:bg-dark hover:text-cream transition-colors w-full sm:w-auto justify-center"
            >
              <Instagram size={20} />
              @imho.creators
            </motion.a>
          </div>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-dark/40 text-sm hover:text-dark transition-colors"
          >
            <Mail size={14} />
            {EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
