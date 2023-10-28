/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        balck: "#1b1a1c",
        white: "#ffff",
        primary: "#f79d2b",
        secondary: "#1a2940",
        lightgray: "#999",
        darkgray: "#555",
      },
    },
  },
  plugins: [],
};
