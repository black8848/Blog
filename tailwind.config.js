const serif = [
  '"Source Serif 4 Variable"',
  '"Songti SC"',
  '"Noto Serif CJK SC"',
  '"Source Han Serif SC"',
  'Georgia',
  '"Times New Roman"',
  'serif',
];

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            fontFamily: serif.join(', '),
            lineHeight: '1.8',
            p: {
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.5'),
            },
            hr: {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              borderRadius: '0.5rem',
              padding: theme('spacing.5'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.2s',
              '&:hover': {
                borderBottomColor: theme('colors.blue.600'),
              },
            },
            h2: {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.4'),
              scrollMarginTop: theme('spacing.20'),
            },
            h3: {
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.3'),
              scrollMarginTop: theme('spacing.20'),
            },
            h4: {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.2'),
              scrollMarginTop: theme('spacing.20'),
            },
          },
        },
        invert: {
          css: {
            code: {
              backgroundColor: theme('colors.neutral.800'),
            },
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                borderBottomColor: theme('colors.blue.400'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};