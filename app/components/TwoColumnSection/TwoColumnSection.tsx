"use client";

import styles from "./TwoColumnSection.module.scss";
import React from "react";

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftText?: string;
  rightText?: {
    title?: string;
    items: { title?: string; text: string }[];
  };
  className?: string;
}

export default function TwoColumnSection({
  left,
  right,
  leftText,
  rightText,
  className = "",
}: Props) {
  const leftFromTexts = leftText ? (
    <p data-name="twoColumn-left-text" className={styles.leftText}>
      {leftText}
    </p>
  ) : null;

  const rightFromTexts = rightText?.items?.length ? (
    <>
      {rightText.title && (
        <h2 data-name="twoColumn-right-title" className={styles.rightTitle}>
          {rightText.title}
        </h2>
      )}
      {rightText.items.map((it, idx) => (
        <div key={idx} className={styles.rightItem}>
          {it.title && (
            <h3 data-name={`twoColumn-right-item-title-${idx}`}>{it.title}</h3>
          )}
          <p data-name={`twoColumn-right-item-text-${idx}`}>{it.text}</p>
        </div>
      ))}
    </>
  ) : null;

  return (
    <div
      data-name="twoColumn-container"
      className={`${styles.container} ${className}`}
    >
      <div data-name="twoColumn-left" className={styles.left}>
        {left || leftFromTexts}
      </div>
      <div data-name="twoColumn-right" className={styles.right}>
        {right || rightFromTexts}
      </div>
    </div>
  );
}
