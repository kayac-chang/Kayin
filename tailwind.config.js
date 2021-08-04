const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,

    extend: {
      colors: {
        purple: {
          dark: `#0e0b25`,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
