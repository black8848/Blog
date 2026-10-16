import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const postsDir = path.join(path.dirname(filename), '../content/blog');
const slugPattern = /^[A-Za-z0-9][A-Za-z0-9_-]*$/;

const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));

for (const file of files) {
  const slug = path.basename(file, '.md');
  if (!slugPattern.test(slug)) {
    console.warn(`${file} 的文件名会成为 URL，请改成英文 slug，例如 my-article-name`);
  }

  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.startsWith('---')) {
    console.log(`${file} 已有 frontmatter，跳过`);
    continue;
  }

  const today = new Date();
  const pubDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-');
  const frontmatter = `---
title: ${JSON.stringify(slug)}
description: ${JSON.stringify(slug)}
pubDate: ${pubDate}
tags: ["Blog"]
weight: 0
draft: true
---

`;
  fs.writeFileSync(filePath, frontmatter + content, 'utf8');
  console.log(`已为 ${file} 添加 frontmatter。URL 使用文件名 /posts/${slug}`);
}

console.log('处理完成');
