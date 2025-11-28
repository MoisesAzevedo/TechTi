"use client";

import styles from "./clientSlider.module.scss";
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
    <section className={styles.slider} data-name="client-slider">
      <div className={styles.slider_content} data-name="slider-content">
        <input
          data-name="radio1-input"
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
          data-name="radio2-input"
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
          data-name="radio3-input"
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
          data-name="radio4-input"
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
          data-name="card-area"
          onMouseEnter={() => {
            setSec(6000000);
          }}
          onMouseLeave={() => {
            setSec(7000);
          }}
        >
          <div className={styles.primeiro} data-name="primeiro">
            <div className={styles.card1} data-name="primary-card">
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

            <div className={styles.card1} data-name="primary-card-copy">
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
          </div>

          {cards.map((_, index) => (
            <div
              key={index}
              className={styles.slide_box}
              data-name={`slide-box-${index}`}
            >
              <div className={styles.card1} data-name={`slide-card-${index}`}>
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

              <div
                className={styles.card1}
                data-name={`slide-card-copy-${index}`}
              >
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
            </div>
          ))}
        </section>

        <section className={styles.navigation_area} data-name="navigation-area">
          {/* automatic navigation */}
          <div className={styles.nav_auto} data-name="nav-auto">
            <div className={styles.auto_btn1} data-name="auto-btn-1">
              {" "}
            </div>
            <div className={styles.auto_btn2} data-name="auto-btn-2"></div>
            <div className={styles.auto_btn3} data-name="auto-btn-3"></div>
            <div className={styles.auto_btn4} data-name="auto-btn-4"></div>
          </div>

          {/* manual navigation */}
          <div className={styles.nav_manual} data-name="nav-manual">
            <div
              onMouseEnter={() => {
                setSec(6000000);
              }}
              onMouseLeave={() => {
                setSec(7000);
              }}
            >
              <label
                data-name="manual-btn-1"
                htmlFor="radio1-review"
                className={styles.manual_btn}
              ></label>
              <label
                data-name="manual-btn-2"
                htmlFor="radio2-review"
                className={styles.manual_btn}
              ></label>
              <label
                data-name="manual-btn-3"
                htmlFor="radio3-review"
                className={styles.manual_btn}
              ></label>
              <label
                data-name="manual-btn-4"
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
