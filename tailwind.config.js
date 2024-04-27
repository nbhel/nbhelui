/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F3C7E",
        balck: "#000000",
        white: "#ffff",
        secondary: "#1a2940",
        lightgray: "#999",
        darkgray: "#555",
      },
    },
  },
  plugins: [],
};
