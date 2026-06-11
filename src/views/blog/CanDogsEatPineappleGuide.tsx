import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Apple,
  ArrowLeft,
  CheckCircle,
  Leaf,
  PawPrint,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CAN_DOGS_EAT_PINEAPPLE_FAQS as FAQS } from "@/lib/blog/can-dogs-eat-pineapple-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { LiteYouTube } from "@/components/LiteYouTube";

import imgHero from "@/assets/blog/can-dogs-eat-pineapple-hero.webp";
import imgSafety from "@/assets/blog/can-dogs-eat-pineapple-safety.webp";
import imgNutrition from "@/assets/blog/can-dogs-eat-pineapple-nutrition.webp";
import imgServing from "@/assets/blog/can-dogs-eat-pineapple-serving.webp";
import imgPrep from "@/assets/blog/can-dogs-eat-pineapple-prep.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "safety", label: "Is it safe?" },
  { id: "nutrition", label: "Nutrition facts" },
  { id: "serving", label: "How much is safe?" },
  { id: "fresh-vs-canned", label: "Fresh vs canned" },
  { id: "video", label: "Dr. Alex video" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const NUTRITION_ROWS = [
  { nutrient: "Calories", per100g: "~50 kcal" },
  { nutrient: "Carbohydrates", per100g: "~13 g" },
  { nutrient: "— of which sugars", per100g: "~10 g" },
  { nutrient: "Dietary fibre", per100g: "~1.4 g" },
  { nutrient: "Protein", per100g: "~0.5 g" },
  { nutrient: "Fat", per100g: "~0.1 g" },
  { nutrient: "Vitamin C", per100g: "~47–48 mg" },
  { nutrient: "Manganese", per100g: "~0.9–1.5 mg" },
  { nutrient: "Vitamin B6", per100g: "~0.1 mg" },
  { nutrient: "Folate", per100g: "~18 µg" },
  { nutrient: "Potassium", per100g: "~110–130 mg" },
];

const SERVING_ROWS = [
  { size: "Small", weight: "Under 10 kg", amount: "1–2 bite-sized pieces", kcal: "≈ 2.5–5 kcal" },
  { size: "Medium", weight: "10–25 kg", amount: "2–4 bite-sized pieces", kcal: "≈ 5–10 kcal" },
  { size: "Large", weight: "Over 25 kg", amount: "3–6 bite-sized pieces", kcal: "≈ 7–15 kcal" },
];

const REFERENCES = [
  "American Kennel Club (AKC). (2021). Can Dogs Eat Pineapple?",
  "Purina. (2020). Can Dogs Eat Pineapple? What You Need to Know.",
  "Hill's Pet Nutrition. (2022). Can Dogs Eat Pineapple?",
  "Chewy. (2023). Can Dogs Eat Pineapple? Vet-Reviewed Safety Guide.",
  "Maurer, H.R. (2001). Bromelain: biochemistry, pharmacology and medical use. Cellular and Molecular Life Sciences. PubMed review.",
  "National Institutes of Health (NIH). (2012). Bromelain Supplement Fact Sheet.",
  "MSD Veterinary Manual. (2020). Gastrointestinal Foreign Bodies in Small Animals; Gastrointestinal Disease — Nutrition.",
  "MSD Veterinary Manual. (2022). Nutritional Requirements of Dogs.",
  "CareCredit. (2023). Can Dogs Eat Pineapple?",
  "MetLife Pet Insurance. (2023). Can Dogs Eat Pineapple Juice?",
  "Jinx. (2021). Can Dogs Eat Pineapple?",
  "Bottletree Animal Hospital. (2021). Can Dogs Have Pineapple?",
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

export default function CanDogsEatPineappleGuide() {
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
              <Apple className="w-3.5 h-3.5" /> Dog Nutrition · Safe Foods
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Can Dogs Eat Pineapple?
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Yes — in small amounts. Fresh pineapple flesh is safe for dogs as
              an occasional treat. The pineapple core, crown, and skin are a
              choking hazard. This guide covers serving sizes by weight, fresh
              vs canned, and the sugar concern.
            </p>
            <figure className="rounded-2xl overflow-hidden mb-8">
              <img
                src={imgHero}
                alt="Golden retriever sniffing a halved fresh pineapple on a wooden kitchen counter"
                className="w-full object-cover max-h-80"
                loading="eager"
              />
            </figure>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CheckCircle, label: "Safe in small amounts" },
                { icon: XCircle, label: "Core is a choking hazard" },
                { icon: AlertTriangle, label: "High natural sugar" },
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

            {/* Chapter 01 — Is Pineapple Safe? */}
            <section id="safety" className="scroll-mt-24">
              <SectionLabel n="01" title="Is Pineapple Safe for Dogs?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgSafety}
                  alt="Bite-sized pieces of fresh pineapple on a ceramic plate beside dog treats"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes, dogs can eat pineapple flesh as an occasional treat. Fresh
                pineapple for dogs is <strong>not toxic</strong> and is
                considered a generally safe healthy treat by veterinary nutrition
                sources including the AKC and Purina.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2021][Source: Purina, 2020]
                </span>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pineapple is good for dogs in a modest sense: it provides
                vitamin C, manganese, B6, and folate alongside natural
                hydration. It also contains <strong>bromelain</strong>, a
                proteolytic enzyme with anti-inflammatory properties, though the
                small amounts in fruit don't reach the therapeutic doses used in
                veterinary supplement studies.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: PubMed review, Maurer, 2001][Source: NIH, 2012]
                </span>
              </p>

              <h3 className="font-semibold text-base mb-4">Who should skip it</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    icon: AlertTriangle,
                    color: "bg-red-50 border-red-100",
                    iconColor: "text-red-600",
                    title: "Diabetic dogs",
                    body: "Natural sugar (~10 g per 100 g) can cause blood glucose spikes. Avoid without vet guidance. [Source: Hill's Pet Nutrition, 2022]",
                  },
                  {
                    icon: AlertTriangle,
                    color: "bg-amber-50 border-amber-100",
                    iconColor: "text-amber-600",
                    title: "Overweight dogs",
                    body: "Extra calories from sugary treats make weight management harder. [Source: Purina, 2020]",
                  },
                  {
                    icon: AlertTriangle,
                    color: "bg-orange-50 border-orange-100",
                    iconColor: "text-orange-600",
                    title: "Sensitive stomachs",
                    body: "The combination of sugar, fibre, and acidity can trigger vomiting, diarrhea, or upset stomach. [Source: AKC, 2021]",
                  },
                ].map(({ icon: Icon, color, iconColor, title, body }) => (
                  <div key={title} className={`rounded-2xl border p-4 ${color}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-4 h-4 ${iconColor}`} />
                      <span className="font-semibold text-sm">{title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                For healthy dogs without these conditions, fresh pineapple
                flesh in modest amounts is fine a few times per week.
              </p>
            </section>

            {/* Chapter 02 — Nutrition Facts */}
            <section id="nutrition" className="scroll-mt-24">
              <SectionLabel n="02" title="Pineapple Nutrition Facts for Dogs" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgNutrition}
                  alt="Sliced pineapple rings arranged on a wooden board with vitamin C and manganese labels"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Raw pineapple chunks per 100 g of edible flesh:{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: Purina, 2020][Source: Chewy, 2023]
                </span>
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/30 border-b border-border">
                      <th className="text-left px-4 py-3 font-semibold">Nutrient</th>
                      <th className="text-right px-4 py-3 font-semibold">Per 100 g</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NUTRITION_ROWS.map((row, i) => (
                      <tr
                        key={row.nutrient}
                        className={`border-b border-border last:border-0 ${
                          row.nutrient === "— of which sugars"
                            ? "bg-amber-50/50"
                            : i % 2 === 0
                            ? "bg-background"
                            : "bg-muted/20"
                        }`}
                      >
                        <td className={`px-4 py-3 ${row.nutrient === "— of which sugars" ? "pl-8 text-amber-800" : ""}`}>
                          {row.nutrient}
                          {row.nutrient === "— of which sugars" && (
                            <span className="ml-2 text-xs font-medium bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">
                              main concern
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right text-muted-foreground">{row.per100g}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900 leading-relaxed">
                    <strong>The 10% treat rule:</strong> All dog treats combined
                    — including fruit — should not exceed 10% of your dog's
                    daily caloric intake, with 90% from a complete, balanced
                    main diet. A 10 kg dog on ~400 kcal/day has a treat budget
                    of just 40 kcal — about 80 g of pineapple flesh.{" "}
                    <span className="text-xs text-amber-700/70">
                      [Source: Purina, 2020][Source: AKC, 2021]
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter 03 — Serving Sizes */}
            <section id="serving" className="scroll-mt-24">
              <SectionLabel n="03" title="How Much Pineapple Can Dogs Eat?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgServing}
                  alt="Three bowls with different amounts of pineapple cubes representing small, medium, and large dog serving sizes"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Guidelines for otherwise healthy dogs, assuming pineapple is the
                only treat given that day:{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: CareCredit, 2023][Source: Purina, 2020]
                </span>
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/30 border-b border-border">
                      <th className="text-left px-4 py-3 font-semibold">Dog size</th>
                      <th className="text-left px-4 py-3 font-semibold">Weight</th>
                      <th className="text-left px-4 py-3 font-semibold">Amount</th>
                      <th className="text-right px-4 py-3 font-semibold">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SERVING_ROWS.map((row, i) => (
                      <tr
                        key={row.size}
                        className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                      >
                        <td className="px-4 py-3 font-medium">{row.size}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.weight}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.amount}</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">{row.kcal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A bite-sized piece is roughly 1–2 cm across. Always prepare
                pineapple to your dog by removing the core and skin first, then
                cutting the flesh into pieces appropriate for your dog's size.
              </p>

              {/* Dangerous parts callout */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <div className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-red-900 leading-relaxed space-y-2">
                    <p>
                      <strong>Pineapple core:</strong> The fibrous core is very
                      tough — a choking hazard in dogs of any size. In small
                      dogs, a large piece of core can become a GI obstruction
                      requiring surgery. Remove the entire pineapple core before
                      serving.{" "}
                      <span className="text-xs text-red-700/70">
                        [Source: Chewy, 2023]
                      </span>
                    </p>
                    <p>
                      <strong>Spiny skin and crown:</strong> The outer spiny
                      skin and crown are indigestible and also a choking hazard.
                      Sharp edges can irritate or lacerate the mouth and
                      digestive tract.{" "}
                      <span className="text-xs text-red-700/70">
                        [Source: AKC, 2021]
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter 04 — Fresh vs Canned */}
            <section id="fresh-vs-canned" className="scroll-mt-24">
              <SectionLabel n="04" title="Fresh vs Canned: Which Is Better?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgPrep}
                  alt="Fresh pineapple wedge alongside an open tin of canned pineapple on a wooden cutting board"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-800">Fresh pineapple ✓</span>
                  </div>
                  <ul className="space-y-2 text-sm text-green-900/80 leading-relaxed">
                    <li>• Peeled, cored, and cut into bite-sized pieces — the right choice for dogs</li>
                    <li>• Retains active bromelain</li>
                    <li>• No added sugar</li>
                    <li>• Easy to portion correctly</li>
                    <li>• Frozen plain pineapple is also safe — a cooling treat in hot weather</li>
                  </ul>
                  <p className="text-xs text-green-700/70 mt-3">
                    [Source: AKC, 2021][Source: Chewy, 2023]
                  </p>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-red-800">Canned / dried / juiced ✗</span>
                  </div>
                  <ul className="space-y-2 text-sm text-red-900/80 leading-relaxed">
                    <li>• Canned pineapple: added sugar, denatured bromelain</li>
                    <li>• Store-bought dried pineapple: concentrated natural sugar + added sugar</li>
                    <li>• Pineapple juice: concentrated sugar, no fibre</li>
                    <li>• Cooked pineapple: not toxic but bromelain is destroyed by heat</li>
                    <li>• Pineapple cake or baked goods: never — xylitol risk</li>
                  </ul>
                  <p className="text-xs text-red-700/70 mt-3">
                    [Source: Purina, 2020][Source: MetLife Pet Insurance, 2023]
                  </p>
                </div>
              </div>

              {/* Safe prep checklist */}
              <div className="bg-muted/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm">How to prepare pineapple for your dog</h3>
                </div>
                <ol className="space-y-3">
                  {[
                    "Choose fresh, ripe pineapple. No canned, no syrup, no pineapple cake or baked forms.",
                    "Wash the outside, remove the crown and entire spiny skin including the \"eyes.\"",
                    "Cut out and discard the entire pineapple core.",
                    "Slice the soft inner flesh into bite-sized pieces appropriate to your dog's size.",
                    "Serve plain — no added sugar, syrup, salt, or dairy. No xylitol in any form.",
                    "Monitor your dog's digestive tract response during and after eating, especially the first time.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-semibold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-muted-foreground/60 mt-4">
                  [Source: AKC, 2021][Source: Chewy, 2023][Source: Bottletree Animal Hospital, 2021]
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                Daily dog wellness
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                Support your dog's everyday health.
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
                Pineapple as an occasional treat is a small piece of the
                puzzle. For dog owners looking to support digestion, coat
                health, and the dog's immune system day to day, PetGlow Drops
                offer a broad-spectrum botanical blend formulated for everyday
                use.
              </p>
              <a href="https://celsiusherbs.com/products/petglow-drops">
                <Button
                  size="lg"
                  className="rounded-full bg-primary-foreground text-ink-deep hover:bg-primary-foreground/90"
                >
                  Explore PetGlow Drops →
                </Button>
              </a>
            </section>

            {/* Related Video */}
            <section id="video" className="scroll-mt-24">
              <SectionLabel n="05" title="Related Video: Human Foods and Dogs" />
              <p className="text-muted-foreground leading-relaxed mb-5">
                Dr. Alex C. covers which human foods are safe for dogs —
                including a detailed look at eggshells — in the video below.
                The same framework of moderation and careful preparation applies
                when deciding whether to feed pineapple to your dog.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="bg-muted/40 px-5 py-3">
                  <p className="text-sm font-semibold">Dr. Alex C — Can Dogs Eat Eggshells?</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Our veterinary advisor on human foods and dogs
                  </p>
                </div>
                <div className="p-4">
                  <LiteYouTube
                    id="juUE1VeOsU8"
                    title="Dr. Alex C: Can Dogs Eat Eggshells — Human Foods for Dogs"
                  />
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <SectionLabel n="06" title="Frequently Asked Questions" />
              <Accordion type="single" collapsible className="space-y-3">
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-border rounded-xl px-5"
                  >
                    <AccordionTrigger className="text-left font-semibold text-sm py-4 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Reviewed By */}
            <ReviewedByDrAlex />

            {/* References */}
            <section id="references" className="scroll-mt-24">
              <SectionLabel n="07" title="References" />
              <ol className="space-y-2">
                {REFERENCES.map((ref, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground/50 flex-shrink-0 w-5">{i + 1}.</span>
                    {ref}
                  </li>
                ))}
              </ol>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
