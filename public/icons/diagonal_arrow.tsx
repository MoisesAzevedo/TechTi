import React, { CSSProperties } from "react";

interface DiagonalArrowProps {
  className?: string;
  fillColor?: string;
  style?: CSSProperties;
  onMouseEnter?: (event: React.MouseEvent<SVGElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<SVGElement>) => void;
}

export const DiagonalArrow: React.FC<DiagonalArrowProps> = ({
  className = "",
  fillColor = "#AFAFAF",
  style = {},
  onMouseEnter,
  onMouseLeave
}) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill={fillColor || "currentColor"}
    xmlns="http://www.w3.org/2000/svg"
    className={`corner-arrow ${className}`}
    style={style}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <path
      d="M0.948081 15.7492L14.3894 2.28255L2.00008 2.28255L2.00008 0.949218L16.6667 0.949219L16.6667 15.6159L15.3334 15.6159L15.3334 3.22522L1.86675 16.6666L0.948081 15.7492Z"
      className="corner-arrow-path"
    />
  </svg>
);
