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
        'model-s': "url('./src/assets/images/model-s.avif')",
      },
    },
  },
  plugins: [],
}

