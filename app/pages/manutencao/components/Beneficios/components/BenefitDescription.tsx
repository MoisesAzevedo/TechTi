import React from "react";

interface BenefitDescriptionProps {
  description: string;
  className?: string;
}

export const BenefitDescription: React.FC<BenefitDescriptionProps> = ({
  description,
  className,
}) => {
  return (
    <p
      data-name="benefit-card-description"
      className={className}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordBreak: "break-word",
      }}
    >
      {description}
    </p>
  );
};
