/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          50: '#E8ECF1',
          100: '#C5CDD8',
          200: '#8B9DB5',
          300: '#516D91',
          400: '#1E3A5F',
          500: '#0D1B2A',
          600: '#0A1522',
          700: '#070F19',
          800: '#050A11',
          900: '#020508',
        },
        gold: {
          DEFAULT: '#C9A84C',
          50: '#FCF8EE',
          100: '#F5EBCF',
          200: '#EDDCA8',
          300: '#DFCA78',
          400: '#C9A84C',
          500: '#B08E34',
          600: '#8C7129',
          700: '#68541F',
          800: '#443714',
          900: '#201A0A',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          50: '#FDFCFA',
          100: '#FAF8F3',
          200: '#F5F0E8',
          300: '#EBE3D4',
          400: '#DDD1B9',
          500: '#CBBF9E',
        },
        charcoal: '#1A202C',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'kenburns': 'kenburns 20s ease-in-out infinite alternate',
        'fade-scale-in': 'fade-scale-in 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};