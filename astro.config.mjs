import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/static';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: "http://dev.bbsshack.club",
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  markdown: {
    smartypants: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-macchiato",
      },
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
    prefetch: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      gfm: true,
    }),
  ],
});
