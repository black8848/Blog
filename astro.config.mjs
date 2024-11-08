import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
  content: {
    files: ['./src/**/*.{html,md}'],
    transform: {
      md: (content) => {
        return remark().process(content)
      }
    }
  },

  integrations: [tailwind()]
})