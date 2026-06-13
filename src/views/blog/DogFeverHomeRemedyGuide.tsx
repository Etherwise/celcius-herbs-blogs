import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  Droplet,
  FlaskConical,
  Leaf,
  PawPrint,
  ShieldCheck,
  Thermometer,
  Wind,
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
import { DOG_FEVER_HOME_REMEDY_FAQS as FAQS } from "@/lib/blog/dog-fever-home-remedy-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";
import { BLOG_ARTICLES } from "@/lib/blog/recent-articles";
import { LiteYouTube } from "@/components/LiteYouTube";

import imgHero from "@/assets/blog/dog-fever-home-remedy-hero.webp";
import imgTemperature from "@/assets/blog/dog-fever-home-remedy-temperature.webp";
import imgCoolingMethods from "@/assets/blog/dog-fever-home-remedy-cooling-methods.webp";
import imgEmergency from "@/assets/blog/dog-fever-home-remedy-emergency.webp";
import imgMedications from "@/assets/blog/dog-fever-home-remedy-medications.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "normal-temp", label: "Normal dog temperature" },
  { id: "how-to-measure", label: "How to take dog's temp" },
  { id: "symptoms-causes", label: "Symptoms & causes" },
  { id: "home-remedies", label: "5 home remedies" },
  { id: "emergency-line", label: "104°F emergency line ⚠️" },
  { id: "toxic-meds", label: "Toxic human medications" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const TEMP_TABLE = [
  { temp: "101–102.5°F", category: "Normal", action: "Monitor if your dog seems off, but no fever present", color: "bg-green-50 text-green-900" },
  { temp: "102.6–103.0°F", category: "Possible low-grade fever", action: "Recheck in 1–2 hours; monitor dog closely", color: "bg-yellow-50 text-yellow-900" },
  { temp: "103.1–103.9°F", category: "Mild to moderate fever", action: "Call your vet; gentle home cooling appropriate if dog is stable", color: "bg-amber-50 text-amber-900" },
  { temp: "≥104.0°F", category: "High fever — urgent", action: "Home remedy is not enough; seek vet care promptly", color: "bg-orange-50 text-orange-900" },
  { temp: "≥105.0°F", category: "Emergency", action: "Possibly fatal complications; go to vet immediately", color: "bg-red-50 text-red-900" },
];

const COOLING_METHODS = [
  {
    icon: Droplet,
    title: "Cool damp cloths on paws, armpits, and groin",
    body: "Apply a soaked towel or cloth in cool (not ice-cold) water to the paws, armpits, and inner thighs. These areas have blood vessels close to the skin surface with minimal fur. Re-wet frequently; stop and monitor dog closely once the dog's temperature drops back under 103°F to avoid over-cooling. A pet parent can manage this alone, though a second person to assist makes it easier. [Source: LakeCross Veterinary Hospital, 2023; PetMD, 2023]",
    safe: true,
  },
  {
    icon: Wind,
    title: "Fan",
    body: "A gentle fan near your dog supports evaporative cooling, especially when combined with damp cloths on the dog's skin. Avoid a strong fan with soaked fur — this can cause peripheral vasoconstriction and slow cooling. [Source: LakeCross Veterinary Hospital, 2023; MSD Veterinary Manual, 2023]",
    safe: true,
  },
  {
    icon: Droplet,
    title: "Cool (not cold) water rinse",
    body: "A brief rinse in cool water can help reduce fever. Never use ice water — ice causes vasoconstriction at the dog's skin, trapping heat inside rather than releasing it. Monitor the dog's temperature every 5–10 minutes while cooling. [Source: MSD Veterinary Manual, 2023; WebMD Pets, 2022]",
    safe: true,
  },
  {
    icon: Droplet,
    title: "Fresh cool water",
    body: "Dehydration worsens organ function when a dog has a fever. Offer small amounts of cool fresh water frequently. Don't force water into the mouth — aspiration risk. The dog's immune system fighting infection needs hydration to function properly. [Source: MSD Veterinary Manual, 2023; PetMD, 2023]",
    safe: true,
  },
  {
    icon: Leaf,
    title: "Cool tile or shaded floor",
    body: "Let your dog rest on cool tile or a shaded surface. Dogs instinctively seek cool floors when their body temperature is elevated. Avoid warm rooms, direct sunlight, or fabric that traps heat. Monitor the dog closely and check the dog's temperature every 10–15 minutes. [Source: PetMD, 2023; MSD Veterinary Manual, 2023]",
    safe: true,
  },
];

const TOXIC_MEDS = [
  {
    name: "Acetaminophen (Tylenol / Paracetamol)",
    mechanism: "Converts hemoglobin to methemoglobin (oxygen can't be carried) and causes liver cell death (hepatotoxicity). Also causes bone marrow problems with repeated exposure.",
    signs: "Brown or grey gums, facial or paw swelling, labored breathing, jaundice, collapse",
    verdict: "NEVER",
  },
  {
    name: "Aspirin",
    mechanism: "Causes GI ulceration and hemorrhage, platelet dysfunction, and possibly fatal complications in dogs. A standard aspirin tablet given to reduce fever is dangerous.",
    signs: "Vomiting blood, black tarry stools, pale gums, lethargy, loss of appetite",
    verdict: "NEVER",
  },
  {
    name: "Ibuprofen (Advil, Motrin, Nurofen)",
    mechanism: "GI ulceration, acute kidney injury, CNS effects (seizures at high doses). Toxic threshold begins at approximately 25 mg/kg.",
    signs: "Vomiting, diarrhea, abdominal pain, decreased urination, seizures",
    verdict: "NEVER",
  },
];

const REFERENCES = [
  "MSD Veterinary Manual. (2023). Fever in Dogs — Pyrexia. msdvetmanual.com",
  "VCA Animal Hospitals. (2022). Fever in Dogs. vcahospitals.com",
  "PetMD Editorial. (2023). Dog Fever: Signs, Causes, and Treatments. petmd.com",
  "American Veterinary Medical Association (AVMA). (2021). Taking Your Pet's Temperature. avma.org",
  "Cornell University College of Veterinary Medicine. (2021). Taking Your Pet's Temperature. vet.cornell.edu",
  "Journal of the American Animal Hospital Association. (2019). Comparison of rectal and tympanic temperatures in dogs.",
  "WebMD Pets. (2022). Dog Fever: Signs and What to Do. webmd.com/pets",
  "ASPCA Animal Poison Control Center. (2023). Top Toxins in Dogs. aspca.org",
  "Pet Poison Helpline. (2022). Acetaminophen Poisoning in Dogs. petpoisonhelpline.com",
  "LakeCross Veterinary Hospital. (2023). How to Reduce Dog Fever at Home. lakecrossvet.com",
  "AVMA. (2020). Vaccination in Pets. avma.org",
  "Journal of Veterinary Internal Medicine. (2021). Immune-mediated diseases as causes of fever of unknown origin in dogs.",
  "JAVMA. (2020). Tick-borne diseases — clinical patterns in dogs. avma.org/javma",
  "Journal of Veterinary Emergency and Critical Care. (2020). Heatstroke in dogs — outcomes and temperature thresholds.",
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

export default function DogFeverHomeRemedyGuide() {
  const [activeSection, setActiveSection] = useState("normal-temp");
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
          {/* Previous articles nav */}
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/40 font-medium mb-2">
              More articles
            </p>
            <div className="flex flex-wrap gap-2">
              {BLOG_ARTICLES.filter((a) => a.href !== "/dog-fever-home-remedy").map((a) => (
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
              <Thermometer className="w-3.5 h-3.5" /> Dog Health · First Aid
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Dog Fever Home Remedy: 5 Safe Cooling Methods
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Normal dog temperature is 101–102.5°F. When a dog has a fever, these five safe cooling methods can help — and one medication mistake can cause organ failure within hours.
            </p>
            <figure className="rounded-2xl overflow-hidden mb-8">
              <img
                src={imgHero}
                alt="Golden retriever lying on cool tile floor — dog fever home remedy guide"
                className="w-full object-cover max-h-80"
                loading="eager"
              />
            </figure>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Thermometer, label: "Normal temp: 101–102.5°F" },
                { icon: ShieldCheck, label: "104°F emergency line" },
                { icon: XCircle, label: "Tylenol & aspirin toxic" },
                { icon: CheckCircle, label: "5 safe cooling methods" },
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
                    <strong>This article does not constitute medical advice.</strong> It is educational content for dog owners. If your dog's temperature reads 104°F or higher, or symptoms are severe, go to a vet immediately — do not rely on home cooling alone.
                  </p>
                  <p>
                    <strong>Never give a dog Tylenol, aspirin, or ibuprofen.</strong> These cause organ failure, not fever relief. If your dog has ingested any human pain medication, call ASPCA Animal Poison Control at <strong>888-426-4435</strong> immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 01 — Normal Temperature */}
            <section id="normal-temp" className="scroll-mt-24">
              <SectionLabel n="01" title="Normal Dog Temperature: 101–102.5°F" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                A dog's healthy temperature sits between <strong>101°F and 102.5°F (38.3–39.2°C)</strong>. This is higher than the human body temperature ranges of 97.6 to 99.6°F — a dog's normal body temperature being slightly warmer than ours surprises many owners and does not mean a dog that feels warm is automatically feverish. [Source: MSD Veterinary Manual, 2023; VCA Animal Hospitals, 2022]
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                One widespread myth: a warm or dry nose is an accurate indicator of fever in dogs. It is not — a dog's nose temperature and moisture fluctuate with sleep, hydration, and environment throughout the day. The only reliable way to confirm a dog's fever is a thermometer reading. [Source: AVMA, 2021; PetMD, 2023]
              </p>
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgTemperature}
                  alt="Digital thermometer showing 102.1°F next to water-soluble lubricant — how to take a dog's temperature"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">A dedicated digital thermometer and water-soluble lubricant are all you need to check a dog's fever at home</p>
                </figcaption>
              </figure>
              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="bg-muted/40 px-5 py-3">
                  <span className="font-semibold text-sm">Dog Temperature Guide</span>
                </div>
                <div className="divide-y divide-border">
                  {TEMP_TABLE.map((row) => (
                    <div key={row.temp} className={`px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-2 ${row.color}`}>
                      <span className="font-semibold text-sm w-32 flex-shrink-0">{row.temp}</span>
                      <span className="font-medium text-sm w-44 flex-shrink-0">{row.category}</span>
                      <span className="text-sm leading-relaxed">{row.action}</span>
                    </div>
                  ))}
                </div>
                <p className="px-5 py-2 text-xs text-muted-foreground border-t border-border">[Source: MSD Veterinary Manual, 2023; PetMD, 2023]</p>
              </div>
            </section>

            {/* Chapter 02 — How to Measure */}
            <section id="how-to-measure" className="scroll-mt-24">
              <SectionLabel n="02" title="How to Take Your Dog's Temperature" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                A digital rectal thermometer is the most accurate way to check a dog's fever — the gold standard. Ear (tympanic) thermometers are more comfortable but less accurate, especially if a dog's ears are narrow or show signs of ear infection. Use rectal reading to confirm anything concerning. [Source: Cornell University College of Veterinary Medicine, 2021]
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { n: "1", title: "Get a separate thermometer", body: "Use a dedicated digital thermometer for your dog only — available at most pet stores. Glass/mercury thermometers are a breakage risk. [Source: VCA Animal Hospitals, 2022]" },
                  { n: "2", title: "Prepare your dog's supplies", body: "Have a water soluble lubricant ready (KY gel or petroleum jelly). A second person to assist makes the procedure easier. [Source: VCA Animal Hospitals, 2022]" },
                  { n: "3", title: "Position your dog", body: "Most dogs tolerate standing while you stand to the side of the rear. Small dogs can be held with the hind end facing you. Keep the dog's tail lifted gently. [Source: PetMD, 2023]" },
                  { n: "4", title: "Carefully insert the tip", body: "Carefully insert the lubricated tip into the dog's rectum — 1–2 cm (½ inch) for small dogs, 2–5 cm (1–2 inches) for larger dogs. Support the dog's hind legs to keep them steady. [Source: MSD Veterinary Manual, 2023]" },
                  { n: "5", title: "Hold and read", body: "Hold until the thermometer beeps — usually 10–60 seconds. Carefully remove, read the thermometer temperature immediately, then clean with soap and water. [Source: VCA Animal Hospitals, 2022]" },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex gap-4 bg-muted/30 rounded-2xl p-4">
                    <span className="text-xs font-bold text-muted-foreground bg-background rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 border border-border">
                      {n}
                    </span>
                    <div>
                      <p className="font-semibold text-sm mb-1">{title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900 leading-relaxed">
                <strong>Ear thermometers:</strong> A quick, less stressful option, but thermometer temperature from ear readings is less consistent than rectal measurement — not a reliable accurate indicator in dogs with narrow canals or ear infection. Treat as a screen; confirm any concerning dog's temperature rectally or at the vet. If your dog bites or cannot be safely restrained, stop and contact your vet. [Source: Journal of the American Animal Hospital Association, 2019; AVMA, 2021]
              </div>
            </section>

            {/* Chapter 03 — Symptoms & Causes */}
            <section id="symptoms-causes" className="scroll-mt-24">
              <SectionLabel n="03" title="Dog Fever Symptoms and Common Causes" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dog fever symptoms overlap with many other illnesses — you won't know whether a dog has a fever without measuring body temperature. An accurate diagnosis requires a thermometer reading, not a visual assessment. Common signs a dog exhibits when feverish: [Source: PetMD, 2023; WebMD Pets, 2022]
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: PawPrint, text: "Lethargy, reduced activity, decreased appetite" },
                  { icon: Zap, text: "Rapid breathing or panting not explained by heat or exercise" },
                  { icon: Thermometer, text: "Shivering or trembling, sometimes alternating with panting" },
                  { icon: AlertTriangle, text: "Warm dog's skin, especially armpits and groin" },
                  { icon: FlaskConical, text: "Red or glassy eyes; nasal discharge" },
                  { icon: Zap, text: "Coughing, vomiting, or diarrhea if infection is involved" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-muted/30 rounded-xl p-3">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                When a dog's temperature drops back to normal range after cooling, dog fever symptoms typically ease. Monitor the dog closely — if the dog exhibits returning symptoms or dog's fever rises again, contact your vet. [Source: PetMD, 2023]
              </p>
              <div className="bg-muted/30 rounded-2xl p-6">
                <p className="font-semibold text-sm mb-3">Common causes of fever in dogs:</p>
                <div className="space-y-2">
                  {[
                    { label: "Bacterial infections", detail: "Tooth infection, infected bite wounds, UTIs, abscesses, pneumonia, dental disease [Source: MSD Veterinary Manual, 2023]" },
                    { label: "Viral infections", detail: "Parvovirus, distemper, influenza [Source: PetMD, 2023]" },
                    { label: "Tick-borne disease", detail: "Ehrlichia, Anaplasma in tick-prone areas [Source: JAVMA, 2020]" },
                    { label: "Post-vaccination reaction", detail: "Mild low grade fever within 24–48 hours is a normal immune system response; high or prolonged fever requires vet evaluation [Source: AVMA, 2020]" },
                    { label: "Toxin or drug ingestion", detail: "Macadamia nuts, toxic plants, certain human foods, human medications [Source: ASPCA Animal Poison Control, 2023]" },
                    { label: "Immune-mediated disorders", detail: "Underlying disorders including bone marrow problems, vasculitis, or polyarthritis can cause persistent fever of unknown origin in dogs [Source: Journal of Veterinary Internal Medicine, 2021]" },
                  ].map(({ label, detail }) => (
                    <div key={label} className="flex gap-2 text-sm">
                      <span className="text-primary font-semibold flex-shrink-0">·</span>
                      <p className="text-muted-foreground leading-relaxed"><strong className="text-foreground">{label}:</strong> {detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Chapter 04 — Home Remedies */}
            <section id="home-remedies" className="scroll-mt-24">
              <SectionLabel n="04" title="5 Safe Dog Fever Home Remedies to Reduce Fever" />
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    These methods are appropriate when dog's fever reads <strong>103–104°F</strong> and the dog is otherwise stable — not vomiting or collapsing. They are a bridge while you contact your vet, not a substitute for diagnosis. At 104°F or above, go to the vet directly. [Source: PetMD, 2023]
                  </p>
                </div>
              </div>
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgCoolingMethods}
                  alt="Owner applying cool damp cloth to a dog's paw pads on tile floor — safe dog fever home remedy"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">Cool damp cloths on paws, armpits, and groin — the safest and most accessible dog fever home remedy</p>
                </figcaption>
              </figure>
              <div className="space-y-4">
                {COOLING_METHODS.map(({ icon: Icon, title, body }, i) => (
                  <div key={title} className="border border-border rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-muted-foreground bg-muted rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">{title}</span>
                      <CheckCircle className="w-4 h-4 text-green-600 ml-auto flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-5 text-sm text-red-900 leading-relaxed">
                <strong>Do not use:</strong> Ice baths or ice packs directly on the dog's skin (vasoconstriction traps heat), or alcohol rubs (toxic through skin absorption and inhalation). [Source: ASPCA Animal Poison Control, 2023; MSD Veterinary Manual, 2023]
              </div>
            </section>

            {/* Chapter 05 — Emergency Line */}
            <section id="emergency-line" className="scroll-mt-24">
              <SectionLabel n="05" title="When Dog Fever Home Remedies Aren't Enough: The 104°F Line ⚠️" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                At <strong>104°F (40°C)</strong>, the risk of cellular and organ damage becomes significant. Proteins and cell membranes begin to malfunction at sustained high body temperature, affecting the brain, kidneys, liver, and GI tract. At 106°F, coagulation disorders, brain edema, and multi-organ failure have been documented — these are possibly fatal complications of untreated high fever in dogs. [Source: MSD Veterinary Manual, 2023; Journal of Veterinary Emergency and Critical Care, 2020]
              </p>
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgEmergency}
                  alt="Veterinarian examining a dog with a digital thermometer — when dog fever home remedy is not enough"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">At 104°F and above, veterinary examination is essential — home cooling alone is not adequate</p>
                </figcaption>
              </figure>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
                <p className="font-semibold text-sm text-red-800 mb-3">Go to the vet immediately when the dog exhibits any of these:</p>
                <ul className="space-y-2">
                  {[
                    "Dog's body temperature reads 104°F (40°C) or higher — home remedy is not the primary response at this level",
                    "Temperature is 103°F+ AND the dog exhibits vomiting, collapse, or severe lethargy",
                    "High fever in dogs has lasted more than 24 hours at any level",
                    "You suspect heatstroke, a serious injury from infected bite or cut tooth infection, or known toxin ingestion",
                    "Any puppy under 8 weeks — puppies require immediate vet care for fever of unknown origin",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-red-900">
                      <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>En route to the vet:</strong> continue applying cool damp cloths and run the car's AC. A dog fever home remedy used in transit is appropriate and helpful. What is not appropriate is delaying the vet because fever in dogs appears to be responding to home cooling. [Source: MSD Veterinary Manual, 2023]
              </p>
            </section>

            {/* Chapter 06 — Toxic Meds */}
            <section id="toxic-meds" className="scroll-mt-24">
              <SectionLabel n="06" title="Human Medications Toxic to Dogs — Never Give Your Dog These" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                ASPCA Animal Poison Control consistently lists human pain relievers among the top toxins reported in dogs. Never give your dog acetaminophen, aspirin, or ibuprofen to reduce dog's fever — none of these human medications are safe. [Source: ASPCA Animal Poison Control, 2023]
              </p>
              <figure className="rounded-2xl overflow-hidden border border-border mb-6">
                <img
                  src={imgMedications}
                  alt="Tylenol and aspirin — human medications that are toxic to dogs and must never be given for dog fever"
                  className="w-full object-cover max-h-72"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 bg-muted/30">
                  <p className="text-sm font-medium">These three human medications cause organ failure in dogs — not fever relief</p>
                </figcaption>
              </figure>
              <div className="space-y-4 mb-6">
                {TOXIC_MEDS.map(({ name, mechanism, signs, verdict }) => (
                  <div key={name} className="border-2 border-red-200 bg-red-50 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="font-semibold text-sm text-red-900">{name}</span>
                      <span className="ml-auto text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">{verdict}</span>
                    </div>
                    <p className="text-sm text-red-900 leading-relaxed mb-2"><strong>Mechanism:</strong> {mechanism}</p>
                    <p className="text-sm text-red-900 leading-relaxed"><strong>Signs of poisoning:</strong> {signs}</p>
                  </div>
                ))}
              </div>
              <div className="bg-ink-deep text-primary-foreground rounded-2xl p-6 mb-6">
                <p className="font-semibold text-sm mb-2">🆘 If your dog has ingested any human pain medication:</p>
                <p className="text-sm text-primary-foreground/80 leading-relaxed mb-3">
                  Call <strong>ASPCA Animal Poison Control: 888-426-4435</strong> immediately. Do not wait for symptoms — early intervention dramatically improves outcomes. [Source: ASPCA Animal Poison Control, 2023]
                </p>
              </div>

              {/* YouTube embed — Dr. Alex: What's safe to give dogs */}
              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="bg-muted/40 px-5 py-3">
                  <p className="text-sm font-semibold">Dr. Alex C — Medications Safe for Dogs</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Our veterinary advisor explains what pet owners should know about giving human products to dogs</p>
                </div>
                <div className="p-4">
                  <LiteYouTube
                    id="7NRNTrvSkhI"
                    title="Dr. Alex C: What's Safe to Give Dogs — Human Medications to Avoid"
                  />
                </div>
              </div>
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

            {/* CTA */}
            <section className="bg-ink-deep text-primary-foreground rounded-3xl p-10 lg:p-14">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                Daily dog wellness
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                Support your dog's immune health year-round.
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed max-w-xl mb-7">
                While your vet handles the diagnosis, PetGlow Drops supports your dog's immune system and digestive health as part of a daily wellness routine — formulated with Ayurvedic botanicals reviewed by our veterinary advisory team.
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

          </article>
        </div>
      </div>
    </div>
  );
}
