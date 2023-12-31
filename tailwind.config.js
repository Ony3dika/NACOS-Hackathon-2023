/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0e1935",
        sub: "#4f46e5",
        base: "#ffff",
        darkBase: "#0f0f15",
        darkSub: "#12141d",
      },

      animation: {
        slideup: "slideup 1.5s cubic-bezier(.84,.18,.42,.94) 0.6s forwards",

        slideleft: "slideleft 2.5s cubic-bezier(.44,-0.29,.12,.96) forwards",

        slowfaderight: "slowfade 2s cubic-bezier(.84,.18,.62,.67) forwards",
      },

      keyframes: {
       
        slowfaderight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-100)" },
        },

        slideup: {
          from: { opacity: 0, transform: "translateY(50%)" },
          to: { opacity: 1, transform: "none" },
        },

        slideleft: {
          from: { opacity: 0, transform: "translateX(-100px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
