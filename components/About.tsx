"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-28 lg:py-40 relative overflow-hidden"
    >
      {/* ── Animated gradient background ── */}
      <div className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-[#e0d8f0] via-[#fce0cc] to-[#d8f0c0]" />

      {/* ── Subtle grain texture overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.04,
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-dark/50">
            <Sparkles className="w-3.5 h-3.5" />
            Sobre nosotros
          </span>
        </motion.div>

        {/* ── Title with subtle line ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-dark tracking-tight leading-[1.1]"
        >
          Somos
          <br />
          <span className="text-terracotta">IMHO</span>
        </motion.h2>

        {/* ── Decorative separator ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 mb-12 w-16 h-[2px] bg-gradient-to-r from-transparent via-terracotta/60 to-transparent"
        />

        {/* ── Paragraphs ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg sm:text-xl leading-relaxed text-dark/75 font-light"
        >
          Somos una agencia creativa especializada en marketing digital.
          Entendemos tu marca y tus objetivos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center text-lg sm:text-xl leading-relaxed text-dark/75 font-light mt-6"
        >
          Trabajamos para construir una presencia digital auténtica que conecte
          con las personas correctas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-lg sm:text-xl leading-relaxed text-dark/75 font-light mt-6"
        >
          Trabajamos de forma cercana con cada cliente, entendiendo su negocio y
          adaptando la estrategia a lo que realmente necesita.
        </motion.p>
      </div>
    </section>
  );
}
