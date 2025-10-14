const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-foreground))',
        },
        muted: 'hsl(var(--color-muted))',
        card: 'hsl(var(--color-card))',
        border: 'hsl(var(--color-border))',
        accent: 'hsl(var(--color-accent))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
