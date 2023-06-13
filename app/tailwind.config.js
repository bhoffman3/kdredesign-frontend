/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins','sans-serif']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        orange: '#e56a54',
        navy: '#384967',
        sky: '#c6d6e3',
        yellow: '#fdd086',
      },
    },
  },
  plugins: [],
}

