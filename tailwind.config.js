/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['"Abril Fatface"', 'Times', 'serif'], // Corrected version
      },
      
    },
  },
  plugins: [],
}