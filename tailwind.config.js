/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alike: ['Alike', 'sans-serif'],
      },
      colors: {
        'khs-beige': '#f2eeed',
        'khs-dark': '#231f20',
        'khs-gray': '#d9d9d9',
        'khs-gray-text': '#aaa',
      },
      screens: {
        'tablet': '834px',
        'desktop': '1512px',
      },
    },
  },
  plugins: [],
}
