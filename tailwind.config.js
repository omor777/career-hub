/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
    },
    extend: {
      fontFamily: {
        manrope: ["'Manrope', 'sans-serif'"],
      },
      colors: {
        "dark-1": "#1A1919",
        "dark-2": "#474747",
        "dark-3": "#757575",
        "dark-4": "#A3A3A3",
        "dark-5": "#D1D1D1",
        "dark-6": "#E8E8E8",
        "dark-7": "#F4F4F4",
        "grad-1": "#7E90FE ",
        "grad-2": "#9873FF  ",
        "grad-3": "#7E90FE0D ",
        "grad-4": "#9873FF0D",

        "white-70": "#FFFFFFB2",
        "white-40": "#FFFFFF66",
      },
      fontSize: {
        "80px": "5rem",
        "32px": "2rem",
      },
      lineHeight: {
        "100px": "6.25rem",
        "30px": "1.875rem",
        "27px": "1.6875rem",
        "26px": "1.625rem",
      },
      backgroundImage: {
        "btn-grad": "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)",
        "bg-grad":
          "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
        "bg-grad-2":
          "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
