"use client";

import React from "react";
import { BenefitCard } from "../types";
import { BenefitIcon } from "./BenefitIcon";
import { BenefitTitle } from "./BenefitTitle";
import { BenefitDescription } from "./BenefitDescription";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getGridPosition } from "../utils/gridUtils";
import { BENEFIT_CARD_STYLES, getVisibilityClasses } from "../constants/styles";

interface BenefitCardComponentProps {
  card: BenefitCard;
  index?: number;
  initialHidden?: boolean;
}

export const BenefitCardComponent: React.FC<BenefitCardComponentProps> = ({
  card,
  index,
  initialHidden,
}) => {
  const { visible, elRef } = useScrollAnimation({ initialHidden });

  const containerClasses = [
    BENEFIT_CARD_STYLES.container.base,
    BENEFIT_CARD_STYLES.container.gradient,
    BENEFIT_CARD_STYLES.container.animation,
    getGridPosition(index),
    getVisibilityClasses(visible),
  ].join(" ");

  return (
    <article
      ref={elRef as any}
      data-name="benefit-card"
      data-card-id={card.id}
      data-initial-hidden={initialHidden ? "true" : "false"}
      className={`${containerClasses} p-[50px]`}
    >
      <section data-name="benefit-card-col1">
        <BenefitIcon card={card} />
      </section>
      <section data-name="benefit-card-col2" className="overflow-hidden">
        <BenefitTitle
          title={card.title}
          className={BENEFIT_CARD_STYLES.title}
        />

        <BenefitDescription
          description={card.description}
          className={BENEFIT_CARD_STYLES.description}
        />
      </section>
    </article>
  );
};
