globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_UrxGwwQU.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ck2Mg-5P.mjs';
import { j as jsxRuntimeExports, a as cn, u as ue, P as PageRoot } from '../chunks/PageRoot_CAKxSx1p.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
import { u as useStore, $ as $cartOpen, e as $shopifyCart, h as hydrateShopifyCart, C as CartDrawer, S as Search, U as User, a as ShoppingBag, M as Minus, P as Plus } from '../chunks/cartdrawer_DmjRgRXu.mjs';
import { C as ChevronLeft, a as ChevronRight, M as Moon, S as Star, T as Truck, R as RotateCcw, A as Award, b as Accordion, c as AccordionItem, d as AccordionTrigger, e as AccordionContent, f as Check, L as Leaf, h as handleAddToCartRule, g as Carousel, i as CarouselContent, j as CarouselItem, k as CarouselPrevious, l as CarouselNext, m as mergeShopifyProductSeo, n as SHOPIFY_PRODUCT_HANDLES } from '../chunks/merge-layout-meta_8vEeX35y.mjs';
import { g as getProduct } from '../chunks/storefront_C5K3qrxX.mjs';
import { B as Button } from '../chunks/button_DF0oUIQF.mjs';
import { b as badgeUsdaOrganic, a as badgeCrueltyFree, c as badgeVegan, d as badgeMadeInUsa } from '../chunks/badge-made-in-usa_DAt_YwtQ.mjs';
import { s as spsHero, a as spsDetail, b as spsLifestyle1, c as spsLifestyle2, d as spsFlatlay, e as spsCounter, f as spsSerum, i as ingSulfur, g as ingTeatree, h as ingNeem, j as ingKaranja } from '../chunks/ing-karanja_DNwxNPs7.mjs';
import { s as spsShower, f as follBefore, a as follAfter, b as follDermPortrait, E as Eye } from '../chunks/folliculitis-after-scalp_DwyIXIOX.mjs';
import { t as turmericSoap } from '../chunks/sps-turmeric-soap_CHEHoC3k.mjs';
import { a as Stethoscope, M as Microscope, S as ShieldCheck } from '../chunks/stethoscope_DnPpBa-Y.mjs';
import { H as Heart, S as Sun, F as FlaskConical } from '../chunks/sun_kL0qGYUv.mjs';
import { C as CircleAlert, H as HeartHandshake } from '../chunks/heart-handshake_DERUfglw.mjs';
import { S as Sparkles } from '../chunks/sparkles_ApADezYP.mjs';
import { C as Clock } from '../chunks/clock_DpqRCTxw.mjs';
import { D as Droplet } from '../chunks/droplet_8qLxT5ym.mjs';
import { P as Pill } from '../chunks/pill_BJG4kQtj.mjs';

const PDP_PRODUCT_NAME = "dermveda-folliculitis-shampoo";
const PRODUCT_IMAGES = [
  { src: spsHero, alt: "Dermveda Folliculitis Shampoo bottle on a soft peach background" },
  { src: spsDetail, alt: "Sulfur 8X HPUS and tea tree clinical label detail" },
  { src: spsLifestyle1, alt: "Woman with curly hair holding the shampoo in a bright bathroom" },
  { src: spsLifestyle2, alt: "Man holding the folliculitis shampoo in a minimal bathroom" },
  { src: spsFlatlay, alt: "Shampoo bottle with tea tree, neem and rosemary leaves" },
  { src: spsCounter, alt: "Bottle on a marble bathroom counter" },
  { src: spsShower, alt: "Shampoo lather being massaged into the scalp" }
];
const STATS = [
  { v: "92%", l: "felt less itching within 14 days" },
  { v: "88%", l: "saw visibly fewer flakes & scales" },
  { v: "2–3", l: "weeks to a calmer, balanced scalp" },
  { v: "0", l: "sulfates, parabens or fragrance" }
];
const KEY_INGREDIENTS = [
  { tag: "Antifungal", name: "Sulfur 8X HPUS", desc: "Homeopathic sulfur — the gold-standard active for folliculitis, seborrheic dandruff and yeast-driven scalp flares." },
  { tag: "Soothe", name: "Tea Tree 10X HPUS", desc: "Melaleuca alternifolia calms inflamed follicles and reduces the bacteria behind painful, pus-filled bumps." },
  { tag: "Anti-Inflammatory", name: "Neem Leaf", desc: "Ayurvedic anti-microbial that targets the root of recurring scalp infections without stripping the barrier." },
  { tag: "Restore", name: "Karanja Oil", desc: "Lipid-rich oil that rebuilds the scalp barrier so itch, redness and flakes don't keep returning." }
];
const INGREDIENT_SLIDES = [
  {
    image: ingSulfur,
    name: "Sulfur 8X HPUS",
    inci: "Sulfur (Homeopathic, USP)",
    benefit: "Keratolytic and antifungal — clinically used for folliculitis, dandruff and seborrheic dermatitis to reduce flakes and follicular inflammation.",
    citation: "J Drugs in Dermatology, 2020"
  },
  {
    image: ingTeatree,
    name: "Tea Tree 10X HPUS",
    inci: "Melaleuca Alternifolia 10X HPUS",
    benefit: "5% tea tree oil shampoo significantly reduced dandruff severity and scalp itch in a controlled clinical trial.",
    citation: "J Am Acad Dermatology, 2002"
  },
  {
    image: ingNeem,
    name: "Neem Leaf",
    inci: "Azadirachta Indica Leaf Extract",
    benefit: "Broad-spectrum botanical against the Malassezia yeast and Staph bacteria implicated in chronic scalp folliculitis.",
    citation: "Phytotherapy Research, 2016"
  },
  {
    image: ingKaranja,
    name: "Karanja Oil",
    inci: "Pongamia Glabra Seed Oil",
    benefit: "Antibacterial Ayurvedic oil that supports follicle repair and barrier restoration — shown to calm inflamed scalp tissue.",
    citation: "J Ethnopharmacology, 2019"
  }
];
const COMPARISON = [
  { criteria: "Targets folliculitis bumps", us: "Yes — sulfur + tea tree + neem", them: "Often only treats flakes" },
  { criteria: "Active mechanism", us: "Antifungal + antibacterial + barrier", them: "Coal tar, zinc, or steroids" },
  { criteria: "Fragrance / sulfates", us: "Free of both — fragrance-free", them: "Often heavily fragranced" },
  { criteria: "Suitable for kids 2+", us: "Yes — gentle homeopathic dose", them: "Adults only, prescription" },
  { criteria: "Time to visible relief", us: "2–3 weeks of weekly use", them: "1–4 weeks + side effects" },
  { criteria: "Cruelty-free, vegan", us: "Yes — no animal testing", them: "Often tested on animals" }
];
const ROUTINE = [
  { step: "1", title: "Wet hair & scalp", caption: "Soak hair and scalp thoroughly with lukewarm — never hot — water to open the follicles.", image: spsShower },
  { step: "2", title: "Lather a small amount", caption: "Apply a quarter-sized pump and work into a rich, low-foam lather right at the scalp.", image: spsLifestyle2 },
  { step: "3", title: "Massage 2–3 minutes", caption: "Gently massage with fingertips (not nails) so the actives can reach inflamed follicles.", image: spsLifestyle1 },
  { step: "4", title: "Leave on, then rinse", caption: "Let it sit 2–3 more minutes, then rinse fully. Use 2–3× weekly until the scalp calms.", image: spsCounter }
];
const FAQS = [
  {
    q: "How is this different from regular dandruff shampoo?",
    a: "Standard dandruff shampoos target flakes, not follicles. This formula combines homeopathic Sulfur 8X HPUS and Tea Tree 10X HPUS with neem and karanja — actives chosen specifically for scalp folliculitis: those red, itchy, sometimes pus-filled bumps that come back even when the flakes go away."
  },
  {
    q: "How long until I see results?",
    a: "Most people feel less itching within the first week. Visible reduction in flakes and bumps typically follows in 2–3 weeks of consistent use (2–3× per week). For long-standing folliculitis, allow a full 6 weeks. If symptoms worsen or you see open weeping lesions, consult a dermatologist."
  },
  {
    q: "Is it safe for color-treated or sensitive hair?",
    a: "Yes. The formula is sulfate-free, paraben-free, fragrance-free and dye-free, so it's gentle on color-treated, chemically processed and sensitive scalps. Suitable for adults and children ages 2+ when used as directed."
  },
  {
    q: "Will it dry out my hair like medicated shampoos?",
    a: "No. Karanja oil, glycerin and olive oil are built into the base specifically to counter the drying effect that traditional sulfur or coal-tar shampoos leave behind. Most users report softer, more manageable hair after 2 weeks."
  },
  {
    q: "Full ingredient list?",
    a: "Sulfur 8X HPUS, Tea Tree (Melaleuca alternifolia) 10X HPUS, Neem, Glycerin, Hydroxyethylcellulose, Peppermint Oil, Olive Oil, Karanja Oil, Sweet Flag Oil, Sweet Indrajao Oil, Xanthan Gum, Water. Free of sulfates, parabens, fragrance, phthalates, chlorides, and known carcinogens."
  }
];
const PAIN_POINTS = [
  {
    icon: CircleAlert,
    title: "The itch nobody else can see",
    body: "All day, every day — that maddening urge to dig your nails into your scalp. In meetings. On dates. While trying to fall asleep.",
    trigger: "Helplessness"
  },
  {
    icon: Sparkles,
    title: "Flakes on every dark shirt",
    body: "You've stopped wearing navy and black. You brush your shoulders before every Zoom. Other people notice — and you know it.",
    trigger: "Embarrassment"
  },
  {
    icon: HeartHandshake,
    title: "Bumps you can feel through your hair",
    body: "Tender red follicles, sometimes pus-filled, that hurt when you brush or sleep. The bathroom mirror only tells half the story.",
    trigger: "Discomfort"
  },
  {
    icon: Clock,
    title: "A graveyard of failed shampoos",
    body: "Coal-tar, ketoconazole, zinc — they sting, they smell medicinal, they stop working after a month. You're tired of starting over.",
    trigger: "Frustration"
  }
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-foreground text-background text-[10px] tracking-[0.18em] uppercase font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Microscope, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
          "0",
          i + 1,
          " / 0",
          INGREDIENT_SLIDES.length
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 px-5 pb-5", children: [
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
const FolliculitisShampoo = () => {
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
  const singlePrice = fullVariant ? parseFloat(fullVariant.price.amount) : 16.99;
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink-deep text-primary-foreground text-center text-[11px] tracking-[0.18em] uppercase py-2.5 px-4", children: "Dermatologist-formulated · Fragrance-free · Free 3-day US shipping" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border/60 bg-background/95 backdrop-blur sticky top-0 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm tracking-wide text-muted-foreground flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground transition", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Scalp Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Hair Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Find a Derm" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 pt-6 text-[11px] tracking-[0.15em] uppercase text-muted-foreground overflow-x-auto whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-foreground", children: "Shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Scalp Care" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Folliculitis & Dandruff" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Folliculitis Shampoo" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-10 py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col-reverse md:flex-row md:items-start gap-3 md:gap-4 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-2.5 md:w-[88px] shrink-0 overflow-x-auto md:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0", children: PRODUCT_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            " Derm-formulated · Fragrance-free"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/95 backdrop-blur flex items-center justify-center hover:bg-background transition shadow-sm", "aria-label": "Save", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4", strokeWidth: 1.75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: PRODUCT_IMAGES[activeImage].src,
              alt: PRODUCT_IMAGES[activeImage].alt,
              className: "absolute inset-0 size-full object-cover",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.22em] uppercase font-medium bg-foreground text-background px-2.5 py-1 rounded", children: "Homeopathic · Topical" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3 w-3" }),
            " AM ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "·" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3" }),
            " PM"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-2", children: "Dermveda · Scalp Therapy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-[2.25rem] md:text-5xl leading-[1.02] mb-4 tracking-tight", children: "Folliculitis Shampoo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground mb-5 leading-relaxed", children: "For itchy, dry, flaky, bump-prone scalps. A homeopathic Sulfur + Tea Tree formula that calms inflamed follicles, reduces flaking, and rebuilds a balanced scalp — without sulfates, fragrance, or steroids." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-6", children: ["Folliculitis", "Scalp Itch", "Dandruff", "Seborrheic Flaking", "Scalp Bumps"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-secondary text-foreground/80", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-accent text-accent" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reviews", className: "text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground", children: "4.7 · 312 verified reviews" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-muted-foreground", children: "Pack" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: pack === "bundle" ? "2 × 4 fl oz · 8-week supply" : "4 fl oz · 118ml" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setPack("single"),
                className: cn("w-full px-4 py-3.5 rounded-md border-2 transition flex items-center justify-between gap-3 text-left", pack === "single" ? "border-foreground bg-secondary/40" : "border-border hover:border-muted-foreground/50"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0", pack === "single" ? "border-foreground" : "border-muted-foreground"), children: pack === "single" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-ink-deep", children: "Single Bottle · 4 fl oz" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium whitespace-nowrap", children: [
                    "$",
                    singlePrice.toFixed(2)
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => isBundleAvailable && setPack("bundle"),
                disabled: !isBundleAvailable,
                className: cn("w-full px-4 py-3.5 rounded-md border-2 transition flex items-center justify-between gap-3 text-left", pack === "bundle" ? "border-foreground bg-secondary/40" : "border-border hover:border-muted-foreground/50", !isBundleAvailable && "opacity-50 cursor-not-allowed"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0", pack === "bundle" ? "border-foreground" : "border-muted-foreground"), children: pack === "bundle" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-ink-deep", children: "2-Bottle Bundle — save 20%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-widest uppercase text-accent mt-0.5", children: "Best value · most chosen" })
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
                ]
              }
            )
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
          { icon: Award, label: "Money-Back", sub: "100% Guarantee" }
        ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center py-3 px-2 bg-secondary/40 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-4 w-4 mb-1.5 text-foreground", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium leading-tight", children: b.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: b.sub })
        ] }, b.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 place-items-center gap-3 sm:gap-5 mb-6 max-w-md mx-auto", children: [
          { src: badgeUsdaOrganic, label: "USDA Organic" },
          { src: badgeCrueltyFree, label: "Cruelty Free" },
          { src: badgeVegan, label: "Vegan Formula" },
          { src: badgeMadeInUsa, label: "Made in USA" }
        ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-14 sm:w-16 lg:w-20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: b.src,
            alt: b.label,
            title: b.label,
            loading: "lazy",
            className: "w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
          }
        ) }, b.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "ingredients", className: "border-b-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-[11px] tracking-[0.22em] uppercase font-medium hover:no-underline py-4", children: "Full ingredient list" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: "text-[13px] text-muted-foreground leading-relaxed pb-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-foreground/70 mb-1.5", children: "Active homeopathics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sulfur 8X HPUS, Melaleuca alternifolia (Tea Tree) 10X HPUS." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-foreground/70 mb-1.5", children: "Botanical & base" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Neem, Glycerin, Hydroxyethylcellulose, Peppermint Oil, Olive Oil, Karanja Oil, Sweet Flag Oil, Sweet Indrajao Oil, Xanthan Gum, Aqua (Purified Water)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-foreground/60", children: "Free of sulfates, parabens, fragrance, phthalates, chlorides, and known carcinogens." })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-10 lg:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-foreground/60 mb-2", children: "User Survey · 14 Days · n=212 adults" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl", children: "A calmer scalp. A quieter mind." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl md:text-6xl mb-2 text-ink-deep", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-foreground/70 leading-snug", children: s.l })
      ] }, s.l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-8 tracking-wider", children: "Self-reported user observation study, n=212 adults with mild–moderate scalp folliculitis or seborrheic dandruff, 2–3 weekly washes over 14 days." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 lg:mb-14 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "If any of this sounds familiar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-4", children: [
          "The itch isn't in your head.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Your scalp just needs a smarter wash."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[15px] leading-relaxed", children: "Folliculitis and chronic flaking aren't a hygiene problem — they're a follicle inflammation problem. Here's what most people quietly live with before they switch." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5", children: PAIN_POINTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 rounded-2xl p-6 lg:p-7 hover:bg-secondary transition flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-background flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5 text-accent", strokeWidth: 1.75 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-accent mb-2", children: p.trigger }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-ink-deep mb-3 leading-tight", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.body })
      ] }, p.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-2xl md:text-3xl text-ink-deep max-w-2xl mx-auto leading-snug", children: `"Three weeks in, I forgot to scratch. That's when I realized it was actually working."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-[0.22em] uppercase text-muted-foreground mt-4", children: "— the message we hear from new Dermveda customers most often" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 pb-16 lg:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 order-2 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-secondary/40 aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: spsShower,
            alt: "Shampoo lather worked into a calm scalp",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-background leading-snug max-w-[26ch] sm:max-w-md", style: { fontSize: "clamp(1rem, 3.6vw, 1.875rem)" }, children: '"Calm the follicle. Lift the flake. Restore the barrier."' })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "How it works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-5", children: [
          "Three actions.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "One quiet wash."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Sulfur 8X HPUS reduces the Malassezia yeast and Staph bacteria implicated in scalp folliculitis. Tea tree and neem calm follicular inflammation. Karanja oil and glycerin rebuild the lipid barrier so the itch and flakes don't keep coming back." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: [
          "Antimicrobial — targets yeast & bacteria at the follicle",
          "Anti-inflammatory — calms red, tender bumps within days",
          "Barrier-repairing — softens hair and ends the dryness rebound"
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
          " One gentle shampoo."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto text-[15px] leading-relaxed", children: "Folliculitis, seborrheic dandruff and dry flaking can look almost identical — but each has a different root cause. Here's what each looks like, and what Dermveda is formulated to address." })
      ] }),
      (() => {
        const TARGETED = "bg-accent text-accent-foreground";
        const PARTIAL = "bg-secondary text-foreground/80";
        const NONE = "bg-muted/40 text-muted-foreground";
        const conditions = [
          {
            name: "Scalp Folliculitis",
            tagline: "Inflammatory · Bacteria & yeast",
            icon: ShieldCheck,
            accent: true,
            description: "Red, tender bumps around hair follicles — often from Staph bacteria or Malassezia yeast. Can be itchy, painful, sometimes pus-filled, especially at the hairline and nape.",
            hallmark: "Red bumps around follicles",
            symptoms: [
              { label: "Inflamed follicle bumps", level: "targeted" },
              { label: "Tenderness & redness", level: "targeted" },
              { label: "Persistent itch", level: "targeted" },
              { label: "Mild flaking", level: "targeted" },
              { label: "Open weeping lesions", level: "none" }
            ]
          },
          {
            name: "Seborrheic Dandruff",
            tagline: "Most common · Recurring",
            icon: Droplet,
            description: "Greasy, yellowish flakes with persistent itch — driven by Malassezia yeast feeding on scalp oils. Worse with stress, cold weather, or oily roots.",
            hallmark: "Yellow oily flakes",
            symptoms: [
              { label: "Greasy yellow flakes", level: "targeted" },
              { label: "Itch & scalp sensitivity", level: "targeted" },
              { label: "Mild redness", level: "targeted" },
              { label: "Visible scaling", level: "partial" },
              { label: "Severe psoriatic plaques", level: "none" }
            ]
          },
          {
            name: "Dry Scalp & Itch",
            tagline: "Environmental · Seasonal",
            icon: Microscope,
            description: "Fine white flakes, tightness and itch from over-washing, hot showers, low humidity, or harsh shampoos. Often improves with barrier-repairing actives.",
            hallmark: "Fine white flakes",
            symptoms: [
              { label: "Fine white flakes", level: "targeted" },
              { label: "Tight, itchy scalp", level: "targeted" },
              { label: "Sensitivity after washing", level: "targeted" },
              { label: "Mild redness", level: "partial" },
              { label: "Bacterial infection", level: "none" }
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
              " See a dermatologist"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-5 tracking-wider max-w-2xl mx-auto", children: "Symptom mapping is for educational purposes only. Persistent, worsening or open-lesion conditions should be evaluated by a licensed dermatologist." })
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
                src: follBefore,
                alt: "Person scratching scalp with frustration before treatment",
                className: "w-full h-auto block aspect-[3/4] object-cover",
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-ink-deep/85 backdrop-blur text-[9px] tracking-[0.18em] uppercase text-background", children: "Day 0 · Before" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/55 to-transparent p-3 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-snug text-background/95", children: "Constant itch, tender bumps, visible flakes." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative rounded-xl overflow-hidden bg-background shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: follAfter,
                alt: "Calm clear healthy scalp after treatment",
                className: "w-full h-auto block aspect-[3/4] object-cover",
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent text-accent-foreground text-[9px] tracking-[0.18em] uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5", strokeWidth: 2 }),
              " Day 21 · After"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/55 to-transparent p-3 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-snug text-background/95", children: "Soft hair. Calm scalp. No more flake brushing." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/50 mt-4 tracking-wider max-w-xl mx-auto lg:mx-0", children: "Individual results vary. Photographs are illustrative and not a guarantee of clinical outcome." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Visible relief in weeks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-5", children: "Less itch. Fewer bumps. Hair you actually want to touch." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-base leading-relaxed mb-5", children: "After 2–3 weeks of weekly use, scalp tenderness fades, follicle bumps shrink, and the flake-and-scratch loop quiets. By week six, the dark-shirt taboo is over." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Less itch within the first 7 days"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Visibly fewer flakes by week 3"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Calmer follicles, less redness"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            " Confidence to wear black again"
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "bundle", className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Complete the ritual" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight mb-5", children: "The Full Scalp Reset Ritual" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-base leading-relaxed", children: "Folliculitis rarely arrives alone. Pair the shampoo with our turmeric scalp soap and follicle-support serum to address the three drivers of chronic scalp irritation — yeast, inflammation, and barrier loss." })
      ] }),
      (() => {
        const items = [
          { tag: "Step 1 · Cleanse", img: spsHero, title: "Folliculitis Shampoo", sub: "Sulfur + tea tree wash — calms inflamed follicles and lifts flakes 2–3× per week", price: 16.99 },
          { tag: "Step 2 · Detoxify", img: turmericSoap, title: "Turmeric Scalp Soap Bar", sub: "Anti-inflammatory soap bar for hairline, beard and body folliculitis between washes", price: 14.99 },
          { tag: "Step 3 · Support", img: spsSerum, title: "Botanical Follicle Serum", sub: "Lightweight leave-in with rosemary and bhringraj to support follicle strength and density", price: 24.99 }
        ];
        const total = items.reduce((s, i) => s + i.price, 0);
        const ritualBundle = +(total * 0.8).toFixed(2);
        const savings = +(total - ritualBundle).toFixed(2);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-secondary/40 p-6 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mb-8", children: items.map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-xl p-5 relative flex flex-col", children: [
            idx < items.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-accent z-10", strokeWidth: 2.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-lg overflow-hidden bg-secondary/40 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.title, className: "w-full h-full object-cover", loading: "lazy", decoding: "async" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.2em] uppercase text-accent mb-2", children: it.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg leading-tight mb-1.5 min-h-[3.5rem]", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-4 min-h-[3.5rem]", children: it.sub }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between gap-3 pt-3 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
                "$",
                it.price.toFixed(2)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "rounded-full text-[10px] tracking-[0.18em] uppercase px-4 h-8", children: "Add to bag" })
            ] })
          ] }, it.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-6 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-accent mb-2", children: "Bundle & save 20%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-4xl", children: [
                  "$",
                  ritualBundle.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground line-through text-base", children: [
                  "$",
                  total.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs tracking-[0.18em] uppercase text-accent", children: [
                  "You save $",
                  savings.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-accent", strokeWidth: 2.5 }),
                " Free shipping · 60-day money-back guarantee"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "rounded-full px-8 text-xs tracking-[0.2em] uppercase w-full md:w-auto", children: [
              "Add ritual bundle — $",
              ritualBundle.toFixed(2)
            ] })
          ] })
        ] });
      })()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "The active panel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl leading-[1.05] mb-5", children: [
            "Four actives.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Derm-formulated for follicles."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Every ingredient was chosen to do one of three jobs: kill the yeast and bacteria around the follicle, calm the inflammation, or rebuild the scalp barrier — without sulfates, fragrance or steroids." })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-2", children: "How to use" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl leading-tight", children: "A 5-minute weekly ritual." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-8", children: ROUTINE.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full aspect-square rounded-full overflow-hidden bg-background shadow-[0_10px_30px_-12px_hsl(var(--foreground)/0.25)] ring-1 ring-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.image, alt: r.title, loading: "lazy", decoding: "async", className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-serif text-accent leading-none", style: { fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }, children: [
          r.step,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[13px] md:text-sm font-medium text-ink-deep leading-snug max-w-[22ch]", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[12px] md:text-[13px] text-foreground/65 leading-snug max-w-[26ch]", children: r.caption })
      ] }, r.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-foreground/50 mt-10 tracking-wider max-w-2xl mx-auto", children: "For external use only. Avoid contact with eyes. Discontinue if irritation worsens. Suitable for adults and children ages 2+." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink-deep text-primary-foreground py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Why people switch from drugstore brands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-3", children: "Dermveda vs. conventional medicated shampoos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 max-w-lg mx-auto text-sm", children: 'The same relief — without the medicinal smell, the rebound dryness, or the "stops working at week four" cycle.' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden border border-primary-foreground/15 bg-primary-foreground/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-primary-foreground/[0.06] text-[10px] tracking-[0.2em] uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-accent border-l border-primary-foreground/15 font-medium", children: "Dermveda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:p-5 text-primary-foreground/50 border-l border-primary-foreground/15", children: "Coal Tar / Ketoconazole" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center lg:justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: follDermPortrait,
            alt: "Portrait of Dr. Jennifer Haley, Board Certified Dermatologist",
            loading: "lazy",
            className: "w-full h-full rounded-full object-cover shadow-lg ring-4 ring-background"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md text-center whitespace-nowrap border border-foreground/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-sm md:text-base text-ink-deep leading-tight", children: "Dr. Jennifer Haley" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-accent mt-0.5", children: "Board Certified · Dermatology" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Dermatologist approved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-serif text-xl md:text-2xl leading-snug text-ink-deep", children: '"For mild to moderate scalp folliculitis and recurring seborrheic dandruff, a sulfur and tea tree formula is one of the most under-used first-line options — and a sensible step before reaching for prescription antifungals or steroids."' })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-peach/40 py-20 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1320px] mx-auto px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: spsFlatlay,
              alt: "Tea tree, neem and rosemary — Dermveda's botanical actives",
              loading: "lazy",
              decoding: "async",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-[10px] tracking-[0.22em] uppercase text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-3 h-3 text-accent", strokeWidth: 2 }),
            "HPUS Active"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.28em] uppercase text-accent mb-4", children: "Modern dermatology, ancient roots" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.05] mb-6 text-ink-deep", children: [
            "Where homeopathic actives",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "meet Ayurvedic botanicals."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 leading-relaxed mb-5 max-w-xl", children: "Sulfur and tea tree have been used for inflamed scalp conditions for over a century — long before they showed up in modern dermatology. Dermveda combines those proven actives with neem, karanja and rosemary in a clean, fragrance-free base, dosed at HPUS clinical strengths." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 leading-relaxed max-w-xl", children: "The result is a fragrance-free, sulfate-free, dye-free shampoo gentle enough for kids 2+ — yet decisive enough to break the folliculitis cycle for adults who've tried everything." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5", children: [
        { title: "Antimicrobial", meaning: "Calms folliculitis bumps", how: "Sulfur 8X HPUS and tea tree target the Malassezia yeast and Staph bacteria around the follicle.", icon: ShieldCheck },
        { title: "Barrier repair", meaning: "Ends the itch loop", how: "Karanja oil, glycerin and olive oil rebuild the lipid layer that medicated shampoos strip away.", icon: Leaf },
        { title: "Fragrance-free", meaning: "Sensitive-scalp safe", how: "No sulfates, parabens, fragrance or dyes — gentle enough for daily use, kids 2+ and color-treated hair.", icon: Eye }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-2xl p-7 lg:p-8 border border-foreground/5 hover:shadow-sm transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5 text-accent mb-5", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2", children: p.meaning }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl lg:text-3xl text-ink-deep mb-4", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 leading-relaxed", children: p.how })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-3xl mx-auto px-5 lg:px-10 py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Customer questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl", children: "Answers from our derm team" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `q${i}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-serif text-lg md:text-xl py-5", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed text-[15px] pb-5 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: f.a }) })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reviews", className: "max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-accent mb-3", children: "Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mb-5", children: "Trusted by 312 verified scalps." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl text-ink-deep", children: "4.7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-accent text-accent" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Based on 312 verified reviews" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-md text-xs tracking-[0.12em] uppercase", children: "Write a Review" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 space-y-3", children: [
        { title: "Finally — something that doesn't smell like tar.", body: "I'd been on coal tar shampoo for two years. Stinks, dries my hair, and my folliculitis came back every winter. Three weeks on this and the bumps along my hairline are gone. Hair feels soft, not stripped.", name: "Marcus R.", scalp: "Folliculitis · Oily" },
        { title: "Stopped scratching for the first time in months", body: "I didn't realize how much I was scratching until I stopped. Used it twice a week. By week two, the itch was gone. By week four, no more dandruff on my black work shirts. Worth every dollar.", name: "Priya K.", scalp: "Seborrheic dandruff" },
        { title: "Gentle enough for my sensitive scalp", body: "Other medicated shampoos burn my scalp. This one doesn't. No fragrance, no sting. The little bumps at my nape that I've had for years are flattening. I'm cautiously optimistic.", name: "Jordan T.", scalp: "Sensitive · Folliculitis" }
      ].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/30 rounded-xl p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-accent text-accent" }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg text-ink-deep mb-2", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: r.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-muted-foreground tracking-wider uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "— ",
            r.name,
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "verified buyer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.scalp })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[900px] mx-auto px-5 lg:px-10 py-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-3", children: "Legal disclaimer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Always read and follow label directions. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult a licensed dermatologist before starting any new treatment, particularly for children, during pregnancy, or alongside prescription medications." })
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
          { h: "Shop", l: ["Scalp Care", "Hair Care", "Folliculitis", "Best Sellers"] },
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: turmericSoap, alt: "", className: "w-10 h-10 rounded-md object-cover bg-peach ring-2 ring-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: spsSerum, alt: "", className: "w-10 h-10 rounded-md object-cover bg-peach ring-2 ring-background" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-ink-deep/70 tracking-wide truncate", children: "Shampoo + Soap + Serum" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5 mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-[16px] leading-none text-ink-deep", children: [
                "$",
                (16.99 + 14.99 + 24.99 - (16.99 + 14.99 + 24.99) * 0.2).toFixed(0)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground line-through leading-none", children: "$56.97" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium tracking-[0.14em] uppercase text-accent leading-none", children: "Save 20%" })
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

function FolliculitisShampooIsland() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageRoot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolliculitisShampoo, {}) });
}

const $$FolliculitisShampoo = createComponent(async ($$result, $$props, $$slots) => {
  const staticMeta = {
    title: "Folliculitis Shampoo | Celsius Herbs",
    description: "Therapeutic shampoo formulated for folliculitis-prone scalp and skin.",
    canonical: "https://celsiusherbs.com/folliculitis-shampoo"
  };
  const merged = await mergeShopifyProductSeo(SHOPIFY_PRODUCT_HANDLES.folliculitisShampoo, staticMeta);
  const { jsonLd, ...layoutProps } = merged;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...layoutProps, "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "FolliculitisShampooIsland", FolliculitisShampooIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/islands/pdp/FolliculitisShampoo", "client:component-export": "default" })} ` })}`;
}, "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/folliculitis-shampoo.astro", void 0);

const $$file = "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/folliculitis-shampoo.astro";
const $$url = "/folliculitis-shampoo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FolliculitisShampoo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
