export type Faq = { q: string; a: string };

export const CAT_EAR_INFECTION_PICTURES_FAQS: Faq[] = [
  {
    q: "What do cat ear infection pictures actually look like?",
    a: "Cat ear infection pictures typically show redness inside the ear, abnormal discharge — dark brown waxy debris for yeast ear infections, yellow pus for bacterial ear infections, or black coffee-ground crumbs for ear mites — and swollen tissue in the cat's ear canal. Early ear infections in cats may just show a slight color shift and increased wax; severe cat ear infections show heavy discharge, near-closed canal, and obvious pain. [Source: VCA Animal Hospitals, 2020; PetMD, 2021]",
  },
  {
    q: "How do I tell cat ear mites from a yeast infection by looking?",
    a: "Ear mite debris is dry, black, and granular — the 'coffee grounds' look in the cat's ear canal. Yeast ear infections in cats produce dark brown, waxy, greasy debris with a musty or sweet smell. Ear mites also tend to affect both of your cat's ears and cause extremely intense itching. That said, ear mites frequently trigger secondary ear infections in cats, so you can see both patterns together. [Source: MSD Veterinary Manual, 2020; Catster, 2022]",
  },
  {
    q: "What does black discharge in a cat's ear mean?",
    a: "Black or very dark brown dry, crumbly discharge in a cat's ear canal is the hallmark of ear mites. However, dark waxy brown discharge (not dry and crumbly) is more associated with yeast overgrowth — one of the most common ear infections in cats. The texture matters: dry and granular points to ear mites; greasy and pasty points to yeast ear infections. [Source: Seattle Veterinary Associates, 2024; Catster, 2022]",
  },
  {
    q: "Can ear infections in cats clear up on their own?",
    a: "Rarely. Most ear infections in cats are driven by bacteria, yeast, or ear mites that require targeted treatment. Leaving ear infections in cats untreated typically allows them to worsen — from outer ear infections into middle ear or inner ear infections, with hearing loss as a possible outcome. Early treatment prevents the affected ear from developing secondary infections or chronic ear issues. [Source: PetMD, 2021; Merck Veterinary Manual, 2020]",
  },
  {
    q: "Is one ear affected vs both ears a useful clue?",
    a: "Somewhat. Ear mites commonly affect both of the cat's ears simultaneously. Bacterial and yeast ear infections in cats may start in one ear. A single ear affected from the start is more suggestive of infection than mites, but it is not definitive — a vet exam is the only way to reliably distinguish cat ear infections from mites. [Source: MSD Veterinary Manual, 2020; VCA Animal Hospitals, 2020]",
  },
  {
    q: "What should a healthy cat's ears smell like?",
    a: "Nothing. A healthy cat's ear is essentially odor-free up close. Any noticeable smell — musty, sweet, sour, or rotten — is abnormal and usually indicates a yeast or bacterial ear infection. A foul or rotten odor suggests bacterial ear infections in cats; a bread-dough or sweet smell suggests yeast ear infections. Kitty's ears should never have an odor. [Source: VCA Animal Hospitals, 2020; Catster, 2022]",
  },
  {
    q: "Can I treat my cat's ear infection at home without a vet?",
    a: "Not safely without a vet diagnosis first. To treat ear infection at home without knowing the cause risks using the wrong ear drops, which can worsen cat ear infections or mask symptoms. The eardrum may be damaged, and some products can cause pain or worsen the cat's ear canal if the eardrum has ruptured. A vet exam confirms the type of ear infections in cats and whether the eardrum is intact. [Source: Merck Veterinary Manual, 2020]",
  },
  {
    q: "How do I clean my cat's ears at home?",
    a: "To clean your cat's ears: fill the canal with a vet-recommended ear cleanser, massage the base until you hear a soft squishing sound, let your cat shake, then wipe only the outer ear with cotton. Never use cotton swabs deep in the cat's ear canal. Clean your cat's ears only after a vet has confirmed the eardrum is intact — inserting fluids through a perforated eardrum causes severe pain and can worsen ear infections in cats. [Source: VCA Animal Hospitals, 2020]",
  },
];

export function buildCatEarInfectionPicturesFaqJsonLd(
  faqs: Faq[] = CAT_EAR_INFECTION_PICTURES_FAQS,
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

export function buildCatEarInfectionPicturesArticleJsonLd(): Record<
  string,
  unknown
> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cat Ear Infection Pictures: Visual ID Guide",
    description:
      "Cat ear infection pictures with color-coded discharge guide — identify bacterial, yeast, or ear mites by what you see in your cat's ear.",
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
      "@id": "https://blog.celsiusherbs.com/cat-ear-infection-pictures",
    },
  };
}
