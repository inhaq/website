/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        arctic: "#F1F6F4",
        mint: "#D9E8E3",
        forsythia: "#FFC801",
        saffron: "#FF9932",
        nocturnal: "#114C5A",
        noir: "#172B36",
        dead: "#191f28",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
