import React from "react";

interface ShaftArrowProps {
  className?: string;
}

export const ShaftArrow: React.FC<ShaftArrowProps> = ({ className = "" }) => (
  <svg
    width="29"
    height="28"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shaft-arrow ${className}`}
    style={{ borderRadius: "50%" }}
  >
    {/* Círculo externo preenchido */}
    <path
      d="M14.25 0.75C21.7248 0.75 27.75 6.64499 27.75 13.875C27.75 21.105 21.7248 27 14.25 27C6.77518 27 0.75 21.105 0.75 13.875C0.75 6.64499 6.77518 0.75 14.25 0.75Z"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      className="shaft-arrow-border"
    />
    {/* Seta interna */}
    <path
      d="M15.2985 18.0789L14.2076 19.1411L9 14.0705L11.6038 11.5353L14.2076 9L15.2985 10.0622L11.9735 13.2997H19.7493V14.8414H11.9735L15.2985 18.0789Z"
      fill="white"
      className="shaft-arrow-inner "
    />
  </svg>
);
