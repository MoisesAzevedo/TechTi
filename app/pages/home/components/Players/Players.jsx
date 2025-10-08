"use client";

import React, { useState, useEffect } from "react";
import styles from "./Players.module.scss";
import PLayersSlider from "../PlayersSlider/PlayersSlider";

const Players = () => {
  return (
    <div className={styles.players_container} data-name="players-container">
      <div className={styles.pLayers_text} data-name="players-text">
        <h2 data-name="players-title">Contamos com os melhores player’s</h2>
        <p data-name="players-subtitle">
          Parceiros tecnológicos líderes que impulsionam sua transformação digital
        </p>
      </div>
      <div className={styles.player_slide} data-name="players-slider">
        <PLayersSlider />
      </div>
    </div>
  );
};

export default Players;
