import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://www.trevortylerlee.com",
  server: {
    port: 1999,
  },
  markdown: {
    drafts: true,
  },
  integrations: [
    react(),
    expressiveCode({
      themes: ["dark-plus", "light-plus"],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) =>
        `.${theme.name === "dark-plus" ? "dark" : "light"}`,
      useThemedSelectionColors: true,
    }),
    mdx(),
    robotsTxt(),
    sitemap(),
    tailwind(),
    icon(),
  ],
  output: "static",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
