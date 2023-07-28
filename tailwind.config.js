/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid-three': 'repeat(auto-fit,minmax(25rem,1fr))',
        'fluid-four': 'repeat(auto-fit,minmax(20rem,1fr))',
        'fluid-five': 'repeat(auto-fit,minmax(15rem,1fr))',
        'fluid-six': 'repeat(auto-fit,minmax(10rem,1fr))',
      },
      colors: {
        mainColor: '#12837c',
        // mainColor: '#F7A4A4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
};
