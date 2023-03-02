import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import prefetch from "@astrojs/prefetch";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.trevortylerlee.com',
  markdown: {
    drafts: true
  },
  integrations: [react(), mdx({
    drafts: true
  }), robotsTxt(), prefetch({
    selector: "a[href^='/posts/phished']"
  })],
  output: "static",
  adapter: vercel({
    analytics: true
  })
});