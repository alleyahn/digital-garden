import { defineCollection, z } from 'astro:content';

// Photography collection schema
const photographyCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    image: image(),
    orientation: z.enum(['portrait', 'landscape']).optional().default('landscape'),
    camera: z.string().optional(),
    lens: z.string().optional(),
    film: z.string().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Writing collection schema
const writingCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['essay', 'journal', 'photo-essay']),
    author: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured_image: image().optional(),
  }),
});

// Music collection schema
const musicCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    artist: z.string(),
    date: z.date(),
    cover_art: image().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Stories collection schema (NEW!)
const storiesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string(),
    title: z.string(),
    image: image(),
    alt: z.string(),
    caption: z.string().optional(),
    duration: z.number().optional().default(5),
    date: z.date(),
    date_expired: z.date().optional(),
    content_warning: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  'photography': photographyCollection,
  'writing': writingCollection,
  'music': musicCollection,
  'stories': storiesCollection,
};