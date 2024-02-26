/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Karla", "sans-serif", ...defaultTheme.fontFamily.sans],
        sg: ["Space Grotesk", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        arctic: "#F1F6F4",
        mint: "#D9E8E3",
        forsythia: "#AED4D2",
        saffron: "#FCA07F",
        nocturnal: "#114C5A",
        noir: "#172B36",
        dead: "#191f28",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
