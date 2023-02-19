import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://www.trevortylerlee.com/',
  markdown: {
    drafts: true,
  }, integrations: [react(), mdx({
    drafts: true,
  })]
});