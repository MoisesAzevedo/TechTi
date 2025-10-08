export const BENEFIT_CARD_STYLES = {
  container: {
    base: "relative w-[426px] h-[259px] flex flex-wrap items-start gap-[15px_36px] px-9 py-11 bg-[#000a5f] rounded-[5px] border-[none]",
    gradient: "before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(102deg,rgba(23,69,255,1)_0%,rgba(14,41,153,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none",
    animation: "transition-all duration-700 ease-out"
  },
  title: "relative w-[269px] h-[51px] mt-[-1.00px] [font-family:'Open_Sauce_One-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[30.2px]",
  description: "relative w-[269px] [font-family:'Open_Sauce_One-Regular',Helvetica] font-normal text-[#b8b8b8] text-base tracking-[0] leading-7"
} as const;

export const getVisibilityClasses = (visible: boolean): string => {
  return visible 
    ? 'opacity-100 translate-y-0 pointer-events-auto' 
    : 'opacity-0 translate-y-6 pointer-events-none';
};