import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1240px'
      }
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
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
        success: 'hsl(var(--success))'
      },
      boxShadow: {
        soft: '0 10px 35px -18px rgba(15, 23, 42, 0.25)',
        lift: '0 18px 50px -24px rgba(15, 23, 42, 0.35)',
        glow: '0 0 0 1px hsl(var(--primary) / 0.25), 0 18px 60px -20px hsl(var(--primary) / 0.45)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif']
      },
      backgroundSize: {
        'shine-200': '200% 100%',
        'pan-200': '200% 200%'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(12px, -16px) scale(1.06)' }
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-18px, 14px) scale(1.08)' }
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        'bg-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 hsl(var(--primary) / 0.45)' },
          '50%': { boxShadow: '0 0 0 14px hsl(var(--primary) / 0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 600ms ease-out both',
        'fade-in': 'fade-in 500ms ease-out both',
        'slide-down': 'slide-down 220ms ease-out both',
        'scale-in': 'scale-in 280ms cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-slower': 'float-slower 12s ease-in-out infinite',
        shine: 'shine 3.5s linear infinite',
        'bg-pan': 'bg-pan 14s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-out infinite',
        marquee: 'marquee 28s linear infinite',
        wiggle: 'wiggle 0.6s ease-in-out',
        'spin-slow': 'spin-slow 18s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
