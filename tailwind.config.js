module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', '"Times New Roman"', 'Times', 'serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
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
              backgroundColor: theme('colors.gray.900'),
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