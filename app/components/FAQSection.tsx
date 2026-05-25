import { FAQSchema } from "./StructuredData";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  heading?: string;
  eyebrow?: string;
  questions: FAQItem[];
};

export default function FAQSection({
  heading = "Frequently Asked Questions",
  eyebrow = "FAQ",
  questions,
}: FAQSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            {eyebrow}
          </span>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
            {heading}
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((q) => (
            <details
              key={q.question}
              className="group bg-slate-50 rounded-xl border border-slate-100 open:border-amber-200 transition-colors"
            >
              <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {q.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="text-amber-600 text-2xl leading-none flex-shrink-0 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {q.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      <FAQSchema questions={questions} />
    </section>
  );
}
