import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Bug,
  Clock,
  Droplets,
  Ear,
  Eye,
  FlaskConical,
  Microscope,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CAT_EAR_INFECTION_PICTURES_FAQS as FAQS } from "@/lib/blog/cat-ear-infection-pictures-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";

import imgHealthyEar from "@/assets/blog/cat-ear-infection-pictures-healthy-ear.webp";
import imgEarwax from "@/assets/blog/cat-ear-infection-pictures-earwax.webp";
import imgEarMiteKitten from "@/assets/blog/cat-ear-infection-pictures-ear-mite-kitten.webp";
import imgEarMiteInfection from "@/assets/blog/cat-ear-infection-pictures-ear-mite-infection.webp";
import imgEarMiteMicroscope from "@/assets/blog/cat-ear-infection-pictures-ear-mite-microscope.webp";
import imgEarMiteEndoscope from "@/assets/blog/cat-ear-infection-pictures-ear-mite-endoscope.webp";
import imgMalasseziaCytology from "@/assets/blog/cat-ear-infection-pictures-malassezia-cytology.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "healthy-ear", label: "Healthy ear" },
  { id: "early-stage", label: "Early stage" },
  { id: "bacterial-vs-yeast", label: "Bacterial vs yeast" },
  { id: "ear-mites", label: "Ear mites" },
  { id: "discharge", label: "Discharge guide" },
  { id: "severity", label: "Severity stages" },
  { id: "home-treatment", label: "Cleaning & treatment" },
  { id: "vet", label: "When to see a vet" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const DISCHARGE_ROWS = [
  {
    look: "Black, dry, crumbly",
    description: "Like coffee grounds or fine black pepper — dry and granular",
    meaning: "Ear mites (Otodectes) — strongly associated with the 'coffee grounds' pattern",
    urgent: false,
  },
  {
    look: "Dark brown, waxy",
    description: "Thick chocolate-to-dark-brown paste coating canal walls",
    meaning: "Yeast (Malassezia) — one of the most common ear infections in cats",
    urgent: false,
  },
  {
    look: "Brown, soft, smeary",
    description: "Soft brown wax or dirty oil, wipes off easily on cotton",
    meaning: "Early infection, yeast, mites, or excess wax buildup",
    urgent: false,
  },
  {
    look: "Yellow/cream, pus-like",
    description: "Mucus-like, gooey, shiny; may pool at canal entrance",
    meaning: "Bacterial ear infections in cats — produces purulent discharge",
    urgent: false,
  },
  {
    look: "Green, foul-smelling",
    description: "Bright or dull green, thick, strong odor",
    meaning: "Moderate to severe bacterial ear infection — urgent vet care",
    urgent: true,
  },
  {
    look: "Bloody or rust-colored",
    description: "Bright red, dark maroon, or rusty streaks in discharge",
    meaning: "Severe painful ear infection — ulceration, trauma, or severe infection",
    urgent: true,
  },
  {
    look: "Clear to cloudy fluid",
    description: "Thin, watery, or slightly milky; may accompany head tilt",
    meaning: "Early infection, serous otitis, or middle ear infections — urgent if head tilt present",
    urgent: false,
  },
];

const COMPARE_ROWS = [
  { feature: "Discharge color", bacterial: "Yellow, cream, or greenish; blood-tinged in severe cases", yeast: "Dark brown to reddish-brown or waxy tan" },
  { feature: "Discharge texture", bacterial: "Thick, gooey, or pus-like; sticky clumps", yeast: "Waxy, greasy, or pasty; coats canal walls" },
  { feature: "Odor", bacterial: "Strong, foul, or rotten", yeast: "Musty, sweet, or 'yeasty bread'" },
  { feature: "Skin color", bacterial: "Bright red; may have raw or ulcerated spots", yeast: "Reddish-pink; may thicken or hyperpigment in chronic ear infections" },
  { feature: "Canal appearance", bacterial: "Wet and shiny; visible moisture or pus", yeast: "Dry-waxy or greasy; sticky debris clings to hair and skin" },
];

const MITE_VS_INFECTION_ROWS = [
  { feature: "Debris texture", mites: "Dry, crumbly, granular", infection: "Wet, waxy, greasy, or pus-like" },
  { feature: "Debris color", mites: "Black to very dark brown", infection: "Dark brown, yellow, cream, or green" },
  { feature: "Ears affected", mites: "Often both of the cat's ears", infection: "Often starts in one ear" },
  { feature: "Odor", mites: "Little to none from mites themselves", infection: "Usually noticeable — musty or foul" },
  { feature: "Itch intensity", mites: "Extremely intense; often violent head shaking", infection: "Moderate to severe, but often less explosive" },
];

const REFERENCES = [
  "VCA Animal Hospitals. (2020). Ear Infections in Cats (Otitis Externa). vcahospitals.com",
  "PDSA. (2020). Ear infections in cats. pdsa.org.uk",
  "PetMD Editorial. (2021). Cat Ear Infection: Symptoms, Causes, and Treatment. petmd.com",
  "Merck Veterinary Manual. (2020). Otitis Externa in Dogs and Cats. merckvetmanual.com",
  "MSD Veterinary Manual. (2020). Ear Mites in Cats (Otodectes cynotis). msdvetmanual.com",
  "Catster. (2022). Cat Yeast Infection vs. Ear Mites: Vet Reviewed Differences. catster.com",
  "Vetster. (2023). Cat ear mites vs earwax buildup: How to tell the difference. vetster.com",
  "Boca Midtowne Animal Hospital. (2022). Ear Mites vs. Ear Infections. bocamidtowne.com",
  "Chronic Otitis in Cats — PMC / Frontiers in Veterinary Science. (2023). Chronic Otitis Externa in Cats: Current Understanding and Management.",
  "Seattle Veterinary Associates. (2024). Cat Ear Problems: Mites, Infections, and What to Do.",
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

function PhotoCredit({ author, license, source }: { author: string; license: string; source: string }) {
  return (
    <p className="text-[11px] text-muted-foreground mt-2 italic">
      Photo: {author} — {license} via {source}
    </p>
  );
}

export default function CatEarInfectionPicturesGuide() {
  const [activeSection, setActiveSection] = useState("healthy-ear");
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
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
      {/* Reading progress */}
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
              {BLOG_ARTICLES.filter((a) => a.href !== "/cat-ear-infection-pictures").map((a) => (
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
              <Ear className="w-3.5 h-3.5" /> Visual Guide · Cat Ear Health
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Cat Ear Infection Pictures: Visual ID Guide
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Color-by-color breakdown of what ear infections in cats look like —
              bacterial vs yeast, ear mites vs infection, plus a discharge color
              guide so you know exactly when to call the vet.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Eye, label: "Real CC-licensed photos" },
                { icon: FlaskConical, label: "Bacterial vs yeast" },
                { icon: Bug, label: "Ear mites comparison" },
                { icon: Droplets, label: "Discharge color guide" },
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

            {/* Intro disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900 leading-relaxed space-y-2">
                  <p>
                    <strong>Visual guide — not a diagnosis.</strong> Common ear infection symptoms — redness, ear debris, head shaking, ears itchy, and discharge — overlap between conditions. Ear inflammation can also stem from environment, autoimmune diseases, allergies, and immune system diseases. Use these cat ear infection pictures and descriptions to recognize when to act — then get a vet's accurate diagnosis before starting treatment.
                  </p>
                  <p>
                    Early treatment prevents the affected ear from developing secondary infections or chronic ear issues. This guide does not constitute medical advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 01 — Healthy ear */}
            <section id="healthy-ear" className="scroll-mt-24">
              <SectionLabel n="01" title="What a Healthy Cat Ear Looks Like" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before you can spot ear infections in cats from pictures, you need the baseline. Healthy cat ears have no redness, no ear debris, no swelling, and no ear discharge.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: PawPrint, title: "Outer surface (pinna)", body: "Pale pink — or the cat's natural pigment. No bright red patches, crusts, or thickening. Skin looks smooth and thin, almost like fine leather. A feline friend's ears in good health feel slightly flexible when gently folded." },
                  { icon: Ear, title: "External ear canal", body: "No visible ear debris, no dark chunks of wax, no wet-looking discharge. Normal wax, if present, is pale yellow to light tan, thin and minimal. The skin lining the canal should look smooth and slightly shiny — not thickened or crusted." },
                  { icon: Wind, title: "Smell", body: "Little to no noticeable smell. Healthy cat ears are essentially odor-free. Any sour, musty, or rotten smell is abnormal and usually indicates ear infections in cats." },
                  { icon: ShieldCheck, title: "Comfort", body: "Touching or folding the ear does not make your cat pull away, cry out, or start head shaking. No frequent pawing at the ear. No ear inflammation or other symptoms of ear discomfort." },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="bg-muted/40 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">{title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <figure className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={imgHealthyEar}
                  alt="Healthy cat ear showing pale-pink clean inner pinna with no visible discharge or ear debris"
                  className="w-full object-cover max-h-80"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Healthy cat ear — clean, pale pink, no ear debris</p>
                  <PhotoCredit author="Carrotkit" license="CC BY-SA 4.0" source="Wikimedia Commons" />
                </figcaption>
              </figure>
            </section>

            {/* Chapter 02 — Early stage */}
            <section id="early-stage" className="scroll-mt-24">
              <SectionLabel n="02" title="Early Stage Infection Pictures" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Early ear infections in cats are the easiest to treat and the hardest to spot. The changes are subtle — here's what the first signs look like before obvious ear discharge appears. Early treatment at this stage is far simpler before ear debris accumulates and ear inflammation takes hold.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { icon: Thermometer, title: "Color shift", body: "One of your cat's ears shifts from soft pale pink to a deeper rose or light red — look for asymmetry. You may see patchy redness or small red streaks rather than the entire ear turning uniformly red. These early color changes are often dismissed, but they are the clearest early signs of ear infections in cats." },
                  { icon: Droplets, title: "Wax change", body: "Normal thin tan wax gets noticeably darker and more plentiful — a ring of brown or sticky ear debris around the canal opening that wasn't there last week. A thin, slightly cloudy fluid may appear in your cat's ears before thick pus develops." },
                  { icon: Zap, title: "Skin texture", body: "The skin of the cat's ear canal may look mildly swollen or puffy along the edges. Fine scabs or small scratch marks can appear around the outer ear from increased itching. Ear infections in cats often produce these micro-scratches before discharge is heavy enough to notice." },
                  { icon: Wind, title: "Smell", body: "A faint, unusual smell — slightly musty, sour, or 'off' — may appear before any visible ear debris. Ear inflammation from early infections in cats changes the ear environment enough to produce an odor even when discharge isn't visible yet." },
                  { icon: Clock, title: "Behavior", body: "Occasional head shaking that becomes more frequent over a few days. Light but repeated pawing at one ear, rubbing the ear against furniture. These behavioral signs of ear infections in cats are often the first things owners notice — even before visual changes." },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4 p-4 bg-muted/30 rounded-xl">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <figure className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={imgEarwax}
                  alt="Cat ear canal showing earwax accumulation — what early mild wax buildup and ear debris looks like"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Cat ear showing wax buildup — mild ear debris vs early infection</p>
                  <PhotoCredit author="Carrotkit" license="CC BY-SA 4.0" source="Wikimedia Commons" />
                </figcaption>
              </figure>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Left untreated, ear infections at this early stage progress quickly. Once discharge is thick and the cat's ear canal is obviously red, cat ear infections are more advanced and harder to treat. [Source: PetMD, 2021]
              </p>
            </section>

            {/* Chapter 03 — Bacterial vs Yeast */}
            <section id="bacterial-vs-yeast" className="scroll-mt-24">
              <SectionLabel n="03" title="Bacterial vs Yeast: Visual Comparison" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Both bacterial and yeast ear infections in cats cause redness, odor, and discharge — but the look and smell of the debris usually differ. The table below maps the visual features head-to-head. In real-life cat ear infection pictures, many ears have mixed bacterial ear infections and yeast ear infections simultaneously. [Source: PetMD, 2021]
              </p>

              {/* Comparison table */}
              <div className="rounded-2xl overflow-hidden border border-border mb-6">
                <div className="bg-muted/40 px-5 py-3 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Bacterial vs Yeast Ear Infections in Cats: Visual Comparison</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-muted-foreground">Feature</th>
                        <th className="text-left p-3 font-semibold text-red-700">Bacterial Ear Infection</th>
                        <th className="text-left p-3 font-semibold text-amber-700">Yeast Ear Infection</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARE_ROWS.map((row, i) => (
                        <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                          <td className="p-3 font-medium">{row.feature}</td>
                          <td className="p-3 text-muted-foreground">{row.bacterial}</td>
                          <td className="p-3 text-muted-foreground">{row.yeast}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-5 py-3 text-xs text-muted-foreground border-t border-border">
                  [Source: VCA Animal Hospitals, 2020; Catster, 2022; Chronic Otitis in Cats — PMC, 2023]
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="w-4 h-4 text-red-600" />
                    <span className="font-semibold text-sm">Bacterial ear infections</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bacterial ear infections in cats look "angry" — wet, pus-like discharge, bright red inflamed tissue, and a foul smell. Bacterial ear infections are often secondary to ear mites or allergies that disrupt the normal ear environment. In severe cases, yellow crusts form on the outer ear and the canal opening swells almost shut. [Source: VCA Animal Hospitals, 2020]
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold text-sm">Yeast ear infections (Malassezia)</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yeast ear infections — most commonly <em>Malassezia pachydermatis</em> — produce thick, dark brown to black waxy debris in the cat's ear canal, often described as coffee grounds or dark chocolate smear. Yeast infections smell musty or bread-dough sweet. Ear yeast infections are extremely itchy. [Source: Catster, 2022; Vetster, 2023]
                  </p>
                </div>
              </div>

              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgMalasseziaCytology}
                  alt="Malassezia yeast cells under tape cytology microscopy (Dif-Quik stain) — the peanut-shaped organisms causing yeast ear infections in cats"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Malassezia yeast cells (Dif-Quik stain) — the organism behind yeast ear infections in cats</p>
                  <PhotoCredit author="Caroldermoid" license="CC BY-SA 3.0" source="Wikimedia Commons" />
                </figcaption>
              </figure>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900 leading-relaxed">
                <strong>Chronic ear infections — what to watch for:</strong> When cat ear infections keep coming back, the underlying cause usually hasn't been addressed. Chronic ear infections in cats are almost always driven by autoimmune diseases, allergies, structural anatomy, or a weak immune system. Cats with immune system diseases are particularly prone to recurring yeast infections. Recurring ear infections that don't respond to standard ear drops are a signal to ask your vet for a deeper workup into environment, autoimmune diseases, allergies, and immune function. [Source: Chronic Otitis in Cats — PMC, 2023]
              </div>
            </section>

            {/* Chapter 04 — Ear mites */}
            <section id="ear-mites" className="scroll-mt-24">
              <SectionLabel n="04" title="Ear Mites vs Ear Infection: Side-by-Side" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ear mites (<em>Otodectes cynotis</em>) produce one of the most recognizable patterns in cat ear infection pictures — if you know what to look for. Here's how to distinguish them from bacterial ear infections or yeast ear infections at a glance.
              </p>

              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Bug className="w-4 h-4 text-stone-700" />
                  <span className="font-semibold text-sm">The "coffee grounds" signature of ear mites</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ear mite debris appears black to very dark brown and <em>dry</em> — like fine coffee grounds or coarse black pepper packed into the cat's ear canal. It crusts along the canal walls and sometimes spills onto the inner ear flap. This dry, granular texture distinguishes ear mites from the wet or greasy discharge of outer ear infections. Under magnification, tiny white specks — the mites — may be visible moving in the dark debris. [Source: MSD Veterinary Manual, 2020; Seattle Veterinary Associates, 2024]
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border mb-6">
                <div className="bg-muted/40 px-5 py-3 flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Ear Mites vs Ear Infections in Cats: Side-by-Side</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-muted-foreground">Feature</th>
                        <th className="text-left p-3 font-semibold text-stone-700">Ear Mites</th>
                        <th className="text-left p-3 font-semibold text-red-700">Ear Infections in Cats</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MITE_VS_INFECTION_ROWS.map((row, i) => (
                        <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                          <td className="p-3 font-medium">{row.feature}</td>
                          <td className="p-3 text-muted-foreground">{row.mites}</td>
                          <td className="p-3 text-muted-foreground">{row.infection}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-5 py-3 text-xs text-muted-foreground border-t border-border">
                  [Source: MSD Veterinary Manual, 2020; Boca Midtowne Animal Hospital, 2022; Catster, 2022]
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6 text-sm text-blue-900 leading-relaxed">
                <strong>Important overlap:</strong> Ear mites frequently trigger secondary bacterial ear infections or yeast ear infections, so you may see coffee-ground debris <em>plus</em> odor and pus in the same ear. Cats with ear canal thick fur — like Maine Coons or Persians — are harder to assess visually because ear debris gets trapped in the hair. Infected cat ears in these breeds can look deceptively mild from outside. [Source: MSD Veterinary Manual, 2020; Chronic Otitis in Cats — PMC, 2023]
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <figure className="rounded-2xl overflow-hidden border border-border">
                  <img
                    src={imgEarMiteInfection}
                    alt="Cat ear showing ear mite infestation with dark coffee-ground debris in the external ear canal"
                    className="w-full object-cover max-h-64"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 bg-muted/30">
                    <p className="text-sm font-medium">Cat ear mite infestation — dark coffee-ground debris in the external ear canal</p>
                    <PhotoCredit author="Uwe Gille" license="CC BY-SA 3.0" source="Wikimedia Commons" />
                  </figcaption>
                </figure>
                <figure className="rounded-2xl overflow-hidden border border-border">
                  <img
                    src={imgEarMiteMicroscope}
                    alt="Microscopic image of Otodectes cynotis — the ear mites causing dark debris and ear infections in cats"
                    className="w-full object-cover max-h-64"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 bg-muted/30">
                    <p className="text-sm font-medium">Otodectes cynotis (ear mites) under microscope — the parasites behind the coffee-ground pattern</p>
                    <PhotoCredit author="Caroldermoid" license="CC BY-SA 3.0" source="Wikimedia Commons" />
                  </figcaption>
                </figure>
              </div>
              <figure className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={imgEarMiteEndoscope}
                  alt="Endoscopic view inside a cat's ear canal showing white ear mite granules packed in orange-brown debris — what a vet sees with an otoscope"
                  className="w-full object-cover max-h-80"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Endoscopic view of a cat's ear canal — white mite granules visible in dark debris (what a vet sees with an otoscope)</p>
                  <PhotoCredit author="Hanzaku" license="CC BY-SA 4.0" source="Wikimedia Commons" />
                </figcaption>
              </figure>
            </section>

            {/* Chapter 05 — Discharge guide */}
            <section id="discharge" className="scroll-mt-24">
              <SectionLabel n="05" title="Ear Discharge Color Guide" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Color and texture in your cat's ears are the fastest visual shortcuts — but they indicate, they don't diagnose. Use this table to understand what you're looking at in cat ear infection pictures, then get vet confirmation.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/40 border-b border-border">
                        <th className="text-left p-3 font-semibold">What you see</th>
                        <th className="text-left p-3 font-semibold">Visual description</th>
                        <th className="text-left p-3 font-semibold">Most likely cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DISCHARGE_ROWS.map((row, i) => (
                        <tr
                          key={row.look}
                          className={`border-b border-border last:border-0 ${row.urgent ? "bg-red-50" : i % 2 === 0 ? "bg-muted/20" : ""}`}
                        >
                          <td className="p-3 font-medium">
                            {row.urgent && <AlertTriangle className="w-3.5 h-3.5 text-red-600 inline mr-1" />}
                            {row.look}
                          </td>
                          <td className="p-3 text-muted-foreground">{row.description}</td>
                          <td className={`p-3 ${row.urgent ? "text-red-700 font-medium" : "text-muted-foreground"}`}>{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">[Source: VCA Animal Hospitals, 2020; Merck Veterinary Manual, 2020; PDSA, 2020]</p>
            </section>

            {/* Chapter 06 — Severity */}
            <section id="severity" className="scroll-mt-24">
              <SectionLabel n="06" title="Severity Stages: Mild to Severe" />
              <div className="space-y-4">
                {[
                  {
                    label: "Mild",
                    color: "bg-green-50 border-green-200",
                    headerColor: "text-green-800",
                    icon: ShieldCheck,
                    iconColor: "text-green-700",
                    points: [
                      "Cat's ear canal shifts slightly from pale pink to rose pink — asymmetry between the two ears is the key clue",
                      "Small but noticeable increase in wax — darker brown or slightly sticky ear debris around the canal opening",
                      "Skin is still smooth, not thick or crusted. Ear inflammation is early and mild.",
                      "Occasional head shake or scratching; cat tolerates the ear being touched",
                      "Ear infections in cats at this stage respond well to prescribed ear drops after proper vet diagnosis",
                    ],
                    source: "[Source: Vetster, 2023; PDSA, 2020]",
                  },
                  {
                    label: "Moderate",
                    color: "bg-amber-50 border-amber-200",
                    headerColor: "text-amber-800",
                    icon: AlertTriangle,
                    iconColor: "text-amber-700",
                    points: [
                      "Cat's ear canal clearly red; visible swelling — the opening looks narrowed",
                      "Obvious discharge: dark waxy clumps for yeast, yellow or cream pus for bacterial ear infections, or black coffee-ground material for mites",
                      "Skin around the canal may show small crusts or scabs",
                      "Frequent head shaking and scratching; cat may pull away or cry when the cat's ears are touched",
                      "Cat ear infections at this stage usually need antibiotic or antifungal ear drops — sometimes a combination",
                    ],
                    source: "[Source: PetMD, 2021; Chronic Otitis in Cats — PMC, 2023]",
                  },
                  {
                    label: "Severe — Vet Immediately",
                    color: "bg-red-50 border-red-300",
                    headerColor: "text-red-800",
                    icon: AlertTriangle,
                    iconColor: "text-red-700",
                    points: [
                      "Ear flap may look thickened, lumpy, or permanently folded from chronic ear infections",
                      "Cat's ear canal so full of discharge you can barely see inside — greenish, bloody, or impossibly thick",
                      "Strong overpowering smell noticeable from a distance — one of the most reliable other symptoms of severe infections",
                      "Constant head shaking to the point of hair loss and bleeding; other symptoms of severe outer ear infections escalating",
                      "Head tilt, stumbling, circling, or rapid eye movements (nystagmus) — signs ear infections have reached inner ear infections or middle ear",
                      "Aural hematoma: soft pillow-like ear flap from ruptured blood vessels — a complication of recurring ear infection",
                      "Inner ear infections can cause permanent hearing loss and balance disorders",
                    ],
                    source: "[Source: VCA Animal Hospitals, 2020; Merck Veterinary Manual, 2020; PDSA, 2020]",
                  },
                ].map(({ label, color, headerColor, icon: Icon, iconColor, points, source }) => (
                  <div key={label} className={`rounded-2xl border p-5 ${color}`}>
                    <div className={`flex items-center gap-2 mb-3 font-semibold ${headerColor}`}>
                      <Icon className={`w-4 h-4 ${iconColor}`} />
                      {label}
                    </div>
                    <ul className="space-y-1.5">
                      {points.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-foreground/40 flex-shrink-0">—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-3">{source}</p>
                  </div>
                ))}
              </div>
              <figure className="rounded-2xl overflow-hidden border border-border mt-6">
                <img
                  src={imgEarMiteKitten}
                  alt="Kitten's ear showing dark debris and early ear inflammation from ear mite infestation — similar visual appearance to early yeast infection debris"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Kitten ear showing dark debris and early ear inflammation from ear mite infestation</p>
                  <PhotoCredit author=".Anja." license="CC BY-SA 4.0" source="Wikimedia Commons" />
                </figcaption>
              </figure>
            </section>

            {/* Chapter 07 — Home treatment */}
            <section id="home-treatment" className="scroll-mt-24">
              <SectionLabel n="07" title="How to Clean Your Cat's Ears and When to Treat" />
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Any visible redness, ear debris, or discomfort in your cat's ears warrants a veterinary exam first. The eardrum may be damaged, and some products — including natural ones — can cause pain or worsen a damaged ear canal in cats with a ruptured eardrum. This is especially true in cats with a ruptured eardrum, diabetes, or immune system diseases. [Source: Merck Veterinary Manual, 2020]
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-5 border border-border rounded-2xl">
                  <p className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-primary" /> How to clean your cat's ears properly
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Hold the ear flap gently upright, fill the cat's ear canal with a vet-recommended ear cleanser, and massage the base until you hear a soft squishing sound.</li>
                    <li>Let your cat shake, then wipe only the outer canal entrance with a cotton ball — never push swabs deep into the cat's ear canal. Deep swabbing compacts ear debris further in and can damage the eardrum.</li>
                    <li>Regularly cleaning your cat's ears this way helps catch early ear infections before they become a cat's ear issue requiring prescription treatment. Inspect your cat's ears weekly — it takes 30 seconds and often catches problems before they become painful ear infections. [Source: VCA Animal Hospitals, 2020]</li>
                  </ul>
                </div>

                <div className="p-5 border border-border rounded-2xl">
                  <p className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-primary" /> Prescribed ear drops after diagnosis
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>For bacterial ear infections in cats:</strong> antibiotic ear drops in ear drop form — antibiotic, antifungal, or antiparasitic depending on the cause confirmed by cytology.</li>
                    <li><strong>For yeast ear infections:</strong> antifungal ear drops. Completing the full course matters — stopping early leads to recurring ear infection.</li>
                    <li><strong>For severe outer ear infections with ear canal excessive growth:</strong> a vet may need to reduce tissue swelling inside the canal or physically remove swollen tissue before prescribed ear drops can even reach the infection. Injectable antibiotics may be required for severe bacterial ear infections. [Source: Chronic Otitis in Cats — PMC, 2023]</li>
                  </ul>
                </div>

                <div className="p-5 border border-border rounded-2xl">
                  <p className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" /> Natural options and their limits
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Apple cider vinegar:</strong> Can sting severely on inflamed tissue. Not safe for cat ear infections if the eardrum is ruptured. Must be heavily diluted and stopped if the cat shows discomfort.</li>
                    <li><strong>Coconut oil:</strong> Anecdotal support only — does not kill bacteria, yeast, or ear mites causing ear infections in cats.</li>
                    <li>Kitty's ears are sensitive — if you see any ear debris, discharge, or redness, use something vet-recommended rather than home remedies to treat ear infection. [Source: Merck Veterinary Manual, 2020]</li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <section className="bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
                <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                  Vet-formulated ear care
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                  Gentle ear support for your feline family member.
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
                  Whether your cat's ears are dealing with ear mites, yeast ear infections, or bacterial ear infections, a proper ear cleanser formulated for cats helps remove ear debris, support the ear environment, and reduce recurring ear infections over time. Use it to clean your cat's ears between vet visits, or as a preventive routine.
                </p>
                <a href="https://celsiusherbs.com/products/ear-mite-treatment-dogs-cats">
                  <Button
                    size="lg"
                    className="rounded-full bg-primary-foreground text-ink-deep hover:bg-primary-foreground/90"
                  >
                    Explore Ear Mite Treatment for Cats →
                  </Button>
                </a>
              </section>
            </section>

            {/* Chapter 08 — When to see a vet */}
            <section id="vet" className="scroll-mt-24">
              <SectionLabel n="08" title="When to See a Vet" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any visible redness, ear debris, or discomfort in your cat's ears warrants a vet exam. These specific signs mean go today or tomorrow — do not wait:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <ul className="space-y-2">
                  {[
                    "Black coffee-ground ear debris with intense itching or violent head shaking — signs of ear infections in cats needing immediate attention",
                    "Thick yellow, green, or bloody discharge from one or both of your cat's ears — a painful ear infection that won't resolve without treatment",
                    "Cat's ear canal swollen so severely you cannot see inside",
                    "Strong foul odor noticeable from arm's length — one of the most reliable other symptoms of bacterial ear infections",
                    "Ear flap that looks puffy, balloon-like, or drooping on one side (aural hematoma) — a complication of recurring ear infection",
                    "Cat cries, hisses, or tries to bite when the cat's ears are touched — clear signs of a painful ear infection",
                    "Head tilt, loss of balance, circling, or rapid eye movements (nystagmus) — middle ear infections or inner ear infections requiring urgent care",
                    "Facial paralysis — rare but a serious sign of nerve involvement in advanced ear infections",
                    "Any ear infections in cats seen in a kitten, senior feline friend, or a cat with a weak immune system",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-red-900">
                      <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                Chronic ear infections and recurring ear infections signal an unresolved underlying cause — usually allergies, a yeast predisposition, or structural anatomy. Untreated ear infections can progress to middle ear or inner ear infections and cause hearing loss. If your feline friend's ears keep flaring up, that recurring pattern deserves a deeper workup — not just more ear drops. [Source: Merck Veterinary Manual, 2020]
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <SectionLabel n="09" title="Frequently Asked Questions" />
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
              <SectionLabel n="10" title="References" />
              <ol className="space-y-2">
                {REFERENCES.map((ref, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground/50 flex-shrink-0 w-5">{i + 1}.</span>
                    {ref}
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground font-semibold mb-2">Image attributions (Wikimedia Commons)</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>Healthy cat ear — Carrotkit, CC BY-SA 4.0, commons.wikimedia.org/wiki/File:Cat%27s_ear.jpg</li>
                  <li>Cat earwax — Carrotkit, CC BY-SA 4.0, commons.wikimedia.org/wiki/File:Cat%27s_earwax.jpg</li>
                  <li>Kitten ear mite (Gale d'oreille chaton) — .Anja., CC BY-SA 4.0, commons.wikimedia.org/wiki/File:Gale_d%27oreille_chaton.jpg</li>
                  <li>Ear mite infection (Ohrraeude) — Uwe Gille, CC BY-SA 3.0, commons.wikimedia.org/wiki/File:Ohrraeude.jpg</li>
                  <li>Otodectes cynotis microscope — Caroldermoid, CC BY-SA 3.0, commons.wikimedia.org/wiki/File:Otodectes_cynotis.jpg</li>
                  <li>Endoscopic view of ear mites in cat's ear canal — Hanzaku, CC BY-SA 4.0, commons.wikimedia.org/wiki/File:%D0%9A%D0%BB%D0%B5%D1%89%D0%B8_otodectes_cynotis_%D0%B2_%D0%BD%D0%B0%D1%80%D1%83%D0%B6%D0%BD%D0%BE%D0%BC_%D1%83%D1%85%D0%B5_%D0%BA%D0%BE%D1%88%D0%BA%D0%B8.jpg</li>
                  <li>Malassezia tape cytology (Dif-Quik stain) — Caroldermoid, CC BY-SA 3.0, commons.wikimedia.org/wiki/File:Malassezia_tape_cytology.jpg</li>
                </ul>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
