"use client";

import React, { use } from "react";
/* components */
import { DiagonalArrow } from "@/public/icons/diagonal_arrow";
/* style */
import style from "./Card.module.scss";

interface CardProps {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  date: string;
  article: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  category,
  title,
  description,
  date,
  article
}) => {
  return (
    <div
      className="relative flex flex-col h-full w-[283px] bg-white"
      style={{
        clipPath:
          " polygon(22px 0px, 100% 0px, 100% 334px, 267px 100%, 0px 100%, 0px 22px)"
      }}
    >
      {/* image */}
      <figure className="flex h-[209px] w-full">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          alt="Card image"
        />
      </figure>
      {/* texts */}
      <article className="flex flex-col card_text pt-[22px] pl-[35px] pr-[30px] gap-[15px]">
        {/* category */}
        <div className="flex  gap-2 items-center h-[10px]  ">
          <div className="w-[8px] h-[8px] rounded-full bg-[#1745FF]" />
          <span className="text-[#A0A0A0] text-[10px]">{category}</span>
        </div>
        {/* title */}
        <div className=" h-[48px]">
          <h3
            className="text-[#5B5B5B] text-[20px]"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              lineHeight: "25px"
            }}
          >
            {title}
          </h3>
        </div>
        <p className="text-[12px] text-[#A6A6A6]">{date}</p>
        <div className="absolute bottom-8 right-10 cursor-pointer ">
          <a href={article} target="_blank" rel="noopener noreferrer">
            <DiagonalArrow
              style={{
                fill: "#AFAFAF", // Cor padrão
                transition: "var(--hover-transition)" // Transição suave
              }}
              onMouseEnter={(e) => (e.currentTarget.style.fill = "var(--blue)")} // Cor ao passar o mouse
              onMouseLeave={(e) => (e.currentTarget.style.fill = "#AFAFAF")} // Cor ao remover o mouse
            />
          </a>
        </div>
      </article>
    </div>
  );
};

export default Card;
