/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bloom: {
          linen: '#F7F4F0',
          fog: '#D6D1CA',
          green: '#5E7A5A',
          'green-dark': '#3D5239',
          pink: '#E8A0BF',
          'pink-dark': '#D4779F',
          ink: '#2C2A27',
          'ink-muted': '#6B6660',
          card: '#FDFBF8',
          border: '#E8E3DC',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        'linen-gradient': 'linear-gradient(135deg, #F7F4F0 0%, #EDE8E1 100%)',
        'green-gradient': 'linear-gradient(135deg, #5E7A5A 0%, #3D5239 100%)',
      },
    },
  },
  plugins: [],
};
