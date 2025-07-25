import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind';
import remarkFootnotes from 'remark-footnotes';

export default defineConfig({
  // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/

  integrations: [tailwind()],
  
  // 配置文章 URL 格式
  markdown: {
    remarkPlugins: [[remarkFootnotes, { inlineNotes: true }]],
    rehypePlugins: []
  }
})