export const getGridPosition = (index?: number): string => {
  if (index === undefined) {
    return "row-[1_/_2] col-[2_/_3]";
  }
  return `row-[${index + 3}_/_${index + 4}] col-[2_/_3]`;
};