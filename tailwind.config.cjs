/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts/**/*.{js,ts,jsx,tsx}",
    "./views/*.html"
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",

      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
