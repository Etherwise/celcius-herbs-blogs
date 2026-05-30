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
  Users,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CAT_EAR_MITES_FAQS as FAQS } from "@/lib/blog/cat-ear-mites-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";

// Cohesive image set generated via Gemini 3.1 Flash Image Preview ("nano banana")
// against the brand image style guide. All five share the same apothecary/editorial
// register — warm peach cream palette, natural window light, 35mm film grain,
// off-center composition. WebP format.
import hero from "@/assets/blog/cat-ear-mites-hero.webp";
import imgIdentify from "@/assets/blog/cat-ear-mites-identify.webp";
import imgSymptoms from "@/assets/blog/cat-ear-mites-symptoms.webp";
import imgTreatment from "@/assets/blog/cat-ear-mites-treatment.webp";
import imgCleaning from "@/assets/blog/cat-ear-mites-cleaning.webp";

/** ----------------------------------------------------------------
 * Cat Ear Mites — A Pet Parent's Field Guide
 *
 * Primary keyword: "cat ear mites" (Ahrefs US — vol 13,000 / KD 21).
 * Secondary keywords woven into H2/H3s and copy:
 *   - cat ear mites treatment (1,600 / KD 10)
 *   - what do cat ear mites look like (1,100 / KD 0)
 *   - how to tell if cat has ear mites (900 / KD 1)
 *   - cat ear mites vs wax (600 / KD 0)
 *   - cat ear mites symptoms (350 / KD 1)
 *   - cat ear mites home remedy (150 / KD 1)
 *   - are cat ear mites contagious to humans (250 / KD 7)
 *   - how does a cat get ear mites (250 / KD 2)
 *
 * Editorial structure mirrors CatEarInfectionGuide.tsx (reading-progress bar,
 * static TOC, magazine intro, chapter labels).
 * ---------------------------------------------------------------- */

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "intro", label: "What they are" },
  { id: "vs-wax", label: "Mites vs. wax" },
  { id: "symptoms", label: "Symptoms" },
  { id: "causes", label: "How cats get them" },
  { id: "contagious", label: "Contagious?" },
  { id: "treatment", label: "Treatment" },
  { id: "home", label: "Home care & cleaning" },
  { id: "prevention", label: "Prevention & vet" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

// FAQ copy lives in `@/lib/blog/cat-ear-mites-faqs` so the rendered accordion
// below and the FAQPage JSON-LD emitted by the route can never drift apart.
// Edit FAQ text in that one file.

const SYMPTOMS = [
  {
    icon: Wind,
    title: "Vigorous head-shaking",
    desc: "Repeated, forceful head-shaking — often worse at night or after rest — is one of the earliest and most reliable signs of ear mites.",
  },
  {
    icon: PawPrint,
    title: "Frantic ear scratching",
    desc: "Mites are intensely itchy. Cats scratch at the ears and neck so hard they can break the skin and leave scabs.",
  },
  {
    icon: Microscope,
    title: "Coffee-ground debris",
    desc: "Dark brown-to-black, dry, crumbly buildup in one or both ears — the hallmark of an active mite infestation.",
  },
  {
    icon: AlertTriangle,
    title: "Red, inflamed canals",
    desc: "The canal opening looks red and irritated, sometimes with crusting at the ear margins from constant scratching.",
  },
  {
    icon: Ear,
    title: "Ear sensitivity or pain",
    desc: "The cat pulls away, vocalizes, or resists having its ears touched — a sign inflammation has reached deeper.",
  },
  {
    icon: Bug,
    title: "Odor (secondary infection)",
    desc: "Mites themselves smell mild, but a foul or yeasty odor signals a secondary bacterial or yeast infection has set in.",
  },
];

const CAUSES = [
  {
    icon: Users,
    title: "Direct contact with infested pets",
    body: "Ear mites spread almost entirely through close contact — grooming, snuggling, or sleeping next to an infested cat or dog. This is by far the most common route.",
  },
  {
    icon: PawPrint,
    title: "Kittens",
    body: "Kittens frequently pick up mites from the queen or their littermates in the first weeks of life, making mites one of the most common ear problems in young cats.",
  },
  {
    icon: Bug,
    title: "Stray, shelter & outdoor cats",
    body: "More contact with other animals means more exposure. Mites are especially common in shelter and stray populations where parasite prevention isn't routine.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-pet households",
    body: "Once one pet has mites, close quarters keep them circulating. Mites can also migrate to the skin around the ears and neck, then crawl back into the canal.",
  },
];

const COMPARE = [
  {
    label: "Cat ear mites (Otodectes cynotis)",
    discharge: "Dry, dark brown-black, crumbly — like coffee grounds",
    odor: "Mild unless a secondary infection sets in",
    itch: "Severe, frantic — cat scratches until raw",
    pets_affected: "Highly contagious to other cats and dogs",
  },
  {
    label: "Normal ear wax (cerumen)",
    discharge: "Small amount, light yellow-brown, thin/waxy",
    odor: "Mild or none",
    itch: "Little to none — cat is comfortable",
    pets_affected: "Not contagious — just normal buildup",
  },
  {
    label: "Yeast or bacterial infection",
    discharge: "Waxy brown (yeast) or pus-like yellow-green (bacterial)",
    odor: "Sour/yeasty or sharply foul",
    itch: "Steady; often worse at night",
    pets_affected: "Not directly contagious to other pets",
  },
];

const TREATMENTS = [
  {
    icon: ShieldCheck,
    title: "Systemic spot-on treatments",
    body: "Selamectin (Revolution) and moxidectin + imidacloprid (Advantage Multi) are applied to the skin at the back of the neck. Often a single dose works, though full clearance of mites and eggs takes about a month.",
  },
  {
    icon: Droplets,
    title: "Topical ear drops",
    body: "Milbemycin otic drops and ivermectin ear preparations are long-established options, placed directly in the canal and typically used over two to three-plus weeks.",
  },
  {
    icon: FlaskConical,
    title: "Newer isoxazolines",
    body: "Fluralaner, sarolaner, and lotilaner also work against ear mites where licensed, often as part of broader flea-and-parasite control.",
  },
  {
    icon: Stethoscope,
    title: "Treating secondary problems",
    body: "If a swab shows a secondary infection, your vet may add antibiotic or antifungal drops, and sometimes a short course of anti-inflammatory steroids.",
  },
];

const HOME_RULES = [
  {
    do: true,
    text: "Get a diagnosis first — a vet swab confirms mites and rules out yeast or bacteria that need different treatment.",
  },
  {
    do: true,
    text: "Use only a cat-safe ear cleanser, and treat every in-contact pet at the same time.",
  },
  {
    do: true,
    text: "Fill the canal, massage the ear base 20–30 seconds, let the cat shake, then wipe the outer ear with cotton.",
  },
  {
    do: true,
    text: "Pair gentle cleaning with the parasite medication your vet prescribes — cleaning alone won't clear mites.",
  },
  {
    do: false,
    text: "Don't rely on mineral, olive, or coconut oil as a cure — at best they're an adjunct and can trap debris.",
  },
  {
    do: false,
    text: "Don't use vinegar, hydrogen peroxide, or alcohol — they irritate an already-inflamed canal.",
  },
  {
    do: false,
    text: "Don't use tea tree or other essential oils — they're toxic to cats even in small amounts.",
  },
  {
    do: false,
    text: "Don't push a cotton swab deep into the canal — it packs debris in and can damage the eardrum.",
  },
];

const REFERENCES = [
  "PetMD. Ear Mites in Cats: Symptoms, Diagnosis, and Treatment.",
  "Today's Veterinary Practice. Otodectes cynotis (ear mites): biology, diagnosis, and management in cats and dogs.",
  "Chewy (Vet Corner). Ear Mites in Cats: Treatment and Recovery.",
  "Elk Grove Veterinary Hospital. Recognizing and Treating Cat Ear Mites.",
  "Reed Animal Hospital. Are Ear Mites Contagious? What Cat Owners Should Know.",
  "NexGard / Boehringer Ingelheim. Ear Mites and Parasite Prevention in Cats.",
];

// Editorial section header — stacked left-aligned pattern matching
// CatEarInfectionGuide.tsx.
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

export default function CatEarMitesGuide() {
  const [progress, setProgress] = useState(0);

  // Reading progress bar (top of page). Static TOC inside the article body uses
  // native anchor links — no sticky scroll-spy, per Rick's May 15 feedback.
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
            Field Guide · Feline Health
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
                <Stethoscope className="h-3.5 w-3.5" /> Feline Parasitology
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 9 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] text-ink-deep">
              Cat ear mites,
              <br />
              <span className="italic text-accent">decoded.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-deep/80 max-w-xl leading-relaxed">
              Frantic scratching. Vigorous head-shaking. Dark, coffee-ground
              debris in the ear. This guide shows you exactly what cat ear mites
              look like, how to tell them from ordinary wax, the treatment that
              actually works, and when to call your vet.
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
                Spot the symptoms
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
                alt="Calm tabby cat resting in warm window light — illustrative imagery for a cat ear mites field guide"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-deep/80 to-transparent">
                <p className="font-serif text-lg text-primary-foreground italic">
                  "Ear mites are one of the most common ear problems in young
                  cats."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY — full-width centered article; static TOC at top. */}
      <div className="container py-16">
        <article className="space-y-20 max-w-3xl mx-auto">
          {/* Static Table of Contents — non-sticky, top of article. */}
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
              <span>Educational only — not a substitute for veterinary diagnosis. Ear mites need confirmed diagnosis and prescription treatment.</span>
            </div>
          </nav>

          {/* Intro */}
          <section id="intro" className="scroll-mt-24">
            <SectionLabel n="01" title="What cat ear mites actually are" />
            <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-ink-deep first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Cat ear mites are tiny parasites — Otodectes cynotis — that live in
              the ear canal and feed on wax, skin debris, and tissue fluids.
            </p>
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgIdentify}
                alt="Close-up of dark coffee-ground-like ear mite debris on a cotton pad beside a cat's ear — what cat ear mites look like"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              They're barely visible to the naked eye — under an otoscope a vet
              may catch them as tiny white specks moving against dark debris. The
              most recognizable sign is what they leave behind:{" "}
              <strong>thick, dark brown-to-black, dry, crumbly debris</strong>{" "}
              that almost everyone describes as looking like coffee grounds. That
              material is a mix of dried blood, wax, exudate, and mite droppings.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              A single mite goes from egg to breeding adult in about three weeks,
              all on the host. That's why treatment courses usually run two full
              life cycles — roughly six to eight weeks — to catch newly hatched
              mites the first round missed. Mites are very treatable, but they
              almost never clear on their own.
            </p>
          </section>

          {/* Mites vs wax */}
          <section id="vs-wax" className="scroll-mt-24">
            <SectionLabel n="02" title="Cat ear mites vs. ear wax — how to tell" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              The most common at-home mix-up is confusing a buildup of normal ear
              wax with an active mite infestation. The distinction matters: mites
              need parasite-killing medication, while plain wax just needs gentle
              cleaning.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left">
                  <tr>
                    <th className="px-4 py-3 font-medium text-ink-deep">Type</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Discharge</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Odor</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Itch pattern</th>
                    <th className="px-4 py-3 font-medium text-ink-deep">Other pets</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((c, i) => (
                    <tr key={c.label} className={i % 2 ? "bg-secondary/20" : "bg-card"}>
                      <td className="px-4 py-3 font-medium text-ink-deep">{c.label}</td>
                      <td className="px-4 py-3 text-foreground/75">{c.discharge}</td>
                      <td className="px-4 py-3 text-foreground/75">{c.odor}</td>
                      <td className="px-4 py-3 text-foreground/75">{c.itch}</td>
                      <td className="px-4 py-3 text-foreground/75">{c.pets_affected}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              The headline difference is itch plus volume. A little pale wax in a
              comfortable cat is normal — large amounts of dark, dry, granular
              debris with frantic scratching points to mites. Definitive
              diagnosis still requires a microscopic ear swab.
            </p>
          </section>

          {/* Symptoms */}
          <section id="symptoms" className="scroll-mt-24">
            <SectionLabel n="03" title="Cat ear mites symptoms — 6 signs that matter" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgSymptoms}
                alt="A tabby cat tilting its head and scratching at its ear in soft window light — illustrating cat ear mites symptoms"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              Cats hide discomfort well, so the behavioral signs usually show up
              before you ever see debris. If you notice two or more of these,
              treat it as a likely infestation and get a vet diagnosis.
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
                Watch for this complication
              </div>
              <p className="text-sm leading-relaxed">
                All that violent head-shaking can rupture a blood vessel in the
                ear flap, causing a fluid-filled swelling called an aural
                hematoma that often needs medical or surgical treatment. It's one
                more reason not to let mites go untreated.
              </p>
            </div>
          </section>

          {/* Causes */}
          <section id="causes" className="scroll-mt-24">
            <SectionLabel n="04" title="How cats get ear mites — and who's at risk" />
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              Ear mites spread almost entirely by direct contact with an infested
              animal. Some cats are far more likely to pick them up than others.
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

          {/* Contagious */}
          <section id="contagious" className="scroll-mt-24">
            <SectionLabel n="05" title="Are cat ear mites contagious?" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-secondary/40 p-6">
                <Users className="h-5 w-5 text-accent mb-3" />
                <h3 className="font-serif text-lg text-ink-deep mb-1.5">To other pets — very</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  If one animal in your home has ear mites, assume the others
                  have been exposed. Mites spread readily to other cats, and to
                  dogs and ferrets through close contact. Vets routinely
                  recommend treating every in-contact pet at the same time — even
                  the ones without obvious signs — or the mites just ping-pong
                  back and forth.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/40 p-6">
                <ShieldCheck className="h-5 w-5 text-accent mb-3" />
                <h3 className="font-serif text-lg text-ink-deep mb-1.5">To humans — not really</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Veterinary sources don't consider routine pet ear mites a
                  meaningful zoonotic risk; they're effectively a pet-to-pet
                  problem. Rare, brief skin reactions have been reported in the
                  literature, but they're unusual and not something the average
                  cat owner needs to worry about.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment */}
          <section id="treatment" className="scroll-mt-24">
            <SectionLabel n="06" title="Treatment for cat ear mites" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgTreatment}
                alt="A dropper bottle and clean cotton pads on warm linen with a calm cat in the background — cat ear mites treatment"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              Effective treatment does two things: it kills the mites, and it
              addresses any inflammation or secondary infection they've caused.
              Your vet will usually confirm the diagnosis first with an ear swab
              examined under the microscope.
            </p>
            <div className="space-y-4">
              {TREATMENTS.map((t) => (
                <div key={t.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <t.icon className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-ink-deep mb-1">{t.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl bg-ink-deep text-primary-foreground">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                Don't stop early
              </div>
              <p className="text-sm leading-relaxed">
                Cats usually feel better within a few days, but live mites and
                eggs can persist for weeks. Finish the full course — typically
                six to eight weeks across two mite life cycles — to keep them
                from coming back.
              </p>
            </div>
          </section>

          {/* Home care & cleaning */}
          <section id="home" className="scroll-mt-24">
            <SectionLabel n="07" title="Home remedies and safe ear cleaning" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgCleaning}
                alt="A person gently cleaning a relaxed cat's ear with a cotton pad in soft natural light — safe at-home ear care"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Search "cat ear mites home remedy" and you'll find mineral oil,
              olive oil, vinegar, and hydrogen peroxide. The honest picture: no
              at-home remedy reliably cures ear mites on its own, and some are
              actively harmful. The real risk is that home remedies{" "}
              <strong>delay proper treatment</strong> while mites multiply. Where
              home care genuinely helps is gentle, vet-directed ear cleaning
              alongside prescribed medication.
            </p>
            <h3 className="font-serif text-xl text-ink-deep mb-4">The do / don't list</h3>
            <ul className="space-y-2.5">
              {HOME_RULES.map((r, i) => (
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
                A natural ear drop that's safe for cats &amp; dogs
              </h3>
              <p className="text-sm text-ink-deep/80 leading-relaxed mb-5">
                Olive leaf, chamomile, turmeric, karanja and neem in a
                non-stinging glycerin base. FDA-registered (NDC), formulated to
                soothe irritated ears alongside your vet's parasite treatment.
              </p>
              <a href="/ear-infection-drops">
                <Button className="rounded-full bg-ink-deep text-primary-foreground hover:bg-ink-deep/90">
                  See PetGlow Ear Infection Drops →
                </Button>
              </a>
            </div>
          </section>

          {/* Prevention & vet */}
          <section id="prevention" className="scroll-mt-24">
            <SectionLabel n="08" title="Prevention and when to see a vet" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Most ear mite cases are preventable with the same products that
              handle fleas. These habits cut your cat's risk dramatically:
            </p>
            <ol className="space-y-4 text-base leading-relaxed text-foreground/85 list-decimal pl-5 marker:text-accent marker:font-medium mb-10">
              <li>
                <strong>Year-round monthly preventives.</strong> Broad-spectrum
                spot-ons like selamectin or moxidectin/imidacloprid stop mites
                before they take hold.
              </li>
              <li>
                <strong>Weekly ear checks.</strong> Look under good light for
                redness, odor, or debris — catching mites early makes treatment
                far easier.
              </li>
              <li>
                <strong>Treat all household pets together.</strong> Mites
                ping-pong between cats and dogs; treating one without the others
                guarantees reinfestation.
              </li>
            </ol>
            <h3 className="font-serif text-xl text-ink-deep mb-4">See your vet if you notice</h3>
            <ul className="space-y-3 text-base leading-relaxed text-foreground/85">
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>A confirmed or suspected infestation</strong> — mites
                  need prescription medication and won't clear on their own.
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>A bad smell or pus-like discharge</strong>, which
                  signals a secondary bacterial or yeast infection.
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>A swollen ear flap</strong> (possible aural hematoma)
                  from heavy head-shaking.
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>Loss of balance, head tilt, or circling</strong>, which
                  can mean the deeper ear is involved.
                </span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span>
                  <strong>No improvement after a full course</strong>, or repeated
                  reinfestations despite prevention.
                </span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <SectionLabel n="09" title="Frequently asked questions" />
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
            <SectionLabel n="10" title="References & further reading" />
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
              Soothe irritated ears
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Calm the itch while the mites clear.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
              PetGlow Natural Ear Infection Drops — olive leaf, chamomile,
              turmeric, karanja and neem in a non-stinging glycerin base. Safe
              for cats and dogs of all ages, FDA-registered (NDC), and formulated
              to soothe ears irritated by bacterial, yeast, fungal, and ear mite
              problems.
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
