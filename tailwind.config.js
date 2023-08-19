/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Red Hat Display']
      }
    },
  },
  daisyui: {
    themes: [
      {
        proto: {
          // ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#8FFF00",
          "primary-content": "#203800",
          "secondary": "#363C57",
          "accent": "#454F76",
          "accent-content": "#8B95BF",
          "secondary-content": "#747DA4",
          "base-100": "#212430",
          "base-content": "#FFFFFF"
        },
      },
      'dark'
    ],
  },
  plugins: [require("daisyui")],
}

