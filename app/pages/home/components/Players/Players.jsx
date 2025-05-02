"use client";

import React, { useState, useEffect } from "react";
import styles from "./Players.module.scss";
import PLayersSlider from "../PlayersSlider/PlayersSlider";

const Players = () => {
  return (
    <div className={styles.players_container}>
      <div className={styles.pLayers_text}>
        <h2>Contamos com os melhores player’s</h2>
        <p>
          Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed laborum
          accusantium.
        </p>
      </div>
      <div className={styles.player_slide}>
        <PLayersSlider />
      </div>
    </div>
  );
};

export default Players;
