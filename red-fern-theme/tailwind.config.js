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
      '2xs': 'var(--font-size--2xs)',
      'xs': 'var(--font-size--xs)',
      'sm': 'var(--font-size--sm)',
      'base': 'var(--font-size--base)',
      'md': 'var(--font-size--md)',
      'lg': 'var(--font-size--lg)',
      'xl': 'var(--font-size--xl)',
      '2xl': 'var(--font-size--2xl)',
      '3xl': 'var(--font-size--3xl)'
    },
    extend: {
      colors: {
        'black': 'var(--color-black)',
        'navy': 'var(--color-navy)',
        'grey-dark': 'var(--color-grey-dark)',
        'grey-light': 'var(--color-grey-light)',
        'grey': 'var(--color-grey)',
        'teal-dark': 'var(--color-teal-dark)',
        'teal': 'var(--color-teal)',
        'off-white': 'var(--color-off-white)',
        'white': 'var(--color-white)'
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
