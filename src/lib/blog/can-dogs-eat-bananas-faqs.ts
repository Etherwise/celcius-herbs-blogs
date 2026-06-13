export type Faq = { q: string; a: string };

export const CAN_DOGS_EAT_BANANAS_FAQS: Faq[] = [
  {
    q: "Can dogs eat banana peels?",
    a: "Not recommended. Banana peels are not toxic to dogs, but they are tough, fibrous, and hard to digest — the most likely outcomes are vomiting, diarrhoea, or intestinal blockage. Always peel the banana fully and discard the peel out of your dog's reach. [Source: AKC, 2021][Source: Chewy, 2022][Source: PetMD, 2023]",
  },
  {
    q: "Are bananas good for dogs?",
    a: "Yes, in moderation. Bananas provide potassium, vitamin B6, magnesium, and fibre — genuine health benefits. The high natural sugar (~12 g per 100 g) means banana should be an occasional treat, not a daily staple. [Source: AKC, 2021][Source: USDA FoodData Central, 2019]",
  },
  {
    q: "Can puppies eat bananas?",
    a: "In very small amounts of peeled, finely sliced ripe banana, yes — but puppies have more sensitive digestive systems than adult dogs. A single small piece is enough to test tolerance. Watch for digestive upset or soft stool and offer even less than the adult serving guide. [Source: PetMD, 2023][Source: VCA Hospitals, 2022]",
  },
  {
    q: "Can diabetic dogs eat bananas?",
    a: "Generally not recommended. Banana's natural sugar can cause blood glucose spikes in diabetic dogs. If your vet approves feeding bananas to your dog at all, the amount should be extremely small and consistent. [Source: VCA Hospitals, 2022][Source: PetMD, 2023]",
  },
  {
    q: "Can dogs eat banana bread?",
    a: "Avoid it. Most banana bread contains added sugar, fat, and sometimes ingredients toxic to dogs like chocolate or xylitol. Even plain banana bread is calorie-dense — the risks outweigh the benefit. [Source: PetMD, 2023][Source: ASPCA, 2022]",
  },
  {
    q: "Can dogs eat dried bananas or banana chips?",
    a: "Not ideal. Commercial banana chips concentrate natural sugars and usually add oil and more sugar on top. Dogs eat banana chips at a far higher sugar load than fresh banana — stick to fresh or plain frozen banana. [Source: PetMD, 2023][Source: VCA Hospitals, 2022]",
  },
  {
    q: "Are bananas good for dogs with upset stomachs?",
    a: "Not a standard recommendation. Bananas' fibre and sugar can worsen diarrhoea in some dogs. For dogs with vomiting or diarrhoea, follow your vet's dietary guidance — usually a bland diet — rather than self-prescribing fruit. [Source: VCA Hospitals, 2022][Source: MSD Veterinary Manual, 2023]",
  },
];

export function buildCanDogsEatBananasFaqJsonLd(
  faqs: Faq[] = CAN_DOGS_EAT_BANANAS_FAQS,
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

export function buildCanDogsEatBananasArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can Dogs Eat Bananas? Peel, Portions & Frozen Treats Guide",
    description:
      "Can dogs eat bananas? Yes — peeled and portioned. Learn the potassium benefits, peel risks, serving sizes by weight, and a frozen banana treat recipe.",
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
      "@id": "https://blog.celsiusherbs.com/can-dogs-eat-bananas",
    },
  };
}
