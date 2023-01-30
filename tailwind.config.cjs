const { tailwindcssPaletteGenerator } = require('@bobthered/tailwindcss-palette-generator');
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: tailwindcssPaletteGenerator({
        colors: ['#3a41cb', '#1c78e9', '#76778f'],
        names: ['primary', 'secondary', 'gray']
      }),
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
