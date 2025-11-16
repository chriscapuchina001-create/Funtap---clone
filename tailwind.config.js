/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-229": "rgb(229, 229, 229)",
        "gray-87": "rgb(87, 87, 87)",
        "gray-244": "rgb(244, 244, 244)",
        "gray-7e": "rgb(126, 126, 126)",
        "gray-1f": "rgb(31, 31, 31)",
        "gray-767": "rgb(118, 118, 118)",
        "gray-61616a": "rgb(97, 97, 106)",
        "gray-8d": "rgb(141, 141, 141)",
        "gray-da": "rgb(218, 218, 218)",
        "orange-ee4623": "#ee4623",
        "orange-ff753a": "#ff753a",
        "orange-fb5f14": "#fb5f14",
        fafbfb: "#fafbfb",
      },
      spacing: {
        15: "15px",
        16: "16px",
        20: "20px",
        24: "24px",
        25: "25px",
        26: "26px",
        30: "30px",
        40: "40px",
        58: "58px",
        69: "69px",
        88: "88px",
        100: "100px",
        768: "768px",
        736: "736px",
        600: "600px",
        450: "450px",
      },
      fontFamily: {
        helvetica: ["HelveticaNeue", "sans-serif"],
        display: ["Roboto", "sans-serif"],
      },
      fontSize: {
        13.5: "13.5px",
        14: "14px",
        15: "15px",
        15.75: "15.75px",
        16: "16px",
        18: "18px",
        22: "22px",
        24: "24px",
        40: "40px",
      },
      boxShadow: {
        custom: "0 2px 4px rgba(0, 0, 0, 0.16)",
      },
      clipPath: {
        ellipse: "ellipse(55% 102% at 50% 21%)",
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
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-clip-path"),
  ],
};
