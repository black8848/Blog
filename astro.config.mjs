import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { legacyPostRedirects } from './src/lib/legacy-redirects.mjs';
import { rehypeLazyImages } from './src/lib/rehype-lazy-images.mjs';
import { SITE_URL } from './src/lib/site-config.mjs';

export default defineConfig({
  site: SITE_URL,
  prefetch: true,
  integrations: [tailwind(), sitemap()],
  redirects: legacyPostRedirects,
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      langAlias: {
        C: 'c',
      },
    },
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      rehypeLazyImages,
    ],
  },
});
