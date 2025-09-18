import React from 'react';
import { BenefitCard } from '../types';
import { BenefitIcon } from './BenefitIcon';

interface BenefitCardComponentProps {
  card: BenefitCard;
  index?: number;
}

export const BenefitCardComponent: React.FC<BenefitCardComponentProps> = ({ card, index }) => {
  const getGridPosition = () => {
    if (index === undefined) {
      return "row-[1_/_2] col-[2_/_3]";
    }
    return `row-[${index + 3}_/_${index + 4}] col-[2_/_3]`;
  };

  return (
    <article className={`relative ${getGridPosition()} w-[426px] h-[259px] flex flex-wrap items-start gap-[15px_36px] px-9 py-11 bg-[#000a5f] rounded-[5px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(102deg,rgba(23,69,255,1)_0%,rgba(14,41,153,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}>
      <BenefitIcon card={card} />
      
      <h2 className="relative w-[269px] h-[51px] mt-[-1.00px] [font-family:'Open_Sauce_One-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[30.2px]">
        {card.title.split("\n").map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            {lineIndex < card.title.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      
      <p className="relative w-[269px] [font-family:'Open_Sauce_One-Regular',Helvetica] font-normal text-[#b8b8b8] text-base tracking-[0] leading-7">
        {card.description}
      </p>
    </article>
  );
};
