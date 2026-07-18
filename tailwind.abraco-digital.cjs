const abracoDesignPreset = {
  theme: {
    extend: {
      colors: {
        abraco: {
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
        abraco: '18px',
        'abraco-sm': '8px',
        'abraco-md': '12px',
        'abraco-lg': '18px',
        'abraco-xl': '28px',
      },
      boxShadow: {
        'abraco-soft': '0 18px 50px rgba(18, 58, 47, 0.10)',
        'abraco-card': '0 10px 30px rgba(23, 26, 28, 0.08)',
        'abraco-focus': '0 0 0 4px rgba(178, 138, 60, 0.22)',
      },
      transitionTimingFunction: {
        abraco: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
}

module.exports = abracoDesignPreset
