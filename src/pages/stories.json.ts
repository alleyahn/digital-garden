import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  // Get all stories, sorted by date (newest first)
  const allStories = (await getCollection('stories')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  // Generate OpenStories JSON feed
  const openStoriesFeed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Alleya's Stories",
    feed_url: `${site}stories.json`,
    _open_stories: {
      version: "0.0.9"
    },
    items: allStories.map(story => ({
      id: story.data.id,
      content_text: story.data.title,
      authors: [
        {
          name: "Alleya Hanifa",
          url: site?.toString() || "https://yoursite.com"
        }
      ],
      _open_stories: {
        mime_type: "image/jpg",
        url: story.data.image.src.startsWith('/') ? story.data.image.src : `/${story.data.image.src}`,
        alt: story.data.alt,
        caption: story.data.caption,
        duration_in_seconds: story.data.duration,
        ...(story.data.date_expired && { date_expired: story.data.date_expired.toISOString() }),
        ...(story.data.content_warning && { content_warning: story.data.content_warning })
      }
    }))
  };

  return new Response(JSON.stringify(openStoriesFeed, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};