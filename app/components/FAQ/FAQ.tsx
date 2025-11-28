import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import { computeNextOpenSet } from "./utils/toggleItem";

export type FAQItem = {
  question: string;
  answer: React.ReactNode;
  id?: string;
};

type Props = {
  items: FAQItem[];
  singleOpen?: boolean;
};

export default function FAQ({ items, singleOpen = false }: Props) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenSet((prev) => computeNextOpenSet(prev, index, singleOpen));
  };

  return (
    <div className={styles.container} data-name="faq-container">
      {items.map((it, idx) => {
        const panelId = it.id ?? `faq-panel-${idx}`;
        const questionId = `faq-question-${idx}`;
        const isOpen = openSet.has(idx);

        return (
          <div
            className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
            key={idx}
            data-name={`faq-item-${idx}`}
          >
            <button
              id={questionId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              className={styles.questionButton}
              onClick={() => toggle(idx)}
              type="button"
              data-name={`faq-question-button-${idx}`}
            >
              <span
                className={styles.questionText}
                data-name={`faq-question-text-${idx}`}
              >
                {it.question}
              </span>
              <span
                className={styles.icon}
                aria-hidden
                data-name={`faq-question-icon-${idx}`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={questionId}
              className={`${styles.answer} ${isOpen ? styles.open : ""}`}
              data-name={`faq-answer-panel-${idx}`}
            >
              <div
                className={styles.answerInner}
                data-name={`faq-answer-inner-${idx}`}
              >
                {it.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
