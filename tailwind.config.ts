import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // black: colors.black,
        // white: colors.white,
        // transparent: colors.transparent,
        // green: colors.green,
        purple: "#212170",
        blue: "#0557ff",
        gold: "#f38c06",
        pearl: "#fcfcfd",
        asphalt: "#2c3e50",
        charcoal: "#101820",
        chalk: "#7d8590",
        gray: "#f6f6fa",
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  darkMode: "media", // media & class
  plugins: [require("@tailwindcss/forms")],
};
export default config;
