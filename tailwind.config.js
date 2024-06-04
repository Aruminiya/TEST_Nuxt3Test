/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        metaWallWhite: '#FFFFFF',
        mataWallGray: {
          100: '#EFECE7',
          200: '#E0E0E0',
          300: '#9B9893',
          400: '#707070',
        },
        mataWallBlack: '#000400',
        metaWallLightBlue: '#E2EDFA',
        mataWallBlue: '#03438D',
        mataWallYellow: '#EEC32A'
      }
    },
  },
  plugins: [],
}

