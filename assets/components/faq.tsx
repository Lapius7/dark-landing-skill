import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/content";

export function Faq() {
  return (
    <section className="grid border-b lg:grid-cols-2">
      <div className="hidden border-r lg:block" />
      <Accordion type="single" collapsible defaultValue="item-0" className="px-6">
        {faq.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-b last:border-b-0">
            <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
