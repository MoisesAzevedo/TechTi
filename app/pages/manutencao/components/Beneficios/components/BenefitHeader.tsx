import React from "react";
import ProgressBar from "@/app/components/ProgressBar/ProgressBar";
import useSectionScrollProgress from "../hooks/useSectionScrollProgress";

export const BenefitHeader: React.FC = () => {
  const progress = useSectionScrollProgress();

  return (
    <>
      <header
        data-name="benefit-header-container"
        className="row-[1_/_2] w-fit h-fit inline-flex items-center justify-center gap-2.5 p-2.5 relative col-[1_/_2]"
      >
        <h1
          data-name="benefit-main-title"
          className="relative w-[309px] mt-[-1.00px] bg-[linear-gradient(113deg,rgba(255,255,255,1)_0%,rgba(222,222,222,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Open_Sauce_One-Bold',Helvetica] font-bold text-transparent text-[32px] tracking-[0] leading-[42.6px]"
        >
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </h1>
      </header>

      <ProgressBar progress={progress} />
    </>
  );
};
