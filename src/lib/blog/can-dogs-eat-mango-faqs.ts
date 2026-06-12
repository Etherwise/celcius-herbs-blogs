export type Faq = { q: string; a: string };

export const CAN_DOGS_EAT_MANGO_FAQS: Faq[] = [
  {
    q: "Can dogs eat mango skin?",
    a: "No. Mango skin is tough, fibrous, and difficult for dogs to digest — the most likely result is vomiting, stomach upset, or diarrhoea. Some pet-health sources also raise urushiol-related irritation concerns (similar to poison oak and poison ivy). Peel the mango fully before feeding any to your dog. [Source: Purina, 2025][Source: Chewy, 2024][Source: PetMD, 2024]",
  },
  {
    q: "Can dogs eat mango pit?",
    a: "No. The mango pit is a choking hazard and can block the dog's digestive tract. The mango seed also contains amygdalin, a cyanogenic glycoside. If your dog swallows the pit, contact your vet immediately — obstruction symptoms can develop hours later even if the dog initially seems fine. [Source: AKC, 2024][Source: Purina, 2025]",
  },
  {
    q: "Is mango good for dogs?",
    a: "Mango is good for dogs in moderation. The nutritional benefits — vitamins A, C, B6, and E plus antioxidants — make mango a genuinely nutritious treat when you feed your dog properly prepared mango flesh. The high natural sugar means it should stay an occasional sweet treat, not a daily staple. [Source: AKC, 2024][Source: Purina, 2025]",
  },
  {
    q: "Can diabetic dogs eat mango?",
    a: "Generally not recommended. Mango's high natural sugar content can destabilise blood glucose in diabetic dogs. Unless your vet specifically approves a very small amount and adjusts management accordingly, choose a lower-sugar treat. [Source: Hill's Pet Nutrition, 2024][Source: Betterpet, 2024]",
  },
  {
    q: "Can dogs eat dried mango?",
    a: "Not ideal. Dried mango is concentrated in sugar, and most commercial products contain added sugar on top of the natural concentration. The calorie and sugar load per piece is much higher than fresh mango. Feed mango fresh if you want to share with your dog. [Source: Hill's Pet Nutrition, 2024][Source: Purina, 2025]",
  },
  {
    q: "Can puppies eat mango?",
    a: "In very small amounts of peeled, pitted soft flesh, yes — but puppies have more sensitive digestive systems than adult dogs. A single small cube is enough to test tolerance. Watch closely for upset stomach or digestive upset and don't offer mango again if it causes GI issues. [Source: Purina, 2025][Source: Hill's Pet Nutrition, 2024]",
  },
  {
    q: "Is mango seed toxic to dogs?",
    a: "The mango seed contains amygdalin, a cyanogenic compound — a concern in veterinary medicine. The more immediate danger is mechanical: the mango seed is large enough to block the dog's digestive tract. Never allow your dog access to the mango pit or mango seeds. [Source: Purina, 2025][Source: AKC, 2024][Source: PetMD, 2024]",
  },
];

export function buildCanDogsEatMangoFaqJsonLd(
  faqs: Faq[] = CAN_DOGS_EAT_MANGO_FAQS,
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

export function buildCanDogsEatMangoArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can Dogs Eat Mango? Pit, Skin & Safe Serving Guide",
    description:
      "Can dogs eat mango? Yes — flesh only. Learn why the mango pit is dangerous, how much to serve by weight, and how to prep it safely.",
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
      "@id": "https://blog.celsiusherbs.com/can-dogs-eat-mango",
    },
  };
}
