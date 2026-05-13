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

---

## Architecture — Global Header & Footer

`SiteHeader` and `SiteFooter` are mounted once in **`src/layouts/Layout.astro`**. PDPs and other pages **must not** include their own inline header or footer.

```astro
<!-- Layout.astro fetches menus server-side, then mounts both islands -->
<SiteHeaderIsland client:load mainMenu={mainMenu} shopAllMenu={shopAllMenu} policiesMenu={policiesMenu} />
<!-- page slot -->
<SiteFooterIsland client:load quickLinks={quickLinks} supportPolicies={supportPolicies} />
```

- Menus are fetched from Shopify via `getMenu()` at request time; if Shopify is unavailable, hardcoded fallback arrays are used automatically.
- Each PDP still mounts its own **`<CartDrawer />`** — the header only calls `$cartOpen.set(true)`, it does not render the drawer.
- Use `<Layout>` in every `.astro` route to get the shared header, footer, and SEO tags.

---

## CSS Design System

Reusable component classes are defined in **`src/styles/global.css`** under `@layer components`:

| Class | Applied to |
|---|---|
| `nav-header-grid` | Desktop `<nav>` container in SiteHeader |
| `nav-link-blue` | Desktop nav links and dropdown sub-items |
| `nav-link-black` | Mobile top-level nav links |
| `footer-heading` | Column headings in SiteFooter (bold, non-clickable) |
| `footer-link` | All clickable links in SiteFooter |

Use these classes instead of inline Tailwind when adding new nav or footer items.

---

## Static Assets — Logo

The logo is served from **`public/Logo/Logo.avif`**. Reference it with a plain path string — **do not import it** via ES module syntax in React islands (Vite does not resolve `.avif` at runtime in island components):

```tsx
// correct
<img src="/Logo/Logo.avif" alt="Celsius Organic Herbs" className="h-10 w-auto" />

// wrong — don't do this in a React island
import logo from "@/assets/Logo/Logo.avif";
```

---

## Cart Error Handling

`handleAddToCartRule` in **`src/lib/shopify/cart-actions.ts`** runs three checks before any Shopify call:

1. **No internet** → throws `CART_ERRORS.NO_INTERNET` ("No internet connection…")
2. **API not configured** (`getStorefrontClient()` returns null) → throws `CART_ERRORS.SERVER_NO_RESPONSE` ("No response from server…")
3. **API network failure** (any unrecognized exception from Shopify mutations) → `rethrowAsConnection()` converts it to `CART_ERRORS.SHOPIFY_CONNECTION` ("Error connecting to Shopify…")

All `CART_ERRORS` messages are in English. Toast them directly in the calling component.

All functions in **`src/lib/shopify/storefront.ts`** have try-catch:
- Read functions (`getProduct`, `getCollection`, `getCart`, etc.) — catch logs and returns `null`/`[]`.
- Mutation functions (`createCart`, `addCartLines`, `updateCartLines`, `removeCartLines`) — catch logs and **rethrows** so callers can surface the error to the user.

---

## Changelog

### 2026-05 — Normalized header/footer and cart hardening

- **Global header/footer**: Extracted `SiteHeader` and `SiteFooter` into `Layout.astro` islands. Removed inline headers/footers from all 7 PDPs and `CartBagPage`.
- **CSS design system**: Added `nav-header-grid`, `nav-link-blue`, `nav-link-black`, `footer-heading`, `footer-link` to `global.css` `@layer components`.
- **Logo**: Moved from `src/assets/Logo/Logo.avif` to `public/Logo/Logo.avif`; increased display size (lg: h-16).
- **Dropdown hover fix**: Added 300 ms delay before closing nav dropdowns (prevents accidental close when moving mouse to submenu).
- **Cart errors**: Added layered error handling in `handleAddToCartRule` (internet check → API config check → connection error → business errors). All messages in English.
- **Storefront try-catch**: All 10 public functions in `storefront.ts` now have try-catch; mutations rethrow for callers.
- **Responsive footer**: Footer grid uses `sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5` to prevent orphaned columns at tablet width.
- **Removed `/shopify-collections`**: Page deleted; all references replaced with the live Shopify collections URL.
- **CartDrawer casing fix**: Renamed `cartdrawer.tsx` → `CartDrawer.tsx` to resolve TS1149 casing mismatch.
- **Cursor rule updated**: `.cursor/rules/pdp-shopify-cart.mdc` updated to document the normalized header/footer architecture and CSS class design system.
