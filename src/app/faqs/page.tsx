"use client";
import { useState } from "react";
import FaqLine from "./component/FaqLine";
import Script from "next/script";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type FaqProps = {
  questions: string;
  answer: string;
};

export default function Page() {
  const Faqs: FaqProps[] = [
    {
      questions: "How does this work?",
      answer:
        "Our platform lets you order from your favorite restaurants and get it delivered to your door...",
    },
    {
      questions: "Can I order from different restaurants at the same time?",
      answer:
        "At the moment, each order must be placed with a single restaurant to ensure smooth processing...",
    },
    {
      questions: "Are your menu prices the same as those at the restaurant?",
      answer:
        "We work closely with restaurants to keep pricing as close as possible to their in-store menu...",
    },
    {
      questions: "Some menu items are missing on a restaurant page?",
      answer:
        "Not all restaurants list their entire menu for online delivery...",
    },
    {
      questions:
        "Do any of your cheeses contain enzymes derived from animal sources?",
      answer:
        "We understand dietary restrictions are important, and cheese ingredients can vary...",
    },
    {
      questions:
        "Is the sugar used in your dough refined through animal bone char?",
      answer: "Ingredient sourcing can vary by restaurant and supplier...",
    },
    {
      questions: "Does your pizza contain peanuts or peanut oil?",
      answer:
        "Our pizzas typically do not contain peanuts or peanut oil as ingredients...",
    },
    {
      questions: "Are your doughs vegan or vegetarian friendly?",
      answer:
        "Many of our restaurant partners offer doughs that are vegan or vegetarian-friendly...",
    },
    {
      questions: "Does your pepperoni contain gluten?",
      answer:
        "Yes, traditional pepperoni typically contains gluten due to added fillers or seasoning...",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ **Generate FAQ Schema (JSON-LD) for SEO**
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Faqs.map((faq) => ({
      "@type": "Question",
      name: faq.questions,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* ✅ Add structured data for Google SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>

         <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
     <h1 className="font-bold text-5xl">Faq</h1>
     <div className=" flex flex-row gap-1 items-center">
         <Link href="/" className="text-gray-500">Home</Link> <p className="text-md font-extrabold"><ChevronRight className="size-4"/></p> <p>Faq</p>
     </div>
   </div>
        <div className="px-7 py-24 flex flex-col gap-3.5 lg:w-[70vw] mx-auto">
          {Faqs.map((faqs, index) => (
            <FaqLine
              faqs={faqs}
              key={index}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </main>
    </>
  );
}
