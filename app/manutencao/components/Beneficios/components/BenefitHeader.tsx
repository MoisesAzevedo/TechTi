import React from 'react';

export const BenefitHeader: React.FC = () => {
  return (
    <>
      <header className="row-[1_/_2] w-fit h-fit inline-flex items-center justify-center gap-2.5 p-2.5 relative col-[1_/_2]">
        <h1 className="relative w-[309px] mt-[-1.00px] bg-[linear-gradient(113deg,rgba(255,255,255,1)_0%,rgba(222,222,222,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Open_Sauce_One-Bold',Helvetica] font-bold text-transparent text-[32px] tracking-[0] leading-[42.6px]">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </h1>
      </header>
      
      <nav className="grid grid-cols-[fit-content(100%)_fit-content(100%)] grid-rows-[fit-content(100%)] w-[309px] h-4 gap-[1px_267px] row-[2_/_3] relative col-[1_/_2]" 
           aria-label="Progress indicator">
        <div className="absolute w-60 h-[19px] -top-px left-0">
          <div className="absolute top-0 left-0 w-[21px] h-4 [font-family:'Open_Sauce_One-Light',Helvetica] font-light text-[#19339f] text-xs text-center tracking-[0] leading-7 whitespace-nowrap" 
               aria-label="Step 1">
            01
          </div>
          <img className="w-60 top-3.5 absolute h-1 left-0" alt="Progress line" src="/icons/beneficios/line1.svg" />
          <img className="w-[71px] top-[15px] absolute h-1 left-0" alt="Progress indicator" src="/icons/beneficios/line2.svg" />
        </div>
        <div className="relative row-[1_/_2] col-[2_/_3] w-[21px] h-4 [font-family:'Open_Sauce_One-Light',Helvetica] font-light text-[#19339f] text-xs text-center tracking-[0] leading-7 whitespace-nowrap" 
             aria-label="Step 3">
          03
        </div>
      </nav>
    </>
  );
};
