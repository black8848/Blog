import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 文章目录路径
const postsDir = path.join(__dirname, '../pages/posts');

// 读取文章目录下的所有文件
const files = fs.readdirSync(postsDir);

// 处理每个文件
files.forEach(file => {
  // 只处理 Markdown 文件
  if (!file.endsWith('.md')) return;
  
  const filePath = path.join(postsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 检查文件是否已经有 frontmatter
  if (!content.startsWith('---')) {
    // 获取文件名作为标题（去掉扩展名）
    const title = path.basename(file, '.md');
    
    // 获取当前日期作为发布日期
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    // 创建 frontmatter，添加空的 slug 字段供手动填写
    const frontmatter = `---
layout: ../../layouts/MarkdownPostLayout.astro
title: '${title}'
pubDate: ${formattedDate}
tags: ["Blog"]
slug: ""  # 请在此处填写英文 slug，如: my-article-name
---

`;
    
    // 将 frontmatter 添加到文件内容前面
    content = frontmatter + content;
    
    // 写回文件
    fs.writeFileSync(filePath, content, 'utf8');
    
    console.log(`已为 ${file} 添加 frontmatter，请手动填写 slug`);
  } else {
    // 文件已有 frontmatter，检查是否有 slug
    const hasFrontmatter = content.startsWith('---');
    const hasSlug = content.includes('slug:');
    
    if (hasFrontmatter && !hasSlug) {
      // 找到 frontmatter 的结束位置
      const endOfFrontmatter = content.indexOf('---', 3);
      if (endOfFrontmatter !== -1) {
        // 在 frontmatter 结束前插入空的 slug 字段
        const frontmatterContent = content.substring(0, endOfFrontmatter);
        const restContent = content.substring(endOfFrontmatter);
        
        // 更新内容
        content = `${frontmatterContent}slug: ""  # 请在此处填写英文 slug，如: my-article-name\n${restContent}`;
        
        // 写回文件
        fs.writeFileSync(filePath, content, 'utf8');
        
        console.log(`已为 ${file} 添加空的 slug 字段，请手动填写`);
      }
    } else {
      console.log(`${file} 已有 frontmatter 和 slug，跳过处理`);
    }
  }
});

console.log('所有文件处理完成！'); 