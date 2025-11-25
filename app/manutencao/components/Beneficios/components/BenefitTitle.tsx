import React from "react";

interface BenefitTitleProps {
  title: string;
  className?: string;
}

export const BenefitTitle: React.FC<BenefitTitleProps> = ({
  title,
  className,
}) => {
  return (
    <h2
      data-name="benefit-card-title"
      className={className}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordBreak: "break-word",
      }}
    >
      {title.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line}
          {lineIndex < title.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </h2>
  );
};
