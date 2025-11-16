/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bitcount': ['Bitcount Grid Single', 'monospace'],
      }
    },
  },
  plugins: [],
}

