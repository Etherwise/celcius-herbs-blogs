import { useEffect, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Clock,
  Droplets,
  FlaskConical,
  Leaf,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DOG_CONSTIPATION_HOME_REMEDY_FAQS as FAQS } from "@/lib/blog/dog-constipation-home-remedy-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";

import hero from "@/assets/blog/dog-constipation-home-remedy-hero.webp";
import imgCauses from "@/assets/blog/dog-constipation-home-remedy-causes.webp";
import imgRemedies from "@/assets/blog/dog-constipation-home-remedy-remedies.webp";
import imgPumpkin from "@/assets/blog/dog-constipation-home-remedy-pumpkin.webp";
import imgVet from "@/assets/blog/dog-constipation-home-remedy-vet.webp";

/**
 * Dog Constipation Home Remedy — A Pet Owner's Evidence Guide
 *
 * Primary keyword: "dog constipation home remedy"
 * Secondary keywords: dog constipation remedies, how to help a constipated dog,
 *   pumpkin for dog constipation, olive oil for dog constipation, dog not pooping,
 *   how often should dogs poop, natural laxative for dogs, constipated dog symptoms
 */

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "frequency", label: "How often dogs should poop" },
  { id: "causes", label: "8 common causes" },
  { id: "warning-signs", label: "Emergency warning signs" },
  { id: "remedies", label: "8 home remedies with dosages" },
  { id: "pumpkin", label: "Pumpkin dosage chart" },
  { id: "vet", label: "When to see a vet" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const PUMPKIN_ROWS = [
  { weight: "Under 10 lbs", start: "1 tsp once daily", max: "2 tsp/day (split)" },
  { weight: "10–20 lbs", start: "1 tbsp once daily", max: "2 tbsp/day (split)" },
  { weight: "20–40 lbs", start: "2 tbsp once daily", max: "3 tbsp/day (split)" },
  { weight: "40–70 lbs", start: "2–3 tbsp once daily", max: "4 tbsp/day (split)" },
  { weight: "70+ lbs", start: "3–4 tbsp once daily", max: "5–6 tbsp/day (split)" },
];

const CAUSES = [
  {
    icon: Droplets,
    title: "Dehydration / low moisture diet",
    body: "Dogs on dry kibble without adequate water produce harder, slower-moving stool. A poor diet low in moisture is the single most common cause of canine constipation. [Source: PetMD, 2021]",
  },
  {
    icon: Leaf,
    title: "Low dietary fiber",
    body: "Without fiber in dog's food, stool loses bulk and the gut has less to work with. Highly digestible, low-residue diets slow transit through the dog's digestive tract. [Source: PetCareRx, 2023]",
  },
  {
    icon: Activity,
    title: "Lack of regular exercise",
    body: "Exercise increases blood flow to the gut and directly stimulates intestinal motility. Sedentary dogs have slower digestive systems and are more prone to constipation. [Source: WebMD, 2021]",
  },
  {
    icon: FlaskConical,
    title: "Foreign objects / indigestible material",
    body: "Dogs that chew bones, eat grass, or groom heavily can accumulate foreign objects and hair in the digestive system that form dry, hard fecal masses. A bowel obstruction from foreign objects is a vet emergency. [Source: PetMD, 2021]",
  },
  {
    icon: AlertTriangle,
    title: "Pain when posturing",
    body: "Dogs with arthritis, hip dysplasia, or spinal disease may avoid squatting because it hurts. Anal sac disease and perianal fistulas can also cause dogs to avoid defecating. [Source: PetMD, 2021]",
  },
  {
    icon: ShieldCheck,
    title: "Enlarged prostate",
    body: "Intact male dogs can develop a prostate large enough to partially compress the colon, narrowing the passage for stool through the dog's intestinal tract. [Source: PetMD, 2021]",
  },
  {
    icon: FlaskConical,
    title: "Medications",
    body: "Opioid pain medications, certain antacids, diuretics, and some antihistamines slow gut motility in dogs. [Source: PetMD, 2021]",
  },
  {
    icon: AlertTriangle,
    title: "Metabolic disease",
    body: "Kidney disease, hypothyroidism, hypercalcemia, and electrolyte imbalances reduce the dog's digestive system's ability to move stool efficiently. Chronic constipation with an underlying health condition needs a vet workup. [Source: PetMD, 2021]",
  },
];

const WARNING_SIGNS = [
  "No bowel movement for 48+ hours, especially if abnormal for your dog",
  "Repeated unsuccessful straining — crying, whimpering, or collapsing when trying to defecate",
  "Vomiting (especially repeated or with bile) combined with no stool produced",
  "A visibly distended or very firm abdomen in dogs",
  "Blood in stool, black or tarry stool, or suspected ingestion of foreign objects",
  "Marked lethargy, weakness, or refusal to eat in dogs",
  "Dogs on NSAIDs, anticoagulants, insulin, or other prescriptions — check with vet before adding any remedy",
];

const REMEDIES = [
  {
    icon: Droplets,
    number: "01",
    title: "Increase Water Intake",
    body: "Ensuring dogs have constant access to fresh, clean water is the foundation of all other at home remedies. Add a tablespoon of low-sodium broth to water bowls to encourage drinking. Dogs on dry kibble often drink less than they need for healthy digestion. [Source: Rancho Cucamonga Vets, 2023]",
    evidence: "Moderate–strong",
    caution: null,
  },
  {
    icon: Leaf,
    number: "02",
    title: "Plain Canned Pumpkin",
    body: "The most widely recommended dog constipation home remedy. Plain canned pumpkin is a natural stool softener — high in soluble fiber and moisture. Use only 100% pure pumpkin puree, never pumpkin pie filling (contains sugar, spices, and sometimes xylitol). See the dosage chart by weight in Chapter 05. [Source: PetMD, 2021]",
    evidence: "Moderate",
    caution: "Too much causes diarrhea. Use sparingly in diabetic dogs.",
  },
  {
    icon: Activity,
    number: "03",
    title: "Regular Exercise and Extra Walks",
    body: "Physical activity increases blood flow to the gut and directly stimulates intestinal motility in dogs. Multiple short walks (every 3–4 hours) can be more effective than one long walk for treating constipation. Allow extra sniffing and squatting attempts. [Source: WebMD, 2021]",
    evidence: "Moderate",
    caution: null,
  },
  {
    icon: FlaskConical,
    number: "04",
    title: "Switch to Wet / Canned Food",
    body: "Wet food contains 70–80% moisture versus dry kibble's 8–10%. Replacing some or all of dog's food with canned food for 2–3 days significantly softens stool. Mix into dog's food gradually to avoid GI upset. [Source: WebMD, 2021]",
    evidence: "Moderate",
    caution: null,
  },
  {
    icon: Droplets,
    number: "05",
    title: "Low-Sodium Bone Broth",
    body: "Adding 2–4 tablespoons of plain, low-sodium broth to dog's food or water encourages fluid intake. Most dogs eat food they'd otherwise ignore when broth is added. Use unsalted broth — standard store-bought broth is too salty for dogs. [Source: PetMD, 2021]",
    evidence: "Weak–moderate",
    caution: null,
  },
  {
    icon: Leaf,
    number: "06",
    title: "Dietary Fiber and Laxative Foods",
    body: "Dietary fiber supplements like psyllium husk can help dogs with chronic constipation — only with adequate water, as fiber without water worsens constipation. Plain cooked green beans, carrots, or sweet potato also add fiber to dog's diet. A high fiber diet supports healthy digestion long-term. [Source: Pet Doctors of America, 2024]",
    evidence: "Moderate–strong (vet-guided); weak–moderate (vegetables)",
    caution: "Never use onions, garlic, grapes, or raisins — all toxic to dogs.",
  },
  {
    icon: FlaskConical,
    number: "07",
    title: "Apple Cider Vinegar",
    body: "Apple cider vinegar appears in many lists of natural remedies for dog constipation as a way to support the dog's digestive system. Evidence is largely anecdotal with no peer-reviewed trials. If used: no more than 1 tsp (small dogs) to 1 tbsp (large dogs) diluted in water and added to dog's food. Do not use in dogs with GI sensitivity or kidney disease. [Source: PetCareRx, 2023]",
    evidence: "Weak / anecdotal",
    caution: "Do not use undiluted — acidity can irritate the dog's digestive tract.",
  },
  {
    icon: AlertTriangle,
    number: "08",
    title: "Olive Oil (Use with Caution)",
    body: "Olive oil and coconut oil are frequently suggested but veterinary-reviewed sources flag real health concerns — both can trigger pancreatitis in susceptible dogs. If tried: no more than 1 tsp (small dogs) or 1 tbsp (large dogs), once only in dog's food. Remedies 1–6 are safer starting points for treating constipation in dogs. [Source: GoodRx, 2022]",
    evidence: "Weak / anecdotal",
    caution: "Do not use in dogs with history of pancreatitis or obesity.",
  },
];

const REFERENCES = [
  "PetMD Editorial (2021). Dog Constipation: Causes, Symptoms, and Treatment. PetMD.",
  "WebMD Pets (2021). Constipation in Dogs. WebMD.",
  "Rancho Cucamonga Vets (2023). Dog Constipation: What to Do. ranchocucamongavets.com.",
  "Pet Doctors of America (2024). Dog Constipation Home Remedy Options. petdoctorsofamerica.com.",
  "AKC Pet Insurance (2021). Can Dogs Eat Pumpkin? AKC.",
  "Wedgewood Pharmacy (2022). Pumpkin for Dogs and Cats — Fiber and Dosing Guide. wedgewoodpharmacy.com.",
  "GoodRx Health (2022). Dog Constipation: What to Give and What to Avoid. goodrx.com.",
  "PetCareRx (2023). Dog Constipation — Causes, Treatments and Prevention. petcarerx.com.",
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

export default function DogConstipationHomeRemedyGuide() {
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
            Field Guide · Canine Digestion
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
                <Stethoscope className="h-3.5 w-3.5" /> Canine Digestion
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 10 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] text-ink-deep">
              Dog constipation
              <br />
              <span className="italic text-accent">home remedies.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-deep/80 max-w-xl leading-relaxed">
              Straining with nothing to show for it. Skipped stool cycles.
              This guide covers 8 safe remedies for dog constipation with
              dosages, a pumpkin chart by weight, and clear signs that mean
              it's time to call the vet.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-ink-deep text-primary-foreground hover:bg-ink-deep/90"
                onClick={() =>
                  document
                    .getElementById("remedies")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See the remedies
              </Button>
              <a href="https://celsiusherbs.com/products/natural-dog-ear-cleanser-infection">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-ink-deep/20"
                >
                  PetGlow Ear Cleaner
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={hero}
                alt="Dog sitting outdoors looking uncomfortable — illustrative imagery for dog constipation home remedy guide"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-deep/80 to-transparent">
                <p className="font-serif text-lg text-primary-foreground italic">
                  "Mild constipation is one of the most manageable things you can address at home."
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
              <span>Educational only — not a substitute for veterinary advice. Dogs with 48+ hours without stool, vomiting, or abdominal pain need a clinician.</span>
            </div>
          </nav>

          {/* Intro */}
          <section className="scroll-mt-24">
            <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-ink-deep first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Many pet parents deal with a constipated dog at least once — and
              most cases of mild canine constipation resolve with simple dietary
              changes, hydration, and regular exercise.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              A dog constipation home remedy is appropriate when your dog is
              still bright, eating, and has not gone more than 24–36 hours
              without a bowel movement. When dogs reach the 48-hour mark with
              no stool — or show signs of pain, vomiting, or significant
              lethargy — this moves from a home-care situation to a vet visit.{" "}
              <em>[Source: PetMD, 2021]</em>
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              Dog constipation symptoms and their urgency depend heavily on how
              long they've been present and what else is going on in your dog's
              digestive system. The remedies below are listed in order from
              safest and most evidence-backed to more cautious options.
            </p>
          </section>

          {/* Chapter 01 — Frequency */}
          <section id="frequency" className="scroll-mt-24">
            <SectionLabel n="01" title="How Often Should Dogs Poop?" />
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Most adult dogs on a standard commercial diet pass stool{" "}
              <strong>1–2 times a day</strong>. [Source: PetMD, 2021] Some
              healthy dogs only go once every 24–36 hours — that's within
              normal range as long as stools are soft-formed and dogs show no
              strain. Infrequent bowel movements alone are not a concern if
              stool quality is normal. [Source: PetMD, 2021]
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Puppies fed 3–4 meals daily typically have bowel movements 3–4
              times a day or more. [Source: PetMD, 2021] Dog's bowel movements
              also slow with age — senior dogs tend to go less frequently.
              Occasional constipation (one missed stool cycle) in dogs that are
              otherwise acting normal is very different from dogs constipated
              for 48+ hours. [Source: PetCareRx, 2023]
            </p>
            <div className="mt-6 p-5 rounded-xl bg-secondary/40 border border-border">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                The most useful benchmark
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                It's not an absolute number — it's <strong>your dog's own baseline</strong>.
                A dog that normally poops twice daily and suddenly hasn't gone
                in 36 hours is more concerning than a dog whose normal pattern
                is once every 30 hours. Know your dog's rhythm. [Source: PetMD, 2021]
              </p>
            </div>
          </section>

          {/* Chapter 02 — Causes */}
          <section id="causes" className="scroll-mt-24">
            <SectionLabel n="02" title="8 Common Causes of Constipation in Dogs" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgCauses}
                alt="Veterinarian examining a dog's abdomen — causes of constipation in dogs"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              Constipation in dogs usually results from slowed movement of
              stool through the colon, increased water absorption from stool in
              the digestive tract, or physical obstruction. Understanding the
              cause helps you choose the right remedies for dog constipation
              and recognize when the cause is beyond home care. [Source: PetMD, 2021]
            </p>
            <div className="space-y-4">
              {CAUSES.map((c) => (
                <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <c.icon className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-ink-deep mb-1">{c.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              Older dogs are significantly more prone to canine constipation as
              the dog's digestive system slows with age. Chronic constipation
              in a senior dog with an underlying health condition warrants a vet
              workup, not repeated at home remedies. [Source: PetMD, 2021]
            </p>
          </section>

          {/* Chapter 03 — Warning signs */}
          <section id="warning-signs" className="scroll-mt-24">
            <SectionLabel n="03" title="Emergency Warning Signs" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Common symptoms dogs show when constipated include straining with
              little result, hard pellet-like stools, crying when trying to go,
              and a firm belly. [Source: PetMD, 2021] These dog constipation
              symptoms range from mild (manageable at home) to severe (needs a
              vet today). The following signs mean <strong>stop home treatment
              immediately</strong>:
            </p>
            <div className="space-y-3">
              {WARNING_SIGNS.map((sign, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl bg-destructive/5 border border-destructive/20 p-4"
                >
                  <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/85 leading-relaxed">{sign}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-xl bg-ink-deep text-primary-foreground">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                Why 48 hours matters
              </div>
              <p className="text-sm leading-relaxed">
                Prolonged constipation can progress to <strong>severe
                constipation</strong>, obstipation (complete inability to pass
                stool), and megacolon in dogs — a permanently dilated colon.
                Both conditions require proper treatment from a vet, not more
                natural remedies. When a dog shows signs of severe constipation
                alongside vomiting or abdominal pain, this is a same-day
                emergency. [Source: PetMD, 2021]
              </p>
            </div>
          </section>

          {/* Chapter 04 — Remedies */}
          <section id="remedies" className="scroll-mt-24">
            <SectionLabel n="04" title="8 Safe Home Remedies with Dosages" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgRemedies}
                alt="Dog bowl with fresh water and pumpkin puree — home remedies for dog constipation"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              These remedies for dog constipation are appropriate for a{" "}
              <strong>bright, alert dog with mild constipation</strong> —
              straining or skipping one stool cycle, but showing none of the
              emergency signs above. Start with the safest at home remedies
              first (water, pumpkin, exercise) and layer in others as needed.
            </p>
            <div className="space-y-6">
              {REMEDIES.map((r) => (
                <div key={r.number} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                        Remedy {r.number}
                      </div>
                      <r.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-ink-deep mb-2">{r.title}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed mb-3">{r.body}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-secondary/60 text-foreground/70 px-2 py-1 rounded">
                          Evidence: {r.evidence}
                        </span>
                        {r.caution && (
                          <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-destructive/10 text-destructive px-2 py-1 rounded">
                            ⚠ {r.caution}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Chapter 05 — Pumpkin dosage */}
          <section id="pumpkin" className="scroll-mt-24">
            <SectionLabel n="05" title="Pumpkin for Dogs — Dosage Chart by Weight" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgPumpkin}
                alt="Plain canned pumpkin puree next to a dog bowl — pumpkin dosage for dog constipation"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Plain canned pumpkin is the most widely recommended dog
              constipation home remedy. It works as a gentle laxative and
              natural stool softener — helping produce softer stool that's
              easier for dogs to pass. These dosages are drawn from veterinary
              and pet-health sources. [Source: Wedgewood Pharmacy, 2022]{" "}
              [Source: AKC Pet Insurance, 2021]
            </p>
            <div className="overflow-x-auto rounded-xl border border-border mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left">
                  <tr>
                    <th className="px-4 py-3 font-medium text-ink-deep">Dog's Weight</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Starting Dose</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Max Daily Dose</th>
                  </tr>
                </thead>
                <tbody>
                  {PUMPKIN_ROWS.map((row, i) => (
                    <tr key={row.weight} className={i % 2 ? "bg-secondary/20" : "bg-card"}>
                      <td className="px-4 py-3 font-medium text-ink-deep">{row.weight}</td>
                      <td className="px-4 py-3 text-foreground/75">{row.start}</td>
                      <td className="px-4 py-3 text-foreground/75">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground italic mb-4">
              [Source: Wedgewood Pharmacy, 2022] [Source: AKC Pet Insurance, 2021]
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mb-4">
              Always start low and increase gradually if dogs show no bowel
              movement within 12–24 hours. Splitting the dose across two meals
              reduces the risk of loose stool in dogs with sensitive digestive
              systems. Mix pumpkin directly into dog's food — most dogs eat it
              willingly when blended in. [Source: Wedgewood Pharmacy, 2022]
            </p>
            <div className="mt-6 p-5 rounded-xl bg-destructive/5 border border-destructive/20">
              <div className="text-[10px] tracking-[0.25em] uppercase text-destructive mb-2">
                If constipation persists
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                If dog's bowel movements don't improve after 2 days at these
                doses, contact your veterinarian immediately. Prolonged
                constipation in dogs needs proper treatment. Recurring or
                chronic constipation always requires veterinary input to
                identify the underlying health condition.
              </p>
            </div>
          </section>

          {/* Chapter 06 — Vet */}
          <section id="vet" className="scroll-mt-24">
            <SectionLabel n="06" title="When to See a Vet" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgVet}
                alt="Veterinarian examining a dog's abdomen in a consultation room"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Natural remedies work for mild, short-duration constipation in
              otherwise well dogs. See a vet if your dog shows any of these
              signs:
            </p>
            <ul className="space-y-2 text-sm text-foreground/85 list-disc pl-5 mb-6">
              <li>No bowel movement for <strong>48+ hours</strong> despite home care [Source: PetMD, 2021]</li>
              <li>Repeated straining with no stool produced in dogs [Source: PetMD, 2021]</li>
              <li>Any vomiting, especially repeated or with bile [Source: PetMD, 2021]</li>
              <li>Pain or distress when dogs attempt to defecate [Source: PetMD, 2021]</li>
              <li>A hard, bloated, or tender abdomen in dogs [Source: PetMD, 2021]</li>
              <li>Blood or tarry black stool in dogs [Source: PetMD, 2021]</li>
              <li>Constipation persists in dogs on medications — check with vet before adding any remedies for dog constipation [Source: GoodRx, 2022]</li>
              <li>Senior dogs or dogs with known disease affecting the digestive system (kidney disease, hypothyroidism, spinal disease) [Source: PetMD, 2021]</li>
              <li><strong>Chronic constipation</strong> — dogs with recurring canine constipation need a vet to identify the underlying health condition [Source: PetMD, 2021]</li>
              <li>Prolonged constipation — if constipation persists beyond 48 hours, contact your veterinarian immediately [Source: PetMD, 2021]</li>
            </ul>
            <p className="text-base leading-relaxed text-foreground/80">
              A vet can distinguish simple dietary constipation from a bowel
              obstruction, obstipation, pelvic obstruction, megacolon, or
              systemic disease affecting the dog's digestive tract. Blood tests
              are typically run to check for metabolic causes. Dogs with severe
              constipation or recurring episodes benefit from a full workup
              rather than ongoing at home remedies. Foreign objects are also
              best ruled out by imaging before continuing home care.
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              This article is for educational purposes only and does not
              substitute for professional veterinary advice.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <SectionLabel n="07" title="Frequently Asked Questions" />
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
            <SectionLabel n="08" title="References" />
            <ol className="space-y-2 text-sm text-foreground/70 list-decimal pl-5">
              {REFERENCES.map((ref, i) => (
                <li key={i} className="leading-relaxed">{ref}</li>
              ))}
            </ol>
          </section>

          {/* ReviewedByDrAlex */}
          <ReviewedByDrAlex />

          {/* Final CTA */}
          <section className="scroll-mt-24 bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
            <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
              Keep your dog's whole health in focus
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Gut health and ear health are connected.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
              Ear infections and skin flares in dogs often share the same
              inflammatory root as GI upset. Celsius Herbs' PetGlow Ear
              Cleaner is formulated with plant-based actives to keep the ear
              canal clear and reduce the microbial load that drives recurring
              ear and skin inflammation — a practical complement to any
              internal wellness protocol.
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
