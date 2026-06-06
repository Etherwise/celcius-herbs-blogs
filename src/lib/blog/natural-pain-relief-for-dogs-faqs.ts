/**
 * Single source of truth for Natural Pain Relief for Dogs blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/NaturalPainReliefForDogsGuide.tsx` — renders the visual accordion.
 *  - `src/pages/natural-pain-relief-for-dogs.astro` — builds Schema.org FAQPage JSON-LD.
 */
export type Faq = { q: string; a: string };

export const NATURAL_PAIN_RELIEF_FOR_DOGS_FAQS: Faq[] = [
  {
    q: "What is the most effective natural pain relief for dogs?",
    a: "Fish oil (omega-3 EPA+DHA) and boswellia serrata have the strongest canine clinical evidence for natural pain relief for dogs with joint-related arthritis pain. Fish oil is particularly notable — Roush et al. (2010) used force plate analysis to show meaningful pain relief for dogs with OA on omega-3 enriched diets. [Source: Roush et al., JAVMA, PMID 20394492, 2010] Combined with boswellia and curcumin, these form the most evidence-backed natural pain relief protocol. Heat therapy and cold therapy also provide immediate comfort alongside the longer-acting supplements.",
  },
  {
    q: "Can I give my dog ibuprofen, aspirin, or other human pain medication?",
    a: "No. Ibuprofen and naproxen are toxic to dogs and can cause fatal GI ulceration and kidney failure even at low doses. Aspirin has significant GI ulcer risk in dogs and interacts with most veterinary NSAIDs used for pain control. Willow bark — which contains aspirin-like salicylates — carries similar risks. Never use human OTC pain medication in dogs without explicit veterinary guidance. Natural pain relief for dogs should use dog-specific herbal remedies and supplements, not human products. [Source: Papich, Saunders Handbook of Veterinary Drugs, 2016]",
  },
  {
    q: "How long before natural supplements help with dog's pain?",
    a: "Fish oil typically shows measurable pain relief for dogs in OA studies over 6–12 weeks of consistent daily dosing. Boswellia showed improvements in arthritis pain at 6 weeks in clinical studies. Curcumin's onset depends heavily on formulation and bioavailability. These are chronic-condition support supplements — not acute pain relievers. Natural pain relief methods like heat therapy and cold therapy provide more immediate comfort while longer-acting supplements build effect. Many dog owners see the first meaningful reduction in dog's pain around weeks 4–8. [Source: Reichling et al., 2004]",
  },
  {
    q: "Are heat therapy and cold therapy effective for dog's pain management?",
    a: "Yes — both are well-supported physical pain relief methods for canine arthritis pain and hip dysplasia. Cold therapy decreases pain and reduces inflammation acutely — use on hot, swollen joints after exercise or acute injuries. Heat therapy relaxes sore muscles, improves blood flow, and helps relieve tension around stiff joints before exercise. [Source: Millis & Levine, Canine Rehabilitation and Physical Therapy, 2014] Both are free, have no drug interactions, and pair well with herbal remedies and supplements in a complete pain management plan.",
  },
  {
    q: "Can natural supplements replace prescription pain medications for dogs?",
    a: "In mild early-stage OA, natural pain relief methods may provide adequate pain control — especially combined with physical therapy, weight management, and anti-inflammatory diet. For moderate-to-severe arthritis pain or dog's pain from hip dysplasia or disc disease, prescription pain medications are typically needed and should not be replaced by herbal remedies alone. Natural pain relief options are best used as part of a multimodal dog's pain management plan — alongside, not instead of, veterinary medicine.",
  },
  {
    q: "Is turmeric safe for dogs every day?",
    a: "Turmeric at appropriate doses (4 mg/kg twice daily of curcuminoids) is generally well tolerated in healthy dogs. The main risks are GI upset at higher doses and interactions with NSAIDs, anticoagulants, or steroids. Dogs with gallbladder disease or bleeding disorders should avoid it. Daily use in otherwise healthy dogs as part of a natural pain relief plan is reasonable — but use a properly formulated product with piperine, not raw turmeric powder which has very poor absorption. [Source: Colitti et al., BMC Veterinary Research, 2012]",
  },
  {
    q: "Can I combine multiple natural supplements for my dog's pain?",
    a: "Yes — many multi-ingredient joint chews combine fish oil, glucosamine, chondroitin, curcumin, and boswellia, and this is a common approach in veterinary medicine. The key concern is combining these herbal remedies with prescription NSAIDs, steroids, or anticoagulants, where additive bleeding and GI effects become significant. Review the drug interaction table and discuss with your vet. Many dog owners find a single combined chew the most practical natural pain relief for dogs with chronic OA.",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 */
export function buildNaturalPainReliefForDogsFaqJsonLd(
  faqs: Faq[] = NATURAL_PAIN_RELIEF_FOR_DOGS_FAQS,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/**
 * Schema.org Article JSON-LD for the natural-pain-relief-for-dogs blog page.
 */
export function buildNaturalPainReliefForDogsArticleJsonLd(): Record<
  string,
  unknown
> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Natural Pain Relief for Dogs: 10 Evidence-Based Remedies",
    description:
      "Natural pain relief for dogs: 10 research-backed herbs and supplements with PubMed citations, dosage chart by weight, drug interaction table, and FAQ.",
    author: {
      "@type": "Organization",
      name: "Celsius Herbs Veterinary Advisory Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Celsius Herbs",
      logo: {
        "@type": "ImageObject",
        url: "https://celsiusherbs.com/cdn/shop/files/celsius-herbs-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://blog.celsiusherbs.com/natural-pain-relief-for-dogs",
    },
  };
}
