import React, { Fragment } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

async function FAQSection({ faqs }) {
  const accordionContentClassname = "w-[90%]";

  // We will have two containers for containing Accordion Item So toggling
  // Accordion Item in one container willn't impact another container
  let firstContainerFaqList = [];
  let secondContainerFaqList = [];

  faqs.forEach((faq, index) => {
    const isEven = index % 2 === 0;
    if (isEven) {
      firstContainerFaqList.push(faq);
    } else {
      secondContainerFaqList.push(faq);
    }
  });
  return (
    <Accordion
      collapsible
      type="single"
      className="flex mt-10 flex-col sm:flex-row gap-y-4 gap-x-8 sm:mt-14 w-full group-has-[[data-pending]]:animate-pulse"
    >
      <Fragment>
        <div className="sm:block flex-1 space-y-4 hidden">
          {firstContainerFaqList.map(({ idx, question, answer }) => (
            <AccordionItem value={idx} key={idx}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent className={accordionContentClassname}>
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>

        <div className="sm:block flex-1 space-y-4 hidden">
          {secondContainerFaqList.map(({ idx, question, answer }) => (
            <AccordionItem value={idx} key={idx}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent className={accordionContentClassname}>
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
        {faqs.map(({ idx, question, answer }) => (
          <AccordionItem key={idx} value={idx} className="basis-full sm:hidden">
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Fragment>
    </Accordion>
  );
}

export default FAQSection;
