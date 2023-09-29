/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
colors:{
  'green': {
    50: '#e8f9ea',
    100: '#c8e8cd',
    200: '#a7d7ad',
    300: '#85c78b',
    400: '#63b770',
    500: '#499d5c',
    600: '#387a4c',
    700: '#275739',
    800: '#153524',
    900: '#00130a',
  }
}
    },
  },
  plugins: [],
}