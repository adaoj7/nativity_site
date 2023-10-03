/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{html,js,jsx}","./index.htmlrs"],
mode: 'jit',
  theme: {
    extend: {
      colors: {
        first: "#a3a896",
        firstDarker: "#81856F",
        firstDarkest: "#6C6F5D",
        second: "#1f2f16",
        secondLighter: "#2F4422",
        secondLightest: "#41612E",
        third: "#243068",
        fourth: "#502419",
        fifth: "#793A2F"
      }
    },
  },
  plugins: [],
}

