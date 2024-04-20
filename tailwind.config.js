/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        screens: {
            xxs: "280px",
            xs: "400px",
            sm: "525px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
            xxl: "1440px",
        },
        colors: {
            dim: {
                'bluePrimary': '#2A85FF',
                'secondBluePrimary': '#F5F7FB',
                'inpBcgDropDown': '#F4F4F5',
                'textPrimary': '#101016',
                'textSecondary': '#636B74',
                'textSmall': '#A0A0AE',
                'red': '#FF5A78',
                'gPrimary': '#41B7A7',
                'white': '#FFFFFF'
            },
        },
    },
    plugins: [],
}

