import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMHO â Agencia Creativa de Marketing Digital",
  description:
    "Somos IMHO. Agencia creativa especializada en gestiÃ³n de redes sociales, creaciÃ³n de contenido, ediciÃ³n de reels y estrategia digital.",
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
    title: "IMHO â Agencia Creativa de Marketing Digital",
    description:
      "Creamos contenido que conecta marcas con personas. GestiÃ³n de redes, reels y estrategia digital.",
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
        className={`${syne.variable} ${inter.variable} font-inter bg-cream text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
