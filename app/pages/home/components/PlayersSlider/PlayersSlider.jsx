"use client";

import styles from "./pLayersSlider.module.scss";
import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const PlayersSlider = () => {
  const [playersChecked, setPlayersChecked] = useState(1);

  // Lista de logos localizada em public/cases/players
  const playersCards = [
    // Top 7 mais relevantes no Brasil para este assunto
    { src: "/cases/players/hp-seeklogo.png", alt: "hp" },
    { src: "/cases/players/Cisco_logo.png", alt: "cisco" },
        { src: "/cases/players/Microsoft_Azure_Logo.png", alt: "microsoft-azure" },
    { src: "/cases/players/Fortinet_logo.png", alt: "fortinet" },
    { src: "/cases/players/dell-seeklogo.png", alt: "dell" },

    { src: "/cases/players/lenovo-seeklogo.png", alt: "lenovo" },
    { src: "/cases/players/Schneider_Electric_2007.png", alt: "schneider" }
  ];

  return (
    <section className={styles.players}>
      {/*   //invisible radios to css manipulation */}
  <div className={styles.players_slider_container} data-name="players-slider-container">
        <input
          type="radio"
          name="players-btn-radio-review"
          id="players-radio1"
          className={styles.radio1_players}
          checked={playersChecked === 1}
          onChange={() => {
            setPlayersChecked(1);
          }}
        />

        <input
          type="radio"
          name="players-btn-radio-review"
          id="players-radio2"
          className={styles.radio2_players}
          checked={playersChecked === 2}
          onChange={() => {
            setPlayersChecked(2);
          }}
        />
        <input
          type="radio"
          name="players-btn-radio-review"
          id="players-radio3"
          className={styles.radio3_players}
          checked={playersChecked === 3}
          onChange={() => {
            setPlayersChecked(3);
          }}
        />
        <input
          type="radio"
          name="players-btn-radio-review"
          id="players-radio4"
          className={styles.radio4_players}
          checked={playersChecked === 4}
          onChange={() => {
            setPlayersChecked(4);
          }}
        />

        {/*  //cards */}
        <section className={styles.players_card_area} data-name="players-card-area">
          <div className={styles.slider_items} data-name="players-slider-items">
            {playersCards.map((card, index) => (
              <div className={styles.players_slide_box} key={card.alt} data-name={`players-slide-box-${index}`}>
                <PlayerCard src={card.src} alt={card.alt} />
              </div>
            ))}
          </div>
        </section>
        {/*         //visible inputs, */}
        <section className={styles.players_navigation_area}>
          {/* automatic navigation */}
          <div className={styles.players_nav_auto}>
            <div className={styles.players_auto_btn1}> </div>
            <div className={styles.players_auto_btn2}></div>
            <div className={styles.players_auto_btn3}></div>
            <div className={styles.players_auto_btn4}></div>
          </div>

          {/* manual navigation */}
          <div className={styles.players_nav_manual}>
            <div>
              <label
                htmlFor="players-radio1"
                className={styles.players_manual_btn}
              ></label>
              <label
                htmlFor="players-radio2"
                className={styles.players_manual_btn}
              ></label>
              <label
                htmlFor="players-radio3"
                className={styles.players_manual_btn}
              ></label>
              <label
                htmlFor="players-radio4"
                className={styles.players_manual_btn}
              ></label>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PlayersSlider;
