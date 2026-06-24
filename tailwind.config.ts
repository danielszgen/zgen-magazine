import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080812',
          2: '#0D0D1A',
          3: '#111120',
        },
        border: {
          DEFAULT: '#1C1C2E',
          subtle: '#14142A',
          glow: '#3B2F6B',
        },
        text: {
          primary: '#EEEEFF',
          muted: '#6B6B90',
          faint: '#3A3A55',
        },
        purple: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          glow: '#8B5CF6',
        },
        blue: {
          DEFAULT: '#3B82F6',
          deep: '#1D4ED8',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
        },
        violet: {
          DEFAULT: '#6D28D9',
          light: '#C4B5FD',
        },
        green: {
          DEFAULT: '#3BF0A0',
          light: '#6FFFC2',
          deep: '#14A871',
          dim: '#0C6B49',
        },
        // Legacy aliases (gallery / ArtCard / HeroSection / Footer) → new dark + phosphor-green theme
        zgen: {
          black: '#080812',
          surface: '#0D0D1A',
          border: '#1C1C2E',
          white: '#EEEEFF',
          muted: '#6B6B90',
          accent: '#3BF0A0',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 50%, #06B6D4 100%)',
        'gradient-brand-text': 'linear-gradient(90deg, #A78BFA 0%, #60A5FA 50%, #22D3EE 100%)',
        'gradient-radial-purple': 'radial-gradient(ellipse at center, #3B2F6B 0%, transparent 70%)',
        'gradient-holo': 'linear-gradient(90deg, #6FFFC2 0%, #60A5FA 45%, #C4B5FD 75%, #22D3EE 100%)',
        'gradient-signal': 'linear-gradient(135deg, #3BF0A0 0%, #14A871 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(28px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.4), 0 0 60px rgba(124, 58, 237, 0.15)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.15)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.4)',
        'glow-green': '0 0 24px rgba(59, 240, 160, 0.35), 0 0 56px rgba(59, 240, 160, 0.14)',
        'card': '0 1px 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(28,28,46,1)',
      },
    },
  },
  plugins: [],
}

export default config
