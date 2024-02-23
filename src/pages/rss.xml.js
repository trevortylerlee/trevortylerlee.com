import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { formatBlogPost } from "../lib/utils";

const postImportResult = await getCollection("posts");
const posts = formatBlogPost(postImportResult);

export function GET(context) {
  return rss({
    title: "Trevor Tyler Lee's Website",
    description: "Digital Designer and Developer in Vancouver, Canada",
    site: context.site,
    items: posts.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
    })),
    stylesheet: "/pretty-feed-v3.xsl",
  });
}
