import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Apple,
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
import { CAN_DOGS_EAT_BANANAS_FAQS as FAQS } from "@/lib/blog/can-dogs-eat-bananas-faqs";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { LiteYouTube } from "@/components/LiteYouTube";

import imgHero from "@/assets/blog/can-dogs-eat-bananas-hero.webp";
import imgSafety from "@/assets/blog/can-dogs-eat-bananas-safety.webp";
import imgNutrition from "@/assets/blog/can-dogs-eat-bananas-nutrition.webp";
import imgPeel from "@/assets/blog/can-dogs-eat-bananas-peel.webp";
import imgServing from "@/assets/blog/can-dogs-eat-bananas-serving.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "safety", label: "Are bananas safe?" },
  { id: "nutrition", label: "Nutrition benefits" },
  { id: "serving", label: "How much?" },
  { id: "peel", label: "Banana peels" },
  { id: "frozen", label: "Frozen treats" },
  { id: "video", label: "Dr. Alex video" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const NUTRITION_ROWS = [
  { nutrient: "Calories", per100g: "~89 kcal" },
  { nutrient: "Carbohydrates", per100g: "~22.8 g" },
  { nutrient: "— of which sugars", per100g: "~12.2 g" },
  { nutrient: "Dietary fibre", per100g: "~2.6 g" },
  { nutrient: "Protein", per100g: "~1.1 g" },
  { nutrient: "Potassium", per100g: "~358 mg" },
  { nutrient: "Vitamin B6", per100g: "~0.4 mg" },
  { nutrient: "Vitamin C", per100g: "~8.7 mg" },
  { nutrient: "Magnesium", per100g: "~27 mg" },
];

const SERVING_ROWS = [
  { size: "Small", weight: "Under 10 kg", amount: "1–2 thin slices", note: "A few times per week" },
  { size: "Medium", weight: "10–25 kg", amount: "2–6 slices", note: "A few times per week" },
  { size: "Large", weight: "Over 25 kg", amount: "Up to ½ banana", note: "Occasionally" },
];

const REFERENCES = [
  "American Kennel Club (AKC). (2021). Can Dogs Eat Bananas?",
  "PetMD. (2023). Can Dogs Eat Bananas?",
  "Chewy. (2022). Can Dogs Eat Bananas? Everything You Need to Know.",
  "VCA Hospitals. (2022). Banana Toxicity in Dogs.",
  "USDA FoodData Central. (2019). Bananas, raw — nutrient data.",
  "MSD Veterinary Manual. (2023). Nutritional Requirements of Dogs.",
  "ASPCA. (2022). People Foods to Avoid Feeding Your Pets.",
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

export default function CanDogsEatBananasGuide() {
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
              <Apple className="w-3.5 h-3.5" /> Dog Nutrition · Safe Foods
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Can Dogs Eat Bananas?
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Yes — peeled and portioned. Bananas give dogs potassium, vitamin
              B6, and magnesium. The peel isn't toxic but can block the gut.
              This guide covers serving sizes by weight and a frozen banana
              treat recipe.
            </p>
            <figure className="rounded-2xl overflow-hidden mb-8">
              <img
                src={imgHero}
                alt="Golden retriever looking up at a peeled banana being sliced on a kitchen counter"
                className="w-full object-cover max-h-80"
                loading="eager"
              />
            </figure>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CheckCircle, label: "Peeled flesh is safe" },
                { icon: XCircle, label: "Peel: digestive hazard" },
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

            {/* Chapter 01 — Are Bananas Safe for Dogs? */}
            <section id="safety" className="scroll-mt-24">
              <SectionLabel n="01" title="Are Bananas Safe for Dogs?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgSafety}
                  alt="Small banana slices on a white ceramic plate on a wooden surface"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes — dogs can eat bananas safely as an occasional treat. The
                AKC and PetMD both describe peeled, portioned banana flesh as a
                generally dog-safe fruit with real health benefits.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2021][Source: PetMD, 2023]
                </span>{" "}
                Bananas provide potassium, vitamin B6, magnesium, and fibre —
                making them a safe and healthy treat when portions stay sensible.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm text-green-800">Safe</span>
                  </div>
                  <p className="text-sm text-green-900/80 leading-relaxed">
                    Ripe bananas, peeled, sliced into bite-sized pieces, fed in
                    moderation as an occasional treat.
                  </p>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-sm text-red-800">Not safe</span>
                  </div>
                  <p className="text-sm text-red-900/80 leading-relaxed">
                    The banana peel, banana bread with xylitol or chocolate,
                    commercial banana chips with added sugar, dried bananas, and
                    any banana-flavoured dessert.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Feeding bananas to your dog comes down to moderation. At around
                12 g of natural sugar per 100 g, bananas are one of the sweeter
                fruits — their natural sweetness means dogs eat them eagerly and
                owners can accidentally overfeed. Keep portions aligned with your
                dog's size and count bananas toward the 10% treat rule.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: USDA FoodData Central, 2019][Source: AKC, 2021]
                </span>
              </p>
              <h3 className="font-semibold text-base mb-3">Who should skip banana entirely</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    color: "bg-red-50 border-red-100",
                    iconColor: "text-red-600",
                    title: "Diabetic dogs",
                    body: "Natural sugar can destabilise blood glucose. Avoid unless your vet specifically approves a very small amount. [Source: VCA Hospitals, 2022][Source: PetMD, 2023]",
                  },
                  {
                    color: "bg-amber-50 border-amber-100",
                    iconColor: "text-amber-600",
                    title: "Overweight dogs",
                    body: "Extra sugar calories from fruit treats contribute to weight gain over time.",
                  },
                  {
                    color: "bg-orange-50 border-orange-100",
                    iconColor: "text-orange-600",
                    title: "Sensitive stomachs",
                    body: "The fibre and sugar combination can cause digestive upset and loose stool in GI-sensitive dogs. [Source: PetMD, 2023]",
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

            {/* Chapter 02 — Banana Nutrition */}
            <section id="nutrition" className="scroll-mt-24">
              <SectionLabel n="02" title="Banana Nutrition for Dogs" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgNutrition}
                  alt="Overhead flat lay of ripe banana slices on a wooden board with botanical labels"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The health benefits of bananas for dogs come from a solid
                vitamin and mineral profile. Per 100 g of raw banana flesh:{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: USDA FoodData Central, 2019]
                </span>
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/40 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Nutrient</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Per 100 g</th>
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
              <h3 className="font-semibold text-base mb-4">What these nutrients do for your dog</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Potassium",
                    body: "An electrolyte essential for nerve signalling, muscle contraction, and fluid balance. Bananas are one of the better fruit sources of potassium — the AKC specifically highlights this as a health benefit of feeding bananas to dogs. [Source: AKC, 2021][Source: USDA FoodData Central, 2019]",
                  },
                  {
                    icon: Sparkles,
                    title: "Vitamin B6",
                    body: "Supports metabolism, red blood cell production, and nervous system function. At 0.4 mg per 100 g, ripe bananas are a useful natural source of B6. [Source: USDA FoodData Central, 2019][Source: MSD Veterinary Manual, 2023]",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Magnesium",
                    body: "Supports energy metabolism, muscle function, and digestive health in dogs. [Source: USDA FoodData Central, 2019][Source: MSD Veterinary Manual, 2023]",
                  },
                  {
                    icon: Leaf,
                    title: "Dietary fibre",
                    body: "Helps regulate bowel movements and supports gut health in small amounts. In excess it causes loose stool — one more reason portion control matters. [Source: PetMD, 2023][Source: AKC, 2021]",
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4 p-4 bg-muted/30 rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">{title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Sugar caveat:</strong> ~12.2 g of natural sugar per
                    100 g means bananas are a treat, not a supplement. Too much
                    sugar from any source contributes to weight gain, dental
                    issues, and blood glucose disruption in susceptible dogs.{" "}
                    <span className="text-xs text-amber-800/60">
                      [Source: PetMD, 2023][Source: AKC, 2021]
                    </span>
                  </p>
                </div>
              </div>
            </section>

            {/* Chapter 03 — How Much? */}
            <section id="serving" className="scroll-mt-24">
              <SectionLabel n="03" title="How Much Banana Is Too Much?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgServing}
                  alt="Three ceramic bowls with different amounts of banana slices for small, medium, and large dogs"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use the <strong>10% treat rule</strong> when you serve bananas to
                your dog: all treats combined should not exceed 10% of your
                dog's daily caloric intake, with 90% from a complete, balanced
                dog food.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2021][Source: Chewy, 2022]
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
              <h3 className="font-semibold text-base mb-3">Signs your dog had too much banana</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {[
                  "Soft stool or diarrhoea",
                  "Vomiting or stomach gurgling",
                  "Gas and abdominal discomfort",
                  "Reduced appetite",
                  "Weight gain over time with repeated overfeeding",
                  "Diabetic dogs specifically: blood glucose destabilisation, increased thirst, lethargy",
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">•</span> {s}
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-base mb-3">Fresh vs frozen vs dried</h3>
              <div className="space-y-3">
                {[
                  { label: "Fresh banana", verdict: "Best choice", color: "border-green-200 bg-green-50", body: "Ripe bananas, peeled, sliced, served plain. [Source: AKC, 2021]" },
                  { label: "Frozen banana", verdict: "Safe (plain)", color: "border-blue-200 bg-blue-50", body: "Safe if no added sugar, peeled, sliced small. A refreshing treat in warm weather — recipe below. [Source: AKC, 2021][Source: PetMD, 2023]" },
                  { label: "Dried banana / banana chips", verdict: "Not recommended", color: "border-amber-200 bg-amber-50", body: "Commercial banana chips concentrate sugar and usually add more. Dogs eat banana chips at far higher sugar load than fresh banana. [Source: PetMD, 2023][Source: VCA Hospitals, 2022]" },
                  { label: "Banana bread", verdict: "Avoid", color: "border-red-200 bg-red-50", body: "Often contains added sugar, fat, and sometimes toxic ingredients like xylitol or chocolate. [Source: PetMD, 2023][Source: ASPCA, 2022]" },
                ].map(({ label, verdict, color, body }) => (
                  <div key={label} className={`rounded-2xl border p-4 ${color}`}>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold text-sm">{label}</span>
                      <span className="text-xs text-muted-foreground">— {verdict}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Chapter 04 — Banana Peels */}
            <section id="peel" className="scroll-mt-24">
              <SectionLabel n="04" title="Can Dogs Eat Banana Peels?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgPeel}
                  alt="Discarded banana peel on dark cloth beside sliced banana flesh on a white plate"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Not recommended.</strong> Banana peels are not toxic
                    to dogs — there's no specific poison in the peel — but their
                    tough, fibrous texture makes them a genuine digestive hazard.
                    Remove the peel completely and discard it out of your dog's
                    reach.{" "}
                    <span className="text-xs text-amber-800/60">
                      [Source: AKC, 2021][Source: PetMD, 2023]
                    </span>
                  </p>
                </div>
              </div>
              <h3 className="font-semibold text-base mb-3">Why the peel is a problem</h3>
              <div className="space-y-3 mb-6">
                {[
                  {
                    title: "Digestive upset",
                    body: "Vomiting, diarrhoea, and abdominal discomfort after eating banana peel. [Source: AKC, 2021][Source: Chewy, 2022]",
                    color: "border-amber-200 bg-amber-50",
                  },
                  {
                    title: "Intestinal blockage",
                    body: "Thick pieces of peel can block the digestive tract, especially in small dogs. Chewy explicitly flags this risk. [Source: Chewy, 2022][Source: VCA Hospitals, 2022]",
                    color: "border-red-200 bg-red-50",
                  },
                  {
                    title: "Choking hazard",
                    body: "A large chunk of peel can lodge in the throat of smaller dogs before they can swallow it. [Source: PetMD, 2023][Source: Chewy, 2022]",
                    color: "border-red-200 bg-red-50",
                  },
                ].map(({ title, body, color }) => (
                  <div key={title} className={`rounded-2xl border p-4 ${color}`}>
                    <p className="font-semibold text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <h3 className="font-semibold text-base mb-3">If your dog eats a banana peel</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A small piece may only cause mild digestive upset. The concern is
                larger quantities or small dogs — a peel piece large enough to
                obstruct the gut can cause symptoms hours after ingestion.
              </p>
              <div className="bg-muted/30 rounded-2xl p-5">
                <p className="font-semibold text-sm mb-3">Watch for these signs after peel ingestion:</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Repeated vomiting or retching",
                    "Abdominal pain, bloating, or hunched posture",
                    "Straining to defecate or no stool passing",
                    "Sudden lethargy or loss of appetite",
                  ].map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-amber-500 flex-shrink-0">•</span> {s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/60 mt-3">
                  Contact your vet if any of these appear — intestinal
                  obstruction from fibrous material can develop slowly and
                  requires prompt evaluation. [Source: VCA Hospitals,
                  2022][Source: AKC, 2021]
                </p>
              </div>
            </section>

            {/* Chapter 05 — Frozen Banana Treats */}
            <section id="frozen" className="scroll-mt-24">
              <SectionLabel n="05" title="Frozen Banana Treats" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Can dogs eat frozen bananas? Yes — plain frozen banana is a
                safe, refreshing treat and one of the best warm-weather
                enrichment options for dogs. Both the AKC and PetMD describe
                frozen banana pieces as safe and enjoyable.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2021][Source: PetMD, 2023]
                </span>
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Plain frozen slices",
                    steps: [
                      "Choose ripe bananas — natural sweetness is highest and flesh is easiest to digest.",
                      "Peel and slice into bite-sized pieces (¼-inch slices for small dogs; larger for large dogs, still bite-sized).",
                      "Arrange on a tray lined with baking paper. Freeze 2–3 hours until solid.",
                      "Offer a few pieces per your dog's serving guide. Store the rest in a sealed container.",
                    ],
                  },
                  {
                    title: "Mashed banana + xylitol-free peanut butter KONG",
                    steps: [
                      "Mash ripe banana until smooth.",
                      "Mix mashed bananas with a teaspoon of plain, xylitol-free peanut butter — always check the label.",
                      "Stuff the mashed banana mix into a KONG or silicone mould.",
                      "Freeze 3–4 hours. Serve as a refreshing treat.",
                    ],
                    note: "Xylitol is highly toxic to dogs even in small amounts — verify every peanut butter label before mixing mashed bananas with it.",
                  },
                  {
                    title: "Banana and plain yogurt coins",
                    steps: [
                      "Mash banana with an equal volume of plain, unsweetened, xylitol-free yogurt.",
                      "Drop tablespoon rounds onto a baking paper-lined tray.",
                      "Freeze 2–3 hours. Serve 1–2 coins per the serving guide.",
                    ],
                  },
                ].map(({ title, steps, note }) => (
                  <div key={title} className="bg-muted/30 rounded-2xl p-5">
                    <h4 className="font-semibold text-sm mb-3">{title}</h4>
                    <ol className="space-y-2">
                      {steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-medium">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    {note && (
                      <p className="mt-3 text-xs text-muted-foreground/70 italic">{note}</p>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Keep portions aligned with the serving table — freezing doesn't
                reduce the sugar content of ripe bananas. These DIY banana dog
                treats are a safe and healthy treat for most healthy adult dogs,
                but the same 10% calorie rule applies.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2021][Source: Chewy, 2022]
                </span>
              </p>
            </section>

            {/* Video */}
            <section id="video" className="scroll-mt-24">
              <SectionLabel n="06" title="Related Video: Human Foods and Dogs" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Alex C. walks through which human foods are safe for dogs
                and why preparation and portion control matter — the same
                principles apply when feeding bananas to your dog.
              </p>
              <LiteYouTube
                id="juUE1VeOsU8"
                title="Which Human Foods Are Safe for Dogs? | Dr. Alex"
                className="rounded-2xl overflow-hidden"
              />
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <SectionLabel n="07" title="Frequently Asked Questions" />
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
              <SectionLabel n="08" title="References" />
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
                Banana is a great occasional treat, but real daily support goes
                further. PetGlow Drops offer a broad-spectrum botanical blend
                formulated for digestion, immune function, and coat health —
                every day.
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
                your dog's diet or introducing new foods, especially if your dog
                has a health condition.
              </p>
            </section>

            {/* More articles */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">More articles</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {BLOG_ARTICLES.filter((a) => a.href !== "/can-dogs-eat-bananas").map((a) => (
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
