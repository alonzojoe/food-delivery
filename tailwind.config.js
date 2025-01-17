/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF6838",
        textDark: "#302F3C",
        textDarken: "575661",
        secondary: "#F1ECE7",
        tertiary: "#FAFAFA",
        textMuted: "#A2A2A8",
        textDarky: "#2B2934",
        danger: "#BD2D3C",
        warning: "#E0B234",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
