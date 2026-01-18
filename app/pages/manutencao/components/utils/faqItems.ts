// Re-export from the TSX file so this `.ts` file no longer contains JSX
// Point explicitly to the `.tsx` file to avoid circular resolution.
export { faqItems } from "./faqItems.tsx";
export { default } from "./faqItems.tsx";
