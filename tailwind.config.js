import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/theme.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui", // prefix for themes
    addCommonColors: false, // override common colors (e.g. "blue", "green", "red")
    defaultTheme: "dark", // default theme from the themes object
    defaultExtendTheme: "dark", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {}, // dark theme colors
      },
      light: {
        layout: {}, // light theme layout tokens
        colors: {}, // light theme colors
      },
    },
  })],
};
