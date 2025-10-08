import React from "react";
import { BeneficiosProps } from "./types";
import { useBenefitCards } from "./hooks/useBenefitCards";
import { BenefitHeader } from "./components/BenefitHeader";
import { BenefitCardComponent } from "./components/BenefitCardComponent";

export const Beneficios: React.FC<BeneficiosProps> = ({ className = "" }) => {
  const benefitCards = useBenefitCards();

  return (
    <section 
      data-name="beneficios-main-section"
      className={`w-full bg-[#000a5f] relative border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(90deg,rgba(3,11,77,1)_0%,rgba(52,75,174,1)_50%,rgba(22,0,100,1)_100%)_1] ${className}`}
    >
      <div 
        data-name="beneficios-grid-container"
        className="grid grid-cols-[fit-content(100%)_fit-content(100%)] grid-rows-[fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] max-w-[1440px] h-[936px] gap-[12px_90px] px-[291px] py-px mx-auto mt-[50px]"
      >
        <BenefitHeader />

        {/* Render all cards via map. Pass index=undefined for the first to preserve its special position. */}
        {benefitCards.map((card, i) => (
          <BenefitCardComponent
            key={card.id}
            card={card}
            index={i === 0 ? undefined : i - 1}
            // keep first visible, hide the remaining two until animation triggers
            initialHidden={i !== 0}
          />
        ))}
      </div>
    </section>
  );
};
