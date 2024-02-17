/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'estradex-red': '#A60D28',
        'estradex-blue': '#05234B'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: ['light'],
  },
}