module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      container: {
        center: true,
      },
     fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/images/hero-background.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
