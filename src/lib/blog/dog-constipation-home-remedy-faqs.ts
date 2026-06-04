/**
 * Single source of truth for Dog Constipation Home Remedy blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/DogConstipationHomeRemedyGuide.tsx` — renders the visual accordion.
 *  - `src/pages/dog-constipation-home-remedy.astro` — builds Schema.org FAQPage JSON-LD.
 */
export type Faq = { q: string; a: string };

export const DOG_CONSTIPATION_HOME_REMEDY_FAQS: Faq[] = [
  {
    q: "What are the best remedies for dog constipation at home?",
    a: "The most effective and safest at home remedies for dogs with mild constipation are: increasing water intake, adding plain canned pumpkin to dog's food, taking extra walks to stimulate blood flow to the gut, switching to canned food, and adding dietary fiber. Start with water and pumpkin — these are the most evidence-backed options for dogs and carry the lowest risk. [Source: PetMD, 2021]",
  },
  {
    q: "How long can a dog go without pooping before it's a problem?",
    a: "Most vets consider 48 hours without a bowel movement the threshold for concern in dogs — at that point, at home remedies should stop and a vet should be consulted. Up to 36 hours without stool in dogs that are otherwise comfortable is typically a monitoring situation, not an emergency, provided dogs are eating, drinking, and not in distress. [Source: PetMD, 2021]",
  },
  {
    q: "How much pumpkin should I give my dog for constipation?",
    a: "A general starting point is 1 tablespoon per 20 lbs of body weight once daily, mixed into dog's food. Smaller dogs (under 10 lbs) do well with 1 teaspoon. Always use 100% pure pumpkin puree — never pumpkin pie filling, which contains sugar and spices harmful to dogs. If constipation persists after 2 days, contact your veterinarian. [Source: Wedgewood Pharmacy, 2022]",
  },
  {
    q: "Is olive oil safe for a constipated dog?",
    a: "It's common internet advice, but veterinary-reviewed sources are cautious. Olive oil carries a real risk of triggering pancreatitis in susceptible dogs and can cause vomiting or diarrhea. If your dog has no history of pancreatitis and you choose to try it, limit to one small dose (1 tsp for small dogs, 1 tbsp for large dogs) mixed into dog's food — do not use repeatedly. Safer natural remedies like pumpkin and water should come first. [Source: GoodRx, 2022]",
  },
  {
    q: "Can I give my dog MiraLAX for constipation?",
    a: "Some veterinarians do prescribe polyethylene glycol 3350 (MiraLAX) for dogs, but only under veterinary direction and at vet-recommended doses. Dogs given human laxatives at incorrect doses risk severe diarrhea, dehydration, and electrolyte imbalance. Do not use human laxatives as an at home remedy for dogs without veterinary guidance. [Source: GoodRx, 2022]",
  },
  {
    q: "Can I use pumpkin pie filling instead of plain canned pumpkin?",
    a: "No. Pumpkin pie filling contains added sugar, nutmeg, and other spices that cause GI upset in dogs, and some products contain xylitol — which is toxic to dogs. Only 100% pure pumpkin puree (pumpkin should be the only ingredient on the label) is safe for dogs with constipation. [Source: WebMD, 2021]",
  },
  {
    q: "What foods cause constipation in dogs?",
    a: "Dry kibble without adequate water is the most common dietary cause of infrequent bowel movements in dogs. Cooked bones, foreign objects, large amounts of hair from grooming, and highly digestible low-fiber diets all slow transit through the dog's digestive system. Sudden changes to dog's diet also disrupt the digestive tract — transition new foods gradually over 7–10 days for healthy digestion. [Source: PetMD, 2021]",
  },
  {
    q: "Is constipation in older dogs more serious?",
    a: "Generally yes. The dog's digestive system slows naturally with age, and older dogs are more prone to chronic constipation, obstipation, and megacolon. Senior dogs with arthritis or spinal disease may also resist posturing, worsening dog's bowel movements. A single episode managed at home is usually fine; chronic constipation in older dogs warrants a vet workup rather than ongoing at home remedies. [Source: PetMD, 2021]",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function buildDogConstipationHomeRemedyFaqJsonLd(
  faqs: Faq[] = DOG_CONSTIPATION_HOME_REMEDY_FAQS,
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
 * Schema.org Article JSON-LD for the dog-constipation-home-remedy blog page.
 */
export function buildDogConstipationHomeRemedyArticleJsonLd(): Record<
  string,
  unknown
> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dog Constipation Home Remedy: 8 Safe Options with Dosages",
    description:
      "Dog constipation home remedy guide covering 8 safe options with dosages — pumpkin, hydration, olive oil, exercise — plus when to call the vet.",
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
      "@id": "https://blog.celsiusherbs.com/dog-constipation-home-remedy",
    },
  };
}
