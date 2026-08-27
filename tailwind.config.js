/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          blue: '#39a2db',
          cyan: '#0ed2da',
          coral: '#f85959',
          yellow: '#f5d061',
          purple: '#7c3aed',
          emerald: '#10b981',
        },
        dark: {
          bg: '#0f1117',
          surface: '#161922',
          card: '#1c202c',
          border: '#2a3042',
          text: '#f1f5f9',
          muted: '#94a3b8',
        },
        light: {
          bg: '#ffffff',
          surface: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          text: '#0f172a',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'neo': '0 8px 30px rgba(0,0,0,0.12)',
        'neo-dark': '0 8px 30px rgba(0,0,0,0.4)',
        'glow-blue': '0 0 25px rgba(57,162,219,0.35)',
        'glow-purple': '0 0 25px rgba(124,58,237,0.35)',
      }
    },
  },
  plugins: [],
}
