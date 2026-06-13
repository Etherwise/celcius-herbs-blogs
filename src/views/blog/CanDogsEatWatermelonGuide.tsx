import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  Droplets,
  Leaf,
  ShieldCheck,
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
import { CAN_DOGS_EAT_WATERMELON_FAQS as FAQS } from "@/lib/blog/can-dogs-eat-watermelon-faqs";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { LiteYouTube } from "@/components/LiteYouTube";

import imgHero from "@/assets/blog/can-dogs-eat-watermelon-hero.webp";
import imgSafety from "@/assets/blog/can-dogs-eat-watermelon-safety.webp";
import imgSeedsRind from "@/assets/blog/can-dogs-eat-watermelon-seedsRind.webp";
import imgNutrition from "@/assets/blog/can-dogs-eat-watermelon-nutrition.webp";
import imgServing from "@/assets/blog/can-dogs-eat-watermelon-serving.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "safety", label: "Is watermelon safe?" },
  { id: "dangers", label: "Seeds & rind dangers" },
  { id: "nutrition", label: "Nutrition benefits" },
  { id: "serving", label: "How to serve safely" },
  { id: "video", label: "Dr. Alex video" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const NUTRITION_ROWS = [
  { nutrient: "Calories", per100g: "~30 kcal" },
  { nutrient: "Water", per100g: "~91–92%" },
  { nutrient: "Carbohydrates", per100g: "~7.5 g" },
  { nutrient: "— of which natural sugars", per100g: "~6.0 g" },
  { nutrient: "Dietary fibre", per100g: "~0.4 g" },
  { nutrient: "Protein", per100g: "~0.6 g" },
  { nutrient: "Vitamin A (RAE)", per100g: "~28 µg" },
  { nutrient: "Vitamin B6", per100g: "~0.045 mg" },
  { nutrient: "Vitamin C", per100g: "~8.1 mg" },
  { nutrient: "Lycopene", per100g: "several mg (varies)" },
  { nutrient: "Potassium", per100g: "~112 mg" },
];

const SERVING_ROWS = [
  { size: "Extra-small", weight: "Under 5 kg", amount: "1–2 small cubes", note: "A few times per week" },
  { size: "Small", weight: "5–10 kg", amount: "2–4 cubes", note: "A few times per week" },
  { size: "Medium", weight: "10–25 kg", amount: "4–6 cubes", note: "A few times per week" },
  { size: "Large", weight: "Over 25 kg", amount: "8–12 cubes", note: "A few times per week" },
];

const REFERENCES = [
  "American Kennel Club (AKC). (2022). Can Dogs Eat Watermelon?",
  "PetMD. (2023). Can Dogs Eat Watermelon?",
  "Purina. (2024). Can Dogs Eat Watermelon?",
  "Chewy. (2024). Can Dogs Eat Watermelon? What Owners Need to Know.",
  "Hill's Pet Nutrition. (2022). Can Dogs Eat Watermelon?",
  "VCA Hospitals. (2020). Gastrointestinal Foreign Bodies in Dogs.",
  "MSD Veterinary Manual. (2022). Nutritional Requirements and Related Diseases of Dogs.",
  "USDA FoodData Central. (2019). Watermelon, raw — nutrient data.",
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

export default function CanDogsEatWatermelonGuide() {
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

          {/* Previous articles nav */}
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/40 font-medium mb-2">
              More articles
            </p>
            <div className="flex flex-wrap gap-2">
              {BLOG_ARTICLES.filter((a) => a.href !== "/can-dogs-eat-watermelon").map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground bg-primary-foreground/8 hover:bg-primary-foreground/15 rounded-full px-3 py-1.5 transition-colors border border-primary-foreground/10"
                >
                  <ArrowLeft className="w-3 h-3" />
                  {a.label}
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-primary-foreground/70 mb-6">
              <Leaf className="w-3.5 h-3.5" /> Dog Nutrition · Safe Fruits
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Can Dogs Eat Watermelon?
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Yes — flesh only, seeds and rind always removed. Watermelon is
              one of the best summer treats for dogs: 92% water, lycopene
              antioxidants, and under 30 kcal per 100 g. This guide covers the
              seed and rind dangers, the full nutrition profile, and exact
              serving sizes by weight.
            </p>
            <figure className="rounded-2xl overflow-hidden mb-8">
              <img
                src={imgHero}
                alt="Labrador retriever looking up at a slice of fresh watermelon on a wooden kitchen counter"
                className="w-full object-cover max-h-80"
                loading="eager"
              />
            </figure>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CheckCircle, label: "Safe — flesh only" },
                { icon: AlertTriangle, label: "Seeds: blockage risk" },
                { icon: XCircle, label: "Rind: GI upset" },
                { icon: Droplets, label: "92% water — hydrating" },
                { icon: Zap, label: "Lycopene antioxidant" },
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

            {/* Chapter 01 — Is Watermelon Safe? */}
            <section id="safety" className="scroll-mt-24">
              <SectionLabel n="01" title="Is Watermelon Safe for Dogs?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgSafety}
                  alt="Fresh seedless watermelon cubes on a white ceramic plate on a warm wooden surface"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes — healthy dogs can safely eat watermelon when it is
                prepared correctly. The AKC, PetMD, Purina, and Hill's Pet
                Nutrition all confirm that watermelon is safe for dogs when
                served as plain, seedless, rind-free flesh in moderation.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2022][Source: PetMD, 2023][Source: Purina, 2024]
                </span>
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm text-green-800">Safe</span>
                  </div>
                  <p className="text-sm text-green-900/80 leading-relaxed">
                    Plain fresh watermelon flesh, all seeds removed, all rind
                    removed, cut into bite-sized chunks appropriate for your
                    dog's size. Frozen watermelon chunks are also fine.
                  </p>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-sm text-red-800">Not safe</span>
                  </div>
                  <p className="text-sm text-red-900/80 leading-relaxed">
                    Seeds (intestinal blockage), rind (GI upset and obstruction),
                    watermelon candy, watermelon-flavoured products with
                    xylitol or artificial sweeteners.{" "}
                    <span className="text-xs text-red-800/60">
                      [Source: AKC, 2022][Source: PetMD, 2023]
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
                <h3 className="font-semibold text-sm text-green-800 mb-2">
                  Benefits of watermelon for dogs
                </h3>
                <ul className="space-y-1.5 text-sm text-green-900/80">
                  {[
                    "~92% water — one of the best hydrating treats available",
                    "Lycopene carotenoid antioxidants that support a healthy immune system",
                    "Vitamins A, B6, and C for coat, immune, and metabolic health",
                    "~30 kcal per 100 g — very low calorie, fits the 10% treat rule easily",
                    "Potassium for electrolyte balance and muscle function",
                  ].map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-green-600 flex-shrink-0">•</span> {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-green-800/60">
                  [Source: AKC, 2022][Source: USDA FDC, 2019][Source: PetMD, 2023]
                </p>
              </div>

              <h3 className="font-semibold text-base mb-3">
                Who should approach watermelon cautiously
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    color: "bg-red-50 border-red-100",
                    iconColor: "text-red-600",
                    title: "Diabetic dogs",
                    body: "Watermelon contains natural sugars (~6 g/100 g) that can affect blood sugar levels. Consult your vet before feeding any fruit to a diabetic dog. [Source: MSD Veterinary Manual, 2022]",
                  },
                  {
                    color: "bg-amber-50 border-amber-100",
                    iconColor: "text-amber-600",
                    title: "Overweight dogs",
                    body: "All dog treats count toward the 10% daily calorie rule. Factor watermelon into the full treat budget even though it's low in calories. [Source: Hill's Pet Nutrition, 2022]",
                  },
                  {
                    color: "bg-orange-50 border-orange-100",
                    iconColor: "text-orange-600",
                    title: "Sensitive stomachs",
                    body: "GI-sensitive dogs with pancreatitis or IBD may react poorly even to small amounts of watermelon. Introduce very slowly. [Source: VCA, 2020]",
                  },
                  {
                    color: "bg-blue-50 border-blue-100",
                    iconColor: "text-blue-600",
                    title: "Small breeds & puppies",
                    body: "Seed and rind risk is higher in small dogs. Chunks must be appropriately small and serving always supervised. [Source: AKC, 2022]",
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

            {/* Chapter 02 — Seeds and Rind */}
            <section id="dangers" className="scroll-mt-24">
              <SectionLabel n="02" title="Seeds and Rind: The Hidden Dangers" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgSeedsRind}
                  alt="Halved watermelon with black seeds visible in the flesh alongside a cross-section showing the green rind"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Watermelon flesh is safe for dogs. Seeds and rind are not.
                Most incidents happen when preparation is skipped.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-3 text-sm text-red-900">
                      <p>
                        <strong>Seeds — intestinal blockage risk.</strong>{" "}
                        Watermelon seeds can be swallowed whole and lodge in
                        the digestive tract, particularly in small dogs or
                        when eaten in large quantities.{" "}
                        <span className="text-xs text-red-800/60">
                          [Source: AKC, 2022][Source: PetMD, 2023]
                        </span>
                      </p>
                      <p>
                        Signs of blockage: vomiting, inability to pass stool,
                        abdominal pain, lethargy. Severe cases may need
                        endoscopy or surgery.{" "}
                        <span className="text-xs text-red-800/60">
                          [Source: VCA, 2020]
                        </span>
                      </p>
                      <p>
                        Seeds also contain trace cyanogenic compounds. Far
                        lower than in stone-fruit pits, but removal is still
                        the standard recommendation — dogs can't chew and spit
                        seeds.{" "}
                        <span className="text-xs text-red-800/60">
                          [Source: MSD Vet Manual, 2022]
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-3 text-sm text-amber-900">
                      <p>
                        <strong>Rind — GI upset and obstruction risk.</strong>{" "}
                        The green outer skin and thick white inner layer are
                        insoluble fibre and cellulose that a dog's digestive
                        system handles poorly.{" "}
                        <span className="text-xs text-amber-800/60">
                          [Source: MSD Vet Manual, 2022]
                        </span>
                      </p>
                      <p>
                        Eating rind commonly causes vomiting, diarrhoea, gas,
                        and abdominal discomfort. In small dogs, large pieces
                        can cause intestinal obstruction — and the rind is
                        firm enough to be a choking hazard.{" "}
                        <span className="text-xs text-amber-800/60">
                          [Source: PetMD, 2023][Source: VCA, 2020]
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 border border-border rounded-2xl p-5">
                <h3 className="font-semibold text-sm mb-3">
                  The two rules for safe watermelon
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-medium">1</span>
                    <span><strong>Remove all seeds</strong> — black seeds and firm white seeds. Even seedless varieties have undeveloped white seeds; check every slice.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-medium">2</span>
                    <span><strong>Remove all rind</strong> — the green outer skin and the entire thick white layer. Feed only the soft red or yellow flesh.</span>
                  </li>
                </ol>
              </div>
            </section>

            {/* Chapter 03 — Watermelon Nutrition */}
            <section id="nutrition" className="scroll-mt-24">
              <SectionLabel n="03" title="Watermelon Nutrition for Dogs" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgNutrition}
                  alt="Overhead flat lay of diced watermelon with botanical data cards on a wooden board"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Watermelon delivers a meaningful nutrient profile at very low
                calorie cost. Per 100 g of raw watermelon flesh:{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: USDA FoodData Central, 2019]
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
                Hydration — watermelon is mostly water
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                  <Droplets className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900 leading-relaxed">
                    At ~92% water by weight, watermelon is one of the most
                    hydrating treats you can give a dog. Chilled or frozen
                    watermelon on a hot day helps dogs stay cool and take in
                    extra fluid. The potassium content also supports electrolyte
                    balance and muscle function — a real bonus alongside the
                    hydration.{" "}
                    <span className="text-xs text-blue-800/60">
                      [Source: USDA FDC, 2019][Source: AKC, 2022]
                    </span>
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-base mb-4">Lycopene — the standout antioxidant</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lycopene is the red carotenoid pigment and antioxidant that
                gives watermelon its colour. Watermelon is one of the richer
                lycopene sources among common fruits. In dogs, lycopene and
                carotenoid antioxidants help neutralise reactive oxygen species
                linked to oxidative stress, inflammation, and cellular ageing.
                Some veterinary diets include carotenoids to support a healthy
                immune system, joint health, and cognitive function.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: MSD Vet Manual, 2022][Source: Hill's, 2020][Source: Purina, 2023]
                </span>
              </p>

              <div className="space-y-3 mb-6">
                {[
                  {
                    label: "Vitamin A",
                    detail: "Supports vision, skin and coat health, and immune function. Watermelon adds carotenoids; complete dog food covers the main requirement.",
                    source: "[Source: MSD Vet Manual, 2022]",
                  },
                  {
                    label: "Vitamin B6",
                    detail: "Supports amino acid metabolism, neurotransmitter synthesis, and red blood cell function. A minor contributor from watermelon alongside regular food.",
                    source: "[Source: MSD Vet Manual, 2022]",
                  },
                  {
                    label: "Vitamin C",
                    detail: "Dogs synthesise their own; extra from watermelon adds antioxidant support to a dog's health without being essential.",
                    source: "[Source: MSD Vet Manual, 2022]",
                  },
                ].map(({ label, detail, source }) => (
                  <div key={label} className="flex gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    <div>
                      <span className="font-semibold text-sm">{label}</span>
                      <span className="text-sm text-muted-foreground"> — {detail} </span>
                      <span className="text-xs text-muted-foreground/60">{source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Chapter 04 — How to Serve */}
            <section id="serving" className="scroll-mt-24">
              <SectionLabel n="04" title="How to Serve It Safely" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgServing}
                  alt="Step-by-step preparation: whole watermelon, halved with seeds, trimmed wedge, and bite-sized cubes in a bowl"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>

              <h3 className="font-semibold text-base mb-4">Serving size by weight</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Apply the <strong>10% treat rule</strong>: all dog treats
                combined should stay within 10% of daily calories. Because
                watermelon is very low in calories, the practical limit is
                usually set by natural sugars and digestive tolerance.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: PetMD, 2023][Source: Hill's, 2022]
                </span>
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/40 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Dog size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Weight</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Per serving</th>
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
              <p className="text-xs text-muted-foreground/60 mb-8">
                [Source: Chewy, 2024][Source: PetMD, 2023]
              </p>

              <h3 className="font-semibold text-base mb-3">
                Preparation — step by step
              </h3>
              <div className="bg-muted/30 rounded-2xl p-5 mb-6">
                <ol className="space-y-3">
                  {[
                    "Choose plain fresh watermelon — no added sugar, salt, or artificial sweeteners. Seedless varieties are easiest.",
                    "Wash the outside rind before cutting, even though rind won't be served.",
                    "Slice and carefully remove all black seeds and firm white seeds.",
                    "Cut away the entire green rind and thick white inner layer.",
                    "Cut the red flesh into bite-sized chunks appropriate to your dog's mouth size.",
                    "Serve fresh, or freeze into chunks or in an ice cube tray for a refreshing summer treat.",
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
                  [Source: AKC, 2022][Source: PetMD, 2023][Source: Chewy, 2024]
                </p>
              </div>

              <h3 className="font-semibold text-base mb-4">Serving formats</h3>
              <div className="space-y-3 mb-6">
                {[
                  {
                    title: "Fresh cubes",
                    verdict: "Best everyday option",
                    color: "border-green-200 bg-green-50",
                    points: ["Softest texture, easiest to eat", "No prep beyond seed/rind removal", "Suitable for any size dog"],
                  },
                  {
                    title: "Frozen watermelon chunks",
                    verdict: "Best summer hydrating treat",
                    color: "border-sky-200 bg-sky-50",
                    points: ["Helps dogs cool down on hot days", "Ensure chunks are bite-sized before freezing", "Supervise to confirm chewing before swallowing"],
                  },
                  {
                    title: "Lick mat or ice cube tray",
                    verdict: "Best enrichment format",
                    color: "border-purple-200 bg-purple-50",
                    points: ["Blend seedless rind-free flesh into puree", "Spread on lick mat or pour into ice cube tray", "Freeze — great for slow feeders and hot days"],
                  },
                ].map(({ title, verdict, color, points }) => (
                  <div key={title} className={`rounded-2xl border p-5 ${color}`}>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-semibold text-sm">{title}</span>
                      <span className="text-xs text-muted-foreground">— {verdict}</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="flex-shrink-0">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-base mb-3">Signs of too much watermelon</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                {[
                  "Soft stool or diarrhoea",
                  "Vomiting or stomach upset",
                  "Excessive gas and bloating",
                  "Reduced appetite",
                  "Diabetic dogs: monitor for blood sugar instability",
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">•</span> {s}
                  </li>
                ))}
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-900 leading-relaxed">
                  <strong>Contact your vet</strong> if symptoms persist beyond
                  24 hours, are severe, or if your dog shows signs of blockage
                  (can't pass stool, persistent vomiting, abdominal pain) after
                  eating seeds or rind.{" "}
                  <span className="text-xs text-red-800/60">
                    [Source: PetMD, 2023][Source: VCA, 2020]
                  </span>
                </p>
              </div>
            </section>

            {/* Video */}
            <section id="video" className="scroll-mt-24">
              <SectionLabel n="05" title="Related Video: Human Foods and Dogs" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Alex C. walks through which human foods are safe for dogs
                and why preparation and portion control matter — the same
                framework applies when feeding watermelon to your dog.
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
                Watermelon is a great hydrating summer treat, but consistent
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
