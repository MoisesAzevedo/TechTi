import React from "react";
import { BeneficiosProps } from "./types";
import { useBenefitCards } from "./hooks/useBenefitCards";
import { BenefitHeader } from "./components/BenefitHeader";
import { BenefitCardComponent } from "./components/BenefitCardComponent";

export const Beneficios: React.FC<BeneficiosProps> = ({ className = "" }) => {
  const benefitCards = useBenefitCards();

  return (
    <section className={`grid grid-cols-[fit-content(100%)_fit-content(100%)] grid-rows-[fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] w-[1440px] h-[936px] gap-[12px_90px] px-[291px] py-px relative border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(90deg,rgba(3,11,77,1)_0%,rgba(52,75,174,1)_50%,rgba(22,0,100,1)_100%)_1] ${className}`}>
      <BenefitHeader />
      
      {/* First card - special position */}
      <BenefitCardComponent card={benefitCards[0]} />
      
      {/* Remaining cards */}
      {benefitCards.slice(1).map((card, index) => (
        <BenefitCardComponent key={card.id} card={card} index={index} />
      ))}
    </section>
  );
};
