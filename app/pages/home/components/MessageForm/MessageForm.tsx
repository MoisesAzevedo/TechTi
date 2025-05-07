"use client";
import React, { useState } from "react";
import InputMask from "react-input-mask";

const MessageForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o recarregamento da página

    // Validação simples de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    console.log({ name, email, phone, message }); // Exemplo de ação ao enviar o formulário
  };

  return (
    <div className="flex w-full border-t-[1px] border-b-[1px]">
      <section className="flex flex-col justify-center relative h-[336px]  w-[49%] ">
        <article className="flex flex-col gap-[19px] absolute right-[78px]  ">
          {/* title */}
          <div className="flex justify-center items-center w-[326px] h-[74px] ">
            <h1 className=" w-full text-bold text-[32px] text-[#48484A] leading-[32px]">
              Vamos falar sobre sua tecnologia?
            </h1>
          </div>
          {/* par */}
          <div className="flex w-[326px] h-[112px] justify-center items-center">
            <p className="w-full text-[16px] text-[#8B8B8B]  ">
              Se você está pronto para transformar seu cenário, cadastre-se ao
              lado e nossos especialistas entrarão em contato com você.
            </p>
          </div>
        </article>
      </section>
      <section className="flex flex-col justify-center bg-[#D6D6D6] flex-grow">
        <form
          className="flex flex-col gap-[19px] w-[383px] ml-[46px]"
          onSubmit={formSubmit}
        >
          <div className="flex gap-[17px]">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome*"
              required
              className="w-[183px] h-[39px] pl-4 placeholder-[#9A9A9A] focus:outline-none rounded-[5px]"
            />
            <InputMask
              mask="(99) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefone*"
              required
              className="w-[183px] h-[39px] pl-4 placeholder-[#9A9A9A] focus:outline-none rounded-[5px]"
            />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            required
            className="w-[100%] h-[39px] pl-4 placeholder-[#9A9A9A] focus:outline-none rounded-[5px]"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem...*"
            required
            className="w-[100%] h-[94px] pl-4 placeholder-[#9A9A9A] text-start align-top resize-none focus:outline-none rounded-[5px]"
          />
          <button
            type="submit"
            className="bg-[#0022B0] border-none rounded-[21.5px] hover:bg-primary hover:text-black w-[137px] h-[39px] text-[white] text-[16px] font-bold transition duration-300"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default MessageForm;
