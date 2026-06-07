export type Faq = { q: string; a: string };

export const HOME_REMEDIES_FOR_DOG_ALLERGIES_FAQS: Faq[] = [
  {
    q: "Can home remedies for dog allergies completely cure the problem?",
    a: "No. Allergies are an immune system condition — once sensitization is established, it is permanent. Home remedies can reduce symptoms, improve skin barrier health, and in the case of elimination diets, remove the trigger entirely for food-allergic dogs. For dogs with environmental or chronic allergies, they manage symptoms; they don't reset immune memory. [Source: AVMA, 2021]",
  },
  {
    q: "How quickly does an oatmeal bath help a dog with allergies?",
    a: "Most itchy dogs show some relief within 20–30 minutes of a 10–15 minute soak. The anti-itch effect from avenanthramides is relatively immediate on contact. The effect doesn't last more than 24–48 hours, so oatmeal baths are a short-term comfort measure, not a standalone treatment for chronic allergies. [Source: Journal of Drugs in Dermatology, 2015]",
  },
  {
    q: "Is it safe to give a dog quercetin every day?",
    a: "Short-term daily use at the holistic dosing range (50–100 mg per 10 lb) appears to be well-tolerated in most dogs based on veterinary practitioner experience, but formal long-term safety studies don't exist. Quercetin's anti-inflammatory properties are most relevant for mild seasonal allergies. Always discuss with your vet before starting, especially if your dog is on other medications. [Source: Pharmacological Reports, 2016]",
  },
  {
    q: "What provides the fastest itch relief for a dog with allergies?",
    a: "Prescription medications — oclacitinib (Apoquel) or lokivetmab (Cytopoint) — are the most effective treatment options for rapid allergy symptom control, often within hours. Among home remedies, an oatmeal soak with cool water gives the quickest relief for irritated skin. Cool water itself reduces histamine release in surface skin vessels. [Source: International Committee on Allergic Diseases of Animals, 2015]",
  },
  {
    q: "How do I know if my dog has food allergies versus environmental allergies?",
    a: "Seasonality is the key signal. Environmental allergens cause allergy symptoms that start or worsen in spring/summer (pollens) or year-round with dust mites. Food allergies cause non-seasonal itchy skin consistent regardless of time of year. Persistent ear infections alongside non-seasonal itch strongly suggest food allergy. A dietary elimination trial is the only way to confirm a dog's allergies are food-driven. [Source: WSAVA, 2021]",
  },
  {
    q: "Is apple cider vinegar safe to put on a dog's skin?",
    a: "Diluted (1:2 or 1:3 with water), it is generally safe for intact, non-broken skin. Never apply to open sores, raw irritated skin, or inside skin folds — it will sting and worsen allergy symptoms. There is no strong veterinary evidence supporting it as an effective treatment for skin allergies. Discontinue if you observe any worsening. [Source: AVMA, 2021]",
  },
  {
    q: "Can dogs outgrow their allergies?",
    a: "Environmental and chronic allergies rarely disappear entirely, though severity can fluctuate over time. Some dogs improve with age; others worsen as sensitization broadens to more environmental allergens. Food allergies can sometimes resolve if the offending protein is avoided long-term — but this is not predictable. [Source: MSD Veterinary Manual, 2020]",
  },
  {
    q: "Which human antihistamines are safe for dogs?",
    a: "Diphenhydramine (Benadryl) is the most commonly used, at roughly 1 mg/kg every 8–12 hours. Loratadine (Claritin) and cetirizine (Zyrtec, plain formulation only) are also used. None work as reliably in dogs as in humans for controlling allergic reactions. Always confirm the dose and formulation with your vet. Avoid products containing xylitol, decongestants (pseudoephedrine), or multi-symptom formulations. [Source: MSD Veterinary Manual, 2020]",
  },
];

export function buildHomeRemediesForDogAllergiesFaqJsonLd(
  faqs: Faq[] = HOME_REMEDIES_FOR_DOG_ALLERGIES_FAQS,
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

export function buildHomeRemediesForDogAllergiesArticleJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Home Remedies for Dog Allergies: 12 Ranked Treatments",
    description:
      "Home remedies for dog allergies: 12 evidence-rated treatments including oatmeal baths, quercetin dosing, fish oil, and elimination diet guide.",
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
      "@id": "https://blog.celsiusherbs.com/home-remedies-for-dog-allergies",
    },
  };
}
