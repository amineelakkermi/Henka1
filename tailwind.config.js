const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        // ألوان Tailwind الافتراضية الآمنة
        sky: colors.sky,
        stone: colors.stone,
        neutral: colors.neutral,
        slate: colors.slate,
        


        // ألوان مخصصة
        textColor: {
          light: "#4B5563", // Gris foncé pour le thème clair
          dark: "#A2A9B0",  // Gris clair pour le thème sombre
        },
        black1: "#101112",
        purple: {
          900: "#1C0F30",
          800: "#31135E",
          700: "#491D8B",
          600: "#6929C4",
          500: "#8A3FFC",
        },
      },
      fontFamily: {
        grotesk: ['AktivGrotesk', 'sans-serif'],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
