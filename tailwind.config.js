module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          500:"#404366",
          900:"#000",
          600:"#2B3A77",
          700:"#4B4B4B",
          200:"#9092A9"
        },
        primary:{
          500:"#D97559",
        },
        fadeWhite:{
          500:"#FAFAFA",
          200:"#F2F2F2",
          400:"#FFFFFF"
        },
        borderColor:{
          500:"#C8C8C8"
        },
        borderColor2:{
          500:"#E1E1E1"
        },
        borderColor3:{
          500:"#9092A9"
        },
        borderColor4:{
          500:"#C9CBE2"
        },
        gray:{
          500:"#818181"
        }
      },
      backgroundColor:["active"],
    },
    height: {
      '237':'15rem',
      '28': '28rem',
    },
    lineHeight: {
      '58': '3.625rem',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
