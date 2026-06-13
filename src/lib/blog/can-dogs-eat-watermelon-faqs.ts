export type Faq = { q: string; a: string };

export const CAN_DOGS_EAT_WATERMELON_FAQS: Faq[] = [
  {
    q: "Can dogs eat watermelon seeds?",
    a: "No — always remove seeds before serving watermelon to your dog. Both black seeds and firm white seeds pose an intestinal blockage risk, especially in small dogs or when eaten in quantity. Seedless watermelon varieties still have undeveloped white seeds — check and remove any firm ones. [Source: AKC, 2022][Source: PetMD, 2023]",
  },
  {
    q: "Can dogs eat watermelon rind?",
    a: "No — the rind is tough, fibrous, and poorly digestible. Eating watermelon rind causes stomach upset (vomiting, diarrhoea, gas) and can cause intestinal obstruction in small dogs. Feed only the soft red or yellow flesh with all rind and seeds removed. [Source: AKC, 2022][Source: PetMD, 2023][Source: Chewy, 2024]",
  },
  {
    q: "Can puppies eat watermelon?",
    a: "Yes, with extra care — one or two tiny seedless, rind-free bite-sized cubes to start. Puppies have more sensitive digestive systems. Introduce slowly, supervise closely, and don't let watermelon displace a complete and balanced puppy diet. [Source: Hill's Pet Nutrition, 2022][Source: MSD Veterinary Manual, 2022]",
  },
  {
    q: "Can diabetic dogs eat watermelon?",
    a: "Only with veterinary guidance. Watermelon contains natural sugars (~6 g/100 g) that can affect blood sugar levels in diabetic dogs. Some vets allow very small portions factored into the overall diet plan; others advise avoiding sugary fruit entirely. Consult your vet before feeding any fruit to a diabetic dog. [Source: MSD Veterinary Manual, 2022][Source: PetMD, 2023]",
  },
  {
    q: "Is watermelon good for dogs?",
    a: "Yes — when prepared correctly. Watermelon is about 92% water, contains lycopene antioxidants, vitamins A, B6, and C, and supports a healthy immune system as part of a balanced diet. It's one of the better dog-safe fruits as an occasional, low-calorie treat. [Source: AKC, 2022][Source: USDA FoodData Central, 2019][Source: PetMD, 2023]",
  },
  {
    q: "How much watermelon can a dog eat per day?",
    a: "A few small cubes within the 10% treat rule — 1–2 cubes for tiny dogs under 5 kg, 2–4 for small dogs, 4–6 for medium dogs, and up to 8–12 for large dogs, a few times per week. Always start with a few cubes and increase only if your dog tolerates it well. [Source: Chewy, 2024][Source: PetMD, 2023]",
  },
  {
    q: "Can dogs eat frozen watermelon?",
    a: "Yes — frozen watermelon chunks (seedless, rind-free) are a safe and popular refreshing summer treat. Ensure the pieces are bite-sized and supervise your dog initially to confirm they chew rather than swallow whole. [Source: AKC, 2022][Source: PetMD, 2023]",
  },
];

export function buildCanDogsEatWatermelonFaqJsonLd(
  faqs: Faq[] = CAN_DOGS_EAT_WATERMELON_FAQS,
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

export function buildCanDogsEatWatermelonArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can Dogs Eat Watermelon? Seeds, Rind & Serving Guide",
    description:
      "Can dogs eat watermelon? Yes — flesh only. Learn why seeds cause blockages, why rind upsets digestion, hydration benefits, and safe serving sizes.",
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
      "@id": "https://blog.celsiusherbs.com/can-dogs-eat-watermelon",
    },
  };
}
