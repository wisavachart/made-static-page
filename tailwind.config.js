/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        highstage: "1440px",
        midstage: "817px",
        bp_text_sm: "426px",
        bp_text_md: "690px",
      },
      colors: {
        md_gray: "#D1D1D1",
        md_darkblue: "#062170",
      },
    },
  },
  plugins: [],
};
