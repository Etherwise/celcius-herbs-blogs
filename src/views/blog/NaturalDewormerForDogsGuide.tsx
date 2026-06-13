import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Bug,
  CheckCircle,
  FlaskConical,
  Leaf,
  PawPrint,
  ShieldCheck,
  Thermometer,
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
import { NATURAL_DEWORMER_FOR_DOGS_FAQS as FAQS } from "@/lib/blog/natural-dewormer-for-dogs-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";

import imgHero from "@/assets/blog/natural-dewormer-for-dogs-hero.webp";
import imgWormTypes from "@/assets/blog/natural-dewormer-for-dogs-worm-types.webp";
import imgNaturalRemedies from "@/assets/blog/natural-dewormer-for-dogs-natural-remedies.webp";
import imgVetExam from "@/assets/blog/natural-dewormer-for-dogs-vet-exam.webp";
import imgAyurvedicHerbs from "@/assets/blog/natural-dewormer-for-dogs-ayurvedic-herbs.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "worm-types", label: "6 types of worms" },
  { id: "fecal-test", label: "Fecal test first ⚠️" },
  { id: "natural-remedies", label: "7 natural remedies" },
  { id: "pumpkin-seeds", label: "Pumpkin seed dosage" },
  { id: "evidence-ratings", label: "Evidence ratings" },
  { id: "ayurvedic", label: "Ayurvedic herbs" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const EVIDENCE_ROWS = [
  { remedy: "Pumpkin seeds", grade: "Weak–moderate", safe: "yes", notes: "Best food-based option; safe in dog's diet" },
  { remedy: "Papaya seeds", grade: "Weak", safe: "yes", notes: "Small amounts; avoid unripe latex" },
  { remedy: "Carrots", grade: "Anecdotal", safe: "yes", notes: "Fiber supports dog's digestive tract" },
  { remedy: "Coconut oil", grade: "Weak/anecdotal", safe: "caution", notes: "Low doses only; pancreatitis risk" },
  { remedy: "Wormwood", grade: "Weak", safe: "caution", notes: "Narrow safety margin; vet guidance essential" },
  { remedy: "Garlic", grade: "Very low / insufficient", safe: "no", notes: "ASPCA toxic list; Heinz body anemia" },
  { remedy: "Food-grade DE", grade: "Anecdotal (internal)", safe: "yes", notes: "External parasites confirmed; internal unproven" },
  { remedy: "Apple cider vinegar", grade: "None", safe: "caution", notes: "GI irritant; no deworming evidence" },
  { remedy: "Neem", grade: "Moderate (livestock/lab)", safe: "caution", notes: "Best for ectoparasites; oral use unestablished" },
  { remedy: "Vidanga (embelin)", grade: "Weak (rodent)", safe: "caution", notes: "Ayurvedic; promising in vitro only" },
];

const REFERENCES = [
  "MSD Veterinary Manual. (2020). Gastrointestinal Parasites of Dogs. msdvetmanual.com",
  "VCA Animal Hospitals. (2022). Tapeworm Infection in Dogs. vcahospitals.com",
  "Companion Animal Parasite Council (CAPC). (2022). Guidelines for Parasite Control in Dogs. capcvet.org",
  "IDEXX / CAPC. (2021). Companion Animal Parasite Summary. idexx.com",
  "American Heartworm Society. (2020). Current Canine Guidelines. heartwormsociety.org",
  "Atlas Pet Hospital. (2023). Natural Dewormer for Dogs. atlaspethospital.com",
  "PetMD Editorial. (2021–2022). Dog Worms: Symptoms, Types, and Treatments. petmd.com",
  "Veterinary Evidence. (2016). A critical appraisal of garlic as a wormer for dogs and cats. veterinaryevidence.org",
  "Pubvet Review. (2019). Garlic toxicity in dogs and antiparasitic claims. pubvet.com.br",
  "ASPCA Animal Poison Control Center. (2024). Toxic and Non-Toxic Plants — Allium species. aspca.org",
  "Journal of Stored Products Research. (2020). Diatomaceous earth as an insecticidal powder.",
  "Phytomedicine. (2016). Azadirachtin and limonoids from Azadirachta indica.",
  "Journal of Ethnopharmacology. (2020). Immunomodulatory effects of Azadirachta indica.",
  "Veterinary Parasitology. (2018). Neem extracts against gastrointestinal nematodes in small ruminants.",
  "Journal of Ethnopharmacology. (2013). Embelin from Embelia ribes: pharmacological properties.",
  "Pharmacognosy Reviews. (2016). Embelia ribes as an anthelmintic in rodent models.",
  "International Journal of Pharmacy and Pharmaceutical Sciences. (2012). Anthelmintic activity of Embelia ribes.",
  "Ancient Science of Life. (2010). Anthelmintic evaluation of embelin.",
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

function EvidenceBadge({ grade }: { grade: string }) {
  const isStrong = grade.toLowerCase().startsWith("strong");
  const isMod = grade.toLowerCase().includes("moderate");
  const isWeak = grade.toLowerCase().startsWith("weak") || grade.toLowerCase().includes("anecdotal");
  const isNone = grade.toLowerCase() === "none" || grade.toLowerCase().includes("insufficient") || grade.toLowerCase().includes("very low");
  const color = isStrong
    ? "bg-green-100 text-green-800"
    : isMod
    ? "bg-blue-100 text-blue-800"
    : isWeak
    ? "bg-amber-100 text-amber-800"
    : "bg-red-100 text-red-800";
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
      {grade}
    </span>
  );
}

export default function NaturalDewormerForDogsGuide() {
  const [activeSection, setActiveSection] = useState("worm-types");
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
      {/* Reading progress */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-primary z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Hero */}
      <div className="bg-ink-deep text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-primary-foreground/70 mb-6">
              <Leaf className="w-3.5 h-3.5" /> Natural Remedies · Dog Health
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Natural Dewormer for Dogs: 7 Remedies Rated
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Pumpkin seeds, diatomaceous earth, wormwood — evidence ratings for
              every popular natural dewormer for dogs, garlic's real safety risk,
              and two Ayurvedic herbs with published NIH research.
            </p>
            <figure className="rounded-2xl overflow-hidden mb-8">
              <img
                src={imgHero}
                alt="Golden retriever dog sitting in sunny garden — natural dewormer for dogs guide"
                className="w-full object-cover max-h-80"
                loading="eager"
              />
            </figure>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Bug, label: "4 worm types explained" },
                { icon: FlaskConical, label: "Evidence ratings" },
                { icon: Leaf, label: "Ayurvedic + NIH research" },
                { icon: ShieldCheck, label: "Garlic safety warning" },
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

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900 leading-relaxed space-y-2">
                  <p>
                    <strong>Get a fecal test before any treatment.</strong> Different worms respond to different drugs. Treating without knowing the worm type — natural or conventional — risks missing the actual infection. This guide is educational; it does not replace a veterinary diagnosis.
                  </p>
                  <p>
                    <strong>Heartworm exception:</strong> No natural remedy works against heartworm. If heartworm is a concern, speak to your vet about approved prevention.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 01 — Worm Types */}
            <section id="worm-types" className="scroll-mt-24">
              <SectionLabel n="01" title="6 Types of Dog Worms" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Understanding worms in dogs by type is the essential first step. Using a natural dewormer for dogs that works against one worm type does nothing against another. Small dogs, medium dogs, and giant dogs are all at risk — the worm types are the same across breeds.
              </p>
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgWormTypes}
                  alt="Four types of dog intestinal worms — roundworm, hookworm, tapeworm, whipworm educational diagram"
                  className="w-full object-contain"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">The four main intestinal worms in dogs — each requires different treatment</p>
                </figcaption>
              </figure>
              <div className="space-y-4">
                {[
                  {
                    icon: Bug,
                    title: "Roundworms (Toxocara canis)",
                    body: "The most common worm in dogs. Puppies acquire them from their mother before birth or via nursing milk. Adult dogs pick them up from contaminated soil or prey. Adult worms look like spaghetti — white, 3–5 inches long — and may appear in vomit or stool. Heavy infections cause pot belly, poor growth, and dull coat. Roundworm eggs also pose zoonotic risk to humans. [Source: MSD Veterinary Manual, 2020]",
                    color: "bg-red-50 border-red-100",
                    iconColor: "text-red-600",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Hookworms (Ancylostoma spp.) — most dangerous",
                    body: "Blood feeders that attach to the intestinal wall — invisible in stool. Cause dark tarry stool, bloody diarrhea, pale gums, and severe anemia. A heavy worm infestation in young puppies can be fatal within days. Larvae also penetrate bare human skin. This worm type requires conventional treatment — no natural dewormer for dogs has evidence against hookworms. [Source: MSD Veterinary Manual, 2020]",
                    color: "bg-orange-50 border-orange-100",
                    iconColor: "text-orange-600",
                  },
                  {
                    icon: PawPrint,
                    title: "Tapeworms (Dipylidium caninum)",
                    body: "Transmitted when a dog swallows an infected flea during grooming. The first sign is usually rice-grain-sized white segments stuck near the anus or in fresh stool — segments may move when fresh. Standard fecal floats frequently miss tapeworms; visual identification is often required. Treating tapeworms also requires addressing the flea problem. [Source: VCA Hospitals, 2022]",
                    color: "bg-amber-50 border-amber-100",
                    iconColor: "text-amber-600",
                  },
                  {
                    icon: Thermometer,
                    title: "Whipworms (Trichuris vulpis)",
                    body: "Live in the cecum and large intestine. Dogs are infected by swallowing embryonated eggs from contaminated soil — eggs survive in soil for months to years. Signs include chronic large-bowel diarrhea, mucus in stool, fresh blood, and weight loss. Egg shedding is intermittent, so a single fecal test can miss them. No natural dewormer has any meaningful evidence against whipworms. [Source: MSD Veterinary Manual, 2020]",
                    color: "bg-blue-50 border-blue-100",
                    iconColor: "text-blue-600",
                  },
                  {
                    icon: XCircle,
                    title: "Heartworm — natural remedies do not apply",
                    body: "Transmitted by mosquitoes, not by ingestion. Adult worms live in the pulmonary arteries and heart. No natural remedy — not pumpkin seeds, not wormwood, not food grade diatomaceous earth — has been proven safe or effective against heartworm. The American Heartworm Society states that unproven treatments instead of standard therapy can be fatal. [Source: American Heartworm Society, 2020]",
                    color: "bg-red-50 border-red-200",
                    iconColor: "text-red-700",
                  },
                  {
                    icon: Zap,
                    title: "Giardia & Coccidia (protozoal)",
                    body: "Not worms, but grouped with intestinal parasites. Cause persistent watery diarrhea. Require prescription antiprotozoals — natural dewormer foods and herbal remedies do not address these. [Source: MSD Veterinary Manual, 2020]",
                    color: "bg-muted/40 border-border",
                    iconColor: "text-muted-foreground",
                  },
                ].map(({ icon: Icon, title, body, color, iconColor }) => (
                  <div key={title} className={`rounded-2xl border p-5 ${color}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-4 h-4 ${iconColor}`} />
                      <span className="font-semibold text-sm">{title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Chapter 02 — Fecal Test */}
            <section id="fecal-test" className="scroll-mt-24">
              <SectionLabel n="02" title="Get a Fecal Test First ⚠️" />
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Every worm type responds to a different drug. Giving the wrong dewormer for dogs — natural or prescription — allows the real infection to continue, while adding unnecessary risk to the dog's body. A fecal test is the only way to confirm which parasite you're treating. Dog owners who skip the test often end up treating the wrong worm for weeks.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "Centrifugal fecal flotation", body: "The standard test. Concentrates eggs from stool. More sensitive than simple flotation. Recommended by CAPC for routine monitoring. [Source: CAPC, 2022]" },
                  { title: "Fecal antigen tests", body: "Detect parasite proteins when eggs aren't being shed — useful for early infections or low-burden worm infestations in the dog's digestive tract. [Source: CAPC, 2022]" },
                  { title: "PCR testing", body: "DNA-based; highest sensitivity. Often used when standard float is negative but worm infestation is still suspected. [Source: IDEXX CAPC, 2021]" },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-muted/40 rounded-2xl p-4">
                    <p className="font-semibold text-sm mb-2">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900 leading-relaxed">
                <strong>Cost (US):</strong> A standard fecal float runs $25–$45. Antigen or PCR panels add $40–$80. Rescue dogs and dogs that frequent dog parks should be tested twice yearly. A holistic vet can help pet owners integrate natural worm prevention into a regular monitoring schedule. [Source: PetMD, 2021; CAPC, 2022]
              </div>
            </section>

            {/* Chapter 03 — Natural Remedies */}
            <section id="natural-remedies" className="scroll-mt-24">
              <SectionLabel n="03" title="7 Natural Deworming Foods and Herbal Remedies" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                These are the 7 most commonly recommended natural worm treatments for dogs, plus apple cider vinegar. Each is rated on published evidence — mechanism, real-world efficacy in a dog's body, safety, and dosage from integrative sources.
              </p>
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgNaturalRemedies}
                  alt="Natural dewormer foods for dogs — pumpkin seeds, papaya, coconut oil, garlic and herbs on wooden board"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Common natural dewormer foods — safety and evidence vary significantly</p>
                </figcaption>
              </figure>
              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: "Pumpkin Seeds (cucurbitin)",
                    grade: "Weak–moderate",
                    safe: true,
                    body: "Cucurbitin can paralyze certain intestinal worms in a dog's intestines in vitro. In vitro and livestock studies show activity against tapeworms and some nematodes; no clinical trials in dogs. Raw, unsalted pumpkin seeds are safe in moderate amounts as part of a dog's diet. Dosage (integrative): ¼ tsp ground raw seeds per 10 lb body weight once daily mixed into dog's food or dog's meals. Works best as an anti-worm food supplement alongside a vet protocol. [Source: Atlas Pet Hospital, 2023]",
                  },
                  {
                    num: "2",
                    title: "Papaya (papain enzyme)",
                    grade: "Weak",
                    safe: true,
                    body: "Papain can damage the cuticle of certain intestinal worms. Livestock and rodent data exist; no dog-specific trials. Ripe papaya flesh is safe; seeds and unripe latex can irritate the dog's digestive tract. Adding grated fruits like papaya alongside carrots in dog's meals combines multiple mild supportive mechanisms. Dosage (anecdotal): ground papaya seeds at 1 tsp per 10 lb mixed into dog's food. [Source: WagWalking, 2023]",
                  },
                  {
                    num: "3",
                    title: "Carrots (mechanical scraping)",
                    grade: "Anecdotal",
                    safe: true,
                    body: "Coarsely grated fruits and vegetables like carrots may physically dislodge worms from the dog's intestines. Fiber and vitamin A support the dog's immune system and digestive health. No clinical trials confirm efficacy as a dewormer for dogs. Safe as a low-calorie treat in a dog's healthy diet. Dosage (anecdotal): 1 tsp grated carrot per 10 lb twice daily in dog's meals. [Source: Atlas Pet Hospital, 2023; VCA Hospitals, 2020]",
                  },
                  {
                    num: "4",
                    title: "Coconut Oil (lauric acid)",
                    grade: "Weak/anecdotal",
                    safe: null,
                    body: "Medium-chain fatty acids show antimicrobial activity in vitro; no controlled trials show effective deworming in dogs naturally. Calorie-dense — risk of pancreatitis at higher doses; introduce slowly. Dosage (integrative): ¼ tsp per 10 lb per day added to dog's food. Not a standalone natural dewormer for dogs. [Source: PetMD, 2020; Atlas Pet Hospital, 2023]",
                  },
                  {
                    num: "5",
                    title: "Wormwood (Artemisia absinthium)",
                    grade: "Weak",
                    safe: null,
                    body: "Thujone and sesquiterpene lactones have neurotoxic effects on parasites in vitro and in non-canine species. Rigorous safety data in dogs are limited. Thujone is a known neurotoxin — excessive dosing can cause seizures and kidney damage in a dog's body. Do not use without guidance from a holistic vet experienced in herbal remedies. [Source: MSD Veterinary Manual, 2020; Atlas Pet Hospital, 2023]",
                  },
                  {
                    num: "6",
                    title: "Garlic ⚠️ — DO NOT USE",
                    grade: "Very low / insufficient",
                    safe: false,
                    body: "Garlic contains organosulfur compounds with antiparasitic activity in vitro, including inhibition of hookworm larval development in lab studies. However: a structured evidence review concluded 'garlic has not been demonstrated to be an effective anthelmintic for use in dogs.' More critically, garlic causes Heinz body hemolytic anemia via N-propyl disulfide, which destroys red blood cells. Dogs given 1.25 mL/kg garlic extract daily for 7 days developed anemia. The ASPCA lists garlic as toxic to dogs. There is no dose of chopped raw organic garlic that is both safe and effective as a natural dewormer for dogs. [Source: Veterinary Evidence, 2016; Pubvet Review, 2019; ASPCA, 2024]",
                  },
                  {
                    num: "7",
                    title: "Food Grade Diatomaceous Earth (DE)",
                    grade: "Anecdotal (internal worms)",
                    safe: true,
                    body: "Food grade diatomaceous earth physically abrades external parasites' exoskeletons (fleas, mites) — this mechanism is well documented. For internal worms in a dog's digestive tract, the proposed gut-scraping mechanism is theoretical. No peer-reviewed trials confirm oral food grade diatomaceous earth clears roundworms, hookworms, whipworms, or tapeworms in dogs. Safe when ingested; respiratory irritant if inhaled — use a mask. Dosage (integrative): ½–1 tsp per 10 lb body weight mixed into dog's food. [Source: Atlas Pet Hospital, 2022]",
                  },
                ].map(({ num, title, grade, safe, body }) => (
                  <div key={title} className="border border-border rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-muted-foreground bg-muted rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                          {num}
                        </span>
                        <span className="font-semibold text-sm">{title}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <EvidenceBadge grade={grade} />
                        {safe === true && <CheckCircle className="w-4 h-4 text-green-600" />}
                        {safe === false && <XCircle className="w-4 h-4 text-red-600" />}
                        {safe === null && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-muted/30 border border-border rounded-2xl p-5 text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Apple cider vinegar:</strong> Often promoted as a natural treatment that creates a more alkaline digestive system inhospitable to worms. There is no credible published evidence supporting apple cider vinegar or pure aloe juice as a natural dewormer for dogs. Apple cider vinegar can worsen GI irritation in dogs with sensitive digestive systems. [Source: Atlas Pet Hospital, 2023]
              </div>
            </section>

            {/* Chapter 04 — Pumpkin Seed Dosage */}
            <section id="pumpkin-seeds" className="scroll-mt-24">
              <SectionLabel n="04" title="Pumpkin Seeds: How Many to Give" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pumpkin seeds are the single natural dewormer food with the best safety profile and most plausible mechanism. Use raw, unsalted seeds only — roasting degrades cucurbitin. Grind fresh before mixing into dog's meals; pre-ground seeds go rancid quickly.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border mb-6">
                <div className="bg-muted/40 px-5 py-3">
                  <span className="font-semibold text-sm">Pumpkin Seed Dosage Guide (integrative, not FDA-validated)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-muted-foreground">Dog size</th>
                        <th className="text-left p-3 font-semibold text-muted-foreground">Ground seeds per dose</th>
                        <th className="text-left p-3 font-semibold text-muted-foreground">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: "Small dogs (under 10 lb)", dose: "⅛ tsp", freq: "Once daily" },
                        { size: "Small–medium dogs (10–20 lb)", dose: "¼ tsp", freq: "Once daily" },
                        { size: "Medium dogs (20–40 lb)", dose: "½ tsp", freq: "Once daily" },
                        { size: "Large dogs (40–70 lb)", dose: "¾ tsp", freq: "Once daily" },
                        { size: "Giant dogs (70 lb+)", dose: "1 tsp", freq: "Once daily (split if needed)" },
                      ].map((row, i) => (
                        <tr key={row.size} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                          <td className="p-3 font-medium">{row.size}</td>
                          <td className="p-3 text-muted-foreground">{row.dose}</td>
                          <td className="p-3 text-muted-foreground">{row.freq}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-amber-900 leading-relaxed">
                <strong>For pregnant dogs and lactating dogs:</strong> Pumpkin seeds appear safe in food amounts for pregnant or lactating dogs, but safety trials in pregnant dogs or lactating dogs specifically are absent. Consult a holistic vet before any natural worm treatment for pregnant dogs. Roundworms in pregnant or lactating dogs transfer directly to puppies — conventional prescription dewormers are the only option with established safety for pregnant dogs. [Source: Atlas Pet Hospital, 2023; CAPC, 2022]
              </div>
            </section>

            {/* Chapter 05 — Evidence Ratings */}
            <section id="evidence-ratings" className="scroll-mt-24">
              <SectionLabel n="05" title="Best Natural Dog Dewormer Evidence Ratings" />
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgVetExam}
                  alt="Veterinarian examining a dog — professional diagnosis is essential before any natural dewormer for dogs"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Vet diagnosis first — confirms worm type and rules out other causes</p>
                </figcaption>
              </figure>
              <div className="rounded-2xl overflow-hidden border border-border mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/40 border-b border-border">
                        <th className="text-left p-3 font-semibold">Remedy</th>
                        <th className="text-left p-3 font-semibold">Evidence (dogs)</th>
                        <th className="text-left p-3 font-semibold">Safe?</th>
                        <th className="text-left p-3 font-semibold hidden md:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {EVIDENCE_ROWS.map((row, i) => (
                        <tr key={row.remedy} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-muted/20" : ""}`}>
                          <td className="p-3 font-medium">{row.remedy}</td>
                          <td className="p-3"><EvidenceBadge grade={row.grade} /></td>
                          <td className="p-3">
                            {row.safe === "yes" && <span className="text-green-700 text-xs font-medium">✓ Yes</span>}
                            {row.safe === "no" && <span className="text-red-700 text-xs font-medium">✗ Toxic</span>}
                            {row.safe === "caution" && <span className="text-amber-700 text-xs font-medium">⚠ Caution</span>}
                          </td>
                          <td className="p-3 text-muted-foreground hidden md:table-cell">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Natural worm treatments vary enormously in safety and evidence quality. Even the best natural dewormer for dogs — pumpkin seeds — has no controlled clinical trial confirming it eliminates worms in a dog's body. A strong immune system can suppress parasite loads, but cannot clear an established worm infestation. Use natural worm treatments as supportive anti-worm food supplements, not as replacements for conventional treatment when worms are confirmed. [Source: CAPC, 2022]
              </p>
            </section>

            {/* Chapter 06 — Ayurvedic */}
            <section id="ayurvedic" className="scroll-mt-24">
              <SectionLabel n="06" title="Ayurvedic Herbs with NIH Research" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Two Ayurvedic herbal remedies have published antiparasitic research indexed on PubMed/NIH — putting them ahead of most natural dewormer foods in terms of documented scientific evidence.
              </p>
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgAyurvedicHerbs}
                  alt="Neem leaves and Embelia ribes berries — Ayurvedic herbal remedies with NIH antiparasitic research"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Neem (Azadirachta indica) and Vidanga (Embelia ribes) — traditional Ayurvedic herbal dewormers</p>
                </figcaption>
              </figure>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf className="w-4 h-4 text-primary" />
                    <span className="font-semibold">Neem (Azadirachta indica)</span>
                    <EvidenceBadge grade="Moderate (livestock)" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>Active compound:</strong> Azadirachtin, a limonoid that disrupts parasite feeding and growth via hormonal interference. Also modulates the dog's immune system. [Source: Phytomedicine, 2016; Journal of Ethnopharmacology, 2020]
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>NIH/PubMed research:</strong> Neem leaf and seed extracts significantly reduced egg hatching and larval development of gastrointestinal nematodes in goats and sheep (in vitro and in vivo). Neem oil-based products reduced tick counts in livestock. [Source: Veterinary Parasitology, 2018; Parasitology Research, 2015]
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Dog-specific evidence:</strong> Limited. Topical neem shampoos show tick and flea reduction in small clinical reports. No RCTs for internal helminths in dogs. Oral use safety in dogs not established — high-dose extracts have caused liver and kidney toxicity in animal models. [Source: Human & Experimental Toxicology, 2012]
                  </p>
                </div>
                <div className="border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf className="w-4 h-4 text-primary" />
                    <span className="font-semibold">Vidanga / Embelia ribes</span>
                    <EvidenceBadge grade="Weak (rodent)" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>Active compound:</strong> Embelin, a benzoquinone. A traditional Ayurvedic vermifuge herbal remedy used for centuries. [Source: Journal of Ethnopharmacology, 2013]
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>Mechanism:</strong> Proposed to uncouple oxidative phosphorylation in helminths, disrupting energy metabolism in a parasite's digestive system and producing neuromuscular paralysis. [Source: Pharmacognosy Reviews, 2016]
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>NIH/PubMed research:</strong> In vitro study demonstrated vermifuge activity against Pheretima posthuma models comparable to standard anthelmintics. Rodent models showed reduced worm counts and egg output. PubMed-indexed anthelmintic evaluation confirmed reduced worm motility and survival. No dog-specific trials identified. [Source: IJPPS, 2012; Pharmacognosy Reviews, 2016; Ancient Science of Life, 2010]
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                Herbal gut support
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                Support your dog's digestive health year-round.
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
                A proper deworming protocol starts with knowing what you're treating. While your vet handles the diagnosis and prescription, PetGlow Drops can support your dog's digestive system and immune system as part of a daily wellness routine — before, during, and after deworming.
              </p>
              <a href="https://celsiusherbs.com/products/petglow-drops">
                <Button
                  size="lg"
                  className="rounded-full bg-primary-foreground text-ink-deep hover:bg-primary-foreground/90"
                >
                  Explore PetGlow Drops for Dogs →
                </Button>
              </a>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <SectionLabel n="07" title="Frequently Asked Questions" />
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
              <SectionLabel n="08" title="References" />
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
                {BLOG_ARTICLES.filter((a) => a.href !== "/natural-dewormer-for-dogs").map((a) => (
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
