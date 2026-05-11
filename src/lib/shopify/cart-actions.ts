import { $shopifyCartId, syncShopifyCart } from "@/lib/shopify/cart-store";
import {
  addCartLines,
  createCart,
  getProduct,
  removeCartLines,
  updateCartLines,
  type Cart,
  type ProductVariant,
} from "@/lib/shopify/storefront";

export type AddToCartInput = {
  /** Shopify product handle (product slug). */
  productName: string;
  size: "full" | "bundle";
  purchase: "once" | "sub";
  qty: number;
  cart: Cart | null;
};

export const CART_ERRORS = {
  PRODUCT_NOT_FOUND: "Product unavailable. Please try again later.",
  BUNDLE_NOT_FOUND: "Bundle option not available for this product.",
  VARIANT_OUT_OF_STOCK: "This option is currently out of stock.",
  CART_UPDATE_FAILED: "Could not update cart. Please try again.",
} as const;

/**
 * Resolves the correct Shopify variant based on `size`.
 *
 * - "full"   → first variant (single unit, e.g. "1 Bottle")
 * - "bundle" → multi-unit variant matched by Pack option value starting with "2"
 *              or containing bundle/twin/2-pack keywords
 *
 * Throws BUNDLE_NOT_FOUND when no matching bundle variant exists,
 * and VARIANT_OUT_OF_STOCK when the matched variant is unavailable.
 */
function resolveVariantForSize(
  variants: ProductVariant[],
  size: "full" | "bundle"
): ProductVariant {
  if (size === "full") {
    const variant = variants[0];
    if (!variant) throw new Error(CART_ERRORS.PRODUCT_NOT_FOUND);
    if (!variant.availableForSale) throw new Error(CART_ERRORS.VARIANT_OUT_OF_STOCK);
    return variant;
  }

  const bundleVariant = variants.find((v) => {
    const packOpt = v.selectedOptions.find((o) =>
      o.name.toLowerCase() === "pack" || o.name.toLowerCase() === "size"
    );
    if (!packOpt) return false;
    const val = packOpt.value.toLowerCase();
    return val.startsWith("2") || val.includes("bundle") || val.includes("2-pack") || val.includes("twin");
  });

  if (!bundleVariant) throw new Error(CART_ERRORS.BUNDLE_NOT_FOUND);
  if (!bundleVariant.availableForSale) throw new Error(CART_ERRORS.VARIANT_OUT_OF_STOCK);
  return bundleVariant;
}

/**
 * Identifies the cart line "offer" using only `_size` and `_purchase`.
 * Bundle and single are separate lines (quantities are not merged across them), even for the same variant.
 * Extra attributes returned by Shopify are ignored for this comparison.
 */
function lineOfferMatches(
  lineAttrs: Array<{ key: string; value: string }>,
  size: "full" | "bundle",
  purchase: "once" | "sub"
): boolean {
  const lineSize = lineAttrs.find((a) => a.key === "_size")?.value;
  const linePurchase = lineAttrs.find((a) => a.key === "_purchase")?.value;
  return lineSize === size && linePurchase === purchase;
}

/**
 * Business rule: add a product to the cart using the Shopify handle.
 * Creates the cart when needed and syncs global state at the end.
 *
 * - Line quantity is `qty` (1 bundle = 1 unit on the line, with `_size: "bundle"`).
 * - Only increments an existing line when it is the **same offer** (same variant + `_size` + `_purchase`).
 */
export async function handleAddToCartRule({
  productName,
  size,
  purchase,
  qty,
  cart,
}: AddToCartInput): Promise<Cart | null> {
  const product = await getProduct(productName);
  if (!product) throw new Error(CART_ERRORS.PRODUCT_NOT_FOUND);

  const variant = resolveVariantForSize(product.variants, size);
  const variantId = variant.id;

  /** Line quantity matches PDP `qty` for both full and bundle; `_size` attributes tag the offer. */
  const cartQty = qty;
  const lineAttributes = [
    { key: "_size", value: size },
    { key: "_purchase", value: purchase },
  ];

  const raw = localStorage.getItem("shopify_cart_id");
  const cartId = raw?.startsWith("gid://shopify/Cart/") ? raw : null;
  let updated: Cart | null = null;

  if (cartId && cart) {
    const existingLine = cart.lines.find(
      (l) =>
        l.merchandise.id === variantId &&
        lineOfferMatches(l.attributes, size, purchase)
    );

    if (existingLine) {
      updated = await updateCartLines(cartId, [
        {
          id: existingLine.id,
          quantity: existingLine.quantity + cartQty,
          attributes: lineAttributes,
        },
      ]);
    } else {
      updated = await addCartLines(cartId, [
        { merchandiseId: variantId, quantity: cartQty, attributes: lineAttributes },
      ]);
    }
  }

  if (!updated) {
    updated = await createCart([
      { merchandiseId: variantId, quantity: cartQty, attributes: lineAttributes },
    ]);
    if (updated) {
      localStorage.setItem("shopify_cart_id", updated.id);
    }
  }

  if (!updated) throw new Error(CART_ERRORS.CART_UPDATE_FAILED);

  syncShopifyCart(updated);
  return updated;
}

/**
 * Business rule: remove an entire line from the cart.
 */
export async function removeCartLineRule(lineId: string): Promise<Cart | null> {
  const cartId = $shopifyCartId.get() ?? localStorage.getItem("shopify_cart_id");
  if (!cartId) return null;

  const updated = await removeCartLines(cartId, [lineId]);
  if (updated) {
    syncShopifyCart(updated);
  }
  return updated;
}
