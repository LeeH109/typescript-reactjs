module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(100%)", opacity: " 0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        



      },
      animation: {
        'wiggle-slow': 'wiggle 3s linear infinite',
      }
    },
  },
  plugins: [],
};
