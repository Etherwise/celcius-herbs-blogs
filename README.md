# Celsius Herbs — Astro storefront

Custom **Astro** site with **React** islands (shadcn/Radix PDPs). This is **not** inside the Shopify Liquid theme: it is a **headless** layer that can use the **same store and products** via the **Storefront API** (build-time SEO) while your existing theme continues to run the native Online Store if you still use it.

## Scripts

- `npm run dev` — local dev (Astro)
- `npm run build` — static production build
- `npm run preview` — preview the build
- `npm test` — Vitest

## Environment (Shopify)

Copy `.env.example` to `.env` and set:

- `PUBLIC_SHOPIFY_STORE_DOMAIN` — e.g. `your-store.myshopify.com` (no `https://`)
- `PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN` — Storefront API access token (public storefront token is normal for headless)
- Optional: `PUBLIC_SHOPIFY_API_VERSION`

If these are missing, PDPs still build using **static** meta from each `.astro` file.

---

## Adding a new PDP (developer checklist)

Use this when you add a product page that should align with **Shopify Admin** (same catalog as your theme) without editing Liquid.

### How this relates to the Shopify theme

- The **theme** (Liquid, OS 2.0) lives in Shopify Admin → Online Store → Themes (or a separate theme repo).
- This repo is a **custom storefront**: same **products** and **handles** as Admin; optional **Storefront API** calls at **build time** merge SEO into the Astro layout. PDP UI is **React** in `src/views/pdp/`, not Liquid.

### 1. Choose the URL slug

`src/pages/{slug}.astro` maps to `/{slug}` on the site (subject to your host’s trailing-slash behavior).

Example: `src/pages/new-product.astro` → `/new-product`.

### 2. Add the React PDP

Create **`src/views/pdp/YourProductName.tsx`** — default export component for the full page. Follow an existing PDP in that folder for layout, `@/components/ui/*`, and `@/assets/*` imports.

### 3. Add the island wrapper

Create **`src/islands/pdp/YourProductName.tsx`**:

```tsx
import PageRoot from "@/components/PageRoot";
import YourProductName from "@/views/pdp/YourProductName";

export default function YourProductNameIsland() {
  return (
    <PageRoot>
      <YourProductName />
    </PageRoot>
  );
}
```

`PageRoot` provides React Query, tooltips, and toasters like other PDPs.

### 4. Add the Astro route

Create **`src/pages/{slug}.astro`** using the same pattern as `src/pages/cat-dandruff-lotion.astro`:

- Import `Layout`, `../islands/pdp/YourProductName`, and `mergeShopifyProductSeo` + `SHOPIFY_PRODUCT_HANDLES` from `../lib/shopify`.
- Set **`staticMeta`**: `title`, `description`, `canonical`, and optionally `ogTitle`, `ogDescription`, `ogImage`, `ogType`.
- Run:

  ```ts
  const merged = await mergeShopifyProductSeo(SHOPIFY_PRODUCT_HANDLES.yourKey, staticMeta);
  const { jsonLd, ...layoutProps } = merged;
  ```

- Render:

  ```astro
  <Layout {...layoutProps} jsonLd={jsonLd}>
    <YourProductNameIsland client:load />
  </Layout>
  ```

### 5. Map the product handle (optional SEO from Shopify)

Edit **`src/lib/shopify/handles.ts`**:

- Add a key to **`SHOPIFY_PRODUCT_HANDLES`**, e.g. `yourProductName: 'exact-shopify-product-handle'`.
- The handle is the product slug in Admin (same as `/products/{handle}` on the Online Store).
- Use **`null`** until the product exists or you want to keep only static meta from the `.astro` file.

On **`npm run build`**, when env vars and a non-null handle are set, titles/descriptions/canonical/OG image can be merged from Storefront; otherwise **`staticMeta`** is used.

### 6. Canonical, checkout, and the theme

- **Catalog**: Use the same product in Admin the theme uses; keep handles in sync in `handles.ts`.
- **Canonical**: Decide whether this Astro URL or the theme product URL should win for SEO. Storefront’s `onlineStoreUrl` may override canonical when merge succeeds; otherwise your `staticMeta.canonical` applies.
- **Checkout**: This repo does not wire cart/checkout by default. Sending shoppers to the theme usually means cart permalinks, Storefront cart, Buy Button, or similar—plan that separately.

### 7. Verify

- `npm run dev` — open the new path.
- With `.env` and handles set — `npm run build` and inspect `<title>`, meta description, and JSON-LD in the built HTML.

### 8. Internal links

Use **`<a href="/your-slug">`** (or your production origin) from other pages so navigation hits this Astro route.

### Files touched per PDP

| Purpose        | Path                                      |
|----------------|-------------------------------------------|
| PDP UI (React) | `src/views/pdp/<Name>.tsx`                |
| Island wrapper | `src/islands/pdp/<Name>.tsx`              |
| Route + SEO    | `src/pages/<slug>.astro`                  |
| Shopify handle | `src/lib/shopify/handles.ts`              |

### Blogs

Blog articles live under **`src/views/blog/`** and **`src/islands/blog/`**; routes go under **`src/pages/blog/`** (see `folliculitis-guide.astro`).

### Other folders

- **`src/views/common/`** — shared pages such as `NotFound`.
- **`src/islands/common/`** — matching islands (e.g. 404).
