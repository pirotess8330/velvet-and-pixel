# Velvet & Pixel

Production static website for Velvet & Pixel, built with Astro and TypeScript. No backend, tracking, cookies, remote fonts or client-side framework.

## Local development

Use Node.js 24 (the CI version), or Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
```

Open the base-path URL printed by Astro, normally `http://localhost:4321/velvet-and-pixel/`.

```sh
npm run check
npm run build
npm test
npm run preview
```

The test checks generated pages for internal links, assets, anchors, metadata and required content. The build emits static files to `dist/`.

## GitHub Pages setup

The repository owner must select **Settings → Pages → Build and deployment → Source: GitHub Actions**. Ensure Actions is enabled. If the `github-pages` environment requires approval, approve its deployment in GitHub. No personal access token or custom secret is needed: deployment uses the workflow's scoped `GITHUB_TOKEN` and OIDC.

Pushes to `main` validate, build, check links and deploy. Pull requests run validation without deployment. After enabling Pages, rerun the workflow or dispatch it from Actions. Successful builds alone do not mean deployment succeeded; verify the deploy job and public pages.

Expected public URLs:

- Home: https://pirotess8330.github.io/velvet-and-pixel/
- Catalog: https://pirotess8330.github.io/velvet-and-pixel/apps/
- Product: https://pirotess8330.github.io/velvet-and-pixel/apps/before-after-studio/
- **Google Play privacy URL:** https://pirotess8330.github.io/velvet-and-pixel/privacy/before-after-studio/
- Support: https://pirotess8330.github.io/velvet-and-pixel/support/

`astro.config.mjs` sets the project base path. Use the shared `url()` helper for internal links and public assets. GitHub Pages serves `404.html` for unknown paths; robots.txt is available under the project path (robots exclusion rules apply only when hosted at an origin root).

## Edit and extend

- `src/data/apps.ts`: typed catalog, status, category, platform and descriptions. Categories are defined in the same file; assign each app a typed `categoryId` to group it under Games, Photo Apps or Tattoo Apps. Empty categories state that no apps are announced. Optional links and screenshots are reserved for verified future content. Add an app here to display it on the homepage and catalog; create a product route when ready.
- `src/pages/`: homepage, catalog/product, support and dedicated privacy policy. Edit substantive copy directly here. Keep the privacy route stable for Play Console.
- `src/components/HireStudio.astro`: homepage commission invitation and email enquiry. The homepage hero, main navigation and footer link to this section.
- `src/components/` and `src/layouts/`: reusable cards and shared metadata/navigation/footer. `src/styles/global.css` defines design tokens, layouts and reduced-motion rules.

The supplied logo lives in `src/assets/velvet-and-pixel.jpg`. Astro generates responsive WebP images. Replace this source to update the hero; update `public/social.jpg` for the social preview. The compact navigation wordmark uses text. The attached artwork was supplied by the owner for this website; no artwork was taken from another repository.

Before & After Studio's owner-supplied screenshots and demo artwork live in `src/assets/before-after-studio/`. The product page imports these through Astro's image tools for responsive WebP delivery, with full-size screenshot links and descriptive alternative text. Update the screenshot list in `src/pages/apps/before-after-studio.astro` as the app changes. `AppVideo.astro` provides a reusable local-poster link to YouTube; it loads no embedded player or third-party scripts. The app title uses the approved store icon from the owner’s app artwork. Screenshots and the demo precede a compact feature list. Store URLs remain absent while the listing is in review; add a verified public listing link when available. Do not render an empty or fake download button.

Fonts are locally bundled DM Sans and Cormorant Garamond under the SIL Open Font License. Copies of both licenses are in `public/licenses/`. Browser tab and Apple touch icons are resized PNG versions of the supplied neon logo. Before & After Studio cards use the supplied artwork and approved app icon; other upcoming app graphics remain original CSS elements. Add optional `artwork` and `icon` imports in the catalog data as real assets become available.

## Privacy and release review

Policy effective date: November 6, 2026. The published policy uses the owner-supplied November 6 draft. Developer/contact are the owner's supplied Velvet & Pixel / velvetandpixel@gmail.com.

The site copy was checked against the private Before & After Studio repository's `docs/privacy-policy.md`, `docs/release.md`, `docs/pro-billing.md`, `docs/pro-release-handoff.md`, and Pro panel UI on November 5, 2026 (main tree `7e3182057d163852aef239f13b43434722b08c3d`). No app source was modified and no private artifacts or credentials are included here.

The app documentation reports code/automated validation complete, while actual Play-track billing acceptance remains outstanding. Before the app's Google Play release, the owner must:

1. Review the final release dependency inventory and current Google Play Billing/Play services/DataTransport data disclosures. Reconcile the public policy and Play Console Data Safety answers with the actual shipping build. Do not infer “no third-party data processing” from local photos or no developer analytics.
2. Configure the real one-time product and verification public key, build the configured release, and complete Play-track purchase/restore/refund testing per the app's release documentation. These are app release tasks, not website code changes.
3. Confirm pricing, support instructions and published policy against that release, then add the verified store URL and real screenshots.

The public policy describes SDK transaction, technical and diagnostic processing rather than falsely claiming that no data is processed. Website publication does not certify Play Console declarations or production billing readiness. The app is marked In Google Play review, based on the owner’s current release status.

## Manual acceptance

Check the homepage, catalog, product, policy, support and unknown-path recovery at mobile and desktop widths. Navigate by keyboard, inspect focus indicators and expanded FAQ content, test reduced motion and 200% zoom, and verify no horizontal overflow. Confirm direct public navigation to the policy after deployment. All primary content works without JavaScript.

## Launch validation

Validated November 5, 2026 with Astro 7.4.5 and Node.js 24:

- Astro/TypeScript: zero errors or warnings; static production build passed.
- Generated-site checks: six HTML pages and 99 local link/asset references passed.
- Chromium: all six pages at 360, 768 and 1440 pixels; no horizontal overflow, failed requests or browser errors; FAQ expansion and keyboard skip link passed.
- axe WCAG 2 A/AA and 2.1 AA checks: no reported violations across the six pages at mobile width. Automated checks do not replace manual accessibility review.
- npm audit: zero known vulnerabilities in the installed dependency tree.

## Branding migration

This site now uses the Velvet & Pixel name, owner-supplied replacement logo, and velvetandpixel@gmail.com for support and commissions. The repository and Pages base path are `pirotess8330/velvet-and-pixel` and `/velvet-and-pixel/`.

After the new deployment is verified, update any Google Play Console privacy, website and support links to the URLs above, including the new contact email. Deleting the previous repository removes its Pages URLs; this repository cannot redirect requests to a deleted repository. The previous repository is intentionally left intact for the owner to retire.


## Search indexing

Each page has a unique title/description, canonical URL and Open Graph metadata. The app product page includes factual `SoftwareApplication` JSON-LD and its own sharing image; no invented ratings, release date or download URL. Important content is generated in HTML and works without JavaScript. Upcoming catalog-only projects do not have standalone product pages yet.

In Google Search Console, select or add the URL-prefix property `https://pirotess8330.github.io/velvet-and-pixel/`. An owner-provided verification HTML file is already in `public/`; confirm verification in your account. Submit `https://pirotess8330.github.io/velvet-and-pixel/sitemap-index.xml` under Sitemaps, then use URL Inspection to request indexing for the homepage and `apps/before-after-studio/`. Indexing and search appearance are determined by Google.

The project-level robots.txt allows crawling and references the sitemap. Crawlers only apply robots rules at the origin root (`https://pirotess8330.github.io/robots.txt`), so this project file cannot control other repositories or override root rules. The sitemap can be submitted directly in Search Console.


## Client enquiries and portfolio

`HireStudio.astro` contains the focused-project invitation and owner-provided biography. The enquiry buttons use `mailto:velvetandpixel@gmail.com?subject=Project%20enquiry`; no form service or tracking is involved. Mobile browsers hand the link to a configured email app.

`CaseStudies.astro` presents Before & After Studio as an independent app in Google Play review and this website as a live own-business project. The website screenshot is in `src/assets/portfolio/`. No client outcomes, testimonials, or DreamWorks materials are included. Publishing Suite remains off the portfolio until suitable media is approved.

November 10, 2026 verification: current Before & After Studio README and privacy documentation support its name, contact address and published feature list; the owner confirms its Play review status. The snap-spin-reel-app README identifies the current project as SpinReveal, replacing the earlier catalog title Photo Roulette Video Maker. Cursed Gem Mosaics remains In Development; Tattoo Stencil Generator remains Planned and is distinct from Tattoo Flash Organizer. Prices were not changed. No store or download link is rendered while listings are unavailable.
