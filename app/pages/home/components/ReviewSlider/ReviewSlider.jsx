"use client";

import styles from "./reviewSlider.module.scss";
import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [checked, setChecked] = useState(1);
  const [sec, setSec] = useState(7000);

  const cards = Array(3).fill(null);

  //counter
  useEffect(() => {
    const intervalo = setInterval(() => {
      proximaImg();
    }, sec);

    return () => clearInterval(intervalo);
  }, [sec]);

  const proximaImg = () => {
    setChecked((check) => (check === 4 ? 1 : check + 1));
  };

  return (
    <section className={styles.slider}>
      <div className={styles.slider_content}>
        <input
          type="radio"
          name="btn-radio-review"
          id="radio1-review"
          className={styles.radio1_review}
          checked={checked === 1}
          onChange={() => {
            setChecked(1);
          }}
        />
        <input
          type="radio"
          name="btn-radio-review"
          id="radio2-review"
          className={styles.radio2_review}
          checked={checked === 2}
          onChange={() => {
            setChecked(2);
          }}
        />
        <input
          type="radio"
          name="btn-radio-review"
          id="radio3-review"
          className={styles.radio3_review}
          checked={checked === 3}
          onChange={() => {
            setChecked(3);
          }}
        />
        <input
          type="radio"
          name="btn-radio-review"
          id="radio4-review"
          className={styles.radio4_review}
          checked={checked === 4}
          onChange={() => {
            setChecked(4);
          }}
        />

        <section
          className={styles.card_area}
          onMouseEnter={() => {
            setSec(6000000);
          }}
          onMouseLeave={() => {
            setSec(7000);
          }}
        >
          <div className={styles.primeiro}>
            <div className={styles.card1}>
              <div className="flex items-center text-[10px] gap-[10px] mt-[120px]">
                <img src="/icons/dot.png" className="w-[8px] h-[8px]" />
                <p className="text-[10px]">Serviço</p>
              </div>
              <p className="text-[14px] w-[170px] h-[105px]">
                Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
                laborum accusantium rem quia eaque.
              </p>
              <h1 className="text-[14px] text-white">Nome Sobrenome</h1>
              <div className="flex text-[10px] gap-[5px]">
                <p>Cargo</p>
                <p>|</p>
                <p>Empresa</p>
              </div>
            </div>

            <div className={styles.card2}>
              <video
                src="/videos/depoimento.mp4"
                controls
                className="h-[250px] mt-[5px]"
              ></video>

              <div className="pl-[10px]">
                <div className="flex items-center text-[10px] gap-[10px] ">
                  <img
                    src="/icons/dot_secondary.png"
                    className="w-[8px] h-[8px]"
                  />
                  <p className="text-[10px]">Serviço</p>
                </div>
                <h3 className="text-[14px] text-[rgba(0, 34, 176, 1)] font-normal">
                  Nome Sobrenome
                </h3>
                <div className="flex text-[10px] gap-[5px]">
                  <p>Cargo</p>
                  <p>|</p>
                  <p>Empresa</p>
                </div>
              </div>
            </div>
          </div>

          {cards.map((_, index) => (
            <div key={index} className={styles.slide_box}>
              <div className={styles.card1}>
                <div className="flex items-center text-[10px] gap-[10px] mt-[120px]">
                  <img src="/icons/dot.png" className="w-[8px] h-[8px]" />
                  <p className="text-[10px]">Serviço</p>
                </div>
                <p className="text-[14px] w-[170px] h-[105px]">
                  Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
                  laborum accusantium rem quia eaque.
                </p>
                <h1 className="text-[14px] text-white">Nome Sobrenome</h1>
                <div className="flex text-[10px] gap-[5px]">
                  <p>Cargo</p>
                  <p>|</p>
                  <p>Empresa</p>
                </div>
              </div>

              <div className={styles.card2}>
                <video
                  src="/videos/depoimento.mp4"
                  controls
                  className="h-[250px] mt-[5px]"
                ></video>

                <div className="pl-[10px]">
                  <div className="flex items-center text-[10px] gap-[10px] ">
                    <img
                      src="/icons/dot_secondary.png"
                      className="w-[8px] h-[8px]"
                    />
                    <p className="text-[10px]">Serviço</p>
                  </div>
                  <h3 className="text-[14px] text-[rgba(0, 34, 176, 1)] font-normal">
                    Nome Sobrenome
                  </h3>
                  <div className="flex text-[10px] gap-[5px]">
                    <p>Cargo</p>
                    <p>|</p>
                    <p>Empresa</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.navigation_area}>
          {/* automatic navigation */}
          <div className={styles.nav_auto}>
            <div className={styles.auto_btn1}> </div>
            <div className={styles.auto_btn2}></div>
            <div className={styles.auto_btn3}></div>
            <div className={styles.auto_btn4}></div>
          </div>

          {/* manual navigation */}
          <div className={styles.nav_manual}>
            <div
              onMouseEnter={() => {
                setSec(6000000);
              }}
              onMouseLeave={() => {
                setSec(7000);
              }}
            >
              <label
                htmlFor="radio1-review"
                className={styles.manual_btn}
              ></label>
              <label
                htmlFor="radio2-review"
                className={styles.manual_btn}
              ></label>
              <label
                htmlFor="radio3-review"
                className={styles.manual_btn}
              ></label>
              <label
                htmlFor="radio4-review"
                className={styles.manual_btn}
              ></label>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Slider;
