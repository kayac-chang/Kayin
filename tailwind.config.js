const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,

    extend: {
      borderRadius: {
        "4xl": "3rem",
      },
      colors: {
        yellow: {
          400: `#eebc22`,
          dark: `#F1AA43`,
        },

        purple: {
          light: `#6961A4`,
          dark: `#211b4f`,
          darkest: `#0e0b25`,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
