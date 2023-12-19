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
        violet: "#ff2a60",
        blue: "#0557ff",
        pearl: "#fcfcfd",
        asphalt: "#2c3e50",
        charcoal: "#101820",
        chalk: "#7d8590",
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  darkMode: "class", // media & class
  plugins: [require("@tailwindcss/forms")],
};
export default config;
