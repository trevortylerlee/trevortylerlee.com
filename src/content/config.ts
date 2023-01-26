import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, keep the description under 160 characters."
      )
      .optional(),
    draft: z.boolean().default(false),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = { blog };
