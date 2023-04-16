import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { formatBlogPost } from "../js/utils";

const postImportResult = await getCollection('posts');
const posts = formatBlogPost(postImportResult);

export function get(context) {
  return rss({
    // `<title>` field in output xml
    title: "Trevor Lee's Website",
    // `<description>` field in output xml
    description: 'Digital designer and web developer in Vancouver, Canada',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
    })),
  });
}