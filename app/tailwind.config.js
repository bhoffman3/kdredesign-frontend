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
        orangeLighten: '#eb8b7a',
        orangeDarken: '#e15137',

        navy: '#384967',
        navyLighten: '#475e85',
        navyDarken: '#2d3b53',

        yellow: '#fdd086',
        yellowLighten: '#fee1b4',
        yellowDarken: '#fdc468',

        sky: '#c6d6e3',
        gray: '#75787b',
        lightGray: '#e5e1e6',
      },
    },
  },
  plugins: [],
}

