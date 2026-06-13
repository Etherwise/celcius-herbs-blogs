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
import { CAN_DOGS_EAT_MANGO_FAQS as FAQS } from "@/lib/blog/can-dogs-eat-mango-faqs";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { LiteYouTube } from "@/components/LiteYouTube";

import imgHero from "@/assets/blog/can-dogs-eat-mango-hero.webp";
import imgSafety from "@/assets/blog/can-dogs-eat-mango-safety.webp";
import imgPit from "@/assets/blog/can-dogs-eat-mango-pit.webp";
import imgNutrition from "@/assets/blog/can-dogs-eat-mango-nutrition.webp";
import imgServing from "@/assets/blog/can-dogs-eat-mango-serving.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "safety", label: "Is mango safe?" },
  { id: "pit", label: "The mango pit" },
  { id: "nutrition", label: "Nutrition benefits" },
  { id: "serving", label: "How much?" },
  { id: "video", label: "Dr. Alex video" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const NUTRITION_ROWS = [
  { nutrient: "Calories", per100g: "~60 kcal" },
  { nutrient: "Carbohydrates", per100g: "~15 g" },
  { nutrient: "— of which sugars", per100g: "~14 g" },
  { nutrient: "Dietary fibre", per100g: "~1.6 g" },
  { nutrient: "Protein", per100g: "~0.8 g" },
  { nutrient: "Vitamin A (RAE)", per100g: "~54 µg (~1,082 IU)" },
  { nutrient: "Vitamin C", per100g: "~36 mg" },
  { nutrient: "Vitamin B6", per100g: "~0.12 mg" },
  { nutrient: "Vitamin E", per100g: "~0.9 mg" },
  { nutrient: "Folate", per100g: "~43 µg" },
  { nutrient: "Potassium", per100g: "~168 mg" },
];

const SERVING_ROWS = [
  { size: "Toy / Small", weight: "Under 10 kg", amount: "1–2 small cubes", note: "A few times per week max" },
  { size: "Medium", weight: "10–25 kg", amount: "2–4 small cubes", note: "A few times per week" },
  { size: "Large", weight: "Over 25 kg", amount: "4–6 small cubes", note: "A few times per week" },
];

const REFERENCES = [
  "American Kennel Club (AKC). (2024). Can Dogs Eat Mango?",
  "Purina. (2025). Can Dogs Eat Mango? A Guide to Safety.",
  "Hill's Pet Nutrition. (2024). Can Dogs Eat Mangoes? How much?",
  "PetMD. (2024). Can Dogs Eat Mango?",
  "Chewy. (2024). Can Dogs Eat Mango? Everything You Need to Know.",
  "Rover. (2024). Can My Dog Eat Mango?",
  "Betterpet. (2024). Can my dog have mango?",
  "Keystone Animal Hospital. (2025). Can Dogs Eat Mangos?",
  "USDA FoodData Central. (2026). Raw mango nutrient data.",
  "MSD Veterinary Manual. (2022). Nutritional Requirements of Dogs.",
  "Pumpkin Pet Insurance. (2024). Can Dogs Eat Mango?",
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

export default function CanDogsEatMangoGuide() {
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
              Can Dogs Eat Mango?
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Yes — the flesh only. Mango is a nutritious treat packed with
              vitamins A, C, B6, and E. The mango pit is a choking hazard
              and contains cyanogenic compounds. The skin is hard to digest.
              This guide covers serving sizes by weight and safe prep steps.
            </p>
            <figure className="rounded-2xl overflow-hidden mb-8">
              <img
                src={imgHero}
                alt="Labrador retriever looking at a halved ripe mango on a wooden kitchen counter"
                className="w-full object-cover max-h-80"
                loading="eager"
              />
            </figure>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CheckCircle, label: "Flesh is safe" },
                { icon: XCircle, label: "Pit: choking hazard + cyanide" },
                { icon: AlertTriangle, label: "Skin: hard to digest" },
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

            {/* Chapter 01 — Is Mango Safe? */}
            <section id="safety" className="scroll-mt-24">
              <SectionLabel n="01" title="Is Mango Safe for Dogs?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgSafety}
                  alt="Small cubed pieces of mango flesh on a ceramic plate beside dog treats"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes, dogs can eat mango flesh safely as an occasional treat.
                Fresh mango for dogs is <strong>not toxic</strong>, and
                veterinary nutrition sources including the AKC and Purina
                describe the peeled, pitted soft flesh as safe for dogs in
                modest amounts.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2024][Source: Purina, 2025]
                </span>
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm text-green-800">Safe</span>
                  </div>
                  <p className="text-sm text-green-900/80 leading-relaxed">
                    Soft flesh only — peeled, pit removed, cut into bite-sized pieces and fed in small amounts as a nutritious treat.
                  </p>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-sm text-red-800">Not safe</span>
                  </div>
                  <p className="text-sm text-red-900/80 leading-relaxed">
                    The pit (choking hazard + cyanide), the skin (hard to digest, urushiol-related irritant), canned mango in syrup, dried mango with added sugar, and any mango-flavoured desserts.
                  </p>
                </div>
              </div>
              <h3 className="font-semibold text-base mb-3">Can dogs eat mango skin?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No. Mango skin is tough, fibrous, and difficult for dogs to
                digest — the most likely outcomes are vomiting, diarrhoea, or
                general stomach upset.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: Purina, 2025][Source: AKC, 2024]
                </span>{" "}
                Pet-health sources also note that mango skin contains
                urushiol-related compounds similar to those in poison ivy and
                poison oak, which can irritate some animals. Documented
                mango-skin allergy in dogs is not well established, but the
                digestibility concern alone is enough reason to peel fully.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: Chewy, 2024][Source: PetMD, 2024]
                </span>
              </p>
              <h3 className="font-semibold text-base mb-3">Who should skip mango entirely</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    color: "bg-red-50 border-red-100",
                    iconColor: "text-red-600",
                    title: "Diabetic dogs",
                    body: "Natural sugar can destabilise blood glucose. Avoid unless your vet approves. [Source: Hill's Pet, 2024][Source: Betterpet, 2024]",
                  },
                  {
                    color: "bg-amber-50 border-amber-100",
                    iconColor: "text-amber-600",
                    title: "Overweight dogs",
                    body: "Extra sugar calories from sweet treats make weight management harder.",
                  },
                  {
                    color: "bg-orange-50 border-orange-100",
                    iconColor: "text-orange-600",
                    title: "Sensitive stomachs",
                    body: "Sugar + fibre can cause upset stomach or digestive upset in GI-sensitive dogs. [Source: Purina, 2025]",
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

            {/* Chapter 02 — The Mango Pit */}
            <section id="pit" className="scroll-mt-24">
              <SectionLabel n="02" title="The Mango Pit: A Hidden Danger" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgPit}
                  alt="Mango pit on dark cloth beside mango flesh on a white plate — showing the contrast between safe and dangerous parts"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-red-900 leading-relaxed space-y-2">
                    <p>
                      <strong>Never feed your dog mango with the pit inside.</strong>{" "}
                      The mango pit creates two distinct hazards: a mechanical
                      choking hazard and intestinal obstruction risk, plus
                      cyanide from amygdalin (a cyanogenic glycoside in mango
                      seeds).
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-base mb-3">Choking hazard and obstruction</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The mango pit is large and hard. For a small dog it is an
                immediate choking hazard — the pit can lodge in the throat of a
                small dog before they can pass it. Even in large dogs, a
                swallowed mango pit can become an{" "}
                <strong>intestinal obstruction</strong> in the dog's digestive
                tract requiring emergency surgery.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: Purina, 2025][Source: PetMD, 2024][Source: Hill's Pet, 2024]
                </span>
              </p>
              <div className="bg-muted/30 rounded-2xl p-5 mb-6">
                <p className="font-semibold text-sm mb-3">Signs of obstruction after swallowing the pit:</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Repeated gagging, retching, or unproductive vomiting",
                    "Excessive drooling",
                    "Loss of appetite or refusing food",
                    "Straining to defecate or not passing stool",
                    "Abdominal pain, bloating, or hunched posture",
                    "Sudden lethargy",
                  ].map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-red-500 flex-shrink-0">•</span> {s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/60 mt-3">
                  If your dog swallows the mango pit, contact your vet
                  immediately — even if the dog appears fine initially.
                  [Source: Purina, 2025][Source: PetMD, 2024]
                </p>
              </div>
              <h3 className="font-semibold text-base mb-3">Cyanide in mango seeds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mango pits contain <strong>amygdalin</strong>, a cyanogenic
                glycoside that releases hydrogen cyanide when metabolised. In
                veterinary medicine, cyanogenic glycoside poisoning is taken
                seriously regardless of source. The practical risk from a
                single mango pit is generally lower than the obstruction risk
                — but it is an additional reason never to allow dogs to chew
                on mango seeds or the pit. Dogs that regularly chew mango pits
                face a more meaningful cyanide exposure risk.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: AKC, 2024][Source: Keystone Animal Hospital, 2025][Source: Purina, 2025]
                </span>
              </p>
            </section>

            {/* Chapter 03 — Nutrition */}
            <section id="nutrition" className="scroll-mt-24">
              <SectionLabel n="03" title="Mango Nutrition Benefits" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgNutrition}
                  alt="Overhead flat lay of ripe mango slices on an unfinished wooden board with vitamin labels nearby"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The nutritional benefits of mango for dogs come from its
                vitamin and antioxidant profile. Per 100 g of raw mango flesh:{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: USDA FoodData Central, 2026][Source: AKC, 2024]
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
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Zap, title: "Vitamin A", body: "Supports vision, immune function, and skin health. Dogs convert beta-carotene from fruit. [Source: MSD Veterinary Manual, 2022]" },
                  { icon: Leaf, title: "Vitamin C", body: "Dogs synthesise vitamin C themselves, but the antioxidant load from sweet fruit is a bonus. [Source: Hill's Pet, 2024]" },
                  { icon: Zap, title: "Vitamin B6", body: "Supports red blood cell function and the nervous system. [Source: AKC, 2024]" },
                  { icon: Leaf, title: "Vitamin E", body: "An antioxidant that supports immune function and skin integrity. One of the clearer health benefits of mango. [Source: Purina, 2025]" },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="border border-border rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">{title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>The sugar caveat:</strong> Mango contains ~14 g of
                    natural sugar per 100 g — the highest of any common dog safe
                    fruit. This is why mango good for dogs as an occasional
                    nutritious treat, not a daily supplement. Too much sugar
                    contributes to weight gain, dental issues, and blood glucose
                    disruption.{" "}
                    <span className="text-xs text-amber-700/70">
                      [Source: Purina, 2025][Source: Hill's Pet, 2024]
                    </span>
                  </p>
                </div>
              </div>
            </section>

            {/* Chapter 04 — Serving */}
            <section id="serving" className="scroll-mt-24">
              <SectionLabel n="04" title="How Much Mango Can Your Dog Have?" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgServing}
                  alt="Three ceramic bowls with different amounts of mango cubes representing small, medium, and large dog serving sizes"
                  className="w-full object-cover max-h-64"
                  loading="lazy"
                />
              </figure>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use the <strong>10% treat rule</strong> when you feed your dog
                mango: all treats combined should not exceed 10% of your dog's
                daily caloric intake, with 90% from a complete, balanced main
                diet.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: Purina, 2025][Source: Hill's Pet, 2024]
                </span>
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/30 border-b border-border">
                      <th className="text-left px-4 py-3 font-semibold">Dog size</th>
                      <th className="text-left px-4 py-3 font-semibold">Weight</th>
                      <th className="text-left px-4 py-3 font-semibold">Amount</th>
                      <th className="text-right px-4 py-3 font-semibold">Frequency</th>
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
                        <td className="px-4 py-3 text-right text-muted-foreground text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For a small dog especially, portion control is important — even
                a few cubes of mango push a small dog toward the daily sugar
                limit for treats. A "small cube" is roughly 1–2 cm across.{" "}
                <span className="text-xs text-muted-foreground/60">
                  [Source: Purina, 2025][Source: Rover, 2024]
                </span>
              </p>

              {/* Fresh vs other forms */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm text-green-800">Recommended</span>
                  </div>
                  <ul className="space-y-2 text-sm text-green-900/80">
                    <li>• <strong>Fresh mango</strong> — peeled, pitted, bite-sized cubes. Best way to feed mango to your dog.</li>
                    <li>• <strong>Frozen mango</strong> — plain, no sugar added. Freeze cubes in an ice cube tray for a cooling treat. Use smaller pieces to prevent a choking hazard.</li>
                  </ul>
                  <p className="text-xs text-green-700/70 mt-3">[Source: Purina, 2025][Source: AKC, 2024]</p>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-sm text-red-800">Avoid</span>
                  </div>
                  <ul className="space-y-2 text-sm text-red-900/80">
                    <li>• <strong>Dried mango</strong> — concentrated sugar, often with added sugar.</li>
                    <li>• <strong>Canned mango in syrup</strong> — added sugars, unsuitable.</li>
                    <li>• <strong>Mango sorbet / ice cream</strong> — added sugar, dairy, possible xylitol.</li>
                  </ul>
                  <p className="text-xs text-red-700/70 mt-3">[Source: Hill's Pet, 2024][Source: Purina, 2025]</p>
                </div>
              </div>

              {/* Step-by-step prep */}
              <div className="bg-muted/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm">How to prepare mango for your dog — step by step</h3>
                </div>
                <ol className="space-y-3">
                  {[
                    "Choose ripe mango. Ripe soft flesh is easy to cut and gentle on the dog's digestive tract.",
                    "Wash the outside before peeling to remove surface residues.",
                    "Peel the mango completely — remove all skin, no exceptions.",
                    "Remove the mango pit entirely. Double-check: no mango seeds in the bowl.",
                    "Cut the soft flesh into bite-sized cubes appropriate to your dog's size.",
                    "Serve plain and fresh — no added sugar, syrup, honey, or yoghurt toppings.",
                    "Optional: freeze cubes in an ice cube tray for a cold summer treat. Use small pieces.",
                    "Monitor your dog during and after the first serving for any stomach upset.",
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
                  [Source: AKC, 2024][Source: Purina, 2025][Source: PetMD, 2024]
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
                Mango is a tasty treat but one small part of a good diet. For
                dog owners who want to support digestion, immune function, and
                coat health every day, PetGlow Drops offer a broad-spectrum
                botanical blend formulated for daily use.
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
                Dr. Alex C. walks through which human foods are safe for dogs
                in the video below. The same framework of preparation and
                portion control applies when you feed your dog mango — or any
                other human food.
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

            {/* More articles */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">More articles</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {BLOG_ARTICLES.filter((a) => a.href !== "/can-dogs-eat-mango").map((a) => (
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
