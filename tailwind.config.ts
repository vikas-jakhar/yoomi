import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-layer': "url('/assets/images/webp/hero-layer.webp')",
        'hero-small': "url('/assets/images/webp/hero-small-view.webp')",
      },
      fontFamily: {
        'inter': "'Inter', sans-serif",
        'plus': "'Plus Jakarta Sans', sans-serif",
      },
      colors: {
        'deep-blue': "#076787",
        'light-blue': "#82B2C2",
        'off-white': "#FFFFFF33",
        'off-gray': "#AFCBD521",
        'light-gray': "#808080",
        'light-green': "#85B6A6",
        'dark-blue': "#110163",
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1188px",
        },
      },
      dropShadow: {
        '3xl': "2px 2px 0px black",
        '4xl': "2px 2px 0px #076787",
      },
      boxShadow: {
        '3xl': "0px 4px 15px 0px #07678726",
        '4xl': "0px 26px 27px 0px #0000000A",
        '5xl': "0px 13px 18px 0px #0000000F",
        '6xl': "0px 4px 15px 0px #81488E26",
      },
      fontSize: {
        'custom-lg': "32px",
        'custom-xl': "40px",
        'custom-2xl': "50px",
        'custom-3xl': "52px",
        'custom-4xl': "60px",
      },
      lineHeight: {
        'custom-sm': "32px",
        'custom-lg': "36px",
        'custom-xl': "44px",
        'custom-2xl': "55px",
        'custom-3xl': "57px",
        'custom-4xl': "66px",
      },
      backgroundSize: {
        '100': "100% 100%"
      }
    },
  },
  plugins: [],
};
export default config;
