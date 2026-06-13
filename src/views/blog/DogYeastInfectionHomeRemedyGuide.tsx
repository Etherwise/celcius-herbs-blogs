import { useEffect, useState } from "react";
import {
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
import { DOG_YEAST_INFECTION_HOME_REMEDY_FAQS as FAQS } from "@/lib/blog/dog-yeast-infection-home-remedy-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";

import hero from "@/assets/blog/dog-yeast-infection-home-remedy-hero.webp";
import imgSymptoms from "@/assets/blog/dog-yeast-infection-home-remedy-symptoms.webp";
import imgRemedies from "@/assets/blog/dog-yeast-infection-home-remedy-remedies.webp";
import imgAcvProtocol from "@/assets/blog/dog-yeast-infection-home-remedy-acv-protocol.webp";
import imgDiet from "@/assets/blog/dog-yeast-infection-home-remedy-diet.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "ear-vs-skin", label: "Ear vs. skin yeast infections" },
  { id: "treatments", label: "7 natural treatment methods" },
  { id: "acv-protocol", label: "The ACV protocol" },
  { id: "diet", label: "Antifungal diet for dogs" },
  { id: "prevention", label: "How to prevent recurrence" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const ACV_ROWS = [
  { skin: "Normal skin", acv: "1 part", water: "1 part", notes: "Standard starting ratio" },
  { skin: "Sensitive skin", acv: "1 part", water: "3 parts", notes: "For dogs with reactive skin" },
  { skin: "Paws (foot soak)", acv: "1 part", water: "2 parts", notes: "5-minute soak; pat dry thoroughly" },
];

const TREATMENTS = [
  {
    icon: Droplets,
    number: "01",
    title: "Apple Cider Vinegar Wash",
    body: "ACV wash is the only dog yeast infection home remedy with some scientific backing — acetic acid acidifies the dog's skin and makes it inhospitable to Malassezia. The antifungal properties of acetic acid are well-documented in veterinary dermatology literature. Its ability to kill yeast on the skin surface makes it useful as part of a treatment plan for mild cases. [Source: Small Door Veterinary, 2022]",
    evidence: "Weak–moderate",
    caution: "Never on raw/broken skin or in ears without confirmed intact eardrum.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Coconut Oil (Topical)",
    body: "Coconut oil contains lauric acid and caprylic acid, both of which show antifungal properties against yeast in vitro by disrupting fungal cell membranes. It helps soothe irritation and the dog's discomfort while its antifungal components work. Apply a thin layer to the dog's paws, skin folds, or belly. A thick layer traps moisture and worsens yeast growth. [Source: Kabo, 2023]",
    evidence: "Weak / anecdotal",
    caution: "Do not give large amounts orally to dogs prone to pancreatitis.",
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Turmeric",
    body: "Curcumin has documented anti-inflammatory properties and antifungal properties in vitro. For dogs with yeast infections, turmeric helps reduce the irritated skin response that creates conditions where yeast thrives. Oral use: up to 1/4 tsp per 10 lbs per day mixed with coconut oil and black pepper. Topical use is impractical — it stains fur yellow. [Source: Frontiers in Microbiology, 2020]",
    evidence: "Weak / anecdotal",
    caution: "High doses cause GI upset. Contraindicated with anticoagulants.",
  },
  {
    icon: Leaf,
    number: "04",
    title: "Neem Oil",
    body: "Neem oil has antifungal properties and antiparasitic activity in vitro. Use diluted in a carrier oil or as part of a commercial dog shampoo — never apply concentrated neem oil directly to dog's skin. Avoid tea tree oil entirely — despite being listed as a home remedy in some sources, it carries significant toxicity risk for dogs and should not be used. [Source: Kabo, 2023]",
    evidence: "Weak / anecdotal",
    caution: "Dogs must not ingest neem oil — oral toxicity risk.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Probiotics",
    body: "Oral probiotics support the dog's immune system and may reduce Malassezia overgrowth, particularly in dogs whose yeast infections are linked to allergies or antibiotic use. Probiotics work through the digestive tract to influence systemic immune response — most useful for recurrent yeast infections driven by allergic or immune dysfunction. [Source: MSD Veterinary Manual, 2023]",
    evidence: "Moderate (skin/immune support)",
    caution: null,
  },
  {
    icon: PawPrint,
    number: "06",
    title: "Antifungal Diet",
    body: "Changing the dog's diet is the most important long-term lever for dogs with chronic or recurring yeast infections. Reduce high-starch, high-sugar ingredients; increase omega-3 fatty acids; consider a limited-ingredient or hypoallergenic diet to address the food allergies that may be driving yeast overgrowth. See Chapter 04 for the full protocol. [Source: MSD Veterinary Manual, 2023]",
    evidence: "Moderate (omega-3s and skin health)",
    caution: null,
  },
  {
    icon: FlaskConical,
    number: "07",
    title: "Medicated Antifungal Shampoo",
    body: "Antifungal shampoos containing chlorhexidine or miconazole are the most evidence-backed topical approach for skin yeast infections in dogs. Lather on affected areas, leave 5–10 minutes contact time, rinse. Use twice weekly during active infection. This bridges home care and prescription treatment for dogs developing yeast infections that don't respond to fully natural approaches. [Source: MSD Veterinary Manual, 2023]",
    evidence: "Moderate–strong (veterinary grade)",
    caution: "If no improvement in 2 weeks — see a vet.",
  },
];

const PREVENTION_STEPS = [
  "Dry the dog's ears thoroughly after swimming or bathing — yeast thrives in wet ear canals. Use a soft cloth; never insert cotton swabs.",
  "Clean the dog's ears weekly in yeast-prone breeds with a vet-approved ear cleaner. Check periodically for ear mites, which can cause similar symptoms.",
  "Dry skin folds daily — facial, lip, vulvar, and tail base folds are prime moist environments where yeast thrives. Wipe with a dry cloth after meals and baths.",
  "Avoid frequent baths with harsh shampoos — they strip the dog's natural skin oils and disrupt the skin barrier, paradoxically increasing yeast vulnerability.",
  "Address food allergies and environmental allergies. Atopic dermatitis is the number-one driver of recurrent yeast infections in dogs.",
  "Maintain omega-3 supplementation year-round to support the skin barrier and the dog's immune system.",
  "Use a weekly antifungal shampoo bath for dogs that have had recurrent yeast infections — chlorhexidine/miconazole shampoos work well.",
  "Manage underlying disease — hypothyroidism and Cushing's compromise the dog's immune system and predispose dogs to chronic yeast. Consider endocrine screening if infections keep returning.",
];

const REFERENCES = [
  "MSD Veterinary Manual (2023). Malassezia Dermatitis in Dogs. Merck & Co.",
  "Small Door Veterinary (2022). Yeast Infections in Dogs. smalldoorvet.com.",
  "PetMD Editorial (2022). Yeast Infections in Dogs: Symptoms, Causes, and Treatment. PetMD.",
  "Kabo (2023). Home Remedies for Dog Yeast Infection. kabo.co.",
  "The Honest Kitchen (2016). Natural Remedies for Yeast Overgrowth in Dogs. thehonestkitchen.com.",
  "The Spruce Pets (2022). Apple Cider Vinegar for Dogs. thesprucepets.com.",
  "Grace Animal Rehab Center (2023). Coconut Oil and Dog Yeast Infections. gracerehab.org.",
  "Frontiers in Microbiology (2020). Antifungal activity of curcumin against Malassezia.",
  "Journal of Veterinary Pharmacology (2019). Neem toxicity considerations in companion animals.",
  "Mills Animal Hospital (2024). Dog Paw Yeast Infection: Signs and Treatment. millsanimalhospital.com.",
  "Furnatura (2021). Yeast Infection in Dogs: Causes and Dietary Management. furnatura.com.",
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

export default function DogYeastInfectionHomeRemedyGuide() {
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
            Field Guide · Canine Skin Health
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
            {/* Previous articles nav */}
            <div className="mb-8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/40 font-medium mb-2">
                More articles
              </p>
              <div className="flex flex-wrap gap-2">
                {BLOG_ARTICLES.filter((a) => a.href !== "/dog-yeast-infection-home-remedy").map((a) => (
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
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-deep/70">
              <span className="inline-flex items-center gap-1.5">
                <Stethoscope className="h-3.5 w-3.5" /> Canine Skin Health
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 10 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] text-ink-deep">
              Dog yeast infection
              <br />
              <span className="italic text-accent">home remedy.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-deep/80 max-w-xl leading-relaxed">
              Musty smell. Itchy paws. Greasy skin. This guide covers 7
              evidence-graded natural treatments for dog yeast infections — with
              the ACV dilution ratios vets actually use, what to feed a yeasty
              dog, and how to stop it from coming back.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-ink-deep text-primary-foreground hover:bg-ink-deep/90"
                onClick={() =>
                  document
                    .getElementById("treatments")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See the treatments
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
                alt="Golden retriever with healthy coat and paws — dog yeast infection home remedy guide"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-deep/80 to-transparent">
                <p className="font-serif text-lg text-primary-foreground italic">
                  "Mild skin yeast is manageable at home — but ears need a vet check first."
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
                Educational only — not a substitute for veterinary advice. Do
                not treat ear yeast infections at home without confirming the
                eardrum is intact first.
              </span>
            </div>
          </nav>

          {/* Intro */}
          <section className="scroll-mt-24">
            <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-ink-deep first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Many dog owners and pet parents first notice a yeast problem
              through recurring infections that keep coming back — the corn-chip
              smell returns, the ears get goopy again, the paw-licking
              starts up.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              Managing symptoms is only part of the solution. A dog yeast
              infection home remedy is appropriate for mild, localised skin
              yeast on an otherwise healthy dog with intact, non-broken skin. It
              is not appropriate for ear infections where the eardrum status is
              unknown, raw or severely inflamed skin, full-body involvement, or
              dogs that haven't improved in two weeks.{" "}
              <em>[Source: Small Door Veterinary, 2022]</em>
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              The goal is not to kill yeast entirely — Malassezia is naturally
              present on every dog's body and plays a role in the skin's natural
              balance — but to reduce overgrowth back to normal levels while
              addressing the root trigger.
            </p>
          </section>

          {/* Chapter 01 — Ear vs Skin */}
          <section id="ear-vs-skin" className="scroll-mt-24">
            <SectionLabel n="01" title="Ear vs. Skin Yeast Infections in Dogs" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Almost every case of yeast infections in dogs is caused by one
              organism: <strong>Malassezia pachydermatis</strong>, a naturally
              occurring yeast that is naturally present on healthy dog's skin as
              normal flora and overgrows when conditions shift. Yeast thrives in
              warm, moist environments — which is why the dog's ears and skin
              folds are the most commonly affected sites.{" "}
              <em>[Source: MSD Veterinary Manual, 2023]</em>
            </p>

            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgSymptoms}
                alt="Close-up of dog ear and paw being gently examined — symptoms of dog yeast infection"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-ink-deep mb-3">
                  Yeast Otitis (Ears)
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-3">
                  Malassezia overgrowth inside the external ear canal. The
                  dog's ears create ideal conditions: warm, poorly ventilated,
                  and prone to moisture. Food allergies and environmental
                  allergies are the most common underlying drivers in dogs
                  that get repeated ear yeast infections.{" "}
                  <em>[Source: MSD Veterinary Manual, 2023]</em>
                </p>
                <ul className="space-y-1.5 text-xs text-foreground/70">
                  <li>• Brown or tan waxy discharge inside the ear canal</li>
                  <li>• Strong sweet, musty, or rancid smell from the ear</li>
                  <li>• Red, swollen ear canal and ear flap</li>
                  <li>• The dog shakes their head or paws at the ear</li>
                  <li>• Pain when the ear is touched</li>
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                  <p className="text-xs text-destructive leading-relaxed">
                    <strong>Do not use ACV inside the dog's ears</strong>{" "}
                    without confirming the eardrum is intact. A ruptured
                    tympanic membrane can cause permanent damage.{" "}
                    <em>[Source: MSD Veterinary Manual, 2023]</em>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-ink-deep mb-3">
                  Cutaneous Dermatitis (Skin)
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-3">
                  Yeast on the dog's skin surface — skin folds, armpits,
                  groin, belly, paws. When the dog's immune system is
                  weakened or the skin barrier is compromised by skin diseases
                  like allergies or hypothyroidism, naturally occurring yeast
                  can develop yeast overgrowth quickly. Secondary infections
                  (bacteria joining yeast) are common and require prescription
                  treatment.{" "}
                  <em>[Source: MSD Veterinary Manual, 2023]</em>
                </p>
                <ul className="space-y-1.5 text-xs text-foreground/70">
                  <li>• Red or pink irritated skin with skin irritation</li>
                  <li>• Oily skin or greasy patches; scaling</li>
                  <li>• Musty, rancid, or corn-chip odour</li>
                  <li>• Brown staining between toes; paw-licking</li>
                  <li>• Persistent itching, licking, chewing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter 02 — 7 Treatments */}
          <section id="treatments" className="scroll-mt-24">
            <SectionLabel n="02" title="7 Natural Treatment Methods" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgRemedies}
                alt="Flat-lay of ACV, coconut oil, turmeric and neem — natural remedies for dog yeast infections"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              These natural remedies are graded by evidence strength. The first
              three have the most clinical support for mild skin yeast
              infections in dogs; the others are adjuncts with weaker but
              plausible evidence. Before starting any treatment plan, confirm
              the affected area has intact, non-broken skin — open wounds
              require veterinary care. Treating yeast infections at home works
              best when combined with addressing the root cause.
            </p>
            <div className="space-y-6">
              {TREATMENTS.map((r) => (
                <div
                  key={r.number}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                        Treatment {r.number}
                      </div>
                      <r.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-ink-deep mb-2">
                        {r.title}
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                        {r.body}
                      </p>
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

          {/* Chapter 03 — ACV Protocol */}
          <section id="acv-protocol" className="scroll-mt-24">
            <SectionLabel n="03" title="The ACV Protocol" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgAcvProtocol}
                alt="Apple cider vinegar bottle with diluted spray solution — ACV protocol for dog yeast infection"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Apple cider vinegar is the most commonly tried dog yeast
              infection home remedy, and the one with the most plausible
              mechanism of action. Here's the exact protocol based on
              veterinary guidance:
            </p>

            {/* Dilution table */}
            <h3 className="font-serif text-xl text-ink-deep mb-4">
              Dilution Ratios
            </h3>
            <div className="overflow-x-auto rounded-xl border border-border mb-8">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left">
                  <tr>
                    <th className="px-4 py-3 font-medium text-ink-deep">
                      Skin Type
                    </th>
                    <th className="px-4 py-3 font-medium text-ink-deep">
                      ACV
                    </th>
                    <th className="px-4 py-3 font-medium text-ink-deep">
                      Water
                    </th>
                    <th className="px-4 py-3 font-medium text-ink-deep">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ACV_ROWS.map((row, i) => (
                    <tr
                      key={row.skin}
                      className={i % 2 ? "bg-secondary/20" : "bg-card"}
                    >
                      <td className="px-4 py-3 font-medium text-ink-deep">
                        {row.skin}
                      </td>
                      <td className="px-4 py-3 text-foreground/75">
                        {row.acv}
                      </td>
                      <td className="px-4 py-3 text-foreground/75">
                        {row.water}
                      </td>
                      <td className="px-4 py-3 text-foreground/75">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic mb-8">
              [Source: Kabo, 2023] [Source: The Spruce Pets, 2022]
            </p>

            {/* Application steps */}
            <h3 className="font-serif text-xl text-ink-deep mb-4">
              Application Steps
            </h3>
            <ol className="space-y-3 mb-8">
              {[
                "Bathe the dog first with a mild, dog-safe shampoo — not oatmeal-based, which can feed yeast.",
                "Mix the diluted solution in a clean spray bottle or bowl.",
                "Apply to affected areas — spray or pour onto skin, avoiding face, eyes, genitals, and any broken skin.",
                "Massage gently into skin folds, between toes, along belly.",
                "Leave on to air-dry — do not rinse off. The acidic film is the active part. [Source: Kabo, 2023]",
                "Pat dry any deep folds — moisture left in moist environments like skin folds defeats the purpose.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                  <span className="text-[11px] tabular-nums tracking-[0.15em] uppercase text-accent mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            {/* Frequency */}
            <h3 className="font-serif text-xl text-ink-deep mb-4">Frequency</h3>
            <div className="space-y-3 mb-8">
              {[
                { label: "Active yeast infections", text: "Once daily or every 2–3 days depending on skin tolerance. [Source: Small Door Veterinary, 2022]" },
                { label: "Maintenance", text: "Once weekly once symptoms are improving." },
                { label: "Reassess at 2 weeks", text: "If no improvement, stop home treatment and book a vet visit." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex-shrink-0 w-36">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Safety rules */}
            <div className="rounded-xl bg-ink-deep text-primary-foreground p-6">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                ACV Safety Rules — Non-Negotiable
              </div>
              <ul className="space-y-2 text-sm text-primary-foreground/85">
                <li>• Never on raw, open, or ulcerated skin — acetic acid on broken skin causes further damage [Source: The Spruce Pets, 2022]</li>
                <li>• Never inside the dog's ears without confirmed intact eardrum — risk of middle ear damage [Source: MSD Veterinary Manual, 2023]</li>
                <li>• Never near eyes — vinegar is irritating to mucous membranes [Source: The Spruce Pets, 2022]</li>
                <li>• Stop immediately if the dog shows increased redness, swelling, or distress after application</li>
              </ul>
            </div>
          </section>

          {/* Chapter 04 — Antifungal Diet */}
          <section id="diet" className="scroll-mt-24">
            <SectionLabel n="04" title="Antifungal Diet for Dogs" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgDiet}
                alt="Dog food bowl with fresh fish and vegetables beside omega-3 supplements — antifungal diet for dogs with yeast infections"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Malassezia primarily feeds on skin lipids, not dietary sugar
              directly — but high-carbohydrate diets worsen yeast infections in
              dogs indirectly by driving obesity, inflammation, and allergic
              skin disease. For dogs with chronic or recurrent yeast
              infections, the dog's diet is the most important long-term lever.{" "}
              <em>[Source: MSD Veterinary Manual, 2023]</em>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg text-ink-deep mb-4">
                  Foods to Reduce
                </h3>
                <ul className="space-y-2 text-sm text-foreground/75">
                  <li className="flex gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>
                      High-sugar treats and table scraps — promote yeast growth
                      by raising blood glucose and skin surface sugar{" "}
                      <em>[Source: The Honest Kitchen, 2016]</em>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>
                      High-glycemic starches (corn, wheat, white rice, potato)
                      as primary kibble ingredients{" "}
                      <em>[Source: Furnatura, 2021]</em>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>
                      Molasses, honey, or syrup as food additives{" "}
                      <em>[Source: The Honest Kitchen, 2016]</em>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg text-ink-deep mb-4">
                  Foods That Help
                </h3>
                <ul className="space-y-2 text-sm text-foreground/75">
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      High-quality animal protein — supports skin barrier
                      function and helps control yeast overgrowth{" "}
                      <em>[Source: MSD Veterinary Manual, 2023]</em>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Omega-3 fatty acids (fish oil, sardines) — consistently
                      supported for reducing skin inflammation{" "}
                      <em>[Source: PetMD, 2022]</em>; 20–55 mg EPA+DHA per kg
                      daily
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Plain unsweetened kefir (1–2 tbsp small dogs; 2–4 tbsp
                      large dogs) for live Lactobacillus cultures{" "}
                      <em>[Source: The Honest Kitchen, 2016]</em>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Hypoallergenic diet or limited-ingredient protein if food
                      allergies are suspected — 8–12 week elimination trial
                      under vet guidance{" "}
                      <em>[Source: MSD Veterinary Manual, 2023]</em>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-secondary/40 border border-border">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                On grain-free diets
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                There is no peer-reviewed evidence that grain-free diets reduce
                yeast infections in dogs as a category. What matters is the
                overall carbohydrate load and whether the healthy diet is
                addressing any food allergy trigger. Focus on ingredient
                quality and carbohydrate level, not the grain-free label.{" "}
                <em>[Source: MSD Veterinary Manual, 2023]</em>
              </p>
            </div>
          </section>

          {/* Chapter 05 — Prevention */}
          <section id="prevention" className="scroll-mt-24">
            <SectionLabel n="05" title="How to Prevent Recurrence" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Most dogs that get yeast infections once will get them again
              unless the underlying trigger is addressed. Recurrent infections
              indicate an underlying issue with the dog's immune system or a
              persistent allergen. The goal is to prevent recurrent infections,
              not just treat each flare — future infections are best prevented
              by fixing the root, not repeating the home remedies.{" "}
              <em>[Source: MSD Veterinary Manual, 2023]</em>
            </p>
            <div className="space-y-3">
              {PREVENTION_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/85 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              This article is for educational purposes. It does not substitute
              for veterinary diagnosis — particularly for ear infections, where
              home treatment without knowing eardrum status carries real risk.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <SectionLabel n="06" title="Frequently Asked Questions" />
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
            <SectionLabel n="07" title="References" />
            <ol className="space-y-2 text-sm text-foreground/70 list-decimal pl-5">
              {REFERENCES.map((ref, i) => (
                <li key={i} className="leading-relaxed">
                  {ref}
                </li>
              ))}
            </ol>
          </section>

          {/* ReviewedByDrAlex */}
          <ReviewedByDrAlex />

          {/* Final CTA */}
          <section className="scroll-mt-24 bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
            <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
              Keep the ear canal clear
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Yeast on skin and yeast in ears share the same root.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
              The same Malassezia overgrowth that affects the dog's skin also
              drives ear infections in predisposed breeds. Celsius Herbs'
              PetGlow Ear Cleaner is formulated with plant-based antifungal
              actives — including neem and olive leaf — to gently clear the
              ear canal and reduce the microbial load that drives recurring
              yeast otitis.
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
