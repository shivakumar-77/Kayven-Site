"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
}

export default function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <div key={index} className="border-b border-black">
          <button
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            className={`w-full flex justify-between items-start p-4 text-left ${openIndex === index ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">{item.question}</h3>
            </div>
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center ml-4">
              {openIndex === index ? (
                <div className="w-4 h-4 bg-white">
                  <svg width="10" height="5" viewBox="0 0 10 5" xmlns="http://www.w3.org/2000/svg">
                    <line
                      x1="0"
                      y1="5"
                      x2="10"
                      y2="5"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-4 h-4 border border-black">
                  <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <line
                      x1="2"
                      y1="5"
                      x2="8"
                      y2="5"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <line
                      x1="5"
                      y1="2"
                      x2="5"
                      y2="8"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}
            </div>
          </button>
          {openIndex === index && (
            <div
              id={`faq-answer-${index}`}
              className="pt-2 pb-4 overflow-hidden"
              style={{ gridTemplateRows: openIndex === index ? "1fr" : "0fr", transition: "grid-template-rows 250ms ease-[0.22,1,0.36,1]" }}
            >
              <p className="text-base">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}