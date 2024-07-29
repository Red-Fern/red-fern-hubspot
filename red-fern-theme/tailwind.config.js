/** @type {import('tailwindcss').Config} */;

module.exports = {
  content: [
    './modules/**/*.{html, css, js}',
    './sections/**/*.{html, css, js}',
    './templates/**/*.{html, css, js}',
  ],
  theme: {
    fontFamily: {
      'sans': 'var(--font-family--primary)'
    },
    fontSize: {
      'xs': 'var(--font-size--xs)',
      'sm': 'var(--font-size--sm)',
      'base': 'var(--font-size--base)',
      'md': 'var(--font-size--md)',
      'lg': 'var(--font-size--lg)',
      'xl': 'var(--font-size--xl)',
      '2xl': 'var(--font-size--2xl)',
      '3xl': 'var(--font-size--3xl)',
      '4xl': 'var(--font-size--4xl)',
      '5xl': 'var(--font-size--5xl)'
    },
    extend: {
      colors: {
      },
      spacing: {
        'xs': 'var(--spacing--xs)',
        'sm': 'var(--spacing--sm)',
        'md': 'var(--spacing--md)',
        'lg': 'var(--spacing--lg)',
        'xl': 'var(--spacing--xl)',
        '2xl': 'var(--spacing--2xl)',
        '3xl': 'var(--spacing--3xl)',
        '4xl': 'var(--spacing--4xl)'
      },
      screens: {
        'menu': '1200px',
      },
    }
  },
  safelist: [
    {
      pattern: /my-(xs|sm|md|lg|xl|2xl|3xl|4xl)/,
    },
    {
      pattern: /p-(xs|sm|md|lg|xl|2xl|3xl|4xl)/,
    },
    {
      pattern: /text-(sm|base|md|lg|xl|2xl|3xl|4xl|5xl)/,
    }
  ],
  corePlugins: {
    preflight: false
  },
  plugins: [],
}
