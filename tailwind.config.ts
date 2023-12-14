import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      green: colors.green,
      purple: "#212170",
      blue: "#0557ff",
      gold: "#f38c06",
      pearl: "#fcfcfd",
      asphalt: "#2c3e50",
      gray: "#f6f6fa",
    },
  },
  darkMode: "class", // media & class
  plugins: [require("@tailwindcss/forms")],
};
export default config;
