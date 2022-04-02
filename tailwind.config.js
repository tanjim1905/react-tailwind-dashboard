module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        primary: "#0D53FC",
        secondary: "#0D53FC",
        bgColor: "#F2F5F9"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}