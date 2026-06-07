export type Faq = { q: string; a: string };

export const DOG_FEVER_HOME_REMEDY_FAQS: Faq[] = [
  {
    q: "What is the best dog fever home remedy?",
    a: "Cool damp cloths applied to the paws, armpits, and groin area are the most widely recommended starting point — blood vessels sit close to the skin in these areas. Combine with gentle fan airflow and fresh cool water. These methods are appropriate for body temperature between 103–104°F; at 104°F or above, go to a vet immediately. [Source: PetMD, 2023; LakeCross Veterinary Hospital, 2023]",
  },
  {
    q: "Can I give my dog Tylenol or ibuprofen for fever?",
    a: "Never give your dog Tylenol, ibuprofen, or aspirin. Acetaminophen causes liver failure, methemoglobinemia, and bone marrow problems in dogs. Ibuprofen causes GI ulceration, kidney damage, and neurological effects. Aspirin causes GI bleeding and platelet dysfunction. If your dog has already ingested any of these, call ASPCA Poison Control at 888-426-4435 immediately. [Source: ASPCA Animal Poison Control, 2023; MSD Veterinary Manual, 2023]",
  },
  {
    q: "Is a warm dry nose a reliable sign that a dog has a fever?",
    a: "No — a warm or dry nose is not an accurate indicator of fever in dogs. Nose temperature and moisture fluctuate throughout the day with sleep, hydration, and environment. The only reliable way to confirm a dog's fever is to measure body temperature with a thermometer. [Source: AVMA, 2021; PetMD, 2023]",
  },
  {
    q: "How do I take my dog's temperature without a rectal thermometer?",
    a: "Pet-specific ear thermometers are the best alternative and are less stressful than rectal measurement. However, ear thermometer readings in dogs are less consistent than rectal temperatures, especially in dogs with narrow ear canals or ear infection. Any reading that concerns you should be confirmed rectally or by your vet. [Source: Journal of the American Animal Hospital Association, 2019; Cornell University College of Veterinary Medicine, 2021]",
  },
  {
    q: "My dog has a low-grade fever after vaccination — is that normal?",
    a: "Yes — a low-grade transient fever within 24–48 hours after vaccination is a common immune system response and usually self-limiting. If high fever persists more than 48 hours, or the dog exhibits severe lethargy or vomiting, contact your vet. [Source: AVMA, 2020; PetMD, 2023]",
  },
  {
    q: "At what temperature should I take my dog to the vet for a fever?",
    a: "Go immediately when your dog's body temperature reads 104°F (40°C) or higher. Also go urgently when temperature is 103°F and the dog exhibits vomiting, collapse, or severe lethargy — or when fever has lasted more than 24 hours at any level. [Source: MSD Veterinary Manual, 2023; PetMD, 2023]",
  },
  {
    q: "Can a dog recover from fever at home without going to the vet?",
    a: "A mild brief fever from a clear trigger like vaccination can sometimes resolve with monitoring and home cooling. But most fever in dogs has an underlying cause — infection, tooth infection, immune-mediated disease — that requires diagnosis. Home cooling brings temperature down temporarily but doesn't treat the underlying problem. Always consult your vet. [Source: PetMD, 2023; MSD Veterinary Manual, 2023]",
  },
  {
    q: "Is ice water safe to use as a dog fever home remedy?",
    a: "No. Ice water and ice packs applied directly to a dog's skin cause peripheral vasoconstriction — blood vessels contract, trapping heat inside the body rather than releasing it. Use cool (not cold) water to reduce fever. Veterinary heatstroke protocols specifically warn against ice-water cooling for this reason. [Source: MSD Veterinary Manual, 2023; Journal of Veterinary Emergency and Critical Care, 2020]",
  },
];

export function buildDogFeverHomeRemedyFaqJsonLd(
  faqs: Faq[] = DOG_FEVER_HOME_REMEDY_FAQS,
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

export function buildDogFeverHomeRemedyArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dog Fever Home Remedy: 5 Safe Cooling Methods",
    description:
      "Dog fever home remedy: normal temp 101–102.5°F, 5 safe cooling methods, how to take dog's temperature, and which human meds are toxic.",
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
      "@id": "https://blog.celsiusherbs.com/dog-fever-home-remedy",
    },
  };
}
