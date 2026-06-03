import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Bug,
  Clock,
  Droplets,
  Ear,
  FlaskConical,
  Leaf,
  Microscope,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Thermometer,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DOG_EAR_INFECTION_HOME_REMEDY_FAQS as FAQS } from "@/lib/blog/dog-ear-infection-home-remedy-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";

// Image set — stand-in photography reused from the cat-ear-infection post for
// this build; same apothecary/editorial register (warm peach palette, 35mm
// grain). WebP format.
import hero from "@/assets/blog/dog-ear-infection-home-remedy-hero.webp";
import imgSymptoms from "@/assets/blog/dog-ear-infection-home-remedy-symptoms.webp";
import imgCauses from "@/assets/blog/dog-ear-infection-home-remedy-causes.webp";
import imgRemedies from "@/assets/blog/dog-ear-infection-home-remedy-remedies.webp";
import imgVet from "@/assets/blog/dog-ear-infection-home-remedy-vet.webp";

/** ----------------------------------------------------------------
 * Dog Ear Infection Home Remedy — A Pet Parent's Field Guide
 *
 * Primary keyword: "dog ear infection home remedy" (Ahrefs US — vol 1,200 / KD 6 / TP 9.6k).
 * Secondary keywords woven into H2/H3s and copy:
 *   - home remedy for dog ear infection (2,000 / KD 5)
 *   - dog ear yeast infection home remedy (250 / KD 5)
 *   - dog ear fungal infection home remedy
 *   - dog ear infection home remedy apple cider vinegar / coconut oil / hydrogen peroxide
 *
 * Editorial structure mirrors CatEarInfectionGuide.tsx.
 * ---------------------------------------------------------------- */

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "intro", label: "Do they work?" },
  { id: "symptoms", label: "Symptoms" },
  { id: "causes", label: "Causes" },
  { id: "remedies", label: "Remedies rated" },
  { id: "cleaning", label: "Safe cleaning" },
  { id: "vet", label: "When to see a vet" },
  { id: "prevention", label: "Prevention" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const SYMPTOMS = [
  {
    icon: Wind,
    title: "Persistent head-shaking",
    desc: "Repeated, vigorous head-shaking or head-tilting — especially after rest — is the single most reliable early sign that something is wrong in your dog's ears.",
  },
  {
    icon: Droplets,
    title: "Dark or pus-like discharge",
    desc: "Brown waxy buildup points to yeast. Thick yellow-green pus with a sharp odor points to bacteria. A mix is common in chronic ear infections.",
  },
  {
    icon: Bug,
    title: "A bad or yeasty odor",
    desc: "A sour, yeasty, or rancid smell from the ear canal. Healthy ears are almost odorless inside the visible opening.",
  },
  {
    icon: AlertTriangle,
    title: "Redness, swelling, or scabbing",
    desc: "The canal opening looks red and inflamed rather than soft pink, and the ear flap may show scabs from over-scratching.",
  },
  {
    icon: PawPrint,
    title: "Scratching or pawing the ear",
    desc: "Intense scratching that can cause hair loss, sores, or bleeding around the ear and neck.",
  },
  {
    icon: Ear,
    title: "Pain when you touch the ear",
    desc: "Yelping, snapping, or pulling away when you handle your dog's ears signals that inflammation has reached the deeper canal.",
  },
];

const CAUSES = [
  {
    icon: Leaf,
    title: "Allergies (environmental or food)",
    body: "The #1 driver of recurrent dog ear infections. Allergic dogs often also lick paws or have itchy skin, and your dog's diet can be a hidden trigger. The infection is the symptom; the allergy is the cause.",
  },
  {
    icon: FlaskConical,
    title: "Yeast overgrowth (Malassezia)",
    body: "A normal resident of your dog's ears that blooms in warm, moist, inflamed conditions — producing brown waxy discharge and that tell-tale yeasty smell. The engine behind most dog ear yeast infection searches.",
  },
  {
    icon: Bug,
    title: "Bacterial infection",
    body: "Staphylococcus or Pseudomonas overgrowth in the ear canal, often after chronic inflammation. More likely to cause thick discharge and real pain.",
  },
  {
    icon: Thermometer,
    title: "Trapped moisture ('swimmer's ear')",
    body: "Water left in the ear canal after baths or swimming creates an infection-friendly environment — especially in dogs with floppy ears and poor air circulation.",
  },
  {
    icon: ShieldCheck,
    title: "Ear anatomy",
    body: "Narrow or hairy ear canals (Poodles, Schnauzers) and heavy ear flaps (Cocker Spaniels, Basset Hounds, Retrievers) trap debris and warmth.",
  },
  {
    icon: Microscope,
    title: "Ear mites or foreign bodies",
    body: "Ear mites (more common in puppies and shelter dogs) and foreign bodies like grass awns or foxtails cause sudden, intense, one-sided head shaking.",
  },
];

const REMEDIES = [
  {
    remedy: "Apple cider vinegar (diluted)",
    evidence: "Weak / in-vitro only",
    verdict: "Can sting badly; never on red, raw, or painful ears.",
  },
  {
    remedy: "Coconut oil",
    evidence: "Weak for infection",
    verdict: "May soothe intact skin, but traps moisture and won't treat the cause.",
  },
  {
    remedy: "Hydrogen peroxide",
    evidence: "Anecdotal at best",
    verdict: "Vet-discouraged — damages healthy tissue and is irritating.",
  },
  {
    remedy: "Witch hazel",
    evidence: "Weak",
    verdict: "Astringent and drying, but may irritate inflamed ear canals.",
  },
  {
    remedy: "Green tea rinse",
    evidence: "Anecdotal / weak",
    verdict: "Outer-ear wipe only; no clinical evidence it treats infection.",
  },
  {
    remedy: "Tea tree oil",
    evidence: "Antimicrobial but toxic",
    verdict: "Avoid — linked to neurotoxicity in dogs.",
  },
];

const CLEAN_RULES = [
  {
    do: true,
    text: "Fill the ear canal with a vet-formulated cleaner and gently massage the base of the ear for 20–30 seconds.",
  },
  {
    do: true,
    text: "Let your dog shake, then wipe only the areas you can see with a fresh cotton ball or gauze.",
  },
  {
    do: true,
    text: "Dry your dog's ears after baths and swims, and keep water out of the canal.",
  },
  {
    do: true,
    text: "Clean on your vet's schedule — after swimming, or one to four times a month for at-risk dogs.",
  },
  {
    do: false,
    text: "Don't use cotton swabs — they push debris deeper into the ear canal and can damage the eardrum.",
  },
  {
    do: false,
    text: "Don't use hydrogen peroxide or undiluted vinegar — both irritate inflamed ear tissue.",
  },
  {
    do: false,
    text: "Don't clean a painful ear or one with a possibly ruptured eardrum without a vet's go-ahead.",
  },
  {
    do: false,
    text: "Don't pour oils deep into the canal — they trap moisture that feeds the infection.",
  },
];

const REFERENCES = [
  "Cornell University College of Veterinary Medicine, 2022. Ear cleaning and otitis care in dogs.",
  "MSD Veterinary Manual, 2023. Otitis Externa in Dogs.",
  "VCA Animal Hospitals, 2022. Ear Infections (Otitis Externa) in Dogs.",
  "American College of Veterinary Dermatology, 2021. Chronic and recurrent canine otitis.",
  "Eascor Animal Hospital, 2024. Home remedies for dog ear infections: what's safe.",
  "Veterinary Dermatology, 2018. Antimicrobial properties of medium-chain fatty acids.",
  "Journal of Veterinary Medicine and Research, 2018. In-vitro activity of apple cider vinegar.",
  "Frontiers in Veterinary Science, 2020. Polyphenols and anti-inflammatory activity.",
  "Journal of the American Veterinary Medical Association, 2014. Tea tree oil toxicity in companion animals.",
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

export default function DogEarInfectionHomeRemedyGuide() {
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
            Field Guide · Canine Health
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
                <Stethoscope className="h-3.5 w-3.5" /> Canine Otology
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 10 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] text-ink-deep">
              Dog ear infection home remedy,
              <br />
              <span className="italic text-accent">honestly.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-deep/80 max-w-xl leading-relaxed">
              Head-shaking, a yeasty smell, brown waxy buildup. Most "dog ear
              infection home remedies" online are unproven or risky — this
              guide separates what's genuinely safe for your dog's ears from
              what can hurt them, and shows you exactly when to see a vet.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-ink-deep text-primary-foreground hover:bg-ink-deep/90"
                onClick={() =>
                  document
                    .getElementById("symptoms")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Identify the symptoms
              </Button>
              <a href="/ear-infection-drops">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-ink-deep/20"
                >
                  See natural ear drops
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={hero}
                alt="Calm dog resting — illustrative imagery for a dog ear infection home remedy field guide"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-deep/80 to-transparent">
                <p className="font-serif text-lg text-primary-foreground italic">
                  "Most 'home remedies' for dog ears are unproven — here's
                  what's actually safe."
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
              <span>Educational only — not a substitute for veterinary diagnosis. Pain, balance issues, or bleeding need a clinician.</span>
            </div>
          </nav>

          {/* Intro */}
          <section id="intro" className="scroll-mt-24">
            <SectionLabel n="01" title="Do dog ear infection home remedies actually work?" />
            <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-ink-deep first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              The honest answer: most remedies for dog ear infections you'll
              read about online are weakly supported or carry real risks — and
              a true infection still needs a vet to diagnose and treat.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              Most dog ear infections are <em>secondary</em> problems — they
              flare up because an allergy, trapped moisture, or ear anatomy let
              normal microbes overgrow inside the ear canal. A home rinse can't
              fix the underlying allergy, and it can't tell you whether you're
              dealing with yeast, bacteria, or both — which is the exact
              information that determines the right treatment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              So when does a home remedy make sense? Mainly as gentle supportive
              care for a mild, early irritation, or as routine ear cleaning to
              help prevent ear infections — and only once a vet has confirmed
              the eardrum is intact. For an established, painful, smelly
              infection, "treating it at home" usually just delays the proper
              diagnosis and lets the infection dig in deeper.
            </p>
          </section>

          {/* Symptoms */}
          <section id="symptoms" className="scroll-mt-24">
            <SectionLabel n="02" title="Symptoms: is something wrong with your dog's ears?" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgSymptoms}
                alt="Close-up inspecting a calm dog's ear in warm light — illustrative imagery for dog ear infection symptoms"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              Catching the symptoms early — while signs are still mild — gives
              safe home care its best window. If you see two or more of these in
              your dog's ears for longer than 48 hours, treat it as a likely
              infection.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {SYMPTOMS.map((s) => (
                <div key={s.title} className="rounded-xl border border-border bg-secondary/40 p-5">
                  <s.icon className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-serif text-lg text-ink-deep mb-1.5">{s.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl bg-ink-deep text-primary-foreground">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                Urgent — see a vet now
              </div>
              <p className="text-sm leading-relaxed">
                Loss of balance, circling, a persistent head tilt, abnormal eye
                movements, facial droop, or sudden hearing loss can signal
                middle- or inner-ear involvement. These are not home-remedy
                territory — go straight to a vet.
              </p>
            </div>
          </section>

          {/* Causes */}
          <section id="causes" className="scroll-mt-24">
            <SectionLabel n="03" title="What causes dog ear infections" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgCauses}
                alt="A vet gently examining a dog's ear — illustrative imagery for what causes dog ear infections"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              Because a fungal infection and a bacterial one call for completely
              different medications, guessing wrong is how mild ear infections
              become chronic ones. Identify the trigger and you stop the cycle
              of recurrence.
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
          </section>

          {/* Remedies rated */}
          <section id="remedies" className="scroll-mt-24">
            <SectionLabel n="04" title="Dog ear infection home remedies, rated by evidence" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgRemedies}
                alt="Natural ingredients — coconut oil, apple cider vinegar, green tea — illustrative imagery for dog ear infection home remedies"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Many dog owners hope these remedies will fight infection on their
              own, but the honest summary is that none reliably <em>cure</em> an
              established infection — and several cause more irritation than
              relief.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left">
                  <tr>
                    <th className="px-4 py-3 font-medium text-ink-deep">Home remedy</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Evidence</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Vet verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {REMEDIES.map((r, i) => (
                    <tr key={r.remedy} className={i % 2 ? "bg-secondary/20" : "bg-card"}>
                      <td className="px-4 py-3 font-medium text-ink-deep">{r.remedy}</td>
                      <td className="px-4 py-3 text-foreground/75">{r.evidence}</td>
                      <td className="px-4 py-3 text-foreground/75">{r.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              None of these is a substitute for a vet diagnosis. The acidic and
              oxidizing options (vinegar, hydrogen peroxide) are the most likely
              to sting and worsen an already-inflamed ear.
            </p>
          </section>

          {/* Safe cleaning */}
          <section id="cleaning" className="scroll-mt-24">
            <SectionLabel n="05" title="How to clean your dog's ears safely" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              The safest, best-evidenced step you can take at home is gentle ear
              cleaning with a veterinary-formulated cleaner — these use mild
              antiseptics and drying agents and are part of standard veterinary
              protocols. Done on a sensible schedule, regular ear cleaning keeps
              your dog's ears clean enough to stay ahead of infections.
            </p>
            <h3 className="font-serif text-xl text-ink-deep mb-4">The do / don't list</h3>
            <ul className="space-y-2.5">
              {CLEAN_RULES.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      r.do
                        ? "bg-accent/20 text-accent"
                        : "bg-destructive/20 text-destructive"
                    }`}
                  >
                    {r.do ? "✓" : "✕"}
                  </span>
                  <span className="text-foreground/85">{r.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-2xl bg-peach border border-accent/20">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                Try the Celsius Herbs approach
              </div>
              <h3 className="font-serif text-2xl text-ink-deep mb-3">
                A natural ear infection drop that's safe for dogs &amp; cats
              </h3>
              <p className="text-sm text-ink-deep/80 leading-relaxed mb-5">
                <Leaf className="inline h-4 w-4 text-accent mr-1" />
                Olive leaf, chamomile, turmeric, karanja and neem in a
                non-stinging glycerin base — just a few drops per ear, no harsh
                chemicals or cotton swabs. Formulated for dogs and cats from 12
                weeks old.
              </p>
              <a href="/ear-infection-drops">
                <Button className="rounded-full bg-ink-deep text-primary-foreground hover:bg-ink-deep/90">
                  See PetGlow Ear Infection Drops →
                </Button>
              </a>
            </div>
          </section>

          {/* Vet */}
          <section id="vet" className="scroll-mt-24">
            <SectionLabel n="06" title="When to skip home remedies and see a vet" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgVet}
                alt="A vet examining a dog's ear with an otoscope — knowing when to seek veterinary care for a dog ear infection"
                className="w-full rounded-2xl shadow-md aspect-square sm:aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <ul className="space-y-3 text-base leading-relaxed text-foreground/85">
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>First-time symptoms</strong> with no diagnosis yet —
                  redness, odor, discharge, head shaking.
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>Severe pain</strong> — yelping, snapping, or refusing
                  to let you near your dog's ears.
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>Swelling</strong> closing the ear canal, or a puffy
                  ear flap (an aural hematoma).
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>Neurologic signs</strong> — head tilt, loss of
                  balance, facial droop, or sudden hearing loss.
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>Thick pus, bleeding, or a rotten smell</strong>, or
                  systemic signs like fever, lethargy, or appetite loss.
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>Recurring ear infections</strong> — more than two or
                  three a year warrants an allergy workup.
                </span>
              </li>
            </ul>
          </section>

          {/* Prevention */}
          <section id="prevention" className="scroll-mt-24">
            <SectionLabel n="07" title="How to keep your dog's ears clean and prevent infections" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Most dog ear infections are avoidable. Prevention mostly comes
              down to keeping your dog's ears clean and dry — healthy, normal
              ears are pale pink, dry, and free of any foul odor.
            </p>
            <ol className="space-y-4 text-base leading-relaxed text-foreground/85 list-decimal pl-5 marker:text-accent marker:font-medium">
              <li>
                <strong>Check your dog's ears weekly</strong> for redness, odor,
                or debris, so you catch symptoms in the first 48 hours when
                treatment is most effective.
              </li>
              <li>
                <strong>Dry the ears after baths and swims.</strong> Trapped
                moisture is the single biggest preventable trigger — don't let
                water pour into the ear canal.
              </li>
              <li>
                <strong>Do routine ear cleaning on your vet's schedule</strong>{" "}
                — often after swimming, or one to four times a month for at-risk
                dogs.
              </li>
              <li>
                <strong>Manage the root cause.</strong> If allergies drive the
                infections, work with your vet on your dog's diet or anti-itch
                therapy to reduce inflammation; screen chronic cases for thyroid
                or hormonal disease.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <SectionLabel n="08" title="Frequently asked questions" />
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
            <SectionLabel n="09" title="References & further reading" />
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

          {/* Reviewer attribution (pet articles) */}
          <ReviewedByDrAlex />

          {/* Final CTA back to PDP */}
          <section className="scroll-mt-24 bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
            <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
              Ready to start treatment?
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Quiet ears. Quiet nights. Without another vet bill.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
              PetGlow Natural Ear Infection Drops — olive leaf, chamomile,
              turmeric, karanja and neem in a non-stinging glycerin base. Safe
              for dogs and cats of all ages, FDA-registered (NDC), and
              formulated to address bacterial, yeast, fungal, and ear mite
              infections in a single bottle.
            </p>
            <a href="/ear-infection-drops">
              <Button
                size="lg"
                className="rounded-full bg-primary-foreground text-ink-deep hover:bg-primary-foreground/90"
              >
                See the natural ear drops →
              </Button>
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
