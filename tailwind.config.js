/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {

        'Hanken-Grotesk': ['Hanken-Grotesk', 'sans-serif']
      },
      colors: {
        'Lightred': 'hsl(0, 100%, 67%)'
      }
    },
  },
  plugins: [],
}

