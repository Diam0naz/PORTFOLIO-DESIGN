/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Kalnia Glaze", "sans-serif"],
        Montserrat: ["Montserrat", "serif"],
      },
      animation: {
        slideIn: "slideIn 2s linear 1",
        slideUp: "slideUp 2s ease-in 1",
        reAppear: "reAppear 2s ease-out 1",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(-60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        reAppear: {
          "0%": {
            opacity: "0",
          },

          "25%": {
            opacity: "1",
            transform: "scale(0.1)",
          },
          "50%": {
            opacity: "0",
            transform: "scale(0.3)",
          },
          "75%": {
            opacity: "1",
            transform: "scale(0.7)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      plugins: [],
    },
  },
};
