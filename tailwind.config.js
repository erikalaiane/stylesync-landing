/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B91C1C',
        'primary-dark': '#7F1D1D',
        secondary: '#1F2937',
        accent: '#F59E0B',
        pop: '#10B981',
      },
    },
  },
  plugins: [],
}