"use client";

import React, { useEffect } from "react";
import { BeneficiosProps } from "./types";
import { useBenefitCards } from "./hooks/useBenefitCards";
import { BenefitHeader } from "./components/BenefitHeader";
import { BenefitCardComponent } from "./components/BenefitCardComponent";
import { FadeInOnView } from "@/app/styles/animations";

export const Beneficios: React.FC<BeneficiosProps> = ({ className = "" }) => {
  const benefitCards = useBenefitCards();

  useEffect(() => {
    // mount confirmed
  }, []);

  return (
    <section
      data-name="beneficios-main-section"
      className={`w-full pb-[450px]  relative border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(90deg,rgba(3,11,77,1)_0%,rgba(52,75,174,1)_50%,rgba(22,0,100,1)_100%)_1] ${className}`}
    >
      <div
        data-name="beneficios-grid-container"
        className="flex  relative w-full   pt-[50px]"
      >
        <section data-name="benefit-header-section" className="w-[400px]">
          <div className=" pt-[80%] pb-[150px] sticky top-0 self-start col-span-2  z-10">
            <FadeInOnView useAnimation>
              <BenefitHeader />
            </FadeInOnView>
          </div>
        </section>

        <section
          data-name="benefit-card-section"
          className="ml-auto mt-[30%] flex flex-col gap-[500px] "
        >
          {/* Render all cards via map. Pass index=undefined for the first to preserve its special position. */}
          {benefitCards.map((card, i) => (
            <FadeInOnView key={card.id} useAnimation>
              <BenefitCardComponent
                card={card}
                index={i === 0 ? undefined : i - 1}
                // keep first visible, hide the remaining two until animation triggers
                initialHidden={i !== 0}
              />
            </FadeInOnView>
          ))}
        </section>
      </div>
    </section>
  );
};
