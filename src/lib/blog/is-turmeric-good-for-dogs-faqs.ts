/**
 * Single source of truth for Is Turmeric Good for Dogs blog FAQs.
 *
 * Imported in two places:
 *  - `src/views/blog/IsTurmericGoodForDogsGuide.tsx` — renders the visual accordion.
 *  - `src/pages/is-turmeric-good-for-dogs.astro` — builds Schema.org FAQPage JSON-LD.
 *
 * All citations replaced with peer-reviewed / NIH-published sources (no commercial pet sites).
 */
export type Faq = { q: string; a: string };

export const IS_TURMERIC_GOOD_FOR_DOGS_FAQS: Faq[] = [
  {
    q: "Do vets recommend turmeric for dogs?",
    a: "Many integrative vets do recommend turmeric as a supplemental anti-inflammatory for dogs, particularly for joint health and inflammatory conditions. Published veterinary studies show curcumin-containing supplements significantly reduce TNF-α and MMP-3 in dogs with osteoarthritis (Lai et al., Nutrients, 2023; PMC12115434). Conventional vets are more cautious — they support its use alongside, not instead of, evidence-based treatments, and recommend ruling out drug interactions before starting, as direct canine pharmacokinetic studies remain limited.",
  },
  {
    q: "How much turmeric can I give a dog a day?",
    a: "No universally evidence-based dose has been established in peer-reviewed canine trials. Published studies have used curcuminoid doses of approximately 250 mg/day in medium-sized dogs with no adverse effects over 180 days (Itharat et al., Vet Sci, 2023; PMC9816143). The widely cited practical guideline of 1/8 to 1/4 teaspoon of turmeric powder per 10 lbs per day is based on integrative vet practice, not formal dose-ranging trials. Always start with only a small amount and increase gradually. See the dosage chart in the article.",
  },
  {
    q: "Can I give my dog turmeric every day?",
    a: "Yes — daily use is standard in integrative veterinary practice and has been studied for up to 180 days in dogs without clinically significant adverse effects (Itharat et al., Vet Sci, 2023; PMC9816143). The key caveat is blood clotting: curcumin inhibits platelet aggregation in vitro (Srivastava et al., Thromb Res, 1986; PMID 3092945), so dogs on NSAIDs, aspirin, or anticoagulants should not receive daily turmeric without veterinary supervision. Stop turmeric at least one week before surgery.",
  },
  {
    q: "What are the side effects of turmeric in dogs?",
    a: "Published canine studies at moderate doses report few adverse effects. However, based on human and extrapolated data, known risks include: GI upset (nausea, loose stools, reduced appetite — more common at higher doses); slow blood clotting (curcumin inhibits platelet aggregation; Srivastava et al., PMID 3092945); gallbladder stimulation (curcumin increases bile secretion; caution with biliary disease); and potential drug interactions via CYP enzyme inhibition (Banik et al., Biomedicines, 2023; PMC10111629). Lower blood sugar is also a concern for diabetic dogs on insulin.",
  },
  {
    q: "What form of turmeric is best for dogs?",
    a: "Golden paste — turmeric powder cooked with coconut oil and black pepper — is the most accessible high-bioavailability form. Curcumin is fat-soluble and poorly absorbed alone; co-administration with fat improves uptake, and piperine from black pepper has been shown to increase curcumin bioavailability by approximately 2000% in human pharmacokinetic studies (Shoba et al., Planta Med, 1998; PMID 9619120). No equivalent canine PK trial exists, but the principle is pharmacologically sound. Standardized supplements using BCM-95 or Meriva curcumin also enhance bioavailability via similar mechanisms.",
  },
  {
    q: "Is it safe to give turmeric to dogs every day?",
    a: "At conservative doses, daily turmeric is well-tolerated by most healthy dogs. A 180-day canine study reported no adverse clinical or clinicopathologic findings at 250 mg/day of curcuminoids (Itharat et al., Vet Sci, 2023; PMC9816143). Exceptions include dogs with gallbladder disease, bleeding disorders, or those on anticoagulants or NSAIDs — in these cases, use without veterinary clearance carries meaningful risk. No formal maximum safe daily dose has been established in peer-reviewed canine dose-escalation trials.",
  },
  {
    q: "Is turmeric good for dogs with diarrhea?",
    a: "Direct canine evidence is absent. In human inflammatory bowel disease, curcumin has demonstrated anti-inflammatory benefit in randomized trials (summarized in Banik et al., Biomedicines, 2023; PMC10111629). However, the same review notes that higher doses can cause GI upset including diarrhea in some individuals. Dogs with a sensitive stomach may experience loose stools when turmeric is introduced too quickly. For acute diarrhea, turmeric is not recommended. For chronic gut inflammatory conditions in dogs, it should only be trialed at very low doses under veterinary supervision.",
  },
  {
    q: "Is turmeric good for dogs with allergies?",
    a: "No controlled canine clinical trial has confirmed curcumin as an effective standalone treatment for canine atopic dermatitis or environmental allergies. Mechanistically, curcumin downregulates mast cell activation, histamine release, and Th2 cytokines in rodent allergy models (Banik et al., Biomedicines, 2023; PMC10111629), suggesting plausible anti-allergic effects. For mildly itchy dogs without a serious allergy diagnosis, adding golden paste alongside omega-3 fish oil is a reasonable low-risk complementary approach — but it is not a substitute for veterinary allergy diagnosis and treatment.",
  },
];

/**
 * Build Schema.org FAQPage JSON-LD from the blog FAQ array.
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function buildIsTurmericGoodForDogsFaqJsonLd(
  faqs: Faq[] = IS_TURMERIC_GOOD_FOR_DOGS_FAQS,
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

/**
 * Schema.org Article JSON-LD for the is-turmeric-good-for-dogs blog page.
 */
export function buildIsTurmericGoodForDogsArticleJsonLd(): Record<
  string,
  unknown
> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is Turmeric Good for Dogs? Vets Weigh In",
    description:
      "Is turmeric good for dogs? Learn safe dosage by weight, golden paste recipe, side effects, and when vets recommend turmeric for allergies or joint pain.",
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
      "@id": "https://blog.celsiusherbs.com/is-turmeric-good-for-dogs",
    },
  };
}
