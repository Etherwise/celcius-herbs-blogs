globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_UrxGwwQU.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ck2Mg-5P.mjs';
import { j as jsxRuntimeExports, a as cn, u as ue, P as PageRoot } from '../chunks/PageRoot_CAKxSx1p.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
import { B as Button } from '../chunks/button_DF0oUIQF.mjs';
import { C as ChevronLeft, a as ChevronRight, M as Moon, S as Star, f as Check, T as Truck, R as RotateCcw, A as Award, b as Accordion, c as AccordionItem, d as AccordionTrigger, e as AccordionContent, L as Leaf, h as handleAddToCartRule, g as Carousel, i as CarouselContent, j as CarouselItem, k as CarouselPrevious, l as CarouselNext, m as mergeShopifyProductSeo, n as SHOPIFY_PRODUCT_HANDLES } from '../chunks/merge-layout-meta_8vEeX35y.mjs';
import { L as LiteYouTube } from '../chunks/LiteYouTube_BFzavCAR.mjs';
import { u as useStore, $ as $cartOpen, e as $shopifyCart, h as hydrateShopifyCart, C as CartDrawer, S as Search, U as User, a as ShoppingBag, M as Minus, P as Plus } from '../chunks/cartdrawer_DmjRgRXu.mjs';
import { g as getProduct } from '../chunks/storefront_C5K3qrxX.mjs';
import { b as badgeUsdaOrganic, a as badgeCrueltyFree, c as badgeVegan, d as badgeMadeInUsa } from '../chunks/badge-made-in-usa_DAt_YwtQ.mjs';
import { s as spsHero, a as spsDetail, b as spsLifestyle1, c as spsLifestyle2, d as spsFlatlay, e as spsCounter, f as spsSerum, i as ingSulfur, g as ingTeatree, h as ingNeem, j as ingKaranja } from '../chunks/ing-karanja_DNwxNPs7.mjs';
import { t as turmericSoap } from '../chunks/sps-turmeric-soap_CHEHoC3k.mjs';
import { a as Stethoscope, M as Microscope, S as ShieldCheck } from '../chunks/stethoscope_DnPpBa-Y.mjs';
import { H as Heart, S as Sun, F as FlaskConical } from '../chunks/sun_kL0qGYUv.mjs';
import { D as Droplet } from '../chunks/droplet_8qLxT5ym.mjs';
import { S as Sparkles } from '../chunks/sparkles_ApADezYP.mjs';
import { P as Pill } from '../chunks/pill_BJG4kQtj.mjs';

const spsBefore = "/_astro/sps-before.BJ3OZC2u.jpg";

const spsAfter = "/_astro/sps-after.C4D6a0zl.jpg";

const PDP_PRODUCT_NAME = "scalp-psoriasis-shampoo";
const PRODUCT_IMAGES = [
  { src: spsHero, alt: "Dermveda Scalp Psoriasis Shampoo bottle, front" },
  { src: spsDetail, alt: "Medicated sulfur and tea tree oil shampoo — clinical label detail" },
  { src: spsLifestyle1, alt: "Woman with curly hair holding Dermveda Scalp Psoriasis Shampoo in a bright bathroom" },
  { src: spsLifestyle2, alt: "Man holding Dermveda Scalp Psoriasis Shampoo in a minimal bathroom" },
  { src: spsFlatlay, alt: "Shampoo bottle with tea tree, eucalyptus and neem leaves" },
  { src: spsCounter, alt: "Dermveda shampoo on a marble bathroom counter" }
];
const STATS = [
  { v: "92%", l: "reported less itching in 2 weeks" },
  { v: "88%", l: "saw reduced flaking & scaling" },
  { v: "94%", l: "felt calmer, less irritated scalp" },
  { v: "0", l: "parabens, sulfates, fragrance" }
];
const KEY_INGREDIENTS = [
  { tag: "Active", name: "Medicated Sulfur", desc: "Keratolytic agent that gently lifts plaques and reduces visible scaling." },
  { tag: "Antimicrobial", name: "Tea Tree Oil", desc: "Clinically studied for seborrheic dermatitis and yeast-associated dandruff." },
  { tag: "Soothe", name: "Neem (Azadirachta Indica)", desc: "Calms redness and irritation while supporting a balanced scalp microbiome." },
  { tag: "Restore", name: "Karanja & Sweet Flag Oils", desc: "Traditional dermatological oils that support barrier repair without dryness." }
];
const INGREDIENT_SLIDES = [
  {
    image: ingSulfur,
    name: "Medicated Sulfur",
    inci: "Sulfur USP",
    benefit: "A monograph-recognized keratolytic that softens and lifts hyperkeratotic plaques associated with scalp psoriasis.",
    citation: "FDA OTC Monograph 21 CFR 358"
  },
  {
    image: ingTeatree,
    name: "Tea Tree Oil",
    inci: "Melaleuca Alternifolia Leaf Oil",
    benefit: "5% tea tree oil shampoo significantly reduced dandruff severity over 4 weeks vs. placebo in a controlled trial.",
    citation: "J Am Acad Dermatol, 2002"
  },
  {
    image: ingNeem,
    name: "Neem Extract",
    inci: "Azadirachta Indica Leaf Extract",
    benefit: "Demonstrates broad-spectrum antifungal activity against Malassezia, a key driver of seborrheic dermatitis.",
    citation: "Mycoses, 2014"
  },
  {
    image: ingKaranja,
    name: "Karanja Oil",
    inci: "Pongamia Pinnata Seed Oil",
    benefit: "Rich in karanjin and pongamol — supports barrier repair and reduces inflammatory cytokine activity in irritated scalps.",
    citation: "Int J Pharm Sci, 2018"
  }
];
const COMPARISON = [
  { criteria: "Active mechanism", us: "Sulfur + tea tree oil", them: "Coal tar / zinc pyrithione only" },
  { criteria: "Fragrance", us: "Fragrance-free", them: "Often heavily perfumed" },
  { criteria: "Sulfates / parabens", us: "None", them: "Common SLS / SLES" },
  { criteria: "Suitable for daily use", us: "Yes — gentle base", them: "Often limits to 2× per week" },
  { criteria: "Sensitive scalp safe", us: "Dermatologist-formulated", them: "Frequent stinging reports" }
];
const ROUTINE = [
  { step: "01", time: "WET", title: "Saturate scalp", body: "Wet hair thoroughly with warm — not hot — water." },
  { step: "02", time: "TREAT", title: "Apply Dermveda", body: "Dispense a coin-sized amount directly onto affected areas of the scalp.", highlight: true },
  { step: "03", time: "MASSAGE", title: "Work in lather", body: "Massage gently for 30–60 seconds. Leave on for 3–5 minutes for maximum efficacy." },
  { step: "04", time: "RINSE", title: "Rinse & repeat", body: "Rinse fully. Use 2–3 times per week, or as directed by your dermatologist." }
];
const FAQS = [
  {
    q: "Is this medicated shampoo safe for daily use?",
    a: "Yes. The base formulation is gentle enough for daily use in adults, but for most patients with scalp psoriasis or seborrheic dermatitis we recommend 2–3 washes per week to allow the actives to work without over-drying. Always follow your dermatologist's individualized advice."
  },
  {
    q: "How is it different from coal tar shampoos?",
    a: "Coal tar shampoos can be effective but are often poorly tolerated due to staining, odor, and photosensitivity. Dermveda uses medicated sulfur paired with tea tree oil — a fragrance-free, low-irritation alternative that addresses both flaking (keratolysis) and the Malassezia yeast linked to seborrheic dermatitis."
  },
  {
    q: "When should I expect to see clinical improvement?",
    a: "Most users notice reduced itch and flaking within 1–2 weeks of consistent use. Visible reduction in plaques and scalp redness typically appears around weeks 4–6. Persistent or severe cases should be co-managed with a dermatologist."
  },
  {
    q: "Can I use it with prescription topicals?",
    a: "Generally yes. Dermveda is designed to layer with prescribed corticosteroid solutions, vitamin D analogues, or antifungal lotions — wash first, dry, then apply the prescription product. Confirm any combination with your prescribing physician."
  },
  {
    q: "Full ingredient disclosure?",
    a: "Azadirachta Indica (Neem), Glycerin, Hydroxyethylcellulose, Peppermint Oil, Olive Oil, Karanja Oil, Sweet Flag Oil, Sweet Indrajao Oil, Xanthan Gum, Water (Aqua). Free of parabens, sulfates, chlorides, fragrance and artificial dyes."
  }
];
const REVIEW_STRUCTURE = [
  { rating: 0, title: "", body: "No verified reviews yet — be the first to share your experience.", name: "", verified: false, skin: "" }
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: s.image,
            alt: `${s.name} — ${s.inci}`,
            loading: "lazy",
            decoding: "async",
            className: "absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
          }
        ),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mt-5", children: INGREDIENT_SLIDES.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": `Go to slide ${i + 1}`,
        onClick: () => api?.scrollTo(i),
        className: cn("h-1.5 rounded-full transition-all", current === i ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25 hover:bg-foreground/50")
      },
      i
    )) })
  ] });
};
const ScalpPsoriasisShampoo = () => {
  const [activeImage, setActiveImage] = reactExports.useState(0);
  const [size, setSize] = reactExports.useState("single");
  const [purchase, setPurchase] = reactExports.useState("sub");
  const [cadence, setCadence] = reactExports.useState("6");
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
  const activeVariant = size === "single" ? fullVariant : bundleVariant;
  const basePrice = activeVariant ? parseFloat(activeVariant.price.amount) : size === "single" ? 16.99 : +(16.99 * 2 * 0.85).toFixed(2);
  const finalPrice = purchase === "sub" ? +(basePrice * 0.9).toFixed(2) : basePrice;
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
        size: size === "twin" ? "bundle" : "full",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink-deep text-primary-foreground text-center text-[11px] tracking-[0.18em] uppercase py-2.5 px-4", children: "Dermatologist-formulated · Free 3-day shipping in the USA" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border/60 bg-background/95 backdrop-blur sticky top-0 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm tracking-wide text-muted-foreground flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Scalp Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Dermatology" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Find a Doctor" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Medicated Scalp Care" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Shampoos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Scalp Psoriasis Shampoo" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col-reverse md:flex-row md:items-start gap-3 md:gap-4 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-2.5 md:w-[88px] shrink-0 overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0", children: PRODUCT_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveImage(i),
            className: cn("relative h-20 w-20 md:h-[88px] md:w-[88px] rounded-md overflow-hidden border-2 shrink-0 transition", activeImage === i ? "border-foreground" : "border-transparent hover:border-muted-foreground/40"),
            "aria-label": img.alt,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, className: "w-full h-full object-cover", loading: "lazy" })
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 w-full min-w-0 bg-peach rounded-xl overflow-hidden aspect-[4/5]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-4 left-4 z-10 text-[10px] tracking-[0.25em] uppercase bg-background/95 backdrop-blur text-foreground px-3 py-1.5 rounded-full font-medium shadow-sm flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            " Dermatologist tested"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/95 backdrop-blur flex items-center justify-center hover:bg-background transition shadow-sm", "aria-label": "Save", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4", strokeWidth: 1.75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: PRODUCT_IMAGES[activeImage].src,
              alt: PRODUCT_IMAGES[activeImage].alt,
              className: "absolute inset-0 size-full object-contain p-6 sm:p-10",
              loading: "eager",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.22em] uppercase font-medium bg-foreground text-background px-2.5 py-1 rounded", children: "Medicated · Treat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3 w-3" }),
            " AM ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "·" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3" }),
            " PM"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-2", children: "Dermveda · Medicated Scalp Treatment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-[2.25rem] md:text-5xl leading-[1.02] mb-4 tracking-tight", children: "Scalp Psoriasis Shampoo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground mb-5 leading-relaxed", children: "Medicated sulfur and tea tree oil work together to gently lift plaques, calm itching, and reduce flaking — formulated for psoriasis, seborrheic dermatitis, and persistent dandruff." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-6", children: ["Scalp Psoriasis", "Seborrheic Dermatitis", "Dandruff", "Sensitive Scalp"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-secondary text-foreground/80", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 text-muted-foreground/40" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reviews", className: "text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground", children: "No reviews yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Be the first to review" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-muted-foreground", children: "Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: size === "single" ? "8 fl oz · 236ml" : "2 × 236ml · save 15%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
            {
              k: "single",
              label: "Single Bottle",
              sub: "236ml",
              price: fullVariant ? `$${parseFloat(fullVariant.price.amount).toFixed(2)}` : "$16.99",
              available: fullVariant?.availableForSale ?? true
            },
            {
              k: "twin",
              label: "Treatment Pack",
              sub: isBundleAvailable ? "Save 15%" : "Out of stock",
              price: bundleVariant ? `$${parseFloat(bundleVariant.price.amount).toFixed(2)}` : "—",
              available: isBundleAvailable
            }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => s.available && setSize(s.k),
              disabled: !s.available,
              className: cn("px-3 py-3 rounded-md border text-sm transition text-left", size === s.k ? "border-foreground bg-secondary/40" : "border-border hover:border-muted-foreground/50", !s.available && "opacity-50 cursor-not-allowed"),
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPurchase("once"), className: cn("w-full flex items-center justify-between px-4 py-3.5 rounded-md border-2 transition", purchase === "once" ? "border-foreground" : "border-border"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-4 w-4 rounded-full border-2 flex items-center justify-center", purchase === "once" ? "border-foreground" : "border-muted-foreground"), children: purchase === "once" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }) }),
              "One-time purchase"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
              "$",
              basePrice.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPurchase("sub"), className: cn("w-full flex items-center justify-between px-4 py-3.5 rounded-md border-2 transition", purchase === "sub" ? "border-foreground" : "border-border"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3 text-sm flex-wrap text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0", purchase === "sub" ? "border-foreground" : "border-muted-foreground"), children: purchase === "sub" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Treatment plan — save 10%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-widest uppercase bg-accent text-accent-foreground px-2 py-0.5 rounded-full", children: "Recommended" })
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
          ] }),
          purchase === "sub" && (() => {
            const cadenceOptions = [
              { k: "4", label: "Every 4 weeks", note: "Heavy flare-ups" },
              { k: "6", label: "Every 6 weeks", note: "Most popular" },
              { k: "8", label: "Every 8 weeks", note: "Maintenance" }
            ];
            const weeks = parseInt(cadence, 10);
            const shipBy = /* @__PURE__ */ new Date();
            shipBy.setDate(shipBy.getDate() + 2);
            const shipByLabel = shipBy.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
            const nextRefill = /* @__PURE__ */ new Date();
            nextRefill.setDate(nextRefill.getDate() + weeks * 7);
            const nextRefillLabel = nextRefill.toLocaleDateString("en-US", { month: "short", day: "numeric" });
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5 rounded-md bg-secondary/50 border border-border/60 space-y-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-ink-deep/70 font-medium mb-2", children: "How to use your trio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-foreground/85 leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 mt-0.5 text-accent shrink-0", strokeWidth: 2.25 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-ink-deep", children: "Shampoo" }),
                      " — massage into wet scalp 2–3× weekly, leave on 5 min, rinse"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 mt-0.5 text-accent shrink-0", strokeWidth: 2.25 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-ink-deep", children: "Serum" }),
                      " — apply 4–5 drops to dry scalp nightly, no rinse"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 mt-0.5 text-accent shrink-0", strokeWidth: 2.25 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-ink-deep", children: "Turmeric Soap" }),
                      " — daily on body + hairline, lather 30 sec, rinse warm"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-ink-deep/70 font-medium mb-2", children: "Confirm delivery cadence" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1.5", children: cadenceOptions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setCadence(c.k),
                    className: cn(
                      "rounded-md border-2 px-2 py-2 text-left transition",
                      cadence === c.k ? "border-foreground bg-background" : "border-border bg-background/60"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium text-ink-deep leading-tight", children: c.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: c.note })
                    ]
                  },
                  c.k
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 pt-2 border-t border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-3.5 w-3.5 mt-0.5 text-accent shrink-0", strokeWidth: 2.25 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-foreground/85 leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-ink-deep", children: [
                    "Ships by ",
                    shipByLabel
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    " · next refill ",
                    nextRefillLabel
                  ] })
                ] })
              ] })
            ] });
          })()
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
              type: "button",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 items-center gap-2 sm:gap-4 mb-6", children: [
          { src: badgeUsdaOrganic, label: "Plant-Derived Actives" },
          { src: badgeCrueltyFree, label: "Cruelty Free" },
          { src: badgeVegan, label: "Vegan Formula" },
          { src: badgeMadeInUsa, label: "Made in USA" }
        ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: b.src,
            alt: b.label,
            title: b.label,
            loading: "lazy",
            className: "mx-auto h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
          },
          b.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "ingredients", className: "border-b-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-[11px] tracking-[0.22em] uppercase font-medium hover:no-underline py-4", children: "Full ingredient list" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: "text-[13px] text-muted-foreground leading-relaxed pb-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-foreground/70 mb-1.5", children: "Active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sulfur USP 2%." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-foreground/70 mb-1.5", children: "Inactive ingredients" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aqua (Purified Water), Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Decyl Glucoside, Glycerin, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Azadirachta Indica (Neem) Leaf Extract, Pongamia Pinnata (Karanja) Seed Oil, Acorus Calamus (Sweet Flag) Root Extract, Aloe Barbadensis Leaf Juice, Panthenol (Pro-Vitamin B5), Niacinamide, Allantoin, Salicylic Acid, Hydrolyzed Quinoa Protein, Guar Hydroxypropyltrimonium Chloride, Citric Acid, Sodium Gluconate, Sodium Benzoate, Potassium Sorbate, Tocopherol (Vitamin E)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-foreground/60", children: "Free of sulfates (SLS/SLES), parabens, phthalates, silicones, synthetic fragrance, and artificial dyes." })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-10 lg:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-foreground/60 mb-2", children: "Use-Test · 4 Weeks · n=64" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl", children: "Measurable scalp relief." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl md:text-6xl mb-2 text-ink-deep", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-foreground/70 leading-snug", children: s.l })
      ] }, s.l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-8 tracking-wider", children: "Self-reported user perception study, n=64 adults with mild–moderate scalp psoriasis or seborrheic dermatitis, 2–3 washes per week over 4 weeks." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 order-2 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-secondary/40 aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: spsFlatlay,
            alt: "Cross-section illustration of scalp barrier with active ingredients",
            loading: "lazy",
            decoding: "async",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/45 to-transparent pt-12 sm:pt-16 px-5 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/90 text-[9px] tracking-[0.18em] uppercase text-foreground mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Microscope, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            " Mechanism of action"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-background leading-snug max-w-[26ch] sm:max-w-md", style: { fontSize: "clamp(1rem, 3.6vw, 1.875rem)" }, children: '"Lift the plaque. Calm the inflammation. Restore the barrier."' })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Clinical pathway" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-5", children: [
          "Three actions.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "One wash."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Sulfur softens hyperkeratotic scale. Tea tree and neem reduce the Malassezia load that fuels seborrheic flares. Karanja and sweet flag oils replenish lipids so the scalp barrier can heal between treatments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: [
          "Keratolytic — gently lifts plaques and scale",
          "Antimicrobial — targets yeast-driven inflammation",
          "Barrier-supportive — does not strip natural sebum"
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 mt-0.5 text-accent shrink-0", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
        ] }, t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 pb-16 lg:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 lg:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Know your scalp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-4", children: [
          "Three conditions.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "sm:hidden" }),
          " One formulation."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto text-[15px] leading-relaxed", children: "Scalp psoriasis, seborrheic dermatitis, and dandruff overlap in symptoms but differ in mechanism. Here's what each looks like — and which symptoms Dermveda is formulated to address." })
      ] }),
      (() => {
        const TARGETED = "bg-accent text-accent-foreground";
        const PARTIAL = "bg-secondary text-foreground/80";
        const NONE = "bg-muted/40 text-muted-foreground";
        const conditions = [
          {
            name: "Scalp Psoriasis",
            tagline: "Autoimmune · Chronic",
            icon: ShieldCheck,
            accent: true,
            description: "An autoimmune condition driving rapid skin-cell turnover. Produces thick, well-demarcated silvery plaques along the hairline, ears and nape.",
            hallmark: "Silvery, raised plaques",
            symptoms: [
              { label: "Thick scaling & plaques", level: "targeted" },
              { label: "Persistent itching", level: "targeted" },
              { label: "Redness & inflammation", level: "targeted" },
              { label: "Burning / soreness", level: "partial" },
              { label: "Hair shedding from scratching", level: "partial" }
            ]
          },
          {
            name: "Seborrheic Dermatitis",
            tagline: "Inflammatory · Yeast-driven",
            icon: Microscope,
            description: "Inflammatory reaction to Malassezia yeast overgrowth. Greasy yellowish flakes appear on the scalp, eyebrows, and sides of the nose.",
            hallmark: "Greasy yellow flakes",
            symptoms: [
              { label: "Oily / greasy flaking", level: "targeted" },
              { label: "Yeast overgrowth (Malassezia)", level: "targeted" },
              { label: "Itching & irritation", level: "targeted" },
              { label: "Diffuse redness", level: "targeted" },
              { label: "Odor from buildup", level: "partial" }
            ]
          },
          {
            name: "Dandruff",
            tagline: "Mild · Recurring",
            icon: Droplet,
            description: "The mildest form of seborrheic dermatitis. Small, dry white flakes that brush off easily, often without significant redness.",
            hallmark: "Fine white flakes",
            symptoms: [
              { label: "Light, dry flaking", level: "targeted" },
              { label: "Mild itching", level: "targeted" },
              { label: "Scalp buildup", level: "targeted" },
              { label: "Tightness after washing", level: "partial" },
              { label: "Severe inflammation", level: "none" }
            ]
          }
        ];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5", children: conditions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: cn(
                "rounded-2xl border p-6 lg:p-7 flex flex-col h-full transition",
                c.accent ? "bg-foreground text-background border-foreground shadow-sm" : "bg-background border-border hover:shadow-sm"
              ),
              children: [
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-[10px] tracking-[0.2em] uppercase mb-3", c.accent ? "text-background/60" : "text-muted-foreground"), children: "What Dermveda targets" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mt-auto", children: c.symptoms.map((s) => {
                  const cls = s.level === "targeted" ? TARGETED : s.level === "partial" ? PARTIAL : NONE;
                  const Icon = s.level === "none" ? Minus : Check;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0", cls), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", strokeWidth: 2.5 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("leading-snug", c.accent ? "text-background/90" : "text-foreground/85", s.level === "none" && (c.accent ? "text-background/40 line-through" : "text-muted-foreground line-through")), children: s.label })
                  ] }, s.label);
                }) })
              ]
            },
            c.name
          )) }),
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
              " Not addressed"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-5 tracking-wider max-w-2xl mx-auto", children: "Symptom mapping is for educational purposes only and does not constitute a medical diagnosis. Persistent or severe symptoms should be evaluated by a board-certified dermatologist." })
        ] });
      })()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 order-2 lg:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 md:gap-4 max-w-xl mx-auto lg:mx-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative rounded-xl overflow-hidden bg-background shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: spsBefore,
                alt: "Scalp with thick yellow psoriasis plaques and crusting along the hairline before treatment",
                className: "w-full h-auto block aspect-[3/4] object-cover",
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-ink-deep/85 backdrop-blur text-[9px] tracking-[0.18em] uppercase text-background", children: "Day 0 · Before" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/55 to-transparent p-3 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-snug text-background/95", children: "Thick scaling, redness and visible plaques along the hairline." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative rounded-xl overflow-hidden bg-background shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: spsAfter,
                alt: "Same scalp visibly clear and calm after 2 weeks of consistent use of the medicated shampoo",
                className: "w-full h-auto block aspect-[3/4] object-cover",
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent text-accent-foreground text-[9px] tracking-[0.18em] uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5", strokeWidth: 2 }),
              " Week 2 · After"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/55 to-transparent p-3 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-snug text-background/95", children: "Plaques cleared, calm scalp, no visible inflammation." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/50 mt-4 tracking-wider max-w-xl mx-auto lg:mx-0", children: "Individual results vary. Photographs are illustrative and not a guarantee of clinical outcome." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Visible scalp clearance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-5", children: "Less flaking. Less itch. In 2 weeks." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-base leading-relaxed mb-5", children: "After 14 days of using the medicated shampoo 3× weekly, thick yellow plaques and crusting along the hairline visibly cleared, leaving calm, healthy scalp skin." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Plaques cleared along the frontal hairline"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Calm, hydrated scalp — no visible inflammation"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Hair visibly cleaner and lighter at the root"
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "The complete protocol" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight mb-5", children: "Scalp Relief Turmeric Trio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-base leading-relaxed", children: "Pair the medicated shampoo with our targeted scalp serum and an anti-inflammatory turmeric soap. Designed to work together: cleanse, treat, soothe — morning to night." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10", children: [
        { img: spsHero, alt: "Dermveda Scalp Psoriasis Shampoo bottle", icon: Droplet, step: "Step 01 · Cleanse", name: "Medicated Shampoo", desc: "3× weekly to lift scale and calm inflammation.", price: "$32" },
        { img: spsSerum, alt: "Scalp psoriasis serum dropper bottle", icon: FlaskConical, step: "Step 02 · Treat", name: "Scalp Psoriasis Serum", desc: "Daily leave-on for direct plaque-zone delivery.", price: "$38" },
        { img: turmericSoap, alt: "Handmade turmeric soap bar with fresh turmeric root", icon: Leaf, step: "Step 03 · Soothe", name: "Turmeric Soap", desc: "Anti-inflammatory turmeric + curcumin to brighten, calm redness and gently cleanse the hairline & nape.", price: "$25" }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-2xl bg-secondary/40 p-6 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] tracking-[0.22em] uppercase text-accent mb-3 inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-3 h-3", strokeWidth: 2 }),
          " ",
          p.step
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] rounded-xl overflow-hidden bg-background mb-5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.alt, className: "w-full h-full object-contain p-6 transition duration-500 group-hover:scale-[1.04]", loading: "lazy", decoding: "async" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl mb-2 leading-tight", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/65 leading-relaxed mb-4 flex-1", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border/60 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/60", children: "Individually" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.price })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "w-full rounded-full text-[10px] tracking-[0.2em] uppercase",
            "aria-label": `Add ${p.name} to bag`,
            children: "Add to bag"
          }
        )
      ] }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-ink-deep text-primary-foreground p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-[10px] tracking-[0.2em] uppercase font-medium", children: "Save 18%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-primary-foreground/60 mb-1", children: "Shampoo + Serum + Turmeric Soap" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-3xl md:text-4xl", children: "$78" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/50 line-through text-base", children: "$95" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.18em] uppercase text-accent", children: "You save $17" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "secondary", className: "rounded-full px-8 text-xs tracking-[0.2em] uppercase", children: "Shop the natural skincare set" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "The active panel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-5", children: [
            "Four actives.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Backed by literature."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Each ingredient was selected against a defined clinical target — keratolysis, antimicrobial activity, anti-inflammatory action, or barrier repair — and dosed within evidence-based ranges." })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Treatment protocol" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight", children: "How to use." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4", children: ROUTINE.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl p-5 lg:p-6 border transition flex flex-col", r.highlight ? "bg-foreground text-background border-foreground" : "bg-background border-border"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-[10px] tracking-[0.2em] uppercase mb-3", r.highlight ? "text-background/60" : "text-muted-foreground"), children: r.time }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-serif text-3xl mb-3", r.highlight ? "text-background" : "text-ink-deep"), children: r.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: cn("font-medium mb-2 text-[15px]", r.highlight && "text-background"), children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-xs leading-relaxed", r.highlight ? "text-background/70" : "text-muted-foreground"), children: r.body }),
        r.highlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 mt-3 text-[10px] tracking-[0.15em] uppercase text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "h-3 w-3" }),
          " This shampoo"
        ] })
      ] }, r.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-8 tracking-wider max-w-2xl mx-auto", children: "For external use only. Avoid contact with eyes. Discontinue use and consult a physician if irritation or rash develops. Not intended to diagnose, treat, cure, or prevent any disease." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink-deep text-primary-foreground py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "The clinical difference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-3", children: "Dermveda vs. conventional medicated shampoos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 max-w-lg mx-auto text-sm", children: "Same therapeutic targets — without the harsh surfactants, fragrance, or staining of legacy formulations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden border border-primary-foreground/15 bg-primary-foreground/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-primary-foreground/[0.06] text-[10px] tracking-[0.2em] uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-accent border-l border-primary-foreground/15 font-medium", children: "Dermveda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/50 border-l border-primary-foreground/15", children: "Legacy Medicated" })
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
          title: "Watch: Dr. Jennifer Haley on dermatologic scalp care",
          className: "shadow-lg"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Dermatologist approved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-serif text-xl md:text-2xl leading-snug mb-4 text-ink-deep", children: `"For patients who can't tolerate coal tar or strong steroid foams, a well-formulated sulfur and tea tree shampoo can be a meaningful first-line option."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Dr. Jennifer Haley, M.D." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/60 text-xs tracking-wider uppercase mt-1", children: "Board-Certified Dermatologist · 20+ Years" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach/40 py-20 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: spsCounter,
              alt: "Modern dermatology nano-science meets ancient herbal scalp remedies",
              loading: "lazy",
              decoding: "async",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-[10px] tracking-[0.22em] uppercase text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            "Nano-formulated"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.28em] uppercase text-accent mb-4", children: "Modern dermatology, ancient herbs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.05] mb-6 text-ink-deep", children: [
            "Where the OTC monograph",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "meets the materia medica."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/75 leading-relaxed mb-5 max-w-xl", children: [
            "Sulfur has been used for inflammatory scalp disorders since the era of the original FDA OTC monograph. Neem, karanja and sweet flag have been documented in Ayurvedic dermatology — ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic font-serif italic text-ink-deep", children: "kushtha-ghna" }),
            " formulations — for centuries. Dermveda combines both lineages with cold-process emulsification so each active reaches the scalp at a clinically relevant dose."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 leading-relaxed max-w-xl", children: "The result is a fragrance-free, sulfate-free, paraben-free shampoo that is gentle enough for a sensitive scalp yet decisive enough to address recurring flares." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5", children: [
        {
          title: "Keratolysis",
          meaning: "Loosens scale",
          how: "Medicated sulfur softens the disulfide bonds in hyperkeratotic plaques so they can be gently rinsed away.",
          icon: ShieldCheck
        },
        {
          title: "Antimicrobial",
          meaning: "Reduces yeast load",
          how: "Tea tree oil and neem extract target Malassezia species implicated in seborrheic dermatitis flares.",
          icon: Microscope
        },
        {
          title: "Barrier repair",
          meaning: "Restores lipids",
          how: "Karanja and sweet flag oils replenish the scalp's lipid film between washes — without occluding follicles.",
          icon: Leaf
        }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-2xl p-7 lg:p-8 border border-foreground/5 hover:shadow-sm transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5 text-accent mb-5", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2", children: p.meaning }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl lg:text-3xl text-ink-deep mb-4", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 leading-relaxed", children: p.how })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-3xl mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Clinical questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl", children: "Answers from our team" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `q${i}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-serif text-lg md:text-xl py-5", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed text-[15px] pb-5 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: f.a }) })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reviews", className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-5", children: "Be the first to share your results." }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-6 h-6 mx-auto mb-3 text-muted-foreground/50", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: r.body })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[900px] mx-auto px-5 lg:px-10 py-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-3", children: "Legal disclaimer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Always read and follow label directions. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified healthcare provider before starting any new treatment, particularly if you are pregnant, nursing, or under medical care." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-ink-deep text-primary-foreground py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-xl tracking-[0.22em] mb-3", children: [
            "CELSIUS",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: " · " }),
            "HERBS"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/60 leading-relaxed max-w-xs", children: "Plant-powered, dermatologist-formulated scalp & skin care. Made in the USA." })
        ] }),
        [
          { h: "Shop", l: ["Scalp Care", "Medicated", "Daily Use", "Best Sellers"] },
          { h: "Help", l: ["Contact", "Shipping", "Returns", "FAQ"] },
          { h: "Company", l: ["About", "Ingredients", "Sustainability", "Press"] }
        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-primary-foreground/50 mb-3", children: c.h }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: c.l.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-accent transition", children: i }) }, i)) })
        ] }, c.h))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 pt-6 border-t border-primary-foreground/10 text-[11px] text-primary-foreground/40 tracking-wider", children: "© 2026 Celsius Herbs. All rights reserved." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "lg:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t border-border",
          "px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
          "transition-transform duration-300 ease-out shadow-[0_-8px_24px_-12px_hsl(var(--ink-deep)/0.18)]",
          showStickyBar ? "translate-y-0" : "translate-y-full"
        ),
        role: "region",
        "aria-label": "Purchase bar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex -space-x-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: spsHero, alt: "", className: "w-10 h-10 rounded-md object-cover bg-peach ring-2 ring-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: spsSerum, alt: "", className: "w-10 h-10 rounded-md object-cover bg-peach ring-2 ring-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: turmericSoap, alt: "", className: "w-10 h-10 rounded-md object-cover bg-peach ring-2 ring-background" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-ink-deep/70 tracking-wide truncate", children: "Shampoo + Serum + Turmeric Soap" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5 mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-[16px] leading-none text-ink-deep", children: "$58" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground line-through leading-none", children: "$72" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium tracking-[0.14em] uppercase text-accent leading-none", children: "Save $14" })
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
              children: isAdding ? "Adding…" : "Shop set"
            }
          )
        ] })
      }
    )
  ] });
};

function ScalpPsoriasisShampooIsland() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageRoot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScalpPsoriasisShampoo, {}) });
}

const $$ScalpPsoriasisShampoo = createComponent(async ($$result, $$props, $$slots) => {
  const staticMeta = {
    title: "Dermveda Scalp Psoriasis Shampoo | Celsius Herbs",
    description: "Therapeutic shampoo for scalp psoriasis with sulfur, tea tree, neem, and karanja. USDA organic ingredients.",
    canonical: "https://celsiusherbs.com/scalp-psoriasis-shampoo"
  };
  const merged = await mergeShopifyProductSeo(SHOPIFY_PRODUCT_HANDLES.scalpPsoriasisShampoo, staticMeta);
  const { jsonLd, ...layoutProps } = merged;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...layoutProps, "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ScalpPsoriasisShampooIsland", ScalpPsoriasisShampooIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/islands/pdp/ScalpPsoriasisShampoo", "client:component-export": "default" })} ` })}`;
}, "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/scalp-psoriasis-shampoo.astro", void 0);

const $$file = "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/scalp-psoriasis-shampoo.astro";
const $$url = "/scalp-psoriasis-shampoo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ScalpPsoriasisShampoo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
