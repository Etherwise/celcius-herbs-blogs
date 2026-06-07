export type Faq = { q: string; a: string };

export const NATURAL_DEWORMER_FOR_DOGS_FAQS: Faq[] = [
  {
    q: "What is the best natural dewormer for dogs?",
    a: "Pumpkin seeds are the most defensible natural dewormer for dogs — safe, widely available, and backed by in vitro antiparasitic evidence for the active compound cucurbitin. They are not a replacement for a conventional dewormer when a worm infestation is confirmed, but are a reasonable supportive addition to a dog's diet during treatment. Always get a fecal test first to confirm which type of worm you're treating. [Source: Atlas Pet Hospital, 2023]",
  },
  {
    q: "Can dogs get worms from eating grass?",
    a: "Eating grass itself doesn't transmit worms, but the soil on grass can. Roundworm and whipworm eggs survive in soil for months to years — worms in dogs are acquired by sniffing and licking contaminated ground. Keeping dogs out of areas with known fecal contamination is more effective than restricting grass eating. [Source: MSD Veterinary Manual, 2020]",
  },
  {
    q: "How long does natural deworming take compared to conventional?",
    a: "Conventional dewormers like pyrantel pamoate clear most roundworm and hookworm infections in 1–3 days. Natural worm treatments have no established treatment timeline because there are no controlled trials showing they reliably clear worms in dogs. Run a follow-up fecal test 2–3 weeks after any natural deworming to confirm results. [Source: Atlas Pet Hospital, 2023]",
  },
  {
    q: "Are natural dewormers safe for puppies?",
    a: "Pumpkin seeds appear safe. Most other natural worm treatments — especially wormwood and garlic — are not appropriate for a puppy's body. Puppies are at highest risk for dangerous hookworm anemia. Any puppy under 8 weeks with a suspected worm infestation should see a vet for prescription treatment, not natural remedies. [Source: MSD Veterinary Manual, 2020; Atlas Pet Hospital, 2023]",
  },
  {
    q: "Can humans catch worms from their dogs?",
    a: "Yes. Roundworm (Toxocara canis) can cause visceral larva migrans in humans, particularly in children who ingest eggs from contaminated soil. Hookworm larvae can penetrate human skin (cutaneous larva migrans). Regular handwashing after handling dog stool and keeping the yard clean reduces transmission significantly. [Source: MSD Veterinary Manual, 2020]",
  },
  {
    q: "How often should dogs be dewormed?",
    a: "The Companion Animal Parasite Council recommends year-round broad-spectrum prevention for most dogs. Puppies should be dewormed at 2, 4, 6, and 8 weeks. Adult dogs benefit from a fecal test 1–2 times per year. Pregnant or lactating dogs should be dewormed under veterinary guidance — roundworms in pregnant or lactating dogs transfer directly to puppies. [Source: CAPC, 2022]",
  },
  {
    q: "What does worm-infected dog stool look like?",
    a: "It varies by worm type. Roundworms may produce spaghetti-like white worms in vomit or stool. Tapeworms leave rice-grain segments near the anus. Hookworm stool is dark and tarry with no visible worms. Whipworm stool has mucus and bright blood. Many worm infestations in dogs produce no visible sign in stool at all, which is why fecal testing is essential. [Source: MSD Veterinary Manual, 2020; VCA Hospitals, 2022]",
  },
  {
    q: "Is pumpkin seed proven to deworm dogs?",
    a: "Not in clinical trials in dogs. The evidence is based on in vitro studies showing cucurbitin can paralyze certain worms in a lab dish and extrapolation from livestock data. Integrative vets often recommend pumpkin seeds as a safe anti-worm food supplement alongside conventional treatment. Relying on pumpkin seeds alone to clear a confirmed worm infestation in a dog's body is not supported by trial evidence. [Source: Atlas Pet Hospital, 2023; Veterinary Evidence, 2016]",
  },
];

export function buildNaturalDewormerForDogsFaqJsonLd(
  faqs: Faq[] = NATURAL_DEWORMER_FOR_DOGS_FAQS,
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

export function buildNaturalDewormerForDogsArticleJsonLd(): Record<
  string,
  unknown
> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Natural Dewormer for Dogs: 7 Remedies Rated",
    description:
      "Natural dewormer for dogs — pumpkin seeds, garlic safety truth, diatomaceous earth, and 2 Ayurvedic herbs with NIH research. Evidence ratings for each.",
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
      "@id": "https://blog.celsiusherbs.com/natural-dewormer-for-dogs",
    },
  };
}
