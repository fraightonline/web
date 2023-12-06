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
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      purple: "#",
    },
  },
  darkMode: "class", // media & class
  plugins: [require("@tailwindcss/forms")],
};
export default config;
