/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      button: '#0578FF',
    }),
    colors: {
      transparent: 'transparent',
      black: colors.black,
      mate: '#171717',
      white: colors.white,
      blue: colors.blue,
      gray: colors.gray,
      pink: colors.pink,
      red: colors.red,
      button: '#0578FF',
    },
    backgroundImage: () => ({
      logo: "url('/src/assets/background.jpg')",
    }),
    extend: {
      width: {
        login: '440px',
      },
    },
    container: {
      padding: '2rem',
    },
  },
  variants: {
    extend: { zIndex: ['hover'], fontWeight: ['hover'] },
  },
  plugins: [],
};
