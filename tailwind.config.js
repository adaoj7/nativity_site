/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{html,js,jsx}","./index.htmlrs"],
mode: 'jit',
  theme: {
    screens: {
      'phone': '300px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1310px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        // cornsilk
        first: "#FEFAE0",
        // Peach
        second: "#F7E5B5",
        // Buff
        third: "#D4A373",
        // Beaver
        fourth: "#A17C6B",
        // Jet
        fifth: "#353535",
        umber: "#6B5950",
        darkGreen: "#1F2A13"
      }
    },
  },
  plugins: [],
}

