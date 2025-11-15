/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["HelveticaNeue", "sans-serif"],
        display: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        768: "768px",
      },
      animation: {
        in: "in 0.3s ease-in-out",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
