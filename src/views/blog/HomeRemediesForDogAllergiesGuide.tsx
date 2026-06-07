import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Activity,
  Droplet,
  FlaskConical,
  Leaf,
  PawPrint,
  ShieldCheck,
  Sparkles,
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
import { HOME_REMEDIES_FOR_DOG_ALLERGIES_FAQS as FAQS } from "@/lib/blog/home-remedies-for-dog-allergies-faqs";
import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";

import imgHero from "@/assets/blog/home-remedies-for-dog-allergies-hero.webp";
import imgAllergyTypes from "@/assets/blog/home-remedies-for-dog-allergies-allergy-types.webp";
import imgRemedies from "@/assets/blog/home-remedies-for-dog-allergies-remedies.webp";
import imgOatmealBath from "@/assets/blog/home-remedies-for-dog-allergies-oatmeal-bath.webp";
import imgEliminationDiet from "@/assets/blog/home-remedies-for-dog-allergies-elimination-diet.webp";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "allergy-types", label: "3 Types of Dog Allergies" },
  { id: "twelve-remedies", label: "12 Home Remedies (Ranked)" },
  { id: "oatmeal-bath", label: "Oatmeal Bath Recipe" },
  { id: "quercetin", label: "Quercetin: Natural Antihistamine" },
  { id: "elimination-diet", label: "Elimination Diet Guide" },
  { id: "dvm-note", label: "DVM Note: Ayurvedic Options" },
  { id: "faq", label: "FAQ" },
  { id: "references", label: "References" },
];

const REMEDY_ROWS = [
  { rank: 1, remedy: "Fish oil (omega 3 fatty acids)", evidence: "Strong", best: "Atopic dermatitis itch reduction" },
  { rank: 2, remedy: "Elimination diet", evidence: "Strong", best: "Food allergy diagnosis + relief" },
  { rank: 3, remedy: "Probiotics", evidence: "Moderate", best: "Atopic dermatitis, gut-skin axis" },
  { rank: 4, remedy: "Colloidal oatmeal baths", evidence: "Moderate", best: "Itchy skin, skin barrier support" },
  { rank: 5, remedy: "Quercetin", evidence: "Weak", best: "Histamine reduction" },
  { rank: 6, remedy: "Coconut oil (topical)", evidence: "Weak–Moderate", best: "Dry skin and non-infected patches" },
  { rank: 7, remedy: "Aloe vera gel (topical only)", evidence: "Weak–Moderate", best: "Soothe irritated skin" },
  { rank: 8, remedy: "Apple cider vinegar spray", evidence: "Weak", best: "Superficial yeast / antibacterial" },
  { rank: 9, remedy: "Natural antihistamines", evidence: "Weak", best: "Adjunctive histamine modulation" },
  { rank: 10, remedy: "Baking soda paste", evidence: "Anecdotal", best: "Localized itch spots" },
  { rank: 11, remedy: "Chamomile rinse", evidence: "Anecdotal", best: "Mild calming rinse" },
  { rank: 12, remedy: "Ayurvedic herbs (turmeric, neem)", evidence: "Weak", best: "Anti-inflammatory support" },
];

const OATMEAL_STEPS = [
  "Grind 1/3 cup of plain oats (small dogs) or 1/2–1 cup (medium to large dogs) in a blender until you have a fine powder. The fine powder should turn the water milky-white when added.",
  "Fill the tub with warm — not hot — water. Hot water dilates blood vessels and worsens itch in dogs with skin allergies.",
  "Stir in the oat powder thoroughly before the dog enters.",
  "Soak your dog for 10–15 minutes, gently ladling water over areas of irritated skin they've been scratching.",
  "Rinse lightly and pat (don't rub) dry with a soft towel.",
];

const ELIM_DIET_STEPS = [
  {
    step: "Choose a novel protein (or hydrolyzed) diet",
    detail:
      "A novel protein is an ingredient your dog has never eaten before. If your dog has been eating chicken their whole life, try venison, duck, rabbit, kangaroo, or insect protein. Even a treat or flavored toothpaste containing the old protein will invalidate the trial. Alternatively, use a hydrolyzed protein diet — proteins broken into fragments too small for the immune system to trigger allergic reactions.",
  },
  {
    step: "Run the trial for 8–12 weeks",
    detail:
      "Eight weeks is the minimum; 12 weeks is preferred, as some food-allergic dogs take the full period to show improvement. No treats except the novel protein, no table scraps, no flavored medications. Keep other pets' food away.",
  },
  {
    step: "Assess the response",
    detail:
      "If itching, ear infections, and GI signs improve significantly, food allergy is strongly suspected. Improvement of 50% or more in pruritus score is the threshold many veterinary dermatologists use. If symptoms persist beyond 12 weeks despite strict adherence, consult your vet for additional testing.",
  },
  {
    step: "Re-challenge (optional but informative)",
    detail:
      "Re-introduce the original diet. If allergy symptoms return within 1–2 weeks, food allergy is confirmed. This step identifies the specific trigger protein, which matters for long-term dietary management.",
  },
];

const REFERENCES = [
  "MSD Veterinary Manual (2020). Atopic Dermatitis and Allergic Skin Diseases in Dogs.",
  "AVMA (2021). Allergic Skin Disease — Owner FAQ. American Veterinary Medical Association.",
  "VCA Hospitals (2022). Skin Allergies in Dogs — Diagnosis and Management.",
  "Tufts Cummings Veterinary Center (2021). Food Allergy vs. Food Intolerance in Dogs.",
  "WSAVA (2021). WSAVA Nutritional Assessment Guidelines — Adverse Food Reactions.",
  "International Committee on Allergic Diseases of Animals / ICADA (2015). Therapy Guidelines for Canine Atopic Dermatitis.",
  "Journal of Drugs in Dermatology (2015). Colloidal Oatmeal: History, Chemistry, and Clinical Properties.",
  "Scientific Reports (2018). Antimicrobial Activity of Apple Cider Vinegar Against Common Skin Pathogens.",
  "Journal of Traditional and Complementary Medicine (2019). Lauric Acid and Coconut Oil: Anti-Inflammatory Mechanisms.",
  "International Journal of Dermatology (2014). Coconut Oil as Moisturizer Therapy for Atopic Dermatitis in Humans.",
  "PetMD (2020). Coconut Oil for Dogs: Benefits and Risks.",
  "Pharmacological Reports (2016). Quercetin as a Bioactive Flavonoid: Anti-Inflammatory and Mast-Cell Stabilizing Properties.",
  "Dogs Naturally Magazine (2020). Quercetin for Dogs: The Natural Antihistamine.",
  "Veterinary Dermatology (2010). Omega-3 Fatty Acid Supplementation in Canine Atopic Dermatitis.",
  "JAVMA (2010). Randomized Trial: Fish Oil Reduces Pruritus in Dogs with Atopic Dermatitis.",
  "Pharmacognosy Review (2015). Aloe Vera: A Short Review.",
  "ASPCA Animal Poison Control (2020). Aloe (Aloe barbadensis) — Toxic to Dogs and Cats.",
  "Frontiers in Veterinary Science (2017). Microbiome and Immune Function in Canine Atopic Dermatitis.",
  "Veterinary Dermatology (2012). Probiotics for Canine Atopic Dermatitis: Randomised Controlled Trial.",
  "Journal of Ethnopharmacology (2018). Azadirachta indica (Neem) — Antimicrobial and Anti-Inflammatory Properties.",
  "Nikolaus Nature Blog (2023). Colloidal Oatmeal Baths and Quercetin Dosing for Dogs.",
];

function EvidenceBadge({ level }: { level: string }) {
  const color =
    level === "Strong"
      ? "bg-green-100 text-green-800"
      : level === "Moderate"
        ? "bg-blue-100 text-blue-800"
        : level.startsWith("Weak")
          ? "bg-yellow-100 text-yellow-800"
          : "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${color}`}>
      {level}
    </span>
  );
}

export default function HomeRemediesForDogAllergiesGuide() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 font-sans text-[#3A2F26]">
      {/* ── Header ── */}
      <header className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">
          Pet Health · Dog Allergies
        </p>
        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
          Home Remedies for Dog Allergies: 12 Ranked Treatments
        </h1>
        <p className="text-base leading-relaxed text-[#5C4F44]">
          If your dog is itching, chewing their paws, or shaking their head constantly, skin
          allergies are one of the most likely causes. Home remedies for dog allergies won't cure
          what's underneath — allergies are an immune system issue — but the right natural remedies
          can meaningfully reduce itch, support skin health, and give your dog real comfort while
          you work with a vet on the root cause.
        </p>
        <p className="mt-3 text-base leading-relaxed text-[#5C4F44]">
          Twelve home remedies for dog allergies are covered below, each rated by the actual
          strength of evidence behind them. Understanding a dog's allergies and choosing
          evidence-matched remedies helps you set realistic expectations. The rankings matter: a few
          have solid veterinary research support; others are anecdotal at best.{" "}
          <span className="text-sm text-[#8A7A6A]">[Source: AVMA, 2021]</span>
        </p>
      </header>

      {/* ── Hero image ── */}
      <img
        src={imgHero}
        alt="Golden retriever gently scratching ear — home remedies for dog allergies"
        className="mb-8 w-full rounded-xl object-cover"
      />

      {/* ── TOC ── */}
      <nav className="mb-10 rounded-xl border border-[#E8DDD4] bg-[#FAF6F2] p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">
          In this article
        </p>
        <ul className="space-y-1.5">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-sm transition-colors hover:text-[#B89B6A] ${
                  activeSection === id ? "font-semibold text-[#B89B6A]" : "text-[#5C4F44]"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Chapter 01 — 3 Types of Dog Allergies ── */}
      <section id="allergy-types" className="mb-12 scroll-mt-20">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">
          Chapter 01
        </p>
        <h2 className="mb-4 text-2xl font-bold">3 Types of Dog Allergies</h2>

        <p className="mb-4 text-base leading-relaxed text-[#5C4F44]">
          Before picking a remedy, you need to know which type of allergy you're dealing with. When
          dogs develop itchy skin, persistent scratching, or inflamed skin, the cause may be
          environmental allergens, a food reaction, or flea allergies — and the right response is
          completely different for each. Common symptoms present differently depending on the
          trigger, so correct identification is the first step toward effective treatment.{" "}
          <span className="text-sm text-[#8A7A6A]">[Source: MSD Veterinary Manual, 2020]</span>
        </p>

        <img
          src={imgAllergyTypes}
          alt="Three types of dog allergies: environmental, food, and flea allergy"
          className="mb-6 w-full rounded-xl object-cover"
        />

        <div className="space-y-6">
          <div className="rounded-xl border border-[#E8DDD4] bg-[#FAF6F2] p-5">
            <div className="mb-2 flex items-center gap-2">
              <Wind className="h-5 w-5 text-[#B89B6A]" />
              <h3 className="font-bold">Environmental / Atopic Dermatitis</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              The most common type. Dogs develop an immune overreaction to environmental allergens:
              tree and grass pollens, house dust mites, mold spores, and sometimes human dander.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: MSD Veterinary Manual, 2020]</span>{" "}
              Signs typically begin between 6 months and 3 years of age, start seasonally (spring
              and summer), and often become year-round as seasonal allergies expand into perennial
              disease. The intense itching concentrates around the paws, face, ears, armpits, groin,
              and belly — areas with sensitive skin and more allergen exposure. Skin irritation, hair
              loss, and recurrent ear infections are hallmarks of a dog's allergies from
              environmental triggers.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: VCA Hospitals, 2022]</span>
            </p>
            <p className="mt-2 text-xs text-[#8A7A6A]">
              Breeds at higher risk: West Highland White Terrier, French Bulldog, Labrador
              Retriever, Golden Retriever, Boxer, Poodle crosses.
            </p>
          </div>

          <div className="rounded-xl border border-[#E8DDD4] bg-[#FAF6F2] p-5">
            <div className="mb-2 flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-[#B89B6A]" />
              <h3 className="font-bold">Food Allergy (Adverse Food Reaction)</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Food allergies account for roughly 10–15% of all canine allergic disease. The immune
              system reacts against specific proteins — most often beef, chicken, dairy, egg, or
              occasionally wheat and soy — triggering allergic reactions through the gut-skin axis
              and affecting both the digestive system and the skin.{" "}
              <span className="text-xs text-[#8A7A6A]">
                [Source: Tufts Cummings Veterinary Center, 2021]
              </span>{" "}
              Key distinguishing feature: the itch is non-seasonal. Chronic ear infections, anal
              gland problems, and gastrointestinal signs are common symptoms. The distribution on
              the skin looks almost identical to environmental allergy — an elimination diet is
              needed to confirm.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: WSAVA, 2021]</span>
            </p>
          </div>

          <div className="rounded-xl border border-[#E8DDD4] bg-[#FAF6F2] p-5">
            <div className="mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#B89B6A]" />
              <h3 className="font-bold">Flea Allergies &amp; Contact Allergy</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Flea allergy dermatitis (FAD) is hypersensitivity to proteins in flea saliva. A single
              flea bite can trigger intense itching and severe allergic reactions in sensitized dogs.
              The itch and hair loss concentrate at the rump, tail base, and back of the thighs.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: MSD Veterinary Manual, 2020]</span>{" "}
              Contact allergy — reaction to a specific shampoo, cleaning product, lawn chemical, or
              plant — produces irritated skin limited to areas that touched the substance: belly,
              paws, chest, or muzzle.
            </p>
          </div>
        </div>
      </section>

      {/* ── Chapter 02 — 12 Home Remedies ── */}
      <section id="twelve-remedies" className="mb-12 scroll-mt-20">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">
          Chapter 02
        </p>
        <h2 className="mb-4 text-2xl font-bold">
          12 Home Remedies for Dog Allergies (Ranked by Evidence)
        </h2>

        <p className="mb-4 text-base leading-relaxed text-[#5C4F44]">
          Evidence is rated on four tiers:{" "}
          <strong>Strong</strong> (multiple controlled veterinary trials),{" "}
          <strong>Moderate</strong> (some canine data or strong extrapolation from human research),{" "}
          <strong>Weak</strong> (lab data or anecdotal veterinary use), and{" "}
          <strong>Anecdotal</strong> (no controlled research). No home remedy substitutes for
          veterinary diagnosis, but several can be effective treatment options for mild-to-moderate
          allergy symptoms.{" "}
          <span className="text-sm text-[#8A7A6A]">[Source: AVMA, 2021]</span>
        </p>

        <img
          src={imgRemedies}
          alt="Natural home remedy ingredients for dog allergies: oatmeal, fish oil, coconut oil, aloe vera"
          className="mb-6 w-full rounded-xl object-cover"
        />

        {/* Evidence table */}
        <div className="mb-8 overflow-x-auto rounded-xl border border-[#E8DDD4]">
          <table className="w-full text-sm">
            <thead className="bg-[#FAF6F2]">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-[#3A2F26]">#</th>
                <th className="px-3 py-2 text-left font-semibold text-[#3A2F26]">Remedy</th>
                <th className="px-3 py-2 text-left font-semibold text-[#3A2F26]">Evidence</th>
                <th className="hidden px-3 py-2 text-left font-semibold text-[#3A2F26] md:table-cell">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody>
              {REMEDY_ROWS.map((r) => (
                <tr key={r.rank} className="border-t border-[#E8DDD4]">
                  <td className="px-3 py-2 text-[#8A7A6A]">{r.rank}</td>
                  <td className="px-3 py-2 font-medium text-[#3A2F26]">{r.remedy}</td>
                  <td className="px-3 py-2">
                    <EvidenceBadge level={r.evidence} />
                  </td>
                  <td className="hidden px-3 py-2 text-[#5C4F44] md:table-cell">{r.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Individual remedy write-ups */}
        <div className="space-y-5">
          {/* 1. Fish oil */}
          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-bold">1. Fish Oil (Omega 3 Fatty Acids)</h3>
              <EvidenceBadge level="Strong" />
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Multiple randomized controlled trials show that omega 3 fatty acids reduce pruritus
              scores and steroid requirements in itchy dogs with atopic dermatitis.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: Veterinary Dermatology, 2010]</span>{" "}
              EPA and DHA from fish oil shift the immune response toward less inflammatory compounds,
              helping reduce inflammation in the skin.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: JAVMA, 2010]</span> Target dose:
              ~100–220 mg combined EPA+DHA per kg body weight per day — veterinary-grade fatty acid
              supplements provide weight-based dosing. Give with food. Discuss with your vet if your
              dog is on any medication.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: VCA Hospitals, 2022]</span>
            </p>
          </div>

          {/* 3. Probiotics */}
          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-bold">3. Probiotics</h3>
              <EvidenceBadge level="Moderate" />
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              A placebo-controlled trial found that <em>Lactobacillus rhamnosus</em> GG
              supplementation improved clinical allergy symptoms and pruritus scores in dogs with
              atopic dermatitis.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: Veterinary Dermatology, 2012]</span>{" "}
              The mechanism involves gut-immune modulation: a balanced gut microbiome improves
              digestive health, shifts Th1/Th2 immune balance away from the allergic response, and
              supports healthy skin from the inside.{" "}
              <span className="text-xs text-[#8A7A6A]">
                [Source: Frontiers in Veterinary Science, 2017]
              </span>{" "}
              Use veterinary-formulated products with documented strains and CFU counts.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: WSAVA, 2021]</span>
            </p>
          </div>

          {/* 6. Coconut oil */}
          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-bold">6. Coconut Oil (Topical)</h3>
              <EvidenceBadge level="Weak–Moderate" />
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Lauric acid in coconut oil has documented antimicrobial and anti-inflammatory
              properties in laboratory models.{" "}
              <span className="text-xs text-[#8A7A6A]">
                [Source: Journal of Traditional and Complementary Medicine, 2019]
              </span>{" "}
              Apply a thin layer of virgin, unflavored coconut oil to dry skin patches once daily.
              Avoid in dogs with a history of pancreatitis — licking can cause GI upset from the
              high fat content.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: PetMD, 2020]</span>
            </p>
          </div>

          {/* 7. Aloe vera gel */}
          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-bold">7. Aloe Vera Gel (Topical Only)</h3>
              <EvidenceBadge level="Weak–Moderate" />
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Applied as a thin layer, aloe vera gel can calm irritated skin and soothe itchy skin
              with mild, non-infected inflammation.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: Pharmacognosy Review, 2015]</span>{" "}
              <strong>Do not give aloe vera gel internally.</strong> The outer leaf and latex
              portion contain saponins and anthraquinones that are toxic to dogs.{" "}
              <span className="text-xs text-[#8A7A6A]">
                [Source: ASPCA Animal Poison Control, 2020]
              </span>
            </p>
          </div>

          {/* 8. ACV */}
          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-bold">8. Apple Cider Vinegar Spray</h3>
              <EvidenceBadge level="Weak" />
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              ACV's acetic acid has in-vitro antimicrobial activity against certain bacteria and
              yeasts.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: Scientific Reports, 2018]</span>{" "}
              Mix 1 part ACV to 2–3 parts water; apply to non-broken skin only. Never apply to open
              wounds or skin folds — the acidity can worsen irritated skin.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: MSD Veterinary Manual, 2020]</span>
            </p>
          </div>

          {/* 10. Baking soda */}
          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-bold">10. Baking Soda Paste</h3>
              <EvidenceBadge level="Anecdotal" />
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              A paste of baking soda and water on specific itchy spots is widely reported by owners
              to give temporary relief on irritated skin, likely through mild pH buffering. Use on
              intact skin only; rinse after 15–20 minutes. Not appropriate for widespread use or
              dogs with chronic allergies affecting large areas.
            </p>
          </div>

          {/* 11. Chamomile */}
          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-bold">11. Chamomile Rinse</h3>
              <EvidenceBadge level="Anecdotal" />
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Chamomile contains apigenin and bisabolol with anti-inflammatory effects in human skin
              research. A diluted cooled chamomile tea rinse (steep 2–3 bags in 1 litre of water,
              cool fully, pour over dog and pat dry) is a gentle option to calm irritated skin and
              soothe itchy skin. Avoid if your dog has a ragweed allergy — chamomile can
              cross-react. If symptoms persist after 48 hours, see your vet.
            </p>
          </div>
        </div>
      </section>

      {/* ── Chapter 03 — Oatmeal Bath ── */}
      <section id="oatmeal-bath" className="mb-12 scroll-mt-20">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">
          Chapter 03
        </p>
        <h2 className="mb-4 text-2xl font-bold">Oatmeal Bath Recipe and Frequency Guide</h2>

        <p className="mb-4 text-base leading-relaxed text-[#5C4F44]">
          Colloidal oatmeal is one of the better-evidenced home remedies for dog allergies —
          particularly for itchy dogs with atopic skin disease. Oat grain contains{" "}
          <strong>avenanthramides</strong> — phenolic compounds with anti-inflammatory and anti-itch
          properties documented in human skin studies.{" "}
          <span className="text-sm text-[#8A7A6A]">
            [Source: Journal of Drugs in Dermatology, 2015]
          </span>{" "}
          In veterinary medicine, oatmeal shampoos and soaks are listed as established adjunctive
          therapy for pruritus and itchy skin from atopic dermatitis.{" "}
          <span className="text-sm text-[#8A7A6A]">[Source: MSD Veterinary Manual, 2020]</span> It
          helps calm irritated skin and skin irritation while restoring the lipid barrier that
          prevents dry skin and allergen penetration.
        </p>

        <img
          src={imgOatmealBath}
          alt="Dog receiving an oatmeal bath for allergy relief"
          className="mb-6 w-full rounded-xl object-cover"
        />

        <div className="mb-6 rounded-xl border border-[#E8DDD4] bg-[#FAF6F2] p-5">
          <h3 className="mb-3 font-bold">What you need</h3>
          <ul className="mb-5 space-y-1 text-sm text-[#5C4F44]">
            <li>• Plain, unflavored rolled oats (or veterinary colloidal oatmeal product)</li>
            <li>• A blender or food processor</li>
            <li>• A bathtub or large basin with warm (not hot) water</li>
          </ul>
          <h3 className="mb-3 font-bold">Recipe — step by step</h3>
          <ol className="space-y-3">
            {OATMEAL_STEPS.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#5C4F44]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B89B6A] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl border border-[#E8DDD4] bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-900">Frequency</p>
          <p className="mt-1 text-sm text-amber-800">
            Once or twice per week during active flare-ups is appropriate for intact skin. If the
            skin is oozing, crusted, or infected, hold off — moisture can worsen some bacterial or
            yeast skin infections.{" "}
            <span className="text-xs">[Source: VCA Hospitals, 2022]</span>
          </p>
        </div>
      </section>

      {/* ── Chapter 04 — Quercetin ── */}
      <section id="quercetin" className="mb-12 scroll-mt-20">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">
          Chapter 04
        </p>
        <h2 className="mb-4 text-2xl font-bold">Quercetin: The Natural Antihistamine for Dogs</h2>

        <p className="mb-4 text-base leading-relaxed text-[#5C4F44]">
          Quercetin is a plant flavonoid found in apples, capers, and green tea. It's sometimes
          called "nature's Benadryl" in holistic veterinary circles — though that label overstates
          the evidence. That said, quercetin does have documented anti-inflammatory properties
          relevant to a dog's allergies.{" "}
          <span className="text-sm text-[#8A7A6A]">[Source: Dogs Naturally Magazine, 2020]</span>
        </p>

        <div className="mb-5 rounded-xl border border-[#E8DDD4] bg-[#FAF6F2] p-5">
          <h3 className="mb-2 font-bold">How it works</h3>
          <p className="text-sm leading-relaxed text-[#5C4F44]">
            Quercetin stabilizes mast cells, reducing the release of histamine and other
            inflammatory mediators that drive itch and allergic reactions in itchy dogs. It also has
            antioxidant and anti-inflammatory properties that may help reduce inflammation at the
            skin level.{" "}
            <span className="text-xs text-[#8A7A6A]">[Source: Pharmacological Reports, 2016]</span>{" "}
            Controlled canine clinical trials are largely absent — most support comes from in vitro
            cell studies and rodent models.
          </p>
        </div>

        <div className="mb-5 rounded-xl border border-[#E8DDD4] bg-[#FAF6F2] p-5">
          <h3 className="mb-2 font-bold">Dosage (holistic veterinary guideline — not FDA approved)</h3>
          <p className="text-sm leading-relaxed text-[#5C4F44]">
            50–100 mg per 10 lb (4.5 kg) of body weight per day, divided into two doses, given with
            food.{" "}
            <span className="text-xs text-[#8A7A6A]">[Source: Nikolaus Nature blog, 2023]</span>{" "}
            Bromelain is sometimes combined with quercetin to improve absorption.
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-900">Safety notes</p>
          <ul className="mt-2 space-y-1 text-sm text-amber-800">
            <li>
              • Long-term safety in dogs has not been formally studied; potential interactions with
              anticoagulants and liver-metabolized drugs.
            </li>
            <li>
              • Foods high in quercetin — red onion, grapes, raisins — are toxic to dogs. Supplement
              form only.
            </li>
            <li>• Discuss with your vet if your dog is on NSAIDs, steroids, or blood thinners.</li>
          </ul>
          <p className="mt-2 text-xs text-amber-700">
            Quercetin is a reasonable natural remedy for mild seasonal allergies in healthy dogs. It
            is not an effective treatment for dogs with moderate-to-severe atopic dermatitis.{" "}
            [Source: ICADA, 2015]
          </p>
        </div>
      </section>

      {/* ── Chapter 05 — Elimination Diet ── */}
      <section id="elimination-diet" className="mb-12 scroll-mt-20">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">
          Chapter 05
        </p>
        <h2 className="mb-4 text-2xl font-bold">Elimination Diet Guide</h2>

        <p className="mb-4 text-base leading-relaxed text-[#5C4F44]">
          The elimination diet is the gold standard for diagnosing and relieving a dog's allergies
          caused by food. No blood test, saliva test, or skin prick test reliably identifies canine
          food allergens — only removing and reintroducing specific proteins can do that.{" "}
          <span className="text-sm text-[#8A7A6A]">[Source: WSAVA, 2021]</span> If your dog's
          allergy symptoms are non-seasonal and accompanied by recurring ear infections or GI signs,
          this protocol is the most effective treatment path available at home.
        </p>

        <img
          src={imgEliminationDiet}
          alt="Novel protein for elimination diet — duck breast in white ceramic bowl"
          className="mb-6 w-full rounded-xl object-cover"
        />

        <div className="space-y-4">
          {ELIM_DIET_STEPS.map((s, i) => (
            <div key={i} className="rounded-xl border border-[#E8DDD4] p-5">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B89B6A] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="font-bold">{s.step}</h3>
              </div>
              <p className="pl-10 text-sm leading-relaxed text-[#5C4F44]">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-[#E8DDD4] bg-[#FAF6F2] p-4 text-sm text-[#5C4F44]">
          <strong>Nutritional note:</strong> If using a homemade elimination diet, have the recipe
          reviewed by a veterinary nutritionist. Homemade diets can develop nutritional gaps over a
          12-week period — healthy skin and good digestive health both depend on complete and
          balanced nutrition.{" "}
          <span className="text-xs text-[#8A7A6A]">[Source: WSAVA, 2021]</span>
        </div>
      </section>

      {/* ── Chapter 06 — DVM Note ── */}
      <section id="dvm-note" className="mb-12 scroll-mt-20">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">
          Chapter 06
        </p>
        <h2 className="mb-4 text-2xl font-bold">
          DVM Note: NIH-Backed Ayurvedic and Natural Options
        </h2>

        <p className="mb-5 text-base leading-relaxed text-[#5C4F44]">
          Several traditional plant medicines have been studied in NIH-funded or peer-reviewed
          research for inflammatory skin conditions. None are first-line treatments in veterinary
          medicine, but they represent a legitimate area of emerging evidence for owners looking for
          natural remedies alongside conventional therapy for a dog's allergies. A personalized
          treatment plan from your vet will outperform any combination of home remedies for dogs
          with moderate-to-severe chronic allergies.
        </p>

        <div className="space-y-5">
          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-2 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-[#B89B6A]" />
              <h3 className="font-bold">Turmeric / Curcumin — Weak evidence, promising mechanism</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Curcumin, the active compound in turmeric, has significant anti-inflammatory
              properties — it inhibits NF-κB signalling and several inflammatory cytokines, helping
              reduce inflammation across multiple tissue types.{" "}
              <span className="text-xs text-[#8A7A6A]">
                [Source: Journal of Traditional and Complementary Medicine, 2019]
              </span>{" "}
              A PubMed-indexed review confirmed curcumin's anti-inflammatory and immunomodulatory
              activity in animal models, with potential benefit for chronic allergies involving skin
              inflammation.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: Pharmacological Reports, 2016]</span>{" "}
              In dogs, curcumin formulations with piperine (black pepper extract) improve
              bioavailability. Commonly used integrative dosing: 15–20 mg/kg per day with food.
              Avoid in dogs with bile duct obstruction or clotting disorders without veterinary
              oversight.
            </p>
          </div>

          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#B89B6A]" />
              <h3 className="font-bold">Neem (Azadirachta indica) — Weak evidence, primarily topical</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Neem leaf extract and neem oil have broad antimicrobial, antifungal, and
              anti-inflammatory properties documented in peer-reviewed literature.{" "}
              <span className="text-xs text-[#8A7A6A]">
                [Source: Journal of Ethnopharmacology, 2018]
              </span>{" "}
              For skin allergies in dogs, neem-based shampoos have been used in integrative
              practices to reduce secondary bacterial colonization and soothe irritated skin
              surfaces. Neem is preferable to many essential oils for canine use — most essential
              oils (tea tree, eucalyptus, cinnamon) are toxic to dogs even topically, so
              neem-based veterinary formulations are the safer plant-based choice.
            </p>
          </div>

          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-2 flex items-center gap-2">
              <Activity className="h-5 w-5 text-[#B89B6A]" />
              <h3 className="font-bold">Licorice Root (Glycyrrhizin) — natural cortisol support</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Glycyrrhizin has documented anti-inflammatory properties and is sometimes used by
              integrative veterinarians as a gentler alternative to topical steroids for mild itch
              flares.{" "}
              <span className="text-xs text-[#8A7A6A]">[Source: Pharmacological Reports, 2016]</span>{" "}
              It may help reduce inflammation in dogs with mild seasonal allergies who respond
              poorly to other natural remedies. Long-term use at high doses can cause sodium
              retention and hypertension. Only short-term, low-dose use under veterinary guidance is
              appropriate.
            </p>
          </div>

          <div className="rounded-xl border border-[#E8DDD4] p-5">
            <div className="mb-2 flex items-center gap-2">
              <Droplet className="h-5 w-5 text-[#B89B6A]" />
              <h3 className="font-bold">Aloe Vera Gel (Topical — see Chapter 02 for full safety notes)</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F44]">
              Multiple studies confirm anti-inflammatory wound healing activity from inner-leaf aloe
              vera gel. Topical aloe vera gel applied in a thin layer is supported by evidence to
              soothe itchy skin and skin irritation; internal use remains unsafe due to
              anthraquinone content.{" "}
              <span className="text-xs text-[#8A7A6A]">
                [Source: ASPCA Animal Poison Control, 2020]
              </span>{" "}
              Note: unlike neem or chamomile, aloe vera gel contains no essential oils, making it
              safe for sensitive skin when applied topically.
            </p>
          </div>
        </div>

        <p className="mt-5 text-xs italic text-[#8A7A6A]">
          This DVM note is for educational context only. None of these agents have received
          regulatory approval for canine allergy treatment. Always discuss supplements with your
          veterinarian, especially if your dog is on prescription allergy medications.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="mb-12 scroll-mt-20">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#B89B6A]">FAQ</p>
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-[#E8DDD4] px-4"
            >
              <AccordionTrigger className="py-4 text-left text-sm font-semibold text-[#3A2F26] hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-[#5C4F44]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── ReviewedByDrAlex ── */}
      <ReviewedByDrAlex />

      {/* ── CTA ── */}
      <section className="mb-12 rounded-2xl border border-[#E8DDD4] bg-[#FAF6F2] p-6 text-center">
        <PawPrint className="mx-auto mb-3 h-8 w-8 text-[#B89B6A]" />
        <h2 className="mb-2 text-xl font-bold">Support Your Dog's Skin from the Inside Out</h2>
        <p className="mb-5 text-sm leading-relaxed text-[#5C4F44]">
          Managing a dog's allergies takes patience. Celsius Herbs{" "}
          <strong>PetGlow Drops</strong> combine omega 3 fatty acids from fish oil, turmeric
          curcumin, and a targeted herbal blend designed to reduce inflammation and support healthy
          skin in dogs with chronic allergies — formulated with veterinary input.
        </p>
        <Button asChild className="bg-[#B89B6A] text-white hover:bg-[#A08858]">
          <a href="https://celsiusherbs.com/products/petglow-drops">
            Try PetGlow Drops →
          </a>
        </Button>
      </section>

      {/* ── References ── */}
      <section id="references" className="scroll-mt-20">
        <h2 className="mb-4 text-xl font-bold">References</h2>
        <ol className="space-y-1.5">
          {REFERENCES.map((ref, i) => (
            <li key={i} className="text-sm text-[#5C4F44]">
              <span className="mr-2 font-medium text-[#8A7A6A]">{i + 1}.</span>
              {ref}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
