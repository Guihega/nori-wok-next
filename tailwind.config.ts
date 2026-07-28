import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17130f",
        rice: "#fffaf1",
        cream: "#f7eedf",
        nori: "#173f36",
        wasabi: "#97b65d",
        chili: "#b72025",
        gold: "#d7a542"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(40, 24, 12, 0.12)",
        lift: "0 16px 40px rgba(40, 24, 12, 0.18)"
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 20% 10%, rgba(255,255,255,.7), transparent 25%), radial-gradient(circle at 80% 30%, rgba(215,165,66,.16), transparent 26%)"
      }
    },
  },
  plugins: [],
};

export default config;
