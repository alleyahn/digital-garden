import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('writing');
  
  return rss({
    title: 'Writing - Digital Garden',
    description: 'Essays, journals, and reflections',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/writing/${post.slug}/`,
    })),
  });
}