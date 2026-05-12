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
          DEFAULT: '#D4AF37',
          50: '#FDFBF4',
          100: '#FAF4E3',
          200: '#F1E3C0',
          300: '#E7D19B',
          400: '#DEBF75',
          500: '#D4AF37',
          600: '#B09028',
          700: '#896F1E',
          800: '#604D14',
          900: '#352A0A',
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
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(212, 175, 55, 0.3)',
        'glow': '0 0 25px rgba(212, 175, 55, 0.4)',
        'glow-lg': '0 0 40px rgba(212, 175, 55, 0.5)',
      },
      dropShadow: {
        'glow': '0 0 10px rgba(212, 175, 55, 0.6)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};