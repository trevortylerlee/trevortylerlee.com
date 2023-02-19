import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.trevortylerlee.com',
  markdown: {
    drafts: true
  },
  integrations: [react(), mdx({
    drafts: true
  }), robotsTxt()]
});