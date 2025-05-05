import React from "react";

interface DiagonalArrowProps {
  className?: string;
}

export const DiagonalArrow: React.FC<DiagonalArrowProps> = ({
  className = ""
}) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`corner-arrow ${className}`}
  >
    {/* Caminho do ícone */}
    <path
      d="M0.948081 15.7492L14.3894 2.28255L2.00008 2.28255L2.00008 0.949218L16.6667 0.949219L16.6667 15.6159L15.3334 15.6159L15.3334 3.22522L1.86675 16.6666L0.948081 15.7492Z"
      fill="#AFAFAF"
      className="corner-arrow-path"
    />
  </svg>
);
