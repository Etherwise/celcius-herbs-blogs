/**
 * Single source of truth for Cat Ear Infection Pictures blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/CatEarInfectionPicturesGuide.tsx` — renders the visual accordion.
 *  - `src/pages/cat-ear-infection-pictures.astro` — builds Schema.org FAQPage JSON-LD.
 */
export type Faq = { q: string; a: string };

export const CAT_EAR_INFECTION_PICTURES_FAQS: Faq[] = [
  {
    q: "What does a cat ear infection look like in pictures?",
    a: "In early ear infections in cats, cat's ears show slight reddening of the ear canal and increased wax (light brown or tan). Bacterial ear infections show yellow or cream pus-like ear discharge and bright red inflamed skin. Yeast ear infections look like dark brown coffee-ground debris with a musty smell. Cat ear mites look like dry, dark crumbly debris in both cat's ears with little odor. [Source: VCA Hospitals, 2021; Merck Veterinary Manual, 2023]",
  },
  {
    q: "How can I tell from pictures if my cat has bacterial or yeast ear infection?",
    a: "Bacterial ear infections in cats show wet, pus-like yellow to green ear discharge with a foul, rotten smell. Yeast ear infections in cats show dark brown or black waxy debris with a sweet, musty odor. The smell is the most reliable home distinguisher — though a vet cytology is needed for accurate diagnosis. [Source: VCA Hospitals, 2021; Vetster, 2022]",
  },
  {
    q: "Do cat ear infections clear on their own?",
    a: "Rarely. Ear infections in cats require treatment — prescription antibiotics, antifungals, or cat ear mite medication depending on the underlying cause. Ear infections left untreated progress from outer ear infections to middle ear infections and can cause permanent hearing loss. [Source: Merck Veterinary Manual, 2023]",
  },
  {
    q: "Can I use human ear drops on my cat?",
    a: "No. Human ear drops are formulated for a different ear canal pH and anatomy. Many contain ingredients toxic to cats. Always use prescribed ear drops formulated for cat's ears rather than human products. [Source: VCA Hospitals, 2021]",
  },
  {
    q: "How do I know if it's cat ear mites or an ear infection from looking at pictures?",
    a: "Cat ear mites tend to produce dry, dark crumbly debris (like coffee grounds) in both cat's ears, with little odor. Ear infections in cats produce wet, sticky, or waxy ear discharge — often in one ear first — with a noticeable smell. Mixed presentation is common because cat ear mites trigger secondary infections. A vet is needed for accurate diagnosis. [Source: VCA Hospitals, 2021; Catster, 2023]",
  },
  {
    q: "What is the black stuff in my cat's ears?",
    a: "Dark black or dark brown material in cat's ears is most commonly cat ear mites (Otodectes cynotis) or a yeast infection. Cat ear mite debris is typically drier and crumblier, while yeast infection debris is greasier and waxy. A vet examination is the only way to tell them apart definitively. [Source: Cat Fanciers' Association, 2017; Purina, 2022]",
  },
  {
    q: "Is it safe to clean my cat's ears at home?",
    a: "Gentle cleaning of the outer ear with a vet-approved cleanser is generally safe for maintenance. To clean your cat's ears properly, wipe only the outer ear with a cotton ball — never insert swabs into the ear canal. If cat's ears show redness, ear discharge, or your cat shows discomfort, see a vet before cleaning, as a damaged ear canal or ruptured eardrum can be worsened by home cleaning. [Source: VCA Hospitals, 2021; Merck Veterinary Manual, 2023]",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 */
export function buildCatEarInfectionPicturesFaqJsonLd(
  faqs: Faq[] = CAT_EAR_INFECTION_PICTURES_FAQS,
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
 * Schema.org Article JSON-LD for the cat-ear-infection-pictures blog page.
 */
export function buildCatEarInfectionPicturesArticleJsonLd(): Record<
  string,
  unknown
> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cat Ear Infection Pictures: Bacterial vs Yeast (Visual Guide)",
    description:
      "Cat ear infection pictures: bacterial vs yeast vs ear mites with real photos, discharge color chart, severity stages, and vet red-flags.",
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
      "@id": "https://blog.celsiusherbs.com/cat-ear-infection-pictures",
    },
  };
}
