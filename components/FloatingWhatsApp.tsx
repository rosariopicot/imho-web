"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

// ⚠️ REEMPLAZAR con el número de WhatsApp real (sin + ni espacios)
const WHATSAPP_NUMBER = "5491100000000";
const WHATSAPP_MESSAGE =
  "Hola! Vi su web y me gustaría hablar sobre un proyecto para mi marca.";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Aparece 3 segundos después de cargar la página
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-dark text-cream text-sm px-4 py-2.5 rounded-2xl whitespace-nowrap shadow-lg"
              >
                ¡Hablemos por WhatsApp! 👋
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón con efecto pulse */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
          >
            {/* Anillo de pulse */}
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-[#25D366]"
            />
            {/* Botón principal */}
            <span className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1fb958] transition-colors rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30">
              <MessageCircle size={26} fill="white" color="white" />
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
