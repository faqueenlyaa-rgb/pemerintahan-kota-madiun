export type FAQItem = {
  question: string;
  answer: string;
};

export function createFAQSchema(items: FAQItem[], lang: 'id' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}