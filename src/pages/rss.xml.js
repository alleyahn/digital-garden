import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('writing');
  const photos = await getCollection('photography');
  const tracks = await getCollection('music');
  
  // Combine all content
  const allContent = [
    ...posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/writing/${post.slug}/`,
      type: 'writing'
    })),
    ...photos.map(photo => ({
      title: photo.data.title,
      pubDate: photo.data.date,
      link: `/photography/${photo.slug}/`,
      type: 'photography'
    })),
    ...tracks.map(track => ({
      title: `${track.data.title} - ${track.data.artist}`,
      pubDate: track.data.date,
      link: `/music/${track.slug}/`,
      type: 'music'
    }))
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
  
  return rss({
    title: 'Digital Garden - All Content',
    description: 'Photography, writing, and music',
    site: context.site,
    items: allContent.map((item) => ({
      title: item.title,
      pubDate: item.pubDate,
      link: item.link,
    })),
  });
}