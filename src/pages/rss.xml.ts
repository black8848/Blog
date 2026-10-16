import rss from '@astrojs/rss';
import { publishedPosts, postPath } from '../lib/posts';
import { SITE_DESCRIPTION, SITE_TITLE } from '../lib/site';

export async function GET(context: { site: string | URL }) {
  const posts = await publishedPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: postPath(post),
    })),
  });
}
