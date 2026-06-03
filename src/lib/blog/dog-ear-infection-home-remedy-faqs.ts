/**
 * Single source of truth for the Dog Ear Infection Home Remedy blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/DogEarInfectionHomeRemedyGuide.tsx` — renders the accordion.
 *  - `src/pages/dog-ear-infection-home-remedy.astro` — builds Schema.org JSON-LD.
 *
 * Mirrors the cat-ear-infection FAQ module.
 */
export type Faq = { q: string; a: string };

export const DOG_EAR_INFECTION_HOME_REMEDY_FAQS: Faq[] = [
  {
    q: "What is the best home remedy for a dog ear infection?",
    a: "The best-evidenced at-home step is gentle ear cleaning with a veterinary-formulated cleaner, not DIY mixtures. For an active, painful infection, the genuinely 'best' move is a vet visit for a proper diagnosis — only a vet can tell whether you're dealing with yeast, bacteria, or both, and that determines the right treatment.",
  },
  {
    q: "Can I use apple cider vinegar for my dog's ear infection?",
    a: "Only with great caution, and never on red, raw, or painful ears. Diluted apple cider vinegar is sometimes used as an acidic rinse to discourage yeast, but it can sting and worsen irritation, and there's no robust clinical evidence it safely treats an established ear infection in dogs.",
  },
  {
    q: "Is coconut oil safe for a dog ear yeast infection?",
    a: "Coconut oil may soothe intact skin, but it won't treat the underlying yeast in your dog's ears and can trap moisture that actually feeds the overgrowth. Use it only on the outer ear, if at all — and never on broken skin or deep in the ear canal without veterinary direction.",
  },
  {
    q: "Should I use hydrogen peroxide or cotton swabs in my dog's ears?",
    a: "No to both. Veterinarians discourage hydrogen peroxide because it damages healthy ear tissue and is irritating, and cotton swabs push debris deeper into the ear canal and risk damaging the eardrum. Wipe only the visible areas with a cotton ball or gauze instead.",
  },
  {
    q: "How can I tell if it's a yeast or bacterial dog ear infection?",
    a: "You usually can't by sight alone. Yeast infections often smell 'yeasty' with brown waxy discharge, while bacterial infections tend to be more painful with thick yellow-green pus — but only a vet's cytology confirms which organism is involved, and many chronic cases are both at once.",
  },
  {
    q: "How do I keep my dog's ears clean to prevent infections?",
    a: "Check your dog's ears weekly, dry them after baths and swims, and do gentle ear cleaning with a vet-recommended cleaner on a regular schedule. Address underlying allergies and your dog's diet to reduce the inflammation that drives recurrent ear infections.",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 */
export function buildDogEarInfectionHomeRemedyFaqJsonLd(
  faqs: Faq[] = DOG_EAR_INFECTION_HOME_REMEDY_FAQS,
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
 * Schema.org Article JSON-LD for the dog ear infection home remedy page.
 */
export function buildDogEarInfectionHomeRemedyArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dog Ear Infection Home Remedy: What's Safe & What Works",
    description:
      "Most dog ear infection home remedies are unproven or risky. What's safe at home, what vets warn against, and when your dog needs a vet.",
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
      "@id": "https://blog.celsiusherbs.com/dog-ear-infection-home-remedy",
    },
  };
}
