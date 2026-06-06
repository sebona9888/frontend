/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1a1a2e",
                gold: "#f5a623",
                dark: "#111111",
            },
        },
    },
    plugins: [],
};