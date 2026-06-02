import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Clock,
  Droplets,
  FlaskConical,
  Leaf,
  Moon,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Utensils,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DOG_ACID_REFLUX_HOME_REMEDY_FAQS as FAQS } from "@/lib/blog/dog-acid-reflux-home-remedy-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";

// Cohesive image set generated via Gemini 3.1 Flash Image Preview ("nano banana").
import hero from "@/assets/blog/dog-acid-reflux-home-remedy-hero.webp";
import imgSymptoms from "@/assets/blog/dog-acid-reflux-home-remedy-symptoms.webp";
import imgCauses from "@/assets/blog/dog-acid-reflux-home-remedy-causes.webp";
import imgRemedies from "@/assets/blog/dog-acid-reflux-home-remedy-remedies.webp";
import imgVet from "@/assets/blog/dog-acid-reflux-home-remedy-vet.webp";

/** ----------------------------------------------------------------
 * Dog Acid Reflux — A Pet Parent's Field Guide
 * Primary keyword: "dog acid reflux" (Ahrefs US — vol 1,000 / KD 3).
 * ---------------------------------------------------------------- */

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "intro", label: "What it is" },
  { id: "symptoms", label: "Symptoms" },
  { id: "causes", label: "Causes" },
  { id: "remedies", label: "Home remedies" },
  { id: "diet", label: "What to feed" },
  { id: "nighttime", label: "Nighttime reflux" },
  { id: "vet", label: "When to see a vet" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const SYMPTOMS = [
  {
    icon: Wind,
    title: "Regurgitation of food or foam",
    desc: "Passive, effortless bringing-up of undigested food or clear foamy fluid, often right after eating — the hallmark of reflux versus active vomiting.",
  },
  {
    icon: Droplets,
    title: "Vomiting yellow bile",
    desc: "Especially on an empty stomach or overnight, as stomach acid and bile build up — the classic morning 'hunger pukes.'",
  },
  {
    icon: PawPrint,
    title: "Lip licking & repeated swallowing",
    desc: "Gulping or swallowing as if clearing the throat, sometimes with excessive drooling or foaming at the mouth.",
  },
  {
    icon: AlertTriangle,
    title: "Coughing or throat clearing",
    desc: "Especially after eating or when lying down, as gastric acid reaches the throat. Bad breath not explained by dental disease is another clue.",
  },
  {
    icon: Stethoscope,
    title: "Appetite changes & weight loss",
    desc: "Hungry but hesitant to eat because eating hurts, or eating fast then regurgitating — leading to weight loss over time.",
  },
  {
    icon: ShieldCheck,
    title: "Signs of chest discomfort",
    desc: "Restlessness, whining, or stretching the neck forward. Persistent signs overlap with serious conditions and need a vet check.",
  },
];

const CAUSES = [
  {
    icon: Utensils,
    title: "Diet & eating habits",
    body: "Large, heavy meals and rapid eating overfill the stomach and push stomach acid up. High-fat diets slow stomach emptying and stimulate more gastric acid. Food allergies and sudden diet changes also flare symptoms.",
  },
  {
    icon: FlaskConical,
    title: "Medications & anesthesia",
    body: "Some antibiotics and anti-inflammatories relax the valve or irritate the esophagus, especially given without water. General anesthesia temporarily relaxes the sphincter — dogs sometimes develop reflux esophagitis after surgery.",
  },
  {
    icon: AlertTriangle,
    title: "Hiatal hernia & structure",
    body: "When part of the stomach slides into the chest, a hiatal hernia disrupts the barrier and is a well-recognized cause of recurrent reflux and regurgitation.",
  },
  {
    icon: PawPrint,
    title: "Obesity & breed",
    body: "Obesity increases abdominal pressure on the digestive tract. Brachycephalic dog breeds like Bulldogs, French Bulldogs, and Pugs are predisposed because their anatomy makes reflux more likely.",
  },
];

const REMEDIES = [
  {
    title: "Smaller, more frequent meals",
    body: "Three or four small meals instead of one or two large ones keeps the stomach from overfilling and producing excess stomach acid — the single most effective home change.",
  },
  {
    title: "Elevated feeding",
    body: "Raising the food bowl uses gravity to help keep food and stomach acid down, especially helpful for dogs with regurgitation.",
  },
  {
    title: "Low-fat, bland diet",
    body: "Lower-fat food empties faster and triggers less gastric acid. Plain boiled chicken with white rice and a little pumpkin is gentle during flares.",
  },
  {
    title: "Slow-feeder bowls",
    body: "For dogs that gulp their food, a slow-feeder reduces swallowed air and overfilling. Never withhold water, and never fast a puppy or small dog without vet guidance.",
  },
];

const REFERENCES = [
  "Great Pet Care (2023) — Acid reflux in dogs: symptoms, causes, treatment.",
  "MSD Veterinary Manual (2020) — Gastroesophageal reflux and regurgitation in dogs.",
  "Dogs Naturally (2022) — Natural management of canine acid reflux.",
  "Arden Grange (2022) — Diet and acid reflux in dogs.",
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

export default function DogAcidRefluxHomeRemedyGuide() {
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
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-ink-deep transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

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

      <section className="relative overflow-hidden border-b border-border bg-peach">
        <div className="container grid lg:grid-cols-12 gap-10 py-16 lg:py-24 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-deep/70">
              <span className="inline-flex items-center gap-1.5">
                <Stethoscope className="h-3.5 w-3.5" /> Canine Gastroenterology
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 8 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] text-ink-deep">
              Dog acid reflux,
              <br />
              <span className="italic text-accent">settled.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-deep/80 max-w-xl leading-relaxed">
              Food brought up right after eating. Yellow bile in the morning.
              Constant lip-licking. This guide covers the dog acid reflux home
              remedies and feeding changes that actually help — and the red
              flags that mean a vet visit.
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
                See what helps
              </Button>
              <a href="/ear-infection-drops">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-ink-deep/20"
                >
                  Natural wellness range
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={hero}
                alt="Calm older dog resting beside a raised feeding bowl — illustrative imagery for a dog acid reflux home remedy guide"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-deep/80 to-transparent">
                <p className="font-serif text-lg text-primary-foreground italic">
                  "Often manageable at home — sometimes a sign of something more."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <article className="space-y-20 max-w-3xl mx-auto">
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
                    <span className="text-sm">{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-5 pt-4 border-t border-border flex items-start gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>
                Educational only — not a substitute for veterinary diagnosis.
                Frequent symptoms, pain, or breathing trouble need a clinician.
              </span>
            </div>
          </nav>

          <section id="intro" className="scroll-mt-24">
            <SectionLabel n="01" title="What dog acid reflux is" />
            <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-ink-deep first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Acid reflux is when stomach acid flows backward out of the stomach
              into the esophagus — which, unlike the stomach, has no protection
              against acid.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              Normally a ring of muscle called the lower esophageal sphincter
              acts as a one-way valve and stays closed except when swallowing.
              When that valve is weak or relaxed, gastric acid moves up where it
              doesn't belong, causing inflammation called esophagitis. Mild,
              occasional reflux often improves with diet and lifestyle changes.
              Chronic or severe cases — gastroesophageal reflux disease (GERD) —
              usually need veterinary diagnosis and prescription treatment.
            </p>
          </section>

          <section id="symptoms" className="scroll-mt-24">
            <SectionLabel n="02" title="Acid reflux symptoms in dogs" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgSymptoms}
                alt="A dog resting quietly, illustrative imagery for dog acid reflux symptoms"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              The key distinction is regurgitation versus vomiting.
              Regurgitation is passive and effortless; vomiting is active with
              drooling and retching first. Both can occur with acid reflux —
              describing which you see helps your vet.
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
          </section>

          <section id="causes" className="scroll-mt-24">
            <SectionLabel n="03" title="What causes acid reflux in dogs" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgCauses}
                alt="High-fat kibble beside a scoop — illustrating diet as a dog acid reflux trigger"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
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

          <section id="remedies" className="scroll-mt-24">
            <SectionLabel n="04" title="Home remedies that help" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgRemedies}
                alt="Bland-diet ingredients — boiled chicken, white rice, pumpkin — natural dog acid reflux home remedies"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              Home care is genuinely useful for mild dog acid reflux, but it's
              management, not a cure for severe cases. The measures with the
              best support:
            </p>
            <div className="space-y-4">
              {REMEDIES.map((r) => (
                <div key={r.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-serif text-lg text-ink-deep mb-1.5">{r.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl bg-ink-deep text-primary-foreground">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                A note on medication
              </div>
              <p className="text-sm leading-relaxed">
                For chronic or severe symptoms, vets often prescribe acid
                suppressants such as proton pump inhibitors. Don't give human
                antacids or acid reducers on your own unless your vet directs
                the dose.
              </p>
            </div>
          </section>

          <section id="diet" className="scroll-mt-24">
            <SectionLabel n="05" title="What to feed a dog with acid reflux" />
            <p className="text-base leading-relaxed text-foreground/80">
              Diet is the lever that helps most. During a flare, a bland diet of
              plain boiled skinless chicken or lean turkey with white rice is
              gentle and low-fat. A spoonful of plain canned pumpkin (not pie
              filling) adds soothing fiber for the digestive tract. If food
              allergies are suspected, your vet may suggest a novel-protein or
              hydrolyzed diet. Once symptoms settle, transition to a consistent
              low-fat, moderate-protein maintenance diet rather than rich,
              high-fat kibble or fatty treats — sudden changes and high-fat
              table scraps are common triggers.
            </p>
          </section>

          <section id="nighttime" className="scroll-mt-24">
            <SectionLabel n="06" title="Managing nighttime acid reflux" />
            <div className="flex gap-4 rounded-xl border border-border bg-secondary/40 p-6">
              <Moon className="h-5 w-5 text-accent shrink-0 mt-1" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                Many dogs reflux worst overnight or first thing in the morning,
                when the stomach has been empty for hours and stomach acid
                builds up — the classic "hunger pukes" of yellow foam. A small,
                low-fat snack right before bed keeps the stomach from sitting
                empty and often stops the morning bile vomiting. Feeding the
                last meal a few hours before lying down also helps keep acid
                where it belongs.
              </p>
            </div>
          </section>

          <section id="vet" className="scroll-mt-24">
            <SectionLabel n="07" title="When to see a vet" />
            <figure className="mb-8 -mx-2 sm:mx-0">
              <img
                src={imgVet}
                alt="A vet gently examining a calm dog — when dog acid reflux needs professional care"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <ul className="space-y-3">
              {[
                "Regurgitation or vomiting more than a couple of times a week, or worsening",
                "Chronic vomiting, visible pain, retching, or distress when eating",
                "Weight loss, or refusing to eat because eating hurts",
                "Blood in regurgitated material, or coughing that may signal aspiration",
                "Any breathing difficulty (reflux can be inhaled into the lungs)",
                "Symptoms in a puppy, senior, or dog with other health conditions",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                  <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-foreground/70 leading-relaxed">
              Your vet can rule out megaesophagus, hiatal hernia, and foreign
              bodies, and prescribe acid-reducing medication like proton pump
              inhibitors that home remedies can't replace.
            </p>
          </section>

          <section id="faq" className="scroll-mt-24">
            <SectionLabel n="08" title="Frequently asked questions" />
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-serif text-lg text-ink-deep">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-foreground/75 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

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

          <ReviewedByDrAlex />

          <section className="scroll-mt-24 bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
            <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
              Support your dog's digestion naturally
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Gentle, plant-based wellness — alongside your vet's plan.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
              Celsius Herbs makes vet-informed, plant-based products designed to
              work alongside your vet's plan, not against it. Help your dog feel
              comfortable again — gently, and without the harsh chemicals.
            </p>
            <a href="/ear-infection-drops">
              <Button
                size="lg"
                className="rounded-full bg-primary-foreground text-ink-deep hover:bg-primary-foreground/90"
              >
                See the natural range →
              </Button>
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
