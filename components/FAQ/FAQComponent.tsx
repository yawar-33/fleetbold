import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Tipo para cada ítem de FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

// Tipo para las props del componente FAQ
export interface FAQProps {
  faqs: FAQItem[];
}

function FAQ({ faqs }: FAQProps) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQ;
