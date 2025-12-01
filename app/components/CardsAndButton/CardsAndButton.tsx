import React from "react";
import styles from "./CardsAndButton.module.scss";
import DefaultButton from "../Buttons/DefaultButton";

interface CardsAndButtonProps {
  cardTexts: string[]; // espera até 3 textos
  buttonText: string;
  title?: string;
  backgroundVariant?: "default" | "blue";
  className?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  buttonClassName?: string;
}

const CardsAndButton: React.FC<CardsAndButtonProps> = ({
  cardTexts,
  buttonText,
  title,
  backgroundVariant = "default",
  className,
  buttonVariant,
  buttonClassName,
}) => {
  const texts = (cardTexts || []).slice(0, 3);
  while (texts.length < 3) texts.push("");

  return (
    <div
      data-name="cards-and-button-root"
      className={`${styles.container} ${
        backgroundVariant === "blue" ? styles.blueVariant : ""
      } ${className ?? ""}`}
    >
      {title && (
        <h1 data-name="cards-and-button-title" className={styles.title}>
          {title}
        </h1>
      )}

      <div data-name="cards-row" className={styles.cardsRow}>
        <div data-name="cards-wrapper" className={styles.cardsWrapper}>
          {texts.map((t, i) => (
            <div
              data-name={`card-item`}
              data-index={i}
              key={i}
              className={styles.card}
            >
              <span data-name="card-text" className={styles.cardText}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div data-name="cards-button-row" className={styles.buttonRow}>
        <div data-name="cards-button-wrapper">
          <DefaultButton
            value={buttonText}
            variant={buttonVariant}
            className={buttonClassName}
          />
        </div>
      </div>
    </div>
  );
};

export default CardsAndButton;
