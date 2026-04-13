import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        git: {
          50: '#fdf3f2',
          100: '#fce4e2',
          200: '#facdca',
          300: '#f6aca7',
          400: '#f17e76',
          500: '#F05032',
          600: '#dc371a',
          700: '#b92811',
          800: '#992413',
          900: '#7e2416',
        }
      }
    },
  },
  plugins: [],
};

export default config;
