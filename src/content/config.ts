import { defineCollection, z } from "astro:content";
// z -> zod schema

const book = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    pubDate: z.date(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      us: z.string().url(),
    }),
  }),
});

export const collections = { books: book };