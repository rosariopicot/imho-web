import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#EEEBE4",
        dark: "#0F0F0F",
        terracotta: "#C4673A",
        lavender: "#B8C3D9",
        lime: "#C8F04D",
        beige: "#F2DDD0",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
