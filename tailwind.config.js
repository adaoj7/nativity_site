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
                // cornsilk
                first: "#FFFFFF",
                cornsilk: "#FEFAE0",
                // Peach
                second: "#F7E5B5",
                // Buff
                third: "#D4A373",
                thirdInverted: "#2b5c8c",
                // Beaver
                fourth: "#A17C6B",
                // Jet
                fifth: "#353535",
                umber: "#6B5950",
                darkGreen: "#1f2f16",
                calPoly: "#2E4521",
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
