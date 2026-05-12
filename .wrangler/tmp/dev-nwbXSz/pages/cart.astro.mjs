globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_UrxGwwQU.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ck2Mg-5P.mjs';
import { j as jsxRuntimeExports, u as ue, P as PageRoot } from '../chunks/PageRoot_CAKxSx1p.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
import { u as useStore, h as hydrateShopifyCart, C as CartDrawer, S as Search, U as User, a as ShoppingBag, b as CartLines, c as calcCartSubtotal, $ as $cartOpen, d as $shopifyCartId, s as syncShopifyCart, e as $shopifyCart } from '../chunks/cartdrawer_DmjRgRXu.mjs';
import { B as Button } from '../chunks/button_DF0oUIQF.mjs';
import { r as removeCartLines, u as updateCartLines } from '../chunks/storefront_C5K3qrxX.mjs';

function CartBagPage() {
  const cart = useStore($shopifyCart);
  const [updatingLine, setUpdatingLine] = reactExports.useState(null);
  const [hydrated, setHydrated] = reactExports.useState(false);
  reactExports.useEffect(() => {
    hydrateShopifyCart().finally(() => setHydrated(true));
  }, []);
  const setCartOpen = (v) => $cartOpen.set(v);
  const handleQtyChange = async (lineId, newQty) => {
    const cartId = $shopifyCartId.get();
    if (!cartId || !cart) return;
    setUpdatingLine(lineId);
    try {
      const currentLine = cart.lines.find((l) => l.id === lineId);
      const updated = newQty === 0 ? await removeCartLines(cartId, [lineId]) : await updateCartLines(cartId, [
        {
          id: lineId,
          quantity: newQty,
          attributes: currentLine?.attributes
        }
      ]);
      if (updated) syncShopifyCart(updated);
    } catch (err) {
      console.error("Cart update error:", err);
      ue.error("Could not update quantity. Please try again.");
    } finally {
      setUpdatingLine(null);
    }
  };
  const isEmpty = !cart || cart.totalQuantity === 0;
  const showEmpty = hydrated && isEmpty;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink-deep text-primary-foreground text-center text-[11px] tracking-[0.18em] uppercase py-2.5 px-4", children: "Free shipping on orders over $24.99 · Free skincare quiz with every order" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border/60 bg-background/95 backdrop-blur sticky top-0 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm tracking-wide text-muted-foreground flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Best Sellers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Skin Quiz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Find In Stores" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/",
          className: "font-serif text-base sm:text-xl lg:text-2xl tracking-[0.18em] sm:tracking-[0.22em] md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-nowrap min-w-0 truncate",
          children: [
            "CELSIUS",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: " · " }),
            "HERBS"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-4 lg:gap-5 ml-auto shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 cursor-pointer hover:text-accent transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 cursor-pointer hover:text-accent transition hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "relative",
            "aria-label": "Cart",
            onClick: () => setCartOpen(true),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 cursor-pointer hover:text-accent transition" }),
              (cart?.totalQuantity ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-accent text-accent-foreground text-[9px] flex items-center justify-center font-medium", children: cart.totalQuantity })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 pt-6 text-[11px] tracking-[0.15em] uppercase text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Your bag" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 py-8 lg:py-12", children: !hydrated ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading your bag…" }) : showEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center mx-auto py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ShoppingBag,
        {
          className: "h-14 w-14 mx-auto text-muted-foreground/30 mb-4",
          strokeWidth: 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl tracking-tight mb-2", children: "Your bag is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Add something beautiful to get started." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "rounded-full text-xs tracking-[0.15em] uppercase", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: "Continue shopping" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "lg:col-span-7 xl:col-span-8 flex flex-col min-h-0 lg:h-[calc(100dvh-12rem)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl sm:text-3xl tracking-tight mb-2", children: "Your bag" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                cart.totalQuantity,
                " ",
                cart.totalQuantity === 1 ? "item" : "items"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "min-h-0 max-h-[min(24rem,calc(100dvh-14rem))] sm:max-h-[min(28rem,calc(100dvh-13rem))] lg:max-h-none lg:flex-1 overflow-y-auto overscroll-y-contain rounded-lg border border-border/60 bg-card/20 px-4 py-4 sm:px-5 sm:py-5 [scrollbar-gutter:stable]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CartLines,
                  {
                    lines: cart.lines,
                    updatingLine,
                    onQtyChange: handleQtyChange,
                    compact: false
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-5 xl:col-span-4 lg:self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-28 border border-border rounded-lg p-6 space-y-4 bg-card/30 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-lg tracking-tight", children: "Order summary" }),
        (() => {
          const currency = cart.cost.subtotalAmount.currencyCode;
          const subtotal = calcCartSubtotal(cart.lines);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                currency,
                " ",
                subtotal.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Shipping & taxes calculated at checkout" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: cart.checkoutUrl,
                className: "flex items-center justify-center w-full h-12 rounded-md bg-foreground text-background text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/90 transition",
                children: [
                  "Checkout · ",
                  currency,
                  " ",
                  subtotal.toFixed(2)
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full rounded-md text-xs tracking-[0.15em] uppercase",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: "Continue shopping" })
              }
            )
          ] });
        })()
      ] }) })
    ] }) })
  ] });
}

function CartBagIsland() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageRoot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartBagPage, {}) });
}

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Bag | Celsius Herbs", "description": "Review the items in your bag and proceed to secure checkout.", "canonical": "https://celsiusherbs.com/cart" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CartBagIsland", CartBagIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/islands/CartBag", "client:component-export": "default" })} ` })}`;
}, "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/cart.astro", void 0);

const $$file = "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
