import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.md',
    // 文件名就是已公开的 slug，保留大小写，避免旧链接失效。
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    tags: z.array(z.string().min(1)).default([]),
    weight: z.number().int().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
