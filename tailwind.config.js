module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            hr: {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};