import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.trevortylerlee.com",
  server: {
    port: 1999
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "dark-plus"
    }
  },
  integrations: [react(), mdx({
    drafts: true
  }), robotsTxt(), sitemap(), tailwind(), icon()],
  output: "static",
  adapter: vercel({
    analytics: true
  })
});