import { FAQS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { FAQAccordion } from '../ui/FAQAccordion';

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-[#FAFAF8]" id="faq">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title="よくある質問"
          subtitle="ご予約前の不安を先回りして解消します。他にもご質問があればLINEでお気軽にどうぞ。"
        />

        <FAQAccordion items={FAQS} />
      </div>
    </section>
  );
}
