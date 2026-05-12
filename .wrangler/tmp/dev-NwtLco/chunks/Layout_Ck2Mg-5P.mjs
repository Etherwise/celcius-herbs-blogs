globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, g as addAttribute, r as renderTemplate, u as unescapeHTML, o as renderHead, p as renderSlot, h as createAstro } from './astro/server_UrxGwwQU.mjs';
/* empty css                                      */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "USDA-organic skincare and therapeutic hair care from Celsius Herbs.",
    canonical,
    ogTitle,
    ogDescription,
    ogImage = "https://celsiusherbs.com/cdn/shop/files/dermveda-yeast-infection-treatment_jpg_1024x1024.png",
    ogType = "website",
    jsonLd
  } = Astro2.props;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author" content="Celsius Herbs">${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"><meta property="og:title"${addAttribute(resolvedOgTitle, "content")}><meta property="og:description"${addAttribute(resolvedOgDescription, "content")}><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta name="twitter:card" content="summary_large_image">${jsonLd && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(jsonLd)))}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
