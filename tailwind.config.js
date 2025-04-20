/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    screens: {
      xs: "360px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    extend: {},
  },
  daisyui: {
    themes: ["light"], // Disable dark mode and use only the light theme
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("daisyui")], // Add DaisyUI as a plugin
};
