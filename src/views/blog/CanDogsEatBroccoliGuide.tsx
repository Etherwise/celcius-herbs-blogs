import { useEffect, useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  Leaf,
  ShieldCheck,
  Sparkles,
  XCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CAN_DOGS_EAT_BROCCOLI_FAQS as FAQS } from "@/lib/blog/can-dogs-eat-broccoli-faqs";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { LiteYouTube } from "@/components/LiteYouTube";

import imgHero from "@/assets/blog/can-dogs-eat-broccoli-hero.webp";
import imgSafety from "@/assets/blog/can-dogs-eat-broccoli-safety.webp";
import imgIsothiocyanate from "@/assets/blog/can-dogs-eat-broccoli-isothiocyanate.webp";
import imgServing from "@/assets/blog/can-dogs-eat-broccoli-serving.webp";
import imgRawcooked from "@/assets/blog/can-dogs-eat-broccoli-rawcooked.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "safety", label: "Is broccoli safe?" },
  { id: "isothiocyanate", label: "Isothiocyanate warning" },
  { id: "serving", label: "How much is safe?" },
  { id: "rawcooked", label: "Raw or cooked?" },
  { id: "video", label: "Dr. Alex video" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const NUTRITION_ROWS = [
  { nutrient: "Calories", per100g: "~34 kcal" },
  { nutrient: "Carbohydrates", per100g: "~6.6 g" },
  { nutrient: "— of which sugars", per100g: "~1.7 g" },
  { nutrient: "Dietary fibre", per100g: "~2.6 g" },
  { nutrient: "Protein", per100g: "~2.8 g" },
  { nutrient: "Vitamin C", per100g: "~89 mg" },
  { nutrient: "Vitamin K", per100g: "~101.6 µg" },
  { nutrient: "Folate", per100g: "~63 µg" },
  { nutrient: "Potassium", per100g: "~316 mg" },
];

const SERVING_ROWS = [
  { size: "Small", weight: "Under 10 kg", amount: "1–2 small florets", note: "A few times per week" },
  { size: "Medium", weight: "10–25 kg", amount: "2–3 florets", note: "A few times per week" },
  { size: "Large", weight: "Over 25 kg", amount: "3–5 bite-sized pieces", note: "Occasionally" },
];

const THRESHOLD_ROWS = [
  { pct: "Under 10%", effect: "Safe for most healthy adult dogs", color: "text-green-700 bg-green-50" },
  { pct: "10–25%", effect: "Digestive issues likely — gas, loose stool, vomiting", color: "text-amber-700 bg-amber-50" },
  { pct: "Over 25%", effect: "Toxic — severe GI distress, vet care required", color: "text-red-700 bg-red-50" },
];

const REFERENCES = [
  "American Kennel Club (AKC). (2022). Can Dogs Eat Broccoli?",
  "PetMD. (2023). Can Dogs Eat Broccoli?",
  "Purina. (2023). Can Dogs Eat Broccoli?",
  "Chewy. (2023). Can Dogs Eat Broccoli? What You Need to Know.",
  "Hill's Pet Nutrition. (2022). Can Dogs Eat Broccoli?",
  "VCA Hospitals. (2021). Allium Species Poisoning in Dogs and Cats.",
  "USDA FoodData Central. (2019). Broccoli, raw — nutrient data.",
];

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
        {n}
      </span>
      <div className="h-px flex-1 bg-border" />
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
        {title}
      </span>
    </div>
  );
}

export default function CanDogsEatBroccoliGuide() {
  const [activeSection, setActiveSection] = useState("safety");
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-primary z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Hero */}
      <div className="bg-ink-deep text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-primary-foreground/70 mb-6">
              <Leaf className="w-3.5 h-3.5" /> Dog Nutrition · Safe Vegetables
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Can Dogs Eat Broccoli?
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Yes — plain and in small amounts. Broccoli gives dogs vitamin C,
              vitamin K, and fibre. The florets contain isothiocyanates that
              cause GI upset above 10% of daily diet and become toxic above
              25%. This guide covers the thresholds, serving sizes by weight,
              and raw vs cooked.
            </p>
            <figure className="rounded-2xl overflow-hidden mb-8">
              <img
                src={imgHero}
                alt="Border collie looking up at fresh broccoli florets on a wooden cutting board"
                className="w-full object-cover max-h-80"
                loading="eager"
              />
            </figure>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CheckCircle, label: "Safe under 10% of daily diet" },
                { icon: AlertTriangle, label: "Isothiocyanates in florets" },
                { icon: XCircle, label: "Stems: choking hazard raw" },
                { icon: ShieldCheck, label: "Serving guide by weight" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-3 py-1.5 text-sm text-primary-foreground/80"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-3">
                Contents
              </p>
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block text-sm py-1 px-3 rounded-lg transition-colors ${
                    activeSection === s.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Article body */}
          <article className="min-w-0 space-y-16">

            {/* Chapter 01 — Is Broccoli Safe? */}
            <section id="safety" className="scroll-mt-24">
              <SectionLabel n="01" title="Is Broccoli Safe for Dogs?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgSafety}
                  alt="Small bite-sized broccoli florets on a white ceramic plate on a wooden surface"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes — dogs can eat broccoli safely in small amounts when served
                plain. The AKC and PetMD both describe broccoli as a safe,
                healthy vegetable treat for dogs when unseasoned and kept well
                within the 10% daily threshold.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2022][Source: PetMD, 2023]
                </span>{" "}
                The vitamin C, vitamin K, and fibre are genuine health benefits
                that support your dog's immune system when you feed broccoli in
                the right portions.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm text-green-800">Safe</span>
                  </div>
                  <p className="text-sm text-green-900/80 leading-relaxed">
                    Plain broccoli florets or lightly steamed broccoli stems,
                    cut into small bite-sized pieces, no seasonings — under 10%
                    of daily diet.
                  </p>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-sm text-red-800">Not safe</span>
                  </div>
                  <p className="text-sm text-red-900/80 leading-relaxed">
                    Broccoli cooked with garlic (toxic), onion (toxic), butter,
                    oil, salt, or cheese sauce. Large raw broccoli stems.
                    Broccoli over 25% of daily diet.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-base mb-4">Nutrition at a glance</h3>
              <div className="overflow-x-auto rounded-2xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/40 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Nutrient</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Per 100 g raw</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NUTRITION_ROWS.map((row, i) => (
                      <tr key={row.nutrient} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="px-4 py-2.5 text-foreground">{row.nutrient}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{row.per100g}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground/60 mb-6">
                [Source: USDA FoodData Central, 2019]
              </p>

              <h3 className="font-semibold text-base mb-3">Who should skip broccoli entirely</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    color: "bg-red-50 border-red-100",
                    iconColor: "text-red-600",
                    title: "Sensitive stomachs",
                    body: "Broccoli's fibre and isothiocyanates can trigger stomach upset and gas even at small amounts. [Source: Purina, 2023][Source: AKC, 2022]",
                  },
                  {
                    color: "bg-amber-50 border-amber-100",
                    iconColor: "text-amber-600",
                    title: "Thyroid conditions",
                    body: "Cruciferous vegetables can affect thyroid function in some dogs. Check with your vet before feeding broccoli.",
                  },
                  {
                    color: "bg-orange-50 border-orange-100",
                    iconColor: "text-orange-600",
                    title: "Puppies",
                    body: "Smaller body weight means the 10% daily threshold is reached with very little broccoli. Introduce cautiously with one tiny floret. [Source: PetMD, 2023]",
                  },
                ].map(({ color, iconColor, title, body }) => (
                  <div key={title} className={`rounded-2xl border p-4 ${color}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className={`w-4 h-4 ${iconColor}`} />
                      <span className="font-semibold text-sm">{title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Chapter 02 — Isothiocyanate Warning */}
            <section id="isothiocyanate" className="scroll-mt-24">
              <SectionLabel n="02" title="The Isothiocyanate Warning" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgIsothiocyanate}
                  alt="Dramatic close-up of a broccoli head on dark cloth showing the floret structure"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>The critical number:</strong> broccoli is safe under
                    10% of daily diet. At 25% or above, isothiocyanates from
                    the florets are considered{" "}
                    <strong>toxic</strong> and require veterinary care.{" "}
                    <span className="text-xs text-amber-800/60">
                      [Source: AKC, 2022]
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Broccoli florets contain{" "}
                <strong>isothiocyanates</strong> — plant compounds derived from
                glucosinolates that directly irritate a dog's digestive system.
                They're not a contaminant; they're intrinsic to all cruciferous
                vegetables (broccoli, cauliflower, Brussels sprouts, cabbage).
                In dogs, they cause gastric irritation and digestive issues
                ranging from mild gas to severe stomach upset.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2022][Source: Purina, 2023]
                </span>
              </p>

              <h3 className="font-semibold text-base mb-4">The thresholds</h3>
              <div className="space-y-2 mb-6">
                {THRESHOLD_ROWS.map(({ pct, effect, color }) => (
                  <div key={pct} className={`rounded-xl px-4 py-3 flex gap-4 items-center text-sm font-medium ${color}`}>
                    <span className="w-24 flex-shrink-0">{pct}</span>
                    <span className="font-normal">{effect}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/60 mb-6">
                [Source: AKC, 2022][Source: Purina, 2023]
              </p>

              <h3 className="font-semibold text-base mb-3">Why do dogs fart after eating broccoli?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dogs fart from broccoli because both the high fibre and the
                isothiocyanates in the florets ferment in the gut and produce
                gas.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2022]
                </span>{" "}
                Some gas is normal when feeding any cruciferous vegetable. It
                becomes a concern when accompanied by bloating, stomach upset,
                or abdominal pain — those are signs the portion was too large.
              </p>

              <h3 className="font-semibold text-base mb-3">Signs of too much broccoli</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Excessive gas and flatulence",
                  "Abdominal bloating — restlessness, belly-checking, stretching",
                  "Soft stool or diarrhoea",
                  "Vomiting",
                  "Loss of appetite or lethargy with significant GI upset",
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">•</span> {s}
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-900 leading-relaxed">
                  <strong>Contact your veterinarian immediately</strong> if your
                  dog consumed a large amount of broccoli (near or above 25% of
                  daily food), or if you see persistent vomiting, bloody
                  diarrhoea, severe abdominal pain, or lethargy.{" "}
                  <span className="text-xs text-red-800/60">
                    [Source: AKC, 2022]
                  </span>
                </p>
              </div>
            </section>

            {/* Chapter 03 — How Much Is Safe? */}
            <section id="serving" className="scroll-mt-24">
              <SectionLabel n="03" title="How Much Is Safe?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgServing}
                  alt="Three white ceramic bowls with different amounts of broccoli florets for small, medium, and large dogs"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use the <strong>10% treat rule</strong>: all extras — including
                vegetables — should account for no more than 10% of your dog's
                daily caloric intake, with 90% from a complete, balanced diet.
                This prevents gastrointestinal upset and nutritional imbalance.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2022][Source: Hill's Pet Nutrition, 2022]
                </span>
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/40 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Dog size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Weight</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Amount</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SERVING_ROWS.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="px-4 py-2.5 font-medium">{row.size}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{row.weight}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{row.amount}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-semibold text-base mb-3">Introducing broccoli to your dog for the first time</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Start with <strong>one very small piece</strong> — a single
                small floret. Wait 24–48 hours and watch for gas, stomach
                upset, or soft stool. If there's no adverse reaction, you can
                offer small portions a few times per week.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: PetMD, 2023]
                </span>{" "}
                Some dogs are more sensitive to cruciferous vegetables than
                others — a slow introduction always wins.
              </p>

              <h3 className="font-semibold text-base mb-3">Can dogs eat broccoli stems safely?</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900 leading-relaxed space-y-2">
                    <p>
                      Broccoli stems are not toxic, but their tough, fibrous
                      bulk is a <strong>choking hazard and intestinal
                      blockage risk</strong> — especially raw and in large
                      pieces.{" "}
                      <span className="text-xs text-amber-800/60">
                        [Source: PetMD, 2023]
                      </span>
                    </p>
                    <p>
                      To serve broccoli stems safely: slice into very small
                      bite-sized pieces, steam until soft, and always
                      supervise. Never offer large raw chunks of stalk.{" "}
                      <span className="text-xs text-amber-800/60">
                        [Source: PetMD, 2023][Source: Chewy, 2023]
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter 04 — Raw or Cooked */}
            <section id="rawcooked" className="scroll-mt-24">
              <SectionLabel n="04" title="Raw or Cooked: Which Is Better?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgRawcooked}
                  alt="Side-by-side: raw broccoli florets and lightly steamed broccoli on a wooden board"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Both raw and cooked broccoli are options for dogs — with
                different trade-offs that matter depending on your dog's size
                and digestive sensitivity.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Raw broccoli",
                    verdict: "Safe — with caveats",
                    color: "border-blue-200 bg-blue-50",
                    points: [
                      "Retains the most vitamin C and heat-sensitive nutrients",
                      "Crunchy texture many dogs enjoy",
                      "Harder to digest — causes more gas and stomach upset in sensitive dogs",
                      "Greater choking risk — large raw pieces, especially stems, can block the throat or gut",
                      "Cut florets into very small bite-sized pieces; never serve raw stems in large chunks",
                    ],
                    source: "[Source: PetMD, 2023][Source: AKC, 2022]",
                  },
                  {
                    title: "Lightly steamed or cooked broccoli",
                    verdict: "Recommended for most dogs",
                    color: "border-green-200 bg-green-50",
                    points: [
                      "Softer texture — easier to chew and digest",
                      "Reduced choking risk, especially important for stems",
                      "Light steaming preserves more nutrients than prolonged boiling",
                      "Must always be plain — no garlic, onion, butter, oil, salt, or cheese",
                    ],
                    source: "[Source: PetMD, 2023][Source: Chewy, 2023]",
                  },
                  {
                    title: "Frozen broccoli",
                    verdict: "Safe (plain only)",
                    color: "border-sky-200 bg-sky-50",
                    points: [
                      "Plain frozen broccoli with no sauces or seasoning is safe",
                      "Thaw and cut into bite-sized pieces before serving",
                      "Avoid any product with added flavourings or butter",
                    ],
                    source: "[Source: AKC, 2022][Source: Chewy, 2023]",
                  },
                ].map(({ title, verdict, color, points, source }) => (
                  <div key={title} className={`rounded-2xl border p-5 ${color}`}>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-semibold text-sm">{title}</span>
                      <span className="text-xs text-muted-foreground">— {verdict}</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground mb-2">
                      {points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="flex-shrink-0">•</span> {p}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground/60">{source}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-base mb-3">How to prepare broccoli for your dog — step by step</h3>
              <div className="bg-muted/30 rounded-2xl p-5">
                <ol className="space-y-3">
                  {[
                    "Choose fresh or plain frozen broccoli — no seasoned or sauced products.",
                    "Wash thoroughly under cool water to remove surface residues.",
                    "Separate the florets from thick stems — florets are easier to digest.",
                    "Cut into small, bite-sized pieces appropriate for your dog's size.",
                    "Steam lightly in plain water until just tender — this is the recommended method. Skip all seasoning.",
                    "Cool to room temperature before serving.",
                    "Serve plain — no garlic, onion, butter, oil, salt, or cheese.",
                    "Start with one small piece when introducing broccoli as a new food and monitor for 24 hours.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-medium">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-xs text-muted-foreground/60">
                  [Source: PetMD, 2023][Source: AKC, 2022][Source: Chewy, 2023]
                </p>
              </div>
            </section>

            {/* Video */}
            <section id="video" className="scroll-mt-24">
              <SectionLabel n="05" title="Related Video: Human Foods and Dogs" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Alex C. walks through which human foods are safe for dogs
                and why preparation and portion control matter — the same
                principles apply when feeding broccoli to your dog.
              </p>
              <LiteYouTube
                id="juUE1VeOsU8"
                title="Which Human Foods Are Safe for Dogs? | Dr. Alex"
                className="rounded-2xl overflow-hidden"
              />
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <SectionLabel n="06" title="Frequently Asked Questions" />
              <Accordion type="single" collapsible className="space-y-3">
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-border rounded-2xl px-5 data-[state=open]:bg-muted/30"
                  >
                    <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Reviewed by Dr. Alex */}
            <ReviewedByDrAlex />

            {/* References */}
            <section id="references" className="scroll-mt-24">
              <SectionLabel n="07" title="References" />
              <ol className="space-y-2">
                {REFERENCES.map((ref, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-muted-foreground/40 flex-shrink-0">{i + 1}.</span>
                    {ref}
                  </li>
                ))}
              </ol>
            </section>

            {/* CTA */}
            <section className="bg-ink-deep text-primary-foreground rounded-3xl p-8 text-center">
              <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl mb-3">Support Your Dog's Everyday Wellness</h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                Broccoli is a great occasional treat, but consistent daily
                support goes further. PetGlow Drops offer a broad-spectrum
                botanical blend formulated for digestion, immune function, and
                coat health — every day.
              </p>
              <Button
                asChild
                className="bg-primary-foreground text-ink-deep hover:bg-primary-foreground/90 rounded-full px-8"
              >
                <a
                  href="https://celsiusherbs.com/products/petglow-drops"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop PetGlow Drops
                </a>
              </Button>
              <p className="mt-6 text-xs text-primary-foreground/40 leading-relaxed max-w-sm mx-auto">
                This content is for educational purposes only and does not
                constitute veterinary advice. Consult your vet before changing
                your dog's diet or introducing new foods, especially if your
                dog has a health condition.
              </p>
            </section>

            {/* More articles */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">More articles</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {BLOG_ARTICLES.filter((a) => a.href !== "/can-dogs-eat-broccoli").map((a) => (
                  <a
                    key={a.href}
                    href={a.href}
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-muted/70 rounded-full px-4 py-2 transition-colors border border-border"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
