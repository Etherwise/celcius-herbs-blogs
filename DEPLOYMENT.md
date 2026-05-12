# Celsius Herbs — Deployment Guide

> Astro 5 · Shopify Headless · Cloudflare Pages

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Environment Variables](#2-environment-variables)
3. [Build Configuration](#3-build-configuration)
4. [Deploy via Cloudflare Dashboard (recommended)](#4-deploy-via-cloudflare-dashboard-recommended)
5. [Deploy via Wrangler CLI](#5-deploy-via-wrangler-cli)
6. [Post-deploy Checklist](#6-post-deploy-checklist)
7. [Common Troubleshooting](#7-common-troubleshooting)

---

## 1. Prerequisites

| Requirement | Minimum version |
|---|---|
| Node.js | 18.x |
| npm | 9.x |
| Wrangler CLI | 3.x (`npm i -g wrangler`) |
| Cloudflare account | with Pages enabled |
| Shopify app (Headless) | Storefront API enabled |

---

## 2. Environment Variables

### 2.1 Required variables

| Variable | Type | Description |
|---|---|---|
| `PUBLIC_SHOPIFY_STORE_DOMAIN` | Public | Store domain, e.g. `your-store.myshopify.com` |
| `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | **Secret** | Shopify Storefront API token |

### 2.2 Optional variables

| Variable | Default | Description |
|---|---|---|
| `PUBLIC_SHOPIFY_API_VERSION` | `2026-01` | Storefront API version |
| `VITE_SUPABASE_URL` | — | Supabase project URL (if used) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | — | Supabase public key (if used) |

### 2.3 Local `.env` file (development)

Create the `.env` file at the project root based on `.env.example`:

```bash
cp .env.example .env
```

Fill in the real values:

```env
PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here

# Optional
# PUBLIC_SHOPIFY_API_VERSION=2026-01
# VITE_SUPABASE_URL=https://your-project.supabase.co
# VITE_SUPABASE_PUBLISHABLE_KEY=your_public_key
```

> **Where to get the Shopify token:**
> Shopify Admin → Apps → Develop apps → [Select or create the app] →
> API credentials → Storefront API access token → copy the generated token.

> ⚠️ **NEVER commit the `.env` file with real values.** It is already listed in `.gitignore`.
> The `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` must be added as a **Secret**
> in the Cloudflare dashboard (see section 4.3).

---

## 3. Build Configuration

### 3.1 Build command

```bash
npm run build
```

Internally runs: `ASTRO_TELEMETRY_DISABLED=1 astro build`

### 3.2 Output directory

```
./dist
```

### 3.3 Output mode (SSR)

The project uses `output: "server"` via the `@astrojs/cloudflare` adapter.
Confirm that `astro.config.mjs` contains:

```js
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",        // ← required for SSR on the Edge
  adapter: cloudflare(),
  integrations: [react()],
  // ...
});
```

### 3.4 `wrangler.toml` (reference)

```toml
name                    = "celsius-herbs"
pages_build_output_dir  = "./dist"
compatibility_date      = "2024-09-23"
compatibility_flags     = ["nodejs_compat"]

[vars]
PUBLIC_SHOPIFY_STORE_DOMAIN = "your-store.myshopify.com"
# PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN → set as a Secret in the dashboard
```

---

## 4. Deploy via Cloudflare Dashboard (recommended)

### Step 1 — Connect repository

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Left sidebar → **Workers & Pages** → **Create application**
3. **Pages** tab → **Connect to Git**
4. Authorize access to GitHub/GitLab and select the `celsius-herbs` repository

### Step 2 — Configure the build

On the **Set up builds and deployments** screen, fill in:

| Field | Value |
|---|---|
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (repository root) |
| **Node.js version** | `18` (or higher) |

### Step 3 — Configure environment variables

Still on the configuration screen, expand **Environment variables (advanced)**:

| Variable | Type | Value |
|---|---|---|
| `PUBLIC_SHOPIFY_STORE_DOMAIN` | Plain text | `your-store.myshopify.com` |
| `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | **Encrypt (Secret)** | `your_token_here` |
| `NODE_VERSION` | Plain text | `18` |

> Repeat for both **Production** and **Preview** environments as needed.

### Step 4 — Save and deploy

1. Click **Save and Deploy**
2. Wait for the build to finish (approx. 2–4 minutes)
3. Access the generated URL: `https://celsius-herbs.pages.dev`

### Step 5 — Custom domain (optional)

1. **Workers & Pages** → `celsius-herbs` → **Custom domains**
2. Click **Set up a custom domain**
3. Enter the domain (e.g. `celsiusherbs.com`) and follow the DNS instructions

---

## 5. Deploy via Wrangler CLI

Use this method for manual deploys or CI/CD pipelines without Git integration.

### Step 1 — Authenticate with Cloudflare

```bash
wrangler login
```

### Step 2 — Install dependencies and build

```bash
npm install
npm run build
```

### Step 3 — Publish to Cloudflare Pages

```bash
wrangler pages deploy ./dist --project-name celsius-herbs
```

### Step 4 — Configure Secrets via CLI

Secret variables must not be stored in `wrangler.toml`. Set them via CLI:

```bash
# For production
wrangler pages secret put PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN \
  --project-name celsius-herbs
# → the terminal will prompt for the value (not visible in shell history)

# For preview (staging branch)
wrangler pages secret put PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN \
  --project-name celsius-herbs \
  --env preview
```

---

## 6. Post-deploy Checklist

After deploying, validate the following:

- [ ] Home page (`/`) loads without console errors
- [ ] At least one PDP (`/folliculitis-shampoo`) displays the Shopify product and price
- [ ] **Add to Bag** button adds an item to the cart (verify in CartDrawer)
- [ ] **Checkout** button redirects to `checkout.shopify.com/...`
- [ ] `/cart` page lists items correctly
- [ ] Product variants (Full Size / Bundle) display distinct prices
- [ ] Bundle shows `Out of stock` when `availableForSale: false`

---

## 7. Common Troubleshooting

### Build fails with Node.js module error

**Symptom:** `Error: Cannot find module 'crypto'` or similar.

**Fix:** Confirm that `wrangler.toml` contains:
```toml
compatibility_flags = ["nodejs_compat"]
```

---

### Cart does not persist between pages

**Symptom:** Items disappear when navigating.

**Cause:** The `shopify_cart_id` in `localStorage` was lost or is invalid.

**Fix:** Open DevTools → Application → Local Storage and verify that the `shopify_cart_id` key exists with a value in the format `gid://shopify/Cart/...`.

---

### Prices display as `—` or fallback value

**Symptom:** Variant buttons show `$0.00` or a hardcoded price instead of the real price.

**Cause:** The `getProduct()` call failed — likely due to an incorrect token or domain.

**Fix:**
1. Confirm `PUBLIC_SHOPIFY_STORE_DOMAIN` and `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` in the Cloudflare dashboard
2. Verify that the Shopify app has the `unauthenticated_read_product_listings` scope enabled

---

### Deploy rejected due to bundle size

**Symptom:** `Error: Script size exceeds limit`.

**Fix:** Verify that images are stored in `/public` (static assets) and not imported as JS modules inside SSR components.

---

### 404 on dynamic routes after deploy

**Symptom:** Routes like `/folliculitis-shampoo` return 404 on Cloudflare but work locally.

**Fix:** Confirm that `output` is set to `"server"` in `astro.config.mjs` — without SSR, routes are not generated as Edge Functions.

---

*Last updated: 05/11/2026*
