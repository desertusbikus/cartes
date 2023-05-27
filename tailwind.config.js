/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        sans: ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        desert: 'rgb(245, 191, 33)',
      }
    },

  },
  plugins: [
    require('@tailwindcss/forms'),    
  ],
}