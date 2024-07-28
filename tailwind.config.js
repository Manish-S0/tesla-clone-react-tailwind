/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'model-3': "url('./src/assets/model-3.avif')",
        'model-x': "url('./src/assets/model-x.avif')",
        'model-y': "url('./src/assets/model-y.avif')",
        'model-s':"url('./src/assets/Model-S.avif')",
        'solar': "url('./src/assets/solarpanels.avif')",
        'solarroof': "url('./src/assets/solarRoof.avif')",
        'powerwall':'url("./src/assets/Powerwall.avif")',
        'cybertruck':'url("./src/assets/Cybertruck.avif")',
        'accessories':'url("./src/assets/Accessories.avif")'
      },
    },
    screens: {
      'xs': '461px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

