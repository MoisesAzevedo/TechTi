"use client";

import React from "react";
import styles from "./PlayerCard.module.scss";

const PlayerCard = ({ src, alt }) => {
  return (
    <div className={styles.player_card} data-name={`player-card-${alt}`}>
      <img src={src} alt={alt} data-name={`player-img-${alt}`} />
    </div>
  );
};

export default PlayerCard;
