export type Faq = { q: string; a: string };

export const CAN_DOGS_EAT_BLUEBERRIES_FAQS: Faq[] = [
  {
    q: "Are blueberries toxic to dogs?",
    a: "No — blueberries are non-toxic to dogs and listed as safe by PetMD, Purina, and Hill's Pet Nutrition. The risks are choking (especially for small dogs with frozen berries) and digestive upset from too many blueberries — not toxicity. [Source: Purina, 2024][Source: PetMD, 2024]",
  },
  {
    q: "Can dogs eat frozen blueberries?",
    a: "Yes — plain, unsweetened frozen blueberries are safe for medium and large dogs. For small and toy breeds, thaw first or halve them as the firmer texture increases choking hazard risk. Never use frozen blueberry products with added sugar or flavourings. [Source: PetMD, 2024][Source: Hill's Pet Nutrition, 2024]",
  },
  {
    q: "Can puppies eat blueberries?",
    a: "Yes, in very small amounts. A few blueberries, halved or mashed, is appropriate for most puppies. Puppies have smaller airways and more sensitive digestive systems — supervise closely and introduce slowly to avoid digestive upset or choking hazard. [Source: PetMD, 2024][Source: Animal Clinic of Milford, 2024]",
  },
  {
    q: "Can diabetic dogs eat blueberries?",
    a: "Not without veterinary input. Blueberries contain natural sugars (~10 g/100 g) that need to be counted within a diabetic dog's carbohydrate plan. Feeding blueberries to dogs with diabetes requires vet approval and careful monitoring. [Source: MSD Veterinary Manual, 2024][Source: PetMD, 2024]",
  },
  {
    q: "Can dogs eat blueberry muffins or blueberry-flavoured treats?",
    a: "Blueberry muffins contain added sugar, flour, fat, and sometimes raisins or xylitol — all harmful to dogs. Most blueberry-flavoured dog treats with added sweeteners are also problematic. Stick to plain, fresh or frozen blueberries. [Source: PetMD, 2024][Source: Chewy, 2024]",
  },
  {
    q: "Are wild blueberries safe for dogs?",
    a: "Plain, clean wild blueberries are generally as safe as cultivated ones. Be cautious with unidentified wild berries — some similar-looking berries are toxic to dogs. If unsure, store-bought blueberries are the safer choice. [Source: PetMD, 2024][Source: Chewy, 2024]",
  },
  {
    q: "How many blueberries per day for a dog?",
    a: "2–4 for small dogs under 10 kg, 5–10 for medium dogs (10–25 kg), and 10–15 for large dogs over 25 kg — all within the 10% treat rule. Because blueberries are low in calories, the practical limit comes from natural sugars and fibre before the calorie ceiling. [Source: Hill's Pet Nutrition, 2024][Source: PetMD, 2024]",
  },
];

export function buildCanDogsEatBlueberriesFaqJsonLd(
  faqs: Faq[] = CAN_DOGS_EAT_BLUEBERRIES_FAQS,
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

export function buildCanDogsEatBlueberriesArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can Dogs Eat Blueberries? Antioxidants & Safe Serving Guide",
    description:
      "Can dogs eat blueberries? Yes — low-calorie and antioxidant-rich. Learn anthocyanins, safe serving sizes by weight, frozen vs fresh, and choking risks.",
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
      "@id": "https://blog.celsiusherbs.com/can-dogs-eat-blueberries",
    },
  };
}
