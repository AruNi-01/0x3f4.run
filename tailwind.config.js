import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow-2500": "bounce 2.5s infinite",
        "bounce-slow-3500": "bounce 3.5s infinite",
        "slide-in-up-500": "slideInUp 0.5s ease-in",
        "slide-out-up-500": "slideOutUp 0.5s ease-out forwards",
        "scale-3000": "scale 3s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        slideInUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideOutUp: {
          from: {
            opacity: 1,
            transform: "translateY(0)",
          },
          to: {
            opacity: 0,
            transform: "translateY(-100%)",
          },
        },
        scale: {
          "0%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.2)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "75%": {
            transform: "scale(1.2)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
