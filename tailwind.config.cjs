/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [], content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    },
    colors: {
      "text-color": "#f8adad",
      "alt-text-color": "#ff8383",
      "title-color": "rgb(168 162 158)",
      "background-color": "rgb(15 23 42)",
      "alt-background-color": "rgb(51,65,85)",
      "overlay": "rgba(0, 0, 0, 0.5)"
    },
  },
  plugins: [],
}
