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
        first: "#FEFAE0",
        second: "#F7E5B5",
        third: "#D4A373",
        fourth: "#A17C6B",
        fifth: "#353535"
      }
    },
  },
  plugins: [],
}

