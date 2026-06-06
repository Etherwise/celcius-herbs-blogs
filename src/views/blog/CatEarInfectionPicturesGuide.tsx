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

// Real-world photographs sourced from Wikimedia Commons (CC-licensed).
// Full attribution displayed in image captions below each photo.
import imgHealthyEar from "@/assets/blog/cat-ear-infection-pictures-healthy-ear.webp";
import imgEarwax from "@/assets/blog/cat-ear-infection-pictures-earwax.webp";
import imgEarMiteKitten from "@/assets/blog/cat-ear-infection-pictures-ear-mite-kitten.webp";
import imgEarMiteInfection from "@/assets/blog/cat-ear-infection-pictures-ear-mite-infection.webp";
import imgEarMiteMicroscope from "@/assets/blog/cat-ear-infection-pictures-ear-mite-microscope.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "healthy-ear", label: "Healthy ear" },
  { id: "early-stage", label: "Early stage" },
  { id: "bacterial", label: "Bacterial" },
  { id: "yeast", label: "Yeast" },
  { id: "ear-mites", label: "Ear mites" },
  { id: "discharge", label: "Discharge guide" },
  { id: "severity", label: "Severity stages" },
  { id: "causes", label: "Causes" },
  { id: "home-treatment", label: "Home treatment" },
  { id: "vet", label: "When to see a vet" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const DISCHARGE_ROWS = [
  {
    look: "Dry black/dark brown crumbs",
    description: "Like coffee grounds or black pepper — dry and crumbly",
    meaning: "Strongly associated with cat ear mites; also appears in yeast/bacterial infections",
    urgent: false,
  },
  {
    look: "Thick dark brown/black waxy",
    description: "Greasy, dark chocolate to black paste, coating canal walls",
    meaning: "Common with yeast (Malassezia) ear infections in cats",
    urgent: false,
  },
  {
    look: "Brown, soft, smeary wax",
    description: "Soft brown earwax or dirty oil, wipes off on cotton",
    meaning: "Early infection, yeast, ear mites, or excess wax",
    urgent: false,
  },
  {
    look: "Yellow/cream, wet, pus-like",
    description: "Mucus-like, gooey, shiny; may pool at canal entrance",
    meaning: "Common with bacterial ear infections in cats",
    urgent: false,
  },
  {
    look: "Green, foul-smelling",
    description: "Bright or dull green, thick and slimy, strong odor",
    meaning: "Moderate to severe bacterial infection — urgent vet care",
    urgent: true,
  },
  {
    look: "Bloody or rust-colored",
    description: "Bright red, dark maroon, or rusty streaks mixed with discharge",
    meaning: "Severe infection, ulceration, or trauma — urgent vet care",
    urgent: true,
  },
  {
    look: "No discharge, very red/painful",
    description: "Ear looks clean but intensely red and swollen",
    meaning: "Painful otitis without heavy discharge — still needs vet evaluation",
    urgent: false,
  },
];

const COMPARE_ROWS = [
  { feature: "Discharge color", bacterial: "Yellow, cream, or green", yeast: "Dark brown to black" },
  { feature: "Discharge texture", bacterial: "Wet, pus-like, slimy", yeast: "Waxy, greasy, crumbly" },
  { feature: "Odor", bacterial: "Sharp, foul, rotten", yeast: "Sweet, musty, 'bready'" },
  { feature: "Skin color", bacterial: "Bright red", yeast: "Red, sometimes scaly" },
  { feature: "Canal appearance", bacterial: "Swollen, narrowed", yeast: "Inflamed, may thicken" },
];

const REFERENCES = [
  "Hill's Pet Nutrition. (2020). Ear Problems in Cats. hillspet.com",
  "VCA Hospitals. (2021). Ear Infections in Cats (Otitis Externa). vcahospitals.com",
  "Merck Veterinary Manual. (2023). Otitis Externa in Cats. merckvetmanual.com",
  "PetMD Editorial. (2021). Cat Ear Infection: Symptoms, Causes, and Treatments. petmd.com",
  "Vetster. (2022). Yeast Infection in Cat Ears. vetster.com",
  "Purina. (2022). Ear Infection in Cats: Causes, Symptoms and Treatment. purina.co.uk",
  "Catster. (2023). Cat Ear Infections: Everything You Need to Know. catster.com",
  "Cat Fanciers' Association. (2017). Ear Mites in Cats. cfa.org",
  "PangoVet. (2023). Yeast Infection in Cat Ears: Diagnosis and Treatment. pangovet.com",
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
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </a>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-primary-foreground/70 mb-6">
              <Ear className="w-3.5 h-3.5" /> Visual Guide · Cat Ear Health
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Cat Ear Infection Pictures: Bacterial vs Yeast
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Real photographs with specific "looks like X" descriptions — so
              you can match what you see in your cat's ears to the type of
              ear infection, ear mite infestation, or normal anatomy.
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
                    <strong>Visual guide — not a diagnosis.</strong> Ear infections in cats look similar across bacterial, yeast, and mite types, and many require a microscope to distinguish. Use these cat ear infection pictures and descriptions to recognize when to act — then get a vet's accurate diagnosis before starting treatment.
                  </p>
                  <p>
                    Common ear infection symptoms — redness, ear debris, head shaking, ears itchy, and discharge — overlap between conditions. Ear inflammation can also stem from environment, autoimmune diseases, allergies, and immune system diseases. Early treatment prevents the affected ear from developing secondary infections or chronic ear issues. This guide does not constitute medical advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 01 — Healthy ear */}
            <section id="healthy-ear" className="scroll-mt-24">
              <SectionLabel n="01" title="What a Healthy Cat Ear Looks Like" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before you can spot ear infections in cat's ears from pictures, you need to know the baseline. A healthy cat ear has no redness, no ear debris, no swelling, and no ear discharge.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: PawPrint, title: "Outer surface (pinna)", body: "Pale pink — or the cat's natural pigment. No bright red patches, crusts, or thickening. Skin looks smooth and thin, almost like fine leather." },
                  { icon: Ear, title: "External ear canal", body: "No visible chunks of wax, no dark ear debris, no wet-looking discharge. If any wax is present, it's pale yellow to light tan, thin and minimal." },
                  { icon: Wind, title: "Smell", body: "Little to no noticeable smell. A feline friend's healthy ears are essentially odor-free." },
                  { icon: ShieldCheck, title: "Comfort", body: "Touching or folding the ear does not make your cat pull away, cry out, or start head shaking." },
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
                  src={imgHealthyEar.src}
                  alt="Healthy cat ear showing pale-pink clean inner pinna with no visible discharge"
                  className="w-full object-cover max-h-80"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Healthy cat ear — clean, pale pink, no debris</p>
                  <PhotoCredit author="Carrotkit" license="CC BY-SA 4.0" source="Wikimedia Commons" />
                </figcaption>
              </figure>
            </section>

            {/* Chapter 02 — Early stage */}
            <section id="early-stage" className="scroll-mt-24">
              <SectionLabel n="02" title="Early Stage Cat Ear Infection Pictures" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Early stage ear infections in cats are the easiest to treat and the hardest to spot. The changes are subtle — here's what the first signs look like before obvious ear discharge appears.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { icon: Thermometer, title: "Color shift", body: "Cat's ear canal shifts from pale pink to slightly more flushed — a soft pink halo around the canal rim, not bright tomato red. Look for asymmetry between the two ears." },
                  { icon: Droplets, title: "Wax increase", body: "More wax than usual — soft, slightly sticky, yellow-tan or light brown — coating the canal entrance like a thin smudge. This early ear discharge in cat's ear infection looks like ordinary wax that's been sitting too long." },
                  { icon: Zap, title: "Swelling and puffiness", body: "The cat's ear canal opening may look slightly tighter or puffier, as if the skin around it is a little thicker than the other ear. The flap may feel slightly warmer." },
                  { icon: Wind, title: "Smell", body: "A faint, unusual smell — slightly musty, sour, or 'off' — may appear before any visible discharge. One of the other symptoms owners notice first." },
                  { icon: Clock, title: "Behavior", body: "Occasional head shaking, a paw swipe at the ear once or twice a day, or briefly tilting the head after scratching. More than usual grooming of cat's ears — but not constant." },
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
                  src={imgEarwax.src}
                  alt="Cat ear canal showing earwax accumulation in Henry's pocket — what early mild wax buildup looks like"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Cat ear showing wax in Henry's pocket — mild buildup vs infection</p>
                  <PhotoCredit author="Carrotkit" license="CC BY-SA 4.0" source="Wikimedia Commons" />
                </figcaption>
              </figure>
            </section>

            {/* Chapter 03 — Bacterial */}
            <section id="bacterial" className="scroll-mt-24">
              <SectionLabel n="03" title="Bacterial Cat Ear Infection Pictures" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bacterial ear infections in cats look "angry" — wet, pus-like discharge, bright red inflamed tissue, and a foul smell. Bacterial cat's ear infections are often secondary to cat ear mites or allergies.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Droplets, color: "text-yellow-600", title: "Discharge color and texture", body: "Yellow, cream, or greenish ear discharge — thick, gooey, pus-like. Coats the cat's ear canal in a shiny layer. In advanced bacterial ear infections, becomes bloody-yellow or rust-colored with red streaks." },
                  { icon: Thermometer, color: "text-red-600", title: "Skin and inflammation", body: "Inner ear turns bright red to deep red. Canal edges swell so the opening looks smaller — narrowed, ringed with puffy red tissue. In severe cases, raw areas and scabs on the ear flap." },
                  { icon: Wind, color: "text-orange-600", title: "Smell", body: "Sharp, foul, rotten, or putrid — the most pungent smell among ear infections in cats. Distinctly different from the sweet/musty odor of yeast infections." },
                  { icon: AlertTriangle, color: "text-red-700", title: "Hair matting and aural hematoma", body: "Sticky ear discharge mats the fur around cat's ears. Severe head shaking can cause an aural hematoma — a soft blood-filled balloon on the ear flap. Ear infections left untreated commonly escalate to this complication." },
                ].map(({ icon: Icon, color, title, body }) => (
                  <div key={title} className="bg-red-50 border border-red-100 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                      <span className="font-semibold text-sm">{title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              {/* Bacterial vs Yeast comparison table */}
              <div className="rounded-2xl overflow-hidden border border-border mb-4">
                <div className="bg-muted/40 px-5 py-3 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Bacterial vs Yeast: Visual Comparison</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-muted-foreground">Feature</th>
                        <th className="text-left p-3 font-semibold text-red-700">Bacterial</th>
                        <th className="text-left p-3 font-semibold text-amber-700">Yeast</th>
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
                  [Source: VCA Hospitals, 2021; Merck Veterinary Manual, 2023; Vetster, 2022]
                </p>
              </div>
            </section>

            {/* Chapter 04 — Yeast */}
            <section id="yeast" className="scroll-mt-24">
              <SectionLabel n="04" title="Yeast (Malassezia) Cat Ear Infection Pictures" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yeast infections in cats — most commonly <em>Malassezia pachydermatis</em> — produce a very different visual profile from bacterial ear infections. Yeast naturally lives in cat's ears; overgrowth triggered by allergies or moisture leads to a painful ear infection with a distinctive appearance.
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-6 space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-1">The signature debris</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yeast infections are one of the two most common ear infections in cats alongside bacterial infection. Yeast infections in cat's ears create thick, dark brown to black waxy debris in the cat's ear canal — often described as <strong>coffee grounds</strong>, dark chocolate smear, or brown cottage cheese. [Source: Purina, 2022; Vetster, 2022]
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Odor</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yeast infections smell musty, sweet, or yeasty — like bread dough or cheese. Clearly abnormal but less sharp and rotten than bacterial ear infections. Kitty's ears affected by yeast have a recognizably sweet smell quite different from bacteria. [Source: Purina, 2022]
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Skin changes</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The skin lining the affected ear turns red and inflamed. In chronic ear infections from yeast, the skin of cat's ears may appear thickened, wrinkled, or leathery — a sign of long-standing yeast infections in cats. Reduce tissue swelling inside cat's ear with early treatment — chronic ear infections left untreated can permanently change texture. Recurring yeast infections often point to autoimmune diseases, allergies, or immune system diseases as the underlying cause. [Source: Merck Veterinary Manual, 2023]
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Itch level</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yeast ear infections in cats are extremely itchy for your feline friend — intense head shaking, frequent pawing at cat's ears, and face-rubbing on furniture. This can cause hair loss and sores around the ear from repeated scratching. [Source: Vetster, 2022]
                  </p>
                </div>
              </div>
              <figure className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={imgEarMiteKitten.src}
                  alt="Kitten's ear showing dark debris accumulation from ear mite infestation — similar visual appearance to yeast infection debris in cat's ears"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Kitten ear showing dark debris from ear mite infestation — visually similar to yeast infection debris in cat's ears</p>
                  <PhotoCredit author=".Anja." license="CC BY-SA 4.0" source="Wikimedia Commons" />
                </figcaption>
              </figure>
            </section>

            {/* Chapter 05 — Ear mites */}
            <section id="ear-mites" className="scroll-mt-24">
              <SectionLabel n="05" title="Ear Mites vs Ear Infection: Side-by-Side Pictures" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Is this cat ear mites or ear infections in cats? The two look remarkably similar from cat ear infection pictures — here's how to visually distinguish them in your cat's ears.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Bug className="w-4 h-4 text-stone-700" />
                    <span className="font-semibold text-sm">Cat Ear Mites (Otodectes cynotis)</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Debris:</strong> Dry, crumbly, black or very dark brown — like coffee grounds or fine black dirt shaken into cat's ears</li>
                    <li><strong>Texture:</strong> Dry and flaky — not wet or slimy</li>
                    <li><strong>Both ears:</strong> Cat ear mites commonly affect both cat's ears</li>
                    <li><strong>Odor:</strong> Little to no odor from cat ear mites themselves</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">[Source: VCA Hospitals, 2021; Merck Veterinary Manual, 2023]</p>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <FlaskConical className="w-4 h-4 text-red-700" />
                    <span className="font-semibold text-sm">Ear Infections in Cats</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Debris:</strong> Waxy, greasy, or wet ear discharge — brown, yellow, green, or black. Sticky and oily, coating the cat's ear canal walls</li>
                    <li><strong>Texture:</strong> Wet, slimy, or thick — not dry or granular</li>
                    <li><strong>Often one ear first:</strong> Ear infections may start in one affected ear</li>
                    <li><strong>Odor:</strong> Usually noticeable — musty for yeast, foul/rotten for bacterial infection</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">[Source: Merck Veterinary Manual, 2023; Catster, 2023]</p>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6 text-sm text-blue-900 leading-relaxed">
                <strong>Important overlap:</strong> Cat ear mites often trigger secondary bacterial or yeast ear infections in cats — so you may see both dry black crumbs AND wet ear discharge in your cat's ears. Ear canal thick fur in some breeds makes visual assessment of cat's ear infection harder. Only a vet using an otoscope and microscope can confirm the underlying cause.
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <figure className="rounded-2xl overflow-hidden border border-border">
                  <img
                    src={imgEarMiteInfection.src}
                    alt="Cat ear showing ear mite infestation with dark debris in the external ear canal"
                    className="w-full object-cover max-h-64"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 bg-muted/30">
                    <p className="text-sm font-medium">Cat ear mite infestation — dark debris in the external ear canal</p>
                    <PhotoCredit author="Uwe Gille" license="CC BY-SA 3.0" source="Wikimedia Commons" />
                  </figcaption>
                </figure>
                <figure className="rounded-2xl overflow-hidden border border-border">
                  <img
                    src={imgEarMiteMicroscope.src}
                    alt="Microscopic image of Otodectes cynotis (cat ear mites) — the parasites causing dark debris in cat's ears"
                    className="w-full object-cover max-h-64"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 bg-muted/30">
                    <p className="text-sm font-medium">Otodectes cynotis (cat ear mites) under microscope</p>
                    <PhotoCredit author="Caroldermoid" license="CC BY-SA 3.0" source="Wikimedia Commons" />
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* Chapter 06 — Discharge guide */}
            <section id="discharge" className="scroll-mt-24">
              <SectionLabel n="06" title="Ear Discharge Color Guide" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ear discharge in cat's ears can't confirm the exact underlying cause, but it gives strong clues about the type of ear infections in cats you're dealing with.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/40 border-b border-border">
                        <th className="text-left p-3 font-semibold">What you see</th>
                        <th className="text-left p-3 font-semibold">Visual description</th>
                        <th className="text-left p-3 font-semibold">Possible meaning</th>
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
              <p className="text-xs text-muted-foreground mt-2">[Source: VCA Hospitals, 2021; Merck Veterinary Manual, 2023; Purina, 2022]</p>
            </section>

            {/* Chapter 07 — Severity */}
            <section id="severity" className="scroll-mt-24">
              <SectionLabel n="07" title="Severity Stages: Mild to Severe" />
              <div className="space-y-4">
                {[
                  {
                    label: "Mild",
                    color: "bg-green-50 border-green-200",
                    headerColor: "text-green-800",
                    icon: ShieldCheck,
                    iconColor: "text-green-700",
                    points: [
                      "Cat's ears slightly more pink than the other ear — asymmetry is the key clue",
                      "Small amount of light brown or yellowish wax in cat's ear canal — thin coating",
                      "Occasional head shake or ear scratch; cat otherwise acting normally",
                      "Faint or no odor from cat's ears",
                      "Easiest stage for early treatment with prescribed ear drops after vet confirms underlying cause",
                    ],
                    source: "[Source: Hill's Pet Nutrition, 2020; VCA Hospitals, 2021]",
                  },
                  {
                    label: "Moderate",
                    color: "bg-amber-50 border-amber-200",
                    headerColor: "text-amber-800",
                    icon: AlertTriangle,
                    iconColor: "text-amber-700",
                    points: [
                      "Cat's ear canal clearly red; visible swelling — the opening looks smaller",
                      "Noticeable ear discharge in cat's ears: dark waxy clumps (yeast/mites) or yellow pus-like discharge (bacterial ear infections)",
                      "Frequent head shaking and scratching; cat flinches when cat's ears are touched",
                      "Mild to moderate odor — cat's ears smell clearly abnormal",
                      "Ear infections left untreated at this stage often worsen significantly within days",
                    ],
                    source: "[Source: VCA Hospitals, 2021; PetMD, 2021]",
                  },
                  {
                    label: "Severe — Vet Immediately",
                    color: "bg-red-50 border-red-300",
                    headerColor: "text-red-800",
                    icon: AlertTriangle,
                    iconColor: "text-red-700",
                    points: [
                      "Cat's ears bright red to purple, swollen, sometimes with raw ulcerated sores",
                      "Cat's ear canal opening almost closed by swollen tissue",
                      "Heavy ear discharge: thick dark wax, yellow/green pus, or bloody mixture",
                      "Constant head tilt or loss of balance — signs ear infections have reached middle ear or inner ear infections",
                      "Aural hematoma: soft fluid-filled balloon on ear flap from violent head shaking",
                      "Hearing loss may result from severe or chronic ear infections left untreated",
                    ],
                    source: "[Source: Merck Veterinary Manual, 2023; PetMD, 2021]",
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
            </section>

            {/* Chapter 08 — Causes */}
            <section id="causes" className="scroll-mt-24">
              <SectionLabel n="08" title="Causes and Risk Factors of Ear Infections in Cats" />
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Bug, title: "Cat ear mites", body: "Otodectes cynotis — a very common underlying cause, especially in young and outdoor cats. Cat ear mites trigger intense head shaking and the dark crumbly debris characteristic of ear mite infestations. [Source: VCA Hospitals, 2021]" },
                  { icon: FlaskConical, title: "Yeast (Malassezia)", body: "Yeast naturally present in cat's ears can overgrow when the ear environment changes — often secondary to allergies or moisture. One of the most common ear infections in cats. [Source: Merck Veterinary Manual, 2023]" },
                  { icon: Microscope, title: "Bacterial infection", body: "Staphylococcus, Pseudomonas, and other bacteria develop after inflammation or cat ear mites disrupt the normal ear environment. Bacterial ear infections in cats are often secondary infections. [Source: Merck Veterinary Manual, 2023]" },
                  { icon: ShieldCheck, title: "Allergies and immune system diseases", body: "Food or environmental allergies and autoimmune diseases are a leading underlying cause of chronic ear infections and recurring ear infections. Infected cats with a weak immune system or autoimmune diseases, allergies are more prone to chronic ear issues. [Source: Merck Veterinary Manual, 2023]" },
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
            </section>

            {/* Chapter 09 — Home treatment */}
            <section id="home-treatment" className="scroll-mt-24">
              <SectionLabel n="09" title="Home Treatment and Natural Options" />
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Any visible redness, ear discharge, or discomfort in cat's ears warrants a veterinary exam first. The eardrum may be damaged, and some products — including natural ones — can cause pain or worsen a damaged ear canal in infected cats with a ruptured eardrum. [Source: Merck Veterinary Manual, 2023]
                  </p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="p-5 border border-border rounded-2xl">
                  <p className="font-semibold text-sm mb-2 flex items-center gap-2"><Stethoscope className="w-4 h-4 text-primary" /> After vet diagnosis</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Vet-formulated ear cleansers:</strong> Fill cat's ear canal, gently massage the base (you'll hear a squishing sound), then let your cat shake and wipe only the outer ear with cotton. To clean your cat's ears properly, never insert swabs deep into the external ear canal. [Source: VCA Hospitals, 2021]</li>
                    <li><strong>Prescribed ear drops (ear drop form):</strong> Antibiotic, antifungal, or cat ear mite treatment drops — completing the full course is essential to avoid recurring ear infections and secondary infections. For infected cats with a damaged ear canal, your vet may also remove swollen tissue inside or near the canal (ear canal excessive growth). Injectable antibiotics may be needed for severe bacterial ear infections in cats.</li>
                  </ul>
                </div>
                <div className="p-5 border border-border rounded-2xl">
                  <p className="font-semibold text-sm mb-2 flex items-center gap-2"><FlaskConical className="w-4 h-4 text-primary" /> Natural options and their limits</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Apple cider vinegar (ACV):</strong> ACV can sting severely on inflamed tissue in painful ear infections and is not proven safe for cat's ear canal. Must be heavily diluted and stopped if cat shows discomfort. [Source: Merck Veterinary Manual, 2023]</li>
                    <li><strong>Coconut oil:</strong> Anecdotal support only — does not kill bacteria, yeast, or cat ear mites causing ear infections in cats.</li>
                    <li><strong>Commercial cat ear mite treatments:</strong> Confirm the underlying cause is cat ear mites with a vet before purchasing.</li>
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
                  Whether your cat's ears are dealing with ear mites, yeast infections, or bacterial ear infections, a proper ear cleanser formulated for cats helps remove debris, support the ear environment, and reduce recurring ear infections over time.
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

            {/* Chapter 10 — When to see a vet */}
            <section id="vet" className="scroll-mt-24">
              <SectionLabel n="10" title="When to See a Vet" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                See a vet rather than trying to treat ear infection at home if you notice these signs in your cat's ears:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <ul className="space-y-2">
                  {[
                    "Any green, bloody, or foul-smelling ear discharge from cat's ears",
                    "Severe redness or swelling that looks like a painful ear infection",
                    "Persistent head tilt or loss of balance — signs of middle ear infections or inner ear infections",
                    "Ear flap balloon (aural hematoma) from violent head shaking",
                    "Other symptoms lasting more than 2–3 days without improvement",
                    "Both cat's ears severely affected",
                    "A kitten or senior feline family member — less resilience to ear infections in cats",
                    "Any signs of significant pain (crying when cat's ears are touched, refusing to eat)",
                    "Facial paralysis — rare but a sign of serious nerve involvement in advanced ear infections",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-red-900">
                      <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                Chronic ear infections and recurring ear infections signal an unresolved underlying cause — usually autoimmune diseases, allergies, or a weak immune system — that needs investigation. Ear infections left untreated can progress to the middle ear and cause permanent hearing loss. Accurate diagnosis from a vet is the only way to break the cycle of ear infections in cats. [Source: Merck Veterinary Manual, 2023]
              </p>
            </section>

            {/* Chapter 11 — FAQ */}
            <section id="faq" className="scroll-mt-24">
              <SectionLabel n="11" title="Frequently Asked Questions" />
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

            {/* Chapter 12 — References */}
            <section id="references" className="scroll-mt-24">
              <SectionLabel n="12" title="References" />
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
                </ul>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
