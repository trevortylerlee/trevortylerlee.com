import { getCollection, CollectionEntry } from 'astro:content';

import rss from "@astrojs/rss";

import { formatBlogPost } from '../js/utils';

const postImportResult = await getCollection('posts')
const posts = formatBlogPost(postImportResult)

export const get = () =>
  rss({
    stylesheet: "/rss/styles.xsl",
    title: "Trevor Tyler Lee's Website",
    description: "Web developer from Vancouver, Canada 🇨🇦",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
    })),
  });
