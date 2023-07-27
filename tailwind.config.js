/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        lg: "1440px",
      },
      colors: {
        "primary-900": "hsl(183, 100%, 15%)",
        "primary-600": "hsl(172, 67%, 45%)",
        "primary-400": "hsl(186, 14%, 43%)",
        "primary-300": "hsl(184, 14%, 56%)",
        "primary-200": "hsl(185, 41%, 84%)",
        "primary-100": " hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        24: "24px",
      },
      fontFamily: {
        spaceMono: ["Space Mono"],
      },
      fontWeight: {
        "fw-bold-700": 700,
      },
    },
  },
  plugins: [],
};
