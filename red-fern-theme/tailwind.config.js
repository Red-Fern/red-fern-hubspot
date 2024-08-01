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
      'md': ['var(--font-size--md)', '1.25'],
      'lg': ['var(--font-size--lg)' , '1.25'],
      'xl': ['var(--font-size--xl)', '1.15'],
      '2xl': ['var(--font-size--2xl)', '1.15'],
      '3xl': ['var(--font-size--3xl)', '1.05']
    },
    extend: {
      colors: {
        'black': 'var(--color--black)',
        'navy': 'var(--color--navy)',
        'grey-dark': 'var(--color--grey-dark)',
        'grey-light': 'var(--color--grey-light)',
        'grey': 'var(--color--grey)',
        'teal-dark': 'var(--color--teal-dark)',
        'teal': 'var(--color--teal)',
        'off-white': 'var(--color--off-white)',
        'white': 'var(--color--white)'
      },
      spacing: {
        'xs': 'var(--spacing--xs)',
        'sm': 'var(--spacing--sm)',
        'md': 'var(--spacing--md)',
        'lg': 'var(--spacing--lg)',
        'xl': 'var(--spacing--xl)'
      },
      screens: {
        'menu': '1200px',
      },
    }
  },
  safelist: [
    {
      pattern: /my-(xs|sm|md|lg|xl)/,
    },
    {
      pattern: /text-(2xs|xs|sm|base|md|lg|xl|2xl|3xl)/,
    },
    {
      pattern: /text-(black|navy|grey-dark|grey-light|grey|teal-dark|teal|off-white|white)/,
    },
    'justify-start',
    'lg:justify-center',
    'lg:justify-end',
    'lg:text-center'
  ],
  corePlugins: {
    preflight: false
  },
  plugins: [],
}
