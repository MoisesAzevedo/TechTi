// Main component
export { Beneficios } from './Beneficios';

// Sub-components
export { BenefitCardComponent } from './components/BenefitCardComponent';
export { BenefitHeader } from './components/BenefitHeader';
export { BenefitIcon } from './components/BenefitIcon';
export { BenefitTitle } from './components/BenefitTitle';
export { BenefitDescription } from './components/BenefitDescription';

// Hooks
export { useBenefitCards } from './hooks/useBenefitCards';
export { useScrollAnimation } from './hooks/useScrollAnimation';

// Types
export type { BenefitCard, BeneficiosProps } from './types';

// Utils
export { getGridPosition } from './utils/gridUtils';

// Constants
export { BENEFIT_CARD_STYLES, getVisibilityClasses } from './constants/styles';
