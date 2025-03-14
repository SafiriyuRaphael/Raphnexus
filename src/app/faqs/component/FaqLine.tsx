import { Plus, Minus } from "lucide-react";

type FaqProps = {
  faqs: { questions: string; answer: string };
  isOpen: boolean;
  toggle: () => void;
};

export default function FaqLine({faqs,isOpen,toggle}:FaqProps) {
  return (
    <div className="">
      <div
        className={`flex justify-between cursor-pointer px-6 py-3.5 rounded-md items-center ${
          isOpen ? "bg-amber-400" : "bg-[#FBF7E8]"
        } `}
        onClick={toggle}
      >
        <h3 className="text-xl font-bold w-[80vw]">{faqs.questions}</h3>{" "}
        {!isOpen ? <Plus className="size-5" /> : <Minus />}
      </div>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ring-1 ring-gray-300/30 rounded-md ${
          isOpen ? "max-h-[30rem]" : "max-h-0"
        }`}
      >
        <p className="py-7 px-6 lg:pr-12 ">{faqs.answer}</p>
      </div>
    </div>
  );
}
