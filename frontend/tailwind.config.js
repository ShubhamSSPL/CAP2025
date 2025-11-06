/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0e3f8a',
        secondary: '#b75b12',
        accent: '#F6223F',
      },
    },
  },
  plugins: [],
  important: true,
}
