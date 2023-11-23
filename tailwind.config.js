/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',   // Your custom small screen breakpoint
        'md': '925px',   // Your custom medium screen breakpoint
        'lg': '1024px',  // Your custom large screen breakpoint
        'xl': '1280px',  // Your custom extra-large screen breakpoint
      },
    },
  },
  plugins: [],
}
