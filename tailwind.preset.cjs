const pauloDesignPreset = {
  theme: {
    extend: {
      colors: {
        paulo: {
          background: '#F7F5EF',
          surface: '#FFFFFF',
          'surface-muted': '#EFEAE0',
          text: '#171A1C',
          'text-muted': '#5D646B',
          border: '#DDD5C8',
          primary: '#123A2F',
          accent: '#B28A3C',
          'accent-soft': '#E9D9B8',
          success: '#2F7D4F',
          warning: '#B7791F',
          danger: '#B42318',
          info: '#1F5F8B',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        serif: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        paulo: '18px',
        'paulo-sm': '8px',
        'paulo-md': '12px',
        'paulo-lg': '18px',
        'paulo-xl': '28px',
      },
      boxShadow: {
        'paulo-soft': '0 18px 50px rgba(18, 58, 47, 0.10)',
        'paulo-card': '0 10px 30px rgba(23, 26, 28, 0.08)',
        'paulo-focus': '0 0 0 4px rgba(178, 138, 60, 0.22)',
      },
      transitionTimingFunction: {
        paulo: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
}

module.exports = pauloDesignPreset
