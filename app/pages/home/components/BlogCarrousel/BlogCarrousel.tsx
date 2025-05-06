import React from "react";
/* component */
import Carrousel from "./js/Carrousel";
import DefaultButton from "@/app/components/Buttons/DefaultButton";

const BlogCarrousel: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-[35px] pt-[14px] ">
      <DefaultButton
        value="Blog"
        className="bg-[#CCD6FF] border-none hover:bg-[var(--blue)] hover:shadow-[0_0_6px_var(--blue)] hover:text-white w-[93px] h-[33px] text-[#818EFF] text-[16px] font-regular"
      />
      <h1 className="w-[485px] text-center text-[36px] font-extrabold bg-gradient-to-r from-[#030B4D] to-[#071AB3] bg-clip-text text-transparent">
        Leia mais sobre tecnologia em nosso blog
      </h1>
      <Carrousel />
    </div>
  );
};

export default BlogCarrousel;
