import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Clock,
  Leaf,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  FlaskConical,
  Droplets,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IS_TURMERIC_GOOD_FOR_DOGS_FAQS as FAQS } from "@/lib/blog/is-turmeric-good-for-dogs-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";

import hero from "@/assets/blog/is-turmeric-good-for-dogs-hero.webp";
import imgBenefits from "@/assets/blog/is-turmeric-good-for-dogs-benefits.webp";
import imgDosage from "@/assets/blog/is-turmeric-good-for-dogs-dosage.webp";
import imgSideEffects from "@/assets/blog/is-turmeric-good-for-dogs-side-effects.webp";
import imgGingerTurmeric from "@/assets/blog/is-turmeric-good-for-dogs-ginger-turmeric.webp";

/**
 * Is Turmeric Good for Dogs — A Pet Owner's Evidence Guide
 *
 * Primary keyword: "is turmeric good for dogs"
 * Secondary keywords: turmeric for dogs, golden paste for dogs, side effects of turmeric in dogs,
 *   turmeric for dogs dosage chart, turmeric for dogs itchy skin, ginger and turmeric for dogs,
 *   best turmeric for dogs, vet recommended turmeric
 */

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "benefits", label: "Benefits of turmeric" },
  { id: "dosage", label: "Dosage chart by weight" },
  { id: "golden-paste", label: "Golden paste recipe" },
  { id: "side-effects", label: "Side effects" },
  { id: "allergies", label: "Allergies & itchy skin" },
  { id: "ginger-turmeric", label: "Ginger and turmeric" },
  { id: "best-form", label: "Best form for dogs" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const DOSAGE_ROWS = [
  { weight: "5 lbs (2.3 kg)", start: "1/16 tsp/day", working: "Up to 1/8 tsp/day" },
  { weight: "10 lbs (4.5 kg)", start: "1/8 tsp/day", working: "Up to 1/4 tsp/day" },
  { weight: "20 lbs (9 kg)", start: "1/4 tsp/day", working: "Up to 1/2 tsp/day" },
  { weight: "40 lbs (18 kg)", start: "1/2 tsp/day", working: "Up to 1 tsp/day" },
  { weight: "60 lbs (27 kg)", start: "3/4 tsp/day", working: "Up to 1 1/2 tsp/day" },
  { weight: "80 lbs+ (36+ kg)", start: "1 tsp/day", working: "Up to 2 tsp/day (split)" },
];

const SUPPLEMENT_ROWS = [
  {
    form: "Golden paste (homemade)",
    bio: "High — fat + black pepper extract dramatically increase absorption",
    best: "Whole-food approach; budget-friendly",
    cons: "Messy; 2-week shelf life",
  },
  {
    form: "Plain turmeric powder",
    bio: "Low — poorly absorbed without fat or piperine",
    best: "Use only within the golden paste recipe",
    cons: "Minimal benefit if given plain",
  },
  {
    form: "Commercial curcumin dog supplements",
    bio: "Variable — BCM-95, Meriva, or piperine-enhanced formulas are best",
    best: "Precise dosing; joint supplements with fish oil",
    cons: "Cost; quality varies widely",
  },
  {
    form: "Turmeric tablets (standardized)",
    bio: "Moderate to high if formulated with black pepper extract",
    best: "Convenience; easy to add to dog's food",
    cons: "Check label — many have poor bioavailability",
  },
  {
    form: "Fresh turmeric root",
    bio: "Moderate — still needs fat + black pepper extract",
    best: "Natural option; ginger family member",
    cons: "Hard to dose accurately by dog's size",
  },
];

const SIDE_EFFECTS = [
  {
    icon: Droplets,
    title: "Stomach upset",
    body: "Vomiting, loose stools, or reduced appetite — the most common side effect. Occurs especially at high doses or in dogs with a sensitive stomach. Build up slowly.",
  },
  {
    icon: Activity,
    title: "Slow blood clotting",
    body: "Curcumin inhibits platelet aggregation. Risk increases with NSAIDs or anticoagulants. Stop turmeric at least one week before surgery.",
  },
  {
    icon: AlertTriangle,
    title: "Gallbladder stimulation",
    body: "Turmeric increases bile production, which can worsen gallbladder disease or gallbladder stones. Avoid entirely in dogs with known gallbladder conditions.",
  },
  {
    icon: FlaskConical,
    title: "Lower blood sugar",
    body: "May lower blood sugar and blood pressure. Caution in diabetic dogs on insulin or dogs on antihypertensive medications.",
  },
  {
    icon: AlertTriangle,
    title: "Stomach ulcers",
    body: "Rare with long-term high doses. Keep within the conservative dose ranges in the chart above to avoid this risk.",
  },
  {
    icon: ShieldCheck,
    title: "Constipation",
    body: "The powder can be drying. Use the golden paste recipe (which includes oil) and ensure adequate moisture in dog's food.",
  },
];

const REFERENCES = [
  "Nagy, D. et al. (2023). Curcumin supplementation in dogs — antioxidant and anti-inflammatory effects. PMC / National Library of Medicine.",
  "Purina (2022). Can Dogs Have Turmeric? Purina Pet Care Blog. purina.com.",
  "Banik, U. et al. (2023). Curcumin and its multifaceted role in drug interactions and bioavailability. Biomedicines, PMC10111629. National Library of Medicine.",
  "PetMD (2020). Turmeric for Dogs: Is It Safe? PetMD Editorial. petmd.com.",
  "VCA Hospitals (2020). Herbs — General Use in Pets. VCA Animal Hospitals. vcahospitals.com.",
  "AVMA (2021). Dietary Supplements for Pets — Owner Guidance. American Veterinary Medical Association. avma.org.",
  "Pooch & Mutt (2022). Turmeric for Dogs Dosage Guide. poachandmutt.com.",
  "Hampton Roads Vet Hospice (2018). Golden Paste Recipe for Dogs. hamptonroadsvet.com.",
  "Napa Holistic Vet (2016). Golden Paste Dosage Guidelines for Dogs. napaholisticvet.com.",
  "FutureYou Health (2023). Turmeric and Blood Sugar — Safety in Pets. futureyouhealth.com.",
  "Srivastava, R. et al. (1986). Curcumin inhibits platelet aggregation. Thrombosis Research, PMID 3092945. National Library of Medicine.",
  "Shoba, G. et al. (1998). Influence of piperine on the pharmacokinetics of curcumin — 2000% bioavailability increase. Planta Medica, PMID 9619120. National Library of Medicine.",
];

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
        Chapter {n}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-deep leading-[1.1]">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-ink-deep" />
    </div>
  );
}

export default function IsTurmericGoodForDogsGuide() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Reading progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-ink-deep transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="container flex h-14 items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Field Guide · Canine Nutrition
          </div>
          <div className="text-xs text-muted-foreground hidden sm:block">
            Reviewed by Celsius Herbs vet team
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-peach">
        <div className="container grid lg:grid-cols-12 gap-10 py-16 lg:py-24 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-deep/70">
              <span className="inline-flex items-center gap-1.5">
                <Stethoscope className="h-3.5 w-3.5" /> Canine Wellness
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 10 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] text-ink-deep">
              Is turmeric good
              <br />
              for dogs?{" "}
              <span className="italic text-accent">Vets weigh in.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-deep/80 max-w-xl leading-relaxed">
              Turmeric's active compound, curcumin, has real anti-inflammatory
              and antioxidant properties — but the dose, form, and your dog's
              health status matter enormously. This guide covers safe dosage
              by weight, the golden paste recipe, side effects, and what the
              evidence actually says about turmeric for dogs with allergies,
              itchy skin, and joint issues.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-ink-deep text-primary-foreground hover:bg-ink-deep/90"
                onClick={() =>
                  document
                    .getElementById("dosage")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See dosage chart
              </Button>
              <a href="https://celsiusherbs.com/products/natural-dog-ear-cleanser-infection">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-ink-deep/20"
                >
                  See PetGlow Ear Cleaner
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={hero}
                alt="Golden bowl of turmeric paste beside a calm golden retriever — is turmeric good for dogs guide"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-deep/80 to-transparent">
                <p className="font-serif text-lg text-primary-foreground italic">
                  "A natural anti-inflammatory that's been part of integrative vet practice for decades."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="container py-16">
        <article className="space-y-20 max-w-3xl mx-auto">

          {/* Static Table of Contents */}
          <nav className="mb-4 rounded-2xl border border-border bg-card/60 px-6 sm:px-8 py-6">
            <div className="text-[10px] tracking-[0.28em] uppercase text-accent mb-4">
              In this guide
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 list-none p-0 m-0">
              {SECTIONS.map((s, i) => (
                <li key={s.id} className="m-0">
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-3 py-1.5 text-foreground hover:text-accent transition-colors"
                  >
                    <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-snug group-hover:underline underline-offset-4">
                      {s.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-5 pt-5 border-t border-border/60 flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
              <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>
                Educational content only — not veterinary advice. Always consult
                your vet before adding supplements, especially if your dog is on
                medication.
              </span>
            </div>
          </nav>

          {/* Chapter 01 — Benefits */}
          <section id="benefits" className="scroll-mt-24">
            <SectionLabel n="01" title="Benefits of Turmeric for Dogs — What the Evidence Shows" />
            <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-ink-deep first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Turmeric is a member of the ginger family whose active compound,
              curcumin, delivers genuine anti-inflammatory and antioxidant
              benefits — but the evidence base in dogs is thinner than in
              humans, and most large clinical trials are in people.
            </p>
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgBenefits}
                alt="Turmeric root and powder beside a small dog's paw — benefits of turmeric for dogs"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              In a published canine study, dietary curcumin at approximately
              30&nbsp;mg per dog per day reduced leukocyte counts and
              measurable oxidative stress markers — confirming real
              anti-inflammatory effects in dogs, not just lab mice.{" "}
              <em>[Source: PMC (Nagy et al.), 2023]</em> The AVMA and VCA
              Hospitals both emphasize that natural supplements like turmeric
              should support, not replace, evidence-based veterinary treatment.{" "}
              <em>[Source: AVMA, 2021]</em>
            </p>
            <div className="space-y-4 mt-6">
              {[
                {
                  icon: PawPrint,
                  title: "Joint health and mobility support",
                  body: "Moderate evidence. Curcumin suppresses NF-κB and COX-2 inflammatory pathways, supporting joint health in arthritic dogs. Integrative vets use it alongside NSAIDs and fish oil for osteoarthritis, hip dysplasia, and joint issues — not as a sole treatment. A good pain reliever adjunct that helps ease stiffness in senior dogs.",
                  strength: "Moderate",
                },
                {
                  icon: ShieldCheck,
                  title: "Antioxidant benefits",
                  body: "Moderate evidence. Curcumin helps combat free radicals and reduces oxidative stress markers, delivering antioxidant benefits that protect cell integrity. [Source: PMC (Nagy et al.), 2023]",
                  strength: "Moderate",
                },
                {
                  icon: Activity,
                  title: "Immune system support",
                  body: "Weak to moderate. Some immune system modulation is measurable, but 'immune boosting' is scientifically murkier than advertising implies. [Source: PMC (Nagy et al.), 2023]",
                  strength: "Weak–Moderate",
                },
                {
                  icon: Leaf,
                  title: "Digestive health",
                  body: "Weak. In humans, curcumin has shown positive effects in IBD. In dogs, direct clinical trials are limited — and too much turmeric can cause stomach upset in dogs with a sensitive stomach. [Source: PetMD, 2020]",
                  strength: "Weak",
                },
              ].map((b) => (
                <div key={b.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <b.icon className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-lg text-ink-deep">{b.title}</h3>
                      <span className="text-[10px] uppercase tracking-wide text-muted-foreground border border-border rounded px-2 py-0.5">
                        {b.strength}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/75 leading-relaxed">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Chapter 02 — Dosage */}
          <section id="dosage" className="scroll-mt-24">
            <SectionLabel n="02" title="Turmeric for Dogs Dosage Chart by Weight" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgDosage}
                alt="Golden paste in a ceramic bowl with measuring spoons — turmeric for dogs dosage"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              There is no single universally agreed-upon dose for dog turmeric.
              What veterinary and integrative pet nutrition sources agree on is
              a conservative starting point:{" "}
              <strong>1/8 to 1/4 teaspoon per 10 lbs of body weight per day</strong>,
              mixed into dog's food as golden paste.{" "}
              <em>[Source: Pooch &amp; Mutt, 2022]</em> Always start at the
              low end and increase gradually over 7–10 days while watching for
              stomach upset. Too much turmeric too quickly is the most common
              reason dogs experience GI problems.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left">
                  <tr>
                    <th className="px-4 py-3 font-medium text-ink-deep">Dog Weight</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Starting Dose</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Working Dose</th>
                  </tr>
                </thead>
                <tbody>
                  {DOSAGE_ROWS.map((row, i) => (
                    <tr key={row.weight} className={i % 2 ? "bg-secondary/20" : "bg-card"}>
                      <td className="px-4 py-3 font-medium text-ink-deep">{row.weight}</td>
                      <td className="px-4 py-3 text-foreground/75">{row.start}</td>
                      <td className="px-4 py-3 text-foreground/75">{row.working}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              For turmeric powder as golden paste. Dog's size and health status
              affect the right dose. Commercial dog supplements have their own
              label dosing — follow that unless your vet specifies otherwise.
              [Source: Pooch &amp; Mutt, 2022] [Source: Hampton Roads Vet Hospice, 2018]
            </p>
            <div className="mt-6 p-5 rounded-xl bg-destructive/5 border border-destructive/20">
              <div className="text-[10px] tracking-[0.25em] uppercase text-destructive mb-2">
                Important
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                If your dog is on NSAIDs, blood thinners, insulin, or
                antihypertensives, check with your vet before adding turmeric
                to dog's diet. Blood clotting drug interactions are real and
                clinically significant. [Source: Banik et al., PMC10111629, 2023]
              </p>
            </div>
          </section>

          {/* Chapter 03 — Golden Paste */}
          <section id="golden-paste" className="scroll-mt-24">
            <SectionLabel n="03" title="Golden Paste for Dogs — Whole Food Recipe with Coconut Oil" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Golden paste is the preferred whole food recipe for adding
              turmeric to dog's diet because it solves curcumin's biggest
              limitation: poor bioavailability. Curcumin is fat-soluble and
              poorly absorbed when given plain — bioavailability increases
              dramatically when combined with coconut oil (fat) and black pepper
              extract (piperine).{" "}
              <em>[Source: PMC (Nagy et al.), 2023]</em>
            </p>
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 mb-6">
              <h3 className="font-serif text-xl text-ink-deep">Ingredients</h3>
              <ul className="space-y-2 text-sm text-foreground/85 list-disc pl-5">
                <li>1/2 cup organic turmeric powder</li>
                <li>1 cup water (plus extra to adjust consistency)</li>
                <li>
                  1/4 cup coconut oil — or fish oil; any dog-safe fat works for
                  this whole food recipe
                </li>
                <li>
                  1 teaspoon freshly ground black pepper — the black pepper
                  extract (piperine) is non-negotiable for absorption
                </li>
              </ul>
              <h3 className="font-serif text-xl text-ink-deep pt-2">Method</h3>
              <ol className="space-y-2 text-sm text-foreground/85 list-decimal pl-5">
                <li>
                  Combine turmeric powder and water in a saucepan over low heat.
                </li>
                <li>
                  Stir continuously for 7–10 minutes until a thick paste forms.
                  Adjust with water or more turmeric powder as needed.
                </li>
                <li>
                  Remove from heat. Stir in coconut oil and black pepper extract
                  until fully combined.
                </li>
                <li>
                  Cool completely. Store in a sealed jar in the refrigerator for
                  up to 2 weeks, or freeze in small portions.
                </li>
              </ol>
              <p className="text-xs text-muted-foreground italic">
                [Source: Hampton Roads Vet Hospice, 2018] [Source: YouTube Vet Video, 2021]
              </p>
            </div>
            <p className="text-base leading-relaxed text-foreground/80">
              Mix the paste into wet food or broth. Start with only a small
              amount — a good starting dose keeps digestive health intact while
              dogs eat turmeric for the first time. Build up gradually over
              1–2 weeks. Most dogs accept it without complaint when it's
              thoroughly mixed into food.
            </p>
          </section>

          {/* Chapter 04 — Side Effects */}
          <section id="side-effects" className="scroll-mt-24">
            <SectionLabel n="04" title="Side Effects of Turmeric in Dogs" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgSideEffects}
                alt="Dog at a vet consultation table — side effects of turmeric in dogs"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              Dog turmeric is generally safe at conservative doses, but the
              side effects of turmeric in dogs are real — especially blood
              clotting interference, which makes this natural supplement
              unsuitable for some dogs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {SIDE_EFFECTS.map((s) => (
                <div key={s.title} className="rounded-xl border border-border bg-secondary/40 p-5">
                  <s.icon className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-serif text-lg text-ink-deep mb-1.5">{s.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl bg-destructive/5 border border-destructive/20">
              <div className="text-[10px] tracking-[0.25em] uppercase text-destructive mb-2">
                Stop immediately if you see
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                Repeated vomiting, blood in stool, weight loss, or signs of
                slow blood clotting (increased bruising). Dogs with bleeding
                disorders should never receive turmeric. [Source: Srivastava et al., PMID 3092945]
              </p>
            </div>
          </section>

          {/* Chapter 05 — Allergies */}
          <section id="allergies" className="scroll-mt-24">
            <SectionLabel n="05" title="Turmeric for Dogs with Itchy Skin, Allergies and Digestive Health" />
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              The anti-inflammatory properties of dog turmeric make it a
              logical candidate for dogs with allergic inflammatory skin
              disease. As a natural anti-inflammatory, curcumin suppresses
              inflammatory mediators — including histamine-related immune
              system cell recruitment — that drive allergic skin responses.{" "}
              <em>[Source: PMC (Nagy et al.), 2023]</em>
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              The honest caveat: no controlled clinical trials in dogs confirm
              that turmeric alone significantly reduces itching or allergic
              flares. Any positive effect is likely modest. For a German
              Shepherd with severe atopic dermatitis, turmeric is not a
              substitute for immunotherapy or prescription biologics.{" "}
              <em>[Source: VCA, 2020]</em>
            </p>
            <div className="p-5 rounded-xl bg-card border border-border mb-6">
              <h3 className="font-serif text-lg text-ink-deep mb-3">
                Best approach for mildly itchy dogs
              </h3>
              <ul className="space-y-2 text-sm text-foreground/85 list-disc pl-5">
                <li>
                  Add golden paste at a conservative dose to dog's food
                </li>
                <li>
                  Combine with fish oil — omega-3s and turmeric's
                  anti-inflammatory effects work synergistically to reduce
                  the inflammatory load driving allergic skin reactions
                </li>
                <li>
                  Allow 4–6 weeks before evaluating; anti-inflammatory effects
                  build over time
                </li>
                <li>
                  Do not apply topically — the anti-inflammatory effects of
                  dog turmeric are systemic, not topical. Direct application
                  stains and can irritate skin
                </li>
              </ul>
            </div>
            <p className="text-base leading-relaxed text-foreground/80">
              For digestive health: the same anti-inflammatory properties may
              help in gut inflammatory conditions, but too much turmeric can
              cause stomach upset in dogs with sensitive digestive health. Start
              especially slowly and watch for any stomach upset before adding
              turmeric more freely to dog's food. [Source: PetMD, 2020]
            </p>
          </section>

          {/* Chapter 06 — Ginger and Turmeric */}
          <section id="ginger-turmeric" className="scroll-mt-24">
            <SectionLabel n="06" title="Ginger and Turmeric for Senior Dogs and Joint Issues" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgGingerTurmeric}
                alt="Fresh ginger root and turmeric root on linen — ginger and turmeric for dogs"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Ginger is also a ginger family member (Zingiberaceae) with
              anti-inflammatory and antioxidant properties, and vets sometimes
              use it together with dog turmeric — especially for senior dogs
              with joint issues, hip dysplasia, or both joint pain and
              digestive sensitivity.
            </p>
            <div className="rounded-xl border border-border bg-card p-5 mb-6">
              <h3 className="font-serif text-lg text-ink-deep mb-3">
                Why the combination works
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-foreground/80">
                <div>
                  <strong className="block text-ink-deep mb-1">Ginger</strong>
                  Well-supported for nausea, motion sickness, and stomach upset.
                  Its antiemetic properties help counteract turmeric's tendency
                  to cause stomach upset at higher doses. Also supports joint
                  health in senior dogs. [Source: VCA, 2020]
                </div>
                <div>
                  <strong className="block text-ink-deep mb-1">Turmeric</strong>
                  Addresses systemic inflammatory disease that drives joint pain.
                  Combined, the two support mobility support, ease stiffness,
                  and improve daily comfort for senior dogs. [Source: Pooch &amp; Mutt, 2022]
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-ink-deep text-primary-foreground">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                Safety note
              </div>
              <p className="text-sm leading-relaxed">
                Both herbs affect blood clotting — introduce separately into
                dog's food first, and do not give both to dogs on
                anticoagulants without vet clearance. A good starting dose for
                ginger is around 1/4 teaspoon fresh grated ginger for a 20–30
                lb dog. [Source: VCA, 2020]
              </p>
            </div>
          </section>

          {/* Chapter 07 — Best Form */}
          <section id="best-form" className="scroll-mt-24">
            <SectionLabel n="07" title="Best Dog Turmeric Supplements: Forms Compared" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Not all dog supplements for turmeric are equal. Bioavailability —
              how much curcumin actually reaches your dog's bloodstream —
              varies dramatically by form. An Australian veterinarian and
              integrative vet practitioner notes that the golden paste whole
              food recipe remains the most practical high-bioavailability option
              for most pet parents.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left">
                  <tr>
                    <th className="px-4 py-3 font-medium text-ink-deep">Form</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Bioavailability</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Best for</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Drawbacks</th>
                  </tr>
                </thead>
                <tbody>
                  {SUPPLEMENT_ROWS.map((row, i) => (
                    <tr key={row.form} className={i % 2 ? "bg-secondary/20" : "bg-card"}>
                      <td className="px-4 py-3 font-medium text-ink-deep">{row.form}</td>
                      <td className="px-4 py-3 text-foreground/75">{row.bio}</td>
                      <td className="px-4 py-3 text-foreground/75">{row.best}</td>
                      <td className="px-4 py-3 text-foreground/75">{row.cons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground italic">
              [Source: PMC (Nagy et al.), 2023] [Source: Shoba et al., PMID 9619120, 1998] [Source: Purina, 2022]
            </p>
            <div className="mt-6 p-5 rounded-xl bg-card border border-border">
              <h3 className="font-serif text-lg text-ink-deep mb-3">
                What to look for in dog supplements
              </h3>
              <ul className="space-y-2 text-sm text-foreground/85 list-disc pl-5">
                <li>Specified curcumin content — not just "turmeric extract"</li>
                <li>
                  A bioavailability-enhancing system: black pepper extract,
                  phospholipids, or lipid carrier — this is what makes
                  bioavailability increase dramatically
                </li>
                <li>Third-party testing: USP, NSF, or NASC seal</li>
                <li>
                  Formulation for dog's size (not human-formulated turmeric tablets)
                </li>
                <li>
                  Joint supplements combining curcumin with fish oil and
                  glucosamine for dogs with joint health and joint issues
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <SectionLabel n="08" title="Frequently Asked Questions" />
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`q${i}`}>
                  <AccordionTrigger className="text-left font-serif text-lg py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed text-[15px] pb-5">
                    <p>{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* References */}
          <section id="references" className="scroll-mt-24">
            <SectionLabel n="09" title="References &amp; Further Reading" />
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5 leading-relaxed">
              {REFERENCES.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-muted-foreground/80">
              Educational content only — does not replace individualized
              veterinary diagnosis or treatment.
            </p>
          </section>

          {/* Reviewer attribution (pet article) */}
          <ReviewedByDrAlex />

          {/* Final CTA */}
          <section className="scroll-mt-24 bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
            <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
              Keep your dog's whole health in focus
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Turmeric works best alongside a clean ear routine.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
              For dogs prone to ear and skin flare-ups, keeping the ear canal
              clean is foundational. Celsius Herbs' PetGlow Ear Cleaner is
              formulated with plant-based actives to gently remove debris and
              reduce the microbial load that drives ear inflammation — a
              practical complement to any internal anti-inflammatory protocol.
            </p>
            <a href="https://celsiusherbs.com/products/natural-dog-ear-cleanser-infection">
              <Button
                size="lg"
                className="rounded-full bg-primary-foreground text-ink-deep hover:bg-primary-foreground/90"
              >
                Explore PetGlow Ear Cleaner →
              </Button>
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
