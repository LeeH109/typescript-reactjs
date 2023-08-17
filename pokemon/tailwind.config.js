
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
        // 
        fire:"#FF421C",
        poison:"#AB549A",
        grass:"#78CD54",
        water:"#2F9AFF",
        bug:"#ABBC1C",
        normal:"#BCBCAC",
        flying:"#669AFF",
        electric:"#FFCD30",
        ground:"#DEBC54",
        fairy:"#FFACFF",
        fighting:"#BC5442",
        psychic:"#FF549A",
        rock:"#BCAC66",
        ghost:"#6666BC",
        ice:"#78DEFF",
        steel:"#ABACBC",
        dragon:'#7866EF',
        dark:'#785442',
        // 
        primary: "#222222",
        secondary: "#F5E6E0",
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
        pattern :"url('/src/img/bg_pattern.png')",
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
