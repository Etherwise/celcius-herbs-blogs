export type Faq = { q: string; a: string };

export const CAN_DOGS_EAT_PINEAPPLE_FAQS: Faq[] = [
  {
    q: "Can dogs eat pineapple core?",
    a: "No. The pineapple core is fibrous and very tough — a genuine choking hazard. In smaller dogs, a large piece of pineapple core can act as a GI foreign body requiring surgical removal. Remove the entire pineapple core before serving and discard it. [Source: Chewy, 2023][Source: MSD Veterinary Manual, 2020]",
  },
  {
    q: "Can diabetic dogs eat pineapple?",
    a: "Most veterinary sources advise against pineapple for dogs with diabetes because the natural sugar content can raise blood glucose. Too much sugar from any treat is a concern for diabetic dogs. Unless your vet specifically clears a small amount, choose a lower-sugar dog treat instead. [Source: Hill's Pet Nutrition, 2022][Source: Purina, 2020]",
  },
  {
    q: "Does pineapple stop dogs from eating poop?",
    a: "No reliable evidence supports this. The idea is that bromelain makes the dog's poop taste bad, stopping dogs from eating poop. But making the dog's poop taste bad through diet changes hasn't been proven in controlled trials, and major veterinary organisations don't endorse pineapple for this purpose. Managing coprophagia reliably means environmental control, training, and ruling out underlying causes — not fruit. [Source: AKC, 2021][Source: MSD Veterinary Manual, 2020]",
  },
  {
    q: "Can dogs eat pineapple cake?",
    a: "No. Even though fresh pineapple for dogs is generally safe in small plain amounts, pineapple cake is not. Pineapple cake typically contains large amounts of sugar, butter, and flour. Some recipes also include nutmeg or xylitol, both of which are toxic to dogs. Dogs should only eat pineapple as a plain, fresh fruit — never as part of baked goods.",
  },
  {
    q: "Can puppies eat pineapple?",
    a: "Puppies have more sensitive digestive systems and specific nutrient requirements. Because pineapple is high in natural sugar and acidity, most sources recommend avoiding it in young puppies or offering only a very small bite-sized piece occasionally, watching for upset stomach. It should never displace complete puppy food. [Source: MSD Veterinary Manual, 2020][Source: Hill's Pet Nutrition, 2022]",
  },
  {
    q: "Is frozen pineapple safe for dogs?",
    a: "Yes. Dogs can eat frozen pineapple safely when it's fresh pineapple that has been peeled, cored, cut into small bite-sized pieces, and frozen with no added sugar. Frozen pineapple is harder than fresh, so use smaller pieces and watch closely for a choking hazard. Quantity limits are the same as for fresh fruit. [Source: Chewy, 2023][Source: Jinx, 2021]",
  },
  {
    q: "What happens if a dog eats too much pineapple?",
    a: "Too much pineapple causes GI upset: repeated vomiting, diarrhea, an upset stomach, excess gas, or abdominal discomfort. If your dog consumed the pineapple core or skin and shows persistent vomiting, loss of appetite, or can't pass stool after 24 hours, contact your vet urgently — those are signs of a possible GI obstruction. [Source: AKC, 2021][Source: MSD Veterinary Manual, 2020]",
  },
];

export function buildCanDogsEatPineappleFaqJsonLd(
  faqs: Faq[] = CAN_DOGS_EAT_PINEAPPLE_FAQS,
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

export function buildCanDogsEatPineappleArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can Dogs Eat Pineapple? Safe Serving Guide",
    description:
      "Can dogs eat pineapple? Yes — in small amounts. Learn safe serving sizes, which parts to avoid, and why canned pineapple is risky for dogs.",
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
      "@id": "https://blog.celsiusherbs.com/can-dogs-eat-pineapple",
    },
  };
}
