import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  Leaf,
  ShieldCheck,
  Snowflake,
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
import { CAN_DOGS_EAT_BLUEBERRIES_FAQS as FAQS } from "@/lib/blog/can-dogs-eat-blueberries-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { LiteYouTube } from "@/components/LiteYouTube";

import imgHero from "@/assets/blog/can-dogs-eat-blueberries-hero.webp";
import imgSafety from "@/assets/blog/can-dogs-eat-blueberries-safety.webp";
import imgNutrition from "@/assets/blog/can-dogs-eat-blueberries-nutrition.webp";
import imgServing from "@/assets/blog/can-dogs-eat-blueberries-serving.webp";
import imgFrozenFresh from "@/assets/blog/can-dogs-eat-blueberries-frozenFresh.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "safety", label: "Are blueberries safe?" },
  { id: "nutrition", label: "Nutrition benefits" },
  { id: "serving", label: "How many per day?" },
  { id: "video", label: "Dr. Alex video" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const NUTRITION_ROWS = [
  { nutrient: "Calories", per100g: "~57 kcal" },
  { nutrient: "Carbohydrates", per100g: "~14.5 g" },
  { nutrient: "— of which natural sugars", per100g: "~10.0 g" },
  { nutrient: "Dietary fibre", per100g: "~2.4 g" },
  { nutrient: "Protein", per100g: "~0.74 g" },
  { nutrient: "Vitamin C", per100g: "~9.7 mg" },
  { nutrient: "Vitamin K", per100g: "~19.3 µg" },
  { nutrient: "Manganese", per100g: "~0.34 mg" },
];

const SERVING_ROWS = [
  { size: "Small / Toy", weight: "Under 10 kg", amount: "2–4 blueberries", note: "Halve or mash for very small breeds" },
  { size: "Medium", weight: "10–25 kg", amount: "5–10 blueberries", note: "Whole berries fine" },
  { size: "Large", weight: "Over 25 kg", amount: "10–15 blueberries", note: "Whole berries fine" },
];

const REFERENCES = [
  "PetMD. (2024). Can Dogs Eat Blueberries?",
  "Hill's Pet Nutrition. (2024). Can Dogs Eat Blueberries?",
  "Purina. (2024). Can Dogs Eat Blueberries?",
  "Chewy. (2024). Can Dogs Eat Blueberries?",
  "MSD Veterinary Manual. (2024). Nutritional Requirements and Related Diseases of Dogs.",
  "USDA FoodData Central. (2025). Blueberries, raw — nutrient data.",
  "Animal Clinic of Milford. (2024). Can Dogs Eat Blueberries?",
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

export default function CanDogsEatBlueberriesGuide() {
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
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </a>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-primary-foreground/70 mb-6">
              <Leaf className="w-3.5 h-3.5" /> Dog Nutrition · Safe Fruits
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Can Dogs Eat Blueberries?
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Yes — plain and in appropriate amounts. Blueberries are one of
              the best fruit treats for dogs: low in calories, rich in
              anthocyanin antioxidants, and genuinely beneficial when portioned
              correctly. This guide covers the antioxidant profile, serving
              sizes by weight, frozen vs fresh, and choking risks.
            </p>
            <figure className="rounded-2xl overflow-hidden mb-8">
              <img
                src={imgHero}
                alt="Golden retriever looking up at fresh blueberries on a wooden kitchen counter"
                className="w-full object-cover max-h-80"
                loading="eager"
              />
            </figure>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CheckCircle, label: "Non-toxic, safe in moderation" },
                { icon: Zap, label: "Anthocyanin antioxidants" },
                { icon: ShieldCheck, label: "Serving guide by weight" },
                { icon: Snowflake, label: "Frozen: choking risk for small breeds" },
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

            {/* Chapter 01 — Are Blueberries Safe? */}
            <section id="safety" className="scroll-mt-24">
              <SectionLabel n="01" title="Are Blueberries Safe for Dogs?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgSafety}
                  alt="Fresh blueberries piled on a white ceramic plate on a warm wooden surface"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes — dogs can eat blueberries safely. Blueberries are
                non-toxic, and PetMD, Purina, and Hill's Pet Nutrition all
                confirm that feeding blueberries to dogs is safe in plain,
                moderate amounts.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: PetMD, 2024][Source: Purina, 2024][Source: Hill's Pet Nutrition, 2024]
                </span>{" "}
                The health benefits from anthocyanin antioxidants, vitamins C
                and K, and fibre make blueberries one of the best fruit
                choices for a dog's overall health and balanced diet.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm text-green-800">Safe</span>
                  </div>
                  <p className="text-sm text-green-900/80 leading-relaxed">
                    Fresh or plain frozen blueberries, served whole for medium
                    and large dogs, halved or mashed for small breeds.
                    A few blueberries per day within the 10% treat rule.
                  </p>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-sm text-red-800">Not safe</span>
                  </div>
                  <p className="text-sm text-red-900/80 leading-relaxed">
                    Blueberry muffins, blueberry yogurt with added sugar,
                    blueberry-flavoured treats containing xylitol, or any
                    baked blueberry product with chocolate or raisins.{" "}
                    <span className="text-xs text-red-800/60">
                      [Source: PetMD, 2024][Source: Chewy, 2024]
                    </span>
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-base mb-3">Who should approach blueberries cautiously</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    color: "bg-amber-50 border-amber-100",
                    iconColor: "text-amber-600",
                    title: "Very small breeds",
                    body: "Whole blueberries can be a choking hazard for toy breeds under 5 kg. Halve or mash before feeding, and always thaw frozen blueberries first. [Source: Hill's Pet Nutrition, 2024]",
                  },
                  {
                    color: "bg-red-50 border-red-100",
                    iconColor: "text-red-600",
                    title: "Diabetic dogs",
                    body: "Blueberries contain natural sugars. Count them against carbohydrate management and discuss with your vet before feeding blueberries to dogs with diabetes. [Source: MSD Veterinary Manual, 2024]",
                  },
                  {
                    color: "bg-orange-50 border-orange-100",
                    iconColor: "text-orange-600",
                    title: "Sensitive stomachs",
                    body: "Fibre and natural sugars can cause digestive upset and upset stomach in GI-sensitive dogs even in small amounts. Introduce slowly. [Source: PetMD, 2024]",
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

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong>Allergic reactions to blueberries in dogs</strong> are
                  uncommon but possible. Signs include itching, hives, facial
                  swelling, or vomiting shortly after eating blueberries. Stop
                  feeding blueberries and contact your vet if any of these
                  occur. Reactions affecting breathing require immediate
                  emergency care.{" "}
                  <span className="text-xs text-blue-800/60">
                    [Source: PetMD, 2024]
                  </span>
                </p>
              </div>
            </section>

            {/* Chapter 02 — Blueberry Nutrition Benefits */}
            <section id="nutrition" className="scroll-mt-24">
              <SectionLabel n="02" title="Blueberry Nutrition Benefits" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgNutrition}
                  alt="Overhead flat lay of blueberries on an unfinished wooden board with botanical labels"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The nutritional benefits of blueberries for dogs are genuinely
                impressive for a fruit this low in calories. Per 100 g of raw
                blueberries:{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: USDA FoodData Central, 2025]
                </span>
              </p>
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

              <h3 className="font-semibold text-base mb-4">
                Anthocyanins and vitamins C and K — the standout nutrients
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The health benefits of blueberries start with{" "}
                <strong>anthocyanins</strong> — the flavonoid antioxidants
                that give blueberries their deep blue-purple colour. Anthocyanins
                help neutralise free radicals linked to oxidative stress, cellular
                ageing, and inflammation in dogs. Current veterinary guidance
                describes blueberries as genuinely antioxidant-rich, supporting
                a dog's overall health and immune system.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: Hill's Pet Nutrition, 2024][Source: MSD Veterinary Manual, 2024]
                </span>
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    label: "Vitamin C",
                    detail: "An antioxidant that adds to the antioxidant load and supports immune function. Dogs synthesise vitamin C themselves, so dietary intake from blueberries supplements what they already produce.",
                    source: "[Source: MSD Veterinary Manual, 2024]",
                  },
                  {
                    label: "Vitamin K",
                    detail: "Supports normal blood clotting and bone health — one of the vitamins in blueberries most directly relevant to dog nutrition.",
                    source: "[Source: PetMD, 2024]",
                  },
                  {
                    label: "Manganese",
                    detail: "Supports bone development, energy metabolism, and ligament function. Part of the vitamins and minerals blueberries provide for a dog's nutrition.",
                    source: "[Source: PetMD, 2024][Source: USDA FoodData Central, 2025]",
                  },
                  {
                    label: "Dietary fibre",
                    detail: "Supports digestive regularity in small amounts. Too many blueberries can cause digestive upset and loose stool.",
                    source: "[Source: PetMD, 2024]",
                  },
                ].map(({ label, detail, source }) => (
                  <div key={label} className="flex gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    <div className="min-w-0">
                      <span className="font-semibold text-sm">{label}</span>
                      <span className="text-sm text-muted-foreground"> — {detail} </span>
                      <span className="text-xs text-muted-foreground/60">{source}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <h3 className="font-semibold text-sm text-green-800 mb-2">
                  Why blueberries beat most fruit treats on calories
                </h3>
                <p className="text-sm text-green-900/80 leading-relaxed">
                  At ~57 kcal per 100 g and only ~10 g of natural sugars, a
                  single blueberry is under 2 kcal. Even 10 berries is under
                  10 kcal — making blueberries an excellent low-calorie healthy
                  snack and training treat for dogs on calorie-restricted diets.
                  Pet owners can serve blueberries to dogs without significantly
                  affecting dog's daily calorie intake.{" "}
                  <span className="text-xs text-green-800/60">
                    [Source: Hill's Pet Nutrition, 2024][Source: PetMD, 2024]
                  </span>
                </p>
              </div>
            </section>

            {/* Chapter 03 — How Many Blueberries Per Day? */}
            <section id="serving" className="scroll-mt-24">
              <SectionLabel n="03" title="How Many Blueberries Per Day?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgServing}
                  alt="Three white ceramic bowls with different counts of blueberries for small, medium, and large dogs"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use the <strong>10% treat rule</strong>: all treats combined —
                including blueberries — should provide no more than 10% of your
                dog's daily calorie intake, with 90% from a complete, balanced
                diet and dog food.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: PetMD, 2024][Source: Hill's Pet Nutrition, 2024]
                </span>
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/40 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Dog size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Weight</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Per day</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Notes</th>
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
              <p className="text-xs text-muted-foreground/60 mb-6">
                [Source: Hill's Pet Nutrition, 2024][Source: PetMD, 2024]
              </p>

              <h3 className="font-semibold text-base mb-3">
                Choking hazard in small breeds — how to reduce it
              </h3>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-2 text-sm text-amber-900">
                    <p>
                      Whole blueberries can be a choking hazard for very small
                      dogs even though they are soft. Frozen blueberries are
                      firmer than fresh — they become harder and pose a greater
                      choking hazard for toy breeds.{" "}
                      <span className="text-xs text-amber-800/60">
                        [Source: Hill's Pet Nutrition, 2024][Source: Animal Clinic of Milford, 2024]
                      </span>
                    </p>
                    <ul className="space-y-1">
                      {[
                        "Halve or quarter whole fresh blueberries for dogs under 5 kg",
                        "Thaw frozen blueberries before giving to small breeds — avoid rock-hard berries",
                        "Mash for puppies and toy breeds — try a smear on a lick mat",
                        "Supervise snack time for any dog that gulps food quickly",
                      ].map((tip) => (
                        <li key={tip} className="flex gap-2">
                          <span className="flex-shrink-0 text-amber-600">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-base mb-4">
                Frozen vs fresh — which is better for dogs?
              </h3>
              <figure className="rounded-2xl overflow-hidden border border-border mb-4">
                <img
                  src={imgFrozenFresh}
                  alt="Side by side: fresh blueberries in a ceramic bowl and frozen blueberries in an identical bowl"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <div className="space-y-3 mb-6">
                {[
                  {
                    title: "Fresh blueberries",
                    verdict: "Best everyday option",
                    color: "border-green-200 bg-green-50",
                    points: [
                      "Soft texture — easy for any size dog to eat, no prep needed",
                      "Lowest choking risk",
                      "Best for very small breeds, puppies, and dogs new to blueberries",
                    ],
                    source: "[Source: Hill's Pet Nutrition, 2024]",
                  },
                  {
                    title: "Frozen blueberries (plain, unsweetened)",
                    verdict: "Safe for medium and large dogs",
                    color: "border-sky-200 bg-sky-50",
                    points: [
                      "A refreshing warm-weather treat and enrichment option",
                      "Firmer texture — thaw first or halve for small breeds",
                      "Nutritionally equivalent to fresh — vitamins and minerals are retained",
                    ],
                    source: "[Source: PetMD, 2024][Source: Chewy, 2024]",
                  },
                  {
                    title: "Avoid",
                    verdict: "Not the same as plain blueberries",
                    color: "border-red-200 bg-red-50",
                    points: [
                      "Blueberries in syrup or juice with added sugar",
                      "Blueberry-flavoured dog treats with sweeteners or xylitol",
                      "Any frozen blueberry product with added ingredients",
                    ],
                    source: "[Source: PetMD, 2024][Source: Chewy, 2024]",
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

              <h3 className="font-semibold text-base mb-3">
                Introducing blueberries to your dog's diet
              </h3>
              <div className="bg-muted/30 rounded-2xl p-5 mb-6">
                <ol className="space-y-3">
                  {[
                    "Start with 2–3 plain fresh blueberries regardless of dog size.",
                    "Wait 24 hours and watch for loose stool, digestive upset, or upset stomach.",
                    "If there's no adverse reaction, serve blueberries a few times per week within the table above.",
                    "For small breeds: halve or mash first; for frozen: always thaw before serving.",
                    "Never exceed the 10% daily treat rule across all treats combined.",
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
                  [Source: PetMD, 2024][Source: Hill's Pet Nutrition, 2024]
                </p>
              </div>

              <h3 className="font-semibold text-base mb-3">Signs of too many blueberries</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Too many blueberries cause digestive upset — not toxicity —
                from the natural sugars and fibre load:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                {[
                  "Soft stool or diarrhoea",
                  "Vomiting or upset stomach",
                  "Excessive gas and digestive upset",
                  "Reduced appetite",
                  "Diabetic dogs: monitor for blood glucose instability from natural sugars",
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">•</span> {s}
                  </li>
                ))}
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-900 leading-relaxed">
                  <strong>Contact your vet</strong> if symptoms persist beyond
                  24 hours, are severe, or if your dog shows signs of choking
                  or allergic reactions after eating blueberries.{" "}
                  <span className="text-xs text-red-800/60">
                    [Source: PetMD, 2024][Source: Animal Clinic of Milford, 2024]
                  </span>
                </p>
              </div>
            </section>

            {/* Video */}
            <section id="video" className="scroll-mt-24">
              <SectionLabel n="04" title="Related Video: Human Foods and Dogs" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Alex C. walks through which human foods are safe for dogs
                and why preparation and portion control matter — the same
                framework applies when feeding blueberries to dogs.
              </p>
              <LiteYouTube
                id="juUE1VeOsU8"
                title="Which Human Foods Are Safe for Dogs? | Dr. Alex"
                className="rounded-2xl overflow-hidden"
              />
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <SectionLabel n="05" title="Frequently Asked Questions" />
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
              <SectionLabel n="06" title="References" />
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
                Blueberries are a great antioxidant-rich treat, but consistent
                daily support goes further. PetGlow Drops offer a
                broad-spectrum botanical blend formulated for digestion, immune
                function, and coat health — every day.
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

          </article>
        </div>
      </div>
    </div>
  );
}
