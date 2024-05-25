/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'model-3': "url('./src/assets/images/model-3.avif')",
        'model-x': "url('./src/assets/images/model-x.avif')",
        'model-y': "url('./src/assets/images/model-y.avif')",
        'model-s':"url('./src/assets/images/Model-S.avif')",
        'solar': "url('./src/assets/images/solarpanels.avif')",
        'solarroof': "url('./src/assets/images/solarRoof.avif')",
        'powerwall':'url("./src/assets/images/Powerwall.avif")',
        'cybertruck':'url("./src/assets/images/cyberTruck.avif")',
        'accessories':'url("./src/assets/images/Accessories.avif")'
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

