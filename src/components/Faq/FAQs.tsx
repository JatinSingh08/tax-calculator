import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faqs } from "@/lib/faqs";

const FAQs = () => {
  return (
    <div className="mt-6">
      <p className="text-[#0F1629] text-[24px] sm:text-[30px] font-bold leading-[22px]">
        Frequently Asked Questions
      </p>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-6 mt-6 items-center justify-center w-full"
      >
        {Faqs.map((faq) => {
          return (
            <AccordionItem
              value={faq.id.toString()}
              key={faq.id}
              className="bg-white w-full py-4 px-6 sm:py-4 sm:px-10 md:py-4 md:px-10 rounded-2xl"
            >
              <AccordionTrigger className="text-start">
                {faq.id}. {faq.question}
              </AccordionTrigger>
              {faq.id === 4 ? (
                <AccordionContent>
                  <div className="flex flex-col items-start justify-center gap-[10px]">
                    <p>{faq.answer.heading && faq.answer.heading}</p>
                    <ul className="list-decimal flex text-[16px] flex-col gap-5">
                      {faq.answer.points.map((point, index) => (
                        <li
                          key={index}
                          // className="before:content-['\2022'] before:text-black before:font-bold before:inline-block before:w-[1em] before:ml-[-1em]"
                        >
                          {point.split("-").map((segment, i, arr) => (
                            <span key={i}>
                              {i === 0 ? (
                                <span className="font-semibold">{segment}</span>
                              ) : (
                                ` - ${segment}`
                              )}
                            </span>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              ) : (
                <AccordionContent className="text-[16px] text-start">{faq.answer}</AccordionContent>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQs;
