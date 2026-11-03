module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0F2530', lagoon: '#0B5563', deep: '#08323B', sky: '#E6F0F2', saffron: '#F4B33E', mist: '#9DB4BB' },
      fontFamily: { display: ['var(--font-display)', 'sans-serif'], sans: ['var(--font-body)', 'sans-serif'] },
    },
  },
  plugins: [],
};
