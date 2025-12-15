import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        summary: z.string().default(""),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    news: newsCollection,
};