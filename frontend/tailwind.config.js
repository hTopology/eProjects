/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006749",
        secodry: "#94A3B8",
        third: "#CBD5E1",
        border_color: "#94A3B8",
        tertiary: "#000000",
        background: "#E6F0ED",
      },
    },
  },
  plugins: [],
};
