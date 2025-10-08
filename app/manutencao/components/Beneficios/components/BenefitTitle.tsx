import React from 'react';

interface BenefitTitleProps {
  title: string;
  className?: string;
}

export const BenefitTitle: React.FC<BenefitTitleProps> = ({ title, className }) => {
  return (
    <h2 data-name="benefit-card-title" className={className}>
      {title.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line}
          {lineIndex < title.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </h2>
  );
};