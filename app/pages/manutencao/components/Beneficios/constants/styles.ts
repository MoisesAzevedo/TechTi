export const BENEFIT_CARD_STYLES = {
  container: {
    base: "relative w-[639px] flex items-start gap-[30px_72px] px-18 py-22 bg-[#000a5f] rounded-[10px] border-[none]",
    gradient:
      "before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[10px] before:[background:linear-gradient(102deg,rgba(23,69,255,1)_0%,rgba(14,41,153,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none",
    animation: "transition-all duration-700 ease-out",
  },
  title:
    "relative w-[538px] h-[120px] mt-[-1.00px] [font-family:'Open_Sauce_One-Bold',Helvetica] font-bold text-white text-[36px] tracking-[0] leading-[40px]",
  description:
    "relative w-[538px] [font-family:'Open_Sauce_One-Regular',Helvetica] font-normal text-[#b8b8b8] text-[24px] tracking-[0] leading-[32px]",
} as const;

export const getVisibilityClasses = (visible: boolean): string => {
  return visible
    ? "opacity-100 translate-y-0 pointer-events-auto"
    : "opacity-0 translate-y-6 pointer-events-none";
};
