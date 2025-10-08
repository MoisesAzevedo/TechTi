import React from 'react';

interface BenefitDescriptionProps {
  description: string;
  className?: string;
}

export const BenefitDescription: React.FC<BenefitDescriptionProps> = ({ description, className }) => {
  return (
    <p data-name="benefit-card-description" className={className}>
      {description}
    </p>
  );
};