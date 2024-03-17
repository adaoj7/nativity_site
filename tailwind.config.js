/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}", "./index.html"],
    mode: "jit",
    theme: {
        screens: {
            phone: "300px",
            // => @media (min-width: 640px) { ... }

            desktop: "800px",
            // => @media (min-width: 1024px) { ... }

            // 'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            colors: {
                //light
                firstLight: "#FFFFFF",
                //light
                secondLight: "#F7E5B5",
                // cornsilk
                cornsilkLight: "#FEFAE0",
                // Buff
                thirdLight: "#D4A373",
                // Beige (green) ^^
                "beigeGreen-400": "#D5DCBC",
                // Dark green
                darkGreenLight: "#1f2f16",
                //calPoly
                calPoly: "#2E4521",
                // I need to make some better greens for contrast with the top

                // Alternate color attempts
                "beigeGreen-400": "#CBD5AF",
                "beigeGreen-300": "#E5EAD7",
                "beigeGreen-200": "#E6EAD7",
                "beigeGreen-100": "#EEF1E4",
                "beigeGreen-50": "#F7F8F2",
                "olivineGreen-300": "#A9B979",
                "olivineGreen-200": "#B1C087",
                "olivineGreen-100": "#B9C794",
                "olivineGreen-50": "#C2CEA1",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        base: true,
        darkTheme: "light",
    },
};
