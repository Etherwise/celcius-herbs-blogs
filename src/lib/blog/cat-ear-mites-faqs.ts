/**
 * Single source of truth for Cat Ear Mites blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/CatEarMitesGuide.tsx` — renders the visual accordion.
 *  - `src/pages/cat-ear-mites.astro` — builds Schema.org FAQPage JSON-LD.
 *
 * Mirrors the cat-ear-infection pattern in `@/lib/blog/cat-ear-infection-faqs`.
 */
export type Faq = { q: string; a: string };

export const CAT_EAR_MITES_FAQS: Faq[] = [
  {
    q: "What do cat ear mites look like?",
    a: "You usually won't see the mites themselves — they're microscopic. What you'll see is their debris: thick, dry, dark brown-to-black crumbly material that looks like coffee grounds packed into the ear canal. Under a vet's otoscope, the mites can sometimes be spotted as tiny white specks moving against that dark background.",
  },
  {
    q: "How can I tell if my cat has ear mites or just dirty ears?",
    a: "The two biggest tells are itch and color. Normal wax is pale yellow-brown, small in amount, and doesn't bother your cat. Mite debris is dark, dry, crumbly, larger in volume, and comes with intense scratching and head-shaking. Because other problems can also cause dark discharge, only a microscopic ear swab confirms mites for certain.",
  },
  {
    q: "Are cat ear mites contagious to humans?",
    a: "Not in any meaningful way. Veterinary sources don't consider routine pet ear mites a real zoonotic risk — they're a pet-to-pet problem. Rare, brief skin reactions have been reported but are unusual. They are, however, highly contagious to other cats, dogs, and ferrets, so every in-contact pet should be treated together.",
  },
  {
    q: "Will cat ear mites go away on their own?",
    a: "No. Mites reproduce continuously, keeping the ear inflamed and debris-filled, and infestations don't reliably self-resolve. Leaving them untreated risks chronic ear inflammation, secondary bacterial or yeast infections, and painful complications like aural hematomas.",
  },
  {
    q: "How do you get rid of cat ear mites?",
    a: "With vet-prescribed parasite medication — usually a single-dose spot-on like selamectin or moxidectin/imidacloprid, or topical ear drops such as milbemycin or ivermectin, over a course that spans two mite life cycles (about six to eight weeks). All in-contact pets should be treated at the same time to prevent reinfestation.",
  },
  {
    q: "Can ear mites make a cat seriously ill?",
    a: "They're rarely life-threatening, but untreated infestations can cause real harm — chronic otitis, secondary bacterial or yeast infections, severe pain, aural hematomas, and permanent scarring of the ear canal. Prompt treatment prevents these complications.",
  },
  {
    q: "Are home remedies safe for cat ear mites?",
    a: "Most aren't reliable cures, and some are harmful. Mineral oil is at best an adjunct; vinegar, hydrogen peroxide, and alcohol can irritate an inflamed canal; and essential oils like tea tree are toxic to cats. The safest home step is gentle, vet-directed ear cleaning alongside prescribed medication.",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function buildCatEarMitesFaqJsonLd(
  faqs: Faq[] = CAT_EAR_MITES_FAQS,
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
 * Schema.org Article JSON-LD for the cat ear mites blog page.
 * Helps the page surface in news/article SERP features.
 */
export function buildCatEarMitesArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cat Ear Mites: Symptoms, Treatment & How to Spot Them",
    description:
      "Field guide to cat ear mites: how to spot the coffee-ground debris, tell mites from wax, treat them safely, contagion risk, and when to see a vet.",
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
      "@id": "https://blog.celsiusherbs.com/cat-ear-mites",
    },
  };
}
