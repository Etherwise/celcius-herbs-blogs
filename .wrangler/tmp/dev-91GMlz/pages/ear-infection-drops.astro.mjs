globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_UrxGwwQU.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ck2Mg-5P.mjs';
import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, u as ue, P as PageRoot } from '../chunks/PageRoot_CAKxSx1p.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
import { u as useStore, $ as $cartOpen, e as $shopifyCart, h as hydrateShopifyCart, C as CartDrawer, S as Search, U as User, a as ShoppingBag, M as Minus, P as Plus } from '../chunks/cartdrawer_BXbKZSha.mjs';
import { C as ChevronLeft, a as ChevronRight, M as Moon, S as Star, T as Truck, R as RotateCcw, A as Award, b as Accordion, c as AccordionItem, d as AccordionTrigger, e as AccordionContent, f as Check, L as Leaf, h as handleAddToCartRule, g as Carousel, i as CarouselContent, j as CarouselItem, k as CarouselPrevious, l as CarouselNext, m as mergeShopifyProductSeo, n as SHOPIFY_PRODUCT_HANDLES } from '../chunks/merge-layout-meta_B60pZ4_g.mjs';
import { g as getProduct } from '../chunks/storefront_CYM7z2Iz.mjs';
import { B as Button } from '../chunks/button_DF0oUIQF.mjs';
import { L as LiteYouTube } from '../chunks/LiteYouTube_BFzavCAR.mjs';
import { b as badgeNatural, a as badgeCrueltyFree, c as badgeVegan, d as badgeMadeInUsa } from '../chunks/petglow-badge-usa_ClXBhUge.mjs';
import { a as Stethoscope, M as Microscope, S as ShieldCheck } from '../chunks/stethoscope_DnPpBa-Y.mjs';
import { H as Heart, S as Sun, F as FlaskConical } from '../chunks/sun_kL0qGYUv.mjs';
import { W as Wind, D as DollarSign } from '../chunks/wind_CCv2W79v.mjs';
import { C as CircleAlert, H as HeartHandshake } from '../chunks/heart-handshake_DERUfglw.mjs';
import { S as Sparkles } from '../chunks/sparkles_ApADezYP.mjs';
import { P as Pill } from '../chunks/pill_BJG4kQtj.mjs';
import { P as PawPrint } from '../chunks/paw-print_tBYXF5Be.mjs';

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Ear = createLucideIcon("Ear", [
  ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", key: "1dfaln" }],
  ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }]
]);

const earHero = "/_astro/ear-product-bottle.CrqK0MyA.png";

const earApplication = "/_astro/ear-pdp-application.DqZwUQ5d.jpg";

const earLifestyle = "/_astro/ear-pdp-lifestyle.dT5n7864.jpg";

const earFlatlay = "/_astro/ear-pdp-flatlay.jY64q8WT.jpg";

const ingOlive = "/_astro/ear-ing-olive.DdVmE4mB.jpg";

const ingChamomile = "/_astro/ear-ing-chamomile.DXKSxDfk.jpg";

const ingTurmericEar = "/_astro/ear-ing-turmeric.BmiTXFye.jpg";

const ingNeem = "/_astro/ear-ing-neem.D5AISvy7.jpg";

const earBefore = "/_astro/nicole-bulldog-before.89euHCNm.jpg";

const earAfter = "/_astro/nicole-bulldog-after.D395aVWa.jpg";

const earStep1 = "/_astro/ear-step-1-lift.CxMFDHI8.jpg";

const earStep2 = "/_astro/ear-step-2-drop.w1IFEC3V.jpg";

const earStep3 = "/_astro/ear-step-3-massage.B5KnOCbL.jpg";

const spotlightEarInfection = "/_astro/spotlight_1_ear_infection_v2.DknxsCVg.png";

const spotlightEarMite = "/_astro/spotlight_3_ear_mite_v2.XTpwS7g4.png";

const spotlightAntibiotic = "/_astro/spotlight_5_antibiotic_drops_v2.BzxfsSIT.png";

const bundleFreshener = "/_astro/petglow-doggy-freshener.C1gIKD_-.png";

const bundleMiticide = "/_astro/petglow-ear-miticide.Lcu_FOYP.png";

const PDP_PRODUCT_NAME = "natural-dog-ear-cleanser-infection";
const PRODUCT_IMAGES = [
  { src: earHero, alt: "PetGlow natural ear infection drops bottle with olive leaf and chamomile" },
  { src: earApplication, alt: "Pet parent applying PetGlow ear drops to a calm golden retriever" },
  { src: earLifestyle, alt: "Calm cocker spaniel resting peacefully after ear treatment" },
  { src: earFlatlay, alt: "Olive leaf, turmeric root and chamomile — the active botanicals" },
  { src: spotlightEarInfection, alt: "Lifestyle still: PetGlow ear treatment in use" },
  { src: spotlightEarMite, alt: "Targets ear mites, yeast and bacterial infection" },
  { src: spotlightAntibiotic, alt: "Plant-based alternative to antibiotic ear drops" }
];
const STATS = [
  { v: "10 min", l: "until antimicrobial action begins after first drop" },
  { v: "81%", l: "of pet parents report less itching in 24–48 hours" },
  { v: "1–3", l: "days to visible reduction of head-shaking & odor" },
  { v: "$0", l: "vet visits or prescription antibiotics required" }
];
const KEY_INGREDIENTS = [
  { tag: "Antimicrobial", name: "Olive Leaf (Oleuropein 6X HPUS)", desc: "Broad-spectrum botanical antimicrobial — clinically active against the bacteria, yeast and fungi behind 9 in 10 pet ear infections." },
  { tag: "Anti-Inflammatory", name: "Chamomilla 6X HPUS", desc: "Calms the redness and swelling that makes your pet flinch when you touch their ear. Soothes within minutes." },
  { tag: "Soothes", name: "Organic Turmeric Root", desc: "Curcumin reduces canal inflammation and odor — without the steroid side-effects of hydrocortisone drops." },
  { tag: "Restorative", name: "Karanja & Neem Oil", desc: "Traditional Ayurvedic actives that suffocate ear mites and rebuild the canal's natural defense barrier." }
];
const INGREDIENT_SLIDES = [
  {
    image: ingOlive,
    name: "Olive Leaf",
    inci: "Olea Europaea Leaf Extract (Oleuropein 6X HPUS)",
    benefit: "Oleuropein delivers broad-spectrum antimicrobial activity against Staph, Pseudomonas and Malassezia — the trio behind most chronic pet ear infections.",
    citation: "Int J Antimicrob Agents, 2009 (PMID 19135874)"
  },
  {
    image: ingChamomile,
    name: "Chamomilla",
    inci: "Chamomilla Recutita Flower Extract (6X HPUS)",
    benefit: "Anti-inflammatory and gently antimicrobial. Calms canal redness and swelling without the rebound flare of topical steroids.",
    citation: "ACS Omega, 2019 (PMID 31779245)"
  },
  {
    image: ingTurmericEar,
    name: "Turmeric Root",
    inci: "Curcuma Longa Root Extract",
    benefit: "Curcumin reduces inflammatory cytokines, odor and itch — the three signs pet parents notice first.",
    citation: "Foods, 2024 (PMID 38790848)"
  },
  {
    image: ingNeem,
    name: "Karanja + Neem",
    inci: "Pongamia Glabra & Azadirachta Indica",
    benefit: "Ayurvedic oils traditionally used to suffocate ear mites and support the canal's lipid barrier between cleanings.",
    citation: "Mycoses, 2003 (PMID 12870202)"
  }
];
const COMPARISON = [
  { criteria: "Active mechanism", us: "Olive leaf · Chamomile · Turmeric · Neem", them: "Topical steroid (hydrocortisone)" },
  { criteria: "Treats bacteria + yeast + fungus", us: "All three — single bottle", them: "Symptom-only — masks itch" },
  { criteria: "Side effects", us: "None reported with topical use", them: "Skin thinning, hormone disruption" },
  { criteria: "Works on ear mites", us: "Yes — neem/karanja suffocate mites", them: "No — separate Rx required" },
  { criteria: "Vet visit required", us: "No — start at home today", them: "Prescription required" },
  { criteria: "Cost per cycle", us: "$36.89 (covers months)", them: "$150–400 vet + Rx visit" },
  { criteria: "Time to first relief", us: "10 minutes — 48 hours", them: "1–2 weeks (recurring)" }
];
const ROUTINE = [
  { step: "1", title: "Lift the ear flap", caption: "Hold your pet's ear flap gently and lift it upward to expose the canal opening.", image: earStep1 },
  { step: "2", title: "Fill the canal", caption: "Squeeze the dropper for ~5 seconds to fill the ear canal. Most pets don't even flinch — it's non-stinging.", image: earStep2 },
  { step: "3", title: "Massage & leave", caption: "Gently massage the base of the ear for 25–30 seconds so the drops reach the deeper canal — then let it work. No wiping needed.", image: earStep3 }
];
const FAQS = [
  {
    q: "How fast will the head-shaking and scratching stop?",
    a: "81% of pet parents report visibly less head-shaking, scratching and odor within 24–48 hours of the first application. Olive leaf's antimicrobial action begins within 10 minutes of contact. Most full infections resolve within 5–7 days of twice-daily use. If symptoms persist past 14 days, please consult your vet — the eardrum may be involved."
  },
  {
    q: "Is it safe for both dogs and cats? What about kittens or seniors?",
    a: "Yes — PetGlow is formulated for both dogs and cats of all life stages. The non-stinging, alcohol-free, paraben-free base is gentle enough for senior pets and kittens over 12 weeks. Avoid use if the eardrum is ruptured or there is significant canal swelling."
  },
  {
    q: "Will this work for chronic, recurring infections?",
    a: "This is exactly what PetGlow was designed for. Conventional steroid drops only treat inflammation — they don't kill the bacteria, yeast or fungus underneath. That's why infections come back. PetGlow's olive leaf + chamomile combination addresses all three perpetuating factors at once, breaking the chronic cycle that has you back at the vet every few months."
  },
  {
    q: "Does it really work on ear mites?",
    a: "Yes. The karanja and neem oils in our base are traditional Ayurvedic actives that suffocate ear mites on contact, while olive leaf addresses the secondary bacterial infection mites usually leave behind. Two problems, one bottle."
  },
  {
    q: "Is this an actual antibiotic?",
    a: "No — and that's the point. PetGlow is a homeopathic, plant-based formulation registered with the FDA (NDC labeled) that delivers broad-spectrum antimicrobial activity without the gut-microbiome damage, antibiotic resistance, or steroid side-effects of conventional pet ear medications."
  },
  {
    q: "What's the full ingredient list?",
    a: "Active: Olive Leaf Extract (Oleuropein 6X HPUS), Chamomilla Recutita Flower Extract (6X HPUS). Inactive base: Glycerin, Azadirachta Indica (Neem) Leaf Extract, Olive Fruit Oil, Pongamia Glabra (Karanja) Seed Oil, Acorus Calamus Root Oil, Curcuma Longa (Turmeric) Root Extract, Lavender Oil, Xanthan Gum, Aqua. Free of alcohol, parabens, and synthetic fragrance."
  }
];
const PAIN_POINTS = [
  {
    icon: Wind,
    title: "The relentless head-shaking",
    body: "That wet, slapping sound at 2 a.m. — over and over. You know they're trying to scratch something they can't reach.",
    trigger: "Helplessness"
  },
  {
    icon: CircleAlert,
    title: "The smell you can't ignore",
    body: "A sour, yeasty odor every time they shake. You've washed the bedding three times this week. It always comes back.",
    trigger: "Worry"
  },
  {
    icon: DollarSign,
    title: "Vet bills on repeat",
    body: "$200 for the visit, $80 for the drops, $40 for the cytology — and six weeks later, you're back. Again.",
    trigger: "Frustration"
  },
  {
    icon: HeartHandshake,
    title: "Flinching when you touch them",
    body: "They used to lean into ear scratches. Now they pull away. The trust feels broken, and the guilt is heavy.",
    trigger: "Guilt"
  }
];
const REVIEW_STRUCTURE = [
  { body: "No verified reviews yet — be the first to share your pet's relief story." }
];
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { setApi, opts: { align: "start", loop: true }, className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-3 lg:-ml-4", children: INGREDIENT_SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-3 lg:pl-4 basis-full sm:basis-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative aspect-[4/5] sm:aspect-[5/6] rounded-xl overflow-hidden bg-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: `${s.name} — ${s.inci}`, loading: "lazy", decoding: "async", className: "absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0", style: { paddingTop: "max(1rem, env(safe-area-inset-top))", paddingLeft: "max(1rem, env(safe-area-inset-left))" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-foreground text-background text-[10px] tracking-[0.18em] uppercase font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Microscope, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
          "0",
          i + 1,
          " / 0",
          INGREDIENT_SLIDES.length
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0", style: { paddingLeft: "max(1.25rem, env(safe-area-inset-left))", paddingRight: "max(1.25rem, env(safe-area-inset-right))", paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] tracking-[0.22em] uppercase text-accent mb-1.5", children: s.inci }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-foreground leading-[1.05] mb-2", style: { fontSize: "clamp(1.5rem, 3.6vw, 2.25rem)" }, children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 leading-snug max-w-[40ch]", style: { fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)" }, children: s.benefit }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 inline-flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-3 h-3" }),
            s.citation
          ] })
        ] })
      ] }) }, s.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "hidden lg:flex -left-5 bg-background border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "hidden lg:flex -right-5 bg-background border-border" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mt-5", children: INGREDIENT_SLIDES.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": `Go to slide ${i + 1}`, onClick: () => api?.scrollTo(i), className: cn("h-1.5 rounded-full transition-all", current === i ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25 hover:bg-foreground/50") }, i)) })
  ] });
};
const EarInfectionDrops = () => {
  const [activeImage, setActiveImage] = reactExports.useState(0);
  const [pack, setPack] = reactExports.useState("bundle");
  const [qty, setQty] = reactExports.useState(1);
  const [, setCartOpen] = [useStore($cartOpen), (v) => $cartOpen.set(v)];
  const cart = useStore($shopifyCart);
  const [isAdding, setIsAdding] = reactExports.useState(false);
  const [variants, setVariants] = reactExports.useState([]);
  reactExports.useEffect(() => {
    getProduct(PDP_PRODUCT_NAME).then((p) => {
      if (p) setVariants(p.variants);
    });
  }, []);
  const fullVariant = variants[0];
  const bundleVariant = variants.find((v) => {
    const packOpt = v.selectedOptions.find((o) => o.name.toLowerCase() === "pack" || o.name.toLowerCase() === "size");
    if (!packOpt) return false;
    const val = packOpt.value.toLowerCase();
    return val.startsWith("2") || val.includes("bundle") || val.includes("2-pack") || val.includes("twin");
  });
  const isBundleAvailable = !!bundleVariant?.availableForSale;
  const singlePrice = fullVariant ? parseFloat(fullVariant.price.amount) : 36.89;
  const bundlePrice = bundleVariant ? parseFloat(bundleVariant.price.amount) : +(singlePrice * 2 * 0.8).toFixed(2);
  const bundleOriginal = bundleVariant?.compareAtPrice ? parseFloat(bundleVariant.compareAtPrice.amount) : +(singlePrice * 2).toFixed(2);
  const finalPrice = pack === "bundle" ? bundlePrice : singlePrice;
  const [showStickyBar, setShowStickyBar] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    void hydrateShopifyCart();
  }, []);
  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await handleAddToCartRule({
        productName: PDP_PRODUCT_NAME,
        size: pack === "bundle" ? "bundle" : "full",
        purchase: "once",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink-deep text-primary-foreground text-center text-[11px] tracking-[0.18em] uppercase py-2.5 px-4", children: "FDA-registered · Vet-trusted · Free 3-day shipping in the USA" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border/60 bg-background/95 backdrop-blur sticky top-0 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm tracking-wide text-muted-foreground flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Cat Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Dog Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Find a Vet" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "font-serif text-base sm:text-xl lg:text-2xl tracking-[0.18em] sm:tracking-[0.22em] md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-nowrap min-w-0 truncate", children: [
        "CELSIUS",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: " · " }),
        "HERBS"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-4 lg:gap-5 ml-auto shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 cursor-pointer hover:text-accent transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 cursor-pointer hover:text-accent transition hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "relative", "aria-label": "Cart", onClick: () => setCartOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 cursor-pointer hover:text-accent transition" }),
          (cart?.totalQuantity ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-accent text-accent-foreground text-[9px] flex items-center justify-center font-medium", children: cart.totalQuantity })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 pt-6 text-[11px] tracking-[0.15em] uppercase text-muted-foreground overflow-x-auto scrollbar-hide whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground", children: "Shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Pet Ear Care" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Bacterial · Yeast · Fungal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Natural Ear Drops" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col-reverse md:flex-row gap-3 md:gap-4 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-2.5 md:w-[88px] shrink-0 overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0", children: PRODUCT_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveImage(i), className: cn("relative h-20 w-20 md:h-[88px] md:w-[88px] rounded-md overflow-hidden border-2 shrink-0 transition", activeImage === i ? "border-foreground" : "border-transparent hover:border-muted-foreground/40"), "aria-label": img.alt, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, className: "w-full h-full object-cover", loading: "lazy" }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 bg-peach rounded-xl overflow-hidden aspect-[4/5] min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-4 left-4 z-10 text-[10px] tracking-[0.25em] uppercase bg-background/95 backdrop-blur text-foreground px-3 py-1.5 rounded-full font-medium shadow-sm flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            " Vet-trusted · FDA-registered"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/95 backdrop-blur flex items-center justify-center hover:bg-background transition shadow-sm", "aria-label": "Save", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4", strokeWidth: 1.75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PRODUCT_IMAGES[activeImage].src, alt: PRODUCT_IMAGES[activeImage].alt, className: "w-full h-full object-cover", loading: "eager", decoding: "async" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveImage((activeImage - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length), className: "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background/80 backdrop-blur hover:bg-background flex items-center justify-center transition", "aria-label": "Previous image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveImage((activeImage + 1) % PRODUCT_IMAGES.length), className: "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background/80 backdrop-blur hover:bg-background flex items-center justify-center transition", "aria-label": "Next image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.22em] uppercase font-medium bg-foreground text-background px-2.5 py-1 rounded", children: "Dogs · Cats · All Ages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3 w-3" }),
            " AM ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "·" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3" }),
            " PM"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-2", children: "PetGlow · Ear Therapy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-[2.25rem] md:text-5xl leading-[1.02] mb-4 tracking-tight", children: "Natural Ear Infection Drops" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground mb-5 leading-relaxed", children: "Fast, non-stinging relief for bacterial, yeast and fungal ear infections in dogs and cats. Olive leaf, chamomile and turmeric work in minutes — without steroids, antibiotics or another vet bill." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-6", children: ["Bacterial", "Yeast", "Fungal", "Ear Mites", "Chronic Otitis", "Odor"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-secondary text-foreground/80", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 text-muted-foreground/40" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reviews", className: "text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground", children: "No reviews yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Be the first to review" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-muted-foreground", children: "Pack" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: pack === "bundle" ? "2 × 4 fl oz · ~120-day supply" : "4 fl oz · 118ml" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPack("single"), className: cn("w-full px-4 py-3.5 rounded-md border-2 transition flex items-center justify-between gap-3 text-left", pack === "single" ? "border-foreground bg-secondary/40" : "border-border hover:border-muted-foreground/50"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0", pack === "single" ? "border-foreground" : "border-muted-foreground"), children: pack === "single" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-ink-deep", children: "Single Bottle · 4 fl oz" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium whitespace-nowrap", children: [
                "$",
                singlePrice.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => isBundleAvailable && setPack("bundle"), disabled: !isBundleAvailable, className: cn("w-full px-4 py-3.5 rounded-md border-2 transition flex items-center justify-between gap-3 text-left", pack === "bundle" ? "border-foreground bg-secondary/40" : "border-border hover:border-muted-foreground/50", !isBundleAvailable && "opacity-50 cursor-not-allowed"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0", pack === "bundle" ? "border-foreground" : "border-muted-foreground"), children: pack === "bundle" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-ink-deep", children: "2-Bottle Bundle — save 20%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-widest uppercase text-accent mt-0.5", children: "Best value · Subscribe & save" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm whitespace-nowrap text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "line-through text-muted-foreground mr-1.5 text-xs", children: [
                  "$",
                  bundleOriginal.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                  "$",
                  bundlePrice.toFixed(2)
                ] })
              ] })
            ] })
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
          { icon: Award, label: "Money-Back", sub: "100% Guarantee" }
        ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center py-3 px-2 bg-secondary/40 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-4 w-4 mb-1.5 text-foreground", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium leading-tight", children: b.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: b.sub })
        ] }, b.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 place-items-center gap-3 sm:gap-5 mb-6 max-w-md mx-auto", children: [
          { src: badgeNatural, label: "Premium Quality" },
          { src: badgeCrueltyFree, label: "Cruelty Free" },
          { src: badgeVegan, label: "Plant-Based" },
          { src: badgeMadeInUsa, label: "Made in USA" }
        ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-14 sm:w-16 lg:w-20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.src, alt: b.label, title: b.label, loading: "lazy", className: "w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" }) }, b.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "ingredients", className: "border-b-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-[11px] tracking-[0.22em] uppercase font-medium hover:no-underline py-4", children: "Drug facts & full ingredient list" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: "text-[13px] text-muted-foreground leading-relaxed pb-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-foreground/70 mb-1.5", children: "Active ingredients" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Olive Leaf Extract (Oleuropein) 6X HPUS — Antimicrobial",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Chamomilla Recutita 6X HPUS — Anti-Inflammatory"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-foreground/70 mb-1.5", children: "Inactive ingredients" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Glycerin, Azadirachta Indica (Neem) Leaf Extract, Olea Europaea (Olive) Fruit Oil, Pongamia Glabra (Karanja) Seed Oil, Acorus Calamus Root Oil, Curcuma Longa (Turmeric) Root Extract, Lavender Oil, Xanthan Gum, Aqua." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-foreground/60", children: "For external veterinary use only. Do not use if the eardrum is ruptured or if there is significant swelling in the ear canal. Free of alcohol, parabens, dyes and synthetic fragrance." })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-10 lg:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-foreground/60 mb-2", children: "Pet Parent Survey · 7 Days · n=212 dogs & cats" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl", children: "Quiet ears. Quiet nights. Happy pets." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl md:text-6xl mb-2 text-ink-deep", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-foreground/70 leading-snug", children: s.l })
      ] }, s.l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-8 tracking-wider", children: "Self-reported pet-parent observation study, n=212 dogs and cats with mild–moderate otitis externa, twice-daily applications over 7 days." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 lg:mb-14 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "If any of this sounds familiar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-4", children: [
          "The infection isn't your fault.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "The cycle just needs to stop."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[15px] leading-relaxed", children: "Chronic ear infections in dogs and cats break hearts and budgets. Here's what most pet parents tell us they're feeling before they switch to PetGlow." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5", children: PAIN_POINTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 rounded-2xl p-6 lg:p-7 hover:bg-secondary transition flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-background flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5 text-accent", strokeWidth: 1.75 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-accent mb-2", children: p.trigger }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-ink-deep mb-3 leading-tight", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.body })
      ] }, p.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-2xl md:text-3xl text-ink-deep max-w-2xl mx-auto leading-snug", children: '"After the first 3 uses, the head shaking stopped. By day five, the smell was gone. I cried in my kitchen."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-[0.22em] uppercase text-muted-foreground mt-4", children: "— the most common message we receive from new PetGlow customers" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 pb-16 lg:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 order-2 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-secondary/40 aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: earApplication, alt: "Pet parent gently applying ear drops to a calm dog", className: "absolute inset-0 w-full h-full object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/45 to-transparent pt-12 sm:pt-16 px-5 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/90 text-[9px] tracking-[0.18em] uppercase text-foreground mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Microscope, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            " Mechanism of action"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-background leading-snug max-w-[26ch] sm:max-w-md", style: { fontSize: "clamp(1rem, 3.6vw, 1.875rem)" }, children: '"Kill the infection. Calm the canal. Break the cycle for good."' })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "How it works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-5", children: [
          "Three actions.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "One non-stinging drop."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Olive leaf's oleuropein delivers broad-spectrum antimicrobial action against the bacteria, yeast and fungus driving the infection. Chamomile and turmeric calm the inflamed canal. Karanja and neem suffocate ear mites and rebuild the canal's defense barrier — so the infection doesn't return next month." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: [
          "Antimicrobial — kills bacteria, yeast and fungus",
          "Anti-inflammatory — soothes redness and odor in 24–48 hours",
          "Non-stinging — gentle enough for senior pets and kittens"
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 mt-0.5 text-accent shrink-0", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
        ] }, t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 pb-16 lg:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 lg:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Know your pet's ear" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-4", children: [
          "Three infections.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "sm:hidden" }),
          " One gentle bottle."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto text-[15px] leading-relaxed", children: "Bacterial otitis, yeast (Malassezia) overgrowth and ear-mite infestation each look similar — head shaking, odor, redness — but the root cause differs. Here's what each is, and what PetGlow is formulated to do about it." })
      ] }),
      (() => {
        const TARGETED = "bg-accent text-accent-foreground";
        const PARTIAL = "bg-secondary text-foreground/80";
        const NONE = "bg-muted/40 text-muted-foreground";
        const conditions = [
          {
            name: "Bacterial Otitis",
            tagline: "Most common · Acute or chronic",
            icon: Ear,
            accent: true,
            description: "Staphylococcus and Pseudomonas bacteria thrive in the warm, moist ear canal — especially in floppy-eared breeds. Causes redness, sour odor and dark discharge.",
            hallmark: "Sour smell · brown discharge",
            symptoms: [
              { label: "Bacterial overgrowth", level: "targeted" },
              { label: "Sour/yeasty odor", level: "targeted" },
              { label: "Head shaking & scratching", level: "targeted" },
              { label: "Redness & swelling", level: "targeted" },
              { label: "Ruptured eardrum", level: "none" }
            ]
          },
          {
            name: "Yeast (Malassezia)",
            tagline: "Allergy-driven · Recurring",
            icon: ShieldCheck,
            description: "Malassezia yeast multiplies in pets with allergies, food sensitivities or moisture in the canal. Greasy brown buildup, intense itch, distinctive musty smell.",
            hallmark: "Greasy brown waxy buildup",
            symptoms: [
              { label: "Yeast overgrowth", level: "targeted" },
              { label: "Greasy waxy debris", level: "targeted" },
              { label: "Constant scratching", level: "targeted" },
              { label: "Musty odor", level: "targeted" },
              { label: "Underlying food allergy", level: "none" }
            ]
          },
          {
            name: "Inflammation & Fungal",
            tagline: "Common in cats · Sensitive breeds",
            icon: Microscope,
            description: "Chronic inflammation and fungal overgrowth leave the canal red, swollen and itchy with a musty discharge. Often flares with allergies or moisture.",
            hallmark: "Red, swollen, inflamed canal",
            symptoms: [
              { label: "Canal inflammation & swelling", level: "targeted" },
              { label: "Fungal overgrowth", level: "targeted" },
              { label: "Itch & irritation relief", level: "targeted" },
              { label: "Secondary bacterial infection", level: "partial" },
              { label: "Deep inner-ear infection", level: "none" }
            ]
          }
        ];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5", children: conditions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: cn("rounded-2xl border p-6 lg:p-7 flex flex-col h-full transition", c.accent ? "bg-foreground text-background border-foreground shadow-sm" : "bg-background border-border hover:shadow-sm"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-10 w-10 rounded-full flex items-center justify-center shrink-0", c.accent ? "bg-background/10" : "bg-secondary"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: cn("h-5 w-5", c.accent ? "text-accent" : "text-foreground"), strokeWidth: 1.75 }) }),
              c.accent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] tracking-[0.22em] uppercase font-medium px-2 py-1 rounded-full bg-accent text-accent-foreground", children: "Primary indication" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-[10px] tracking-[0.22em] uppercase mb-2", c.accent ? "text-background/60" : "text-muted-foreground"), children: c.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: cn("font-serif text-2xl lg:text-[1.75rem] leading-tight mb-3", c.accent ? "text-background" : "text-ink-deep"), children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-sm leading-relaxed mb-5", c.accent ? "text-background/75" : "text-muted-foreground"), children: c.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("text-[10px] tracking-[0.2em] uppercase mb-3 pb-3 border-b", c.accent ? "border-background/15 text-background/60" : "border-border text-muted-foreground"), children: [
              "Hallmark sign · ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(c.accent ? "text-background" : "text-foreground"), children: c.hallmark })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-[10px] tracking-[0.2em] uppercase mb-3", c.accent ? "text-background/60" : "text-muted-foreground"), children: "What PetGlow targets" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mt-auto", children: c.symptoms.map((s) => {
              const cls = s.level === "targeted" ? TARGETED : s.level === "partial" ? PARTIAL : NONE;
              const Icon = s.level === "none" ? Minus : Check;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0", cls), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("leading-snug", c.accent ? "text-background/90" : "text-foreground/85", s.level === "none" && (c.accent ? "text-background/40 line-through" : "text-muted-foreground line-through")), children: s.label })
              ] }, s.label);
            }) })
          ] }, c.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-accent" }),
              " Directly targeted"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-secondary border border-border" }),
              " Partial relief"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-muted/60 border border-border" }),
              " Vet visit recommended"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-5 tracking-wider max-w-2xl mx-auto", children: "Educational information only. A ruptured eardrum, deep-canal infection, or worsening symptoms after 14 days warrant evaluation by a licensed veterinarian." })
        ] });
      })()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 order-2 lg:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0 items-stretch", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative aspect-square rounded-xl overflow-hidden bg-background shadow-sm ring-1 ring-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: earBefore,
                alt: "Bulldog's ear before PetGlow — swollen, inflamed, with discharge",
                className: "absolute inset-0 w-full h-full object-cover",
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 z-10 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-ink-deep/85 backdrop-blur text-[9px] tracking-[0.18em] uppercase text-background", children: "Day 0 · Before" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/55 to-transparent p-3 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-snug text-background/95", children: "Swollen shut, pussy discharge, screaming when touched." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative aspect-square rounded-xl overflow-hidden bg-background shadow-sm ring-1 ring-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: earAfter,
                alt: "Same bulldog's ear after 2 weeks of PetGlow — calm, clean, healed",
                className: "absolute inset-0 w-full h-full object-cover",
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 left-2 z-10 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent text-accent-foreground text-[9px] tracking-[0.18em] uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5", strokeWidth: 2 }),
              " Week 2 · After"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/55 to-transparent p-3 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-snug text-background/95", children: "Swelling and pus gone. No more crying when touched." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/50 mt-4 tracking-wider max-w-xl mx-auto lg:mx-0", children: "Real customer photos · Nicole, Florida. Individual results vary." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Visible relief in days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-5", children: "Less shaking. No more odor. A peaceful pet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-2 border-accent pl-4 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 text-[15px] leading-relaxed italic", children: `"Progression of my bulldog's ears over the past two weeks. When first started her ears were swollen shut and pussy. She would scream whenever they were touched. Now two weeks later, they are looking a million times better! The swelling and puss is gone. She no longer cries when I touch her ears."` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "text-[11px] tracking-[0.18em] uppercase text-foreground/60 mt-3", children: "— Nicole, Florida · Verified buyer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-base leading-relaxed mb-5", children: "Within 24–48 hours of the first dose, the worst of the head-shaking and scratching settles. By day 5–7, the canal is visibly cleaner, the sour smell is gone, and your pet leans into ear scratches again — instead of pulling away." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Less head-shaking in 24–48 hours"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Odor gone within 3–5 days"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Canal visibly cleaner by day 7"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Your pet sleeps through the night again"
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "The active panel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-5", children: [
            "Four botanicals.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Vet-formulated for ears."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Every ingredient was chosen for two reasons: clinically supported antimicrobial action, and a non-stinging, non-toxic profile safe for daily use in dogs and cats of all life stages." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3", children: KEY_INGREDIENTS.map((ing) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 rounded-xl p-5 hover:bg-secondary transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.18em] uppercase text-accent font-medium", children: ing.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl mt-2 mb-2", children: ing.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ing.desc })
        ] }, ing.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IngredientSlider, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-12 lg:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 lg:mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-2", children: "How to apply" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl leading-tight", children: "A 30-second ritual." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-8 max-w-4xl mx-auto", children: ROUTINE.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full aspect-square rounded-full overflow-hidden bg-background shadow-[0_10px_30px_-12px_hsl(var(--foreground)/0.25)] ring-1 ring-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.image, alt: r.title, width: 768, height: 768, loading: "lazy", decoding: "async", className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-serif text-accent leading-none", style: { fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }, children: [
          r.step,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[13px] md:text-sm font-medium text-ink-deep leading-snug max-w-[22ch]", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[12px] md:text-[13px] text-foreground/65 leading-snug max-w-[26ch]", children: r.caption })
      ] }, r.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-10 tracking-wider max-w-2xl mx-auto", children: "For external veterinary use only. Avoid if eardrum is ruptured. Discontinue if irritation worsens." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink-deep text-primary-foreground py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Why pet parents switch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-3", children: "PetGlow vs. hydrocortisone & antibiotic ear drops" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 max-w-lg mx-auto text-sm", children: "The same fast relief — without the steroid side effects, antibiotic resistance, recurring vet bills, or the guilt of putting harsh chemicals in a sensitive canal." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden border border-primary-foreground/15 bg-primary-foreground/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-primary-foreground/[0.06] text-[10px] tracking-[0.2em] uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-accent border-l border-primary-foreground/15 font-medium", children: "PetGlow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/50 border-l border-primary-foreground/15", children: "Conventional Drops" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10 lg:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Complete the routine" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-ink-deep", children: "Pair it. Save 15%." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm md:text-base text-ink-deep/70", children: "Real cases of recurring otitis usually have two friends: lingering odor and the occasional ear-mite outbreak. Add these two PetGlow staples to keep both ears clean, calm and fresh between drops." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-peach/40 ring-1 ring-border p-6 sm:p-10 lg:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-4 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full max-w-[200px] rounded-2xl bg-background ring-1 ring-border overflow-hidden flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PRODUCT_IMAGES[0].src, alt: PRODUCT_IMAGES[0].alt, className: "h-full w-full object-contain", loading: "lazy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs tracking-[0.18em] uppercase text-accent", children: "This bottle" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg text-ink-deep", children: "Ear Infection Drops" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-ink-deep/60", children: "4 fl oz · 118 ml" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-medium text-ink-deep", children: "$36.89" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center text-3xl font-serif text-ink-deep/40 lg:rotate-0", children: "+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full max-w-[200px] rounded-2xl bg-background ring-1 ring-border overflow-hidden flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bundleFreshener, alt: "PetGlow Natural Doggy Freshener calming spray, 4 fl oz", className: "h-full w-full object-contain", loading: "lazy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs tracking-[0.18em] uppercase text-accent", children: "Add" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg text-ink-deep", children: "Natural Doggy Freshener" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-ink-deep/60", children: "Anti-itch · Stop odor · Calming" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-medium text-ink-deep", children: "$24.99" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center text-3xl font-serif text-ink-deep/40", children: "+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full max-w-[200px] rounded-2xl bg-background ring-1 ring-border overflow-hidden flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bundleMiticide, alt: "PetGlow Ear Miticide ear mite treatment for dogs, 4 fl oz", className: "h-full w-full object-contain", loading: "lazy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs tracking-[0.18em] uppercase text-accent", children: "Add" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg text-ink-deep", children: "Ear Miticide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-ink-deep/60", children: "Kills ear mites · Plant based" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-medium text-ink-deep", children: "$28.49" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-8 border-t border-border/70 flex flex-col md:flex-row items-center justify-between gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-1", children: "Bundle total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center md:justify-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-3xl text-ink-deep", children: "$76.04" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground line-through", children: "$90.37" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full", children: "Save $14.33" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-ink-deep/60", children: "All three shipped together · Free U.S. shipping" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-full md:w-auto px-8 py-4 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:bg-foreground/90 transition shadow-sm",
              children: "Add bundle to cart — $76.04"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LiteYouTube,
          {
            id: "5vSeho0r_I8",
            start: 59,
            title: "Vet talks about natural ear infection care for dogs and cats",
            className: "rounded-2xl overflow-hidden shadow-lg ring-4 ring-background"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex flex-col items-center gap-1.5 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg text-ink-deep", children: "Dr. Alex" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.25em] uppercase text-accent", children: "Veterinarian" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Vet approved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-serif text-xl md:text-2xl leading-snug text-ink-deep", children: `"For mild-to-moderate canine and feline otitis externa — especially the recurring kind — a well-formulated olive-leaf and chamomile drop addresses the bacterial, yeast and inflammatory components in one bottle. That's the missing link in most conventional protocols."` })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach/40 py-20 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: earFlatlay, alt: "Olive leaf, turmeric and chamomile — PetGlow's botanical actives", loading: "lazy", decoding: "async", className: "absolute inset-0 w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-[10px] tracking-[0.22em] uppercase text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            "Homeopathic 6X HPUS"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.28em] uppercase text-accent mb-4", children: "Veterinary science, ancient herbs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.05] mb-6 text-ink-deep", children: [
            "Where modern ear care",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "meets the herbal apothecary."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 leading-relaxed mb-5 max-w-xl", children: "Olive leaf, chamomile and neem have been used in traditional veterinary practice for centuries — long before the antibiotic era. PetGlow combines those roots with FDA-registered homeopathic standards (6X HPUS), so each active reaches your pet's ear at a clinically meaningful dose, without the resistance and recurrence problems of conventional drops." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 leading-relaxed max-w-xl", children: "The result is an alcohol-free, paraben-free, non-stinging drop gentle enough for kittens and seniors — yet decisive enough to break the chronic infection cycle within days." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5", children: [
        { title: "Antimicrobial", meaning: "Kills three pathogens", how: "Oleuropein from olive leaf is clinically active against the bacteria, yeast and fungi behind chronic otitis externa.", icon: ShieldCheck },
        { title: "Anti-inflammatory", meaning: "Calms the canal", how: "Chamomile and turmeric reduce redness, swelling and odor without the rebound flare of topical steroids.", icon: Leaf },
        { title: "Non-stinging", meaning: "Senior + kitten safe", how: "Alcohol-free, paraben-free, non-toxic — gentle enough for daily use even in anxious or sensitive pets.", icon: PawPrint }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-2xl p-7 lg:p-8 border border-foreground/5 hover:shadow-sm transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5 text-accent mb-5", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2", children: p.meaning }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl lg:text-3xl text-ink-deep mb-4", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 leading-relaxed", children: p.how })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-3xl mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Pet parent questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl", children: "Answers from our vet team" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `q${i}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-serif text-lg md:text-xl py-5", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed text-[15px] pb-5 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: f.a }) })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reviews", className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-5", children: "Be the first to share your pet's relief story." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl text-muted-foreground/50", children: "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-muted-foreground/30" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No verified reviews yet" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-md text-xs tracking-[0.12em] uppercase", children: "Write a Review" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 space-y-3", children: REVIEW_STRUCTURE.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/30 rounded-xl p-8 lg:p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PawPrint, { className: "w-6 h-6 mx-auto mb-3 text-muted-foreground/50", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: r.body })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[900px] mx-auto px-5 lg:px-10 py-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-3", children: "Legal disclaimer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "For external veterinary use only. Always read and follow label directions. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease in animals. Do not use if the eardrum is ruptured or with significant canal swelling. Consult a licensed veterinarian for persistent or worsening symptoms." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-ink-deep text-primary-foreground py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-xl tracking-[0.22em] mb-3", children: [
            "CELSIUS",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: " · " }),
            "HERBS"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/60 leading-relaxed max-w-xs", children: "Plant-powered, vet-formulated skin, coat & ear care for the cats and dogs you love. Made in the USA." })
        ] }),
        [
          { h: "Shop", l: ["Cat Ear Care", "Dog Ear Care", "Skin Therapy", "Best Sellers"] },
          { h: "Help", l: ["Contact", "Shipping", "Returns", "FAQ"] },
          { h: "Company", l: ["About", "Ingredients", "Sustainability", "Press"] }
        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-primary-foreground/50 mb-3", children: c.h }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: c.l.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent transition", children: i }) }, i)) })
        ] }, c.h))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 pt-6 border-t border-primary-foreground/10 text-[11px] text-primary-foreground/40 tracking-wider", children: "© 2026 Celsius Herbs. All rights reserved." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("lg:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t border-border", "px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]", "transition-transform duration-300 ease-out shadow-[0_-8px_24px_-12px_hsl(var(--ink-deep)/0.18)]", showStickyBar ? "translate-y-0" : "translate-y-full"), role: "region", "aria-label": "Purchase bar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: earHero, alt: "", className: "w-10 h-10 rounded-md object-cover bg-peach ring-2 ring-background shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-ink-deep/70 tracking-wide truncate", children: "Natural Ear Drops · 4 fl oz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5 mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-[16px] leading-none text-ink-deep", children: [
            "$",
            finalPrice.toFixed(2)
          ] }),
          pack === "bundle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground line-through leading-none", children: [
              "$",
              bundleOriginal.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium tracking-[0.14em] uppercase text-accent leading-none", children: "Save 20%" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          size: "sm",
          className: "rounded-full px-4 h-10 text-[11px] tracking-[0.16em] uppercase bg-ink-deep text-primary-foreground hover:bg-ink-deep/90 shrink-0",
          onClick: handleAddToCart,
          disabled: isAdding,
          children: isAdding ? "Adding…" : "Add to Bag"
        }
      )
    ] }) })
  ] });
};

function EarInfectionDropsIsland() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageRoot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EarInfectionDrops, {}) });
}

const $$EarInfectionDrops = createComponent(async ($$result, $$props, $$slots) => {
  const staticMeta = {
    title: "Ear Infection Drops | Celsius Herbs",
    description: "Ear care drops \u2014 Celsius Herbs.",
    canonical: "https://celsiusherbs.com/ear-infection-drops"
  };
  const merged = await mergeShopifyProductSeo(SHOPIFY_PRODUCT_HANDLES.earInfectionDrops, staticMeta);
  const { jsonLd, ...layoutProps } = merged;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...layoutProps, "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "EarInfectionDropsIsland", EarInfectionDropsIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/islands/pdp/EarInfectionDrops", "client:component-export": "default" })} ` })}`;
}, "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/ear-infection-drops.astro", void 0);

const $$file = "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/ear-infection-drops.astro";
const $$url = "/ear-infection-drops";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EarInfectionDrops,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
