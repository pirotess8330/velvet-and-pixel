import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: "https://pirotess8330.github.io",
  base: "/velvet-and-pixel",
  trailingSlash: "always",
  output: "static",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })],
});
