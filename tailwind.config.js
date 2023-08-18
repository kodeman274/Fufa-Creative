module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#1E90FF',
        accentHover: ',#2013d1',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        overview: "url('/src/assets/img/overview/bg-profil.png')",
        cta: "url('/src/assets/img/cta/bg-profil.png')",
      },
    },
  },
  plugins: [],
};
