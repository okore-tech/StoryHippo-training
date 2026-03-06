import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        pink: {
          DEFAULT: '#E91E8C',
          dark: '#C01070',
          light: '#F8A4D4',
          pale: '#FDE8F4',
        },
        purple: {
          brand: '#7B2D8B',
          deep: '#4A148C',
        },
        navy: {
          DEFAULT: '#1A1A2E',
          2: '#242444',
        },
        sales: '#E91E8C',
        teacher: '#1565C0',
        learner: '#FF6B35',
        parent: '#2E7D32',
        sandbox: '#4A148C',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 100%)',
        'gradient-sales': 'linear-gradient(135deg, #1A1A2E 0%, #2D0D1E 100%)',
        'gradient-teacher': 'linear-gradient(135deg, #1A1A2E 0%, #1A2535 100%)',
        'gradient-learner': 'linear-gradient(135deg, #E91E8C 0%, #FF6B35 100%)',
        'gradient-parent': 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
        'gradient-sandbox': 'linear-gradient(135deg, #4A148C 0%, #9C27B0 100%)',
      },
    },
  },
  plugins: [],
}

export default config
