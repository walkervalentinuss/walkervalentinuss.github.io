/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#64748B',
        dark: '#0f172a',
      },
      screens: {
        '2xl' : '1320',
      },
    },
  },
  plugins: [],
}
