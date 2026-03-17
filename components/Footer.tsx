"use client";

import { Instagram, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a1535] via-[#1e1a2e] to-[#0F0F0F] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Fila principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="hover:opacity-70 transition-opacity"
          >
            <Logo height={30} variant="white" />
          </button>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {[
              { label: "Servicios", id: "servicios" },
              { label: "Portfolio", id: "portfolio" },
              { label: "Nosotros", id: "nosotros" },
              { label: "Contacto", id: "contacto" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white/35 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/imho.creators"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:imhocreators@gmail.com"
              className="text-white/35 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            Â© {new Date().getFullYear()} IMHO. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs">Hecho con amor en Buenos Aires</p>
        </div>
      </div>
    </footer>
  );
}
