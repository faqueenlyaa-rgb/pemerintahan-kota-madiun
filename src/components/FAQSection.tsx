import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../lib/seoSchemas';

type FAQSectionProps = {
  title?: string;
  items?: FAQItem[];
};

export function FAQSection({
  title = 'Pertanyaan Umum',
  items = [],
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const validItems = items.filter(
    (item) => item.question.trim() && item.answer.trim()
  );

  if (validItems.length === 0) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      aria-labelledby="faq-title"
      className="mt-12 rounded-[2rem] bg-white p-6 md:p-8 shadow-sm border border-gray-100"
    >
      <h2
        id="faq-title"
        className="font-poppins text-2xl md:text-3xl font-black text-[#111827] mb-6"
      >
        {title}
      </h2>

      <div className="space-y-3">
        {validItems.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article
              key={item.question}
              className="rounded-2xl border border-gray-100 bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[#237227] text-base md:text-lg">
                  {item.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`shrink-0 text-[#237227] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                id={answerId}
                aria-hidden={!isOpen}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}