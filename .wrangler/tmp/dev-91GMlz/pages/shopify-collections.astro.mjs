globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_UrxGwwQU.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ck2Mg-5P.mjs';
import { l as listCollections } from '../chunks/storefront_CYM7z2Iz.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';

const $$ShopifyCollections = createComponent(async ($$result, $$props, $$slots) => {
  const collections = await listCollections(100);
  const missingEnv = collections.length === 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shopify \u2014 collections (debug)", "description": "Collection and handle listing for development.", "canonical": void 0 }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-10 font-sans text-foreground"> <p class="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
Development tool
</p> <h1 class="font-serif text-3xl tracking-tight mb-4">Shopify collections</h1> <p class="text-sm text-muted-foreground mb-8">
Handles below are the same ones used in <code class="text-xs bg-muted px-1 rounded">getProduct("…")</code> and
<code class="text-xs bg-muted px-1 rounded">getCollection("…")</code>.
</p> ${missingEnv ? renderTemplate`<div class="rounded-lg border border-border bg-muted/30 p-6 text-sm"> <p class="font-medium mb-2">No collections returned</p> <p class="text-muted-foreground">
Check that <code class="text-xs">.env</code> includes${" "} <code class="text-xs">PUBLIC_SHOPIFY_STORE_DOMAIN</code> and${" "} <code class="text-xs">PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN</code>, then reload (
<code class="text-xs">npm run dev</code>).
</p> </div>` : renderTemplate`<ul class="space-y-10 list-none p-0 m-0"> ${collections.map((c) => renderTemplate`<li class="border-b border-border pb-8 last:border-0"> <h2 class="font-serif text-xl mb-1">${c.title}</h2> <p class="text-sm text-muted-foreground mb-3"> <span class="font-medium text-foreground">Collection handle:</span>${" "} <code class="text-xs bg-muted px-1.5 py-0.5 rounded">${c.handle}</code> </p> ${c.description ? renderTemplate`<p class="text-xs text-muted-foreground line-clamp-2 mb-4">${c.description}</p>` : null} <p class="text-xs uppercase tracking-wider text-muted-foreground mb-2">
Products in this collection (up to 24 in query)
</p> ${c.products.length === 0 ? renderTemplate`<p class="text-sm text-muted-foreground">No products or empty collection.</p>` : renderTemplate`<ul class="space-y-1.5 text-sm list-none p-0 m-0"> ${c.products.map((p) => renderTemplate`<li class="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline"> <span>${p.title}</span> <code class="text-[11px] bg-muted px-1.5 py-0.5 rounded shrink-0">${p.handle}</code> </li>`)} </ul>`} </li>`)} </ul>`} <p class="mt-12 text-xs text-muted-foreground"> <a href="/" class="underline hover:text-foreground">← Back to site</a> </p> </div> ` })}`;
}, "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/shopify-collections.astro", void 0);

const $$file = "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/shopify-collections.astro";
const $$url = "/shopify-collections";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ShopifyCollections,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
