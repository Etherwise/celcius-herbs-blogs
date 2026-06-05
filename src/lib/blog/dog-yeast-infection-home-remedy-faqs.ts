/**
 * Single source of truth for Dog Yeast Infection Home Remedy blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/DogYeastInfectionHomeRemedyGuide.tsx` — renders the visual accordion.
 *  - `src/pages/dog-yeast-infection-home-remedy.astro` — builds Schema.org FAQPage JSON-LD.
 */
export type Faq = { q: string; a: string };

export const DOG_YEAST_INFECTION_HOME_REMEDY_FAQS: Faq[] = [
  {
    q: "How long does a dog yeast infection take to clear with home remedies?",
    a: "Mild skin yeast infections on intact skin typically show improvement within 7–14 days of consistent home treatment (ACV washes, antifungal shampoo, dietary changes). [Source: Small Door Veterinary, 2022] If there's no meaningful improvement in two weeks, stop home treatment and see a vet — the infection may have a secondary bacterial component or involve deeper tissue requiring prescription antifungals.",
  },
  {
    q: "Can apple cider vinegar make a dog's yeast infection worse?",
    a: "Yes, in two scenarios. First, if used on raw, abraded, or ulcerated irritated skin, ACV causes pain and further inflammation. [Source: The Spruce Pets, 2022] Second, if applied too frequently without letting the skin dry between applications, the residual moisture in skin folds creates the moist environments where yeast thrives. Always let affected areas air-dry fully after application, and never use on broken skin.",
  },
  {
    q: "Is yogurt good for dogs with yeast infections?",
    a: "Plain, unsweetened yogurt or kefir provides beneficial Lactobacillus bacteria that can support gut and skin microbiome health. [Source: The Honest Kitchen, 2016] It's a reasonable add-in, not a standalone treatment. Never use flavoured yogurts or any product containing xylitol. For a dedicated probiotic effect, a dog-specific probiotic supplement with standardised Lactobacillus acidophilus counts is more reliable than yogurt.",
  },
  {
    q: "What dog breeds are most prone to yeast infections?",
    a: "Breeds with floppy ears (Cocker Spaniels, Basset Hounds, Labrador Retrievers), heavy skin folds (Bulldogs, Shar Peis, Pugs), or known allergy predispositions (Westies, Golden Retrievers, Boxers, German Shepherds) are significantly more prone to developing yeast infections and recurrent yeast infections. [Source: MSD Veterinary Manual, 2023] These breeds typically need more active preventive management — regular ear cleaning, fold hygiene, and dietary omega-3 supplementation.",
  },
  {
    q: "Is a dog yeast infection contagious to humans?",
    a: "Malassezia pachydermatis can theoretically be transmitted from dogs to immunocompromised humans, but it is not a typical zoonotic concern for healthy adults. [Source: MSD Veterinary Manual, 2023] Normal hygiene (washing hands after handling an infected dog) is adequate precaution for healthy households. Immunocompromised individuals should consult their physician.",
  },
  {
    q: "What's the difference between a dog yeast infection and bacterial skin infection?",
    a: "Yeast infections typically produce a musty, rancid, or corn-chip odour with greasy or waxy skin changes. Bacterial infections more often produce a sharper, foul smell with pustules, crusting, or pus. [Source: MSD Veterinary Manual, 2023] Mixed infections (yeast and bacteria together) are common and require prescription treatment — a vet can distinguish the two with a simple skin cytology test.",
  },
  {
    q: "Can I use human antifungal cream on my dog?",
    a: "Some OTC human antifungals (miconazole, clotrimazole) are used in veterinary practice and may be safe for small, localised spots on dog's skin. [Source: MSD Veterinary Manual, 2023] The main risks are that dogs lick the area (some formulations are not safe for ingestion) and that incorrect diagnosis leads to treating yeast infections when bacteria or ear mites are the actual problem. Always confirm the diagnosis before treating, and ask your vet before applying human products.",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function buildDogYeastInfectionHomeRemedyFaqJsonLd(
  faqs: Faq[] = DOG_YEAST_INFECTION_HOME_REMEDY_FAQS,
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
 * Schema.org Article JSON-LD for the dog-yeast-infection-home-remedy blog page.
 */
export function buildDogYeastInfectionHomeRemedyArticleJsonLd(): Record<
  string,
  unknown
> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dog Yeast Infection Home Remedy: 7 Natural Treatments",
    description:
      "Dog yeast infection home remedy guide: ACV protocol with dilution ratios, coconut oil, turmeric, neem, antifungal diet, and prevention tips.",
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
      "@id": "https://blog.celsiusherbs.com/dog-yeast-infection-home-remedy",
    },
  };
}
