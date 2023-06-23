/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006749",
        primary200: "#CCE1DB",
        neutral900: '#0F172A',
        secodry: "#94A3B8",
        third: "#CBD5E1",
        sidebarText: "#526581",
        title: "#09244B",
        grayText: "#8491A5",
        tableRow: "#F1F5F9",
        border_color: "#94A3B8",
        tertiary: "#000000",
        background: "#E6F0ED",
      },
    },
  },
  plugins: [],
};
