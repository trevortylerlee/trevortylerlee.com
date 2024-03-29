import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: ({image}) => z.object({
    title: z.string().max(50, "Title must be 50 or fewer characters long."),
    date: z.date(),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, keep the description under 160 characters."
      )
      .optional(),
    draft: z.boolean().default(false),
    imageSrc: image().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { posts };
