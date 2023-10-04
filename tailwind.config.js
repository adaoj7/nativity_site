/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{html,js,jsx}","./index.htmlrs"],
mode: 'jit',
  theme: {
    screens: {
      'phone': '300px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        first: "#CED1C7",
        firstDarker: "#81856F",
        firstDarkest: "#6C6F5D",
        second: "#1f2f16",
        secondLighter: "#2F4422",
        secondLightest: "#375328",
        third: "#243068",
        fourth: "#502419",
        fifth: "#793A2F"
      }
    },
  },
  plugins: [],
}

