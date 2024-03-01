// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bsonmezprimary: '#6D6E70',
        bsonmezsecondary: '#F1F1F1',
        bsonmezline: 'E6E6E6'
      },
      spacing: {
        '150': '37.5rem',
        '160': '42.5rem',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
