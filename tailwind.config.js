/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Fondo negro
        foreground: '#ffffff',
        card: '#1f2937',
        'card-foreground': '#e5e7eb',
        'popover-foreground': '#e5e7eb',
        primary: '#10b981',
        'primary-foreground': '#ffffff',
        secondary: '#000000', // Negro para el menú
        'secondary-foreground': '#ffffff',
        muted: '#6b7280',
        'muted-foreground': '#e5e7eb',
        accent: '#6b7280',
        'accent-foreground': '#ffffff',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        border: '#374151',
        input: '#374151',
        ring: '#3b82f6',
        'chart-1': '#3b82f6',
        'chart-2': '#10b981',
        'chart-3': '#f59e0b',
        'chart-4': '#8b5cf6',
        'chart-5': '#ec4899',
      },
    },
  },
  plugins: [],
};
