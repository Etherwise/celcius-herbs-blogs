import { createStorefrontApiClient, type StorefrontApiClient } from "@shopify/storefront-api-client";

let cached: StorefrontApiClient | null | undefined;

function storefrontConfigured(): boolean {
  const domain = import.meta.env.PUBLIC_SHOPIFY_STORE_DOMAIN?.trim();
  const token = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN?.trim();
  return Boolean(domain && token);
}

export function getStorefrontClient(): StorefrontApiClient | null {
  if (cached !== undefined) return cached;
  if (!storefrontConfigured()) {
    cached = null;
    return null;
  }
  const storeDomain = import.meta.env.PUBLIC_SHOPIFY_STORE_DOMAIN!.replace(/^https?:\/\//, "").trim();
  const apiVersion = import.meta.env.PUBLIC_SHOPIFY_API_VERSION?.trim() || "2025-01";
  const publicAccessToken = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN!.trim();

  cached = createStorefrontApiClient({
    storeDomain,
    apiVersion,
    publicAccessToken,
  });
  return cached;
}
