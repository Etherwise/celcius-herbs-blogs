/**
 * Single source of truth for Dog Acid Reflux blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/DogAcidRefluxHomeRemedyGuide.tsx` — renders the accordion.
 *  - `src/pages/dog-acid-reflux-home-remedy.astro` — builds FAQPage JSON-LD.
 */
export type Faq = { q: string; a: string };

export const DOG_ACID_REFLUX_HOME_REMEDY_FAQS: Faq[] = [
  {
    q: "What can I give my dog for acid reflux at home?",
    a: "The most effective home measures are smaller, more frequent low-fat meals, elevated feeding, and a bland diet of boiled chicken and rice during flares. A small bedtime snack helps with nighttime reflux by keeping stomach acid in check. Avoid human antacids or proton pump inhibitors unless your vet directs the dose.",
  },
  {
    q: "How do I know if it's acid reflux or just vomiting?",
    a: "Regurgitation (acid reflux) is passive and effortless — undigested food or foam simply comes back up. Vomiting is active, with drooling, retching, and heaving first. Chronic vomiting points to a deeper digestive system problem. Describing which one you see helps your vet narrow the cause.",
  },
  {
    q: "What should I feed a dog with acid reflux?",
    a: "A low-fat, moderate-protein diet in small frequent meals. During flares, plain boiled chicken or turkey with white rice and a little plain pumpkin is gentle on the digestive tract. Avoid high-fat kibble and fatty treats, which are common triggers; rule out food allergies with your vet.",
  },
  {
    q: "Why does my dog throw up yellow bile in the morning?",
    a: "That's classic empty-stomach reflux — stomach acid and bile build up overnight and irritate the stomach. A small low-fat snack before bed usually stops it by keeping the stomach from sitting empty too long.",
  },
  {
    q: "Can acid reflux in dogs go away on its own?",
    a: "Mild, occasional reflux often improves with feeding changes alone. But chronic gastroesophageal reflux disease can damage the esophagus over time and needs veterinary treatment — don't wait it out if symptoms are frequent or your dog seems in pain.",
  },
  {
    q: "Is dog acid reflux an emergency?",
    a: "Usually not, but seek care promptly if there's breathing difficulty, blood, severe pain, repeated unproductive retching, or your dog stops eating — these can signal aspiration, a hiatal hernia, a foreign body, or a more serious condition.",
  },
  {
    q: "Do certain breeds get acid reflux more?",
    a: "Yes — brachycephalic dog breeds like Bulldogs, French Bulldogs, and Pugs are predisposed due to their anatomy, which raises the risk of hiatal hernia, and overweight dogs of any breed are at higher risk because of increased abdominal pressure.",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 */
export function buildDogAcidRefluxHomeRemedyFaqJsonLd(
  faqs: Faq[] = DOG_ACID_REFLUX_HOME_REMEDY_FAQS,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Schema.org Article JSON-LD for the dog acid reflux blog page.
 */
export function buildDogAcidRefluxHomeRemedyArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dog Acid Reflux: Symptoms, Home Remedies & When to Worry",
    description:
      "Guide to dog acid reflux: symptoms, causes, home remedies and feeding changes that help, and when to see a vet.",
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
      "@id": "https://blog.celsiusherbs.com/dog-acid-reflux-home-remedy",
    },
  };
}
