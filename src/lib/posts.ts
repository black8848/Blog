import { getCollection, type CollectionEntry } from 'astro:content';
import { formatPostYear } from './dates';

export type BlogPost = CollectionEntry<'blog'>;

export function comparePosts(left: BlogPost, right: BlogPost): number {
  const dateDelta = right.data.pubDate.getTime() - left.data.pubDate.getTime();
  if (dateDelta !== 0) return dateDelta;
  return right.data.weight - left.data.weight;
}

export async function publishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(comparePosts);
}

export function groupPostsByYear(posts: BlogPost[]): { year: string; posts: BlogPost[] }[] {
  const groups = new Map<string, BlogPost[]>();
  for (const post of posts) {
    const year = formatPostYear(post.data.pubDate);
    const entries = groups.get(year) ?? [];
    entries.push(post);
    groups.set(year, entries);
  }

  return [...groups.keys()]
    .sort((left, right) => Number(right) - Number(left))
    .map((year) => ({ year, posts: groups.get(year) ?? [] }));
}

export function postPath(post: BlogPost): string {
  return `/posts/${post.id}`;
}
