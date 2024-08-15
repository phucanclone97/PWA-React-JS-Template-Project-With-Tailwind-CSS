/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important:"#root",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"], // Disable dark mode and use only the light theme
  },
  plugins: [require("daisyui")], // Add DaisyUI as a plugin
};
