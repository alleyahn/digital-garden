import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const photos = await getCollection('photography');
  
  return rss({
    title: 'Photography - Digital Garden',
    description: 'Film photography from travels and daily life',
    site: context.site,
    items: photos.map((photo) => ({
      title: photo.data.title,
      pubDate: photo.data.date,
      link: `/photography/${photo.slug}/`,
    })),
  });
}