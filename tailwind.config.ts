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
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      asphalt: "#101820",
      pearl: "#ededed",
      orange: "#ff9818",
      violet: "#ff176d",
      marine: "#4f42f7",
      aqua: "#12c9fd",
      sevenup: "#2ecc71",
    },
    extend: {
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  darkMode: "media", // media & class
  plugins: [require("@tailwindcss/forms")],
};
export default config;
