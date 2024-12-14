/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: "#004D73",
        green: "#00D121",
        greenDark: "#13A52A",
        white: "#ffffff",
        buttonClr: "#FF683E",
        midnightash: "#323131",
        purple: "#8400AB",
        purple2: "#7402BA",
        dark: "#000000",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        mod: { max: "639px" },
        expcard: { max: "1066px" },
        minilg: { min: "850px" },
        mid: { max: "767px" },
        Nlg: { max: "1023px" },
      },
    },
  },
  plugins: [],
};
