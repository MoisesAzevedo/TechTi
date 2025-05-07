import React from "react";
/* component */
import DefaultButton from "@/app/components/Buttons/DefaultButton";

const NewsLetter: React.FC = () => {
  return (
    <div className="flex flex-col gap-[30px] items-center justify-center gap-[35px] pt-[70px] pb-[70px] ">
      <article className="flex flex-col items-center justify-center gap-[18px]">
        <h1 className="text-[32px] text-center font-bold  leading-[35px] bg-gradient-to-r from-[#071AB3]  to-[#030B4D] bg-clip-text text-transparent">
          Mergulhe no <br /> mundo da Tecnologia
        </h1>
        <p className="text-[16px] text-[#6B7280] text-center  ">
          Fique por dentro dos assuntos atuais assinando nossa newsletter <br />{" "}
          Coloque seu email abaixo e assine hoje.
        </p>
      </article>

      <div className=" relative flex  w-[591px] h-[73px]  items-center justify-between  rounded-[8px] bg-[#F3F4F6]  ">
        <input
          type="email"
          placeholder="Exemplo: nome@techti.com.br"
          className="w-full h-[73px] rounded-[12px] bg-white pl-[30px]  text-[#111827] outline-none placeholder:text-[#9CA3AF] shadow-[0_6px_11px_0_rgba(0,0,0,0.05)]
"
        />
        <DefaultButton
          value="Assinar"
          className="absolute right-[19px] bg-[var(--primary-color)] border-none hover:bg-[var(--blue)] hover:shadow-[0_0_6px_var(--blue)] hover:text-white w-[122px] h-[41px] text-black text-[16px] font-bold"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
