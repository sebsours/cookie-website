/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'
// const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'text': '#15100a',
        'background': '#fcfaf8',
        'primary': '#e6b678',
        'secondary': '#ddcebb',
        'accent': '#42180c',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
});

