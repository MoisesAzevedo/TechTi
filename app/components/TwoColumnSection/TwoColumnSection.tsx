"use client";

import React from "react";
import styles from "./TwoColumnSection.module.scss";

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftText?: string;
  rightTitle?: string;
  rightText?: string;
  className?: string;
}

export default function TwoColumnSection({
  left,
  right,
  leftText,
  rightTitle,
  rightText,
  className = "",
}: Props) {
  const leftDefault = (
    <>
      <h3 data-name="twoColumn-left-default-title">Lorem Ipsum</h3>
      <p data-name="twoColumn-left-default-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        sollicitudin, magna at feugiat efficitur, lectus urna faucibus sapien,
        at convallis arcu lorem a justo. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
    </>
  );

  const rightDefault = (
    <>
      <h3 data-name="twoColumn-right-default-title">Lorem Ipsum</h3>
      <p data-name="twoColumn-right-default-text">
        Ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum,
        nunc in commodo gravida, arcu nisl finibus urna, sed feugiat odio mi
        vitae nisl. Phasellus euismod, sapien non porttitor cursus, arcu nibh
        dictum orci, sit amet luctus purus risus ac justo.
      </p>
    </>
  );

  const leftFromTexts = leftText ? (
    <p data-name="twoColumn-left-text" className={styles.leftText}>
      {leftText}
    </p>
  ) : null;

  const rightFromTexts =
    rightTitle || rightText ? (
      <>
        {rightTitle && <h3 data-name="twoColumn-right-title">{rightTitle}</h3>}
        {rightText && <p data-name="twoColumn-right-text">{rightText}</p>}
      </>
    ) : null;

  const leftContent = left ?? leftFromTexts ?? leftDefault;
  const rightContent = right ?? rightFromTexts ?? rightDefault;

  return (
    <section
      data-name="twoColumn-section"
      className={`${styles.section} ${className}`.trim()}
    >
      <div data-name="twoColumn-container" className={styles.container}>
        <div
          data-name="twoColumn-leftColumn"
          className={`${styles.column} ${styles.leftColumn}`}
        >
          {leftContent}
        </div>
        <div data-name="twoColumn-rightColumn" className={styles.column}>
          {rightContent}
        </div>
      </div>
    </section>
  );
}
