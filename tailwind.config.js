module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'banner': "url('/home/home.jpg')"
      }),
      height: () => ({
        'vh-85': "85vh"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
