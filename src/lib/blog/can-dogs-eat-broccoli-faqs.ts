export type Faq = { q: string; a: string };

export const CAN_DOGS_EAT_BROCCOLI_FAQS: Faq[] = [
  {
    q: "Can dogs eat raw broccoli?",
    a: "Yes — raw broccoli florets cut into small bite-sized pieces are safe for most healthy adult dogs. Raw retains more vitamin C but is harder on a dog's digestive system and creates more gas than lightly steamed. Never give raw broccoli stalks in large chunks — choking and blockage risk. [Source: AKC, 2022][Source: PetMD, 2023]",
  },
  {
    q: "Is broccoli toxic to dogs?",
    a: "Not at normal treat amounts. Broccoli becomes dangerous when it makes up 25% or more of a dog's daily food intake — at that level, isothiocyanates from the florets cause severe digestive issues requiring vet care. Under 10% of daily intake, dogs can eat broccoli safely. [Source: AKC, 2022]",
  },
  {
    q: "Can dogs eat broccoli stems?",
    a: "Broccoli stems are not toxic, but their tough, fibrous texture is a choking hazard and intestinal blockage risk, especially raw and in large pieces. If you want to give your dog broccoli stems, always slice into very small bite-sized pieces and steam until soft. [Source: PetMD, 2023][Source: Chewy, 2023]",
  },
  {
    q: "Can puppies eat broccoli?",
    a: "In very small amounts of lightly steamed, plain broccoli — one tiny floret to start — yes, but puppies have sensitive digestive systems and smaller body weight means the 10% daily diet threshold is reached with very little broccoli. Introduce slowly and watch for stomach upset or digestive issues. [Source: PetMD, 2023]",
  },
  {
    q: "Can dogs eat frozen broccoli?",
    a: "Yes — plain frozen broccoli with no sauces, seasoning, or additives is safe when thawed and cut into bite-sized pieces before serving. Avoid any product with added flavourings or butter. [Source: AKC, 2022][Source: Chewy, 2023]",
  },
  {
    q: "Can dogs eat broccoli and cauliflower?",
    a: "Both are cruciferous vegetables that contain isothiocyanates. Either is fine in small quantities, but avoid large amounts of both together — the total isothiocyanate load adds up and increases the risk of digestive issues. Keep total intake under 10% of daily food. [Source: AKC, 2022][Source: Purina, 2023]",
  },
  {
    q: "How much broccoli is too much for a dog?",
    a: "More than 10% of daily food intake risks stomach upset and digestive issues. More than 25% is considered toxic due to isothiocyanates. For a small dog, this is a surprisingly small volume — a few too many florets can push past 10%. Keep small portions and offer broccoli as an occasional treat, not a daily staple. [Source: AKC, 2022]",
  },
];

export function buildCanDogsEatBroccoliFaqJsonLd(
  faqs: Faq[] = CAN_DOGS_EAT_BROCCOLI_FAQS,
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

export function buildCanDogsEatBroccoliArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can Dogs Eat Broccoli? Isothiocyanate Risk & Serving Guide",
    description:
      "Can dogs eat broccoli? Yes — plain and in small amounts. Learn the isothiocyanate risk in florets, safe serving sizes by weight, and raw vs cooked.",
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
      "@id": "https://blog.celsiusherbs.com/can-dogs-eat-broccoli",
    },
  };
}
