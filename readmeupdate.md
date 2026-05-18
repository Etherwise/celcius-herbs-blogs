# README Update — Celsius Astro + Shopify (confirmed in codebase)

Overview and quick-reference document. **Paths and behaviors below have been verified** in the repository (`src/lib/shopify/*`, `src/components/*`, `src/views/*`, `src/pages/cart.astro`). Where your original draft differed from the code, the correct version is indicated.

---

## 1. Project Overview

Implementation of an e-commerce ecosystem with **Astro**, **React (islands)**, and the **Shopify Storefront API**. Phase 1 prioritizes a scalable foundation: the UI can consume store data (product, variant, cart) via GraphQL, with cart state shared across pages.

- **Astro**: routes in `src/pages/*.astro`, layouts, islands with `client:load` where React hydration is needed.
- **React**: PDPs in `src/views/pdp/*.tsx`, full cart page in `src/views/CartBagPage.tsx`, drawer in `src/components/cartdrawer.tsx`.
- **Shopify**: client and queries in `src/lib/shopify/storefront.ts`; "add to bag" rules in `src/lib/shopify/cart-actions.ts`.

> **Note:** Many PDPs still use **static images and prices** in JSX; the `PDP_PRODUCT_NAME` handle primarily connects the **cart** flow (`getProduct` + variant) to the correct product in Admin. Aligning to a 100% dynamic storefront is a natural Phase 2 evolution.

---

## 2. File Architecture and Responsibilities

### A. Data Layer (Shopify)

| File | Role (confirmed) |
|------|------------------|
| `src/lib/shopify/storefront.ts` | GraphQL transport: product by handle, collections, `getCart`, `createCart`, `addCartLines`, `updateCartLines`, `removeCartLines`. Types `Product`, `Cart`, `CartLine`, etc. |
| `src/lib/shopify/cart-store.ts` | Global state with **Nano Stores**: `$shopifyCart`, `$shopifyCartId` (persisted in `localStorage`), `hydrateShopifyCart()`, `syncShopifyCart()`, cart cleanup. |
| `src/lib/shopify/cart-actions.ts` | **Add to bag** orchestration: `handleAddToCartRule` (resolves variant via `getProduct`, attributes `_size` / `_purchase`, existing line merge), `removeCartLineRule`. **Filename: `cart-actions.ts` (plural)** — `cart-action.ts` does not exist. |
| `src/lib/shopify/cart-line-helpers.ts` | **Per cart line**: `calcLineUnitPrice` (adjusts unit price based on `_size` bundle and `_purchase` sub), `getLineStep` (step for +/-; currently always `1`), `calcCartSubtotal` (sums all lines). Not a generic API translator — focused on price/subtotal in the context of the drawer and bag page. |
| `src/lib/shopify/client.ts` | Singleton Storefront client instance (`PUBLIC_SHOPIFY_*`). |
| `src/lib/shopify/handles.ts` | Product handles for SEO / metadata (complementary to PDPs). |
| `src/lib/shopify/queries.ts` / `fetch-product-seo.ts` | SEO support and auxiliary product fetch. |

**Cart line (`CartLine`):** each entry in `cart.lines` is **one line** (variant + quantity + attributes). `CartLines.tsx` does `lines.map(...)` — one UI block per line.

### B. UI Layer

| File | Role (confirmed) |
|------|------------------|
| `src/components/cartdrawer.tsx` | Lateral bag drawer; exports `$cartOpen`; uses `CartLines`, `updateCartLines` / `removeCartLines`. **On disk the file is named `cartdrawer.tsx` (lowercase).** The project frequently imports `@/components/CartDrawer` (convention from the `.mdc` rule; the bundler/TS on Windows usually resolves this). |
| `src/components/CartLines.tsx` | Line list: image, title, pack/plan labels, +/- quantity, removal, line subtotal. |
| `src/views/CartBagPage.tsx` | **Full bag page** (not only used on product pages). Includes header, list with `CartLines`, cart hydration. |
| `src/islands/CartBag.tsx` | Minimal wrapper: `PageRoot` + `CartBagPage` for use in Astro. |
| `src/pages/cart.astro` | `/cart` route: `Layout` + `<CartBagIsland client:load />` (does not import `CartBagPage` directly). |

**PDPs:** `src/views/pdp/*.tsx` + corresponding Astro pages in `src/pages/*.astro` (`client:load` island).

---

## 3. Business Rules and Scalability

### Golden Rule: `PDP_PRODUCT_NAME`

In every PDP with a Shopify cart:

```ts
const PDP_PRODUCT_NAME = "exact-shopify-handle-name";
```

- **What it is:** the product **handle** (slug) in Shopify Admin (Products → URL / SEO).
- **Purpose:** `handleAddToCartRule` uses this value in `getProduct(PDP_PRODUCT_NAME)` to fetch variants and the `variantId` sent to the cart.

### Quantity and Attributes (`_size`, `_purchase`)

**Confirmed in `cart-actions.ts`:**

- The quantity sent on the cart line is **`cartQty = qty`** for both **full** and **bundle** (there is no `×2` backend multiplier for packs).
- **`_size`:** `"full"` | `"bundle"` — distinguishes the offer on the **same variant** selected by the current code (first available variant).
- **`_purchase`:** `"once"` | `"sub"` — distinguishes one-time purchase vs subscribe (as passed by the PDP to `handleAddToCartRule`).

**Line merge:** quantity is only incremented on an existing line if **`merchandise.id`** and the **`_size` + `_purchase`** pair are equal (`lineOfferMatches`). Therefore, **bundle and single tend to be separate lines** when attributes differ, even with the same variant.

**Cart step:** `getLineStep` in `cart-line-helpers.ts` returns **1** (no increments of 2 in the bag UI).

**Estimated price in drawer:** `calcLineUnitPrice` applies fixed UI discounts (`BUNDLE_DISCOUNT`, `SUB_DISCOUNT`) on top of the variant price — these may not match each PDP; the Shopify checkout is the final source of truth.

### Extra Bundle Validation (disabled)

In `cart-actions.ts` there is a **comment block** describing an optional validation (e.g., a "bundle" variant in the catalog or `pdp_bundle_line_attributes` tags). **It is not active** in the executable code; re-enabling it requires rebuilding the `product-offer.ts` module and changing the variant selection logic, as described in that comment.

---

## 4. Cursor Guide (`.mdc` rules)

Main rule: `.cursor/rules/pdp-shopify-cart.mdc` (globs: `celsius-astrolovable/src/views/pdp/**/*.tsx`).

When generating or extending PDPs with a cart:

1. **Typical imports:** `handleAddToCartRule`, `useStore`, `$shopifyCart`, `hydrateShopifyCart`, `CartDrawer` / `$cartOpen`, `toast`.
2. **Lifecycle:** `useEffect(() => { void hydrateShopifyCart(); }, []);`
3. **CTA:** `isAdding` + "Adding…" text on the button; `disabled={isAdding}`.
4. **Errors:** `try/catch` in `handleAddToCart` with `toast.error(err.message)` or a generic message.
5. **Page root:** mount `<CartDrawer />` and connect the bag icon to `$cartOpen.set(true)`.

Avoid **two desynchronized states** for the same concept (e.g., `pack` in the UI and `size` in the cart with different defaults) — derive `size` from the selected pack when applicable.

---

## 5. Development Notes (Troubleshooting)

- **`ERR_BLOCKED_BY_CLIENT`:** often caused by **extensions** (adblock) blocking telemetry/analytics scripts. If the Storefront API responds and the cart updates correctly, this can be ignored in local development — always validate in a private/incognito window or a clean browser before concluding the API has failed.
- **Images:** PDPs may use static imports from `/src/assets`. To align **100%** with the cart, use the same source as `CartLines` (e.g., `featuredImage` from the variant/product in the GraphQL response). The phrase "always `product.images.nodes[0]`" applies to the Admin/Storefront GraphQL model when the storefront is fully dynamic; the current `getProduct` code maps `images` as an array in `Product.images`.
- **Casing on Windows:** be careful with `CartDrawer` vs `cartdrawer.tsx` in case-sensitive Linux CI. Prefer a single filename aligned with imports, or configure explicit imports.

---

## 6. Corrections Summary vs. Original Draft

| Original Draft | Status in Repo |
|----------------|----------------|
| `cart-action.ts` | **`cart-actions.ts`** |
| `CartDrawer.tsx` | **`cartdrawer.tsx`** (imported as `@/components/CartDrawer` by current convention) |
| `src/views/pdp/cartBagPage.tsx` | **`src/views/CartBagPage.tsx`** — global bag page, not PDP-specific |
| Bundles increment by 2 in the cart | **`cartQty = qty`**; UI step **`getLineStep` = 1** |
| `cart-line-helpers` as a general API translator | Focused on **price/subtotal per line** and quantity step |

---

*Last revision aligned to the code in `celsius-astrolovable` (cart-actions, storefront, cart-line-helpers, cart-store, CartLines, cart.astro, CartBag island).*
