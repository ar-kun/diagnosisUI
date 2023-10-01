/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./*.{html,js}'],
 darkMode: 'class',
 theme: {
  container: {
   center: true,
   padding: '16px',
  },
  extend: {
   colors: {
    primary: '#f3f2f5', //fdfff7 / f3f2f5 / fffeff
    dark: '#0f172a', //#00205a
    secondary: '#377DFF',
   },
   fontFamily: {
    primary: ['Inter', 'sans-serif'],
   },
  },
 },
 plugins: [],
};
