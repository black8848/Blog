---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Question'
pubDate: 2024-10-28
tags: ["Learn"]
---

1. 找不到依赖问题 -> 加版本号
2. application.yaml 没有被读取的问题 -> port 冒号后数字前有空格

```yaml
server:
  port: 8002
```

3. mvc三层架构

4. 中间件

5. 布隆过滤器：存在不一定存在，而不存在是一定不存在
- 通过多个 hash 算法将一个元素映射到多个位，查询时使用同样的 hash 算法，如果全是 1，则可能存在，如果全是 0，则必然不存在
- 布隆过滤器可以用于判断数据是否存在于缓存中。比如在一个大型的分布式缓存系统中，如果布隆过滤器判断某个元素不在缓存中，就可以避免直接查询数据库。

7. 

MyBatis-Plus 你无敌了，默认改命名方式再写数据库导致 insert 失败，浪费了我两个小时，你无敌了

> 在 MyBatis-Plus 中，默认情况下，它会将实体类中的驼峰命名转换为下划线命名。

![截屏2024-10-20 22.55.29](/Users/fzzz/Documents/MyDocuments/MarkDown文档/Questions.assets/截屏2024-10-20 22.55.29.png)



8. 如果要修改很早以前的 commit ，应该怎么做？
9. 持久化布隆过滤器
10. 

***
### 记录存档
- 全局异常拦截器：原理、chatGPT记录保留

- [x] git 知识要熟练实操掌握，今天的提交差点整个项目崩溃、还好阴差阳错的备份正常了，下一步先实操下来 git，彻底弄懂了 git 的原理再继续推项目 







