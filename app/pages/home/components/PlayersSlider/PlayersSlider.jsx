"use client";

import styles from "./pLayersSlider.module.scss";
import React, { useState, useEffect, useRef } from "react";

const PlayersSlider = () => {
  const [playersChecked, setPlayersChecked] = useState(1);
  const playersCards = [
    { name: "one" },
    { name: "two" },
    { name: "three" },
    { name: "for" },
    { name: "five" }
  ];

  return (
    <section className={styles.players}>
      {/*   //invisible radios to css manipulation */}
      <div className={styles.players_slider_container}>
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
        <section className={styles.players_card_area}>
          <div className={styles.slider_items}>
            <div className={styles.players_first}>
              <div className={styles.players_card1}>
                <div>hello</div>
              </div>
            </div>

            {playersCards.map((arr, index) => (
              <div className={styles.players_slide_box}>
                <div className={styles.players_card1}>
                  <div>{arr.name}</div>
                </div>
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
