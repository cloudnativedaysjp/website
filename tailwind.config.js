module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lp2021: '#216A9C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
