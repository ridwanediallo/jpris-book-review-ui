/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'prime-w': '#fafafa',
      },
      boxShadow: {
        '1bs': '0 2px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
