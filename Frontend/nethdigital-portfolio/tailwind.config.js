module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d6efd',
        secondary: '#222',
        accent: '#ffb300',
        light: '#f1f1f1',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
