const TAG_PALETTES = [
  {
    card: 'border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100 dark:hover:bg-blue-900',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  },
  {
    card: 'border-green-200 bg-green-50 text-green-800 hover:bg-green-100 dark:border-green-800 dark:bg-green-950 dark:text-green-100 dark:hover:bg-green-900',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  },
  {
    card: 'border-red-200 bg-red-50 text-red-800 hover:bg-red-100 dark:border-red-800 dark:bg-red-950 dark:text-red-100 dark:hover:bg-red-900',
    badge: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  },
  {
    card: 'border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100 dark:hover:bg-amber-900',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100',
  },
  {
    card: 'border-purple-200 bg-purple-50 text-purple-800 hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-100 dark:hover:bg-purple-900',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
  },
  {
    card: 'border-pink-200 bg-pink-50 text-pink-800 hover:bg-pink-100 dark:border-pink-800 dark:bg-pink-950 dark:text-pink-100 dark:hover:bg-pink-900',
    badge: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100',
  },
  {
    card: 'border-indigo-200 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-100 dark:hover:bg-indigo-900',
    badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
  },
  {
    card: 'border-teal-200 bg-teal-50 text-teal-800 hover:bg-teal-100 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-100 dark:hover:bg-teal-900',
    badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100',
  },
  {
    card: 'border-orange-200 bg-orange-50 text-orange-800 hover:bg-orange-100 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-100 dark:hover:bg-orange-900',
    badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
  },
  {
    card: 'border-cyan-200 bg-cyan-50 text-cyan-800 hover:bg-cyan-100 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-100 dark:hover:bg-cyan-900',
    badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100',
  },
] as const;

export type TagPalette = (typeof TAG_PALETTES)[number];

export function tagPalette(tag: string): TagPalette {
  let hash = 0;
  for (const char of tag) {
    hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  }
  return TAG_PALETTES[hash % TAG_PALETTES.length];
}

export function tagPath(tag: string): string {
  return `/tags/${encodeURIComponent(tag)}`;
}
