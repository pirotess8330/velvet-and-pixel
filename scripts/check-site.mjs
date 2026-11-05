import { readdir, readFile, stat } from "node:fs/promises";
import assert from "node:assert/strict";
import path from "node:path";
const root = path.resolve("dist");
const base = "/velvet-and-pixel/";
const origin = "https://pirotess8330.github.io";
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name),
      ),
    )
  ).flat();
}
const files = await walk(root);
const htmlFiles = files.filter((f) => f.endsWith(".html"));
let checked = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  assert.match(html, /<html lang="en"/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.equal(
    (html.match(/<h1[\s>]/g) || []).length,
    1,
    `${file}: exactly one H1`,
  );
  const route = path
    .relative(root, file)
    .replaceAll(path.sep, "/")
    .replace(/index\.html$/, "");
  for (const match of html.matchAll(/\b(href|src|srcset)="([^"]+)"/g)) {
    const links =
      match[1] === "srcset"
        ? match[2].split(",").map((v) => v.trim().split(/\s+/)[0])
        : [match[2]];
    for (const link of links) {
      if (/^(mailto:|data:|tel:)/.test(link)) continue;
      const target = new URL(link, `${origin}${base}${route}`);
      if (target.origin !== origin) continue;
      assert.ok(
        target.pathname.startsWith(base),
        `${file}: escaped base path: ${link}`,
      );
      const rel = decodeURIComponent(target.pathname.slice(base.length));
      let dest = path.join(root, rel);
      try {
        if ((await stat(dest)).isDirectory())
          dest = path.join(dest, "index.html");
        await stat(dest);
      } catch {
        assert.fail(`${file}: missing target ${link}`);
      }
      if (target.hash && dest.endsWith(".html")) {
        const content = await readFile(dest, "utf8");
        assert.ok(
          content.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`),
          `${file}: missing anchor ${link}`,
        );
      }
      checked++;
    }
  }
  assert.doesNotMatch(
    html,
    /<script[^>]+src="https?:/,
    "No third-party runtime scripts",
  );
}
for (const route of [
  "index.html",
  "apps/index.html",
  "apps/before-after-studio/index.html",
  "privacy/before-after-studio/index.html",
  "support/index.html",
  "404.html",
  "robots.txt",
  "sitemap-index.xml",
])
  assert.ok(files.includes(path.join(root, route)), `Missing ${route}`);
const policy = await readFile(
  path.join(root, "privacy/before-after-studio/index.html"),
  "utf8",
);
for (const text of [
  "November 5, 2026",
  "velvetandpixel@gmail.com",
  "diagnostic",
  "Google Play",
  "Velvet & Pixel",
])
  assert.ok(policy.includes(text));
console.log(
  `Passed: ${htmlFiles.length} pages, ${checked} local links/assets, required routes, metadata and policy checks.`,
);
