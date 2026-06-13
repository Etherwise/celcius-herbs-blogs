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
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NATURAL_PAIN_RELIEF_FOR_DOGS_FAQS as FAQS } from "@/lib/blog/natural-pain-relief-for-dogs-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";

import hero from "@/assets/blog/natural-pain-relief-for-dogs-hero.webp";
import imgPainTypes from "@/assets/blog/natural-pain-relief-for-dogs-pain-types.webp";
import imgRemedies from "@/assets/blog/natural-pain-relief-for-dogs-remedies.webp";
import imgPhysicalTherapy from "@/assets/blog/natural-pain-relief-for-dogs-physical-therapy.webp";
import imgDosageChart from "@/assets/blog/natural-pain-relief-for-dogs-dosage-chart.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "pain-types", label: "Types of pain in dogs" },
  { id: "remedies", label: "10 natural pain relief options" },
  { id: "heat-cold", label: "Heat therapy and cold therapy" },
  { id: "physical-therapy", label: "Physical therapy and rehabilitation" },
  { id: "dosage", label: "Dosage chart by weight" },
  { id: "interactions", label: "Drug interaction table" },
  { id: "chews-vs-liquids", label: "Chews vs. liquids" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const REMEDIES = [
  {
    icon: Leaf,
    number: "01",
    title: "Turmeric / Curcumin",
    body: "Curcumin downregulates inflammatory cytokines including NF-κB and COX-2, providing anti inflammatory effects throughout the dog's body. A clinical study found 4 mg/kg twice daily reduced inflammation-related gene expression in dogs with osteoarthritis. Bioavailability is formulation-dependent — always look for products with piperine or a lipid carrier.",
    pubmed: "Colitti et al., BMC Veterinary Research, 2012",
    evidence: "Moderate for canine OA",
    caution: "Avoid with bleeding disorders, gallbladder disease, NSAIDs, anticoagulants, or steroids.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Boswellia Serrata",
    body: "Boswellic acids inhibit 5-LOX, blocking the leukotriene inflammatory pathway — complementary anti inflammatory effects to NSAIDs. Reichling et al. (2004) reported reduced arthritis pain and lameness in dogs with OA after 6 weeks. One of the most clinically studied herbal remedies for dog joint pain. Dose: 5–10 mg/lb body weight per day.",
    pubmed: "Reichling et al., Schweizer Archiv für Tierheilkunde, 2004",
    evidence: "Moderate for canine OA arthritis pain",
    caution: "Mild GI upset. Caution with NSAIDs, steroids, anticoagulants.",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Fish Oil (Omega-3 EPA + DHA)",
    body: "EPA and DHA interrupt pain signals from inflamed joint tissue by shifting inflammatory mediator production. Roush et al. (2010) showed significant improvement in force plate scores in dogs with OA — the gold standard objective measure of pain relief. Therapeutic dose: 50–100 mg combined EPA + DHA per kg body weight per day.",
    pubmed: "Roush et al., JAVMA, PMID 20394492, 2010",
    evidence: "Moderate–strong for canine OA",
    caution: "High doses increase bleeding time. Choose oxidation-protected products.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Glucosamine + Chondroitin",
    body: "Structural precursors that support cartilage matrix and promote joint health. Evidence is mixed in dogs — some show meaningful improvement, others do not. Product quality variation is a major factor. Best used as part of a multi-ingredient natural pain relief regimen. Glucosamine ~20–30 mg/kg/day; chondroitin ~15–20 mg/kg/day.",
    pubmed: "McCarthy et al., Veterinary Journal, PMID 17023183, 2007",
    evidence: "Weak–moderate — consistent use over 4–6 weeks needed",
    caution: "GI upset is the most common side effect.",
  },
  {
    icon: Leaf,
    number: "05",
    title: "Ginger",
    body: "Gingerols and shogaols inhibit prostaglandin synthesis, providing mild anti inflammatory properties. Stronger evidence for anti-nausea effects than direct analgesia. Useful for dogs with arthritis pain plus digestive sensitivity, and may help with anxiety-related discomfort. No standardized mg/kg canine pain dose exists — use small measured amounts.",
    pubmed: "Limited canine-specific data",
    evidence: "Weak for analgesia; moderate for GI support",
    caution: "Caution with anticoagulants and NSAIDs.",
  },
  {
    icon: AlertTriangle,
    number: "06",
    title: "Willow Bark — Use With Caution",
    body: "Contains salicylates (aspirin-like) with anti inflammatory properties. Dogs metabolize salicylates poorly — risk of GI ulceration, bleeding, and toxicity is real, especially alongside NSAIDs. This is the one natural remedy on this list where caution outweighs benefit for most dogs. Not a safe 'natural aspirin' substitute for canine pain control.",
    pubmed: "Papich, Saunders Handbook of Veterinary Drugs, 2016",
    evidence: "Weak — safety concerns outweigh evidence",
    caution: "Avoid with NSAIDs, anticoagulants, steroids, kidney/liver disease.",
  },
  {
    icon: Leaf,
    number: "07",
    title: "Devil's Claw (Harpagophytum)",
    body: "Harpagoside has anti inflammatory properties relevant to arthritis pain. A pilot study of a multi-herb formula (devil's claw + boswellia + turmeric + bromelain) showed improved veterinary-assessed pain scores in dogs with OA. Evidence is weak for devil's claw in isolation — more useful in multi-ingredient natural pain relief formulas.",
    pubmed: "Moreau et al., Vet Comp Orthop Traumatol, 2004",
    evidence: "Weak standalone; better in multi-ingredient formulas",
    caution: "GI disease, gallbladder issues, diabetes, bleeding risk, NSAIDs.",
  },
  {
    icon: FlaskConical,
    number: "08",
    title: "CBD / Cannabidiol",
    body: "Modulates pain via endocannabinoid signaling. Gamble et al. (2018) found CBD oil decreased pain in dogs with OA and improved owner-reported mobility scores. Weak-to-moderate evidence; significant product quality variation. May also help with anxiety-related discomfort in dogs with chronic pain.",
    pubmed: "Gamble et al., Frontiers in Veterinary Science, PMID 30050586, 2018",
    evidence: "Weak–moderate for canine pain",
    caution: "Liver enzyme changes in some dogs. Legal status varies by jurisdiction.",
  },
  {
    icon: Droplets,
    number: "09",
    title: "Omega-3 Enriched Therapeutic Diets",
    body: "Transitioning to a therapeutic diet with built-in omega-3 levels is often more effective than adding fish oil supplements to standard kibble — more consistent EPA + DHA delivery integrated with overall caloric intake. Diet is also where weight management begins: maintaining proper body weight is one of the highest-impact natural pain relief interventions for dogs with arthritis.",
    pubmed: "Roush et al., JAVMA, 2010",
    evidence: "Moderate–strong for therapeutic diet approach",
    caution: null,
  },
  {
    icon: PawPrint,
    number: "10",
    title: "Probiotics and Microbiome Support",
    body: "Gut microbiome health influences systemic inflammatory tone. Oral probiotics may reduce systemic inflammation driving arthritis pain, and can improve overall dog well being. Some dog owners report that probiotics reduce anxiety-related discomfort in dogs with chronic conditions. Best as a supporting element in a broader pain management plan.",
    pubmed: "Gut-immune axis research — limited canine-specific OA data",
    evidence: "Moderate for immune/gut health; weak for direct pain relief",
    caution: null,
  },
];

const DOSAGE_ROWS = [
  { supp: "Turmeric / Curcumin", d5: "11–23 mg", d10: "23–45 mg", d20: "45–91 mg", d40: "91–182 mg", d60: "136–272 mg", d80: "182+ mg" },
  { supp: "Fish Oil (EPA+DHA)", d5: "114–227 mg", d10: "227–455 mg", d20: "455–909 mg", d40: "909–1,818 mg", d60: "1,364–2,727 mg", d80: "1,818+ mg" },
  { supp: "Glucosamine", d5: "68–136 mg", d10: "136–273 mg", d20: "273–545 mg", d40: "545–1,091 mg", d60: "818–1,636 mg", d80: "1,091+ mg" },
  { supp: "Chondroitin", d5: "34–45 mg", d10: "68–91 mg", d20: "136–182 mg", d40: "273–364 mg", d60: "409–545 mg", d80: "545+ mg" },
  { supp: "Boswellia", d5: "23–45 mg", d10: "45–91 mg", d20: "91–182 mg", d40: "182–364 mg", d60: "273–545 mg", d80: "364+ mg" },
  { supp: "Ginger", d5: "Small amounts only", d10: "—", d20: "—", d40: "—", d60: "—", d80: "—" },
];

const INTERACTIONS = [
  { supp: "Turmeric/curcumin", nsaid: "⚠ Caution: GI + bleeding", anticoag: "⚠ Caution", steroid: "⚠ Caution", phenobarb: "⚠ Piperine affects metabolism", chemo: "✗ Oncology vet required" },
  { supp: "Boswellia", nsaid: "⚠ Caution", anticoag: "⚠ Caution", steroid: "⚠ Caution", phenobarb: "Low risk; review regimen", chemo: "✗ Vet approval required" },
  { supp: "Fish oil (high dose)", nsaid: "⚠ Caution: GI + bleeding", anticoag: "⚠ Caution: bleeding tendency", steroid: "Compatible; review regimen", phenobarb: "No major interaction", chemo: "Case-by-case; usually low risk" },
  { supp: "Glucosamine/chondroitin", nsaid: "✓ Generally low risk", anticoag: "✓ Usually low risk", steroid: "✓ Generally low risk", phenobarb: "No major interaction", chemo: "Low risk; confirm with vet" },
  { supp: "Willow bark", nsaid: "✗ Avoid", anticoag: "✗ Avoid", steroid: "✗ Avoid", phenobarb: "Not recommended", chemo: "✗ Avoid" },
  { supp: "Ginger", nsaid: "⚠ Caution", anticoag: "⚠ Caution", steroid: "Low risk", phenobarb: "No major interaction", chemo: "✗ Vet approval required" },
  { supp: "CBD", nsaid: "⚠ Caution: sedation/GI", anticoag: "⚠ Caution", steroid: "⚠ Caution", phenobarb: "⚠ Significant: metabolism", chemo: "✗ Oncology vet required" },
  { supp: "Devil's claw", nsaid: "⚠ Caution", anticoag: "⚠ Caution", steroid: "⚠ Caution", phenobarb: "Low risk; review regimen", chemo: "✗ Vet approval required" },
];

const REFERENCES = [
  "Colitti M et al. (2012). Transcriptome analysis of canine bone marrow-derived mesenchymal stem cells after curcumin treatment. BMC Veterinary Research. PMC indexed.",
  "Roush JK et al. (2010). Evaluation of the effects of dietary supplementation with fish oil omega-3 fatty acids on weight bearing in dogs with osteoarthritis. JAVMA, 236(1):67–73. PMID 20394492.",
  "Reichling J et al. (2004). Dietary support with Boswellia resin in canine inflammatory joint and spinal disease. Schweizer Archiv für Tierheilkunde, 146(2):71–79.",
  "Gamble LJ et al. (2018). Pharmacokinetics, safety, and clinical efficacy of cannabidiol treatment in osteoarthritic dogs. Frontiers in Veterinary Science, 5:165. PMID 30050586.",
  "Innes JF et al. (2022). Review of complementary and alternative therapies for canine chronic pain. Frontiers in Veterinary Science.",
  "McCarthy G et al. (2007). Randomised double-blind, positive-controlled trial to assess the efficacy of glucosamine/chondroitin sulfate for the treatment of dogs with osteoarthritis. Veterinary Journal, 174(1):54–61. PMID 17023183.",
  "Shoba G et al. (1998). Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers. Planta Medica, 64(4):353–356. PMID 9619120.",
  "Millis DL & Levine D (2014). Canine Rehabilitation and Physical Therapy, 2nd ed. Elsevier.",
  "Johnston SA & McLaughlin R (2010). Osteoarthritis: Anatomy, physiology, and pathobiology. Vet Clinics of North America Small Animal Practice.",
  "Papich MG (2016). Saunders Handbook of Veterinary Drugs, 4th ed.",
  "Moreau M et al. (2004). Effect of a herbal product on pain and cartilage degradation in canine osteoarthritis. Vet Comp Orthop Traumatol, 17(4):222–228.",
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

export default function NaturalPainReliefForDogsGuide() {
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
            Field Guide · Canine Pain Management
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
                <Stethoscope className="h-3.5 w-3.5" /> Canine Pain Management
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 12 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] text-ink-deep">
              Natural pain relief
              <br />
              <span className="italic text-accent">for dogs.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-deep/80 max-w-xl leading-relaxed">
              Stiff. Slow. Reluctant on the stairs. This guide covers 10
              evidence-graded natural pain relief options for dogs — with
              PubMed citations, a dosage chart by weight, a drug interaction
              table, and guidance on heat, cold, and physical therapy.
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
              <a href="https://celsiusherbs.com/products/joint-supplement-for-dogs">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-ink-deep/20"
                >
                  Joint Supplement for Dogs
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={hero}
                alt="Senior golden retriever walking comfortably on a trail — natural pain relief for dogs guide"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-deep/80 to-transparent">
                <p className="font-serif text-lg text-primary-foreground italic">
                  "Natural pain relief works best as part of a complete pain management plan."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="container py-16">
        <article className="space-y-20 max-w-3xl mx-auto">

          {/* Table of Contents */}
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
                Educational only — not a substitute for veterinary advice.
                Dogs with severe pain, acute injuries, or neurologic signs need
                a clinician before starting natural pain relief.
              </span>
            </div>
          </nav>

          {/* Intro */}
          <section className="scroll-mt-24">
            <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-ink-deep first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Natural pain relief for dogs is not about replacing veterinary
              care — it's about building a more complete dog's pain management
              plan that addresses inflammation, joint health, and well being
              from multiple angles.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              Many dog owners use natural remedies to support their dog's
              comfort alongside prescription pain medications — or as
              first-line support for mild chronic conditions like early OA and
              hip dysplasia. The supplements and therapies reviewed here have
              real pharmacological mechanisms; the question is which ones have
              the strongest canine evidence.
            </p>
          </section>

          {/* Chapter 01 — Pain Types */}
          <section id="pain-types" className="scroll-mt-24">
            <SectionLabel n="01" title="Types of Pain in Dogs" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgPainTypes}
                alt="Illustration of a dog showing joint and spine areas — types of pain in dogs"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                { label: "Acute pain", desc: "Injury, surgery, trauma, or acute infections. Resolves as tissue heals. Natural remedies complement prescribed care — they don't replace it for severe pain." },
                { label: "Chronic pain (OA)", desc: "Arthritis pain, hip dysplasia, spinal disc disease. Persistent and progressive — this is the primary territory for natural pain relief options." },
                { label: "Nociceptive pain", desc: "From activated pain receptors in damaged or inflamed tissue — most common type in dogs with joint disease." },
                { label: "Neuropathic pain", desc: "From nerve injury or disease — affects the dog's nervous system. Typically needs prescription pain medications alongside natural support." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-serif text-lg text-ink-deep mb-2">{item.label}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-secondary/40 border border-border p-5">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                Complete pain management plan
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                Natural pain relief works best as part of a multimodal approach:
                prescription pain medications (if needed) + herbal remedies +
                heat/cold therapy + physical therapy + maintaining proper body
                weight + alternative therapies (PEMF, acupuncture, traditional
                Chinese veterinary medicine). Dog's body weight and exercise
                tolerance directly affect how well any supplement works.{" "}
                <em>[Source: Johnston & McLaughlin, 2010]</em>
              </p>
            </div>
          </section>

          {/* Chapter 02 — Remedies */}
          <section id="remedies" className="scroll-mt-24">
            <SectionLabel n="02" title="10 Natural Pain Relief Options for Dogs" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgRemedies}
                alt="Flat-lay of natural remedies: turmeric, boswellia, fish oil capsules, ginger root, glucosamine"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-8">
              These natural pain relief options are graded by evidence strength.
              Managing chronic conditions like OA requires consistency — dog's
              pain level typically improves over weeks to months, not days.
              Review all herbal remedies with your vet before starting,
              especially in dogs on other medications.
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
                      <p className="text-xs text-muted-foreground italic mb-3">
                        {r.pubmed}
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

          {/* Chapter 03 — Heat / Cold */}
          <section id="heat-cold" className="scroll-mt-24">
            <SectionLabel n="03" title="Heat Therapy and Cold Therapy" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Heat therapy and cold therapy are among the most accessible
              natural pain relief methods for dogs — free, effective, and with
              no drug interactions. Many dog owners underuse both in their
              dog's pain management plan.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-xl text-ink-deep">Cold Therapy</h3>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed mb-3">
                  Decreases pain, reduces inflammation, and limits swelling
                  around sore muscles and inflamed joint tissue — especially
                  useful after exercise or acute injuries. Apply a cloth-wrapped
                  cold pack to the affected area of the dog's body for
                  10–15 minutes.
                </p>
                <ul className="space-y-1 text-xs text-foreground/70">
                  <li>• Use on hot, swollen joints after activity</li>
                  <li>• Most effective in first 48–72 hours after flare</li>
                  <li>• Helps alleviate pain and alleviate discomfort immediately</li>
                  <li>• Never apply ice directly to dog's skin</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-xl text-ink-deep">Heat Therapy</h3>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed mb-3">
                  Relaxes sore muscles, helps relieve tension, promotes
                  relaxation, and improves blood flow to stiff arthritic
                  tissue. Apply a warm compress for 15–20 minutes before
                  exercise or physical therapy sessions.
                </p>
                <ul className="space-y-1 text-xs text-foreground/70">
                  <li>• Use on stiff, non-swollen joints before activity</li>
                  <li>• Especially useful for dogs with overnight joint stiffness</li>
                  <li>• Never apply to hot, swollen, or acutely inflamed joints</li>
                  <li>• Switch to cold therapy first for any acute flare</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              [Source: Millis & Levine, Canine Rehabilitation and Physical Therapy, 2014]
            </p>
          </section>

          {/* Chapter 04 — Physical Therapy */}
          <section id="physical-therapy" className="scroll-mt-24">
            <SectionLabel n="04" title="Physical Therapy and Rehabilitation" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgPhysicalTherapy}
                alt="Veterinary professional doing range-of-motion exercises with a dog on a rehabilitation mat"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Physical therapy and rehabilitation therapy are evidence-based
              alternative therapies for dogs with OA, hip dysplasia,
              post-surgical recovery, and neurological conditions. Controlled
              movement maintains joint health, preserves range of motion, and
              improves blood flow to arthritic tissues — making it one of the
              most effective natural pain relief strategies for dogs with
              chronic joint pain.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: "Passive range-of-motion (PROM)", desc: "Gently moving the dog's limbs through their range of motion to relieve tension and maintain joint mobility. Can be done at home with guidance from a certified veterinary rehabilitation therapist." },
                { title: "Therapeutic exercise", desc: "Controlled leash walks, cavaletti poles, balance discs, and underwater treadmill — all support joint health and rebuild supporting musculature without excessive joint impact." },
                { title: "Massage", desc: "Soft tissue massage around sore muscles helps relieve tension, promote relaxation, and improve blood flow. Many dog owners find 5–10 minutes of gentle massage after exercise meaningfully helps dog's pain level." },
                { title: "Hydrotherapy", desc: "Underwater treadmill or pool swimming removes compressive gravity loads from arthritic joints while maintaining muscle engagement. Strong evidence base for canine OA rehabilitation therapy." },
                { title: "Pulsed Electromagnetic Field Therapy (PEMF)", desc: "An alternative therapy gaining veterinary use for arthritis pain — may improve blood flow and reduce pain in the dog's skin and joint tissues without drug interactions or side effects." },
                { title: "Traditional Chinese Veterinary Medicine (TCVM)", desc: "Acupuncture and TCVM herbal remedies are increasingly used in veterinary medicine to reduce pain, promote relaxation, support the nervous system, and improve blood flow in dogs with chronic pain." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-ink-deep mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              [Source: Millis & Levine, Canine Rehabilitation and Physical Therapy, 2014]
            </p>
          </section>

          {/* Chapter 05 — Dosage */}
          <section id="dosage" className="scroll-mt-24">
            <SectionLabel n="05" title="Dosage Chart by Weight" />
            <figure className="my-8 -mx-2 sm:mx-0">
              <img
                src={imgDosageChart}
                alt="Dog sitting beside natural supplement bottles — dosage chart for natural pain relief"
                className="w-full rounded-2xl shadow-md aspect-[3/2] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              These are reference starting doses based on the veterinary
              literature. Always start at the lower end — especially in small
              dogs, senior dogs, or dogs on prescription pain medications. Dog's
              body weight determines all doses — always calculate by actual
              current weight. Maintaining proper body weight alongside
              supplementation significantly improves outcomes.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border mb-4">
              <table className="w-full text-xs sm:text-sm">
                <thead className="bg-secondary/60 text-left">
                  <tr>
                    <th className="px-3 py-3 font-medium text-ink-deep">Supplement</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">5 lbs</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">10 lbs</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">20 lbs</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">40 lbs</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">60 lbs</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">80+ lbs</th>
                  </tr>
                </thead>
                <tbody>
                  {DOSAGE_ROWS.map((row, i) => (
                    <tr key={row.supp} className={i % 2 ? "bg-secondary/20" : "bg-card"}>
                      <td className="px-3 py-3 font-medium text-ink-deep">{row.supp}</td>
                      <td className="px-3 py-2 text-foreground/75">{row.d5}</td>
                      <td className="px-3 py-2 text-foreground/75">{row.d10}</td>
                      <td className="px-3 py-2 text-foreground/75">{row.d20}</td>
                      <td className="px-3 py-2 text-foreground/75">{row.d40}</td>
                      <td className="px-3 py-2 text-foreground/75">{row.d60}</td>
                      <td className="px-3 py-2 text-foreground/75">{row.d80}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic">
              All doses daily. Turmeric: 4 mg/kg twice daily [Colitti et al., 2012]. Fish oil supplements:
              50–100 mg/kg/day EPA+DHA [Roush et al., JAVMA, 2010]. Boswellia: 5–10 mg/lb/day [Innes et al., 2022].
              Discuss with your vet before starting.
            </p>
          </section>

          {/* Chapter 06 — Interactions */}
          <section id="interactions" className="scroll-mt-24">
            <SectionLabel n="06" title="Drug Interaction Table" />
            <p className="text-base leading-relaxed text-foreground/80 mb-6">
              Natural does not mean interaction-free. Review this table before
              adding any herbal remedy or supplement to a dog currently on
              prescription pain medications. A complete dog's pain management
              plan should always involve veterinary medicine when prescription
              pain control is part of the regimen.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border mb-4">
              <table className="w-full text-xs">
                <thead className="bg-secondary/60 text-left">
                  <tr>
                    <th className="px-3 py-3 font-medium text-ink-deep">Supplement</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">NSAIDs</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">Anticoagulants</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">Steroids</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">Phenobarbital</th>
                    <th className="px-3 py-3 font-medium text-ink-deep">Chemotherapy</th>
                  </tr>
                </thead>
                <tbody>
                  {INTERACTIONS.map((row, i) => (
                    <tr key={row.supp} className={i % 2 ? "bg-secondary/20" : "bg-card"}>
                      <td className="px-3 py-2.5 font-medium text-ink-deep">{row.supp}</td>
                      <td className="px-3 py-2.5 text-foreground/75">{row.nsaid}</td>
                      <td className="px-3 py-2.5 text-foreground/75">{row.anticoag}</td>
                      <td className="px-3 py-2.5 text-foreground/75">{row.steroid}</td>
                      <td className="px-3 py-2.5 text-foreground/75">{row.phenobarb}</td>
                      <td className="px-3 py-2.5 text-foreground/75">{row.chemo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic">
              Reference only — not a substitute for a veterinary drug interaction review.
            </p>
          </section>

          {/* Chapter 07 — Chews vs Liquids */}
          <section id="chews-vs-liquids" className="scroll-mt-24">
            <SectionLabel n="07" title="Chews vs. Liquids: What the Research Shows" />
            <div className="space-y-4">
              {[
                { title: "Formulation > format", desc: "For curcumin, bioavailability is determined by piperine or lipid carrier presence — not whether it's a chew or liquid. A well-formulated chew can outperform a poorly made liquid. Many dog owners assume liquid supplements are better absorbed, but this isn't true for most herbal remedies used in canine pain relief. [Source: Shoba et al., PMID 9619120, 1998]" },
                { title: "Liquids offer dose flexibility", desc: "For weight-based dosing across a range of dog sizes, liquids allow more precise titration — especially for fish oil supplements and curcumin, where the therapeutic dose changes significantly between a 10-lb and a 60-lb dog." },
                { title: "Chews win on compliance", desc: "For long-term natural pain relief — where consistent daily dosing over months determines outcomes — palatability is critical. Most dogs accept soft chews without issue; some will detect and reject a liquid supplement mixed into food." },
                { title: "Avoid alcohol-based tinctures", desc: "Check that any canine tincture is alcohol-free or uses veterinary-safe alcohol levels. Human-formulated herbal medications with alcohol should not be used in dogs." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-ink-deep mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
            <SectionLabel n="09" title="References" />
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
              Designed for daily comfort support
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Natural pain relief, delivered in every drop.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
              Chronic pain in dogs responds best to a multi-modal approach.
              PetGlow Drops are formulated with therapeutic-level herbal
              extracts — easy to add to food or deliver directly — designed
              to support your dog's comfort and mobility as part of a complete
              natural pain management plan.
            </p>
            <a href="https://celsiusherbs.com/products/natural-dog-ear-cleanser-infection">
              <Button
                size="lg"
                className="rounded-full bg-primary-foreground text-ink-deep hover:bg-primary-foreground/90"
              >
                Explore PetGlow Drops →
              </Button>
            </a>
          </section>

            {/* More articles */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">More articles</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {BLOG_ARTICLES.filter((a) => a.href !== "/natural-pain-relief-for-dogs").map((a) => (
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
  );
}
