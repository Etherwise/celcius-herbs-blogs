globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_UrxGwwQU.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ck2Mg-5P.mjs';
import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, X, u as ue, P as PageRoot } from '../chunks/PageRoot_CAKxSx1p.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
import { O as Overlay, f as Portal, g as Content, i as Close, T as Title, D as Description, R as Root, j as Trigger, u as useStore, $ as $cartOpen, e as $shopifyCart, h as hydrateShopifyCart, C as CartDrawer, S as Search, U as User, a as ShoppingBag, M as Minus, P as Plus } from '../chunks/cartdrawer_DmjRgRXu.mjs';
import { B as Button } from '../chunks/button_DF0oUIQF.mjs';
import { C as ChevronLeft, a as ChevronRight, M as Moon, S as Star, T as Truck, R as RotateCcw, A as Award, f as Check, L as Leaf, b as Accordion, c as AccordionItem, d as AccordionTrigger, e as AccordionContent, h as handleAddToCartRule, g as Carousel, i as CarouselContent, j as CarouselItem, k as CarouselPrevious, l as CarouselNext, m as mergeShopifyProductSeo, n as SHOPIFY_PRODUCT_HANDLES } from '../chunks/merge-layout-meta_8vEeX35y.mjs';
import { P as Play, L as LiteYouTube } from '../chunks/LiteYouTube_BFzavCAR.mjs';
import { g as getProduct } from '../chunks/storefront_C5K3qrxX.mjs';
import { b as badgeUsdaOrganic, a as badgeCrueltyFree, c as badgeVegan, d as badgeMadeInUsa } from '../chunks/badge-made-in-usa_DAt_YwtQ.mjs';
import { H as Heart, S as Sun, F as FlaskConical } from '../chunks/sun_kL0qGYUv.mjs';
import { S as Sparkles } from '../chunks/sparkles_ApADezYP.mjs';

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Sprout = createLucideIcon("Sprout", [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
]);

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ZoomIn = createLucideIcon("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

const Dialog = Root;
const DialogTrigger = Trigger;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = Description.displayName;

const serumHero = "/_astro/serum-hero.TDcbG-wE.jpg";

const serumSwatch = "/_astro/serum-swatch.B3RcToJA.jpg";

const serumSkin = "/_astro/serum-skin.BEAI7zQs.jpg";

const serumBotanicals = "/_astro/serum-botanicals.CalX6ycT.jpg";

const serumApplication = "/_astro/serum-application-lifestyle.CBIIJWIq.webp";

const serumApplicationSm = "/_astro/serum-application-lifestyle-sm.B-cLD0ZA.webp";

const serumBeforeAfter = "/_astro/serum-before-after.DAOmGj2s.webp";

const serumBeforeAfterSm = "/_astro/serum-before-after-sm.BZa-EW_C.webp";

const serumProductVideo = "/_astro/serum-product-video.CSZy1qbZ.mp4";

const serumProductVideoMd = "/_astro/serum-product-video-md.Dj5pszUE.mp4";

const serumProductVideoSm = "/_astro/serum-product-video-sm.CtC9FtYQ.mp4";

const serumVideoPoster = "/_astro/serum-video-poster.C1LLTkBp.jpg";

function usePrefersLightMedia() {
  const [light, setLight] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = () => {
      const conn2 = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const saveData = !!conn2?.saveData;
      const slow = conn2?.effectiveType ? /^(slow-2g|2g|3g)$/.test(conn2.effectiveType) : false;
      const reducedData = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-data: reduce)").matches;
      setLight(saveData || slow || reducedData);
    };
    check();
    const conn = navigator.connection;
    conn?.addEventListener?.("change", check);
    return () => conn?.removeEventListener?.("change", check);
  }, []);
  return light;
}

const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

const ingredientBakuchiol = "/_astro/ingredient-bakuchiol.CVUWDn27.jpg";

const ingredientTurmeric = "/_astro/ingredient-turmeric.DfFAFLIV.jpg";

const ingredientQuinoa = "/_astro/ingredient-quinoa.Buvpn79x.jpg";

const ingredientNiacinamide = "/_astro/ingredient-niacinamide.BYpvX6BF.jpg";

const ayurvedaHeritage = "/_astro/ayurveda-heritage.t3ZMz46E.jpg";

const ugcPriya = "/_astro/ugc-priya.STMowf5k.jpg";

const ugcMaya = "/_astro/ugc-maya.BmlYdj4t.jpg";

const ugcFlatlay = "/_astro/ugc-flatlay.Dx0HFACj.jpg";

const ugcSara = "/_astro/ugc-sara.DmScpCaN.jpg";

const PDP_PRODUCT_NAME = "organic-bakuchiol-booster-serum";
const PRODUCT_IMAGES = [
  { type: "video", src: serumProductVideo, alt: "Bakuchiol Booster Serum in motion", poster: serumHero },
  { type: "image", src: serumHero, alt: "Bakuchiol Booster Serum bottle" },
  { type: "image", src: serumSwatch, alt: "Golden serum texture swatch" },
  { type: "image", src: serumSkin, alt: "Glowing radiant skin after serum" },
  { type: "image", src: serumBotanicals, alt: "Bakuchi seeds and turmeric root" }
];
const STATS = [
  { v: "94%", l: "saw smoother texture" },
  { v: "89%", l: "noticed brighter tone" },
  { v: "92%", l: "felt firmer skin" },
  { v: "0", l: "irritation reports" }
];
const KEY_INGREDIENTS = [
  { tag: "Hero", name: "Bakuchiol 4%", desc: "Plant-derived retinol alternative — smooths fine lines without irritation." },
  { tag: "Brighten", name: "Turmeric", desc: "Antioxidant that fades dark spots and calms inflammation." },
  { tag: "Firm", name: "Quinoa Peptides", desc: "Boost collagen and reinforce the skin barrier." },
  { tag: "Refine", name: "Niacinamide", desc: "Regulates oil and refines pore appearance." }
];
const INGREDIENT_SLIDES = [
  {
    image: ingredientBakuchiol,
    name: "Bakuchiol 4%",
    inci: "Psoralea Corylifolia Seed Extract",
    benefit: "Clinically shown to reduce wrinkle surface area by 20% in 12 weeks — without retinol's irritation.",
    citation: "Br J Dermatol, 2019"
  },
  {
    image: ingredientTurmeric,
    name: "Turmeric Root",
    inci: "Curcuma Longa Extract",
    benefit: "Curcuminoids inhibit tyrosinase activity, fading hyperpigmentation and calming inflammatory pathways.",
    citation: "Phytotherapy Research, 2016"
  },
  {
    image: ingredientQuinoa,
    name: "Quinoa Peptides",
    inci: "Hydrolyzed Quinoa Protein",
    benefit: "Plant peptides stimulate type I collagen synthesis and reinforce the skin's lipid barrier.",
    citation: "Int J Cosmetic Sci, 2020"
  },
  {
    image: ingredientNiacinamide,
    name: "Niacinamide 5%",
    inci: "Vitamin B3",
    benefit: "Strengthens the ceramide barrier, regulates sebum, and visibly refines pore size in 8 weeks.",
    citation: "J Cosmet Dermatol, 2014"
  }
];
const COMPARISON = [
  { criteria: "Active class", us: "Plant bakuchiol", them: "Synthetic vitamin A" },
  { criteria: "Sensitivity", us: "Gentle, no flaking", them: "Common irritation" },
  { criteria: "Pregnancy safe", us: "Yes (consult OB)", them: "No" },
  { criteria: "Sun sensitivity", us: "AM + PM safe", them: "Increases UV risk" },
  { criteria: "Visible results", us: "7–9 weeks", them: "8–12 weeks" }
];
const ROUTINE = [
  { step: "01", time: "AM", title: "Cleanse", body: "Gentle wash, leave skin slightly damp." },
  { step: "02", time: "AM + PM", title: "Bakuchiol Serum", body: "Press 4–5 drops into face and neck.", highlight: true },
  { step: "03", time: "AM", title: "Moisturize", body: "Lightweight day cream to seal hydration." },
  { step: "04", time: "AM", title: "SPF 30+", body: "Always finish daytime with broad-spectrum sun protection." }
];
const UGC_POSTS = [
  {
    image: ugcPriya,
    handle: "@priya.skin",
    quote: "9 weeks in, my fine lines actually softened.",
    before: "Day 1 · uneven tone",
    after: "Day 63 · brighter, smoother",
    tag: "Sensitive · 30s",
    likes: "12.4k"
  },
  {
    image: ugcMaya,
    handle: "@maya.glows",
    quote: "Lit-from-within in two weeks. Not exaggerating.",
    before: "Day 1 · dull, tired",
    after: "Day 14 · dewy glow",
    tag: "Combination · 40s",
    likes: "8.9k"
  },
  {
    image: ugcFlatlay,
    handle: "@thequietshelf",
    quote: "The only bottle that's stayed on my shelf this year.",
    before: "Replaced 3 retinols",
    after: "1 ritual, every night",
    tag: "Editor's pick",
    likes: "5.2k"
  },
  {
    image: ugcSara,
    handle: "@sara.naturally",
    quote: "OB-approved and my skin's never looked calmer.",
    before: "Day 1 · breakouts",
    after: "Day 42 · clear & even",
    tag: "Pregnancy safe",
    likes: "6.7k"
  }
];
const REVIEWS = [
  { name: "Priya S.", verified: true, rating: 5, title: "Replaced my retinol", body: "Nine weeks in, my forehead lines softened and dark spots faded — without a single day of peeling. Genuinely impressed.", skin: "Sensitive · 30s" },
  { name: "Maya K.", verified: true, rating: 5, title: "Glow is real", body: "I noticed a difference in two weeks. My skin looks lit-from-within and my fine lines are visibly softer.", skin: "Combination · 40s" },
  { name: "Sara L.", verified: true, rating: 4, title: "Pregnancy approved", body: "My OB cleared this and it's been a lifesaver while I can't use retinol. Skin is calm and even-toned.", skin: "Normal · 30s" }
];
const FAQS = [
  {
    q: "How is Bakuchiol different from retinol?",
    a: "Bakuchiol is a plant-derived compound from the babchi seed that delivers retinol-like benefits — smoother texture, softened fine lines, brighter tone — without the irritation, flaking, or sun sensitivity. It's safe for AM and PM use.",
    videoId: "dbxs9yaNtkA"
  },
  { q: "Can I use it during pregnancy?", a: "Bakuchiol is widely considered a safer alternative to retinol for expectant mothers, but please consult your OB/GYN before adding any new active to your routine during pregnancy or while breastfeeding." },
  { q: "When will I see results?", a: "Most users notice softer, more radiant skin within 2–3 weeks. Visible reduction in fine lines, dark spots, and uneven tone typically appears around week 7–9 of consistent twice-daily use." },
  { q: "How do I layer it?", a: "Cleanse, mist or tone, then press 4–5 drops into damp skin morning and night. Follow with moisturizer. SPF in the morning is always recommended." },
  { q: "What's the full ingredient list?", a: "Organic Bakuchiol extract 4%, Turmeric extract, Quinoa extract, Niacinamide, Glycerin, Xanthan Gum, Aqua. That's it — no fillers, no fragrance, no parabens." }
];
const LifestyleCaptionOverlay = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/45 to-transparent pt-12 sm:pt-16",
      style: {
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/90 text-[9px] tracking-[0.18em] uppercase text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            " Daily glow"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.2em] uppercase text-background/80 truncate max-w-[40%]", children: "@celsiusherbs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-serif text-background leading-snug max-w-[26ch] sm:max-w-md",
            style: { fontSize: "clamp(1rem, 3.6vw, 1.875rem)" },
            children: `"Two drops. That's the whole ritual."`
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "absolute inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur text-[9px] tracking-[0.2em] uppercase text-foreground",
      style: {
        top: "max(0.75rem, env(safe-area-inset-top))",
        left: "max(0.75rem, env(safe-area-inset-left))"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 text-accent fill-accent", strokeWidth: 0 }),
        " 12.4k"
      ]
    }
  )
] });
const BeforeAfterChipsOverlay = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "absolute inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-ink-deep/85 backdrop-blur tracking-[0.18em] uppercase text-background",
      style: {
        top: "max(0.5rem, env(safe-area-inset-top))",
        left: "max(0.5rem, env(safe-area-inset-left))",
        fontSize: "clamp(0.625rem, 1.6vw, 0.75rem)"
      },
      children: "Day 1"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "absolute inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent tracking-[0.18em] uppercase text-accent-foreground",
      style: {
        top: "max(0.5rem, env(safe-area-inset-top))",
        right: "max(0.5rem, env(safe-area-inset-right))",
        fontSize: "clamp(0.625rem, 1.6vw, 0.75rem)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3", strokeWidth: 2 }),
        " Day 28"
      ]
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "hidden sm:inline-flex absolute left-1/2 -translate-x-1/2 items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-xs tracking-[0.18em] uppercase text-foreground shadow-sm whitespace-nowrap",
      style: { bottom: "max(1.25rem, env(safe-area-inset-bottom))" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 text-accent fill-accent", strokeWidth: 0 }),
        "Loved by 8.2k · #PlantRetinol"
      ]
    }
  )
] });
const IngredientSlider = () => {
  const [api, setApi] = reactExports.useState(null);
  const [current, setCurrent] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Carousel,
      {
        setApi,
        opts: { align: "start", loop: true },
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-3 lg:-ml-4", children: INGREDIENT_SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CarouselItem,
            {
              className: "pl-3 lg:pl-4 basis-full sm:basis-1/2 lg:basis-1/2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative aspect-[4/5] sm:aspect-[5/6] rounded-xl overflow-hidden bg-secondary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: s.image,
                    alt: `${s.name} — ${s.inci}`,
                    width: 1024,
                    height: 1024,
                    loading: "lazy",
                    decoding: "async",
                    className: "absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0",
                    style: {
                      paddingTop: "max(1rem, env(safe-area-inset-top))",
                      paddingLeft: "max(1rem, env(safe-area-inset-left))"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-foreground text-background text-[10px] tracking-[0.18em] uppercase font-medium", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
                      "0",
                      i + 1,
                      " / 0",
                      INGREDIENT_SLIDES.length
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute inset-x-0 bottom-0",
                    style: {
                      paddingLeft: "max(1.25rem, env(safe-area-inset-left))",
                      paddingRight: "max(1.25rem, env(safe-area-inset-right))",
                      paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] tracking-[0.22em] uppercase text-accent mb-1.5", children: s.inci }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-serif text-foreground leading-[1.05] mb-2",
                          style: { fontSize: "clamp(1.5rem, 3.6vw, 2.25rem)" },
                          children: s.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-foreground/75 leading-snug max-w-[40ch]",
                          style: { fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)" },
                          children: s.benefit
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 inline-flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-3 h-3" }),
                        s.citation
                      ] })
                    ]
                  }
                )
              ] })
            },
            s.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "hidden lg:flex -left-5 bg-background border-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "hidden lg:flex -right-5 bg-background border-border" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mt-5", children: INGREDIENT_SLIDES.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": `Go to slide ${i + 1}`,
        onClick: () => api?.scrollTo(i),
        className: cn(
          "h-1.5 rounded-full transition-all",
          current === i ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
        )
      },
      i
    )) })
  ] });
};
const BUNDLE_ITEMS = [
  {
    id: "serum",
    name: "Bakuchiol Booster Serum",
    tagline: "This product",
    price: 19.89,
    image: serumHero,
    href: "#"
  },
  {
    id: "moisturizer",
    name: "Dermveda Ultra Moisturizer",
    tagline: "Lock in hydration",
    price: 19.9,
    image: "https://celsiusherbs.com/cdn/shop/files/9_5f1c4e5f-0380-416c-a911-2ad4c65060ce_1024x1024.jpg?v=1763571089",
    href: "https://celsiusherbs.com/products/anti-aging-cream"
  },
  {
    id: "soap",
    name: "Turmeric Honey Soap",
    tagline: "Prep & brighten · Handcrafted",
    price: 16.89,
    image: "https://celsiusherbs.com/cdn/shop/files/turmeric-soap-in-hand_1024x1024.png?v=1746152254",
    href: "https://celsiusherbs.com/products/turmeric-soap"
  }
];
const FrequentlyBoughtTogether = () => {
  const [selected, setSelected] = reactExports.useState({
    serum: true,
    moisturizer: true,
    soap: true
  });
  const toggle = (id) => {
    if (id === "serum") return;
    setSelected((s) => ({ ...s, [id]: !s[id] }));
  };
  const subtotal = BUNDLE_ITEMS.reduce((sum, it) => sum + (selected[it.id] ? it.price : 0), 0);
  const selectedCount = Object.values(selected).filter(Boolean).length;
  const discount = selectedCount === 3 ? 0.15 : selectedCount === 2 ? 0.1 : 0;
  const total = subtotal * (1 - discount);
  const savings = subtotal - total;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 lg:mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Complete the ritual" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-3", children: "Frequently bought together" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-[15px]", children: "Customers who choose the serum complete their routine with these. Bundle all three and save up to 15%." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-stretch gap-3 sm:gap-2", children: BUNDLE_ITEMS.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch gap-3 sm:gap-2 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => toggle(item.id),
            disabled: item.id === "serum",
            className: cn(
              "group relative w-full bg-background rounded-lg border-2 transition-all overflow-hidden text-left flex flex-col",
              selected[item.id] ? "border-foreground shadow-sm" : "border-border opacity-60 hover:opacity-100",
              item.id === "serum" && "cursor-default"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square w-full bg-gradient-to-b from-secondary/30 to-secondary/60 overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.image,
                  alt: item.name,
                  loading: "lazy",
                  className: "absolute inset-0 w-full h-full object-contain p-6"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors",
                    selected[item.id] ? "bg-foreground border-foreground text-background" : "bg-background border-border"
                  ),
                  children: selected[item.id] && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5", strokeWidth: 3 })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.18em] uppercase text-muted-foreground line-clamp-1 min-h-[1.2em] leading-[1.2]", children: item.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-base md:text-lg leading-[1.25] line-clamp-2 min-h-[2.5em]", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium leading-none mt-auto pt-1", children: [
                  "$",
                  item.price.toFixed(2)
                ] })
              ] })
            ]
          }
        ),
        idx < BUNDLE_ITEMS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-8 sm:h-auto h-8 shrink-0 text-muted-foreground self-center", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }) })
      ] }, item.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-lg p-6 lg:p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-4", children: [
          "Your bundle · ",
          selectedCount,
          " ",
          selectedCount === 1 ? "item" : "items"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 mb-5 text-sm", children: BUNDLE_ITEMS.filter((i) => selected[i.id]).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground line-clamp-1", children: i.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "$",
            i.price.toFixed(2)
          ] })
        ] }, i.id)) }),
        discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm pb-3 mb-3 border-b border-dashed border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-medium", children: "Bundle discount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent font-medium", children: [
            "−$",
            savings.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-[0.2em] uppercase text-muted-foreground", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground line-through", children: [
              "$",
              subtotal.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-3xl", children: [
              "$",
              total.toFixed(2)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "lg",
            className: "w-full rounded-full bg-foreground text-background hover:bg-foreground/90 h-12 text-[13px] tracking-[0.18em] uppercase",
            disabled: selectedCount === 0,
            children: "Add bundle to bag"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground text-center mt-3 flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-3 w-3" }),
          " Free 3-day delivery in the USA"
        ] })
      ] }) })
    ] })
  ] }) });
};
const UgcCarousel = () => {
  const [api, setApi] = reactExports.useState(null);
  const [current, setCurrent] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Carousel,
      {
        setApi,
        opts: { align: "start", loop: true, containScroll: "trimSnaps", dragFree: false },
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-3 lg:-ml-4 -mr-5 sm:mr-0 lg:px-1", children: UGC_POSTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CarouselItem,
            {
              className: "pl-3 lg:pl-4 basis-[88%] sm:basis-1/2 lg:basis-1/3",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-secondary touch-pan-y select-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.image,
                    alt: `Customer post by ${p.handle}: ${p.quote}`,
                    width: 1024,
                    height: 1280,
                    loading: "lazy",
                    decoding: "async",
                    draggable: false,
                    className: "absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.03] pointer-events-none"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute top-0 left-0 right-0 flex items-center justify-between",
                    style: {
                      paddingTop: "max(0.875rem, env(safe-area-inset-top))",
                      paddingLeft: "max(0.875rem, env(safe-area-inset-left))",
                      paddingRight: "max(0.875rem, env(safe-area-inset-right))"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-foreground shadow-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
                        "Real customer"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded-full bg-ink-deep/75 backdrop-blur text-[11px] sm:text-[10px] text-background", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 text-accent fill-accent", strokeWidth: 0 }),
                        p.likes
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep via-ink-deep/75 to-transparent pt-20 sm:pt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      paddingLeft: "max(1.125rem, env(safe-area-inset-left))",
                      paddingRight: "max(1.125rem, env(safe-area-inset-right))",
                      paddingBottom: "max(1.125rem, env(safe-area-inset-bottom))"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2.5 text-[11px] sm:text-[10px] tracking-[0.2em] uppercase text-background/90", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: p.handle }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "·" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: p.tag })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "blockquote",
                        {
                          className: "font-serif text-background leading-[1.2] mb-3.5",
                          style: { fontSize: "clamp(1.125rem, 4.4vw, 1.375rem)" },
                          children: [
                            '"',
                            p.quote,
                            '"'
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/20 backdrop-blur text-[10px] sm:text-[9px] tracking-[0.18em] uppercase text-background border border-background/25", children: p.before }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-background/60 text-[11px]", children: "→" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-[10px] sm:text-[9px] tracking-[0.18em] uppercase font-medium", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5", strokeWidth: 2 }),
                          p.after
                        ] })
                      ] })
                    ]
                  }
                ) })
              ] })
            },
            p.handle
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "hidden lg:flex -left-5 bg-background border-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "hidden lg:flex -right-5 bg-background border-border" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between sm:justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 sm:gap-2", children: UGC_POSTS.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": `Go to post ${i + 1}`,
          "aria-current": current === i ? "true" : void 0,
          onClick: () => api?.scrollTo(i),
          className: "group relative h-11 w-7 sm:w-8 flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "block h-1.5 rounded-full transition-all",
                current === i ? "w-7 bg-foreground" : "w-1.5 bg-foreground/25 group-hover:bg-foreground/50"
              )
            }
          )
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sm:hidden text-[11px] tracking-[0.2em] uppercase text-muted-foreground tabular-nums", children: [
        String(current + 1).padStart(2, "0"),
        " / ",
        String(UGC_POSTS.length).padStart(2, "0")
      ] })
    ] })
  ] });
};
const Index = () => {
  const [activeImage, setActiveImage] = reactExports.useState(0);
  const [size, setSize] = reactExports.useState("full");
  const [purchase, setPurchase] = reactExports.useState("sub");
  const [qty, setQty] = reactExports.useState(1);
  const heroVideoRef = reactExports.useRef(null);
  const galleryRef = reactExports.useRef(null);
  const [heroInView, setHeroInView] = reactExports.useState(false);
  const [videoReady, setVideoReady] = reactExports.useState(false);
  const [cartOpen, setCartOpen] = [useStore($cartOpen), (v) => $cartOpen.set(v)];
  const cart = useStore($shopifyCart);
  const [isAdding, setIsAdding] = reactExports.useState(false);
  const [variants, setVariants] = reactExports.useState([]);
  reactExports.useEffect(() => {
    void hydrateShopifyCart();
  }, []);
  reactExports.useEffect(() => {
    getProduct(PDP_PRODUCT_NAME).then((p) => {
      if (p) setVariants(p.variants);
    });
  }, []);
  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await handleAddToCartRule({
        productName: PDP_PRODUCT_NAME,
        size,
        purchase,
        qty,
        cart
      });
      setCartOpen(true);
    } catch (err) {
      console.error("Cart error:", err);
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      ue.error(message);
    } finally {
      setIsAdding(false);
    }
  };
  const isMobile = useIsMobile();
  const lightMedia = usePrefersLightMedia();
  const useStaticFallback = isMobile && lightMedia;
  reactExports.useEffect(() => {
    const el = galleryRef.current;
    if (!el) {
      setHeroInView(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setHeroInView(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh + 200 && rect.bottom > -200) {
      setHeroInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setHeroInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  reactExports.useEffect(() => {
    setVideoReady(false);
    if (!heroInView) return;
    const v = heroVideoRef.current;
    if (!v) return;
    if (PRODUCT_IMAGES[activeImage].type !== "video") return;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {
      });
    };
    const markReady = () => setVideoReady(true);
    tryPlay();
    v.addEventListener("loadedmetadata", tryPlay, { once: true });
    v.addEventListener("canplay", markReady);
    v.addEventListener("playing", markReady);
    if (v.readyState >= 3) setVideoReady(true);
    return () => {
      v.removeEventListener("loadedmetadata", tryPlay);
      v.removeEventListener("canplay", markReady);
      v.removeEventListener("playing", markReady);
    };
  }, [activeImage, useStaticFallback, heroInView]);
  const fullVariant = variants[0];
  const bundleVariant = variants.find((v) => {
    const packOpt = v.selectedOptions.find(
      (o) => o.name.toLowerCase() === "pack" || o.name.toLowerCase() === "size"
    );
    if (!packOpt) return false;
    const val = packOpt.value.toLowerCase();
    return val.startsWith("2") || val.includes("bundle") || val.includes("2-pack") || val.includes("twin");
  });
  const isBundleAvailable = !!bundleVariant?.availableForSale;
  const activeVariant = size === "full" ? fullVariant : bundleVariant;
  const basePrice = activeVariant ? parseFloat(activeVariant.price.amount) : size === "full" ? 19.89 : 27.82;
  const finalPrice = purchase === "sub" ? +(basePrice * 0.9).toFixed(2) : basePrice;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink-deep text-primary-foreground text-center text-[11px] tracking-[0.18em] uppercase py-2.5 px-4", children: "Free shipping on orders over $24.99 · Free skincare quiz with every order" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border/60 bg-background/95 backdrop-blur sticky top-0 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm tracking-wide text-muted-foreground flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Best Sellers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Skin Quiz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Find In Stores" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative", "aria-label": "Cart", onClick: () => setCartOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 cursor-pointer hover:text-accent transition" }),
          (cart?.totalQuantity ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-accent text-accent-foreground text-[9px] flex items-center justify-center font-medium", children: cart.totalQuantity })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 pt-6 text-[11px] tracking-[0.15em] uppercase text-muted-foreground overflow-x-auto scrollbar-hide whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Skincare" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Serums" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Bakuchiol Booster" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col-reverse md:flex-row gap-3 md:gap-4 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-2.5 md:w-[88px] shrink-0 overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0", children: PRODUCT_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveImage(i),
            className: cn(
              "relative h-20 w-20 md:h-[88px] md:w-[88px] rounded-md overflow-hidden border-2 shrink-0 transition",
              activeImage === i ? "border-foreground" : "border-transparent hover:border-muted-foreground/40"
            ),
            "aria-label": img.alt,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img.type === "video" ? img.poster ?? serumHero : img.src,
                  alt: img.alt,
                  className: "w-full h-full object-cover",
                  loading: "lazy"
                }
              ),
              img.type === "video" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1 right-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-background/90 text-foreground shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-2.5 w-2.5 fill-current", strokeWidth: 0 }) })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: galleryRef, className: "relative flex-1 bg-peach rounded-xl overflow-hidden aspect-[4/5] min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 z-10 text-[10px] tracking-[0.25em] uppercase bg-background/95 backdrop-blur text-foreground px-3 py-1.5 rounded-full font-medium shadow-sm", children: "✦ Bestseller" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/95 backdrop-blur flex items-center justify-center hover:bg-background transition shadow-sm", "aria-label": "Save", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4", strokeWidth: 1.75 }) }),
          PRODUCT_IMAGES[activeImage].type === "video" ? useStaticFallback || !heroInView ? (
            // Poster-first: until the gallery is in view we render the
            // lightweight poster image, deferring the multi-MB mp4
            // download. The <img> is swapped for the <video> on the
            // very next render once `heroInView` flips true.
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: PRODUCT_IMAGES[activeImage].poster ?? serumVideoPoster,
                alt: PRODUCT_IMAGES[activeImage].alt,
                className: "w-full h-full object-cover",
                loading: "eager",
                decoding: "async",
                fetchpriority: "high"
              }
            )
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "video",
              {
                ref: heroVideoRef,
                poster: PRODUCT_IMAGES[activeImage].poster ?? serumVideoPoster,
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                preload: "auto",
                controls: false,
                className: "w-full h-full object-cover",
                "aria-label": PRODUCT_IMAGES[activeImage].alt,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: serumProductVideoSm, type: "video/mp4", media: "(max-width: 768px)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: serumProductVideoMd, type: "video/mp4", media: "(max-width: 1280px)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: serumProductVideo, type: "video/mp4" })
                ]
              },
              PRODUCT_IMAGES[activeImage].src
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "aria-hidden": true,
                className: cn(
                  "pointer-events-none absolute inset-0 shimmer-overlay transition-opacity duration-500",
                  videoReady ? "opacity-0" : "opacity-100"
                )
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: PRODUCT_IMAGES[activeImage].src,
              alt: PRODUCT_IMAGES[activeImage].alt,
              className: "w-full h-full object-cover",
              loading: "lazy",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveImage((activeImage - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length),
              className: "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background/80 backdrop-blur hover:bg-background flex items-center justify-center transition",
              "aria-label": "Previous image",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveImage((activeImage + 1) % PRODUCT_IMAGES.length),
              className: "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background/80 backdrop-blur hover:bg-background flex items-center justify-center transition",
              "aria-label": "Next image",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.22em] uppercase font-medium bg-foreground text-background px-2.5 py-1 rounded", children: "Step 02 · Treat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3 w-3" }),
            " AM ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "·" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3" }),
            " PM"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-2", children: "Dermveda · Face Serum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-[2.25rem] md:text-5xl leading-[1.02] mb-4 tracking-tight", children: "Bakuchiol Booster Serum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground mb-5 leading-relaxed", children: "Plant retinol alternative with turmeric and quinoa peptides. Visibly smoother, brighter, firmer — without irritation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-6", children: ["Fine Lines", "Dark Spots", "Sensitive Skin", "Pregnancy Safe"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-secondary text-foreground/80", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-foreground text-foreground" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "4.6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reviews", className: "text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground", children: "145 reviews" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "98% would repurchase" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-muted-foreground", children: "Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: size === "full" ? "2 fl oz · 60ml" : "2 × 60ml · save 30%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
            {
              k: "full",
              label: "Full Size",
              sub: "60ml",
              price: fullVariant ? `$${parseFloat(fullVariant.price.amount).toFixed(2)}` : "—",
              available: fullVariant?.availableForSale ?? true
            },
            {
              k: "bundle",
              label: "Bundle of 2",
              sub: isBundleAvailable ? "Save more" : "Out of stock",
              price: bundleVariant ? `$${parseFloat(bundleVariant.price.amount).toFixed(2)}` : "—",
              available: isBundleAvailable
            }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => s.available && setSize(s.k),
              disabled: !s.available,
              className: cn(
                "px-3 py-3 rounded-md border text-sm transition text-left",
                size === s.k ? "border-foreground bg-secondary/40" : "border-border hover:border-muted-foreground/50",
                !s.available && "opacity-50 cursor-not-allowed"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-[13px]", children: [
                  s.label,
                  " · ",
                  s.sub
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: s.price })
              ]
            },
            s.k
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setPurchase("once"),
              className: cn(
                "w-full flex items-center justify-between px-4 py-3.5 rounded-md border-2 transition",
                purchase === "once" ? "border-foreground" : "border-border"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-4 w-4 rounded-full border-2 flex items-center justify-center", purchase === "once" ? "border-foreground" : "border-muted-foreground"), children: purchase === "once" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }) }),
                  "One-time purchase"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                  "$",
                  basePrice.toFixed(2)
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setPurchase("sub"),
              className: cn(
                "w-full flex items-center justify-between px-4 py-3.5 rounded-md border-2 transition",
                purchase === "sub" ? "border-foreground" : "border-border"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3 text-sm flex-wrap text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0", purchase === "sub" ? "border-foreground" : "border-muted-foreground"), children: purchase === "sub" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subscribe & save 10%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-widest uppercase bg-accent text-accent-foreground px-2 py-0.5 rounded-full", children: "Best Value" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm whitespace-nowrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "line-through text-muted-foreground mr-1.5 text-xs", children: [
                    "$",
                    basePrice.toFixed(2)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                    "$",
                    (basePrice * 0.9).toFixed(2)
                  ] })
                ] })
              ]
            }
          ),
          purchase === "sub" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground px-1 leading-relaxed", children: [
            "Delivered every ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline", children: "8 weeks" }),
            ". Skip, swap, or cancel anytime."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border rounded-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(Math.max(1, qty - 1)), className: "px-3 py-3 hover:bg-secondary transition", "aria-label": "Decrease", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 text-center text-sm font-medium", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(qty + 1), className: "px-3 py-3 hover:bg-secondary transition", "aria-label": "Increase", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "flex-1 h-12 rounded-md tracking-[0.12em] text-xs uppercase font-medium",
              onClick: handleAddToCart,
              disabled: isAdding,
              children: isAdding ? "Adding…" : `Add to Bag · $${(finalPrice * qty).toFixed(2)}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-12 mb-5 rounded-md border border-foreground/20 text-xs tracking-[0.12em] uppercase font-medium hover:bg-secondary/60 transition", children: "Buy Now — Pay in 4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [
          { icon: Truck, label: "Free Shipping", sub: "$24.99+" },
          { icon: RotateCcw, label: "Easy Returns", sub: "30 days" },
          { icon: Award, label: "Money-Back", sub: "Guarantee" }
        ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center py-3 px-2 bg-secondary/40 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-4 w-4 mb-1.5 text-foreground", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium leading-tight", children: b.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: b.sub })
        ] }, b.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 items-center gap-2 sm:gap-4", children: [
          { src: badgeUsdaOrganic, label: "USDA Organic" },
          { src: badgeCrueltyFree, label: "Cruelty Free" },
          { src: badgeVegan, label: "100% Vegan" },
          { src: badgeMadeInUsa, label: "Made in USA" }
        ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: b.src,
            alt: b.label,
            title: b.label,
            width: 1024,
            height: 1024,
            loading: "lazy",
            className: "mx-auto h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
          },
          b.label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-10 lg:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-foreground/60 mb-2", children: "Clinical Study · 8 Weeks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl", children: "Real results, measured." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl md:text-6xl mb-2 text-ink-deep", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-foreground/70 leading-snug", children: s.l })
      ] }, s.l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-8 tracking-wider", children: "Based on consumer perception study, n=82, 8 weeks of twice-daily use." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 order-2 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "aria-label": "Zoom into lifestyle image with caption",
            className: "group relative rounded-2xl overflow-hidden bg-secondary/40 aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] block w-full focus:outline-none focus:ring-2 focus:ring-ring",
            children: [
              useStaticFallback ? /* @__PURE__ */ jsxRuntimeExports.jsxs("picture", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("source", { media: "(max-width: 768px)", srcSet: serumApplicationSm, type: "image/webp" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: serumApplication,
                    alt: "Bakuchiol Plant Retinol Serum — application moment",
                    loading: "lazy",
                    decoding: "async",
                    className: "w-full h-full object-cover transition group-hover:scale-[1.02]"
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "video",
                {
                  poster: serumVideoPoster,
                  autoPlay: true,
                  muted: true,
                  loop: true,
                  playsInline: true,
                  preload: "metadata",
                  className: "w-full h-full object-cover transition group-hover:scale-[1.02]",
                  "aria-label": "Bakuchiol Plant Retinol Serum — application moment",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: serumProductVideoSm, type: "video/mp4", media: "(max-width: 768px)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: serumProductVideoMd, type: "video/mp4", media: "(max-width: 1280px)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: serumProductVideo, type: "video/mp4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(LifestyleCaptionOverlay, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "absolute inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-foreground border border-border shadow-sm",
                  style: {
                    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
                    right: "max(0.75rem, env(safe-area-inset-right))"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-3 h-3" }),
                    " Zoom"
                  ]
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[96vw] sm:max-w-3xl p-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "sr-only", children: "Product video — zoomed view" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "sr-only", children: "Full-screen playback of the Bakuchiol Booster Serum application video." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-h-[88vh] overflow-auto bg-ink-deep", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "video",
              {
                poster: serumVideoPoster,
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                controls: true,
                preload: "metadata",
                className: "w-full h-auto object-contain block",
                "aria-label": "Bakuchiol Plant Retinol Serum — zoomed application moment",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: serumProductVideoMd, type: "video/mp4", media: "(max-width: 1024px)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: serumProductVideo, type: "video/mp4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LifestyleCaptionOverlay, {})
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "A quiet ritual" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-5", children: [
          "Two drops.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Morning and night."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Press a half dropper into clean palms, warm between hands, and gently press into skin. No tugging, no sting — just a soft botanical glow that builds with every use." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: [
          "Lightweight, fast-absorbing finish",
          "Layers under moisturizer or SPF",
          "Pregnancy & sensitive-skin friendly"
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 mt-0.5 text-accent shrink-0", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
        ] }, t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Real results, naturally" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight", children: "Visible transformation in 4 weeks." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "aria-label": "Zoom into before and after comparison",
            className: "group relative rounded-2xl overflow-hidden bg-background shadow-sm block w-full focus:outline-none focus:ring-2 focus:ring-ring",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("picture", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("source", { media: "(max-width: 768px)", srcSet: serumBeforeAfterSm, type: "image/webp" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: serumBeforeAfter,
                    alt: "Before and after 4 weeks of use: brighter even tone, reduced blemishes and spots, smoother texture and refined pores",
                    className: "w-full h-auto block",
                    loading: "lazy",
                    decoding: "async"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfterChipsOverlay, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "absolute hidden sm:inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-foreground border border-border shadow-sm",
                  style: {
                    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
                    right: "max(0.75rem, env(safe-area-inset-right))"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-3 h-3" }),
                    " Zoom"
                  ]
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[96vw] sm:max-w-4xl p-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "sr-only", children: "Before and after — zoomed view" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "sr-only", children: "Zoomed before and after comparison showing skin improvement after 4 weeks of use." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-h-[88vh] overflow-auto bg-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: serumBeforeAfter,
                alt: "Before and after comparison, zoomed view",
                className: "w-full h-auto object-contain block"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfterChipsOverlay, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden flex justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-[10px] tracking-[0.18em] uppercase text-foreground shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 text-accent fill-accent", strokeWidth: 0 }),
        "Loved by 8.2k · #PlantRetinol"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-6 tracking-wider", children: "Individual results may vary. Based on twice-daily use over 4 weeks." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "What's inside" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-5", children: [
            "Four actives.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Zero compromises."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Every ingredient is plant-derived, clinically supported, and chosen for one job — to renew your skin without the irritation of conventional retinol." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3", children: KEY_INGREDIENTS.map((ing) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 rounded-xl p-5 hover:bg-secondary transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.18em] uppercase text-accent font-medium", children: ing.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl mt-2 mb-2", children: ing.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ing.desc })
        ] }, ing.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IngredientSlider, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Your routine" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight", children: "Where it fits." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4", children: ROUTINE.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "rounded-xl p-5 lg:p-6 border transition flex flex-col",
            r.highlight ? "bg-foreground text-background border-foreground" : "bg-background border-border"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-[10px] tracking-[0.2em] uppercase mb-3", r.highlight ? "text-background/60" : "text-muted-foreground"), children: r.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-serif text-3xl mb-3", r.highlight ? "text-background" : "text-ink-deep"), children: r.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: cn("font-medium mb-2 text-[15px]", r.highlight && "text-background"), children: r.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-xs leading-relaxed", r.highlight ? "text-background/70" : "text-muted-foreground"), children: r.body }),
            r.highlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 mt-3 text-[10px] tracking-[0.15em] uppercase text-accent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
              " This serum"
            ] })
          ]
        },
        r.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FrequentlyBoughtTogether, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink-deep text-primary-foreground py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "The difference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-3", children: "Bakuchiol vs. retinol" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 max-w-lg mx-auto text-sm", children: "Same renewal benefits — without redness, peeling, or sun sensitivity." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden border border-primary-foreground/15 bg-primary-foreground/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-primary-foreground/[0.06] text-[10px] tracking-[0.2em] uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-accent border-l border-primary-foreground/15 font-medium", children: "Our Bakuchiol" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/50 border-l border-primary-foreground/15", children: "Conventional Retinol" })
        ] }),
        COMPARISON.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid grid-cols-3 text-sm", i % 2 && "bg-primary-foreground/[0.02]"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/70 text-xs lg:text-sm", children: row.criteria }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-5 border-l border-primary-foreground/15 flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-accent shrink-0 mt-0.5" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs lg:text-sm", children: row.us })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 border-l border-primary-foreground/15 text-primary-foreground/55 text-xs lg:text-sm", children: row.them })
        ] }, row.criteria))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        LiteYouTube,
        {
          id: "dbxs9yaNtkA",
          start: 1,
          title: "Watch: Dr. Jennifer Haley on plant retinol",
          className: "shadow-lg"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Dermatologist approved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-serif text-xl md:text-2xl leading-snug mb-4 text-ink-deep", children: '"Bakuchiol delivers retinol-like results without the irritation. This formulation is one I trust for my most sensitive patients."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Dr. Jennifer Haley, M.D." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/60 text-xs tracking-wider uppercase mt-1", children: "Board-Certified Dermatologist · 20+ Years" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach/40 py-20 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 order-1 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: ayurvedaHeritage,
              alt: "A handcrafted brass kansa bowl of turmeric-infused oil with tulsi leaves and bakuchi seeds, evoking traditional Ayurvedic ritual",
              width: 1080,
              height: 1350,
              loading: "lazy",
              decoding: "async",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-[10px] tracking-[0.22em] uppercase text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            "Est. 1500 BCE"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 order-2 lg:order-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.28em] uppercase text-accent mb-4", children: "Inspired by Ayurveda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.05] mb-6 text-ink-deep", children: [
            "A 5,000-year-old",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "ritual of radiance."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/75 leading-relaxed mb-5 max-w-xl", children: [
            'Long before "clean beauty," the sages of Ayurveda recorded an entire science of skin in the Charaka Samhita — herbs pressed at dawn, infused into warm oils, and applied with intention. Bakuchi (बाकुची), turmeric (हरिद्रा) and tulsi were prescribed not as cosmetics, but as ',
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic font-serif italic text-ink-deep", children: "rasayana" }),
            " — formulas to renew the body from within."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 leading-relaxed max-w-xl", children: "We honor that lineage. Every active in this serum is sourced from the same plants Ayurvedic vaidyas have used for centuries — now stabilized with modern cold-press extraction so each drop delivers exactly what your skin needs, nothing it doesn't." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-8 border-t border-foreground/10 inline-flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-2xl text-ink-deep", children: '"yatha pinde tatha brahmande"' }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.18em] uppercase text-muted-foreground mt-2", children: "As is the body, so is the cosmos · Ancient Sanskrit verse" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5", children: [
        {
          sanskrit: "Rasayana",
          meaning: "The art of rejuvenation",
          how: "Bakuchi seed — used in Ayurveda for centuries to renew skin cells — is the modern bakuchiol that replaces irritating retinol.",
          icon: Sparkles
        },
        {
          sanskrit: "Haridra",
          meaning: "The golden healer",
          how: "Turmeric, ground fresh into temple offerings, is cold-pressed here to brighten tone and calm inflammation at the source.",
          icon: Sun
        },
        {
          sanskrit: "Abhyanga",
          meaning: "The daily oil ritual",
          how: "Press 4–5 drops between warm palms and massage in upward strokes — the same method prescribed in Ayurvedic dinacharya.",
          icon: Leaf
        }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-background rounded-2xl p-7 lg:p-8 border border-foreground/5 hover:shadow-sm transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5 text-accent mb-5", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2", children: p.meaning }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl lg:text-3xl text-ink-deep mb-4", children: p.sanskrit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 leading-relaxed", children: p.how })
          ]
        },
        p.sanskrit
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "#PlantRetinol · 8.2k posts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] text-ink-deep", children: [
            "The community",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
            " that swore off retinol."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm max-w-sm sm:text-right", children: [
          "Real customers, real timelines. Tag ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "@celsiusherbs" }),
          " to be featured."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UgcCarousel, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-3xl mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Good to know" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl", children: "Questions, answered" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `q${i}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-serif text-lg md:text-xl py-5", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: "text-muted-foreground leading-relaxed text-[15px] pb-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: f.a }),
          f.videoId && /* @__PURE__ */ jsxRuntimeExports.jsx(
            LiteYouTube,
            {
              id: f.videoId,
              title: "Watch the science: Bakuchiol vs. Retinol"
            }
          )
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reviews", className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-5", children: "Loved by 145 reviewers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl", children: "4.6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-foreground text-foreground" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Based on 145 verified reviews" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mb-6", children: [
          { stars: 5, pct: 78 },
          { stars: 4, pct: 15 },
          { stars: 3, pct: 5 },
          { stars: 2, pct: 1 },
          { stars: 1, pct: 1 }
        ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 text-muted-foreground", children: r.stars }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-foreground text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-foreground", style: { width: `${r.pct}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-8 text-muted-foreground text-right", children: [
            r.pct,
            "%"
          ] })
        ] }, r.stars)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-md text-xs tracking-[0.12em] uppercase", children: "Write a Review" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 space-y-3", children: REVIEWS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 rounded-xl p-5 lg:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [...Array(r.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-foreground text-foreground" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: r.name }),
            r.verified && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-wider uppercase text-accent flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
              " Verified"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: r.skin })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium mb-1.5", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: r.body })
      ] }, r.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-ink-deep text-primary-foreground py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-xl tracking-[0.22em] mb-3", children: [
            "CELSIUS",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: " · " }),
            "HERBS"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/60 leading-relaxed max-w-xs", children: "Plant-powered skincare backed by clinical science. Made in the USA." })
        ] }),
        [
          { h: "Shop", l: ["All Skincare", "Serums", "Moisturizers", "Best Sellers"] },
          { h: "Help", l: ["Contact", "Shipping", "Returns", "FAQ"] },
          { h: "Company", l: ["About", "Ingredients", "Sustainability", "Press"] }
        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-primary-foreground/50 mb-3", children: c.h }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: c.l.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent transition", children: i }) }, i)) })
        ] }, c.h))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 pt-6 border-t border-primary-foreground/10 text-[11px] text-primary-foreground/40 tracking-wider", children: "© 2026 Celsius Herbs. All rights reserved." })
    ] })
  ] });
};

function IndexIsland() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageRoot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Index, {}) });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const staticMeta = {
    title: "Organic Bakuchiol Booster Serum \u2014 Plant Retinol Alternative | Celsius Herbs",
    description: "USDA-organic Bakuchiol serum with turmeric & quinoa peptides. Smooths fine lines and dark spots in 7-9 weeks \u2014 without retinol's irritation. Pregnancy-friendly.",
    canonical: "https://celsiusherbs.com/products/yeast-infection-cream",
    ogTitle: "Dermveda Antifungal Yeast Cream \u2014 Celsius Herbs",
    ogDescription: "Plant-based antifungal relief. Clinically supported. FDA registered.",
    ogType: "product"
  };
  const merged = await mergeShopifyProductSeo(SHOPIFY_PRODUCT_HANDLES.index, staticMeta);
  const { jsonLd, ...layoutProps } = merged;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...layoutProps, "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "IndexIsland", IndexIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/islands/pdp/Index", "client:component-export": "default" })} ` })}`;
}, "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/index.astro", void 0);

const $$file = "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
