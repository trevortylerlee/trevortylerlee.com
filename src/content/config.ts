import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(40, "Title must be 40 or fewer characters long."),
      date: z.date(),
      lastModified: z.date().optional(),
      description: z
        .string()
        .max(
          160,
          "For best SEO results, keep the description under 160 characters.",
        )
        .optional(),
      draft: z.boolean().default(false),
      imageSrc: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

export const collections = { posts };
