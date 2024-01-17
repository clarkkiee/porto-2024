/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/heroprf1.jpg')",
      },
      colors: {
        "primary-dark" : "#161415",
        "sand": "#f3e1c7",
        "cream": "#dccaa8",
        "orange": "#f45325"
      },
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],

}