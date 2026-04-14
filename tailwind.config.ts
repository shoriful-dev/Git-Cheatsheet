import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Git official brand palette (from git-scm.com)
        git: {
          50: '#fef4f2',
          100: '#fde6e2',
          200: '#fcd2ca',
          300: '#f9b2a5',
          400: '#f38472',
          500: '#F05032',   // ← Git primary brand color
          600: '#de3919',
          700: '#ba2c12',
          800: '#9a2813',
          900: '#802716',
        },
        // Navbar / Dark surfaces (Git SCM uses warm dark brown-charcoal)
        gitdark: {
          50: '#f6f5f0',
          100: '#e8e5db',
          200: '#d3ceb9',
          300: '#b8ae91',
          400: '#a19672',
          500: '#928562',
          600: '#7e7054',
          700: '#665a46',
          800: '#574c3d',
          900: '#4b4237',
          950: '#2e2d29',   // ← Git SCM header background
        },
        // Code block & doc surface colors
        gitgray: {
          50: '#f8f8f8',    // ← Code background
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#333333',   // ← Primary text
        },
        // Dark mode specific surfaces
        darkbg: {
          50: '#2a2a2a',
          100: '#252525',
          200: '#202020',
          300: '#1c1c1c',
          400: '#181818',
          500: '#141414',
          600: '#111111',
          700: '#0d0d0d',
          800: '#0a0a0a',
          900: '#050505',
        },
      }
    },
  },
  plugins: [],
};

export default config;
