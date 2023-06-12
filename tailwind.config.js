/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      colors: {
        'primary': '#525258',
        'secondary': '#03041C',
        'red': '#F50963',
      },
    },
  },
  plugins: [],
}