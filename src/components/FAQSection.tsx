import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/siteData";
import FadeUp from "@/components/FadeUp";

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-14">
          <h2
            className="font-bold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <Accordion
            type="single"
            collapsible
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary min-h-[44px] py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
};

export default FAQSection;
