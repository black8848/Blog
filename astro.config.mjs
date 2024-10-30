// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind()],
//   markdown: {
//     shikiConfig: {
//       // 选择 Shiki 内置的主题（或添加你自己的主题）
//       // https://shiki.style/themes
//       theme: 'dracula',
//       // 另外，也提供了多种主题
//       // 查看下面关于使用亮/暗双主题的的说明
//       themes: {
//         light: 'github-light',
//         dark: 'github-dark',
//       },
//       // 禁用默认配色
//       // https://shiki.style/guide/dual-themes#without-default-color
//       // (添加于 v4.12.0)
//       defaultColor: false,
//       // 添加自定义语言
//       // 注意：Shiki 内置了无数语言，包括 .astro！
//       // https://shiki.style/languages
//       langs: [],
//       // 为语言添加自定义别名
//       // 将别名映射到 Shiki 语言 ID：https://shiki.style/languages#bundled-languages
//       // https://shiki.style/guide/load-lang#custom-language-aliases
//       langAlias: {
//         cjs: "javascript"
//       },
//       // 启用自动换行，以防止水平滚动
//       wrap: true,
//       // 添加自定义转换器：https://shiki.style/guide/transformers
//       // 查找常用转换器：https://shiki.style/packages/transformers
//       transformers: [],
//     },
//   },
// });

import { defineConfig } from 'astro/config'

export default defineConfig({
  content: {
    files: ['./src/**/*.{html,md}'],
    transform: {
      md: (content) => {
        return remark().process(content)
      }
    }
  },
  // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
})