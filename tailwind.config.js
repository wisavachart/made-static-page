/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mb_s: "320px",
        mb_m: "375px",
        mb_L: "425px",
        mb_L_500: "500px",
      },
      colors: {
        md_gray: "#D1D1D1",
        md_darkblue: "#062170",
        md_pink: "#FEAAE6",
        md_pink_light: "#F1ECFF",
        md_blue: "#1C6ADB",
        md_black: "#231F20",
        md_border_grey: "#D9D9D9",
        md_grey_menu: "#525866",
        md_grey_blue: "#E6EFF5",
        md_grey_bg: "#E6E6E6",
      },
      zIndex: {
        100: "100",
        200: "100",
        300: "100",
      },
    },
  },
  plugins: [],
};
