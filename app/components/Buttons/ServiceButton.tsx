"use client";

import React from "react";

interface ServiceButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({
  text,
  onClick,
  href,
  className = ""
}) => {
  const buttonContent = (
    <button
      className={`service-button ${className}`}
      onClick={onClick}
      style={{
        background: "#ffffff",
        border: "1px solid #ccd6ff",
        borderRadius: "10px",
        width: "205px",
        height: "55px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontSize: "20px",
        color: "#344bae",
        fontWeight: "bold",
        fontFamily: '"OpenSauceOne", system-ui, sans-serif',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#d9d9d9";
        e.currentTarget.style.border = "1px solid #d9d9d9";
        e.currentTarget.style.color = "white";
        const img = e.currentTarget.querySelector('img');
        if (img) {
          img.style.transform = "translateX(4px)";
          img.style.filter = "brightness(0) saturate(100%) invert(100%)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#ffffff";
        e.currentTarget.style.border = "1px solid #ccd6ff";
        e.currentTarget.style.color = "#344bae";
        const img = e.currentTarget.querySelector('img');
        if (img) {
          img.style.transform = "translateX(0)";
          img.style.filter = "none";
        }
      }}
    >
      <span>{text}</span>
      <img 
        src="/icons/arrow.png" 
        alt="arrow"
        style={{
          width: "32px",
          height: "32px",
          transition: "all 0.3s ease"
        }}
      />
    </button>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: "none" }}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default ServiceButton;
