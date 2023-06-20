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
        navyLighten: '#475e85',
        navy: '#384967',
        navyDarken: '#2d3b53',
        sky: '#c6d6e3',
        yellowLighten: '#fee1b4',
        yellow: '#fdd086',
        yellowDarken: '#fdc468',
      },
    },
  },
  plugins: [],
}

