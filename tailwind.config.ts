import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        purple: '#7C3AED',
        gold: '#F59E0B',
        emerald: '#10B981',
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,58,237,0.35)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(124,58,237,0.25), transparent 40%), radial-gradient(circle at bottom right, rgba(245,158,11,0.25), transparent 40%)',
      },
    },
  },
  plugins: [],
}

export default config
