/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Geist Mono", "monospace"],
        sans: [
          "Geist Sans",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      colors: {
        gray: {
          1: "hsl(var(--gray-1) / <alpha-value>)",
          2: "hsl(var(--gray-2) / <alpha-value>)",
          3: "hsl(var(--gray-3) / <alpha-value>)",
          4: "hsl(var(--gray-4) / <alpha-value>)",
          5: "hsl(var(--gray-5) / <alpha-value>)",
          6: "hsl(var(--gray-6) / <alpha-value>)",
          7: "hsl(var(--gray-7) / <alpha-value>)",
          8: "hsl(var(--gray-8) / <alpha-value>)",
          9: "hsl(var(--gray-9) / <alpha-value>)",
          10: "hsl(var(--gray-10) / <alpha-value>)",
        },
        blue: {
          1: "hsl(var(--blue-1) / <alpha-value>)",
          2: "hsl(var(--blue-2) / <alpha-value>)",
          3: "hsl(var(--blue-3) / <alpha-value>)",
          4: "hsl(var(--blue-4) / <alpha-value>)",
          5: "hsl(var(--blue-5) / <alpha-value>)",
          6: "hsl(var(--blue-6) / <alpha-value>)",
          7: "hsl(var(--blue-7) / <alpha-value>)",
          8: "hsl(var(--blue-8) / <alpha-value>)",
          9: "hsl(var(--blue-9) / <alpha-value>)",
          10: "hsl(var(--blue-10) / <alpha-value>)",
        },
        red: {
          1: "hsl(var(--red-1) / <alpha-value>)",
          2: "hsl(var(--red-2) / <alpha-value>)",
          3: "hsl(var(--red-3) / <alpha-value>)",
          4: "hsl(var(--red-4) / <alpha-value>)",
          5: "hsl(var(--red-5) / <alpha-value>)",
          6: "hsl(var(--red-6) / <alpha-value>)",
          7: "hsl(var(--red-7) / <alpha-value>)",
          8: "hsl(var(--red-8) / <alpha-value>)",
          9: "hsl(var(--red-9) / <alpha-value>)",
          10: "hsl(var(--red-10) / <alpha-value>)",
        },
        yellow: {
          1: "hsl(var(--yellow-1) / <alpha-value>)",
          2: "hsl(var(--yellow-2) / <alpha-value>)",
          3: "hsl(var(--yellow-3) / <alpha-value>)",
          4: "hsl(var(--yellow-4) / <alpha-value>)",
          5: "hsl(var(--yellow-5) / <alpha-value>)",
          6: "hsl(var(--yellow-6) / <alpha-value>)",
          7: "hsl(var(--yellow-7) / <alpha-value>)",
          8: "hsl(var(--yellow-8) / <alpha-value>)",
          9: "hsl(var(--yellow-9) / <alpha-value>)",
          10: "hsl(var(--yellow-10) / <alpha-value>)",
        },
        green: {
          1: "hsl(var(--green-1) / <alpha-value>)",
          2: "hsl(var(--green-2) / <alpha-value>)",
          3: "hsl(var(--green-3) / <alpha-value>)",
          4: "hsl(var(--green-4) / <alpha-value>)",
          5: "hsl(var(--green-5) / <alpha-value>)",
          6: "hsl(var(--green-6) / <alpha-value>)",
          7: "hsl(var(--green-7) / <alpha-value>)",
          8: "hsl(var(--green-8) / <alpha-value>)",
          9: "hsl(var(--green-9) / <alpha-value>)",
          10: "hsl(var(--green-10) / <alpha-value>)",
        },
        cyan: {
          1: "hsl(var(--cyan-1) / <alpha-value>)",
          2: "hsl(var(--cyan-2) / <alpha-value>)",
          3: "hsl(var(--cyan-3) / <alpha-value>)",
          4: "hsl(var(--cyan-4) / <alpha-value>)",
          5: "hsl(var(--cyan-5) / <alpha-value>)",
          6: "hsl(var(--cyan-6) / <alpha-value>)",
          7: "hsl(var(--cyan-7) / <alpha-value>)",
          8: "hsl(var(--cyan-8) / <alpha-value>)",
          9: "hsl(var(--cyan-9) / <alpha-value>)",
          10: "hsl(var(--cyan-10) / <alpha-value>)",
        },
        purple: {
          1: "hsl(var(--purple-1) / <alpha-value>)",
          2: "hsl(var(--purple-2) / <alpha-value>)",
          3: "hsl(var(--purple-3) / <alpha-value>)",
          4: "hsl(var(--purple-4) / <alpha-value>)",
          5: "hsl(var(--purple-5) / <alpha-value>)",
          6: "hsl(var(--purple-6) / <alpha-value>)",
          7: "hsl(var(--purple-7) / <alpha-value>)",
          8: "hsl(var(--purple-8) / <alpha-value>)",
          9: "hsl(var(--purple-9) / <alpha-value>)",
          10: "hsl(var(--purple-10) / <alpha-value>)",
        },
        pink: {
          1: "hsl(var(--pink-1) / <alpha-value>)",
          2: "hsl(var(--pink-2) / <alpha-value>)",
          3: "hsl(var(--pink-3) / <alpha-value>)",
          4: "hsl(var(--pink-4) / <alpha-value>)",
          5: "hsl(var(--pink-5) / <alpha-value>)",
          6: "hsl(var(--pink-6) / <alpha-value>)",
          7: "hsl(var(--pink-7) / <alpha-value>)",
          8: "hsl(var(--pink-8) / <alpha-value>)",
          9: "hsl(var(--pink-9) / <alpha-value>)",
          10: "hsl(var(--pink-10) / <alpha-value>)",
        },
        backdrop: "hsl(var(--backdrop) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        backgroundVariant: "hsl(var(--background-variant) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        textVariant: "hsl(var(--text-variant) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        primaryVariant: "hsl(var(--primary-variant) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        secondaryVariant: "hsl(var(--secondary-variant) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    preflight: false,
  },
  darkMode: "class",
};
