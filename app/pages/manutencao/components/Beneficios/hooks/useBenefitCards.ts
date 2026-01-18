import { useMemo } from "react";
import { BenefitCard } from "../types";

export const useBenefitCards = (): BenefitCard[] => {
  return useMemo(
    () => [
      {
        id: 1,
        icon: "/icons/beneficios/setas.svg",
        secondIcon: "/icons/beneficios/setas.svg",
        title: "Lorem ipsum\ndolor sit amet.",
        description:
          "Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed laborum accusantium. Eum maxime quae et optio rerum sed laborum accusantium",
        hasDoubleIcon: true,
      },
      {
        id: 2,
        icon: "/icons/beneficios/cifrao.svg",
        title: "Lorem ipsum\ndolor sit amet.",
        description:
          "Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed laborum accusantium. Eum maxime quae et optio rerum sed laborum accusantium",
        hasDoubleIcon: false,
      },
      {
        id: 3,
        icon: "/icons/beneficios/balanca.svg",
        title: "Lorem ipsum\ndolor sit amet.",
        description:
          "Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed laborum accusantium. Eum maxime quae et optio rerum sed laborum accusantium",
        hasDoubleIcon: false,
      },
    ],
    []
  );
};
