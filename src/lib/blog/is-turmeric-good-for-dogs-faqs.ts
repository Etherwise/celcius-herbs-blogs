/**
 * Single source of truth for Is Turmeric Good for Dogs blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/IsTurmericGoodForDogsGuide.tsx` — renders the visual accordion.
 *  - `src/pages/is-turmeric-good-for-dogs.astro` — builds Schema.org FAQPage JSON-LD.
 */
export type Faq = { q: string; a: string };

export const IS_TURMERIC_GOOD_FOR_DOGS_FAQS: Faq[] = [
  {
    q: "Do vets recommend turmeric for dogs?",
    a: "Many integrative and holistic vets do recommend turmeric as a supplemental anti-inflammatory for dogs, particularly for joint health, joint issues, and skin inflammatory conditions. Dr. Gary Richter, a veterinary health expert and author of The Ultimate Pet Health Guide, notes that curcumin's anti-inflammatory properties make it a reasonable adjunct at appropriate doses. Conventional vets are more cautious — they support turmeric use alongside, not instead of, evidence-based treatments, and recommend ruling out drug interactions (especially blood-clotting medications) before starting.",
  },
  {
    q: "How much turmeric can I give a dog a day?",
    a: "The standard guideline is 1/8 to 1/4 teaspoon of turmeric powder per 10 lbs of body weight per day, given as golden paste mixed into dog's food. For example, a 20 lb dog starts at 1/4 tsp/day and works up to 1/2 tsp/day as tolerated. See the full dosage chart by weight in the article above. Always start with only a small amount — a good starting dose keeps stomach upset risk low while dogs eat turmeric for the first time.",
  },
  {
    q: "Can I give my dog turmeric every day?",
    a: "Yes — daily use is standard in integrative veterinary practice. Start with a conservative dose and build up over one to two weeks to minimize stomach upset. The key caveat for daily use is blood clotting: turmeric's anti-inflammatory effects include platelet inhibition, and dogs on NSAIDs, aspirin, or anticoagulants should not receive daily turmeric without veterinary supervision. Dogs scheduled for surgery should stop turmeric at least one week beforehand.",
  },
  {
    q: "What are the side effects of turmeric in dogs?",
    a: "Known side effects of turmeric in dogs include: GI upset (vomiting, diarrhea, or reduced appetite, especially at too high a dose or in dogs with a sensitive stomach); slow blood clotting (curcumin inhibits platelet aggregation — risk increases with NSAIDs or anticoagulants); gallbladder stimulation (can worsen gallbladder disease or gallbladder stones); constipation (use the golden paste recipe with oil to minimize); and lower blood sugar (relevant for diabetic dogs on insulin).",
  },
  {
    q: "What form of turmeric is best for dogs?",
    a: "Golden paste — a whole-food recipe of turmeric powder cooked with coconut oil and black pepper extract — is the most bioavailable form. Bioavailability increases dramatically versus plain powder when fat and piperine (from black pepper) are combined; this makes a huge difference to how much of the anti-inflammatory curcumin your dog actually receives. For convenience, look for commercial dog supplements standardized to BCM-95 or Meriva curcumin with built-in bioavailability systems. Plain turmeric powder added to food without fat and black pepper has poor absorption and is not recommended on its own.",
  },
  {
    q: "Is it safe to give turmeric to dogs every day?",
    a: "Daily turmeric is safe for most healthy dogs at conservative doses — but not all dogs. In the few circumstances where dogs have gallbladder disease, gallbladder stones, bleeding disorders, or blood-clotting disorders, daily use should be avoided. For healthy dogs not on clotting-affecting medications, daily golden paste at weight-appropriate doses can support dog's health over time — particularly joint health, mobility support, and immune system function.",
  },
  {
    q: "Is turmeric good for dogs with diarrhea?",
    a: "This is nuanced. Turmeric's anti-inflammatory effects could theoretically help in gut inflammatory conditions, and numerous clinical trials in humans show benefit in IBD. However, too much turmeric or adding it too quickly can cause stomach upset and loose stools in dogs with sensitive digestive health — making things worse. For acute diarrhea, turmeric is unlikely to help and may worsen symptoms. For chronic low-grade gut inflammatory disease, it may be trialed cautiously at small doses under veterinary supervision.",
  },
  {
    q: "Is turmeric good for dogs with allergies?",
    a: "As a natural anti-inflammatory, turmeric has anti-inflammatory effects that may reduce the inflammatory cascade associated with allergic responses — including suppression of histamine-related immune system cell recruitment. For dogs with mild environmental allergies, turmeric can have a positive effect as an adjunct alongside other interventions. Combined with fish oil in dog's food, the anti-inflammatory properties of turmeric and omega-3s together support dog's health and reduce the inflammatory load driving allergic skin reactions. No controlled canine clinical trials confirm it as a standalone allergy treatment.",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function buildIsTurmericGoodForDogsFaqJsonLd(
  faqs: Faq[] = IS_TURMERIC_GOOD_FOR_DOGS_FAQS,
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
 * Schema.org Article JSON-LD for the is-turmeric-good-for-dogs blog page.
 */
export function buildIsTurmericGoodForDogsArticleJsonLd(): Record<
  string,
  unknown
> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is Turmeric Good for Dogs? Vets Weigh In",
    description:
      "Is turmeric good for dogs? Learn safe dosage by weight, golden paste recipe, side effects, and when vets recommend turmeric for allergies or joint pain.",
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
      "@id": "https://blog.celsiusherbs.com/is-turmeric-good-for-dogs",
    },
  };
}
