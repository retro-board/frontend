module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "at-light-green": "#44BA9F",
        "at-green": "#286D5D",
        "light-grey": "#F1F1F1",
      },
    },
    fontFamily: {
      Poppins: [
        "Poppins, sans-serif",
      ],
    },
    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
