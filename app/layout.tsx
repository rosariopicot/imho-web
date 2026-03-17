import type { Metadata } from "next";
import { Syne, Montserrat } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMHO — Agencia Creativa de Marketing Digital",
  description:
    "Somos IMHO. Agencia creativa especializada en gestión de redes sociales, creación de contenido, edición de reels y estrategia digital.",
  keywords: [
    "agencia creativa",
    "marketing digital",
    "redes sociales",
    "contenido",
    "reels",
    "estrategia digital",
    "IMHO",
  ],
  openGraph: {
    title: "IMHO — Agencia Creativa de Marketing Digital",
    description:
      "Creamos contenido que conecta marcas con personas. Gestión de redes, reels y estrategia digital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${syne.variable} ${montserrat.variable} font-montserrat bg-cream text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
