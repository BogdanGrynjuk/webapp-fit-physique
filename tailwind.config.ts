import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },

    fontFamily: {
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)',
    },

    backgroundImage: {
      hero: 'url(./public/assets/img/hero/bg.png)',
      membership: 'url(./public/assets/img/membership/bg.jpg)',
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#333333',
          100: '#484848',
          200: '#151515',
          300: '#111111',
        },

        accent: '#d4000d',
      },
    },
  },
  plugins: [],
} satisfies Config;
