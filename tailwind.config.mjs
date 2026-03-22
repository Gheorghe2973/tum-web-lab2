/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        'navy-2': '#112040',
        blue: '#1358d6',
        'blue-lt': '#2a72f8',
        accent: '#00c2ff',
        muted: '#6b7a99',
        'gray-bg': '#f4f6fb',
        'border-clr': '#e2e8f4',
        'text-primary': '#1a2540',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      height: {
        nav: '68px',
      },
    },
  },
  plugins: [],
};