module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lp2021: '#216A9C',
        blue: {
          1000: '#172a54',
        },
      },
      height: {
        section: '70rem',
        140: '35rem',
        180: '45rem',
      },
      width: {
        140: '35rem',
        180: '45rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
}
