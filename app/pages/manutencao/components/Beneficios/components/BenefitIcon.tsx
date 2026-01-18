import React from "react";
import { BenefitCard } from "../types";

interface BenefitIconProps {
  card: BenefitCard;
}

export const BenefitIcon: React.FC<BenefitIconProps> = ({ card }) => {
  return (
    <div
      data-name="benefit-icon-container"
      data-card-id={card.id}
      className="w-[55px] h-[55px] relative bg-[#030b4d] rounded-[5px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(102deg,rgba(23,69,255,1)_0%,rgba(14,41,153,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none flex items-center justify-center"
      role="img"
      aria-label="Benefit icon"
    >
      {card.hasDoubleIcon ? (
        <div
          data-name="double-icon-wrapper"
          className="relative w-[44px] h-[44px] flex items-center justify-center"
        >
          <div
            data-name="double-icon-container"
            className="relative w-[28px] h-[28px]"
          >
            <img
              data-name="primary-icon"
              className="absolute w-[28px] h-[28px] top-0 left-0"
              alt="Vector icon"
              src={card.icon}
            />
            {card.secondIcon && (
              <img
                data-name="secondary-icon"
                className="absolute w-[28px] h-[28px] top-0 left-0"
                alt="Secondary vector icon"
                src={card.secondIcon}
              />
            )}
          </div>
        </div>
      ) : card.id === 2 ? (
        <div
          data-name="dollar-icon-wrapper"
          className="relative w-[44px] h-[44px] flex items-center justify-center"
        >
          <img
            data-name="dollar-icon"
            className="w-[24px] h-[24px]"
            alt="Dollar sign icon"
            src={card.icon}
          />
        </div>
      ) : (
        <div
          data-name="scale-icon-wrapper"
          className="relative w-[44px] h-[44px] flex items-center justify-center"
        >
          <img
            data-name="scale-icon"
            className="w-[30px] h-[30px]"
            alt="Scale icon"
            src={card.icon}
          />
        </div>
      )}
    </div>
  );
};
