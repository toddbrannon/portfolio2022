module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-sea-blue': '#011D2B',
        'tailwind-blue': '#10172A'
      },
      height: {
        'custom-height': '80vh',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}