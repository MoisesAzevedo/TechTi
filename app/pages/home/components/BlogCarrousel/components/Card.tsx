import React from "react";

interface CardProps {
  title: string;
  description: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ title, description, date }) => {
  return (
    <div className="custom-slide">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{date}</span>
    </div>
  );
};

export default Card;
